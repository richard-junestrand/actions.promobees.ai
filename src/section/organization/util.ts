import { GraphqlOutput } from "../../db";
import { ActionOutputError, ActionOutputErrorOrData, Nullable } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkDataBase } from "../../util/dataUtil";
import { customError } from "../../util/errorUtil";
import { isValidInt } from "../../util/numUtil";

export async function checkOrganizationIdBase(intl, section: string, val: number, errs: number[], 
    session: HasuraSession, options = null): Promise<Nullable<ActionOutputError>> {
    if (!await isValidInt(val)) {
        return await customError(intl, errs[0], section, null, options?.line);
    }

    if (!session.isAdmin && !session.organizationIds.includes(val)) {
        return await customError(intl, errs[1], section, null, options?.line);
    }
    return null;
}

export const checkOrganizationDataBase = async <T>(intl, isDev: boolean, section: string, val: number, errs: number[],
    funcQuery: (id: number) => Promise<GraphqlOutput>,
    session?: HasuraSession, organizationId?: number,
    required = true, options = null,
    funcValidate?: (d: T) => Promise<Nullable<ActionOutputError>>,
    funcOrganizationId?: (d: T) => number): Promise<ActionOutputErrorOrData<T>> => {
    return await checkDataBase(intl, isDev, section, val, errs, funcQuery, required, options,
        async (db: T) => {
            const orgIdVal = funcOrganizationId ? funcOrganizationId(db) : db["organization_id"]
            if (db === null
                || (session && !session.organizationIds.includes(orgIdVal))
                || (organizationId && orgIdVal !== organizationId)
            ) {
                return await customError(intl, errs[1], section, val, options?.line)
            } else if (funcValidate) {
                const err = await funcValidate(db)
                if (err) {
                    return err
                }
            }
            return null
        });
}