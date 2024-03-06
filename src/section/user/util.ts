import { Auth0UserInput, PasswordInput, UserInput } from ".";
import { User } from "../../db/generated";
import { UserQueryType, getUserByEmail, getUserById } from "./query";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, UpdateInput } from "../../handler";
import { checkDataBase, isEmptyArray } from "../../util/dataUtil";
import { ErrorDatabase, checkString, isValidString } from "../../util/stringUtil";
import { customError } from "../../util/errorUtil";
import { UserInsertInput } from "./userInsertValidateAndPrepare";
import { createAuth0User, getAuth0Token, getAuth0UserByEmail } from "../../util/auth0Util";

export const checkUserBase = async (intl, isDev: boolean, section: string, val: number, errs: number[], type: UserQueryType = UserQueryType.Default): Promise<ActionOutputErrorOrData<User>> => {
  return checkDataBase(intl, isDev, section, val, errs, v => getUserById(v, type))
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<User>, type: UserQueryType = UserQueryType.Default): Promise<ActionOutputErrorOrData<User>> => {
  return await checkUserBase(intl, isDev, section, data.id, [130000, 130010], type);
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

export const checkUserEmail = async (intl, isDev: boolean, section: string, data: UserInsertInput, throwErrorIfExist = true): Promise<ActionOutputErrorOrData<User>> => {
  if (!await isValidString(data.user_email, true, 256)) {
    return { error: await customError(intl, 130020, section) }
  }
  //check database user
  const { errors, data: dataDb } = await getUserByEmail(data.user_email)
  if (errors) {
    isDev && console.log(errors[0])
    return { error: await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })]) }
  }
  const notExist = await isEmptyArray(dataDb.data);
  if (!notExist && throwErrorIfExist) {
    return { error: await customError(intl, 130110, section, [data.user_email]) }
  }
  return { data: notExist ? null : dataDb.data[0] }
}

export const createAuth0UserIfNotExist = async (intl, section: string, data: Auth0UserInput): Promise<ActionOutputErrorOrData<any>> => {
  //create Auth0 user
  const errOrToken = await getAuth0Token(intl, section);
  if (errOrToken.error) {
    return errOrToken;
  }
  const token = errOrToken.data;
  //
  const errOrAuth0Users = await getAuth0UserByEmail(intl, section, token, data.user_email);
  if (errOrAuth0Users.error) {
    return errOrAuth0Users;
  }
  const auth0Users = errOrAuth0Users.data;
  if (auth0Users.length === 0) {
    const errOrAuth0User = await createAuth0User(intl, section, token, data.user_email, data.password);
    if (errOrAuth0User.error) {
      return errOrAuth0User;
    }
    return {
      data: {
        id: errOrAuth0User.data.user_id,
        message: intl.formatMessage({ id: "message.user-default-password" }, { p0: data.password })
      }
    };
  } else {
    return { data: { id: auth0Users[0].user_id } };
  }
}