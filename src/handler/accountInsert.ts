import { BaseAction } from '.';
import accountInsertValidateAndPrepare, { AccountInsertInput } from '../section/account/accountInsertValidateAndPrepare';

export function handler() {
    return new BaseAction<AccountInsertInput>(accountInsertValidateAndPrepare);
}