import { UserInput } from "."
import { MutationDefinition } from "../../db"
import { User } from "../../db/generated"
import { changedSet } from "../../db/util"
import { ActionOutputError, Nullable, UpdateInput } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { customError } from "../../util/errorUtil"
import { checkFirstName, checkId, checkInitials, checkLastName, checkPhone } from "./util"
import { IntlShape } from '@formatjs/intl';

export type UserUpdateInput = UserInput & UpdateInput<User>

const userUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: UserUpdateInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "userUpdate"

  const errOrData = await checkId(intl, isDev, section, data)
  if (errOrData.error) {
    return errOrData.error
  }
  data.db = errOrData.data
  if(session.userId !== data.id){
    return await customError(intl, 130010, section);
  }
  //
  let updateSet = changedSet();

  if (data.hasOwnProperty('first_name')) {
    const err = await checkFirstName(intl, section, data)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, first_name: data.first_name }
  }

  if (data.hasOwnProperty('last_name')) {
    const err = await checkLastName(intl, section, data)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, last_name: data.last_name }
  }

  if (data.hasOwnProperty('initials')) {
    const err = await checkInitials(intl, section, data)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, initials: data.initials }
  }

  if (data.hasOwnProperty('phone')) {
    const err = await checkPhone(intl, section, data)
    if (err) {
      return err
    }
    updateSet = { ...updateSet, phone: data.phone }
  }
  //
  const updateCall = await def.newCall()
  updateCall.parameter = `$id: Int!, $p_${updateCall.idx}: user_set_input`;
  updateCall.command = `
    data: update_user_by_pk(pk_columns: {id: $id}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {}
  updateVariable['id'] = data.id
  updateVariable[`p_${updateCall.idx}`] = updateSet
  updateCall.variable = updateVariable
  return null
}

export default userUpdateValidateAndPrepare