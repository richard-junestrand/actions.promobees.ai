import { MutationDefinition } from "../../db"
import { ActionOutputError, Nullable, RelInput, UpdateInput, returnValue } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { checkList } from "../../util/dataUtil"
import { customError } from "../../util/errorUtil"
import { Role, hasUserRole } from "../../util/roleUtil"
import userUpdateValidateAndPrepare from "../user/userUpdateValidateAndPrepare"
import { IntlShape } from '@formatjs/intl';
import { checkId } from "./util"
import { OrganizationUserInput } from "."
import { UserInput } from "../user"
import { OrganizationUserQueryType } from "./query"
import { Organization_User } from "../../db/generated"
import { changedSet } from "../../db/util"
import organizationUserRoleInsertValidateAndPrepare from "../organizationUserRole/organizationUserRoleInsertValidateAndPrepare"

export type OrganizationUserUpdateInput = OrganizationUserInput & UpdateInput<Organization_User> & {
  user?: RelInput<UserInput>
};


const organizationUserUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: OrganizationUserUpdateInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "organizationUserUpdate"
  //
  const errOrData = await checkId(intl, isDev, section, data, OrganizationUserQueryType.Update);
  if (errOrData.error) {
    return errOrData.error;
  }
  data.db = errOrData.data;
  //
  const errOrOrg = await session.getOrganization(intl, isDev, data.db.organization_id);
  if (errOrOrg.error) {
    return errOrOrg.error;
  }
  const organization = errOrOrg.data;
  //
  if (!hasUserRole(organization.role_ids, [Role.OrganizationAdministration])) {
    return await customError(intl,1, section)
  }
  //
  const updateCall = await def.newCall();
  let updateSet = changedSet();
  //
  if (data.hasOwnProperty('organization_user_roles')) {
    const dbRoleIds = data.db.organization_user_roles.map(r => r.role_id);
    const organizationUserRoles = data.organization_user_roles.data;
    //
    const deleteOrganizationUserRolesCall = await def.newCall();
    //
    const err = await checkList(intl, section, organizationUserRoles, (r, i) => {
      if (!dbRoleIds.includes(r.role_id)) {
        r.organization_user_id = data.id;
        return organizationUserRoleInsertValidateAndPrepare(intl, isDev, r, def, session, {
          not_return_data: true
        });
      }
      return null
    })
    if (err) {
      return err;
    }
    //delete
    deleteOrganizationUserRolesCall.parameter = `$id_${deleteOrganizationUserRolesCall.idx}:Int!,$role_ids_${deleteOrganizationUserRolesCall.idx}: [Int!]`;
    deleteOrganizationUserRolesCall.command = `
        data_${deleteOrganizationUserRolesCall.idx}: delete_organization_user_role(where: {organization_user_id: {_eq: $id_${deleteOrganizationUserRolesCall.idx}}, role_id: {_neq:10,_nin: $role_ids_${deleteOrganizationUserRolesCall.idx}}}) {
          affected_rows
        }`;
    const variable = {};
    variable[`id_${deleteOrganizationUserRolesCall.idx}`] = data.id;
    variable[`role_ids_${deleteOrganizationUserRolesCall.idx}`] = organizationUserRoles.filter(r => dbRoleIds.includes(r.role_id)).map(r => r.role_id);
    deleteOrganizationUserRolesCall.variable = variable;
  }
  //
  if (data.hasOwnProperty('user')) {
    const err = await userUpdateValidateAndPrepare(intl, isDev, {
      ...data.user.data,
      id: data.db.user_id
    }, def, session, false, {
      not_return_data: true,
      skip_check_user_id: true
    })
    if (err) {
      return err
    }
  }
  //
  updateCall.parameter = `$id_${updateCall.idx}: Int!, $p_${updateCall.idx}: organization_user_set_input`;
  updateCall.command = `
    data: update_organization_user_by_pk(pk_columns: {id: $id_${updateCall.idx}}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {};
  updateVariable[`id_${updateCall.idx}`] = data.id;
  updateVariable[`p_${updateCall.idx}`] = updateSet;
  updateCall.variable = updateVariable;
  return null;
}

export default organizationUserUpdateValidateAndPrepare