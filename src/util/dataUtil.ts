import { GraphqlOutput } from "../db";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, RelListInput } from "../handler";
import { customError } from "./errorUtil";
import { isValidInt } from "./numUtil";
import { ErrorDatabase } from "./stringUtil";

// Called like sumProperty(verifications, "local_value_bp")
export const sumProperty = async (items, property = null) => {
    if (property === null) {
        return items.reduce((a, b) => {
            return a + b;
        }, 0);
    }
    return items.reduce((a, b) => {
        return a + b[property];
    }, 0);
}

export async function isEmptyArray(arr) {
    return (!(arr?.length > 0));
}

export async function isValidArray(val, required = true) {
    if (required) {
        return Array.isArray(val);
    } else {
        return val === null || isValidArray(val);
    }
}

export async function isValidObject(val, required = true) {
    if (required) {
        return !Array.isArray(val) && !!val && typeof val === 'object';
    } else {
        return val === null || isValidObject(val);
    };
}

export async function isValidBoolean(val, required = true) {
    if (required) {
        return val === false || val === true;
    } else {
        return val === null || isValidBoolean(val);
    }

}

export const checkBoolean = async (intl, section: string, val: boolean, err: number, required = true): Promise<Nullable<ActionOutputError>> => {
    if (!await isValidBoolean(val, required)) {
        return await customError(intl, err, section);
    }
    return null;
}

export function parseObject(text) {
    try {
        return JSON.parse(text);
    } catch (err) {
        return null;
    }
}

export function propertyValue(path: string, data) {
    let ret = data;
    path.split('.').forEach(r => {
        const i = r.lastIndexOf('/');
        if (i === -1) {
            ret = ret[r];
        } else {
            ret = ret[r.substring(0, i)][parseInt(r.substring(i + 1))];
        }
    });
    return ret;
}

export function uniqueList(lst: any[]) {
    return lst.filter((value, index, array) => {
        return array.indexOf(value) === index;
    })
}

export const checkDataBase = async <T>(intl, isDev: boolean, section: string, val: number, errs: number[],
    funcQuery: (id: number) => Promise<GraphqlOutput>,
    required = true, options = null,
    funcValidate?: (d: T) => Promise<Nullable<ActionOutputError>>): Promise<ActionOutputErrorOrData<T>> => {
    if (!await isValidInt(val, required)) {
        return { error: await customError(intl, errs[0], section, null, options?.line) };
    }
    //
    let db: T = null;
    if (val !== null) {
        const { errors, data: dataDb } = await funcQuery(val);
        if (errors) {
            isDev && console.log(errors[0]);
            return { error: await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })], options?.line) };
        }
        //
        db = dataDb.data
        if (db === null) {
            return { error: await customError(intl, errs[1], section, val, options?.line) }
        } else if (funcValidate) {
            const err = await funcValidate(db)
            if (err) {
                return { error: err }
            }
        }
    }
    return {
        data: db
    };
}

export const checkList = async <T>(intl, section: string, data: T[],
    funcValidate?: (d: T, idx: number) => Promise<Nullable<ActionOutputError>>, err?: number): Promise<Nullable<ActionOutputError>> => {
    if (err && await isEmptyArray(data)) {
        return await customError(intl, err, section);
    }
    return await Promise.all(data.map(async (r, idx) => {
        const err = await funcValidate(r, idx);
        if (err) {
            return Promise.reject(err);
        }
    })).then(r => null)
        .catch(error => {
            return error
        });
}

export const checkRelList = async <T>(intl, section: string, data: RelListInput<T>,
    funcValidate?: (d: T, idx: number) => Promise<Nullable<ActionOutputError>>,
    err?: number, setDefault = true): Promise<Nullable<ActionOutputError>> => {
    if (setDefault) {
        data = data || { data: [] };
    }
    return checkList(intl, section, data.data, funcValidate, err)
}