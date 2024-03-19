import { ActionOutputError, Nullable, returnValue } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { IntlShape } from '@formatjs/intl';
import { checkCampaignType, checkConnection } from './util';
import { ConnectionQueryType } from '../connection/query';
import { generatePreview, getAdPreview } from '../../util/metaUtil';
import { customError } from '../../util/errorUtil';
import { CampaignType } from '.';
import { initFbApi } from '../connection/util';

export type CampaignPreviewInput = {
  campaign_type_id: number
  connection_id: number
  data: any
  ad_id: string
}

const campaignPreviewValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignPreviewInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignPreview";
  //
  const errOrType = await checkCampaignType(intl, isDev, section, data);
  if (errOrType.error) {
    return errOrType.error;
  }
  //
  const errOrConnection = await checkConnection(intl, isDev, section, data, ConnectionQueryType.Credentials, session);
  if (errOrConnection.error) {
    return errOrConnection.error
  }
  if (errOrConnection.data.connection_type_id !== errOrType.data.connection_type_id) {
    return await customError(intl, 100110, section)
  }
  //
  const errOrFb = await initFbApi(intl, isDev, section, errOrConnection.data)
  if (errOrFb.error) {
    return errOrFb.error
  }
  let ret = null
  if (errOrFb.data) {
    
    //
    switch (data.campaign_type_id) {
      case CampaignType.MetaCarousel:
        if (data.ad_id) {
          const errOrData = await getAdPreview(intl, section, errOrFb.data.access_token, data.ad_id);
          if (errOrData.error) {
            return errOrData.error
          }
          ret = errOrData.data;
        } else {
          const adAccount = errOrFb.data.ad_account
          const thedata=data.data.data.filter(r => !r.dont_use).slice(0, 10)
          if(thedata.length===0){
            return await customError(intl, 100120, section)
          }
          const firstItem=thedata[0]
          if(firstItem.data.link===undefined){
            return await customError(intl, 100130, section, ['link'])
          }
          if(firstItem.data.name===undefined){
            return await customError(intl, 100130, section, ['name'])
          }
          if(firstItem.data.description===undefined){
            return await customError(intl, 100130, section, ['description'])
          }
          const errOrData = await generatePreview(intl, section, adAccount, {
            creative: {
              object_story_spec: {
                link_data: {
                  child_attachments: thedata.map(r => ({
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
        }

        break
    }
  }
  return returnValue(def, {
    data: ret
  })
};
export default campaignPreviewValidateAndPrepare;