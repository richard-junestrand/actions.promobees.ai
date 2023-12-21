import { customError } from './errorUtil';
import { ActionOutputError, ActionOutputErrorOrData, Nullable } from '../handler';

export const splitSpace = async (val: string) => {
    const arr = val.split('');
    const ret = [];
    let quote = false;
    let word = '';
    for (const c of arr) {
        if (c === '"') {
            if (word === '') {
                if(quote){
                    ret.push(word);
                    word = '';quote=false;
                } else {
                    quote = true;
                }                
            } else {
                ret.push(word);
                word = '';quote=false;
            }
        } else if (c === ' ') {
            if (quote) {
                word += c;
            } else if(word!==''){
                ret.push(word);
                word = ''; quote = false;
            }
        } else {
            word += c;
        }
    }
    if(word!==''){
        ret.push(word);
    }
    return ret;
}

export async function isValidString(val: string, required: boolean, maxLength: number | null = null) {
    const tmp = val || null;
    if (required) {
        return typeof tmp === "string" && !!tmp && (maxLength === null || (tmp.length <= maxLength));
    } else {
        return tmp === null || isValidString(val, true, maxLength);
    }
}

export const checkString = async (intl,section: string, val: string, err: number, required: boolean, maxLength: number|null = null, options = null): Promise<Nullable<ActionOutputError>> => {
    if (!await isValidString(val, required, maxLength)) {
        return await customError(intl,err, section, null, options?.line);
    }

    return null;
}

export const checkZipBase = async (intl,section: string, val: string, errs: number[], countryId: number | null, required=false): Promise<ActionOutputErrorOrData<string>> => {
    const err = await checkString(intl, section, val, errs[0], required, 10);
    if(err){
        return {error:err};
    }
    let ret=val;
    if (countryId === 10 && (val?.length ?? 0) > 0) {
        ret = ret.replace(/\s/g, '');
        if (!/^\d{5}$/.test(ret)) {
            return {error:await customError(intl,errs[1], section)};
        }
        ret = `${ret.slice(0, 3)} ${ret.slice(3, 5)}`;
    }
    return {
        data: ret
    };
}

export const ErrorDatabase = 'message.error-database';
export const SectionGeneral = 'general';

export function decode64(val: string){
    return Buffer.from(val, 'base64').toString()
}

export function encode64(val: string){
    return Buffer.from(val).toString('base64')
}