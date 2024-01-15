import { ActionOutputError, Nullable, OrganizationIdInput, returnValue } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { IntlShape } from '@formatjs/intl';
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';
import { checkOrganizationId } from './util';
import { customError } from '../../util/errorUtil';

export type CampaignPreviewInput = OrganizationIdInput & {
  creative: any
}

const campaignPreviewValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignPreviewInput, def: MutationDefinition, session: HasuraSession, validated: boolean = false): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignPreview";
  //
  let err = await checkOrganizationId(intl, section, data, session);
  if (err) {
    return err;
  }
  //
  const access_token = 'EAAEVNInZAIP8BOyjqbbmqm8xjNq4tEd60QXOa0I5RAo408HBiRq5XQSIfci6ZA4YwjZBUh6XjMavZBGsKxRjQ3EKUVEVr6S2neyS3GI5BlEvLLvZCXI7zbVFvsahRjJ3A2jvdWItPicqcbdzuaegQ0kJLs9vh4YHIZA5cEcMmJHLbIlQyKdr6Jlb0ZA8e8DuLkxsdIrRgFgZBwR7BEIw';
  const id = 'act_101757620355129';
  const pageId = '145818095467993';
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
  const account=new AdAccount(id);
  return await account.getGeneratePreviews(
    fields,
    params
  ).then(r => {
    return returnValue(def, {
      data: r
    })
  }).catch(async err => {
    return await customError(intl, 100080, section,[err]);
  });
};
export default campaignPreviewValidateAndPrepare;