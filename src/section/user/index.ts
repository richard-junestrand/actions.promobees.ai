export type UserInput = {
  first_name?: string
  last_name?: string
  initials?: string
  phone?: string
}

export type PasswordInput={
  password?: string
  confirm_password?: string
}

export type Auth0UserInput=PasswordInput & {
  user_email: string
  external_user_id?: string
}