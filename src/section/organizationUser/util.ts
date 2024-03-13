import { Organization_User } from "../../db/generated";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkOrganizationDataBase, checkOrganizationIdBase } from "../organization/util";
import { OrganizationUserInsertInput } from "./organizationUserInsertValidateAndPrepare";
import { OrganizationUserQueryType, getOrganizationUserById } from "./query";

export const checkOrganizationUserBase = async (intl, isDev: boolean, section: string, val: number, errs: number[], type = OrganizationUserQueryType.Default, 
    session: HasuraSession): Promise<ActionOutputErrorOrData<Organization_User>> => {
    return checkOrganizationDataBase(intl, isDev, section, val, errs, v => getOrganizationUserById(v, type), session)
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Organization_User>,
    type = OrganizationUserQueryType.Default, session?: HasuraSession): Promise<ActionOutputErrorOrData<Organization_User>> => {
    return await checkOrganizationUserBase(intl, isDev, section, data.id, [150000, 150010], type, session);
}

export const checkOrganizationId = async (intl, section: string, data: OrganizationUserInsertInput, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
    return await checkOrganizationIdBase(intl, section, data.organization_id, [150020, 150030], session)
}