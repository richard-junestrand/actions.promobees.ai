import { OrganizationInput } from ".";
import { GraphqlOutput } from "../../db";
import { Organization } from "../../db/generated";
import { getCountryById } from "../../db/query";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { checkDataBase } from "../../util/dataUtil";
import { customError } from "../../util/errorUtil";
import { isValidInt } from "../../util/numUtil";
import { ErrorDatabase, checkString, checkZipBase } from "../../util/stringUtil";
import { getOrganizationById } from "./query";

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
                return await customError(intl, errs[1], section, [val], options?.line)
            } else if (funcValidate) {
                const err = await funcValidate(db)
                if (err) {
                    return err
                }
            }
            return null
        });
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Organization>, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
    const err = await checkOrganizationIdBase(intl, section, data.id, [140000, 140010], session);
    if (err) {
        return err;
    }
    //
    const { errors, data: dataDb } = await getOrganizationById(data.id);
    if (errors) {
        isDev && console.log(errors[0]);
        return await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })]);
    }

    if (dataDb.data === null) {
        return await customError(intl, 140020, section, [data.id]);
    }
    data.db = dataDb.data;
    return null;
}

export const checkPaymentType = async (intl, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    if (!await isValidInt(data.payment_type_id, false)) {
        return await customError(intl, 140030, section);
    }
    return null
}

export const checkName = async (intl, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    return await checkString(intl, section, data.organization_name, 140040, true, 256);
}

export const checkStreet = async (intl, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    return await checkString(intl, section, data.street_address, 140050, false, 256);
}

export const checkZip = async (intl,section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    const errOrData = await checkZipBase(intl,section, data.zipcode, [140060,140070], data.country_id);
    if(!errOrData.error){
        data.zipcode=errOrData.data;        
    }
    return errOrData.error;
}

export const checkCity = async (intl, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    return await checkString(intl, section, data.city, 140080, false, 256);
}

export const checkCountry = async (intl, isDev: boolean, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    return (await checkDataBase(intl, isDev, section, data.country_id, [140090, 140100], getCountryById)).error
}

export const checkInfoEmail = async (intl, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    return await checkString(intl, section, data.info_email, 140110, false, 256);
}

export const checkInvoiceEmail = async (intl, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    return await checkString(intl, section, data.invoice_email, 140120, false, 256);
}

export const checkNr = async (intl, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    return await checkString(intl, section, data.organization_reg_nr, 140130, false, 256);
}

export const checkVatNr = async (intl, section: string, data: OrganizationInput): Promise<Nullable<ActionOutputError>> => {
    return await checkString(intl, section, data.vat_nr, 140140, false, 256);
}