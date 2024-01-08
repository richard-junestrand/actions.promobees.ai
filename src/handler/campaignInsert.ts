import { BaseAction } from '.';
import campaignInsertValidateAndPrepare, { CampaignInsertInput } from '../section/campaign/campaignInsertValidateAndPrepare';

export function handler() {
    return new BaseAction<CampaignInsertInput>(campaignInsertValidateAndPrepare);
}