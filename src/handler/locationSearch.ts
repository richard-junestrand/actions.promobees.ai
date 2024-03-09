import { BaseAction } from '.';
import locationSearchValidateAndPrepare, { LocationSearchInput } from '../section/location/locationSearchValidateAndPrepare';

export function handler() {
    return new BaseAction<LocationSearchInput>(locationSearchValidateAndPrepare);
}