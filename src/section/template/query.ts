import { executeGraphql } from "../../db/util";

export enum TemplateQueryType {Default,Delete}
export const getTemplateById = async (id: number, type=TemplateQueryType.Default) => {
  let fields='';
  switch(type){
    case TemplateQueryType.Delete:
      fields=`
      campaign_template_crosses_aggregate {
        aggregate {
          count
        }
      }
      `
      break;
  }
  return await executeGraphql(`
    query ($id: Int!) {
      data:template_by_pk(id: $id) {
        id
        organization_id
        ${fields}
      }
    }`, {
    id
  });
}

export const getTemplateTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: Int!) {
      data:template_type_by_pk(id: $id) {
        id
      }
    }`, {
    id
  });
}