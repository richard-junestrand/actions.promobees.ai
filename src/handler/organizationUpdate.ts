import { BaseAction } from '.';
import organizationUpdateValidateAndPrepare, { OrganizationUpdateInput } from '../section/organization/organizationUpdateValidateAndPrepare';

export function handler() {
    return new BaseAction<OrganizationUpdateInput>(organizationUpdateValidateAndPrepare);
}