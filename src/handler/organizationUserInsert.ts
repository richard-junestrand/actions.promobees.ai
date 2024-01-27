import { BaseAction } from '.';
import organizationUserInsertValidateAndPrepare, { OrganizationUserInsertInput } from '../section/organizationUser/organizationUserInsertValidateAndPrepare';

export function handler() {
    return new BaseAction<OrganizationUserInsertInput>(organizationUserInsertValidateAndPrepare);
}