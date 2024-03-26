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
import { exchangeToken, getAccounts, getMetaAdAccounts, getMetaMe } from "../../util/metaUtil";
import { executeGraphql } from "../../db/util";
import { ErrorDatabase } from "../../util/stringUtil";
import { exchangeCode, getGoogleAdAccounts, getGoogleMe } from "../../util/googleUtil";

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

const runTasksAndEncrypt = async (intl, isDev: boolean, section: string, data: ConnectionInput, tasks: any[]): Promise<Nullable<ActionOutputError>> => {
    if (tasks.length > 0) {
        const err = await Promise.all(tasks)
            .then(r => {
                return r.find(rr => rr) || null
            })
        if (err) {
            return err
        }
    }
    //
    const { errors, data: dataE } = await executeGraphql(`
    query ($data: jsonb) {
        data:encrypt_data(args: {_data: $data, _key: "connection"}){
            bytea_val
        }
    }
    `, {
        data: data.credentials
    });
    if (errors) {
        isDev && console.log(errors[0]);
        return await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })]);
    }
    data.credentials = dataE.data.bytea_val
    return null
}

export const checkCredentials = async (intl, isDev: boolean, section: string, data: ConnectionInput, type: number): Promise<Nullable<ActionOutputError>> => {
    switch (type) {
        case ConnectionType.Meta:
            if (data.credentials && !!data.credentials?.accessToken) {
                if (!data.credentials.longAccessToken) {
                    //Get a Long-Lived User Access Token
                    const errOrToken = await exchangeToken(intl, section, data.credentials.accessToken);
                    if (errOrToken.error) {
                        return errOrToken.error
                    }
                    data.credentials.longAccessToken = errOrToken.data
                }
                //
                data.info = {}
                const tasks = [getMetaMe(intl, section, data.credentials.longAccessToken.access_token).then(r => {
                    if (r.error) {
                        return r.error
                    }
                    data.info.me = r.data
                    return null
                }),
                getMetaAdAccounts(intl, section, data.credentials.longAccessToken.access_token).then(r => {
                    if (r.error) {
                        return r.error
                    }
                    data.info.adAccounts = r.data.data
                    return null
                }),
                getAccounts(intl, section, data.credentials.longAccessToken.access_token).then(r => {
                    if (r.error) {
                        return r.error
                    }
                    data.info.accounts = r.data.data.map(r => {
                        const { access_token, ...others } = r
                        return others
                    })
                    return null
                })]
                return runTasksAndEncrypt(intl, isDev, section, data, tasks)
            }
            break
        case ConnectionType.Google:
            if (data.credentials && !!data.credentials?.code) {
                if (!data.credentials.token) {
                    const errOrToken = await exchangeCode(intl, section, data.credentials);
                    if (errOrToken.error) {
                        return errOrToken.error
                    }
                    data.credentials.token = errOrToken.data
                }
                //
                data.info = {}
                const tasks = [getGoogleMe(intl, section, data.credentials.token).then(r => {
                    if (r.error) {
                        return r.error
                    }
                    data.info.me = r.data
                    return null
                }),
                getGoogleAdAccounts(intl, section, data.credentials.token).then(async r => {
                    if (r.error) {
                        return r.error
                    }
                    data.info.adAccounts = r.data.resourceNames
                    return null
                })]
                return runTasksAndEncrypt(intl, isDev, section, data, tasks)
            }
            break
    }
    return null
}

export const checkAdAccountId = async (intl, section: string, data: ConnectionInput, type: number): Promise<Nullable<ActionOutputError>> => {
    if (type === ConnectionType.Meta) {
        if (data.ad_account_id) {
            const m = (data?.info?.adAccounts || []).find(r => r?.id === data.ad_account_id)
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
            if (!!!(c.connection_credentials?.longAccessToken?.access_token)) {
                return { error: await customError(intl, 170120, section) }
            }
            if (checkAdAccount) {
                if ((c.info?.adAccounts || []).length === 0) {
                    return { error: await customError(intl, 170090, section) }
                }
                if (!c.ad_account_id) {
                    return { error: await customError(intl, 170130, section) }
                }
                const api = FacebookAdsApi.init(c.connection_credentials.longAccessToken.access_token);
                isDev && api.setDebug(true);
                return {
                    data: {
                        ad_account: new AdAccount(c.ad_account_id),
                        access_token: c.connection_credentials?.longAccessToken?.access_token
                    }
                }
            }
            break
    }
    return { data: null }
}