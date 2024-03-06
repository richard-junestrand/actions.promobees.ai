import { MutationDefinition } from "../../db"
import { ActionOutputError, Nullable, OrganizationIdInput, RelInput, UpdateInput, returnValue } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { checkDataExistBase, checkRelList } from "../../util/dataUtil"
import { customError } from "../../util/errorUtil"
import { Role, hasUserRole } from "../../util/roleUtil"
import userInsertValidateAndPrepare, { UserInsertInput } from "../user/userInsertValidateAndPrepare"
import { IntlShape } from '@formatjs/intl';
import { checkOrganizationId } from "./util"
import { OrganizationUserInput } from "."
import { getOrganizationUser } from "./query"
import { createAuth0UserIfNotExist, checkUserEmail } from "../user/util"
import userUpdateValidateAndPrepare from "../user/userUpdateValidateAndPrepare"
import organizationUserRoleInsertValidateAndPrepare from "../organizationUserRole/organizationUserRoleInsertValidateAndPrepare"

export type OrganizationUserInsertInput = OrganizationUserInput & OrganizationIdInput & {
  user?: RelInput<UserInsertInput>
  user_id?: number
}

const organizationUserInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: OrganizationUserInsertInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "organizationUserInsert"
  //
  let err = await checkOrganizationId(intl, section, data, session)
  if (err) {
    return err
  }
  //
  const errOrOrgSession = await session.getOrganization(intl, isDev, data.organization_id);
  if (errOrOrgSession.error) {
    return errOrOrgSession.error;
  }
  const organization = errOrOrgSession.data;
  //
  if (!hasUserRole(organization.role_ids, [Role.OrganizationAdministration])) {
    return await customError(intl, 1, section)
  }
  //

  data.user = data.user || { data: { user_email: null } }
  //
  let message;
  const errOrUser = await checkUserEmail(intl, isDev, section, data.user.data, false)
  if (errOrUser.error) {
    return errOrUser.error
  }
  if (errOrUser.data) {
    data.user_id = errOrUser.data.id;
    if (!errOrUser.data.external_user_id) {
      const errOrAuth0UserId = await createAuth0UserIfNotExist(intl, section, {
        ...data.user.data,
        password: process.env.AUTH0_DEFAULT_PASSWORD
      })
      if (errOrAuth0UserId.error) {
        return errOrAuth0UserId.error
      }
      message=errOrAuth0UserId.data.message
      err = await userUpdateValidateAndPrepare(intl, isDev, {
        id: data.user_id,
        external_user_id: errOrAuth0UserId.data.id
      }, def, session, true, {
        not_return_data: true
      })
    }
  }
  else {
    data.user.data.password = process.env.AUTH0_DEFAULT_PASSWORD;
    err = await userInsertValidateAndPrepare(intl, isDev, data.user.data, null, session)
    if (err) {
      return err
    }
    message=data.user.data.message
  }
  //
  if (data.user_id) {
    const errOrExist = await checkDataExistBase(intl, isDev, section, () => getOrganizationUser(data.user_id, data.organization_id));
    if (errOrExist.error) {
      return errOrExist.error
    }
    if (errOrExist.data) {
      return await customError(intl, 150040, section, [data.user_id, data.organization_id])
    }
  }
  //
  err = await checkRelList(intl, section, data.organization_user_roles, (r, i) =>
    organizationUserRoleInsertValidateAndPrepare(intl, isDev, r, null, session))
  if (err) {
    return err
  }
  //
  const { user_id, user, ...others } = data
  const call = await def.newCall()
  call.parameter = `$p_${call.idx}: organization_user_insert_input!`
  call.command = `
    data: insert_organization_user_one(object: $p_${call.idx}) {
      id
    }
  `
  const variable = {}
  variable[`p_${call.idx}`] = {
    ...others,
    ...user_id ? { user_id } : { user: { data: user.data.param } }
  }
  call.variable = variable
  //
  def.returnFieldCallback = (d) => ({
    id: d.id,
    message
  })
  return null
}

export default organizationUserInsertValidateAndPrepare