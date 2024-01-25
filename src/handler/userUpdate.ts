import { BaseAction } from '.';
import userUpdateValidateAndPrepare, { UserUpdateInput } from '../section/user/userUpdateValidateAndPrepare';

export function handler() {
    return new BaseAction<UserUpdateInput>(userUpdateValidateAndPrepare);
}