import { IntlShape } from '@formatjs/intl';
import { ActionOutputError } from '../handler';

const errors = new Map();

errors.set(1, {id: "message.error-1"});

// Account
errors.set(320030, {id: "message.error-invalid-string-max-len", params: ["account_name", 256] });

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
