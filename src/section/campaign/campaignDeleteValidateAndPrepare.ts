import { ActionOutputError, Nullable, UpdateInput } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkId } from './util';
import { IntlShape } from '@formatjs/intl';
import { Campaign } from '../../db/generated';

export type CampaignDeleteInput = UpdateInput<Campaign>

const campaignDeleteValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignDeleteInput, def: MutationDefinition, session: HasuraSession, validated: boolean = false): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignDelete";
  //
  const err = await checkId(intl, isDev, section, data, session);
  if (err) {
    return err;
  }
  //
  const deleteCall = await def.newCall();
  deleteCall.parameter = `$id_${deleteCall.idx}: Int!`;
  deleteCall.command = `
    data2_${deleteCall.idx}: delete_campaign_template_cross(where: {campaign_id: {_eq: $id_${deleteCall.idx}}}){
      affected_rows
    }
    data: delete_campaign_by_pk(id: $id_${deleteCall.idx}){
      id
    }`;
  const deleteVariable = {};
  deleteVariable[`id_${deleteCall.idx}`] = data.id;
  deleteCall.variable = deleteVariable;
  return null;
};
export default campaignDeleteValidateAndPrepare;