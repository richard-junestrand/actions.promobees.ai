import { BaseAction } from '.';
import organizationUserDeleteValidateAndPrepare, { OrganizationUserDeleteInput } from '../section/organizationUser/organizationUserDeleteValidateAndPrepare';

export function handler() {
    return new BaseAction<OrganizationUserDeleteInput>(organizationUserDeleteValidateAndPrepare);
}