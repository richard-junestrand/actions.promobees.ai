import { ActionOutputError, Nullable, OrganizationIdInput } from '../../handler';
import { CampaignInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkName, checkCampaignType, checkActive } from './util';
import { IntlShape } from '@formatjs/intl';
import { checkOrganizationIdBase } from '../organization/util';

export type CampaignInsertInput = CampaignInput & OrganizationIdInput

const campaignInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignInsertInput, def: MutationDefinition, session: HasuraSession, validated: boolean = false): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignInsert";
  //
  let err = await checkOrganizationIdBase(intl, section, data.organization_id, [100000, 100010], session);
  if (err) {
    return err;
  }
  //
  err = await checkName(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkCampaignType(intl, isDev, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkActive(intl, section, data);
  if (err) {
    return err;
  }
  //
  const call = await def.newCall();
  call.parameter = `$p_${call.idx}: campaign_insert_input!`;
  call.command = `
    data: insert_campaign_one(object: $p_${call.idx}) {
      id
    }`;
  const variable = {};
  variable[`p_${call.idx}`] = data;
  call.variable = variable;
  return null;
};
export default campaignInsertValidateAndPrepare;