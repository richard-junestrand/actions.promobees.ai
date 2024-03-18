import { executeGraphql } from "../../db/util"

export enum ConnectionQueryType {
  Default,
  Update,  
  Delete,
  Credentials,
}
export const getConnection = async (typeId: number, orgId: number, type = ConnectionQueryType.Default) => {
  return await executeGraphql(`
    query ($typeId: Int!, $orgId: Int!) {
      data: connection(where: {organization_id: {_eq: $orgId}, connection_type_id: {_eq: $typeId}}) {
        id
      }
    }
  `, {
    typeId,
    orgId
  })
}

export const getConnectionById = async (id: number, type = ConnectionQueryType.Default) => {
  let fields = ''
  let params=''
  let vars=null
  switch (type) {
    case ConnectionQueryType.Credentials:
      params=',$pwd:String,$secret:String'
      fields = `
        connection_credentials(args: {_pwd: $pwd, _secret_key: $secret})
        info
        ad_account_id
        `
      vars={
        pwd: process.env.SECRET_HASH || '',
        secret: process.env.SECRET_KEY || ''
      }
      break
    case ConnectionQueryType.Update:
      fields = `
        info
        `
      break
    case ConnectionQueryType.Delete:
      fields = `
      campaigns_aggregate {
        aggregate {
          count
        }
      }
      `
      break
  }
  return await executeGraphql(`
    query ($id: Int!${params}) {
      data:connection_by_pk(id: $id) {
        id
        organization_id
        connection_type_id
        ${fields}
      }
    }`, {
    id,
    ...vars
  });
}

export const getConnectionTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: Int!) {
      data: connection_type_by_pk(id: $id) {
        id
      }
    }
  `, {
    id
  })
}