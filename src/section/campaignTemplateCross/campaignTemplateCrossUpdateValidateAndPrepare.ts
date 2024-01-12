import { CampaignTemplateCrossInput } from '.';
import { HasuraSession } from '../../handler/session';
import { checkId, checkOrderBy } from './util';
import { MutationDefinition } from '../../db';
import { ActionOutputError, Nullable, UpdateInput } from '../../handler';
import { Campaign_Template_Cross } from '../../db/generated';
import { IntlShape } from "@formatjs/intl";

export type CampaignTemplateCrossUpdateInput = CampaignTemplateCrossInput & UpdateInput<Campaign_Template_Cross>;

const campaignTemplateCrossUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignTemplateCrossUpdateInput, def: MutationDefinition, session: HasuraSession, organizationId: number): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignTemplateCrossUpdate";
  //
  const err = await checkId(intl, isDev, section, data);
  if (err) {
    return err
  }
  //
  const updateCall = await def.newCall();
  let updateSet = {};
  //
  if (data.hasOwnProperty('specification')) {
    updateSet = { ...updateSet, specification: data.specification };
  }
  //
  if (data.hasOwnProperty('order_by')) {
    const err = await checkOrderBy(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, order_by: data.order_by };
  }
  //
  updateCall.parameter = `$id_${updateCall.idx}: Int!, $p_${updateCall.idx}: campaign_template_cross_set_input`;
  updateCall.command = `
    data_${updateCall.idx}: update_campaign_template_cross_by_pk(pk_columns: {id: $id_${updateCall.idx}}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {};
  updateVariable[`id_${updateCall.idx}`] = data.id;
  updateVariable[`p_${updateCall.idx}`] = updateSet;
  updateCall.variable = updateVariable;
  return null;
};

export default campaignTemplateCrossUpdateValidateAndPrepare;
