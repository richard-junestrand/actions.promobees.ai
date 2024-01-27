import { OrganizationUserRoleInput } from "."
import { ActionOutputError, Nullable } from "../../handler"
import { checkDataBase } from "../../util/dataUtil"
import { getRoleById } from "./query"

export const checkRoleBase = async (intl, isDev: boolean, section: string, val: number, errs: number[]): Promise<Nullable<ActionOutputError>> => {
  return (await checkDataBase(intl, isDev, section, val, errs, getRoleById)).error
}

export const checkRole = async (intl, isDev: boolean, section: string, data: OrganizationUserRoleInput): Promise<Nullable<ActionOutputError>> => {
  return await checkRoleBase(intl, isDev, section, data.role_id, [160000, 160010])
}