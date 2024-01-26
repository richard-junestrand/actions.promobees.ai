export enum Role {    
    OrganizationAdministration = 100,
    User = 200,
}

export const hasUserRole = (userRoleIds: number[] | undefined, roles: Role[]) => {
    return roles.some(r => userRoleIds.includes(r));
}