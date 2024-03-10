import { ConnectionInput, ConnectionType } from ".";
import { Connection } from "../../db/generated";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkDataBase, checkDataExistBase } from "../../util/dataUtil";
import { customError } from "../../util/errorUtil";
import { checkOrganizationDataBase, checkOrganizationIdBase } from "../organization/util";
import { ConnectionInsertInput } from "./connectionInsertValidateAndPrepare";
import { ConnectionQueryType, getConnection, getConnectionById, getConnectionTypeById } from "./query";
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';
import { exchangeToken, getAccounts, getAdAccounts, getMe } from "../../util/metaUtil";

export const checkConnectionBase = async (intl, isDev: boolean, section: string, val: number, errs: number[], type = ConnectionQueryType.Default,
    session?: HasuraSession, organizationId?: number,
    required = true): Promise<ActionOutputErrorOrData<Connection>> => {
    return checkOrganizationDataBase(intl, isDev, section, val, errs, v => getConnectionById(v, type), session, organizationId, required)
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Connection>,
    type = ConnectionQueryType.Default, session: HasuraSession): Promise<ActionOutputErrorOrData<Connection>> => {
    return await checkConnectionBase(intl, isDev, section, data.id, [170000, 170010], type, session);
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

export const checkCredentials = async (intl, section: string, data: ConnectionInput, type: number): Promise<Nullable<ActionOutputError>> => {
    if (type === ConnectionType.Meta) {
        if (!!data.credentials.accessToken) {
            if (!data.credentials.longAccessToken) {
                //Get a Long-Lived User Access Token
                const errOrToken = await exchangeToken(intl, section, data.credentials.accessToken);
                if (errOrToken.error) {
                    return errOrToken.error
                }
                data.credentials.longAccessToken = errOrToken.data
            }
            //
            var tasks = []
            if (!data.credentials.me) {
                tasks.push(getMe(intl, section, data.credentials.longAccessToken.access_token).then(r => {
                    if(r.error){
                        return r.error
                    }
                    data.credentials.me = r.data
                    return null
                }))
            }
            if (!data.credentials.adAccounts) {
                tasks.push(getAdAccounts(intl, section, data.credentials.longAccessToken.access_token).then(r => {
                    if(r.error){
                        return r.error
                    }
                    data.credentials.adAccounts = r.data
                    return null
                }))
            }
            if (!data.credentials.accounts) {
                tasks.push(getAccounts(intl, section, data.credentials.longAccessToken.access_token).then(r => {
                    if(r.error){
                        return r.error
                    }
                    data.credentials.accounts = r.data
                    return null
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

export const checkAdAccountId = async (intl, section: string, data: ConnectionInput, type: number): Promise<Nullable<ActionOutputError>> => {
    if (type === ConnectionType.Meta) {
        if (data.ad_account_id) {
            const m = (data?.credentials?.adAccounts?.data || []).find(r => r?.id === data.ad_account_id)
            if (!m) {
                return await customError(intl, 170100, section)
            }
        }
    }
    return null
}

export const initFbApi = async (intl, isDev: boolean, section: string, c: Connection, checkAdAccount = true): Promise<ActionOutputErrorOrData<AdAccount>> => {
    switch (c.connection_type_id) {
        case ConnectionType.Meta:
            if (!!!(c.credentials?.longAccessToken?.access_token)) {
                return { error: await customError(intl, 170120, section) }
            }
            if (checkAdAccount) {
                if ((c.credentials?.adAccounts?.data || []).length === 0) {
                    return { error: await customError(intl, 170090, section) }
                }
                if (!c.ad_account_id) {
                    return { error: await customError(intl, 170130, section) }
                }
                const api = FacebookAdsApi.init(c.credentials.longAccessToken.access_token);
                isDev && api.setDebug(true);
                return { data: new AdAccount(c.ad_account_id) }
            }
            break
    }
    return { data: null }
}