import { HasuraRole } from ".";
import { Organization } from "../db/generated";
import { intVal } from "../util/numUtil";

export type OrganizationSession = Organization & {role_ids: number[]};
export class HasuraSession {
    userId: number
    role: string
    isAdmin: boolean
    locale:string

    constructor(session, locale?: string) {
        this.locale=locale;
        this.userId = intVal(session['x-hasura-user-id'],0);
        this.role = session['x-hasura-role'];
        this.isAdmin = this.role === HasuraRole.HasuraAdmin;
    }
}