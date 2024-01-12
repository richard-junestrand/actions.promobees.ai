import { CampaignTemplateCrossInput } from '.';
import { HasuraSession } from '../../handler/session';
import { checkTemplate, checkOrderBy } from './util';
import { MutationDefinition } from '../../db';
import { ActionOutputError, Nullable } from '../../handler';
import { IntlShape } from "@formatjs/intl";

export type CampaignTemplateCrossInsertInput = CampaignTemplateCrossInput;

const campaignTemplateCrossInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignTemplateCrossInsertInput, def: MutationDefinition, session: HasuraSession, organizationId: number): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignTemplateCrossInsert";
  //
  const errOrData = await checkTemplate(intl, isDev, section, data, organizationId);
  if (errOrData.error) {
    return errOrData.error;
  }
  //
  const err = await checkOrderBy(intl, section, data);
  if (err) {
    return err;
  }
  //
  if (def != null) {
    const call = await def.newCall();
    call.parameter = `$p_${call.idx}: campaign_template_cross_insert_input!`;
    call.command = `
      data_${call.idx}: insert_campaign_template_cross_one(object: $p_${call.idx}) {
        id
      }`;
    const variable = {};
    variable[`p_${call.idx}`] = data;
    call.variable = variable;
  }
  return null;
};

export default campaignTemplateCrossInsertValidateAndPrepare;
