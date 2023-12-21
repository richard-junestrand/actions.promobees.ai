import { ActionOutputError, Nullable } from "../handler";
import { customError } from "./errorUtil";

export function round(val: number, digits: number = 2) {
    const pow = Math.pow(10, digits);
    return Math.round(val * pow) / pow;
}

export function intVal(val: any, defaultVal=null) {
    const tmp = parseInt(val);
    return isNaN(tmp) ? defaultVal : tmp;
}

export function floatVal(val: any) {
    const tmp = parseFloat(val);
    return isNaN(tmp) ? null : tmp;
}

export async function isValidInt(val, required: boolean = true) {
    if (required) {
        return Number.isInteger(val);
    } else {
        return val === null || isValidInt(val);
    }
}

export async function isValidFloat(val, required: boolean = true) {
    if (required) {
        return !isNaN(parseFloat(val));
    } else {
        return val === null || isValidFloat(val);
    }
}


export const checkInt = async (intl, section: string, val: number, err: number, required: boolean = true,
    minValue: number | null = null, maxValue: number | null = null, options = null): Promise<Nullable<ActionOutputError>> => {
    if (!await isValidInt(val, required)) {
        return await customError(intl,err, section, null, options?.line);
    }
    if (val !== null && ((minValue !== null && val < minValue) || (maxValue !== null && val > maxValue))) {
        return await customError(intl,err, section, null, options?.line);
    }
    return null;
}

export const checkFloat = async (intl,section: string, val: number, err: number, required: boolean = true,
    minValue: number | null = null, maxValue: number | null = null): Promise<Nullable<ActionOutputError>> => {
    if (!await isValidFloat(val, required)) {
        return await customError(intl,err, section);
    }
    if (val !== null && ((minValue !== null && val < minValue) || (maxValue !== null && val > maxValue))) {
        return await customError(intl,err, section);
    }
    return null;
}

export const format00 = (val) => val.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
});

export const BasePointBase = 10000;

export function basePointDisplayVal(val: number) {
    return val / BasePointBase;
}

export function basePointVal(val: number) {
    return val * BasePointBase;
}

export function centVal(val: number) {
    return val * 100;
}