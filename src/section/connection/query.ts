import { executeGraphql } from "../../db/util"

export const getConnection = async (typeId: number, orgId: number) => {
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

export enum ConnectionQueryType {
  Default
}
export const getConnectionById = async (id: number, type=ConnectionQueryType.Default) => {
  return await executeGraphql(`
    query ($id: Int!) {
      data:connection_by_pk(id: $id) {
        id
        organization_id
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