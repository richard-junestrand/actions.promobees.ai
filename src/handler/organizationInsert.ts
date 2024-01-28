import { BaseAction } from '.';
import organizationInsertValidateAndPrepare, { OrganizationInsertInput } from '../section/organization/organizationInsertValidateAndPrepare';

export function handler() {
    return new BaseAction<OrganizationInsertInput>(organizationInsertValidateAndPrepare);
}