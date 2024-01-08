import { executeGraphql } from "../../db/util";

export const getCampaignTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:campaign_type_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export const getCampaignById = async (id: number) => {
  return await executeGraphql(`query ($id: bigint!) {
    data:campaign_by_pk(id: $id){
      id
      organization_id
    }
  }`, {
    id: id
  });
}