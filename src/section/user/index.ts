export type UserInput = {
  first_name?: string
  last_name?: string
  initials?: string
  phone?: string
}

export type PasswordInput={
  password: string
  confirm_password: string
}

export type UserOrganizationRoleInput = {
  organization_id: number
  user_id: number
  role_id: number
}