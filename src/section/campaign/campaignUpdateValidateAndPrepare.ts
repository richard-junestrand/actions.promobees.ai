import { ActionOutputError, Nullable, RelListInput, UpdateInput } from '../../handler';
import { CampaignInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkName, checkCampaignType, checkId, checkActive } from './util';
import { IntlShape } from '@formatjs/intl';
import { Campaign } from '../../db/generated';
import { changedSet } from '../../db/util';
import campaignTemplateCrossUpdateValidateAndPrepare, { CampaignTemplateCrossUpdateInput } from '../campaignTemplateCross/campaignTemplateCrossUpdateValidateAndPrepare';
import campaignTemplateCrossInsertValidateAndPrepare, { CampaignTemplateCrossInsertInput } from '../campaignTemplateCross/campaignTemplateCrossInsertValidateAndPrepare';
import { checkList } from '../../util/dataUtil';

export type CampaignUpdateInput = CampaignInput & UpdateInput<Campaign> & {
  campaign_template_crosses: RelListInput<CampaignTemplateCrossUpdateInput | CampaignTemplateCrossInsertInput>
}

const campaignUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignUpdateInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
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
  //
  if (data.hasOwnProperty('campaign_type_id')) {
    const err = await checkCampaignType(intl, isDev, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, campaign_type_id: data.campaign_type_id };
  }
  //
  if (data.hasOwnProperty('is_active')) {
    const err = await checkActive(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, is_active: data.is_active };
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
  if (data.hasOwnProperty('campaign_template_crosses')) {
    const rows = data.campaign_template_crosses.data;
    //
    const deleteRowsCall = await def.newCall();
    // Validate the children
    const err = await checkList(intl, section, rows, (r, i) => {
      r.campaign_id = data.id;
      if (r.hasOwnProperty('id')) {
        return campaignTemplateCrossUpdateValidateAndPrepare(intl, isDev, r as CampaignTemplateCrossUpdateInput, def, session, data.db.organization_id);

      } else {
        return campaignTemplateCrossInsertValidateAndPrepare(intl, isDev, r as CampaignTemplateCrossInsertInput, def, session, data.db.organization_id);
      }
    })
    if (err) {
      return err;
    }
    //
    const rowIds = rows.filter(r => r.hasOwnProperty('id')).map(r => (<CampaignTemplateCrossUpdateInput>r).id);

    deleteRowsCall.parameter = `$ids_${deleteRowsCall.idx}: [Int!]`;
    deleteRowsCall.command = `
        data_${deleteRowsCall.idx}: delete_campaign_template_cross(where: {campaign_id: {_eq: $id}, id: {_nin: $ids_${deleteRowsCall.idx}}}) {
          affected_rows
        }`;
    const variable = {};
    variable[`ids_${deleteRowsCall.idx}`] = rowIds;
    deleteRowsCall.variable = variable;
  }
  //
  updateCall.parameter = `$id: Int!, $p_${updateCall.idx}: campaign_set_input`;
  updateCall.command = `
    data: update_campaign_by_pk(pk_columns: {id: $id}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {};
  updateVariable['id'] = data.id;
  updateVariable[`p_${updateCall.idx}`] = updateSet;
  updateCall.variable = updateVariable;
  return null;
};
export default campaignUpdateValidateAndPrepare;