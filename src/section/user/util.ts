import { PasswordInput, UserInput, UserOrganizationRoleInput } from ".";
import { User } from "../../db/generated";
import { UserQueryType, getRoleById, getUserById } from "./query";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, UpdateInput } from "../../handler";
import { checkDataBase } from "../../util/dataUtil";
import { checkString } from "../../util/stringUtil";
import { customError } from "../../util/errorUtil";

export const checkUserBase = async (intl, isDev: boolean, section: string, val: number, errs: number[], type: UserQueryType): Promise<ActionOutputErrorOrData<User>> => {
  return checkDataBase(intl, isDev, section, val, errs, v=>getUserById(v,type))
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<User>, type: UserQueryType=UserQueryType.Default): Promise<ActionOutputErrorOrData<User>> => {
  return await checkUserBase(intl, isDev, section, data.id, [130000, 130010],type);
}

export const checkFirstName = async (intl, section: string, data: UserInput): Promise<Nullable<ActionOutputError>> => {
  return await checkString(intl, section, data.first_name, 130040, false, 256);
}

export const checkLastName = async (intl, section: string, data: UserInput): Promise<Nullable<ActionOutputError>> => {
  return await checkString(intl, section, data.last_name, 130060, false, 256);
}

export const checkInitials = async (intl, section: string, data: UserInput): Promise<Nullable<ActionOutputError>> => {
  return await checkString(intl, section, data.initials, 130050, false, 3);
}

export const checkPhone = async (intl, section: string, data: UserInput): Promise<Nullable<ActionOutputError>> => {
  return await checkString(intl, section, data.phone, 130030, false, 256);
}

export const checkPassword = async (intl, section: string, data: PasswordInput): Promise<ActionOutputError> => {
  return checkString(intl, section, data.password, 130070, true, 20)
}

export const checkConfirmPassword = async (intl, section: string, data: PasswordInput): Promise<ActionOutputError> => {
  if (data.password !== data.confirm_password) {
    return await customError(intl, 130080, section);
  }
  return null;
}

export const checkRoleBase = async (intl, isDev: boolean, section: string, val: number, errs: number[]): Promise<Nullable<ActionOutputError>> => {
  return (await checkDataBase(intl, isDev, section, val, errs, getRoleById)).error
}

export const checkRole = async (intl, isDev: boolean, section: string, data: UserOrganizationRoleInput): Promise<Nullable<ActionOutputError>> => {
  return await checkRoleBase(intl, isDev, section, data.role_id, [130110, 130120])
}