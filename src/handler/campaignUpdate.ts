import { BaseAction } from '.';
import campaignUpdateValidateAndPrepare, { CampaignUpdateInput } from '../section/campaign/campaignUpdateValidateAndPrepare';

export function handler() {
    return new BaseAction<CampaignUpdateInput>(campaignUpdateValidateAndPrepare);
}