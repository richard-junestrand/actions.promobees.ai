import { ActionOutputError, Nullable, returnValue } from '../../handler';
import { AccountInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkAccountName } from './util';
import { IntlShape } from '@formatjs/intl';

export type AccountInsertInput = AccountInput & {
  account_nr: number
}

const accountInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: AccountInsertInput, def: MutationDefinition, session: HasuraSession, validated: boolean = false): Promise<Nullable<ActionOutputError>> => {
  const section = "accountInsert";
  return returnValue(def, 'test');
  //
  let err = await checkAccountName(intl, section, data);
  if (err) {
    return err;
  }
  //
  const call = await def.newCall();
  call.parameter = `$p_${call.idx}: account_insert_input!`;
  // not use index for return data
  call.command = `
    data: insert_account_one(object: $p_${call.idx}) {
      id
    }`;
  const variable = {};
  variable[`p_${call.idx}`] = data;
  call.variable = variable;
  return null;
};
export default accountInsertValidateAndPrepare;