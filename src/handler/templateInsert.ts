import { BaseAction } from '.';
import templateInsertValidateAndPrepare, { TemplateInsertInput } from '../section/template/templateInsertValidateAndPrepare';

export function handler() {
    return new BaseAction<TemplateInsertInput>(templateInsertValidateAndPrepare);
}