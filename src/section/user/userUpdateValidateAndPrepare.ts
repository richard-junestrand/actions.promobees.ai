import { UserInput, UserOrganizationRoleInput } from "."
import { MutationDefinition } from "../../db"
import { User } from "../../db/generated"
import { changedSet } from "../../db/util"
import { ActionOutputError, Nullable, RelListInput, UpdateInput } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { checkList } from "../../util/dataUtil"
import { customError } from "../../util/errorUtil"
import { Role } from "../../util/roleUtil"
import { ErrorDatabase } from "../../util/stringUtil"
import { getUserOrganizationRole } from "./query"
import userOrganizationRoleInsertIfNotExistValidateAndPrepare from "./userOrganizationRoleInsertIfNotExistValidateAndPrepare"
import { checkFirstName, checkId, checkInitials, checkLastName, checkPhone } from "./util"
import { IntlShape } from '@formatjs/intl';

export type UserUpdateInput = UserInput & UpdateInput<User> & {
  user_organization_roles: RelListInput<UserOrganizationRoleInput>
}

const userUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: UserUpdateInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "userUpdate"

  const errOrData = await checkId(intl, isDev, section, data)
  if (errOrData.error) {
    return errOrData.error
  }
  data.db = errOrData.data
  //check current user roles
  const orgRoles = session.organizations.filter(r => r.user_organization_roles.some(rr => rr.role_id <= Role.OrganizationAdministration))
    .map(r => ({
      organization_id: r.id,
      role_id: r.user_organization_roles[0].role_id
    }));
  if (session.userId !== data.id) {    
    if (orgRoles.length === 0) {
      return await customError(intl, 1, section);
    } else {
      const err=await Promise.all(orgRoles.map(async r => {
        const { errors, data: dataDb } = await getUserOrganizationRole(data.id, r.organization_id);
        if (errors) {
          isDev && console.log(errors[0]);
          return Promise.reject(await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })]))
        }
        if(dataDb.data.length===0 || dataDb.data[0].role_id<r.role_id){
          return Promise.reject(await customError(intl, 1, section));
        }
        return null
      })).then(r => null).catch(err => err);
      if(err){
        return err;
      }
    }
  }
  //
  let updateSet = changedSet();

  if (data.hasOwnProperty('first_name')) {
    const err = await checkFirstName(intl, section, data)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, first_name: data.first_name }
  }

  if (data.hasOwnProperty('last_name')) {
    const err = await checkLastName(intl, section, data)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, last_name: data.last_name }
  }

  if (data.hasOwnProperty('initials')) {
    const err = await checkInitials(intl, section, data)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, initials: data.initials }
  }

  if (data.hasOwnProperty('phone')) {
    const err = await checkPhone(intl, section, data)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, phone: data.phone }
  }
  //
  if (data.hasOwnProperty('user_organization_roles')) {
    const rows = data.user_organization_roles.data;
    //
    const orgIds = rows.map(r => r.organization_id);
    const errOrDeleteRowsCalls = await Promise.all(orgIds.map(async r => {
      if(!orgRoles.some(x => x.organization_id===r)){
        return Promise.reject(await customError(intl, 1, section))
      }
      return await def.newCall();
    })).then(r => ({ data: r, error: null })).catch(err => ({ error: err, data: null }));
    if (errOrDeleteRowsCalls.error) {
      return errOrDeleteRowsCalls.error
    }
    
    // Validate the children
    const err = await checkList(intl, section, rows, (r, i) => {
      r.user_id = data.id;
      return userOrganizationRoleInsertIfNotExistValidateAndPrepare(intl, isDev, r, def, session);
    })
    if (err) {
      return err;
    }
    //
    await Promise.all(orgIds.map(async (orgId, i) => {
      const deleteRowsCall = errOrDeleteRowsCalls.data[i]
      deleteRowsCall.parameter = `$org_id_${deleteRowsCall.idx}: Int,$role_ids_${deleteRowsCall.idx}: [Int!]`;
      deleteRowsCall.command = `
          data_${deleteRowsCall.idx}: delete_user_organization_role(where: {
            user_id: {_eq: $id}, 
            organization_id:{_eq:$org_id_${deleteRowsCall.idx}},
            role_id: {_nin: $role_ids_${deleteRowsCall.idx}}}) {
            affected_rows
          }`;
      deleteRowsCall.variable = {
        [`org_id_${deleteRowsCall.idx}`]: orgId,
        [`role_ids_${deleteRowsCall.idx}`]: rows.filter(r => r.organization_id === orgId).map(r => r.role_id)
      };
    }))
  }
  //
  const updateCall = await def.newCall()
  updateCall.parameter = `$id: Int!, $p_${updateCall.idx}: user_set_input`;
  updateCall.command = `
    data: update_user_by_pk(pk_columns: {id: $id}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {}
  updateVariable['id'] = data.id
  updateVariable[`p_${updateCall.idx}`] = updateSet
  updateCall.variable = updateVariable
  return null
}

export default userUpdateValidateAndPrepare