import { BaseAction } from '.';
import connectionUpdateValidateAndPrepare, { ConnectionUpdateInput } from '../section/connection/connectionUpdateValidateAndPrepare';

export function handler() {
    return new BaseAction<ConnectionUpdateInput>(connectionUpdateValidateAndPrepare);
}