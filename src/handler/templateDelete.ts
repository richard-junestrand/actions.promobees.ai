import { BaseAction } from '.';
import templateDeleteValidateAndPrepare, { TemplateDeleteInput } from '../section/template/templateDeleteValidateAndPrepare';

export function handler() {
    return new BaseAction<TemplateDeleteInput>(templateDeleteValidateAndPrepare);
}