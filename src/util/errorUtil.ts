import { IntlShape } from '@formatjs/intl';
import { ActionOutputError } from '../handler';

const errors = new Map();

errors.set(1, {id: "message.error-1"});

// Campaign
errors.set(100000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(100010, {id: "message.error-organization-session" });
errors.set(100020, {id: "message.error-invalid-value", params: ["campaign_name"] });
errors.set(100030, {id: "message.error-invalid-int", params: ["campaign_type_id"] });
errors.set(100040, {id: "message.error-invalid-value", params: ["campaign_type_id"] });
errors.set(100050, {id: "message.error-invalid-int", params: ["campaign_id"] });
errors.set(100060, {id: "message.error-invalid-value-for-organization", params: ["campaign_id"] });

export const customError = async (intl: IntlShape, id: number, section: string, params = null, extra = null): Promise<ActionOutputError> => {
    const err = errors.get(id) || {
        id: params ? "message.error-detail" : "message.error",
        code: 'undefined'
    };
    err.code = err.code || id.toString();

    let theparams = null;
    if (err.params) {
        theparams = err.params.reduce((prev, r, idx) => {
            const tmp = {} as any;
            tmp[`field${idx}`] = r;
            return {
                ...prev,
                ...tmp
            }
        }, {});
    }
    if (params) {
        theparams = {
            ...theparams,
            ...params.reduce((prev, r, idx) => {
                const tmp = {} as any;
                tmp[`p${idx}`] = r;
                return {
                    ...prev,
                    ...tmp
                }
            }, {})
        }
    }
    let message = `${section} - ${theparams ? intl.formatMessage({ id: err.id }, theparams) : intl.formatMessage({ id: err.id })}`;

    if (extra) {
        message = `${isNaN(extra) ? extra : intl.formatMessage({ id: 'line-detail' }, { p0: extra })} - ${message}`;
    }

    return {
        code: err.code,
        message
    }
}
