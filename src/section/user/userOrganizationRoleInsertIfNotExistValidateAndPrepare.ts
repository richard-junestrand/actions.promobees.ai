import { UserOrganizationRoleInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { ActionOutputError, Nullable } from '../../handler';
import { IntlShape } from "@formatjs/intl";
import { checkDataExistBase } from '../../util/dataUtil';
import { getUserOrganizationRole } from './query';
import { checkRole } from './util';

const userOrganizationRoleInsertIfNotExistValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: UserOrganizationRoleInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "userOrganizationRoleInsertIfNotExist";
  //
  const errOrData=await checkDataExistBase(intl, isDev, section, () => getUserOrganizationRole(data.user_id, data.organization_id, data.role_id))
  if (errOrData.error) {
    return errOrData.error;
  }
  if(!errOrData.data) {
    const err = await checkRole(intl, isDev, section, data)
    if (err) {
      return err
    }
    const call = await def.newCall();
    call.parameter = `$p_${call.idx}: user_organization_role_insert_input!`;
    call.command = `
      data_${call.idx}: insert_user_organization_role_one(object: $p_${call.idx}) {
        id:role_id
      }`;
    call.variable = {
      [`p_${call.idx}`]: data
    };
  }
  return null;
};

export default userOrganizationRoleInsertIfNotExistValidateAndPrepare;
