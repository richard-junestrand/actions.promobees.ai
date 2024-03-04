import moment from "moment";
import { CampaignDataInput, CampaignInput, ChangedData } from ".";
import { Campaign } from "../../db/generated";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, OrganizationIdInput, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkBoolean, checkDataBase, isDeepEqual } from "../../util/dataUtil";
import { checkString } from "../../util/stringUtil";
import { checkOrganizationDataBase, checkOrganizationIdBase } from "../organization/util";
import { CampaignQueryType, getCampaignById, getCampaignTypeById } from "./query";

export const checkName = async (intl, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  return checkString(intl, section, data.campaign_name, 100020, false, 256);
}

export const checkCampaignType = async (intl, isDev: boolean, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  return (await checkDataBase(intl, isDev, section, data.campaign_type_id, [100030,100040], getCampaignTypeById)).error
}

export const checkCampaignBase = async (intl, isDev: boolean, section: string, val: number, errs: number[],
  session: HasuraSession, type?: CampaignQueryType, orgId?: number): Promise<ActionOutputErrorOrData<Campaign>> => {
    return checkOrganizationDataBase(intl, isDev, section, val, errs, v=>getCampaignById(v,type), session, orgId);
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Campaign>,
  session: HasuraSession, type=CampaignQueryType.Default): Promise<Nullable<ActionOutputError>> => {
  const errOrData = await checkCampaignBase(intl, isDev, section, data.id, [100050, 100060], session, type);
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

const dataVal = (r:ChangedData<any>) => {
  const {changed_at,...others}=r;
  return others
}

export const checkData = (data: CampaignInput, oldVal: CampaignDataInput): boolean => {
  const current = moment.utc()
  const oldData = oldVal || { data: [], changed_at: current }
  const thedata=dataVal(data.data)
  const newData = {
    ...oldData,
    ...thedata,
    data: thedata.data.map((r: any) => {
      const m = oldData.data.find((x: any) => x.data.id === r.data.id)
      if (m) {
        if (!isDeepEqual(dataVal(m), dataVal(r))) {
          return {
            ...m,
            data: r,
            changed_at: current
          }
        }
        return m
      }
      return { data: r, changed_at: current };
    })
  };
  let updated = false
  if (!isDeepEqual(dataVal(oldData), dataVal(newData))) {
    newData.changed_at = current
    updated = true
  }
  data.data=newData
  return updated
}