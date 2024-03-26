import { MutationDefinition } from "../../db"
import { ActionOutputError, Nullable, RelInput, UpdateInput } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { customError } from "../../util/errorUtil"
import { Role, hasUserRole } from "../../util/roleUtil"
import { IntlShape } from '@formatjs/intl';
import { checkAdAccountId, checkCredentials, checkId } from "./util"
import { ConnectionInput } from "."
import { UserInput } from "../user"
import { Connection } from "../../db/generated"
import { changedSet } from "../../db/util"
import { ConnectionQueryType } from "./query"

export type ConnectionUpdateInput = ConnectionInput & UpdateInput<Connection> & {
  user?: RelInput<UserInput>
};


const connectionUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: ConnectionUpdateInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "connectionUpdate"
  //
  const errOrData = await checkId(intl, isDev, section, data, ConnectionQueryType.Update, session);
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
  if (!hasUserRole(organization.role_ids, [Role.OrganizationAdmin])) {
    return await customError(intl, 1, section)
  }
  //
  const updateCall = await def.newCall();
  let updateSet = changedSet();
  //
  data.info=data.db.info;
  if (data.hasOwnProperty('credentials')) {
    const err = await checkCredentials(intl, isDev, section, data, data.db.connection_type_id)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, credentials: data.credentials, info: data.info };
  }
  //
  if (data.hasOwnProperty('ad_account_id')) {
    const err = await checkAdAccountId(intl, section, data, data.db.connection_type_id)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, ad_account_id: data.ad_account_id };
  }
  //
  updateCall.parameter = `$id_${updateCall.idx}: Int!, $p_${updateCall.idx}: connection_set_input`;
  updateCall.command = `
    data: update_connection_by_pk(pk_columns: {id: $id_${updateCall.idx}}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {};
  updateVariable[`id_${updateCall.idx}`] = data.id;
  updateVariable[`p_${updateCall.idx}`] = updateSet;
  updateCall.variable = updateVariable;
  return null;
}

export default connectionUpdateValidateAndPrepare