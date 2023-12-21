import { ActionOutputError, Nullable } from "../handler";
import { customError } from "./errorUtil";

export function isMatchRegex(val: string, p: string | RegExp) {
    const regex = new RegExp(p);
    return regex.test(val);
}

export const checkRegex = async (intl,section: string, val: string, err: number, pattern: string | RegExp): Promise<Nullable<ActionOutputError>> => {
    if (!isMatchRegex(val, pattern)) {
        return await customError(intl,err, section);
    }
    return null;
}