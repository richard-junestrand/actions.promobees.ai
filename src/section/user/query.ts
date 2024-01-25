import { executeGraphql } from "../../db/util"

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