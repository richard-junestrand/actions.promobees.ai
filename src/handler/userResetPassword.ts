import { BaseAction } from '.';
import userResetPasswordValidateAndPrepare, { UserResetPasswordInput } from '../section/user/userResetPasswordValidateAndPrepare';

export function handler() {
    return new BaseAction<UserResetPasswordInput>(userResetPasswordValidateAndPrepare);
}