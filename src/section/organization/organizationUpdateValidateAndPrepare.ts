import { OrganizationInput } from ".";
import { ActionOutputError, Nullable, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { customError } from '../../util/errorUtil';
import { changedSet } from "../../db/util";
import { MutationDefinition } from "../../db"
import { checkPaymentType, checkName, checkNr, checkVatNr, checkId, checkStreet, checkZip, checkCity, checkCountry, checkInfoEmail, checkInvoiceEmail } from "./util";
import { Organization } from "../../db/generated";
import { hasUserRole, Role } from "../../util/roleUtil";
import { IntlShape } from "@formatjs/intl";

export type OrganizationUpdateInput = OrganizationInput & UpdateInput<Organization>

const organizationUpdateValidateAndPrepare = async (intl: IntlShape<string>,isDev: boolean, data: OrganizationUpdateInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "organizationUpdate";
  //
  const err = await checkId(intl, isDev, section, data, session);
  if (err) {
    return err;
  }
  //
  const errOrOrg = await session.getOrganization(intl, isDev, data.id);
  if (errOrOrg.error) {
    return errOrOrg.error;
  }
  const organization = errOrOrg.data;
  if (!hasUserRole(organization.user_organization_roles.map(r=> r.role_id), [Role.OrganizationAdministration])) {
    return await customError(intl,1, section)
  }
  //
  const updateCall = await def.newCall();
  let updateSet = changedSet();
  //
  if (data.hasOwnProperty('organization_name')) {
    const err = await checkName(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, organization_name: data.organization_name };
  }
  //
  if (data.hasOwnProperty('organization_reg_nr')) {
    const err = await checkNr(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, organization_reg_nr: data.organization_reg_nr };
  }
  //
  if (data.hasOwnProperty('street_address')) {
    const err = await checkStreet(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, street_address: data.street_address };
  }
  //
  if (data.hasOwnProperty('zipcode')) {
    const err = await checkZip(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, zipcode: data.zipcode };
  }
  //
  if (data.hasOwnProperty('city')) {
    const err = await checkCity(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, city: data.city };
  }
  //
  if (data.hasOwnProperty('country_id')) {
    const err = await checkCountry(intl, isDev, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, country_id: data.country_id };
  }
  //
  if (data.hasOwnProperty('vat_nr')) {
    const err = await checkVatNr(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, vat_nr: data.vat_nr };
  }
  //
  if (data.hasOwnProperty('info_email')) {
    const err = await checkInfoEmail(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, info_email: data.info_email };
  }
  //
  if (data.hasOwnProperty('invoice_email')) {
    const err = await checkInvoiceEmail(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, invoice_email: data.invoice_email };
  }
  //
  if (data.hasOwnProperty('payment_type_id')) {
    const err = await checkPaymentType(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, payment_type_id: data.payment_type_id };
  }
  //
  updateCall.parameter = `$id: Int!, $p_${updateCall.idx}: organization_set_input`;
  // not use index for return data
  updateCall.command = `
    data: update_organization_by_pk(pk_columns: {id: $id}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {};
  updateVariable['id'] = data.id;
  updateVariable[`p_${updateCall.idx}`] = updateSet;
  updateCall.variable = updateVariable;
  return null;
};

export default organizationUpdateValidateAndPrepare;