import { BaseAction } from '.';
import campaignPreviewValidateAndPrepare, { CampaignPreviewInput } from '../section/campaign/campaignPreviewValidateAndPrepare';

export function handler() {
    return new BaseAction<CampaignPreviewInput>(campaignPreviewValidateAndPrepare);
}