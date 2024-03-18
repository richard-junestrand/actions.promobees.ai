import { AdAccount } from 'facebook-nodejs-business-sdk';
import { customError } from './errorUtil';
import { ActionOutputErrorOrData } from '../handler';
import axios from 'axios';

const baseUrl = 'https://graph.facebook.com/v19.0'

export async function generatePreview(intl: any, section: string, adAccount: AdAccount, param: any): Promise<ActionOutputErrorOrData<any>> {
  return adAccount.getGeneratePreviews([], param).then(r => {
    return { data: r.map(rr => rr._data) };
  }).catch(async err => {
    return { error: await customError(intl, 100080, section, [err?.response?.error_user_msg || err]) }
  })
}

export async function getAdPreview(intl: any, section: string, token: string, id: string): Promise<ActionOutputErrorOrData<any>> {
  return axios.get(`${baseUrl}/${id}/previews`, {
    params: {
      access_token: token,
      ad_format: 'DESKTOP_FEED_STANDARD'
    }
  }).then(r => {
    return { data: r.data.data }
  }).catch(async err => {
    return { error: await customError(intl, 100080, section, [err?.response?.error_user_msg || err]) }
  })
}

export async function exchangeToken(intl: any, section: string, token: string): Promise<ActionOutputErrorOrData<any>> {
  return axios.get(`${baseUrl}/oauth/access_token`, {
    params: {
      grant_type: 'fb_exchange_token',
      client_id: process.env.META_APP_ID || '',
      client_secret: process.env.META_APP_SECRET || '',
      fb_exchange_token: token
    }
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 600050, section) }
  })
}

export async function getAppToken(intl: any, section: string): Promise<ActionOutputErrorOrData<any>> {
  return axios.get(`${baseUrl}/oauth/access_token`, {
    params: {
      grant_type: 'client_credentials',
      client_id: process.env.META_APP_ID || '',
      client_secret: process.env.META_APP_SECRET || ''
    }
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 600100, section) }
  })
}

export async function searchLocations(intl: any, section: string, token: string, keyword: string): Promise<ActionOutputErrorOrData<any>> {
  const type= 'adgeolocation'
  return axios.get(`${baseUrl}/search`, {
    params:
    {
      access_token: token,
      type,
      location_types: ["city","country","country_group","region","zip"],
      q: keyword
    }
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 600090, section, [type]) }
  })
}

export async function searchInterests(intl: any, section: string, token: string, keyword: string): Promise<ActionOutputErrorOrData<any>> {
  const type= 'adinterest'
  return axios.get(`${baseUrl}/search`, {
    params:
    {
      access_token: token,
      type,
      q: keyword
    }
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 600090, section, [type]) }
  })
}

export async function getMe(intl: any, section: string, token: string): Promise<ActionOutputErrorOrData<any>> {
  return axios.get(`${baseUrl}/me`, {
    params: {
      access_token: token
    }
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 600060, section) }
  })
}

export async function getAdAccounts(intl: any, section: string, token: string): Promise<ActionOutputErrorOrData<any>> {
  return axios.get(`${baseUrl}/me/adaccounts`, {
    params: {
      access_token: token,
      fields: 'name'
    }
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 600070, section) }
  })
}

export async function getAccounts(intl: any, section: string, token: string): Promise<ActionOutputErrorOrData<any>> {
  return axios.get(`${baseUrl}/me/accounts`, {
    params: {
      access_token: token
    }
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 600070, section) }
  })
}