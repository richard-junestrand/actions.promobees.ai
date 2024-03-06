import { ActionOutputError, Nullable } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkName, checkNr, checkVatNr, checkStreet, checkZip, checkCity, checkCountry, checkInfoEmail, checkInvoiceEmail, checkPaymentType } from './util';
import { OrganizationInput } from '.';
import { IntlShape } from "@formatjs/intl";
import { Role } from '../../util/roleUtil';

export type OrganizationInsertInput = OrganizationInput

const organizationInsertValidateAndPrepare = async (intl: IntlShape<string>,isDev: boolean, data: OrganizationInsertInput, def: MutationDefinition, session: HasuraSession, options=null): Promise<Nullable<ActionOutputError>> => {
  const section = "organizationInsert";
  //
  let err = await checkName(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkNr(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkVatNr(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkStreet(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkZip(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkCity(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkCountry(intl, isDev, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkInfoEmail(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkInvoiceEmail(intl, section, data);
  if (err) {
    return err;
  }
  //
  err = await checkPaymentType(intl, section, data);
  if (err) {
    return err;
  }
  //
  const call = await def.newCall();
  call.parameter = `$p_${call.idx}: organization_insert_input!`;
  // not use index for return data
  call.command = `
    data: insert_organization_one(object: $p_${call.idx}) {
      id
      ${options?.extra || ''}
    }`;
  const variable = {};
  variable[`p_${call.idx}`] = {
    ...data,
    organization_users: {
      data: [{
        user_id: session.userId,
        organization_user_roles: {
          data: [{role_id: Role.OrganizationAdmin}]
        }
      }]
    }
  };
  call.variable = variable;
  
  return null;
};
export default organizationInsertValidateAndPrepare;
