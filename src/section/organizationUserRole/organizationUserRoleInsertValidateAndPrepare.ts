import { OrganizationUserRoleInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { ActionOutputError, HandlerOptions, Nullable } from '../../handler';
import { IntlShape } from "@formatjs/intl";
import { checkRole } from './util';

const organizationUserRoleInsertValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: OrganizationUserRoleInput, def: MutationDefinition,
  session: HasuraSession, options?: HandlerOptions): Promise<Nullable<ActionOutputError>> => {
  const section = "organizationUserRoleInsert";
  //
  const err = await checkRole(intl, isDev, section, data)
  if (err) {
    return err
  }
  //
  if (def !== null) {
    const call = await def.newCall()
    call.parameter = `$p_${call.idx}: organization_user_role_insert_input!`
    call.command = `
      data${call.dataLabel(options?.not_return_data || false)}: insert_organization_user_role_one(object: $p_${call.idx}) {
        id
      }
    `
    const variable = {}
    variable[`p_${call.idx}`] = data
    call.variable = variable
  }
  return null;
};

export default organizationUserRoleInsertValidateAndPrepare;
