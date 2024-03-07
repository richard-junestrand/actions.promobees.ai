import { ActionOutputError, Nullable, UpdateInput } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkId } from './util';
import { IntlShape } from '@formatjs/intl';
import { Connection } from '../../db/generated';
import { customError } from '../../util/errorUtil';

export type ConnectionDeleteInput = UpdateInput<Connection>

const connectionDeleteValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: ConnectionDeleteInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "connectionDelete";
  //
  const errOrData = await checkId(intl, isDev, section, data);
  if (errOrData.error) {
    return errOrData.error;
  }
  //
  if (data.db.campaigns_aggregate.aggregate.count > 0) {
    return await customError(intl,170170, section)
  }
  //
  const deleteCall = await def.newCall();
  deleteCall.parameter = `$id_${deleteCall.idx}: Int!`;
  deleteCall.command = `
    data: delete_connection_by_pk(id: $id_${deleteCall.idx}){
      id
    }`;
  const deleteVariable = {};
  deleteVariable[`id_${deleteCall.idx}`] = data.id;
  deleteCall.variable = deleteVariable;
  return null;
};
export default connectionDeleteValidateAndPrepare;