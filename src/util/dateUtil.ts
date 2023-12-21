import moment from "moment";
import { ActionOutputError, Nullable } from "../handler";
import { customError } from "./errorUtil";

const sieDateFormat = 'YYYYMMDD';
const dbDateFormat = 'YYYY-MM-DD';
const dateTimeFormat='YYYY-MM-DD HH:mm:ss';
export const DateTimeFileFormat='YYYY-MM-DD_HHmmss';

export function formatDateSie(val) {
    return val.format(sieDateFormat);
};

export function formatDateDb(val) {
    return val.format(dbDateFormat);
};

export function formatDateTime(val) {
    return val.format(dateTimeFormat);
};

export function sieToDbDate(val) {
    return formatDateDb(moment(val, sieDateFormat));
}

export function momentFromDb(val) {
    return moment(val, dbDateFormat);
}

export async function isValidDate(val: string, required = true) {
    if (required) {
        return moment(val).isValid();
    } else {
        return val === null || isValidDate(val, true);
    }
}

export async function isValidDateRange(from: string, to: string) {
    return moment(from) <= moment(to);
}

export function momentVal(val) {
    return moment(val);
}

export function momentNow() {
    return moment();
}

export const checkDate = async (intl,section: string, val: any, err: number, required: boolean=true, options = null): Promise<Nullable<ActionOutputError>> => {
    if (!await isValidDate(val, required)) {
        return await customError(intl,err, section, null, options?.line);
    }

    return null;
}

export async function isValidTime(val: string, required = true) {
    if (required) {
        return moment(val,'hh:mm').isValid();
    } else {
        return val === null || isValidTime(val, true);
    }
}

export const checkTime = async (intl,section: string, val: any, err: number, required: boolean=true, options = null): Promise<Nullable<ActionOutputError>> => {
    if (!await isValidTime(val, required)) {
        return await customError(intl,err, section, null, options?.line);
    }

    return null;
}