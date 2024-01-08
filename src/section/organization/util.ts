import { ActionOutputError, Nullable } from "../../handler";
import { HasuraSession } from "../../handler/session";
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