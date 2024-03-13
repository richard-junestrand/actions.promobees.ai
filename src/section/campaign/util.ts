import moment from "moment";
import { CampaignDataInput, CampaignInput, ChangedInput } from ".";
import { Campaign, Campaign_Type, Connection } from "../../db/generated";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, OrganizationIdInput, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkBoolean, checkDataBase, isDeepEqual } from "../../util/dataUtil";
import { checkString } from "../../util/stringUtil";
import { checkOrganizationDataBase, checkOrganizationIdBase } from "../organization/util";
import { CampaignQueryType, getCampaignById, getCampaignTypeById } from "./query";
import { checkConnectionBase } from "../connection/util";
import { ConnectionQueryType } from "../connection/query";
import { ConnectionIdInput } from "../connection";

export const checkName = async (intl, section: string, data: CampaignInput): Promise<Nullable<ActionOutputError>> => {
  return checkString(intl, section, data.campaign_name, 100020, false, 256);
}

export const checkCampaignType = async (intl, isDev: boolean, section: string, data: {
  campaign_type_id: number
}): Promise<ActionOutputErrorOrData<Campaign_Type>> => {
  return await checkDataBase(intl, isDev, section, data.campaign_type_id, [100030, 100040], getCampaignTypeById)
}

export const checkConnection = async (intl, isDev: boolean, section: string, data: ConnectionIdInput, type: ConnectionQueryType,
  session: HasuraSession, orgId?: number): Promise<ActionOutputErrorOrData<Connection>> => {
  return await checkConnectionBase(intl, isDev, section, data.connection_id, [100090, 100100], type, session, orgId);
}

export const checkCampaignBase = async (intl, isDev: boolean, section: string, val: number, errs: number[],
  type?: CampaignQueryType, session?: HasuraSession, orgId?: number): Promise<ActionOutputErrorOrData<Campaign>> => {
  return checkOrganizationDataBase(intl, isDev, section, val, errs, v => getCampaignById(v, type), session, orgId);
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Campaign>,
  session: HasuraSession, type = CampaignQueryType.Default): Promise<Nullable<ActionOutputError>> => {
  const errOrData = await checkCampaignBase(intl, isDev, section, data.id, [100050, 100060], type, session);
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

const baseDataVal = (r: ChangedInput<any>) => {
  const { changed_at, ...others } = r;
  return others
}

export const checkData = (data: CampaignInput, oldVal: CampaignDataInput): boolean => {
  const current = moment.utc()
  const oldData = oldVal || { data: [], changed_at: current }
  const thedata = baseDataVal(data.data)
  const newData = {
    ...oldData,
    ...thedata,
    data: thedata.data.map((r: any) => {
      const m = oldData.data.find((x: any) => x.data.id === r.data.id)
      if (m) {
        if (!isDeepEqual(baseDataVal(m), baseDataVal(r))) {
          return {
            ...m,
            ...r,
            changed_at: current
          }
        }
        return m
      }
      return { ...r, changed_at: current };
    })
  };
  let updated = false
  if (!isDeepEqual(baseDataVal(oldData), baseDataVal(newData))) {
    newData.changed_at = current
    updated = true
  }
  data.data = newData
  return updated
}

export const checkBudget = (data: CampaignInput, oldVal: ChangedInput<any>): boolean => {
  if (!isDeepEqual(baseDataVal(oldVal || {}), baseDataVal(data.budget))) {
    data.budget.changed_at = moment.utc()
    return true
  }
  return false
}

export const dataHolderVal = (key: string) => {
  const arr = key.split(':');
  let val = arr[0]
  if (arr.length > 1) {
    switch (arr[1]) {
      case "upper":
        return val?.toUpperCase()
    }
  }
  return val
}