import { BaseAction } from '.';
import connectionDeleteValidateAndPrepare, { ConnectionDeleteInput } from '../section/connection/connectionDeleteValidateAndPrepare';

export function handler() {
    return new BaseAction<ConnectionDeleteInput>(connectionDeleteValidateAndPrepare);
}