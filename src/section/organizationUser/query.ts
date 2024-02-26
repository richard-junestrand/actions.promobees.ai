import { executeGraphql } from "../../db/util"

export const getOrganizationUser = async (userId: number, orgId: number) => {
  return await executeGraphql(`
    query ($userId: Int!, $orgId: Int!) {
      data: organization_user(where: {organization_id: {_eq: $orgId}, user_id: {_eq: $userId}}) {
        id
      }
    }
  `, {
    userId,
    orgId
  })
}

export enum OrganizationUserQueryType {
  Default,
  Update
}
export const getOrganizationUserById = async (id: number, type=OrganizationUserQueryType.Default) => {
  let fields = '';
  switch (type) {
    case OrganizationUserQueryType.Update:
      fields = `
        organization_user_roles {
          role_id
        } 
        `;
      break;
  }
  return await executeGraphql(`
    query ($id: Int!) {
      data:organization_user_by_pk(id: $id) {
        id
        organization_id
        user_id
        ${fields}
      }
    }`, {
    id
  });
}