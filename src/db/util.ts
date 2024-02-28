import axios from 'axios';
import { dbNow, GraphqlOutput } from '.';

export const changedSet = (val: any=null) => {
    return { ...val, changed_at: dbNow };
}

export const executeGraphqlBase = async (query: string, variables, url: string, headers: any=null): Promise<GraphqlOutput> => {
    return (await axios({
        method: 'post',
        url,
        data: {
            ...(variables ? { variables } : null),
            query: query
        },
        ...(headers?{headers}:null)
    })).data;
}

export const executeGraphql = async (query: string, variables = null): Promise<GraphqlOutput> => {
    return executeGraphqlBase(query, variables, process.env.API_URL, { 'x-hasura-admin-secret': process.env.API_ADMIN_SECRET })
}

export const executeGraphqlSokbat = async (query: string, variables = null): Promise<GraphqlOutput> => {
    return executeGraphqlBase(query, variables, process.env.API_SOKBAT_URL)
}

export const dbStringArray = (val: string[]) => {
    return `{${val.join(',')}}`;
}