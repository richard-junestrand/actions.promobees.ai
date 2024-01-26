import { ActionOutputError, ActionOutputErrorOrData, HasuraRole, Nullable } from ".";
import { Organization } from "../db/generated";
import { executeGraphql } from "../db/util";
import { customError } from "../util/errorUtil";
import { intVal } from "../util/numUtil";
import { ErrorDatabase, SectionGeneral } from "../util/stringUtil";

export class HasuraSession {
    userId: number
    role: string
    isAdmin: boolean
    organizationIds: number[]
    organizations: Organization[]
    locale: string

    constructor(session, locale?: string) {
        this.locale = locale;
        this.userId = intVal(session['x-hasura-user-id'], 0);
        this.role = session['x-hasura-role'];
        this.isAdmin = this.role === HasuraRole.HasuraAdmin;
        if (this.isAdmin) {
            this.organizationIds = [];
        }
    }

    async getUserOrganizations(intl, isDev): Promise<Nullable<ActionOutputError>> {
        if (!this.isAdmin) {
            const { errors, data } = await executeGraphql(`
                query ($user_id: Int!) {
                  data:user_by_pk(id: $user_id){
                    user_organizations {
                        ${FragmentOrganization}
                    }
                  }
                }`, {
                user_id: this.userId
            });
            if (errors || !data.data) {
                isDev && errors && console.log(errors[0]);
                return await customError(intl, 0, SectionGeneral, [intl.formatMessage({ id: ErrorDatabase })]);
            } else {
                this.organizations = data.data.user_organizations
                this.organizationIds = this.organizations.map(r => r.id)
            }
        }
        return null;
    }

    async getOrganization(intl, isDev, id: number): Promise<ActionOutputErrorOrData<Organization>> {
        const m = this.organizations.find(r => r.id == id);

        if (!m) {
            const { errors, data } = await executeGraphql(`
                query ($organization_id: Int!,$user_id: Int!) {
                    data:organization_by_pk(id: $organization_id){
                        ${FragmentOrganization}
                    }
                }
                `, {
                organization_id: id,
                user_id: this.userId
            });
            if (errors) {
                isDev && console.log(errors[0]);
                return { error: await customError(intl,0, SectionGeneral, [intl.formatMessage({id:ErrorDatabase})]) };
            } else {
                const org: Organization = data.data;
                this.organizations.push(org);
                return { data: org };
            }
        }
        return { data: m };
    }
}

const FragmentOrganization = `
    id
    user_organization_roles(where: {user_id:{_eq:$user_id}},order_by:{role_id: asc}){
        role_id
    }
    `;