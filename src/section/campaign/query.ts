import { executeGraphql } from "../../db/util";

export const getCampaignTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: Int!) {
      data:campaign_type_by_pk(id: $id) {
        id
        connection_type_id
      }
    }`, {
    id
  });
}

export enum CampaignQueryType {
  Default,
  Update
}

export const getCampaignById = async (id: number, type=CampaignQueryType.Default) => {
  let fields='';
  switch(type){
    case CampaignQueryType.Update:
      fields=`
      data
      campaign_type {
        connection_type_id
      }
      connection {
        connection_type_id
      }
      `;
      break
  }
  return await executeGraphql(`query ($id: Int!) {
    data:campaign_by_pk(id: $id){
      id
      organization_id
      ${fields}
    }
  }`, {
    id
  });
}