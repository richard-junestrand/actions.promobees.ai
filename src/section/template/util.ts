import { Template } from "../../db/generated";
import { ActionOutputErrorOrData } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkOrganizationDataBase } from "../organization/util";
import { getTemplateById } from "./query";

export const checkTemplateBase = async (intl, isDev: boolean, section: string, val: number, 
    errs: number[], session: HasuraSession, orgId?: number): Promise<ActionOutputErrorOrData<Template>> => {
    return checkOrganizationDataBase(intl, isDev, section, val, errs, getTemplateById, session, orgId)
}