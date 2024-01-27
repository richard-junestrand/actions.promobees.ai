import { UserInput } from "."
import { MutationDefinition } from "../../db"
import { User } from "../../db/generated"
import { changedSet } from "../../db/util"
import { ActionOutputError, HandlerOptions, Nullable, UpdateInput } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { customError } from "../../util/errorUtil"
import { checkFirstName, checkId, checkInitials, checkLastName, checkPhone } from "./util"
import { IntlShape } from '@formatjs/intl';

export type UserUpdateInput = UserInput & UpdateInput<User> & {
  external_user_id?: string
}

const userUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: UserUpdateInput,
  def: MutationDefinition, session: HasuraSession, validated = false, options?: HandlerOptions & { skip_check_user_id?: boolean }): Promise<Nullable<ActionOutputError>> => {
  const section = "userUpdate"

  if (!validated) {
    const errOrData = await checkId(intl, isDev, section, data)
    if (errOrData.error) {
      return errOrData.error
    }
    data.db = errOrData.data
    if (session.userId !== data.id && !options?.skip_check_user_id) {
      return await customError(intl, 1, section);
    }
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
  if (data.hasOwnProperty('external_user_id')) {
    updateSet = { ...updateSet, external_user_id: data.external_user_id }
  }
  //
  const updateCall = await def.newCall()
  updateCall.parameter = `$id_${updateCall.idx}: Int!, $p_${updateCall.idx}: user_set_input`;
  updateCall.command = `
    data${updateCall.dataLabel(options?.not_return_data || false)}: update_user_by_pk(pk_columns: {id: $id_${updateCall.idx}}, _set: $p_${updateCall.idx}) {
      id
    }`;
  updateCall.variable = {
    [`id_${updateCall.idx}`]: data.id,
    [`p_${updateCall.idx}`]: updateSet
  }
  return null
}

export default userUpdateValidateAndPrepare