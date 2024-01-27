import { RelListInput } from "../../handler"
import { OrganizationUserRoleInput } from "../organizationUserRole"

export type OrganizationUserInput = {
  organization_user_roles: RelListInput<OrganizationUserRoleInput>
}