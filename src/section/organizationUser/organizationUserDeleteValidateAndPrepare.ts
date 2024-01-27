import { ActionOutputError, Nullable, UpdateInput } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkId } from './util';
import { IntlShape } from '@formatjs/intl';
import { Organization_User } from '../../db/generated';

export type OrganizationUserDeleteInput = UpdateInput<Organization_User>

const organizationUserDeleteValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: OrganizationUserDeleteInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "organizationUserDelete";
  //
  const errOrData = await checkId(intl, isDev, section, data);
  if (errOrData.error) {
    return errOrData.error;
  }
  //
  const deleteCall = await def.newCall();
  deleteCall.parameter = `$id_${deleteCall.idx}: Int!`;
  deleteCall.command = `
    data2_${deleteCall.idx}: delete_organization_user_role(where: {organization_user_id: {_eq: $id_${deleteCall.idx}}}){
      affected_rows
    }
    data: delete_organization_user_by_pk(id: $id_${deleteCall.idx}){
      id
    }`;
  const deleteVariable = {};
  deleteVariable[`id_${deleteCall.idx}`] = data.id;
  deleteCall.variable = deleteVariable;
  return null;
};
export default organizationUserDeleteValidateAndPrepare;