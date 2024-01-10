import { ActionOutputError, Nullable } from "../handler";
import { customError } from "./errorUtil";

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