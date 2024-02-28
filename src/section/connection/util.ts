import axios from "axios";
import { ConnectionInput, ConnectionType } from ".";
import { Connection } from "../../db/generated";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkDataBase, checkDataExistBase } from "../../util/dataUtil";
import { customError } from "../../util/errorUtil";
import { checkOrganizationDataBase, checkOrganizationIdBase } from "../organization/util";
import { ConnectionInsertInput } from "./connectionInsertValidateAndPrepare";
import { ConnectionQueryType, getConnection, getConnectionById, getConnectionTypeById } from "./query";

export const checkConnectionBase = async (intl, isDev: boolean, section: string, val: number, errs: number[], type = ConnectionQueryType.Default, options?: any): Promise<ActionOutputErrorOrData<Connection>> => {
    return checkOrganizationDataBase(intl, isDev, section, val, errs, v => getConnectionById(v, type))
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Connection>,
    type = ConnectionQueryType.Default): Promise<ActionOutputErrorOrData<Connection>> => {
    return await checkConnectionBase(intl, isDev, section, data.id, [170000, 170010], type);
}

export const checkOrganizationId = async (intl, section: string, data: ConnectionInsertInput, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
    return await checkOrganizationIdBase(intl, section, data.organization_id, [170020, 170030], session)
}

export const checkType = async (intl, isDev: boolean, section: string, data: ConnectionInsertInput): Promise<Nullable<ActionOutputError>> => {
    const errOrData = await checkDataBase(intl, isDev, section, data.connection_type_id, [170050, 170060], getConnectionTypeById);
    if (errOrData.error) {
        return errOrData.error
    }
    const errOrExist = await checkDataExistBase(intl, isDev, section, () => getConnection(data.connection_type_id, data.organization_id));
    if (errOrExist.error) {
        return errOrExist.error
    }
    if (errOrExist.data) {
        return await customError(intl, 170040, section, [data.connection_type_id, data.organization_id])
    }
    return null
}

export const checkCredentials = async (intl, isDev: boolean, section: string, data: ConnectionInput, type: number): Promise<Nullable<ActionOutputError>> => {
    if (type === ConnectionType.Meta) {
        if (!!data.credentials.accessToken) {
            var tasks=[]
            if(!data.credentials.me){
                tasks.push(axios.get('https://graph.facebook.com/v19.0/me', {
                    params:
                    {
                        access_token: data.credentials.accessToken
                    }
                }).then(r => {
                    data.credentials.me = r.data
                    return null
                }).catch(async err => {
                    return await customError(intl, 170100, section)
                }))
            }
            if(!data.credentials.adAccounts){
                tasks.push(axios.get('https://graph.facebook.com/v19.0/me/adaccounts', {
                    params:
                    {
                        access_token: data.credentials.accessToken
                    }
                }).then(r => {
                    data.credentials.adAccounts = r.data
                    return null
                }).catch(async err => {
                    return await customError(intl, 170110, section)
                }))
            }
            if (!data.credentials.longAccessToken) {
                //Get a Long-Lived User Access Token
                tasks.push(axios.get('https://graph.facebook.com/v19.0/oauth/access_token', {
                    params:
                    {
                        grant_type: 'fb_exchange_token',
                        client_id: process.env.META_APP_ID || '',
                        client_secret: process.env.META_APP_SECRET || '',
                        fb_exchange_token: data.credentials.accessToken
                    }
                }).then(r => {
                    data.credentials.longAccessToken = r.data
                    return null
                }).catch(async err => {
                    return await customError(intl, 170090, section)
                }))
            }
            return await Promise.all(tasks)
                .then(r => {
                    return r.find(rr => rr) || null
                })
        }
    }
    return null
}