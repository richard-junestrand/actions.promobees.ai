import { CampaignTemplateCrossInput } from ".";
import { ActionOutputError, ActionOutputErrorOrData, Nullable } from "../../handler";
import { checkInt } from "../../util/numUtil";
import { customError } from "../../util/errorUtil";
import { getCampaignTemplateCrossById } from "./query";
import { Template, Campaign_Template_Cross } from "../../db/generated";
import { CampaignTemplateCrossUpdateInput } from "./campaignTemplateCrossUpdateValidateAndPrepare";
import { checkTemplateBase } from "../template/util";
import { checkDataBase } from "../../util/dataUtil";
import { TemplateQueryType } from "../template/query";

export const checkCampaignTemplateCrossBase = async (intl, isDev: boolean, section: string, val: number, errs: number[], campaignId: number): Promise<ActionOutputErrorOrData<Campaign_Template_Cross>> => {
    return checkDataBase(intl, isDev, section, val, errs, getCampaignTemplateCrossById, true, undefined,
        async (db: Campaign_Template_Cross) => {
            if (db.campaign_id !== campaignId) {
                return await customError(intl, errs[2], section, [val])
            }
            return null
        })
}

export const checkId = async (intl, isDev: boolean, section: string, data: CampaignTemplateCrossUpdateInput): Promise<Nullable<ActionOutputError>> => {
    const errOrData = await checkCampaignTemplateCrossBase(intl, isDev, section, data.id, [110030, 110040, 110050], data.campaign_id);
    if (errOrData.error) {
        return errOrData.error
    }

    data.db = errOrData.data;
    return null;
}

export const checkTemplate = async (intl, isDev: boolean, section: string, data: CampaignTemplateCrossInput, orgId: number): Promise<ActionOutputErrorOrData<Template>> => {
    return await checkTemplateBase(intl, isDev, section, data.template_id, [110000, 110010], TemplateQueryType.Default, null, orgId);
}

export const checkOrderBy = async (intl, section: string, data: CampaignTemplateCrossInput): Promise<Nullable<ActionOutputError>> => {
    return await checkInt(intl, section, data.order_by, 110020);
}