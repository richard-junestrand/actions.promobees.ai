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

export const getCampaignTemplateCross = async (campaignId: number, templateId: number) => {
  return await executeGraphql(`
    query ($campaignId: Int!, $templateId: Int!) {
      data: campaign_template_cross(where: {campaign_id: {_eq: $campaignId}, template_id: {_eq: $templateId}}) {
        id
      }
    }
  `, {
    campaignId,
    templateId
  })
}