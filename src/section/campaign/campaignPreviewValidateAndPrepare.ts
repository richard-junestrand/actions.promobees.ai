import { ActionOutputError, Nullable, OrganizationIdInput, returnValue } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { IntlShape } from '@formatjs/intl';
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';
import { checkOrganizationId } from './util';
import { customError } from '../../util/errorUtil';
import { ConnectionQueryType } from '../connection/query';
import { checkOrganizationConnection } from '../connection/util';

export type CampaignPreviewInput = OrganizationIdInput & {
  data: any
}

const campaignPreviewValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignPreviewInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignPreview";
  //
  let err = await checkOrganizationId(intl, section, data, session);
  if (err) {
    return err;
  }
  //
  const errOrConnection = await checkOrganizationConnection(intl, isDev, section, data, ConnectionQueryType.Preview)
  if (errOrConnection.error) {
    return errOrConnection.error;
  }
  const api = FacebookAdsApi.init(errOrConnection.data.credentials.longAccessToken.access_token);
  isDev && api.setDebug(true);
  //
  const params = {
    'creative': {
      object_story_spec: {
        link_data: {
          child_attachments: data.data.data.filter(r => !r.dont_use).slice(0,10).map(r => ({
            description: r.data.description,
            image_url: imageVal(r.data),
            link: r.data.link,
            name: r.data.name,
          })),
          link: data.data?.extra?.link_more || ''
        },
        page_id: data.data?.extra?.page_id || ''
      }
    },
    'ad_format': 'DESKTOP_FEED_STANDARD',
  };
  const account = new AdAccount(errOrConnection.data.credentials.adAccounts.data[0].id);
  return await account.getGeneratePreviews(
    [],
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

function imageVal(r: any) {
  const val=r.image_list || r.image
  if(Array.isArray(val) && val.length>0){
      return val[0]
  }
  return val
}