import { IntlShape } from '@formatjs/intl';
import { ActionOutputError } from '../handler';

const errors = new Map();

errors.set(1, {id: "message.error-no-permission"});

// campaign
errors.set(100000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(100010, {id: "message.error-organization-session" });
errors.set(100020, {id: "message.error-invalid-string-max-len", params: ["campaign_name", 256] });
errors.set(100030, {id: "message.error-invalid-int", params: ["campaign_type_id"] });
errors.set(100040, {id: "message.error-invalid-value", params: ["campaign_type_id"] });
errors.set(100050, {id: "message.error-invalid-int", params: ["campaign_id"] });
errors.set(100060, {id: "message.error-invalid-value-for-organization", params: ["campaign_id"] });
errors.set(100070, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(100080, {id: "message.error-100080" });
errors.set(100090, {id: "message.error-invalid-int", params: ["connection_id"] });
errors.set(100100, {id: "message.error-invalid-value-for-organization", params: ["connection_id"] });

// campaign_template_cross
errors.set(110000, {id: "message.error-invalid-int", params: ["template_id"] });
errors.set(110010, {id: "message.error-invalid-value-for-organization", params: ["template_id"] });
errors.set(110020, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(110030, {id: "message.error-invalid-int", params: ["campaign_template_cross_id"] });
errors.set(110040, {id: "message.error-invalid-value", params: ["campaign_template_cross_id"] });
errors.set(110050, {id: "message.error-not-match-parent", params: ["campaign_template_cross", "campaign_id"] });
errors.set(110060, {id: "message.error-duplicated-value2", params: ["campaign_id", "template_id"] });

// template
errors.set(120000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(120010, {id: "message.error-organization-session" });
errors.set(120020, {id: "message.error-invalid-string-max-len", params: ["template_name", 256] });
errors.set(120030, {id: "message.error-invalid-int", params: ["template_type_id"] });
errors.set(120040, {id: "message.error-invalid-value", params: ["template_type_id"] });
errors.set(120050, {id: "message.error-invalid-int", params: ["template_id"] });
errors.set(120060, {id: "message.error-invalid-value-for-organization", params: ["template_id"] });
errors.set(120070, {id: "message.error-data-used", params: ["campaign_template_cross"]});
errors.set(120080, {id: "message.error-120080" });

// user
errors.set(130000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(130010, {id: "message.error-invalid-value", params: ["id"] });
errors.set(130020, {id: "message.error-invalid-string-max-len", params: ["user_email", 256] });
errors.set(130030, {id: "message.error-invalid-string-max-len", params: ["phone", 256] });
errors.set(130040, {id: "message.error-invalid-string-max-len", params: ["first_name", 256] });
errors.set(130050, {id: "message.error-invalid-string-max-len", params: ["initials", 3] });
errors.set(130060, {id: "message.error-invalid-string-max-len", params: ["last_name", 256] });
errors.set(130070, {id: "message.error-invalid-string-max-len", params: ["password", 20] });
errors.set(130080, {id: "message.error-not-match", params: ["password", "confirm_password"] });
errors.set(130090, {id: "message.error-130090" });
errors.set(130100, {id: "message.error-130100" });
errors.set(130110, {id: "message.error-duplicated-value", params: ["user_email"] });
errors.set(130120, {id: "message.error-130120" });
errors.set(130130, {id: "message.error-130130" });

// organization
errors.set(140000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(140010, {id: "message.error-organization-session" });
errors.set(140020, {id: "message.error-invalid-value", params: ["id"] });
errors.set(140030, {id: "message.error-invalid-int", params: ["payment_type_id"] });
errors.set(140040, {id: "message.error-invalid-string-max-len", params: ["organization_name", 256] });
errors.set(140050, {id: "message.error-invalid-string-max-len", params: ["street_address", 256] });
errors.set(140060, {id: "message.error-invalid-string-max-len", params: ["zipcode", 10] });
errors.set(140070, {id: "message.error-invalid-sweden-zip-code"});
errors.set(140080, {id: "message.error-invalid-string-max-len", params: ["city", 256] });
errors.set(140090, {id: "message.error-invalid-int", params: ["country_id"] });
errors.set(140100, {id: "message.error-invalid-value", params: ["country_id"] });
errors.set(140110, {id: "message.error-invalid-string-max-len", params: ["info_email", 256] });
errors.set(140120, {id: "message.error-invalid-string-max-len", params: ["invoice_email", 256] });
errors.set(140130, {id: "message.error-invalid-string-max-len", params: ["organization_reg_nr", 256] });
errors.set(140140, {id: "message.error-invalid-string-max-len", params: ["vat_nr", 256] });

// organization_user
errors.set(150000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(150010, {id: "message.error-invalid-value", params: ["id"] });
errors.set(150020, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(150030, {id: "message.error-organization-session" });
errors.set(150040, {id: "message.error-duplicated-value2", params: ["user_id", "organization_id"] });

// organization_user_role
errors.set(160000, {id: "message.error-invalid-int", params: ["role_id"] });
errors.set(160010, {id: "message.error-invalid-value", params: ["role_id"] });

// connection
errors.set(170000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(170010, {id: "message.error-invalid-value-for-organization", params: ["id"] });
errors.set(170020, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(170030, {id: "message.error-organization-session" });
errors.set(170040, {id: "message.error-duplicated-value2", params: ["connection_type_id", "organization_id"] });
errors.set(170050, {id: "message.error-invalid-int", params: ["connection_type_id"] });
errors.set(170080, {id: "message.error-invalid-value", params: ["connection_type_id"] });
errors.set(170090, {id: "message.error-170090" });
errors.set(170100, {id: "message.error-170100" });
errors.set(170110, {id: "message.error-170110" });
errors.set(170120, {id: "message.error-170120" });
errors.set(170130, {id: "message.error-invalid-value", params: ["ad_account_id"] });
errors.set(170140, {id: "message.error-170140" });
errors.set(170150, {id: "message.error-170150" });
errors.set(170160, {id: "message.error-invalid-value", params: ["credentials.ad_account_id"] });
errors.set(170170, {id: "message.error-data-used", params: ["campaign"]});
//
errors.set(500000, {id: "message.error-500000" });
errors.set(500010, {id: "message.error-500010" });

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
