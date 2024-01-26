import { executeGraphql } from "../../db/util"
import { HasuraSession } from "../../handler/session";

export enum UserQueryType {
  Default,
  Auth0User
};

export const getUserById = async (id: number, type: UserQueryType = UserQueryType.Default) => {
  let fields='';
  switch(type){
    case UserQueryType.Auth0User:
      fields=`
        user_email
        external_user_id
      `
  }
  return await executeGraphql(`query ($id: Int!) {
    data:user_by_pk(id: $id){
      id
      ${fields}
    }
  }`, {
    id
  });
}

export const getUserOrganizationRole = async (userId: number, orgId: number, roleId?: number) => {
  if(roleId){
    return await executeGraphql(`query ($user_id: Int!,$organization_id: Int!,$role_id: Int!) {
      data:user_organization_role(where:{
        user_id:{_eq: $user_id},
        organization_id:{_eq: $organization_id},
        role_id:{_eq: $role_id},
      }){
        role_id
      }
    }`, {
      user_id: userId,
      organization_id: orgId,
      role_id: roleId
    });
  } else {
    return await executeGraphql(`query ($user_id: Int!,$organization_id: Int!) {
      data:user_organization_role(where:{
        user_id:{_eq: $user_id},
        organization_id:{_eq: $organization_id}
      },{order_by:{role_id: asc}}){
        role_id
      }
    }`, {
      user_id: userId,
      organization_id: orgId
    });
  }
  
}

export const getRoleById = async (id: number) => {
  return await executeGraphql(`
    query ($id: Int!) {
      data: role_by_pk(id: $id) {
        id
      }
    }
  `, {
    id
  })
}