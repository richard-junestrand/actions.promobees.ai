import { BaseAction } from '.';
import metaLocationSearchValidateAndPrepare, { MetaLocationSearchInput } from '../section/meta/metaLocationSearchValidateAndPrepare';

export function handler() {
    return new BaseAction<MetaLocationSearchInput>(metaLocationSearchValidateAndPrepare);
}