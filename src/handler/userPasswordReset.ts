import { BaseAction } from '.';
import userPasswordResetValidateAndPrepare, { UserPasswordResetInput } from '../section/user/userPasswordResetValidateAndPrepare';

export function handler() {
    return new BaseAction<UserPasswordResetInput>(userPasswordResetValidateAndPrepare);
}