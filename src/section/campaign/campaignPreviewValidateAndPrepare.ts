import { ActionOutputError, ActionOutputErrorOrData, Nullable, returnValue } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { IntlShape } from '@formatjs/intl';
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';
import { checkCampaignType, checkConnection } from './util';
import { ConnectionQueryType } from '../connection/query';
import { generatePreview } from '../../util/fbUtil';
import { ConnectionType } from '../connection';
import { customError } from '../../util/errorUtil';
import { Connection } from '../../db/generated';
import { CampaignType } from '.';

export type CampaignPreviewInput = {
  campaign_type_id: number
  connection_id: number
  data: any
}

const campaignPreviewValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignPreviewInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignPreview";
  //
  const errOrType = await checkCampaignType(intl, isDev, section, data);
  if (errOrType.error) {
    return errOrType.error;
  }
  //
  const errOrConnection = await checkConnection(intl, isDev, section, data, ConnectionQueryType.Preview, session);
  if (errOrConnection.error) {
    return errOrConnection.error
  }
  if (errOrConnection.data.connection_type_id !== errOrType.data.connection_type_id) {
    return await customError(intl, 100110, section)
  }
  //
  const errOrAdAccount = await initApi(intl, isDev, section, errOrConnection.data)
  if (errOrAdAccount.error) {
    return errOrAdAccount.error
  }
  let ret = null
  if (errOrAdAccount.data) {
    const adAccount = errOrAdAccount.data
    //
    switch (data.campaign_type_id) {
      case CampaignType.MetaCarousel:
        const errOrData = await generatePreview(intl, section, adAccount, {
          creative: {
            object_story_spec: {
              link_data: {
                child_attachments: data.data.data.filter(r => !r.dont_use).slice(0, 10).map(r => ({
                  description: r.data.description,
                  link: r.data.link,
                  name: r.data.name,
                })),
                link: data.data?.extra?.link || ''
              },
              page_id: data.data?.extra?.page_id || ''
            }
          },
          ad_format: 'DESKTOP_FEED_STANDARD',
        });
        if (errOrData.error) {
          return errOrData.error
        }
        ret = errOrData.data;
        break
    }
  }
  return returnValue(def, {
    data: ret
  })
};
export default campaignPreviewValidateAndPrepare;

const initApi = async (intl, isDev: boolean, section: string, c: Connection): Promise<ActionOutputErrorOrData<AdAccount>> => {

  switch (c.connection_type_id) {
    case ConnectionType.Meta:
      if (!!!(c.credentials?.longAccessToken?.access_token)) {
        return { error: await customError(intl, 170140, section) }
      }
      if ((c.credentials?.adAccounts?.data || []).length === 0) {
        return { error: await customError(intl, 170150, section) }
      }
      if (!c.ad_account_id) {
        return { error: await customError(intl, 170130, section) }
      }
      const api = FacebookAdsApi.init(c.credentials.longAccessToken.access_token);
      isDev && api.setDebug(true);
      return { data: new AdAccount(c.ad_account_id) }
  }
  return { data: null }

}