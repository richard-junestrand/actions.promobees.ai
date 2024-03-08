import { AdAccount } from 'facebook-nodejs-business-sdk';
import { customError } from './errorUtil';
import { ActionOutputErrorOrData } from '../handler';

export async function generatePreview(intl: any, section: string, adAccount: AdAccount, param: any): Promise<ActionOutputErrorOrData<any>> {
  return adAccount.getGeneratePreviews([], param).then(r => {
    return { data: r.map(rr=>rr._data) };
  }).catch(async err => {
    return { error: await customError(intl, 100080, section, [err?.response?.error_user_msg || err]) }
  })
}