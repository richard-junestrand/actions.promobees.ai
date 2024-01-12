import { executeGraphql } from "../../db/util";

export const getCampaignTemplateCrossById = async (id: number) => {
  
  return await executeGraphql(`query ($id: Int!) {
    data:campaign_template_cross_by_pk(id: $id){
      id
      campaign_id
    }
  }`, {
    id
  });
}