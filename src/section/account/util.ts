import { AccountInput } from ".";
import { ActionOutputError, Nullable } from "../../handler";
import { checkString } from "../../util/stringUtil";

export const checkAccountName = async (intl,section: string, data: AccountInput): Promise<Nullable<ActionOutputError>> => {
    return await checkString(intl,section, data.account_name, 320030, false, 256);
}