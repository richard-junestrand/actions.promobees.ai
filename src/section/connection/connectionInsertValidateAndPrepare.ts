import { MutationDefinition } from "../../db"
import { ActionOutputError, Nullable, OrganizationIdInput } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { customError } from "../../util/errorUtil"
import { Role, hasUserRole } from "../../util/roleUtil"
import { IntlShape } from '@formatjs/intl';
import { checkCredentials, checkOrganizationId, checkType } from "./util"
import { ConnectionInput } from "."

export type ConnectionInsertInput = ConnectionInput & OrganizationIdInput & {
  connection_type_id: number
}

const connectionInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: ConnectionInsertInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "connectionInsert"
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
  if (!hasUserRole(organization.role_ids, [Role.OrganizationAdmin])) {
    return await customError(intl, 1, section)
  }
  //
  err = await checkType(intl, isDev, section, data)
  if (err) {
    return err
  }
  //
  err = await checkCredentials(intl, isDev, section, data, data.connection_type_id)
  if (err) {
    return err
  }
  //
  const call = await def.newCall()
  call.parameter = `$p_${call.idx}: connection_insert_input!`
  call.command = `
    data: insert_connection_one(object: $p_${call.idx}) {
      id
    }
  `
  const variable = {}
  variable[`p_${call.idx}`] = data
  call.variable = variable
  return null
}

export default connectionInsertValidateAndPrepare