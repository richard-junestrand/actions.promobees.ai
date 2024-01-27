import { BaseAction } from '.';
import organizationUserUpdateValidateAndPrepare, { OrganizationUserUpdateInput } from '../section/organizationUser/organizationUserUpdateValidateAndPrepare';

export function handler() {
    return new BaseAction<OrganizationUserUpdateInput>(organizationUserUpdateValidateAndPrepare);
}