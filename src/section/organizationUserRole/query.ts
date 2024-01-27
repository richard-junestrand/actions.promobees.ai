import { executeGraphql } from "../../db/util"

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
