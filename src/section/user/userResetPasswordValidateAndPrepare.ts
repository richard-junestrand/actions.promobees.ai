import { MutationDefinition } from "../../db"
import { User } from "../../db/generated"
import { ActionOutputError, Nullable, UpdateInput, returnIdValue } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { getAuth0Token, updateAuth0Password } from "../../util/auth0Util"
import { customError } from "../../util/errorUtil"
import { UserQueryType } from "./query"
import { checkConfirmPassword, checkId, checkPassword } from "./util"
import { IntlShape } from '@formatjs/intl';

export type UserResetPasswordInput = UpdateInput<User> & {
  password: string
  confirm_password: string
}

const userResetPasswordValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: UserResetPasswordInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "userResetPassword"

  const errOrData = await checkId(intl, isDev, section, data, UserQueryType.Auth0User)
  if (errOrData.error) {
    return errOrData.error
  }
  data.db = errOrData.data
  if(session.userId !== data.id){
    return await customError(intl, 130010, section);
  }
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

export default userResetPasswordValidateAndPrepare

export const resetPassword = async (intl, section: string, data: UserResetPasswordInput): Promise<Nullable<ActionOutputError>> => {

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