import { BaseAction } from '.';
import campaignDeleteValidateAndPrepare, { CampaignDeleteInput } from '../section/campaign/campaignDeleteValidateAndPrepare';

export function handler() {
    return new BaseAction<CampaignDeleteInput>(campaignDeleteValidateAndPrepare);
}