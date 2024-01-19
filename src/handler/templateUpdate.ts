import { BaseAction } from '.';
import templateUpdateValidateAndPrepare, { TemplateUpdateInput } from '../section/template/templateUpdateValidateAndPrepare';

export function handler() {
    return new BaseAction<TemplateUpdateInput>(templateUpdateValidateAndPrepare);
}