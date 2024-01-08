import { ActionOutputError, Nullable, UpdateInput } from '../../handler';
import { CampaignInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkName, checkCampaignType, checkId } from './util';
import { IntlShape } from '@formatjs/intl';
import { Campaign } from '../../db/generated';
import { changedSet } from '../../db/util';

export type CampaignUpdateInput = CampaignInput & UpdateInput<Campaign>

const campaignUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignUpdateInput, def: MutationDefinition, session: HasuraSession, validated: boolean = false): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignUpdate";
  //
  const err = await checkId(intl, isDev, section, data, session);
  if (err) {
    return err;
  }
  //
  const updateCall = await def.newCall();
  let updateSet = changedSet();
  //
  if (data.hasOwnProperty('campaign_name')) {
    const err = await checkName(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, campaign_name: data.campaign_name };
  }
  if (data.hasOwnProperty('campaign_type_id')) {
    const err = await checkCampaignType(intl, isDev, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, campaign_type_id: data.campaign_type_id };
  }
  //
  if (data.hasOwnProperty('source')) {
    updateSet = { ...updateSet, source: data.source };
  }
  if (data.hasOwnProperty('data')) {
    updateSet = { ...updateSet, data: data.data };
  }
  if (data.hasOwnProperty('specification')) {
    updateSet = { ...updateSet, specification: data.specification };
  }
  if (data.hasOwnProperty('budget')) {
    updateSet = { ...updateSet, budget: data.budget };
  }
  //
  updateCall.parameter = `$id_${updateCall.idx}: bigint!, $p_${updateCall.idx}: campaign_set_input`;
  updateCall.command = `
    data: update_campaign_by_pk(pk_columns: {id: $id_${updateCall.idx}}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {};
  updateVariable[`id_${updateCall.idx}`] = data.id;
  updateVariable[`p_${updateCall.idx}`] = updateSet;
  updateCall.variable = updateVariable;
  return null;
};
export default campaignUpdateValidateAndPrepare;