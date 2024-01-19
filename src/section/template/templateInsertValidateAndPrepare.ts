import { ActionOutputError, Nullable, OrganizationIdInput } from '../../handler';
import { TemplateInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkName, checkTemplateType, checkOrganizationId } from './util';
import { IntlShape } from '@formatjs/intl';

export type TemplateInsertInput = TemplateInput & OrganizationIdInput

const templateInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: TemplateInsertInput, def: MutationDefinition, session: HasuraSession, validated: boolean = false): Promise<Nullable<ActionOutputError>> => {
  const section = "templateInsert";
  //
  let err = await checkOrganizationId(intl, section, data, session);
  if (err) {
    return err;
  }
  //
  err = await checkName(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkTemplateType(intl, isDev, section, data);
  if (err) {
    return err;
  }
  //
  const call = await def.newCall();
  call.parameter = `$p_${call.idx}: template_insert_input!`;
  call.command = `
    data: insert_template_one(object: $p_${call.idx}) {
      id
    }`;
  const variable = {};
  variable[`p_${call.idx}`] = data;
  call.variable = variable;
  return null;
};
export default templateInsertValidateAndPrepare;