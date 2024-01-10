import { CampaignInput } from ".";
import { Campaign } from "../../db/generated";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkBoolean } from "../../util/dataUtil";
import { customError } from "../../util/errorUtil";
import { isValidInt } from "../../util/numUtil";
import { ErrorDatabase, checkString } from "../../util/stringUtil";
import { getCampaignById, getCampaignTypeById } from "./query";

export const checkName = async (intl, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  return await checkString(intl, section, data.campaign_name, 100020, false);
}

export const checkCampaignType = async (intl, isDev: boolean, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  if (!await isValidInt(data.campaign_type_id)) {
    return await customError(intl, 100030, section);
  }
  const { errors, data: dataDb } = await getCampaignTypeById(data.campaign_type_id);
  if (errors) {
    isDev && console.log(errors[0]);
    return await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })]);
  }

  if (dataDb.data === null) {
    return await customError(intl, 100040, section, [data.campaign_type_id]);
  }

  return null;
}

export const checkCampaignBase = async (intl, isDev: boolean, section: string, val: number, session: HasuraSession,
  orgId: number | null, errs: number[]): Promise<ActionOutputErrorOrData<Campaign>> => {
  if (!await isValidInt(val)) {
    return { error: await customError(intl, errs[0], section) };
  }
  //get from db
  const { errors, data: dataDb } = await getCampaignById(val);
  if (errors) {
    isDev && console.log(errors[0]);
    return { error: await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })]) };
  }

  const db: Campaign = dataDb.data;
  if (db === null || (session && !session.organizationIds.includes(db.organization_id)) || (orgId && db.organization_id != orgId)) {
    return { error: await customError(intl, errs[1], section, [val]) };
  }
  return { data: db };
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Campaign>,
  session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const errOrData = await checkCampaignBase(intl, isDev, section, data.id, session, null, [100050, 100060]);
  if (errOrData.error) {
    return errOrData.error
  }

  data.db = errOrData.data;
  return null;
}

export const checkActive = async (intl, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  return await checkBoolean(intl, section, data.is_active, 100070);
}