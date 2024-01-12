import { executeGraphql } from "../../db/util";

export const getTemplateById = async (id: number) => {
  return await executeGraphql(`
    query ($id: Int!) {
      data:template_by_pk(id: $id) {
        id
        organization_id
      }
    }`, {
    id: id
  });
}