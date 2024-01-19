import { IntlShape } from '@formatjs/intl';
import { ActionOutputError } from '../handler';

const errors = new Map();

errors.set(1, {id: "message.error-1"});

// campaign
errors.set(100000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(100010, {id: "message.error-organization-session" });
errors.set(100020, {id: "message.error-invalid-value", params: ["campaign_name"] });
errors.set(100030, {id: "message.error-invalid-int", params: ["campaign_type_id"] });
errors.set(100040, {id: "message.error-invalid-value", params: ["campaign_type_id"] });
errors.set(100050, {id: "message.error-invalid-int", params: ["campaign_id"] });
errors.set(100060, {id: "message.error-invalid-value-for-organization", params: ["campaign_id"] });
errors.set(100070, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(100080, {id: "message.error-100080" });

// campaign_template_cross
errors.set(110000, {id: "message.error-invalid-int", params: ["template_id"] });
errors.set(110010, {id: "message.error-invalid-value-for-organization", params: ["template_id"] });
errors.set(110020, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(110030, {id: "message.error-invalid-int", params: ["campaign_template_cross_id"] });
errors.set(110040, {id: "message.error-invalid-value", params: ["campaign_template_cross_id"] });
errors.set(110050, {id: "message.error-not-match-parent", params: ["campaign_template_cross", "campaign_id"] });

// template
errors.set(120000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(120010, {id: "message.error-organization-session" });
errors.set(120020, {id: "message.error-invalid-value", params: ["template_name"] });
errors.set(120030, {id: "message.error-invalid-int", params: ["template_type_id"] });
errors.set(120040, {id: "message.error-invalid-value", params: ["template_type_id"] });
errors.set(120050, {id: "message.error-invalid-int", params: ["template_id"] });
errors.set(120060, {id: "message.error-invalid-value-for-organization", params: ["template_id"] });
errors.set(120070, {id: "message.error-data-used", params: ["campaign_template_cross"]});

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
