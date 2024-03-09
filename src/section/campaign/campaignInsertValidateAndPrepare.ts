import { ActionOutputError, Nullable, OrganizationIdInput, RelListInput } from '../../handler';
import { CampaignInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkName, checkCampaignType, checkActive, checkOrganizationId, checkConnection } from './util';
import { IntlShape } from '@formatjs/intl';
import campaignTemplateCrossInsertValidateAndPrepare, { CampaignTemplateCrossInsertInput } from '../campaignTemplateCross/campaignTemplateCrossInsertValidateAndPrepare';
import { checkRelList } from '../../util/dataUtil';
import { ConnectionQueryType } from '../connection/query';
import { customError } from '../../util/errorUtil';

export type CampaignInsertInput = CampaignInput & OrganizationIdInput & {
  campaign_template_crosses: RelListInput<CampaignTemplateCrossInsertInput>
}

const campaignInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignInsertInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignInsert";
  //
  let err = await checkOrganizationId(intl, section, data, session);
  if (err) {
    return err;
  }
  //
  err = await checkName(intl, section, data);
  if (err) {
    return err;
  }
  //
  const errOrType = await checkCampaignType(intl, isDev, section, data);
  if (errOrType.error) {
    return errOrType.error;
  }
  //
  err = await checkActive(intl, section, data);
  if (err) {
    return err;
  }
  //
  const errOrConnection = await checkConnection(intl, isDev, section, data, ConnectionQueryType.Default, undefined, data.organization_id);
  if (errOrConnection.error) {
    return errOrConnection.error;
  }
  if(errOrConnection.data.connection_type_id !== errOrType.data.connection_type_id){
    return await customError(intl,100110,section)
  }
  // Validate the children
  err = await checkRelList(intl, section, data.campaign_template_crosses, 
    (r,idx)=>campaignTemplateCrossInsertValidateAndPrepare(intl, isDev, r, null, session, data.organization_id))
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