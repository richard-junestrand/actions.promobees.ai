import { ActionOutputError, Nullable, OrganizationIdInput, returnValue } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { IntlShape } from '@formatjs/intl';
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';
import { checkOrganizationId } from './util';
import { customError } from '../../util/errorUtil';
import { ConnectionQueryType, getConnection } from '../connection/query';
import { ConnectionType } from '../connection';
import { ErrorDatabase } from '../../util/stringUtil';
import { Connection } from '../../db/generated';

export type CampaignPreviewInput = OrganizationIdInput & {
  creative: any
}

const campaignPreviewValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignPreviewInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignPreview";
  //
  let err = await checkOrganizationId(intl, section, data, session);
  if (err) {
    return err;
  }
  //
  const { errors, data: dataConnection } = await getConnection(ConnectionType.Meta, data.organization_id, ConnectionQueryType.Preview)
  if (errors) {
    isDev && console.log(errors[0]);
    return await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })]);
  }
  if(dataConnection.data.length===0) {
    return await customError(intl, 100090, section, ['meta'])
  }
  const dbConnection: Connection=dataConnection.data[0]
  const access_token = dbConnection.credentials?.longAccessToken?.access_token || '';
  if(!!!access_token) {
    return await customError(intl, 100100, section)
  }
  const adAccounts = dbConnection.credentials?.adAccounts?.data || [];
  if(adAccounts.length===0){
    return await customError(intl, 100110, section)
  }
  const api = FacebookAdsApi.init(access_token);
  if (isDev) {
    api.setDebug(true);
  }

  const fields = [
  ];
  const params = {
    'creative': data.creative,
    'ad_format': 'DESKTOP_FEED_STANDARD',
  };
  const account = new AdAccount(adAccounts[0].id);
  return await account.getGeneratePreviews(
    fields,
    params
  ).then(r => {
    return returnValue(def, {
      data: r
    })
  }).catch(async r => {
    return await customError(intl, 100080, section, [r?.response?.error_user_msg || r?.response?.error_user_title || r?.message || r]);
  });
};
export default campaignPreviewValidateAndPrepare;