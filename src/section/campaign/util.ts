import { CampaignInput } from ".";
import { Campaign } from "../../db/generated";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, OrganizationIdInput, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkBoolean, checkDataBase } from "../../util/dataUtil";
import { checkString } from "../../util/stringUtil";
import { checkOrganizationDataBase, checkOrganizationIdBase } from "../organization/util";
import { getCampaignById, getCampaignTypeById } from "./query";

export const checkName = async (intl, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  return checkString(intl, section, data.campaign_name, 100020, false);
}

export const checkCampaignType = async (intl, isDev: boolean, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  return (await checkDataBase(intl, isDev, section, data.campaign_type_id, [100030,100040], getCampaignTypeById)).error
}

export const checkCampaignBase = async (intl, isDev: boolean, section: string, val: number, errs: number[],
  session: HasuraSession, orgId?: number): Promise<ActionOutputErrorOrData<Campaign>> => {
    return checkOrganizationDataBase(intl, isDev, section, val, errs, getCampaignById, session, orgId);
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Campaign>,
  session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const errOrData = await checkCampaignBase(intl, isDev, section, data.id, [100050, 100060], session);
  if (errOrData.error) {
    return errOrData.error
  }

  data.db = errOrData.data;
  return null;
}

export const checkActive = async (intl, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  return checkBoolean(intl, section, data.is_active, 100070);
}

export const checkOrganizationId = async (intl, section: string, data: OrganizationIdInput, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  return checkOrganizationIdBase(intl, section, data.organization_id, [100000, 100010], session);
}