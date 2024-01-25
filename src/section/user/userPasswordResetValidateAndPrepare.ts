import { UserInput } from "."
import { MutationDefinition } from "../../db"
import { User } from "../../db/generated"
import { changedSet } from "../../db/util"
import { ActionOutputError, HandlerOptions, Nullable, UpdateInput, returnIdValue } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { getAuth0Token, updateAuth0Password } from "../../util/auth0Util"
import { UserQueryType } from "./query"
import { checkConfirmPassword, checkFirstName, checkId, checkInitials, checkLastName, checkPassword, checkPhone } from "./util"
import { IntlShape } from '@formatjs/intl';

export type UserPasswordResetInput = UpdateInput<User> & {
  password: string
  confirm_password: string
}

const userPasswordResetValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: UserPasswordResetInput,
  def: MutationDefinition, session: HasuraSession, validated = false, options: HandlerOptions = null): Promise<Nullable<ActionOutputError>> => {
  const section = "userPasswordReset"

  const errOrData = await checkId(intl, isDev, section, data, UserQueryType.Auth0User)
  if (errOrData.error) {
    return errOrData.error
  }
  data.db = errOrData.data
  //
  let err = await checkPassword(intl, section, data)
  if (err) {
    return err
  }
  err = await checkConfirmPassword(intl, section, data)
  if (err) {
    return err
  }
  //
  err=await resetPassword(intl, section, data)
  if (err) {
    return err
  }
  //
  return returnIdValue(def, data.id)
}

export default userPasswordResetValidateAndPrepare

export const resetPassword = async (intl, section: string, data: UserPasswordResetInput): Promise<Nullable<ActionOutputError>> => {

  //create Auth0 user
  const errOrToken = await getAuth0Token(intl, section);
  if (errOrToken.error) {
    return errOrToken.error;
  }
  const token = errOrToken.data;
  //

  const errOrAuth0User = await updateAuth0Password(intl, section, token, data.db.external_user_id, data.password);
  if (errOrAuth0User.error) {
    return errOrAuth0User.error;
  }
  return null
}