import axios from "axios";
import qs from 'qs';
import { ActionOutputErrorOrData } from "../handler";
import { customError } from "./errorUtil";

export const getAuth0Token = async (intl, section: string): Promise<ActionOutputErrorOrData<string>> => {
    return axios({
        method: 'post',
        url: `${process.env.AUTH0_URL}/oauth/token`,
        data: qs.stringify({
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            grant_type: 'client_credentials',
            audience: `${process.env.AUTH0_URL}/api/v2/`,
        })
    }).then(r => {
        return { data: r.data.access_token };
    }).catch(async r => {
        return { error: await customError(intl, 130090, section, [`${r?.response?.status} - ${r?.response?.statusText} - ${r?.response?.data?.error_description}`]) };
    });
}

const callAuth0Data = async (intl, section: string, token: string, url: string, err: number, method = "get", extra?, callback?: any): Promise<ActionOutputErrorOrData<any>> => {
    return axios({
        method,
        url: `${process.env.AUTH0_URL}/${url}`,
        headers: {
            Authorization: `Bearer ${token}`,
            accept: 'application/json',
        },
        ...extra
        //timeout: 5000
    }).then(r => {
        return { data: callback ? callback(r.data) : r.data };
    }).catch(async r => {
        return { error: await customError(intl, err, section, [`${r?.response?.status || r?.response || r} - ${r?.response?.statusText} - ${r?.response?.data?.message}`]) };
    });
}

export const updateAuth0Password = async (intl, section: string, token: string, userId: string, password: string): Promise<ActionOutputErrorOrData<any>> => {
    return callAuth0Data(intl, section, token, `api/v2/users/${userId}`, 130100, 'patch', {
        data: {
            password,
            connection: 'promobeesdb'
        }
    });
}

export const createAuth0User = async (intl, section: string, token: string, email: string, password: string): Promise<ActionOutputErrorOrData<any>> => {
    return callAuth0Data(intl, section, token, 'api/v2/users', 130130, 'post', {
        data: {
            email,
            password,
            connection: 'democamajudb'
        }
    });
}

export const getAuth0UserByEmail = async (intl, section: string, token: string, email: string): Promise<ActionOutputErrorOrData<any>> => {
    return callAuth0Data(intl, section, token, 'api/v2/users-by-email', 130120, 'get',
        { params: { email } });
}