import { ActionOutputError, MessageInput, Nullable, ParamInput } from '../../handler';
import { Auth0UserInput, UserInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { createAuth0UserIfNotExist, checkFirstName, checkInitials, checkLastName, checkPassword, checkPhone, checkUserEmail } from './util';
import { IntlShape } from '@formatjs/intl';

export type UserInsertInput = UserInput & Auth0UserInput & ParamInput<any> & MessageInput & {
  password?: string
}

const userInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: UserInsertInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "userInsert";
  //
  const errOrUser = await checkUserEmail(intl, isDev, section, data);
  if (errOrUser.error) {
    return errOrUser.error;
  }
  let err = await checkPassword(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkFirstName(intl, section, data)
  if (err) {
    return err
  }
  //
  err = await checkLastName(intl, section, data)
  if (err) {
    return err
  }
  //
  err = await checkInitials(intl, section, data)
  if (err) {
    return err
  }
  //
  err = await checkPhone(intl, section, data)
  if (err) {
    return err
  }
  //
  const errOrAuth0UserId=await createAuth0UserIfNotExist(intl, section, data)
  if(errOrAuth0UserId.error){
    return errOrAuth0UserId.error
  }
  data.external_user_id =errOrAuth0UserId.data.id
  data.message=errOrAuth0UserId.data.message
  const {password, message,...others}=data;
  //
  if (def) {    
    const call = await def.newCall();
    call.parameter = `$p_${call.idx}: user_insert_input!`;
    // not use index for return data
    call.command = `
    data: insert_user_one(object: $p_${call.idx}) {
      id
    }`;
    const variable = {};
    variable[`p_${call.idx}`] = others;
    call.variable = variable;
    return null;
  } else {
    data.param=others
    data.message=message
  }
};
export default userInsertValidateAndPrepare;