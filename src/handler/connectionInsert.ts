import { BaseAction } from '.';
import connectionInsertValidateAndPrepare, { ConnectionInsertInput } from '../section/connection/connectionInsertValidateAndPrepare';

export function handler() {
    return new BaseAction<ConnectionInsertInput>(connectionInsertValidateAndPrepare);
}