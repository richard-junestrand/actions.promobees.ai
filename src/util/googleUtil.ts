import { google } from 'googleapis';
import { ActionOutputErrorOrData } from '../handler';
import { customError } from './errorUtil';
import axios from 'axios';

export async function exchangeCode(intl: any, section: string, cre: any): Promise<ActionOutputErrorOrData<any>> {
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('client_id', process.env.GOOGLE_CLIENT_ID);
  params.append('client_secret', process.env.GOOGLE_CLIENT_SECRET);
  params.append('code', cre.code);
  params.append('redirect_uri', cre.origin);
  return axios.post('https://oauth2.googleapis.com/token', params).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 700000, section) }
  })
}

export async function getGoogleAdAccounts(intl: any, section: string, token: any): Promise<ActionOutputErrorOrData<any>> {
  return axios({
    method: 'get',
    url: 'https://googleads.googleapis.com/v16/customers:listAccessibleCustomers',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "developer-token": process.env.GOOGLE_DEVELOPER_TOKEN,
    }
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    return { error: await customError(intl, 700020, section) }
  })
}

export async function getGoogleMe(intl: any, section: string, token: any): Promise<ActionOutputErrorOrData<any>> {
  const people = google.people({
    version: 'v1',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return await people.people.get({
    resourceName: 'people/me',
    personFields: 'emailAddresses,names',
  }).then(r => {
    return { data: r.data }
  }).catch(async err => {
    //err?.response?.data?.error?.message || err
    return { error: await customError(intl, 700010, section) }
  })
}