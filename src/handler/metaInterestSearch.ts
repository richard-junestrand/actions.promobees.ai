import { BaseAction } from '.';
import metaInterestSearchValidateAndPrepare, { MetaInterestSearchInput } from '../section/meta/metaInterestSearchValidateAndPrepare';

export function handler() {
    return new BaseAction<MetaInterestSearchInput>(metaInterestSearchValidateAndPrepare);
}