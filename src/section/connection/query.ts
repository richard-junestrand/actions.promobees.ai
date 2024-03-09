import { executeGraphql } from "../../db/util"

export enum ConnectionQueryType {
  Default,
  Update,
  Preview,
  Delete
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
  switch (type) {
    case ConnectionQueryType.Preview:
      fields = `
        credentials
        ad_account_id
        `
      break
    case ConnectionQueryType.Update:
      fields = `
        credentials
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
    query ($id: Int!) {
      data:connection_by_pk(id: $id) {
        id
        organization_id
        connection_type_id
        ${fields}
      }
    }`, {
    id
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