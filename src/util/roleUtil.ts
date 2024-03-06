export enum Role {    
    SystemAdmin=10,
    OrganizationAdmin = 100
}

export const hasUserRole = (userRoleIds: number[] | undefined, roles: Role[]) => {
    return roles.some(r => userRoleIds.includes(r));
}