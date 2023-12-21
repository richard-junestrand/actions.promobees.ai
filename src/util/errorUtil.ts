import { IntlShape } from '@formatjs/intl';
import { ActionOutputError } from '../handler';

const errors = new Map();

errors.set(1, {id: "message.error-1"});

// Mail
errors.set(100000, {id: "message.error-100000"});
errors.set(100010, {id: "message.error-100010"});
errors.set(100020, {id: "message.error-100020"});
errors.set(100030, {id: "message.error-100030"});

// Identification nr
errors.set(110000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(110010, {id: "message.error-invalid-value-for-organization", params: ["identification_nr id"] });
errors.set(110020, {id: "message.error-invalid-int", params: ["next_nr"] });
errors.set(110030, {id: "message.error-110030"});
errors.set(110040, {id: "message.error-used-value", params: ["next_nr"] });
errors.set(110050, {id: "message.error-invalid-value", params: ["serie_type"] });
errors.set(110060, {id: "message.error-invalid-int", params: ["accounting_year_id"] });
errors.set(110070, {id: "message.error-invalid-value-for-organization", params: ["accounting_year_id"] });
errors.set(110080, {id: "message.error-conflicted-value", params: ["next_nr"] });

// organization_backup
errors.set(120000, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(120010, {id: "message.error-invalid-value", params: ["period"] });
errors.set(120020, {id: "message.error-invalid-value", params: ["backup_at"] });
errors.set(120030, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(120040, {id: "message.error-organization-session" });
errors.set(120050, {id: "message.error-already-record", params: ["organization_backup"] });

// Customer price agreement
errors.set(130000, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(130010, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(130020, {id: "message.error-invalid-int", params: ["id"] });
errors.set(130030, {id: "message.error-invalid-float", params: ["value"] });
errors.set(130040, {id: "message.error-invalid-value-for-organization", params: ["customer comment id"] });
errors.set(130050, {id: "message.error-invalid-int", params: ["customer_id"] });
errors.set(130060, {id: "message.error-invalid-value-for-organization", params: ["customer_id"] });
errors.set(130070, {id: "message.error-inactive", params: ["customer_id"]});
errors.set(130080, {id: "message.error-inactive", params: ["article_id"]});
errors.set(130090, {id: "message.error-invalid-float", params: ["units_min"] });
errors.set(130100, {id: "message.error-invalid-date-range", params: ["valid_from", "valid_to"] });
errors.set(130110, {id: "message.error-invalid-value", params: ["valid_from"] });
errors.set(130120, {id: "message.error-invalid-value", params: ["valid_to"] });
errors.set(130130, {id: "message.error-invalid-int", params: ["article_id"] });

// Entity type
errors.set(140000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(140010, {id: "message.error-table-organization-session" });
errors.set(140020, {id: "message.error-invalid-value-for-organization", params: ["entity_type id"] });
errors.set(140030, {id: "message.error-invalid-string-max-len", params: ["entity_type_name", 256] });
errors.set(140040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(140050, {id: "message.error-invalid-int", params: ["parent_entity_type_id"] });
errors.set(140060, {id: "message.error-invalid-value-for-organization", params: ["parent_entity_type_id id"] });
errors.set(140070, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(140080, {id: "message.error-data-used", params: ["entity_type"]});
errors.set(140090, {id: "message.error-invalid-value", params: ["entity_type_name_translated"] });
errors.set(140100, {id: "message.error-data-used", params: ["entity_type_attribute"]});
errors.set(140110, {id: "message.error-data-used", params: ["entity_type_model_attribute"]});

// Entity type attribute
errors.set(150000, {id: "message.error-invalid-value", params: ["attribute_type"] });
errors.set(150010, {id: "message.error-invalid-int", params: ["min_integer_value"] });
errors.set(150020, {id: "message.error-invalid-int", params: ["id"] });
errors.set(150030, {id: "message.error-invalid-string-max-len", params: ["attribute_name", 256] });
errors.set(150040, {id: "message.error-invalid-value-for-organization", params: ["entity_type_attribute_id"] });
errors.set(150050, {id: "message.error-invalid-int", params: ["entity_type_id"] });
errors.set(150060, {id: "message.error-invalid-value-for-organization", params: ["entity_type_id"] });
errors.set(150070, {id: "message.error-invalid-int", params: ["max_integer_value"] });
errors.set(150080, {id: "message.error-invalid-value", params: ["attribute_name_translated"] });
errors.set(150090, {id: "message.error-invalid-value", params: ["min_integer_value/max_integer_value"] });
errors.set(150100, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(150110, {id: "message.error-invalid-string-max-len", params: ["tooltip_title", 256] });
errors.set(150120, {id: "message.error-invalid-value", params: ["tooltip_title_translated"] });
errors.set(150130, {id: "message.error-invalid-string-max-len", params: ["tooltip_text", 4000] });
errors.set(150140, {id: "message.error-invalid-value", params: ["tooltip_text_translated"] });
errors.set(150150, {id: "message.error-data-used", params: ["entity_attribute_cross"]});
errors.set(150160, {id: "message.error-table-organization-session" });

// Entity type model attribute
errors.set(160000, {id: "message.error-invalid-value", params: ["attribute_type"] });
errors.set(160010, {id: "message.error-invalid-int", params: ["min_integer_value"] });
errors.set(160020, {id: "message.error-invalid-int", params: ["id"] });
errors.set(160030, {id: "message.error-invalid-string-max-len", params: ["attribute_name", 256] });
errors.set(160040, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model_attribute_id"] });
errors.set(160050, {id: "message.error-invalid-int", params: ["entity_type_id"] });
errors.set(160060, {id: "message.error-invalid-value-for-organization", params: ["entity_type_id"] });
errors.set(160070, {id: "message.error-invalid-int", params: ["max_integer_value"] });
errors.set(160080, {id: "message.error-invalid-value", params: ["attribute_name_translated"] });
errors.set(160090, {id: "message.error-invalid-value", params: ["min_integer_value/max_integer_value"] });
errors.set(160100, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(160110, {id: "message.error-invalid-string-max-len", params: ["tooltip_title", 256] });
errors.set(160120, {id: "message.error-invalid-value", params: ["tooltip_title_translated"] });
errors.set(160130, {id: "message.error-invalid-string-max-len", params: ["tooltip_text", 4000] });
errors.set(160140, {id: "message.error-invalid-value", params: ["tooltip_text_translated"] });
errors.set(160150, {id: "message.error-data-used", params: ["entity_type_model_attribute_cross"]});

// Entity type attribute selection
errors.set(170000, {id: "message.error-data-used", params: ["entity_attribute_cross"]});
errors.set(170010, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(170020, {id: "message.error-invalid-int", params: ["id"] });
errors.set(170030, {id: "message.error-invalid-string-max-len", params: ["entity_type_attribute_selection_name", 256] });
errors.set(170040, {id: "message.error-invalid-value-for-organization", params: ["entity_type_attribute_selection_id"] });
errors.set(170050, {id: "message.error-invalid-int", params: ["entity_type_attribute_id"] });
errors.set(170060, {id: "message.error-invalid-value-for-organization", params: ["entity_type_attribute_id"] });
errors.set(170070, {id: "message.error-invalid-value", params: ["entity_type_attribute_selection_name_translated"] });
errors.set(170080, {id: "message.error-table-organization-session" });

// Entity type model attribute selection
errors.set(180000, {id: "message.error-data-used", params: ["entity_type_model_attribute_cross"]});
errors.set(180010, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(180020, {id: "message.error-invalid-int", params: ["id"] });
errors.set(180030, {id: "message.error-invalid-string-max-len", params: ["entity_type_model_attribute_selection_name", 256] });
errors.set(180040, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model_attribute_selection_id"] });
errors.set(180050, {id: "message.error-invalid-int", params: ["entity_type_model_attribute_id"] });
errors.set(180060, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model_attribute_id"] });
errors.set(180070, {id: "message.error-invalid-value", params: ["entity_type_model_attribute_selection_name_translated"] });

// glDimensionValue
errors.set(200000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(200010, {id: "message.error-invalid-value", params: ["gl dimension value id"] });
errors.set(200020, {id: "message.error-invalid-int", params: ["share_bp"] });
errors.set(200030, {id: "message.error-not-match-parent", params: ["gl_dimension_value", "gl_dimension_id"] });
errors.set(200040, {id: "message.error-invalid-int", params: ["dimension_value_id"] });
errors.set(200050, {id: "message.error-invalid-string-max-len", params: ["comment", 256] });

// glDimension
errors.set(210000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(210010, {id: "message.error-duplicated-value", params: ["dimension_value_id"] });
errors.set(210020, {id: "message.error-empty-array-data", params: ["l_dimension_values"] });
errors.set(210030, {id: "message.error-invalid-int", params: ["dimension_id"] });
errors.set(210040, {id: "message.error-210040" });
errors.set(210050, {id: "message.error-210050" });
errors.set(210060, {id: "message.error-invalid-sum-10000", params: ["gl_dimension_value.share_bp"] });
errors.set(210070, {id: "message.error-invalid-string-max-len", params: ["comment", 256] });
errors.set(210080, {id: "message.error-not-match-parent", params: ["gl_dimension", "gl_id"] });
errors.set(210090, {id: "message.error-invalid-value", params: ["gl_dimension"] });

// gl
errors.set(220000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(220010, {id: "message.error-invalid-value-for-organization", params: ["currency_id"] });
errors.set(220020, {id: "message.error-invalid-int", params: ["currency_value_bp"] });
errors.set(220030, {id: "message.error-220030" });
errors.set(220040, {id: "message.error-invalid-string-max-len", params: ["comment", 256] });
errors.set(220050, {id: "message.error-invalid-int", params: ["account_id"] });
errors.set(220060, {id: "message.error-required", params: ["currency_id"] });
errors.set(220070, {id: "message.error-invalid-int", params: ["local_value_bp"] });
errors.set(220080, {id: "message.error-invalid-int", params: ["currency_id"] });
errors.set(220090, {id: "message.error-invalid-value-for-organization", params: ["account id"] });
errors.set(220100, {id: "message.error-220100" });
errors.set(220110, {id: "message.error-220110" });
errors.set(220120, {id: "message.error-220120" });
errors.set(220130, {id: "message.error-220130" });
errors.set(220140, {id: "message.error-220140" });
errors.set(220150, {id: "message.error-220150" });
errors.set(220160, {id: "message.error-not-match-parent", params: ["gl", "verification_id"] });
errors.set(220170, {id: "message.error-invalid-value", params: ["gl_id"] });
errors.set(220180, {id: "message.error-deactivated", params: "gl_id" });
errors.set(220190, {id: "message.error-220190" });
errors.set(220200, {id: "message.error-inactive", params: "account_id"});

// Verification
errors.set(230000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(230010, {id: "message.error-invalid-int", params: ["verification_series_id"] });
errors.set(230020, {id: "message.error-empty-array-data", params: ["ls"] });
errors.set(230030, {id: "message.error-organization-session" });
errors.set(230040, {id: "message.error-invalid-value", params: ["verification status"] });
errors.set(230050, {id: "message.error-invalid-string-max-len", params: ["verification title", 256] });
errors.set(230060, {id: "message.error-invalid-value", params: ["verification date"] });
errors.set(230070, {id: "message.error-invalid-value", params: ["verification id"] });
errors.set(230080, {id: "message.error-invalid-int", params: ["id"] });
errors.set(230090, {id: "message.error-230090" });
errors.set(230100, {id: "message.error-230100"});
errors.set(230110, {id: "message.error-invalid-array", params: ["documentation"] });
errors.set(230120, {id: "message.error-230120" });
errors.set(230130, {id: "message.error-invalid-value", params: ["document.uri"] });
errors.set(230140, {id: "message.error-not-found", params: ["document.uri"] });
errors.set(230150, {id: "message.error-fail-get-value", params: ["document.uri"] });
errors.set(230160, {id: "message.error-230160" });
errors.set(230170, {id: "message.error-invalid-value-for-organization", params: ["verification_series_id"] });
errors.set(230180, {id: "message.error-invalid-int", params: ["accounting_year_id"] });
errors.set(230190, {id: "message.error-230190"});
errors.set(230200, {id: "message.error-230200"});
errors.set(230210, {id: "message.error-230210"});
errors.set(230220, {id: "message.error-invalid-int", params: ["corrected_in_verification_id"] });
errors.set(230230, {id: "message.error-invalid-value", params: ["corrected_in_verification_id"] });
errors.set(230240, {id: "message.error-invalid-value-for-organization", params: ["account_nr"] });
errors.set(230250, {id: "message.error-230250"});

// VerificationFromTemplate
errors.set(240000, {id: "message.error-invalid-int", params: ["verification_template_id"] });
errors.set(240010, {id: "message.error-invalid-int", params: ["currency_amount_bp"] });
errors.set(240020, {id: "message.error-invalid-value-for-organization", params: ["verification_template_id"] });
errors.set(240030, {id: "message.error-invalid-int", params: ["currency_id"] });
errors.set(240040, {id: "message.error-required", params: ["currency_id"] });
errors.set(240050, {id: "message.error-invalid-value-for-organization", params: ["currency_id"] });

// VerificationTemplate
errors.set(250000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(250010, {id: "message.error-invalid-int", params: ["verification_series_id"] });
errors.set(250020, {id: "message.error-empty-array-data", params: ["verification_template.verification_template_gls"] });
errors.set(250030, {id: "message.error-250030" });
errors.set(250040, {id: "message.error-invalid-string-max-len", params: ["verification_template_name", 256] });
errors.set(250050, {id: "message.error-invalid-string-max-len", params: ["verification template title", 256] });
errors.set(250060, {id: "message.error-250060"});
errors.set(250070, {id: "message.error-invalid-value-for-organization", params: ["verification_template_id"] });
errors.set(250080, {id: "message.error-invalid-int", params: ["id"] });
errors.set(250090, {id: "message.error-250090" });
errors.set(250100, {id: "message.error-invalid-value-for-organization", params: ["verification_series_id"] });
errors.set(250110, {id: "message.error-250110"});
errors.set(250120, {id: "message.error-invalid-int", params: ["verification_template_nr"] });

// VerificationTemplateGl
errors.set(260000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(260010, {id: "message.error-invalid-value", params: ["verification_template_gl id"] });
errors.set(260020, {id: "message.error-not-match-parent", params: ["verification_template_gl", "verification_template_id"] });
errors.set(260030, {id: "message.error-260030" });
errors.set(260040, {id: "message.error-invalid-string-max-len", params: ["comment", 256] });
errors.set(260050, {id: "message.error-invalid-int", params: ["account_id"] });
errors.set(260060, {id: "message.error-260060" });
errors.set(260070, {id: "message.error-invalid-int", params: ["share_bp"] });
errors.set(260080, {id: "message.error-260080" });
errors.set(260090, {id: "message.error-invalid-value-for-organization", params: ["account"] });
errors.set(260100, {id: "message.error-inactive", params: ["account_id"]});

// VerificationTemplateGlDimension
errors.set(270000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(270010, {id: "message.error-duplicated-value", params: ["dimension_value_id"] });
errors.set(270020, {id: "message.error-empty-array-data", params: ["l_dimension_values"] });
errors.set(270030, {id: "message.error-invalid-int", params: ["dimension_id"] });
errors.set(270040, {id: "message.error-270040" });
errors.set(270050, {id: "message.error-270050" });
errors.set(270060, {id: "message.error-invalid-sum-10000", params: ["verification_template_gl_dimension_value.share_bp"] });
errors.set(270070, {id: "message.error-invalid-value", params: ["verification_template_gl_dimension"] });
errors.set(270080, {id: "message.error-not-match-parent", params: ["verification_template_gl_dimension", "verification_template_gl_id"] });

// VerificationTemplateGlDimensionValue
errors.set(280000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(280010, {id: "message.error-invalid-value", params: ["verification template gl dimension value id"] });
errors.set(280020, {id: "message.error-invalid-int", params: ["share_bp"] });
errors.set(280030, {id: "message.error-not-match-parent", params: ["verification_template gl dimension value", "verification_template_gl_dimension_id"] });
errors.set(280040, {id: "message.error-invalid-int", params: ["dimension_value_id"] });

// Organization
errors.set(290000, {id: "message.error-invalid-int", params: ["organization_type_id"] });
errors.set(290001, {id: "message.error-290001" });
errors.set(290002, {id: "message.error-290002" });
errors.set(290003, {id: "message.error-290003" });
errors.set(290004, {id: "message.error-290004" });
errors.set(290005, {id: "message.error-290005" });
errors.set(290006, {id: "message.error-290006" });
errors.set(290007, {id: "message.error-290007" });
errors.set(290008, {id: "message.error-290008" });
errors.set(290009, {id: "message.error-290009" });
errors.set(290010, {id: "message.error-290010"});
errors.set(290011, {id: "message.error-invalid-boolean", params: ["invoice_round_cent"] });
errors.set(290012, {id: "message.error-invalid-int", params: ["account_id_rounding_invoice"] });
errors.set(290013, {id: "message.error-invalid-value-for-organization", params: ["account_id_rounding_invoice"] });
errors.set(290014, {id: "message.error-inactive", params: ["account_id_rounding_invoice"]});
errors.set(290020, {id: "message.error-invalid-value", params: ["organization type"] });
errors.set(290030, {id: "message.error-invalid-string-max-len", params: ["organization_name", 256] });
errors.set(290040, {id: "message.error-invalid-string-max-len", params: ["attention", 256] });
errors.set(290050, {id: "message.error-invalid-int", params: ["accounting_regulation_id"] });
errors.set(290060, {id: "message.error-organization-session" });
errors.set(290070, {id: "message.error-invalid-value", params: ["accounting_regulation_id"] });
errors.set(290080, {id: "message.error-invalid-string-max-len", params: ["vat_number", 256] });
errors.set(290090, {id: "message.error-invalid-array", params: ["invoice_emails"] });
errors.set(290100, {id: "message.error-invalid-string-max-len", params: ["invoice_email", 256] });
errors.set(290110, {id: "message.error-invalid-int", params: ["id"] });
errors.set(290120, {id: "message.error-invalid-string-max-len", params: ["registration number", 256] });
errors.set(290130, {id: "message.error-invalid-value", params: ["organization id"] });
errors.set(290140, {id: "message.error-invalid-int", params: ["api_accounting_type_id"] });
errors.set(290150, {id: "message.error-290150"});
errors.set(290160, {id: "message.error-invalid-string-max-len", params: ["organization_slug", 256] });
errors.set(290170, {id: "message.error-duplicated-value", params: ["organization_slug"] });
errors.set(290180, {id: "message.error-invalid-int", params: ["notification_type_id"] });
errors.set(290190, {id: "message.error-invalid-value", params: ["notification_type_id"] });
errors.set(290200, {id: "message.error-inactive", params: ["notification_type_id"]});
errors.set(290210, {id: "message.error-invalid-value", params: ["api_accounting_type_id"] });
errors.set(290220, {id: "message.error-invalid-boolean", params: ["show_vat_selection"] });
errors.set(290230, {id: "message.error-invalid-string-max-len", params: ["organization_own_identification", 256] });
errors.set(290240, {id: "message.error-invalid-int", params: ["approval_cycle_id_default"] });
errors.set(290250, {id: "message.error-not-found", params: ["country_code"] });
errors.set(290260, {id: "message.error-290260" });
errors.set(290270, {id: "message.error-290270" });
errors.set(290280, {id: "message.error-invalid-boolean", params: ["invoice_numbers_only"] });
errors.set(290290, {id: "message.error-invalid-boolean", params: ["use_row_based_vat"] });
errors.set(290300, {id: "message.error-invalid-boolean", params: ["use_accrual"] });
errors.set(290310, {id: "message.error-invalid-boolean", params: ["use_procurement_number"] });
errors.set(290320, {id: "message.error-invalid-boolean", params: ["use_procurement_number_per_row"] });
errors.set(290330, {id: "message.error-invalid-int", params: ["length_restriction"] });
errors.set(290340, {id: "message.error-invalid-value-for-organization", params: ["approval_cycle_id_default"] });
errors.set(290350, {id: "message.error-invalid-int", params: ["account_id_shipping"] });
errors.set(290360, {id: "message.error-invalid-value-for-organization", params: ["account_id_shipping"] });
errors.set(290370, {id: "message.error-inactive", params: ["account_id_shipping"]});
errors.set(290380, {id: "message.error-invalid-int", params: ["vat_type_id_shipping"] });
errors.set(290390, {id: "message.error-invalid-value-for-organization", params: ["vat_type_id_shipping"] });
errors.set(290410, {id: "message.error-not-found", params: ["url"] });
errors.set(290420, {id: "message.error-290420" });
errors.set(290430, {id: "message.error-290430" });
errors.set(290440, {id: "message.error-290440" });
errors.set(290450, {id: "message.error-290450" });
errors.set(290460, {id: "message.error-290460" });
errors.set(290470, {id: "message.error-290470" });
errors.set(290480, {id: "message.error-290480" });
errors.set(290490, {id: "message.error-290490" });
errors.set(290500, {id: "message.error-290500" });
errors.set(290510, {id: "message.error-290510" });
errors.set(290520, {id: "message.error-290520" });
errors.set(290530, {id: "message.error-290530" });
errors.set(290540, {id: "message.error-290540" });
errors.set(290550, {id: "message.error-290550" });
errors.set(290560, {id: "message.error-290560" });
errors.set(290570, {id: "message.error-290570" });
errors.set(290580, {id: "message.error-290580" });
errors.set(290590, {id: "message.error-290590" });
errors.set(290600, {id: "message.error-290600" });
errors.set(290610, {id: "message.error-290610" });
errors.set(290620, {id: "message.error-290620" });
errors.set(290630, {id: "message.error-290630" });
errors.set(290640, {id: "message.error-290640" });
errors.set(290650, {id: "message.error-290650" });
errors.set(290660, {id: "message.error-290660" });
errors.set(290670, {id: "message.error-invalid-int", params: ["quote_status_id_default"] });
errors.set(290680, {id: "message.error-invalid-value-for-organization", params: ["quote_status_id_default"] });
errors.set(290690, {id: "message.error-invalid-int", params: ["order_status_id_default"] });
errors.set(290700, {id: "message.error-invalid-value-for-organization", params: ["order_status_id_default"] });
errors.set(290710, {id: "message.error-invalid-int", params: ["verification_series_id_invoice"] });
errors.set(290720, {id: "message.error-invalid-value-for-organization", params: ["verification_series_id_invoice"] });
errors.set(290730, {id: "message.error-invalid-int", params: ["verification_series_id_invoice_pay"] });
errors.set(290740, {id: "message.error-invalid-value-for-organization", params: ["verification_series_id_invoice_pay"] });
errors.set(290750, {id: "message.error-invalid-int", params: ["verification_series_id_supplier_invoice"] });
errors.set(290760, {id: "message.error-invalid-value-for-organization", params: ["verification_series_id_supplier_invoice"] });
errors.set(290770, {id: "message.error-invalid-int", params: ["verification_series_id_supplier_invoice_pay"] });
errors.set(290780, {id: "message.error-invalid-value-for-organization", params: ["verification_series_id_supplier_invoice_pay"] });
errors.set(290790, {id: "message.error-290790" });
errors.set(290800, {id: "message.error-290800" });
errors.set(290810, {id: "message.error-290810" });
errors.set(290820, {id: "message.error-invalid-date-range", params: ["start_date", "end_date"] });
errors.set(290830, {id: "message.error-invalid-int", params: ["account_id_rounding"] });
errors.set(290840, {id: "message.error-invalid-value-for-organization", params: ["account_id_rounding"] });
errors.set(290850, {id: "message.error-inactive", params: ["account_id_rounding"]});
errors.set(290860, {id: "message.error-290860" });
errors.set(290870, {id: "message.error-290870" });
errors.set(290880, {id: "message.error-290880" });
errors.set(290890, {id: "message.error-290890" });
errors.set(290900, {id: "message.error-290900" });
errors.set(290910, {id: "message.error-invalid-int", params: ["log_id"] });
errors.set(290920, {id: "message.error-duplicated-value", params: ["registration_number"] });
errors.set(290930, {id: "message.error-duplicated-value", params: ["vat_number"] });
errors.set(290940, {id: "message.error-290940" });
errors.set(290950, {id: "message.error-290950" });
errors.set(290960, {id: "message.error-290960" });
errors.set(290970, {id: "message.error-290970" });

// OrganizationAddress
errors.set(300000, {id: "message.error-invalid-int", params: ["organization_address_type_id"] });
errors.set(300010, {id: "message.error-invalid-value-for-organization", params: ["organization_address_id"] });
errors.set(300020, {id: "message.error-invalid-value", params: ["organization address type"] });
errors.set(300030, {id: "message.error-invalid-string-max-len", params: ["organization_name_display", 256] });
errors.set(300040, {id: "message.error-invalid-string-max-len", params: ["address1", 256] });
errors.set(300050, {id: "message.error-invalid-string-max-len", params: ["city", 256] });
errors.set(300060, {id: "message.error-invalid-string-max-len", params: ["phone", 256] });
errors.set(300070, {id: "message.error-invalid-string-max-len", params: ["email", 256] });
errors.set(300080, {id: "message.error-invalid-string-max-len", params: ["website", 256] });
errors.set(300090, {id: "message.error-invalid-int", params: ["country_id"] });
errors.set(300100, {id: "message.error-invalid-int", params: ["organization_address_id"] });
errors.set(300110, {id: "message.error-invalid-value", params: ["country_id"] });
errors.set(300120, {id: "message.error-invalid-string-max-len", params: ["zip", 10] });
errors.set(300130, {id: "message.error-invalid-sweden-zip-code"});
errors.set(300140, {id: "message.error-organization-session" });
errors.set(300150, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(300160, {id: "message.error-invalid-string-max-len", params: ["address2", 256] });

// OrganizationPaymentInformation
errors.set(310000, {id: "message.error-invalid-int", params: ["payment_information_type_id"] });
errors.set(310010, {id: "message.error-not-match-parent", params: ["organization payment information", "organization_id"] });
errors.set(310020, {id: "message.error-invalid-value", params: ["payment_information_type_id"] });
errors.set(310030, {id: "message.error-invalid-string-max-len", params: ["payment_information_value", 256] });
errors.set(310040, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(310050, {id: "message.error-organization-session" });
errors.set(310060, {id: "message.error-invalid-int", params: ["organization_payment_information_id"] });
errors.set(310070, {id: "message.error-invalid-value-for-organization", params: ["organization_payment_information_id"] });

// Account
errors.set(320000, {id: "message.error-invalid-int", params: ["account_group_id"] });
errors.set(320010, {id: "message.error-320010" });
errors.set(320020, {id: "message.error-invalid-value", params: ["SE account_nr"] });
errors.set(320030, {id: "message.error-invalid-string-max-len", params: ["account_name", 256] });
errors.set(320040, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(320050, {id: "message.error-invalid-int", params: ["vat_type_id"] });
errors.set(320060, {id: "message.error-invalid-value", params: ["account_nr"] });
errors.set(320070, {id: "message.error-invalid-int", params: ["id"] });
errors.set(320080, {id: "message.error-invalid-value-for-organization", params: ["vat_type_id"] });
errors.set(320090, {id: "message.error-invalid-value", params: ["account id"] });
errors.set(320100, {id: "message.error-duplicated-value", params: ["account_dimensions.dimension_id"] });
errors.set(320110, {id: "message.error-invalid-value", params: ["account_group_id"] });
errors.set(320120, {id: "message.error-duplicated-value2", params: ["account_nr", "table_organization_id"] });
errors.set(320130, {id: "message.error-invalid-value", params: ["account_type"] });
errors.set(320140, {id: "message.error-invalid-value", params: ["account_template id"] });
errors.set(320150, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(320160, {id: "message.error-table-organization-session" });

// AccountDimension
errors.set(330000, {id: "message.error-invalid-int", params: ["dimension_id"] });
errors.set(330010, {id: "message.error-duplicated-value", params: ["account_dimension_defaults.dimension_value_id"] });
errors.set(330020, {id: "message.error-invalid-value-for-organization", params: ["dimension id"] });
errors.set(330030, {id: "message.error-inactive", params: ["dimension_id"] });
errors.set(330040, {id: "message.error-invalid-value", params: ["dimension usage"] });
errors.set(330050, {id: "message.error-invalid-int", params: ["id"] });
errors.set(330060, {id: "message.error-invalid-sum-10000", params: ["account_dimension_default.share_bp"] });
errors.set(330070, {id: "message.error-invalid-value", params: ["account dimension id"] });
errors.set(330080, {id: "message.error-not-match-parent", params: ["account dimension", "account_id"] });

// AccountDimensionDefault
errors.set(340000, {id: "message.error-invalid-int", params: ["dimension_value_id"] });
errors.set(340010, {id: "message.error-invalid-value", params: ["account dimension default id"] });
errors.set(340020, {id: "message.error-invalid-value-for-organization", params: ["dimension_value_id"] });
errors.set(340030, {id: "message.error-inactive", params: ["dimension_value_id"] });
errors.set(340040, {id: "message.error-invalid-int", params: ["share_bp"] });
errors.set(340050, {id: "message.error-invalid-int", params: ["id"] });
errors.set(340060, {id: "message.error-not-match-parent", params: ["account dimension default", "account_dimension_id"] });

// Accounting year
errors.set(350000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(350010, {id: "message.error-organization-session" });
errors.set(350020, {id: "message.error-invalid-string-max-len", params: ["accounting_year_name", 64] });
errors.set(350030, {id: "message.error-invalid-date-range", params: ["accounting_year_start", "accounting_year_end"] });
errors.set(350040, {id: "message.error-inactive", params: ["account_id"]});
errors.set(350050, {id: "message.error-350050"});
errors.set(350060, {id: "message.error-invalid-int", params: ["id"] });
errors.set(350070, {id: "message.error-350070"});
errors.set(350080, {id: "message.error-invalid-value-for-organization", params: ["accounting year id"] });
errors.set(350090, {id: "message.error-350090"});
errors.set(350100, {id: "message.error-invalid-value-for-organization", params: ["account id"] });
errors.set(350110, {id: "message.error-350110"});
errors.set(350120, {id: "message.error-invalid-int", params: ["account_id"] });

// Verification series
errors.set(360000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(360010, {id: "message.error-table-organization-session" });
errors.set(360020, {id: "message.error-invalid-string-max-len", params: ["verification_series_short", 3] });
errors.set(360030, {id: "message.error-invalid-string-max-len", params: ["verification_series_name", 256] });
errors.set(360040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(360050, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(360060, {id: "message.error-invalid-value", params: ["verification series id"] });

// AccountImportFromTemplate
errors.set(370000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(370010, {id: "message.error-organization-session" });
errors.set(370020, {id: "message.error-invalid-int", params: ["account_chart_template_id"] });
errors.set(370030, {id: "message.error-370030"});
errors.set(370040, {id: "message.error-invalid-value", params: ["account_chart_template_id"] });

// Sie import
errors.set(380000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(380010, {id: "message.error-organization-session" });
errors.set(380020, {id: "message.error-invalid-value", params: ["account type"] });
errors.set(380030, {id: "message.error-invalid-value", params: ["organization_id"] });
errors.set(380040, {id: "message.error-380040"});
errors.set(380050, {id: "message.error-380050"});
errors.set(380060, {id: "message.error-380060"});
errors.set(380070, {id: "message.error-380070"});
errors.set(380080, {id: "message.error-380080"});
errors.set(380090, {id: "message.error-380090"});
errors.set(380100, {id: "message.error-380100"});
errors.set(380110, {id: "message.error-inactive", params: ["account_nr"]});
errors.set(380120, {id: "message.error-380120"});
errors.set(380130, {id: "message.error-380130"});
errors.set(380140, {id: "message.error-380140"});
errors.set(380150, {id: "message.error-invalid-int", params: ["Account number"] });
errors.set(380160, {id: "message.error-380160"});
errors.set(380170, {id: "message.error-380170"});
errors.set(380180, {id: "message.error-380180"});
errors.set(380190, {id: "message.error-380190"});
errors.set(380200, {id: "message.error-380200" });
errors.set(380210, {id: "message.error-380210" });
errors.set(380220, {id: "message.error-380220"});
errors.set(380230, {id: "message.error-380230"});
errors.set(380240, {id: "message.error-380240"});
errors.set(380250, {id: "message.error-380250"});
errors.set(380260, {id: "message.error-380260"});
errors.set(380270, {id: "message.error-380270"});
errors.set(380280, {id: "message.error-380280"});
errors.set(380290, {id: "message.error-380290"});
errors.set(380300, {id: "message.error-380300"});
errors.set(380310, {id: "message.error-not-found", params:["url"] });
errors.set(380320, {id: "message.error-380320" });
errors.set(380330, {id: "message.error-invalid-value", params: ["sie type"] });
errors.set(380340, {id: "message.error-380340"});
errors.set(380350, {id: 'message.error-380350' });
errors.set(380360, {id: 'message.error-380360' });

// Sie export
errors.set(390000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(390010, {id: "message.error-organization-session" });
errors.set(390020, {id: "message.error-invalid-value", params: ["sie type"] });
errors.set(390030, {id: "message.error-invalid-int", params: ["accounting_year_id"] });
errors.set(390040, {id: "message.error-invalid-value", params: ["organization_id"] });
errors.set(390050, {id: "message.error-invalid-value-for-organization", params: ["accounting_year_id"] });

// Article accounting group account type
errors.set(400000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(400010, {id: "message.error-table-organization-session" });
errors.set(400020, {id: "message.error-invalid-value", params: ["article accounting group account type id"] });
errors.set(400030, {id: "message.error-invalid-string-max-len", params: ["article_accounting_group_account_type_name", 64] });
errors.set(400040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(400050, {id: "message.error-data-used", params: ["customer"]});
errors.set(400060, {id: "message.error-data-used", params: ["article_accounting_group_account"]});
errors.set(400070, {id: "message.error-invalid-int", params: ["type_id"] });
errors.set(400080, {id: "message.error-duplicated-value2", params: ["type_id", "table_organization_id"] });
errors.set(400090, {id: "message.error-invalid-boolean", params: ["is_sales"] });
errors.set(400100, {id: "message.error-invalid-value", params: ["article_accounting_group_account_type_template id"] });

// Article accounting group
errors.set(410000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(410010, {id: "message.error-table-organization-session" });
errors.set(410020, {id: "message.error-invalid-value", params: ["article accounting group id"] });
errors.set(410030, {id: "message.error-invalid-string-max-len", params: ["article_accounting_group_name", 256] });
errors.set(410040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(410050, {id: "message.error-table-organization-session" });
errors.set(410060, {id: "message.error-data-used", params: ["article"]});
errors.set(410070, {id: "message.error-data-used", params: ["price_agreement_customer"]});
errors.set(410080, {id: "message.error-empty-array-data", params: ["article_accounting_group_accounts"] });
errors.set(410090, {id: "message.error-invalid-int", params: ["account_id_sales"] });
errors.set(410100, {id: "message.error-invalid-int", params: ["article_accounting_group_account_type_id"] });
errors.set(410110, {id: "message.error-invalid-int", params: ["id"] });
errors.set(410120, {id: "message.error-invalid-value-for-organization", params: ["account_id_sales"] });
errors.set(410130, {id: "message.error-invalid-value-for-organization", params: ["article_accounting_group_account_type_id"] });
errors.set(410140, {id: "message.error-invalid-value", params: ["article_accounting_group_account id"] });
errors.set(410150, {id: "message.error-not-match-parent", params: ["article_accounting_group_account_id", "article_accounting_group_id"] });
errors.set(410160, {id: "message.error-inactive", params: ["account_id_sales"]});
errors.set(410170, {id: "message.error-invalid-int", params: ["account_id_cogs"] });
errors.set(410180, {id: "message.error-invalid-value-for-organization", params: ["account_id_cogs"] });
errors.set(410190, {id: "message.error-inactive", params: ["account_id_cogs"]});
errors.set(410200, {id: "message.error-invalid-int", params: ["account_id_inventory"] });
errors.set(410210, {id: "message.error-invalid-value-for-organization", params: ["account_id_inventory"] });
errors.set(410220, {id: "message.error-inactive", params: ["account_id_inventory"]});
errors.set(410230, {id: "message.error-invalid-value", params: ["article_accounting_group_template id"] });
errors.set(410240, {id: "message.error-invalid-value", params: ["article_accounting_group_account_template account_chart_template_id"] });
errors.set(410250, {id: "message.error-invalid-value", params: ["accounts account_chart_template_id"] });
errors.set(410260, {id: "message.error-invalid-value", params: ["article_accounting_group_template account_chart_template_id"] });
errors.set(410270, {id: "message.error-invalid-value", params: ["article_accounting_group_account_type_template account_chart_template_id"] });

// Unit
errors.set(420000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(420010, {id: "message.error-table-organization-session" });
errors.set(420020, {id: "message.error-invalid-value", params: ["unit id"] });
errors.set(420030, {id: "message.error-invalid-string-max-len", params: ["unit_name", 64] });
errors.set(420040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(420050, {id: "message.error-duplicated-value2", params: ["unit_nr", "table_organization_id"] });
errors.set(420060, {id: "message.error-data-used", params: ["article"]});
errors.set(420070, {id: "message.error-data-used", params: ["order_row"]});
errors.set(420080, {id: "message.error-data-used", params: ["invoice_row"]});
errors.set(420090, {id: "message.error-data-used", params: ["quote_row"]});
errors.set(420100, {id: "message.error-invalid-value", params: ["unit_nr"] });
errors.set(420110, {id: "message.error-invalid-string-max-len", params: ["suffix", 6] });

// Article price list quant price
errors.set(430000, {id: "message.error-invalid-int", params: ["from_quantity"] });
errors.set(430010, {id: "message.error-430010" });
errors.set(430020, {id: "message.error-not-match-parent", params: ["article_price_list_quant_price", "article_price_list_id"] });
errors.set(430030, {id: "message.error-invalid-int", params: ["price_bp"] });
errors.set(430040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(430050, {id: "message.error-invalid-value", params: ["id"] });
errors.set(430060, {id: "message.error-430060" });
errors.set(430070, {id: "message.error-inactive", params: ["article_price_list.article"]});

// Dimension
errors.set(440000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(440010, {id: "message.error-table-organization-session" });
errors.set(440020, {id: "message.error-invalid-value", params: ["dimension id"] });
errors.set(440030, {id: "message.error-invalid-string-max-len", params: ["dimension_name", 256] });
errors.set(440040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(440050, {id: "message.error-invalid-value", params: ["account_usage"] });
errors.set(440060, {id: "message.error-data-used", params: ["gl_dimension"]});
errors.set(440070, {id: "message.error-data-used", params: ["article_dimension"]});
errors.set(440080, {id: "message.error-empty-array-data", params: ["dimension_values"] });
errors.set(440090, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(440100, {id: "message.error-invalid-boolean", params: ["required_for_gl"] });
errors.set(440110, {id: "message.error-invalid-boolean", params: ["can_be_divided"] });
errors.set(440120, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(440130, {id: "message.error-invalid-value", params: ["article_usage"] });
errors.set(440140, {id: "message.error-invalid-value", params: ["supplier_usage"] });
errors.set(440150, {id: "message.error-invalid-value", params: ["order_usage"] });
errors.set(440160, {id: "message.error-invalid-value", params: ["customer_usage"] });
errors.set(440170, {id: "message.error-data-used", params: ["customer_dimension"]});
errors.set(440180, {id: "message.error-data-used", params: ["account_dimension"]});
errors.set(440190, {id: "message.error-data-used", params: ["order_dimension"]});
errors.set(440200, {id: "message.error-data-used", params: ["quote_dimension"]});
errors.set(440210, {id: "message.error-data-used", params: ["invoice_dimension"]});
errors.set(440220, {id: "message.error-data-used", params: ["supplier_dimension"]});
errors.set(440230, {id: "message.error-data-used", params: ["verification_template_gl_dimension"]});

// Dimension value
errors.set(450000, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(450010, {id: "message.error-invalid-value-for-organization", params: ["dimension_id"] });
errors.set(450020, {id: "message.error-data-used", params: ["article_dimension"]});
errors.set(450030, {id: "message.error-data-used", params: ["customer_dimension"]});
errors.set(450040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(450050, {id: "message.error-invalid-value-for-organization", params: ["dimension value id"] });
errors.set(450060, {id: "message.error-data-used", params: ["account_dimension_default"]});
errors.set(450070, {id: "message.error-data-used", params: ["order_dimension"]});
errors.set(450080, {id: "message.error-data-used", params: ["quote_dimension"]});
errors.set(450090, {id: "message.error-data-used", params: ["invoice_dimension"]});
errors.set(450100, {id: "message.error-data-used", params: ["supplier_dimension"]});
errors.set(450110, {id: "message.error-data-used", params: ["verification_template_gl_dimension_value"]});
errors.set(450120, {id: "message.error-data-used", params: ["gl_dimension_value"]});
errors.set(450130, {id: "message.error-invalid-int", params: ["dimension_value_nr"] });
errors.set(450140, {id: "message.error-invalid-int", params: ["id"] });
errors.set(450150, {id: "message.error-invalid-string-max-len", params: ["dimension_value_name", 256] });
errors.set(450160, {id: "message.error-invalid-int", params: ["dimension_id"] });

// Article
errors.set(460000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(460010, {id: "message.error-table-organization-session" });
errors.set(460020, {id: "message.error-invalid-value-for-organization", params: ["article id"] });
errors.set(460030, {id: "message.error-invalid-string-max-len", params: ["article_name", 256] });
errors.set(460040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(460050, {id: "message.error-invalid-boolean", params: ["webshop_article"] });
errors.set(460060, {id: "message.error-invalid-value-for-organization", params: ["article_accounting_group_id"] });
errors.set(460070, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(460080, {id: "message.error-invalid-string-max-len", params: ["ean", 64] });
errors.set(460090, {id: "message.error-invalid-int", params: ["artice_price_in"] });
errors.set(460100, {id: "message.error-invalid-value", params: ["article_accounting_group_id"] });
errors.set(460110, {id: "message.error-invalid-string-max-len", params: ["article_nr", 64] });
errors.set(460120, {id: "message.error-invalid-value", params: ["manufacturer_id"] });
errors.set(460130, {id: "message.error-invalid-value-for-organization", params: ["manufacturer_id"] });
errors.set(460140, {id: "message.error-invalid-value", params: ["unit_id"] });
errors.set(460150, {id: "message.error-invalid-value-for-organization", params: ["unit_id"] });
errors.set(460160, {id: "message.error-invalid-int", params: ["weight"] });
errors.set(460170, {id: "message.error-invalid-value", params: ["length_unit_id"] });
errors.set(460180, {id: "message.error-invalid-value-for-organization", params: ["length_unit_id"] });
errors.set(460190, {id: "message.error-invalid-int", params: ["depth"] });
errors.set(460200, {id: "message.error-invalid-value", params: ["width_unit_id"] });
errors.set(460210, {id: "message.error-invalid-value-for-organization", params: ["width_unit_id"] });
errors.set(460220, {id: "message.error-invalid-int", params: ["width"] });
errors.set(460230, {id: "message.error-invalid-value", params: ["depth_unit_id"] });
errors.set(460240, {id: "message.error-invalid-value-for-organization", params: ["depth_unit_id"] });
errors.set(460250, {id: "message.error-invalid-int", params: ["length"] });
errors.set(460260, {id: "message.error-invalid-value", params: ["weight_unit_id"] });
errors.set(460270, {id: "message.error-invalid-value-for-organization", params: ["weight_unit_id"] });
errors.set(460280, {id: "message.error-inactive", params: ["article_id"]});
errors.set(460290, {id: "message.error-invalid-value", params: ["supplier_id"] });
errors.set(460300, {id: "message.error-invalid-value-for-organization", params: ["supplier_id"] });
errors.set(460310, {id: "message.error-invalid-string-max-len", params: ["supplier_article_nr", 64] });
errors.set(460320, {id: "message.error-invalid-string-max-len", params: ["manufacturer_article_nr", 64] });
errors.set(460330, {id: "message.error-invalid-int", params: ["price_list_id_default"] });
errors.set(460340, {id: "message.error-invalid-value-for-organization", params: ["price_list_id_default"] });
errors.set(460350, {id: "message.error-invalid-int", params: ["price_bp"] });
errors.set(460360, {id: "message.error-460360"});
errors.set(460370, {id: "message.error-invalid-object", params: ["specification"] });
errors.set(460380, {id: "message.error-invalid-string-max-len", params: ["template_name", 256] });
errors.set(460390, {id: "message.error-invalid-boolean", params: ["is_default_template"] });
errors.set(460400, {id: "message.error-invalid-boolean", params: ["is_template"] });
errors.set(460410, {id: "message.error-invalid-boolean", params: ["not_stocked"] });
errors.set(460420, {id: "message.error-invalid-boolean", params: ["stock_can_be_negative"] });

// Article dimension
errors.set(470000, {id: "message.error-470000"});
errors.set(470010, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(470020, {id: "message.error-invalid-int", params: ["dimension_id"] });
errors.set(470030, {id: "message.error-invalid-value-for-organization", params: ["dimension_id"] });
errors.set(470040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(470050, {id: "message.error-invalid-value-for-organization", params: ["article dimension id"] });
errors.set(470060, {id: "message.error-invalid-int", params: ["dimension_value_id"] });
errors.set(470070, {id: "message.error-inactive", params: ["article_id"]});
errors.set(470080, {id: "message.error-inactive", params: ["dimension_id"]});
errors.set(470090, {id: "message.error-invalid-value", params: ["dimension_value_id"] });
errors.set(470100, {id: "message.error-inactive", params: ["dimension_value_id"]});
errors.set(470110, {id: "message.error-470110"});
errors.set(470120, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(470130, {id: "message.error-invalid-int", params: ["share_bp"] });
errors.set(470140, {id: "message.error-invalid-int", params: ["id"] });

// Article price list
errors.set(480000, {id: "message.error-inactive", params: ["article_price_list.article"]});
errors.set(480010, {id: "message.error-duplicated-value2", params: ["article_id", "price_list_id"] });
errors.set(480020, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(480030, {id: "message.error-invalid-int", params: ["price_bp"] });
errors.set(480040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(480050, {id: "message.error-invalid-value", params: ["id"] });
errors.set(480060, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(480070, {id: "message.error-inactive", params: ["article_id"]});
errors.set(480080, {id: "message.error-invalid-int", params: ["price_list_id"] });
errors.set(480090, {id: "message.error-invalid-value-for-organization", params: ["price_list_id"] });
errors.set(480100, {id: "message.error-480100" });
errors.set(480110, {id: "message.error-480110"});

// Customer contact
errors.set(490000, {id: "message.error-invalid-string-max-len", params: ["first_name", 256] });
errors.set(490010, {id: "message.error-invalid-string-max-len", params: ["middle_name", 256] });
errors.set(490020, {id: "message.error-invalid-string-max-len", params: ["last_name", 256] });
errors.set(490030, {id: "message.error-invalid-string-max-len", params: ["address1", 256] });
errors.set(490040, {id: "message.error-invalid-string-max-len", params: ["address2", 256] });
errors.set(490050, {id: "message.error-invalid-string-max-len", params: ["city", 256] });
errors.set(490060, {id: "message.error-invalid-string-max-len", params: ["email", 256] });
errors.set(490070, {id: "message.error-invalid-int", params: ["country_id"] });
errors.set(490080, {id: "message.error-invalid-string-max-len", params: ["phone", 256] });
errors.set(490090, {id: "message.error-invalid-value", params: ["country_id"] });
errors.set(490100, {id: "message.error-invalid-string-max-len", params: ["description", 256] });
errors.set(490110, {id: "message.error-invalid-int", params: ["id"] });
errors.set(490120, {id: "message.error-invalid-value-for-organization", params: ["customer contact id"] });
errors.set(490130, {id: "message.error-invalid-boolean", params: ["is_default_delivery"] });
errors.set(490140, {id: "message.error-invalid-string-max-len", params: ["zip", 10] });
errors.set(490150, {id: "message.error-invalid-int", params: ["customer_id"] });
errors.set(490160, {id: "message.error-invalid-value-for-organization", params: ["customer_id"] });
errors.set(490170, {id: "message.error-inactive", params: ["customer_id"]});
errors.set(490180, {id: "message.error-data-used", params: ["customer_communication_log"]});
errors.set(490190, {id: "message.error-data-used", params: ["customer_contact_customer_communication"]});
errors.set(490200, {id: "message.error-invalid-string-max-len", params: ["co_company", 256] });
errors.set(490210, {id: "message.error-invalid-sweden-zip-code"});

// Customer
errors.set(500000, {id: "message.error-data-used", params: ["price_agreement_customer"]});
errors.set(500010, {id: "message.error-data-used", params: ["quote"]});
errors.set(500020, {id: "message.error-data-used", params: ["order"]});
errors.set(500030, {id: "message.error-data-used", params: ["invoice"]});
errors.set(500040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(500050, {id: "message.error-invalid-value", params: ["customer id"] });
errors.set(500060, {id: "message.error-table-organization-session" });
errors.set(500070, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(500080, {id: "message.error-invalid-sweden-zip-code"});
errors.set(500090, {id: "message.error-invalid-string-max-len", params: ["zip", 10] });
errors.set(500100, {id: "message.error-invalid-int", params: ["customer_type_id"] });
errors.set(500110, {id: "message.error-invalid-value", params: ["customer_type_id"] });
errors.set(500120, {id: "message.error-invalid-int", params: ["country_id"] });
errors.set(500130, {id: "message.error-invalid-value", params: ["country_id"] });
errors.set(500140, {id: "message.error-invalid-int", params: ["article_accounting_group_account_type_id"] });
errors.set(500150, {id: "message.error-invalid-value-for-organization", params: ["article_accounting_group_account_type_id"] });
errors.set(500160, {id: "message.error-invalid-value-for-organization", params: ["organization_user_id_main_contact"] });
errors.set(500170, {id: "message.error-invalid-string-max-len", params: ["company", 256] });
errors.set(500180, {id: "message.error-invalid-string-max-len", params: ["first_name", 256] });
errors.set(500190, {id: "message.error-invalid-string-max-len", params: ["middle_name", 256] });
errors.set(500200, {id: "message.error-invalid-string-max-len", params: ["last_name", 256] });
errors.set(500210, {id: "message.error-invalid-string-max-len", params: ["description", 256] });
errors.set(500220, {id: "message.error-invalid-string-max-len", params: ["address1", 256] });
errors.set(500230, {id: "message.error-invalid-string-max-len", params: ["address2", 256] });
errors.set(500240, {id: "message.error-invalid-string-max-len", params: ["city", 256] });
errors.set(500250, {id: "message.error-invalid-string-max-len", params: ["email", 256] });
errors.set(500260, {id: "message.error-data-used", params: ["accounts_tracking"]});
errors.set(500270, {id: "message.error-invalid-string-max-len", params: ["phone", 256] });
errors.set(500280, {id: "message.error-invalid-object", params: ["specification"] });
errors.set(500290, {id: "message.error-invalid-string-max-len", params: ["website", 256] });
errors.set(500300, {id: "message.error-invalid-string-max-len", params: ["bank_account_nr", 256] });
errors.set(500310, {id: "message.error-invalid-string-max-len", params: ["bankgiro", 256] });
errors.set(500320, {id: "message.error-invalid-boolean", params: ["is_group_company"] });
errors.set(500330, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(500340, {id: "message.error-invalid-int", params: ["currency_id_default"] });
errors.set(500350, {id: "message.error-invalid-value-for-organization", params: ["currency_id_default"] });
errors.set(500360, {id: "message.error-invalid-int", params: ["payment_term_id_default"] });
errors.set(500370, {id: "message.error-invalid-value-for-organization", params: ["payment_term_id_default"] });
errors.set(500380, {id: "message.error-invalid-int", params: ["delivery_term_id_default"] });
errors.set(500390, {id: "message.error-invalid-value-for-organization", params: ["delivery_term_id_default"] });
errors.set(500400, {id: "message.error-invalid-int", params: ["delivery_method_id_default"] });
errors.set(500410, {id: "message.error-invalid-value-for-organization", params: ["delivery_method_id_default"] });
errors.set(500420, {id: "message.error-invalid-int", params: ["price_list_id_default"] });
errors.set(500430, {id: "message.error-invalid-value-for-organization", params: ["price_list_id_default"] });
errors.set(500440, {id: "message.error-invalid-string-max-len", params: ["identification_nr", 64] });
errors.set(500450, {id: "message.error-invalid-string-max-len", params: ["vat_nr", 64] });
errors.set(500460, {id: "message.error-invalid-string-max-len", params: ["our_reference", 64] });
errors.set(500470, {id: "message.error-invalid-int", params: ["organization_user_id_main_contact"] });
errors.set(500480, {id: "message.error-invalid-boolean", params: ["is_template"] });
errors.set(500490, {id: "message.error-invalid-boolean", params: ["is_default_template"] });
errors.set(500500, {id: "message.error-invalid-string-max-len", params: ["template_name", 256] });
errors.set(500510, {id: "message.error-invalid-boolean", params: ["use_article_cost"] });

// Invoice
errors.set(510000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(510010, {id: "message.error-invalid-int", params: ["payment_term_id"] });
errors.set(510020, {id: "message.error-empty-array-data", params: ["invoice_rows"] });
errors.set(510030, {id: "message.error-organization-session" });
errors.set(510040, {id: "message.error-invalid-value-for-organization", params: ["payment_term_id"] });
errors.set(510050, {id: "message.error-invalid-value-for-organization", params: ["account_nr"] });
errors.set(510060, {id: "message.error-invalid-int", params: ["accounts_tracking_id"] });
errors.set(510070, {id: "message.error-invalid-value", params: ["accounts_tracking_id"] });
errors.set(510080, {id: "message.error-510080"});
errors.set(510090, {id: "message.error-510090"});
errors.set(510100, {id: "message.error-510100"});
errors.set(510110, {id: "message.error-invalid-int", params: ["order_id"] });
errors.set(510120, {id: "message.error-invalid-value", params: ["order_id"] });
errors.set(510130, {id: "message.error-510130" });
errors.set(510140, {id: "message.error-empty-array", params: ["order_row_ids"] });
errors.set(510150, {id: "message.error-invalid-int", params: ["order_row_id"] });
errors.set(510160, {id: "message.error-invalid-value", params: ["order_row_id"] });
errors.set(510170, {id: "message.error-510170"});
errors.set(510180, {id: "message.error-invalid-string-max-len", params: ["invoice_our_reference", 256] });
errors.set(510190, {id: "message.error-invalid-int", params: ["delivery_term_id"] });
errors.set(510200, {id: "message.error-invalid-value-for-organization", params: ["delivery_term_id"] });
errors.set(510210, {id: "message.error-invalid-int", params: ["price_list_id"] });
errors.set(510220, {id: "message.error-invalid-value-for-organization", params: ["price_list_id"] });
errors.set(510230, {id: "message.error-invalid-string-max-len", params: ["invoice_name", 256] });
errors.set(510240, {id: "message.error-invalid-string-max-len", params: ["invoice_attention", 256] });
errors.set(510250, {id: "message.error-invalid-string-max-len", params: ["invoice_address1", 256] });
errors.set(510260, {id: "message.error-invalid-string-max-len", params: ["invoice_address2", 256] });
errors.set(510270, {id: "message.error-invalid-string-max-len", params: ["invoice_city", 256] });
errors.set(510280, {id: "message.error-invalid-string-max-len", params: ["invoice_zip", 10] });
errors.set(510290, {id: "message.error-invalid-int", params: ["invoice_country_id"] });
errors.set(510300, {id: "message.error-invalid-value", params: ["invoice_country_id"] });
errors.set(510310, {id: "message.error-invalid-string-max-len", params: ["delivery_name", 256] });
errors.set(510320, {id: "message.error-invalid-string-max-len", params: ["delivery_attention", 256] });
errors.set(510330, {id: "message.error-invalid-string-max-len", params: ["delivery_address1", 256] });
errors.set(510340, {id: "message.error-invalid-string-max-len", params: ["delivery_address2", 256] });
errors.set(510350, {id: "message.error-invalid-string-max-len", params: ["delivery_city", 256] });
errors.set(510360, {id: "message.error-invalid-string-max-len", params: ["delivery_zip", 10] });
errors.set(510370, {id: "message.error-invalid-int", params: ["delivery_country_id"] });
errors.set(510380, {id: "message.error-invalid-value", params: ["delivery_country_id"] });
errors.set(510390, {id: "message.error-invalid-array", params: ["documentation"] });
errors.set(510400, {id: "message.error-invalid-value", params: ["document.uri"] });
errors.set(510410, {id: "message.error-510410" });
errors.set(510420, {id: "message.error-510420"});
errors.set(510430, {id: "message.error-not-found", params:["document.uri"] });
errors.set(510440, {id: "message.error-fail-get-value", params: ["document.uri"] });
errors.set(510450, {id: "message.error-invalid-boolean", params: ["is_email"] });
errors.set(510460, {id: "message.error-510460"});
errors.set(510470, {id: "message.error-510470"});
errors.set(510480, {id: "message.error-invalid-int", params: ["customer_id"] });
errors.set(510490, {id: "message.error-invalid-value-for-organization", params: ["customer_id"] });
errors.set(510500, {id: "message.error-inactive", params: ["customer_id"]});
errors.set(510510, {id: "message.error-invalid-int", params: ["currency_id"] });
errors.set(510520, {id: "message.error-invalid-value-for-organization", params: ["currency_id"] });
errors.set(510530, {id: "message.error-invalid-value", params: ["invoice_date"] });
errors.set(510540, {id: "message.error-510540"});

// Invoice row
errors.set(520000, {id: "message.error-invalid-int", params: ["unit_id"] });
errors.set(520010, {id: "message.error-invalid-value-for-organization", params: ["unit_id"] });
errors.set(520020, {id: "message.error-invalid-int", params: ["currency_value_bp"] });
errors.set(520030, {id: "message.error-inactive", params: ["article_id"]});
errors.set(520040, {id: "message.error-invalid-float", params: ["units"] });
errors.set(520050, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(520060, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(520070, {id: "message.error-invalid-int", params: ["local_value_bp"] });
errors.set(520080, {id: "message.error-invalid-string-max-len", params: ["article_name", 256] });
errors.set(520090, {id: "message.error-invalid-float", params: ["discount"] });
errors.set(520100, {id: "message.error-invalid-int", params: ["inventory_location_id"] });
errors.set(520110, {id: "message.error-520110" });
errors.set(520120, {id: "message.error-520120" });
errors.set(520130, {id: "message.error-520130" });
errors.set(520140, {id: "message.error-520140" });

// Accounts tracking
errors.set(530000, {id: "message.error-invalid-int", params: ["supplier_id"] });
errors.set(530010, {id: "message.error-inactive", params: ["supplier_id"]});
errors.set(530020, {id: "message.error-invalid-value-for-organization", params: ["supplier_id"] });
errors.set(530030, {id: "message.error-invalid-int", params: ["accounts_tracking_type_id"] });
errors.set(530040, {id: "message.error-invalid-value-for-organization", params: ["accounts_tracking_type_id"] });
errors.set(530050, {id: "message.error-invalid-int", params: ["customer_id"] });
errors.set(530060, {id: "message.error-invalid-value-for-organization", params: ["customer_id"] });
errors.set(530070, {id: "message.error-inactive", params: ["customer_id"]});
errors.set(530080, {id: "message.error-invalid-string-max-len", params: ["identifier", 64] });
errors.set(530090, {id: "message.error-invalid-value", params: ["due_date"] });
errors.set(530100, {id: "message.error-invalid-boolean", params: ["initial"] });

// Supplier
errors.set(540000, {id: "message.error-data-used", params: ["price_agreement_supplier"]});
errors.set(540010, {id: "message.error-data-used", params: ["accounts_tracking"]});
errors.set(540020, {id: "message.error-data-used", params: ["purchase_order"]});
errors.set(540030, {id: "message.error-invalid-string-max-len", params: ["company", 256] });
errors.set(540040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(540050, {id: "message.error-invalid-value-for-organization", params: ["supplier id"] });
errors.set(540060, {id: "message.error-invalid-value-for-organization", params: ["approval_cycle_id_default"] });
errors.set(540070, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(540080, {id: "message.error-invalid-object", params: ["specification"] });
errors.set(540090, {id: "message.error-invalid-string-max-len", params: ["website", 256] });
errors.set(540100, {id: "message.error-invalid-string-max-len", params: ["bank_account_nr", 256] });
errors.set(540110, {id: "message.error-invalid-string-max-len", params: ["bankgiro", 256] });
errors.set(540120, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(540130, {id: "message.error-invalid-int", params: ["currency_id_default"] });
errors.set(540140, {id: "message.error-invalid-value-for-organization", params: ["currency_id_default"] });
errors.set(540150, {id: "message.error-invalid-int", params: ["approval_cycle_id_default"] });
errors.set(540160, {id: "message.error-invalid-int", params: ["payment_term_supplier_id_default"] });
errors.set(540170, {id: "message.error-invalid-value-for-organization", params: ["payment_term_supplier id"] });
errors.set(540180, {id: "message.error-invalid-int", params: ["delivery_term_supplier_id_default"] });
errors.set(540190, {id: "message.error-invalid-value-for-organization", params: ["delivery_term_supplier id"] });
errors.set(540200, {id: "message.error-invalid-int", params: ["delivery_method_supplier_id_default"] });
errors.set(540210, {id: "message.error-invalid-value-for-organization", params: ["delivery_method_supplier id"] });
errors.set(540260, {id: "message.error-invalid-string-max-len", params: ["identification_nr", 64] });
errors.set(540270, {id: "message.error-invalid-string-max-len", params: ["vat_nr", 64] });
errors.set(540280, {id: "message.error-invalid-string-max-len", params: ["first_name", 256] });
errors.set(540290, {id: "message.error-invalid-string-max-len", params: ["middle_name", 256] });
errors.set(540300, {id: "message.error-invalid-string-max-len", params: ["last_name", 256] });
errors.set(540310, {id: "message.error-invalid-string-max-len", params: ["description", 256] });
errors.set(540320, {id: "message.error-invalid-string-max-len", params: ["address1", 256] });
errors.set(540330, {id: "message.error-invalid-string-max-len", params: ["address2", 256] });
errors.set(540340, {id: "message.error-invalid-string-max-len", params: ["city", 256] });
errors.set(540350, {id: "message.error-invalid-string-max-len", params: ["email", 256] });
errors.set(540360, {id: "message.error-invalid-string-max-len", params: ["phone", 256] });
errors.set(540370, {id: "message.error-invalid-string-max-len", params: ["zip", 10] });
errors.set(540380, {id: "message.error-invalid-int", params: ["country_id"] });
errors.set(540390, {id: "message.error-invalid-value", params: ["country_id"] });
errors.set(540400, {id: "message.error-invalid-int", params: ["organization_user_id_main_contact"] });
errors.set(540410, {id: "message.error-invalid-value-for-organization", params: ["organization_user_id_main_contact"] });
errors.set(540420, {id: "message.error-invalid-string-max-len", params: ["our_reference", 64] });
errors.set(540430, {id: "message.error-invalid-boolean", params: ["is_group_company"] });
errors.set(540440, {id: "message.error-invalid-int", params: ["supplier_contact_id_default_delivery"] });
errors.set(540450, {id: "message.error-invalid-value-for-organization", params: ["supplier contact id"] });
errors.set(540460, {id: "message.error-invalid-sweden-zip-code"});
errors.set(540470, {id: "message.error-invalid-boolean", params: ["is_template"] });
errors.set(540480, {id: "message.error-invalid-boolean", params: ["is_default_template"] });
errors.set(540490, {id: "message.error-invalid-string-max-len", params: ["template_name", 256] });
errors.set(540500, {id: "message.error-invalid-int", params: ["account_id_debt"] });
errors.set(540510, {id: "message.error-invalid-value-for-organization", params: ["account id"] });
errors.set(540520, {id: "message.error-inactive", params: "account_id_debt"});
errors.set(540530, {id: "message.error-invalid-int", params: ["account_classification_id_default"] });
errors.set(540540, {id: "message.error-invalid-value-for-organization", params: ["account_classification_id_default"] });
errors.set(540550, {id: "message.error-inactive", params: ["account_classification_id_default"] })
errors.set(540560, {id: "message.error-invalid-int", params: ["vat_type_supplier_id_default"] });
errors.set(540570, {id: "message.error-invalid-value-for-organization", params: ["vat_type_supplier_id_default"] });
errors.set(540580, {id: "message.error-table-organization-session" });

// Supplier contact
errors.set(550000, {id: "message.error-invalid-string-max-len", params: ["first_name", 256] });
errors.set(550010, {id: "message.error-invalid-string-max-len", params: ["middle_name", 256] });
errors.set(550020, {id: "message.error-invalid-string-max-len", params: ["last_name", 256] });
errors.set(550030, {id: "message.error-invalid-string-max-len", params: ["address1", 256] });
errors.set(550040, {id: "message.error-invalid-string-max-len", params: ["address2", 256] });
errors.set(550050, {id: "message.error-invalid-string-max-len", params: ["city", 256] });
errors.set(550060, {id: "message.error-invalid-string-max-len", params: ["email", 256] });
errors.set(550070, {id: "message.error-invalid-int", params: ["country_id"] });
errors.set(550080, {id: "message.error-invalid-string-max-len", params: ["phone", 256] });
errors.set(550090, {id: "message.error-invalid-value", params: ["country_id"] });
errors.set(550100, {id: "message.error-invalid-string-max-len", params: ["description", 256] });
errors.set(550110, {id: "message.error-invalid-int", params: ["id"] });
errors.set(550120, {id: "message.error-invalid-value", params: ["supplier_contact id"] });
errors.set(550130, {id: "message.error-not-match-parent", params: ["supplier_contact", "supplier_id"] });
errors.set(550140, {id: "message.error-invalid-string-max-len", params: ["co_company", 256] });
errors.set(550150, {id: "message.error-invalid-string-max-len", params: ["zip", 10] });
errors.set(550160, {id: "message.error-invalid-value-for-organization", params: ["supplier contact id"] });
errors.set(550170, {id: "message.error-data-used", params: ["supplier_communication_log"] });
errors.set(550180, {id: "message.error-data-used", params: ["supplier_contact_supplier_communication"]});
errors.set(550190, {id: "message.error-invalid-sweden-zip-code"});

// Document transfer
errors.set(560000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(560010, {id: "message.error-invalid-value-for-organization", params: ["account_nr"] });
errors.set(560020, {id: "message.error-560020"});
errors.set(560030, {id: "message.error-organization-session" });
errors.set(560040, {id: "message.error-invalid-int", params: ["data.debt_account_nr"] });
errors.set(560050, {id: "message.error-invalid-int", params: ["data.accounting.account_nr"] });

// Accounts tracking match
errors.set(570000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(570010, {id: "message.error-invalid-value", params: ["accounts_tracking_match_id"] });
errors.set(570020, {id: "message.error-570020" });
errors.set(570030, {id: "message.error-invalid-int", params: ["accounts_tracking_id"] });
errors.set(570040, {id: "message.error-invalid-value", params: ["accounts_tracking_id"] });
errors.set(570050, {id: "message.error-570050"});
errors.set(570060, {id: "message.error-570060"});
errors.set(570070, {id: "message.error-invalid-int", params: ["amount_bp_matched"] });
errors.set(570080, {id: "message.error-570080"});
errors.set(570090, {id: "message.error-570090"});

// Supplier invoice pay
errors.set(580000, {id: "message.error-invalid-int", params: ["accounts_tracking_id"] });
errors.set(580010, {id: "message.error-invalid-value", params: ["accounts_tracking_id"] });
errors.set(580020, {id: "message.error-580020" });
errors.set(580030, {id: "message.error-580030"});

// Inventory
errors.set(590000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(590010, {id: "message.error-table-organization-session" });
errors.set(590020, {id: "message.error-invalid-value", params: ["inventory id"] });
errors.set(590030, {id: "message.error-invalid-string-max-len", params: ["inventory_name", 256] });
errors.set(590040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(590050, {id: "message.error-duplicated-value2", params: ["inventory_nr", "table_organization_id"] });
errors.set(590060, {id: "message.error-invalid-value", params: ["inventory_nr"] });
errors.set(590070, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(590080, {id: "message.error-invalid-array", params: ["inventory_visible_for_organization_ids"] });
errors.set(590090, {id: "message.error-invalid-int", params: ["inventory_visible_for_organization_id"] });
errors.set(590100, {id: "message.error-590100" });

// Inventory location
errors.set(600000, {id: "message.error-data-used", params: ["inventory_location_article"]});
errors.set(600010, {id: "message.error-600010" });
errors.set(600020, {id: "message.error-duplicated-value2", params: ["inventory_name", "inventory_id"] });
errors.set(600030, {id: "message.error-invalid-int", params: ["inventory_id"] });
errors.set(600040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(600050, {id: "message.error-invalid-value", params: ["inventory location id"] });
errors.set(600060, {id: "message.error-invalid-value", params: ["inventory_id"] });
errors.set(600070, {id: "message.error-inactive", params: ["inventory_id"]});
errors.set(600080, {id: "message.error-invalid-string-max-len", params: ["inventory_name", 64] });
errors.set(600090, {id: "message.error-invalid-string-max-len", params: ["comment", 512] });
errors.set(600100, {id: "message.error-invalid-boolean", params: ["is_active"] });

// Inventory location article
errors.set(610000, {id: "message.error-required", params: ["organization.inventory_change_source_id_manual"] });
errors.set(610010, {id: "message.error-610010" });
errors.set(610020, {id: "message.error-invalid-float", params: ["units"] });
errors.set(610030, {id: "message.error-invalid-int", params: ["inventory_location_id"] });
errors.set(610040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(610050, {id: "message.error-invalid-value", params: ["inventory_location_article_id"] });
errors.set(610060, {id: "message.error-invalid-value", params: ["inventory_location_id"] });
errors.set(610070, {id: "message.error-inactive", params: ["inventory_location_id"]});
errors.set(610080, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(610090, {id: "message.error-inactive", params: ["article_id"]});
errors.set(610100, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(610110, {id: "message.error-data-used", params: ["inventory_row"]});
errors.set(610120, {id: "message.error-inactive", params: ["inventory_id"]});
errors.set(610130, {id: "message.error-invalid-boolean", params: ["is_active"] });

// Quote
errors.set(620000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(620010, {id: "message.error-invalid-int", params: ["quote_status_id"] });
errors.set(620020, {id: "message.error-empty-array-data", params: ["quote_rows"] });
errors.set(620030, {id: "message.error-organization-session" });
errors.set(620040, {id: "message.error-invalid-value", params: ["quote_status_id"] });
errors.set(620050, {id: "message.error-invalid-value", params: ["quote_date"] });
errors.set(620060, {id: "message.error-invalid-int", params: ["customer_id"] });
errors.set(620070, {id: "message.error-invalid-value-for-organization", params: ["customer_id"] });
errors.set(620080, {id: "message.error-inactive", params: ["customer_id"]});
errors.set(620090, {id: "message.error-invalid-int", params: ["currency_id"] });
errors.set(620100, {id: "message.error-invalid-value-for-organization", params: ["currency_id"] });
errors.set(620110, {id: "message.error-invalid-string-max-len", params: ["quote_our_reference", 256] });
errors.set(620120, {id: "message.error-invalid-int", params: ["id"] });
errors.set(620130, {id: "message.error-invalid-value-for-organization", params: ["id"] });
errors.set(620140, {id: "message.error-620140"});
errors.set(620150, {id: "message.error-invalid-value", params: ["valid_to"] });
errors.set(620160, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(620170, {id: "message.error-invalid-int", params: ["price_list_id"] });
errors.set(620180, {id: "message.error-invalid-value-for-organization", params: ["price_list_id"] });
errors.set(620190, {id: "message.error-620190"});
errors.set(620200, {id: "message.error-620200"});

// Quote row
errors.set(630000, {id: "message.error-invalid-int", params: ["unit_id"] });
errors.set(630010, {id: "message.error-invalid-value-for-organization", params: ["unit_id"] });
errors.set(630020, {id: "message.error-invalid-int", params: ["currency_value_bp"] });
errors.set(630030, {id: "message.error-inactive", params: ["article_id"]});
errors.set(630040, {id: "message.error-invalid-float", params: ["units"] });
errors.set(630050, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(630060, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(630070, {id: "message.error-invalid-int", params: ["local_value_bp"] });
errors.set(630080, {id: "message.error-invalid-int", params: ["quote_row_id"] });
errors.set(630090, {id: "message.error-invalid-value", params: ["quote_row_id"] });
errors.set(630100, {id: "message.error-630100"});
errors.set(630110, {id: "message.error-invalid-string-max-len", params: ["article_name", 256] });
errors.set(630120, {id: "message.error-invalid-float", params: ["discount"] });
errors.set(630130, {id: "message.error-630100"});

// Order
errors.set(640000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(640010, {id: "message.error-invalid-int", params: ["order_status_id"] });
errors.set(640020, {id: "message.error-empty-array-data", params: ["order_rows"] });
errors.set(640030, {id: "message.error-organization-session" });
errors.set(640040, {id: "message.error-invalid-value", params: ["order_status_id"] });
errors.set(640050, {id: "message.error-invalid-value", params: ["order_date"] });
errors.set(640060, {id: "message.error-invalid-int", params: ["customer_id"] });
errors.set(640070, {id: "message.error-invalid-value-for-organization", params: ["customer_id"] });
errors.set(640080, {id: "message.error-inactive", params: ["customer_id"]});
errors.set(640090, {id: "message.error-invalid-int", params: ["currency_id"] });
errors.set(640100, {id: "message.error-invalid-value-for-organization", params: ["currency_id"] });
errors.set(640110, {id: "message.error-invalid-int", params: ["id"] });
errors.set(640120, {id: "message.error-invalid-value", params: ["id"] });
errors.set(640130, {id: "message.error-640130" });
errors.set(640140, {id: "message.error-invalid-string-max-len", params: ["order_our_reference", 256] });
errors.set(640150, {id: "message.error-invalid-int", params: ["quote_id"] });
errors.set(640160, {id: "message.error-invalid-value-for-organization", params: ["quote_id"] });
errors.set(640170, {id: "message.error-640170"});
errors.set(640180, {id: "message.error-empty-array", params: ["quote_rows"] });
errors.set(640190, {id: "message.error-invalid-int", params: ["quote_row_id"] });
errors.set(640200, {id: "message.error-invalid-value", params: ["quote_row_id"] });
errors.set(640210, {id: "message.error-640170"});
errors.set(640220, {id: "message.error-invalid-value", params: ["to_be_delivered_at"] });
errors.set(640230, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(640240, {id: "message.error-invalid-int", params: ["price_list_id"] });
errors.set(640250, {id: "message.error-invalid-value-for-organization", params: ["price_list_id"] });
errors.set(640260, {id: "message.error-640260"});
errors.set(640270, {id: "message.error-640270"});
errors.set(640280, {id: "message.error-invalid-float", params: ["units"] });

// Order row
errors.set(650000, {id: "message.error-invalid-int", params: ["unit_id"] });
errors.set(650010, {id: "message.error-invalid-value-for-organization", params: ["unit_id"] });
errors.set(650020, {id: "message.error-invalid-int", params: ["currency_value_bp"] });
errors.set(650030, {id: "message.error-inactive", params: ["article_id"]});
errors.set(650040, {id: "message.error-invalid-float", params: ["units"] });
errors.set(650050, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(650060, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(650070, {id: "message.error-invalid-int", params: ["local_value_bp"] });
errors.set(650080, {id: "message.error-invalid-int", params: ["order_row_id"] });
errors.set(650090, {id: "message.error-invalid-value", params: ["order_row_id"] });
errors.set(650100, {id: "message.error-650100"});
errors.set(650110, {id: "message.error-invalid-string-max-len", params: ["article_name", 256] });
errors.set(650120, {id: "message.error-invalid-float", params: ["discount"] });
errors.set(650130, {id: "message.error-650130"});

// Customer contact customer communication
errors.set(660000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(660010, {id: "message.error-invalid-value", params: ["customer_contact_customer_communication_id"] });
errors.set(660020, {id: "message.error-660020" });
errors.set(660030, {id: "message.error-invalid-int", params: ["customer_communication_id"] });
errors.set(660040, {id: "message.error-invalid-value", params: ["customer_communication_id"] });
errors.set(660050, {id: "message.error-invalid-int", params: ["customer_contact_id"] });
errors.set(660060, {id: "message.error-invalid-value-for-organization", params: ["customer_contact_id"] });

// Customer comment
errors.set(670000, {id: "message.error-invalid-string-max-len", params: ["comment", 4096] });
errors.set(670010, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(670020, {id: "message.error-invalid-int", params: ["id"] });
errors.set(670030, {id: "message.error-invalid-boolean", params: ["is_warning"] });
errors.set(670040, {id: "message.error-invalid-value-for-organization", params: ["customer comment id"] });
errors.set(670050, {id: "message.error-invalid-int", params: ["customer_id"] });
errors.set(670060, {id: "message.error-invalid-value-for-organization", params: ["customer_id"] });
errors.set(670070, {id: "message.error-inactive", params: ["customer_id"]});
errors.set(670080, {id: "message.error-invalid-int", params: ["organization_user_id"] });
errors.set(670090, {id: "message.error-invalid-value-for-organization", params: ["organization_user_id"] });

// Article price list campaign
errors.set(680000, {id: "message.error-inactive", params: ["article_price_list.article"]});
errors.set(680010, {id: "message.error-invalid-int", params: ["article_price_list_id"] });
errors.set(680020, {id: "message.error-invalid-value", params: ["article_price_list_id"] });
errors.set(680030, {id: "message.error-invalid-int", params: ["price_bp"] });
errors.set(680040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(680050, {id: "message.error-invalid-value", params: ["id"] });
errors.set(680060, {id: "message.error-680060" });
errors.set(680070, {id: "message.error-inactive", params: ["article_price_list.article"]});
errors.set(680080, {id: "message.error-680080" });
errors.set(680090, {id: "message.error-invalid-value-for-organization", params: ["price_list_id"] });
errors.set(680100, {id: "message.error-680100" });
errors.set(680110, {id: "message.error-680110" });
errors.set(680120, {id: "message.error-duplicated-value2", params: ["article_id", "price_list_id"] });
errors.set(680130, {id: "message.error-invalid-float", params: ["share_bp"] });
errors.set(680140, {id: "message.error-invalid-float", params: ["is_additive"] });
errors.set(680150, {id: "message.error-invalid-value", params: ["start_date"] });
errors.set(680160, {id: "message.error-invalid-value", params: ["end_date"] });
errors.set(680170, {id: "message.error-invalid-date-range", params: ["start_date", "end_date"] });

// Article price list campaign quant price
errors.set(690000, {id: "message.error-invalid-int", params: ["from_quantity"] });
errors.set(690010, {id: "message.error-690010" });
errors.set(690020, {id: "message.error-not-match-parent", params: ["article_price_list_campaign_quant_price", "article_price_list_campaign_id"] });
errors.set(690030, {id: "message.error-invalid-int", params: ["price_bp"] });
errors.set(690040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(690050, {id: "message.error-invalid-value", params: ["id"] });
errors.set(690060, {id: "690060" });
errors.set(690070, {id: "message.error-inactive", params: ["article_price_list_campaign.article_price_list.article_id"]});
errors.set(690080, {id: "message.error-invalid-float", params: ["share_bp"] });

// Supplier comment
errors.set(700000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(700010, {id: "message.error-invalid-value-for-organization", params: ["supplier comment id"] });
errors.set(700020, {id: "message.error-invalid-int", params: ["supplier_id"] });
errors.set(700030, {id: "message.error-invalid-value-for-organization", params: ["supplier_id"] });
errors.set(700040, {id: "message.error-inactive", params: ["supplier_id"] })
errors.set(700050, {id: "message.error-invalid-string-max-len", params: ["comment", 4096] });
errors.set(700060, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(700070, {id: "message.error-invalid-boolean", params: ["is_warning"] });
errors.set(700080, {id: "message.error-invalid-int", params: ["organization_user_id"] });
errors.set(700090, {id: "message.error-invalid-value-for-organization", params: ["organization_user_id"] });

// Supplier contact supplier communication
errors.set(710000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(710010, {id: "message.error-invalid-value", params: ["supplier_contact_supplier_communication_id"] });
errors.set(710020, {id: "message.error-710020" });
errors.set(710030, {id: "message.error-invalid-int", params: ["supplier_contact_id"] });
errors.set(710040, {id: "message.error-invalid-value-for-organization", params: ["supplier_contact_id"] });
errors.set(710050, {id: "message.error-invalid-int", params: ["supplier_communication_id"] });
errors.set(710060, {id: "message.error-invalid-value", params: ["supplier_communication_id"] });

// Purchase order
errors.set(720000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(720010, {id: "message.error-invalid-value", params: ["sent_date"] });
errors.set(720020, {id: "message.error-empty-array-data", params: ["purchase_order_rows"] });
errors.set(720030, {id: "message.error-organization-session" });
errors.set(720040, {id: "message.error-invalid-value", params: ["expected_delivery_date"] });
errors.set(720050, {id: "message.error-invalid-value", params: ["order_date"] });
errors.set(720060, {id: "message.error-invalid-int", params: ["supplier_id"] });
errors.set(720070, {id: "message.error-invalid-value-for-organization", params: ["supplier_id"] });
errors.set(720080, {id: "message.error-inactive", params: ["supplier_id"]});
errors.set(720090, {id: "message.error-720090"});
errors.set(720100, {id: "message.error-720100" });
errors.set(720110, {id: "message.error-invalid-int", params: ["id"] });
errors.set(720120, {id: "message.error-invalid-value", params: ["id"] });
errors.set(720130, {id: "message.error-invalid-int", params: ["currency_id"] });
errors.set(720140, {id: "message.error-invalid-value-for-organization", params: ["currency_id"] });
errors.set(720150, {id: "message.error-720150"});
errors.set(720160, {id: "message.error-720160"});

// Purchase order row
errors.set(730000, {id: "message.error-invalid-int", params: ["purchase_order_row_id"] });
errors.set(730010, {id: "message.error-invalid-value", params: ["purchase_order_row_id"] });
errors.set(730020, {id: "message.error-730020"});
errors.set(730030, {id: "message.error-inactive", params: ["article_id"]});
errors.set(730040, {id: "message.error-invalid-float", params: ["units"] });
errors.set(730050, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(730060, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(730070, {id: "message.error-730070"});

// Purchase order receipt
errors.set(740000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(740010, {id: "message.error-740010"});
errors.set(740020, {id: "message.error-empty-array-data", params: ["purchase_order_rows"] });
errors.set(740030, {id: "message.error-organization-session" });
errors.set(740040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(740050, {id: "message.error-invalid-value", params: ["id"] });
errors.set(740060, {id: "message.error-invalid-int", params: ["supplier_id"] });
errors.set(740070, {id: "message.error-invalid-value-for-organization", params: ["supplier_id"] });
errors.set(740080, {id: "message.error-inactive", params: ["supplier_id"]});
errors.set(740090, {id: "message.error-740090" });

// Purchase order receipt row
errors.set(750000, {id: "message.error-750000" });
errors.set(750010, {id: "message.error-inactive", params: ["inventory_id"]});
errors.set(750020, {id: "message.error-invalid-int", params: ["inventory_location_id"] });
errors.set(750030, {id: "message.error-inactive", params: ["article_id"]});
errors.set(750040, {id: "message.error-invalid-float", params: ["units"] });
errors.set(750050, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(750060, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(750070, {id: "message.error-invalid-value", params: ["inventory_location_id"] });
errors.set(750080, {id: "message.error-invalid-int", params: ["purchase_order_row_id"] });
errors.set(750090, {id: "message.error-invalid-value", params: ["purchase_order_row_id"] });
errors.set(750100, {id: "message.error-invalid-boolean", params: ["is_receipt_not_cancelled"] });
errors.set(750120, {id: "message.error-invalid-value", params: ["event_date"] });

// Price list
errors.set(760000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(760010, {id: "message.error-table-organization-session" });
errors.set(760020, {id: "message.error-invalid-string-max-len", params: ["price_list_name", 64] });
errors.set(760030, {id: "message.error-invalid-int", params: ["currency_id"] });
errors.set(760040, {id: "message.error-invalid-value-for-organization", params: ["currency_id"] });
errors.set(760050, {id: "message.error-invalid-int", params: ["id"] });
errors.set(760060, {id: "message.error-invalid-value", params: ["price_list id"] });
errors.set(760070, {id: "message.error-data-used", params: ["article_price_list"]});
errors.set(760080, {id: "message.error-data-used", params: ["article"]});
errors.set(760090, {id: "message.error-data-used", params: ["customer"]});
errors.set(760100, {id: "message.error-data-used", params: ["invoice"]});
errors.set(760110, {id: "message.error-data-used", params: ["order"]});
errors.set(760120, {id: "message.error-data-used", params: ["organization"]});
errors.set(760130, {id: "message.error-data-used", params: ["quote"]});

// Delivery term
errors.set(770000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(770010, {id: "message.error-invalid-int", params: ["delivery_term_nr"] });
errors.set(770020, {id: "message.error-invalid-string-max-len", params: ["delivery_term_name", 64] });
errors.set(770030, {id: "message.error-duplicated-value2", params: ["delivery_term_nr", "table_organization_id"] });
errors.set(770040, {id: "message.error-table-organization-session" });
errors.set(770050, {id: "message.error-invalid-int", params: ["id"] });
errors.set(770060, {id: "message.error-invalid-value", params: ["delivery_term id"] });
errors.set(770070, {id: "message.error-data-used", params: ["customer"]});
errors.set(770080, {id: "message.error-data-used", params: ["invoice"]});
errors.set(770090, {id: "message.error-data-used", params: ["delivery_term_supplier"]});

// Delivery method
errors.set(780000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(780010, {id: "message.error-table-organization-session" });
errors.set(780020, {id: "message.error-invalid-int", params: ["delivery_method_nr"] });
errors.set(780030, {id: "message.error-invalid-string-max-len", params: ["delivery_method_name", 64] });
errors.set(780040, {id: "message.error-duplicated-value2", params: ["delivery_method_nr", "table_organization_id"] });
errors.set(780050, {id: "message.error-invalid-int", params: ["id"] });
errors.set(780060, {id: "message.error-invalid-value", params: ["delivery_method id"] });
errors.set(780070, {id: "message.error-data-used", params: ["customer"]});
errors.set(780080, {id: "message.error-data-used", params: ["delivery_method_supplier"]});

// Organization user
errors.set(790000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(790010, {id: "message.error-invalid-int", params: ["default_inventory_id"] });
errors.set(790020, {id: "message.error-invalid-value-for-organization", params: ["default_inventory_id"] });
errors.set(790030, {id: "message.error-invalid-int", params: ["user_id"] });
errors.set(790040, {id: "message.error-invalid-value", params: ["user_id"] });
errors.set(790050, {id: "message.error-duplicated-value2", params: ["user_id", "organization_id"] });
errors.set(790060, {id: "message.error-organization-session" });
errors.set(790070, {id: "message.error-invalid-string-max-len", params: ["user_email", 256] });
errors.set(790080, {id: "message.error-invalid-int", params: ["id"] });
errors.set(790090, {id: "message.error-invalid-value", params: ["organization_user_id"] });
errors.set(790100, {id: "message.error-790100"});
errors.set(790110, {id: "message.error-invalid-string-max-len", params: ["user_name", 256] });
errors.set(790120, {id: "message.error-invalid-string-max-len", params: ["initials", 3] });
errors.set(790130, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(790140, {id: "message.error-invalid-boolean", params: ["is_default"] });
errors.set(790150, {id: "message.error-duplicated-value2", params: ["initials", "organization_id"] });

// Organization user role
errors.set(800000, {id: "message.error-invalid-int", params: ["role_id"] });
errors.set(800010, {id: "message.error-invalid-value", params: ["role_id"] });

// Inventory count
errors.set(810000, {id: "message.error-invalid-int", params: ["inventory_id"] });
errors.set(810010, {id: "message.error-invalid-value", params: ["inventory_id"] });
errors.set(810020, {id: "message.error-810020" });
errors.set(810030, {id: "message.error-invalid-string-max-len", params: ["comment", 512] });
errors.set(810040, {id: "message.error-invalid-value", params: ["count_date"] });
errors.set(810050, {id: "message.error-invalid-int", params: ["inventory_count_status_id"] });
errors.set(810060, {id: "message.error-invalid-value-for-organization", params: ["inventory_count_status_id"] });
errors.set(810070, {id: "message.error-empty-array-data", params: ["inventory_count_rows"] });
errors.set(810080, {id: "message.error-invalid-int", params: ["id"] });
errors.set(810090, {id: "message.error-invalid-value", params: ["id"] });
errors.set(810100, {id: "message.error-810100"});
errors.set(810110, {id: "message.error-810110"});
errors.set(810120, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(810130, {id: "message.error-organization-session" });

// Inventory count row
errors.set(820000, {id: "message.error-invalid-int", params: ["inventory_count_row_id"] });
errors.set(820010, {id: "message.error-invalid-value", params: ["inventory_count_row_id"] });
errors.set(820020, {id: "message.error-820020"});
errors.set(820030, {id: "message.error-inactive", params: ["article_id"]});
errors.set(820040, {id: "message.error-invalid-float", params: ["units"] });
errors.set(820050, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(820060, {id: "message.error-invalid-value-for-organization", params: ["article_id"] });
errors.set(820070, {id: "message.error-invalid-boolean", params: ["is_checked"] });
errors.set(820080, {id: "message.error-invalid-int", params: ["inventory_location_id"] });
errors.set(820090, {id: "message.error-invalid-value", params: ["inventory_location_id"] });
errors.set(820100, {id: "message.error-820100" });
errors.set(820110, {id: "message.error-inactive", params: ["inventory_id"]});
errors.set(820120, {id: "message.error-inactive", params: ["inventory_location_id"]});
errors.set(820130, {id: "message.error-invalid-float", params: ["units_calculated"] });
errors.set(820140, {id: "message.error-820140"});

// Payment term
errors.set(830000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(830010, {id: "message.error-invalid-int", params: ["payment_term_nr"] });
errors.set(830020, {id: "message.error-duplicated-value2", params: ["payment_term_nr", "table_organization_id"] });
errors.set(830030, {id: "message.error-invalid-int", params: ["credit_days"] });
errors.set(830040, {id: "message.error-invalid-string-max-len", params: ["payment_term_name", 64] });
errors.set(830050, {id: "message.error-table-organization-session" });
errors.set(830060, {id: "message.error-invalid-int", params: ["id"] });
errors.set(830070, {id: "message.error-invalid-value", params: ["payment_term id"] });
errors.set(830080, {id: "message.error-data-used", params: ["customer"]});
errors.set(830090, {id: "message.error-data-used", params: ["payment_term_supplier"]});
errors.set(830100, {id: "message.error-data-used", params: ["invoice"]});

// Currency
errors.set(840000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(840010, {id: "message.error-invalid-string-max-len", params: ["currency_name", 256] });
errors.set(840020, {id: "message.error-invalid-string-max-len", params: ["short_name", 3] });
errors.set(840030, {id: "message.error-invalid-float", params: ["exchange_rate"] });
errors.set(840040, {id: "message.error-table-organization-session" });
errors.set(840050, {id: "message.error-invalid-int", params: ["id"] });
errors.set(840060, {id: "message.error-invalid-value", params: ["currency id"] });
errors.set(840070, {id: "message.error-invalid-boolean", params: ["is_default"] });
errors.set(840080, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(840090, {id: "message.error-data-used", params: ["customer"]});
errors.set(840100, {id: "message.error-data-used", params: ["gl"]});
errors.set(840110, {id: "message.error-data-used", params: ["invoice"]});
errors.set(840120, {id: "message.error-data-used", params: ["order"]});
errors.set(840130, {id: "message.error-data-used", params: ["organization"]});
errors.set(840140, {id: "message.error-data-used", params: ["price_list"]});
errors.set(840150, {id: "message.error-data-used", params: ["purchase_order"]});
errors.set(840160, {id: "message.error-data-used", params: ["supplier_invoice"]});
errors.set(840170, {id: "message.error-data-used", params: ["supplier"]});

// Approval cycle
errors.set(850000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(850010, {id: "message.error-organization-session" });
errors.set(850020, {id: "message.error-invalid-value-for-organization", params: ["approval_cycle id"] });
errors.set(850030, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(850040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(850050, {id: "message.error-data-used", params: ["supplier_invoice"]});
errors.set(850060, {id: "message.error-invalid-int", params: ["order_by"] });

// Organization attachment type
errors.set(860000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(860010, {id: "message.error-organization-session" });
errors.set(860020, {id: "message.error-invalid-int", params: ["attachment_type_id"] });
errors.set(860030, {id: "message.error-invalid-value", params: ["attachment_type_id"] });
errors.set(860040, {id: "message.error-duplicated-value2", params: ["organization_id", "attachment_type_id"] });
errors.set(860050, {id: "message.error-invalid-int", params: ["organization_attachment_type_id"] });
errors.set(860060, {id: "message.error-invalid-value-for-organization", params: ["organization_attachment_type_id"] });

// Supplier invoice
errors.set(870000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(870010, {id: "message.error-organization-session" });
errors.set(870020, {id: "message.error-870020"});
errors.set(870030, {id: "message.error-870030"});
errors.set(870040, {id: "message.error-invalid-int", params: ["supplier_id"] });
errors.set(870050, {id: "message.error-invalid-value-for-organization", params: ["supplier_id"] });
errors.set(870060, {id: "message.error-inactive", params: ["supplier_id"] })
errors.set(870070, {id: "message.error-870070" });
errors.set(870080, {id: "message.error-invalid-value", params: ["uri"] });
errors.set(870090, {id: "message.error-invalid-value", params: ["organization_id"] });
errors.set(870100, {id: "message.error-870100"});
errors.set(870110, {id: "message.error-file-not-found"});
errors.set(870120, {id: "message.error-870120"});
errors.set(870130, {id: "message.error-870130"});
errors.set(870140, {id: "message.error-inactive", params: ["approval_cycle_id"]});
errors.set(870150, {id: "message.error-870150"});
errors.set(870160, {id: "message.error-870160"});
errors.set(870170, {id: "message.error-invalid-int", params: ["id"] });
errors.set(870180, {id: "message.error-invalid-value-for-organization", params: ["id"] });
errors.set(870190, {id: "message.error-invalid-value", params: ["accounting.acc_dim.dim_value"] });
errors.set(870200, {id: "message.error-invalid-int", params: ["approval_cycle_id"] });
errors.set(870210, {id: "message.error-870210"});
errors.set(870220, {id: "message.error-870220"});
errors.set(870230, {id: "message.error-870230"});
errors.set(870240, {id: "message.error-870240"});
errors.set(870250, {id: "message.error-invalid-array", params: ["document_comments"] });
errors.set(870260, {id: "message.error-invalid-int", params: ["comment_type"] });
errors.set(870270, {id: "message.error-invalid-value", params: ["comment_type"] });
errors.set(870280, {id: "message.error-invalid-value", params: ["comment"] });
errors.set(870290, {id: "message.error-invalid-int", params: ["account_classification_id"] });
errors.set(870300, {id: "message.error-invalid-value-for-organization", params: ["account_classification_id"] });
errors.set(870310, {id: "message.error-invalid-int", params: ["amount_total"] });
errors.set(870320, {id: "message.error-invalid-int", params: ["amount_vat"] });
errors.set(870330, {id: "message.error-invalid-int", params: ["amount_shipping"] });
errors.set(870340, {id: "message.error-870340"});
errors.set(870350, {id: "message.error-inactive", params: ["account_classification_id"] })
errors.set(870360, {id: "message.error-invalid-value-for-organization", params: ["approval_cycle_id"] });
errors.set(870370, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(870380, {id: "message.error-invalid-string-number", params: ["document_nr", 64] });
errors.set(870390, {id: "message.error-invalid-string-max-len", params: ["document_nr", 64] });
errors.set(870400, {id: "message.error-invalid-string-max-len", params: ["bank_identifier", 64] });
errors.set(870410, {id: "message.error-invalid-string-max-len", params: ["procurement_number", 64] });
errors.set(870420, {id: "message.error-invalid-value", params: ["procurement_number"] });
errors.set(870430, {id: "message.error-invalid-value", params: ["document_date"] });
errors.set(870440, {id: "message.error-invalid-value", params: ["due_date"] });
errors.set(870450, {id: "message.error-invalid-value", params: ["vat_type_supplier_id"] });
errors.set(870460, {id: "message.error-invalid-int", params: ["vat_type_supplier_id"] });
errors.set(870470, {id: "message.error-invalid-value-for-organization", params: ["vat_type_supplier_id"] });
errors.set(870480, {id: "message.error-invalid-value", params: ["amount_vat"] });
errors.set(870490, {id: "message.error-invalid-int", params: ["currency_id"] });
errors.set(870500, {id: "message.error-invalid-value-for-organization", params: ["currency_id"] });
errors.set(870510, {id: "message.error-invalid-value-for-organization", params: ["debt_account_nr"] });
errors.set(870520, {id: "message.error-invalid-array", params: ["accounting_dimension"] });
errors.set(870530, {id: "message.error-required", params: ["accounting_dimension.dim_id"] });
errors.set(870540, {id: "message.error-invalid-value-for-organization", params: ["accounting_dimension.dim_id"] });
errors.set(870550, {id: "message.error-invalid-value", params: ["accounting_dimension.dim_value"] });
errors.set(870560, {id: "message.error-invalid-int", params: ["accounting_dimension.dim_value"] });
errors.set(870570, {id: "message.error-invalid-boolean", params: ["accrual_use"] });
errors.set(870580, {id: "message.error-invalid-value", params: ["accrual_use"] });
errors.set(870590, {id: "message.error-invalid-string-max-len", params: ["accrual_periods", 2] });
errors.set(870600, {id: "message.error-invalid-value", params: ["accrual_periods"] });
errors.set(870610, {id: "message.error-invalid-string-max-len", params: ["accrual_start", 6] });
errors.set(870620, {id: "message.error-invalid-value", params: ["accrual_start"] });
errors.set(870630, {id: "message.error-invalid-array", params: ["accounting"] });
errors.set(870640, {id: "message.error-invalid-value-for-organization", params: ["accounting.account_nr"] });
errors.set(870650, {id: "message.error-invalid-int", params: ["accounting.debit"] });
errors.set(870660, {id: "message.error-invalid-int", params: ["accounting.credit"] });
errors.set(870670, {id: "message.error-invalid-value", params: ["accounting.comment"] });
errors.set(870680, {id: "message.error-invalid-value", params: ["accounting.vat_type_own_id"] });
errors.set(870690, {id: "message.error-invalid-value", params: ["accounting.procurement_number"] });
errors.set(870700, {id: "message.error-invalid-int", params: ["debt_account_nr"] });
errors.set(870710, {id: "message.error-invalid-int", params: ["accounting.account_nr"] });
errors.set(870720, {id: "message.error-invalid-int", params: ["accounting.account_nr"] });
errors.set(870730, {id: "message.error-invalid-int", params: ["accounting.acc_dim.dim_value"] });
errors.set(870740, {id: "message.error-invalid-value-for-organization", params: ["account_nr"] });
errors.set(870750, {id: "message.error-870750"});
errors.set(870760, {id: "message.error-870760"});
errors.set(870770, {id: "message.error-invalid-int", params: ["rounding"] });
errors.set(870780, {id: "message.error-invalid-int", params: ["freight"] });

// Job
errors.set(880000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(880010, {id: "message.error-organization-session" })
errors.set(880020, {id: "message.error-invalid-string-max-len", params: ["name", 128] });
errors.set(880030, {id: "message.error-invalid-string-max-len", params: ["description", 1024] });
errors.set(880040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(880050, {id: "message.error-invalid-value", params: ["job id"] });
errors.set(880060, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(880070, {id: "message.error-invalid-boolean", params: ["ignore_summary"] });
errors.set(880080, {id: "message.error-880080" })
errors.set(880090, {id: "message.error-880090" })
errors.set(880100, {id: "message.error-880100" })
errors.set(880110, {id: "message.error-invalid-date-range", params: ["from_date", "to_date"] });
errors.set(880120, {id: "message.error-invalid-int", params: ["job_source_id"] });
errors.set(880130, {id: "message.error-880130" })
errors.set(880140, {id: "message.error-880140" })
errors.set(880150, {id: "message.error-invalid-int", params: ["verification_template_id"] });
errors.set(880160, {id: "message.error-invalid-value", params: ["from_date"] });
errors.set(880170, {id: "message.error-invalid-value", params: ["to_date"] });

// Job source
errors.set(890000, {id: "message.error-invalid-int", params: ["job_id"] });
errors.set(890010, {id: "message.error-invalid-value", params: ["job id"] });
errors.set(890020, {id: "message.error-890020" })
errors.set(890030, {id: "message.error-organization-session" })
errors.set(890040, {id: "message.error-invalid-int", params: ["job_source_type_id"] });
errors.set(890050, {id: "message.error-890050" });
errors.set(890060, {id: "message.error-890060" });
errors.set(890070, {id: "message.error-invalid-string-max-len", params: ["name", 128] });
errors.set(890080, {id: "message.error-invalid-int", params: ["id"] });
errors.set(890090, {id: "message.error-890090" })
errors.set(890100, {id: "message.error-890100" })
errors.set(890110, {id: "message.error-890110" })
errors.set(890120, {id: "message.error-not-supported-file-extension" })
errors.set(890130, {id: "message.error-file-not-found" })
errors.set(890140, {id: "message.error-890140" })
errors.set(890150, {id: "message.error-invalid-value", params: ["specification.uri"] });
errors.set(890160, {id: "message.error-890160" })
errors.set(890170, {id: "message.error-invalid-array", params: ["specification.columns"] });
errors.set(890180, {id: "message.error-890180" })
errors.set(890190, {id: "message.error-890190" })
errors.set(890200, {id: "message.error-890200" })
errors.set(890210, {id: "message.error-890210" })
errors.set(890220, {id: "message.error-890220" })
errors.set(890230, {id: "message.error-invalid-value", params: ["scheduled_period"] });
errors.set(890240, {id: "message.error-invalid-int", params: ["scheduled_days_back"] });

// Job row
errors.set(900000, {id: "message.error-invalid-int", params: ["job_source_id"] });
errors.set(900010, {id: "message.error-900010" })
errors.set(900020, {id: "message.error-organization-session" })
errors.set(900030, {id: "message.error-required", params: ["external_identifier"] });
errors.set(900040, {id: "message.error-duplicated-value2", params: ["external_identifier", "job_source_id"] });
errors.set(900050, {id: "message.error-invalid-int", params: ["job_row_value"] });
errors.set(900060, {id: "message.error-invalid-value", params: ["job_row_datetime"] });
errors.set(900070, {id: "message.error-900070" })
errors.set(900080, {id: "message.error-invalid-string-max-len", params: ["comment", 256] });
errors.set(900090, {id: "message.error-900090" })
errors.set(900100, {id: "message.error-invalid-int", params: ["id"] });
errors.set(900110, {id: "message.error-invalid-value", params: ["organization_id"] });
errors.set(900120, {id: "message.error-900120" })
errors.set(900130, {id: "message.error-empty-array", params: ["ids"] });
errors.set(900140, {id: "message.error-900140" })
errors.set(900150, {id: "message.error-900150" })
errors.set(900160, {id: "message.error-900160" })
errors.set(900170, {id: "message.error-900170" })
errors.set(900180, {id: "message.error-900180" })
errors.set(900190, {id: "message.error-900190" })
errors.set(900200, {id: "message.error-900200" })
errors.set(900210, {id: "message.error-900210" })
errors.set(900220, {id: "message.error-900220" })
errors.set(900230, {id: "message.error-900230" })
errors.set(900240, {id: "message.error-invalid-boolean", params: ["ignore_error_check"] });

// Job rule
errors.set(910000, {id: "message.error-910000" })
errors.set(910010, {id: "message.error-invalid-int", params: ["job_id"] });
errors.set(910020, {id: "message.error-910020" })
errors.set(910030, {id: "message.error-910030" })
errors.set(910040, {id: "message.error-invalid-string-max-len", params: ["name", 128] });
errors.set(910050, {id: "message.error-invalid-int", params: ["job_source_id_one"] });
errors.set(910060, {id: "message.error-910060" })
errors.set(910070, {id: "message.error-910070" })
errors.set(910080, {id: "message.error-invalid-int", params: ["job_source_id_two"] });
errors.set(910090, {id: "message.error-invalid-int", params: ["days_back"] });
errors.set(910100, {id: "message.error-invalid-int", params: ["days_forward"] });
errors.set(910110, {id: "message.error-invalid-int", params: ["id"] });
errors.set(910120, {id: "message.error-910120" })
errors.set(910130, {id: "message.error-910130" })
errors.set(910140, {id: "message.error-910140" })
errors.set(910150, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(910160, {id: "message.error-invalid-int", params: ["job_id"] });

// Read data external
errors.set(920000, {id: "message.error-920000" })
errors.set(920010, {id: "message.error-920010" })
errors.set(920020, {id: "message.error-920020" })
errors.set(920030, {id: "message.error-not-supported-file-extension" })
errors.set(920040, {id: "message.error-920040" })
errors.set(920050, {id: "message.error-920050" })
errors.set(920060, {id: "message.error-920060" })

// Department
errors.set(930000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(930010, {id: "message.error-930010" });
errors.set(930020, {id: "message.error-invalid-value", params: ["department id"] });
errors.set(930030, {id: "message.error-invalid-string-max-len", params: ["department_name", 256] });
errors.set(930040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(930050, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(930060, {id: "message.error-invalid-array", params: ["department_organization_user_ids"] });
errors.set(930070, {id: "message.error-invalid-int", params: ["organization_user_id"] });
errors.set(930080, {id: "message.error-invalid-value-for-organization", params: ["organization_user_id"] });
errors.set(930090, {id: "message.error-data-used", params: ["tracking"]});
errors.set(930100, {id: "message.error-930100" });

// Supplier source email
errors.set(940000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(940010, {id: "message.error-organization-session" });
errors.set(940020, {id: "message.error-invalid-int", params: ["supplier_id"] });
errors.set(940030, {id: "message.error-invalid-value-for-organization", params: ["supplier_id"] });
errors.set(940040, {id: "message.error-inactive", params: ["supplier_id"] })
errors.set(940050, {id: "message.error-invalid-string-max-len", params: ["source_email", 256] });
errors.set(940060, {id: "message.error-invalid-int", params: ["id"] });
errors.set(940070, {id: "message.error-invalid-value-for-organization", params: ["supplier_source_email_id"] });
errors.set(940080, {id: "message.error-invalid-int", params: ["approval_cycle_id_default"] });
errors.set(940090, {id: "message.error-invalid-value-for-organization", params: ["approval_cycle_id_default"] });
errors.set(940100, {id: "message.error-invalid-boolean", params: ["is_active"] });

// Account classification
errors.set(950000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(950010, {id: "message.error-organization-session" });
errors.set(950020, {id: "message.error-invalid-value-for-organization", params: ["account_classification_id"] });
errors.set(950030, {id: "message.error-invalid-boolean", params: ["is_active"] });
errors.set(950040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(950050, {id: "message.error-data-used", params: ["supplier_invoice"]});
errors.set(950060, {id: "message.error-invalid-int", params: ["order_by"] });
errors.set(950070, {id: "message.error-data-used", params: ["supplier"]});
errors.set(950080, {id: "message.error-invalid-string-max-len", params: ["account_classification_name", 256] });
errors.set(950090, {id: "message.error-invalid-array", params: ["accounting"] });
errors.set(950100, {id: "message.error-invalid-value-for-organization", params: ["accounting.account"] });
errors.set(950110, {id: "message.error-invalid-float", params: ["accounting.share"] });
errors.set(950120, {id: "message.error-invalid-value", params: ["accounting"] });
errors.set(950130, {id: "message.error-invalid-int", params: ["accounting.account"] });

// Tracking
errors.set(960000, {id: "message.error-invalid-int", params: ["supplier_invoice_id"] });
errors.set(960010, {id: "message.error-invalid-value", params: ["supplier_invoice_id"] });
errors.set(960020, {id: "message.error-960020"});
errors.set(960030, {id: "message.error-960030"});
errors.set(960040, {id: "message.error-invalid-string-max-len", params: ["comment", 512] });
errors.set(960050, {id: "message.error-invalid-int", params: ["track_type_id"] });
errors.set(960060, {id: "message.error-invalid-value", params: ["track_type_id"] });
errors.set(960070, {id: "message.error-invalid-int", params: ["track_status_id"] });
errors.set(960080, {id: "message.error-invalid-value", params: ["track_status_id"] });
errors.set(960090, {id: "message.error-960090" });
errors.set(960100, {id: "message.error-inactive", params: ["track_status_id"]});
errors.set(960110, {id: "message.error-invalid-int", params: ["id"] });
errors.set(960120, {id: "message.error-invalid-value-for-organization", params: ["tracking id"] });
errors.set(960130, {id: "message.error-invalid-int", params: ["department_id"] });
errors.set(960140, {id: "message.error-invalid-value", params: ["department_id"] });
errors.set(960150, {id: "message.error-960150" });
errors.set(960160, {id: "message.error-inactive", params: ["department_id"]});
errors.set(960170, {id: "message.error-invalid-value", params: ["department_id"] });

// Customer type
errors.set(970000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(970010, {id: "message.error-table-organization-session" });
errors.set(970020, {id: "message.error-invalid-string-max-len", params: ["customer_type_name", 64] });
errors.set(970030, {id: "message.error-invalid-int", params: ["customer_type_nr"] });
errors.set(970040, {id: "message.error-duplicated-value2", params: ["customer_type_nr", "table_organization_id"] });
errors.set(970050, {id: "message.error-invalid-int", params: ["id"] });
errors.set(970060, {id: "message.error-invalid-value", params: ["customer_type id"] });
errors.set(970070, {id: "message.error-data-used", params: ["customer"]});
errors.set(970080, {id: "message.error-invalid-string-max-len", params: ["customer_type_icon", 256] });

// Account help tables
errors.set(980000, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(980010, {id: "message.error-organization-session" });
errors.set(980020, {id: "message.error-invalid-int", params: ["account_chart_template_id"] });
errors.set(980030, {id: "message.error-invalid-value", params: ["account_chart_template_id"] });

// User
errors.set(990000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(990010, {id: "message.error-invalid-value", params: ["user id"] });
errors.set(990020, {id: "message.error-invalid-string-max-len", params: ["user_email", 256] });
errors.set(990030, {id: "message.error-invalid-string-max-len", params: ["user_name", 256] });
errors.set(990040, {id: "message.error-invalid-string-max-len", params: ["first_name", 256] });
errors.set(990050, {id: "message.error-invalid-string-max-len", params: ["middle_name", 256] });
errors.set(990060, {id: "message.error-invalid-string-max-len", params: ["last_name", 256] });
errors.set(990070, {id: "message.error-invalid-string-max-len", params: ["initials", 3] });
errors.set(990080, {id: "message.error-duplicated-value", params: ["user_email"] });
errors.set(990090, {id: "message.error-invalid-string-max-len", params: ["phone", 256] });
errors.set(990100, {id: "message.error-invalid-int", params: ["personal_identifier_nr"] });
errors.set(990110, {id: "message.error-duplicated-value", params: ["personal_identifier_nr"] });
errors.set(990120, {id: "message.error-invalid-string-max-len", params: ["profile_picture_url", 256] });
errors.set(990130, {id: "message.error-invalid-int", params: ["ux_country_language_id"] });
errors.set(990140, {id: "message.error-invalid-value", params: ["country_language id"] });
errors.set(990150, {id: "message.error-990150" });
errors.set(990160, {id: "message.error-990160" });
errors.set(990170, {id: "message.error-invalid-string-max-len", params: ["password", 20] });
errors.set(990180, {id: "message.error-990180" });

// Vat type
errors.set(1000000, {id: "message.error-invalid-value", params: ["vat_type_template id"] });

// Account group
errors.set(1010000, {id: "message.error-invalid-value", params: ["account_group_template id"] });

// Quote status
errors.set(1020000, {id: "message.error-invalid-string-max-len", params: ["quote_status_name", 64] });
errors.set(1020010, {id: "message.error-invalid-int", params: ["quote_status_nr"] });
errors.set(1020020, {id: "message.error-duplicated-value2", params: ["quote_status_nr", "table_organization_id"] });
errors.set(1020030, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(1020040, {id: "message.error-table-organization-session" });

// Order status
errors.set(1030000, {id: "message.error-invalid-string-max-len", params: ["order_status_name", 64] });
errors.set(1030010, {id: "message.error-invalid-int", params: ["order_status_nr"] });
errors.set(1030020, {id: "message.error-duplicated-value2", params: ["order_status_nr", "table_organization_id"] });
errors.set(1030030, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(1030040, {id: "message.error-table-organization-session" });

// Report
errors.set(1040000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(1040010, {id: "message.error-table-organization-session" });
errors.set(1040020, {id: "message.error-invalid-value", params: ["date_from"] });
errors.set(1040030, {id: "message.error-invalid-value", params: ["date_to"] });
errors.set(1040040, {id: "message.error-1040040"});
errors.set(1040050, {id: "message.error-invalid-boolean", params: ["show_income"] });
errors.set(1040060, {id: "message.error-invalid-boolean", params: ["income_neg"] });
errors.set(1040070, {id: "message.error-invalid-object", params: ["filter"] });

// Article options article type
errors.set(1050000, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(1050010, {id: "message.error-table-organization-session" });
errors.set(1050020, {id: "message.error-invalid-string-max-len", params: ["article_options_article_type_name", 256] });
errors.set(1050030, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1050040, {id: "message.error-invalid-value", params: ["article_options_article_type id"] });
errors.set(1050050, {id: "message.error-data-used", params: ["article_options_article"]});

// Article includes article
errors.set(1060000, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(1060010, {id: "message.error-invalid-value-for-organization", params: ["article id"] });
errors.set(1060020, {id: "message.error-inactive", params: ["article_id"]});
errors.set(1060030, {id: "message.error-1060030"});
errors.set(1060040, {id: "message.error-invalid-int", params: ["units"] });
errors.set(1060050, {id: "message.error-invalid-int", params: ["price_bp_override"] });
errors.set(1060060, {id: "message.error-invalid-int", params: ["rebate_percent"] });
errors.set(1060070, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1060080, {id: "message.error-invalid-int", params: ["article_id_included"] });
errors.set(1060090, {id: "message.error-invalid-value", params: ["article_includes_article id"] });

// Article options article
errors.set(1070000, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(1070010, {id: "message.error-invalid-value-for-organization", params: ["article id"] });
errors.set(1070020, {id: "message.error-inactive", params: ["article_id"]});
errors.set(1070030, {id: "message.error-1070030"});
errors.set(1070040, {id: "message.error-invalid-int", params: ["units"] });
errors.set(1070050, {id: "message.error-invalid-int", params: ["price_bp_override"] });
errors.set(1070060, {id: "message.error-invalid-int", params: ["rebate_percent"] });
errors.set(1070070, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1070080, {id: "message.error-invalid-int", params: ["article_options_article_type_id"] });
errors.set(1070090, {id: "message.error-invalid-value", params: ["article_options_article_type_id"] });
errors.set(1070100, {id: "message.error-invalid-int", params: ["article_id_option"] });
errors.set(1070110, {id: "message.error-invalid-value", params: ["article_options_article id"] });

// Verification nr
errors.set(1080000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1080010, {id: "message.error-invalid-value-for-organization", params: ["id"] });
errors.set(1080020, {id: "message.error-invalid-int", params: ["organization_id"] });
errors.set(1080030, {id: "message.error-organization-session" });
errors.set(1080040, {id: "message.error-invalid-int", params: ["verification_series_id"] });
errors.set(1080050, {id: "message.error-invalid-value-for-organization", params: ["verification_series_id"] });
errors.set(1080060, {id: "message.error-invalid-int", params: ["accounting_year_id"] });
errors.set(1080070, {id: "message.error-invalid-value-for-organization", params: ["accounting_year_id"] });
errors.set(1080080, {id: "message.error-invalid-int", params: ["next_nr"] });
errors.set(1080090, {id: "message.error-used-value", params: ["next_nr"] });
errors.set(1080100, {id: "message.error-conflicted-value", params: ["next_nr"] });

// Item
errors.set(1090000, { id: "message.error-invalid-int", params: ['table_organization_id'] })
errors.set(1090010, { id: "message.error-table-organization-session" });
errors.set(1090020, { id: "message.error-invalid-int", params: ['article_id'] });
errors.set(1090030, { id: "message.error-invalid-value-for-organization", params: ['article_id'] });
errors.set(1090040, { id: "message.error-inactive", params: ['article_id'] });
errors.set(1090050, { id: "message.error-invalid-int", params: ['price_bp_override'] });
errors.set(1090060, { id: "message.error-invalid-int", params: ['id'] });
errors.set(1090070, { id: "message.error-invalid-value", params: ['item id'] });
errors.set(1090080, { id: "message.error-invalid-int", params: ['entity_type_model_id'] });
errors.set(1090090, { id: "message.error-invalid-value", params: ['entity_type_model id'] });
errors.set(1090100, { id: "message.error-invalid-int", params: ['customer_id'] });
errors.set(1090110, { id: "message.error-invalid-value", params: ['customer id'] });
errors.set(1090120, { id: "message.error-inactive", params: ['customer_id'] });

// Delivery method supplier
errors.set(1120000, {id: "message.error-invalid-int", params: ["delivery_method_id"] });
errors.set(1120010, {id: "message.error-invalid-value", params: ["delivery_method id"] });
errors.set(1120020, {id: "message.error-duplicated-value", params: ["delivery_method_id"] });
errors.set(1120030, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1120040, {id: "message.error-invalid-value-for-organization", params: ["delivery_method_supplier id"] });
errors.set(1120050, {id: "message.error-table-organization-session" });
errors.set(1120060, {id: "message.error-data-used", params: ["supplier"]});

// Delivery term supplier
errors.set(1130000, {id: "message.error-invalid-int", params: ["delivery_term_id"] });
errors.set(1130010, {id: "message.error-invalid-value", params: ["delivery_term id"] });
errors.set(1130020, {id: "message.error-duplicated-value", params: ["delivery_term_id"] });
errors.set(1130030, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1130040, {id: "message.error-invalid-value-for-organization", params: ["delivery_term_supplier id"] });
errors.set(1130050, {id: "message.error-table-organization-session" });
errors.set(1130060, {id: "message.error-data-used", params: ["supplier"]});

// Payment term supplier
errors.set(1140000, {id: "message.error-invalid-int", params: ["payment_term_id"] });
errors.set(1140010, {id: "message.error-invalid-value", params: ["payment_term id"] });
errors.set(1140020, {id: "message.error-duplicated-value", params: ["payment_term_id"] });
errors.set(1140030, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1140040, {id: "message.error-invalid-value-for-organization", params: ["payment_term_supplier id"] });
errors.set(1140050, {id: "message.error-table-organization-session" });
errors.set(1140060, {id: "message.error-data-used", params: ["supplier"]});

// Entity type model
errors.set(1150000, {id: "message.error-invalid-string-max-len", params: ["entity_type_model_name", 256] });
errors.set(1150010, {id: "message.error-invalid-int", params: ["entity_type_model_brand_id"] });
errors.set(1150020, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model_brand id"] });
errors.set(1150030, {id: "message.error-table-organization-session" });
errors.set(1150040, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1150050, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model id"] });
errors.set(1150060, {id: "message.error-data-used", params: ["entity"]});
errors.set(1150070, {id: "message.error-data-used", params: ["item"]});

// Entity type model attribute cross
errors.set(1160010, {id: "message.error-invalid-int", params: ["entity_type_model_id"] });
errors.set(1160020, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model id"] });
errors.set(1160030, {id: "message.error-table-organization-session" });
errors.set(1160040, {id: "message.error-invalid-int", params: ["string_value"] });
errors.set(1160050, {id: "message.error-invalid-int", params: ["integer_value"] });
errors.set(1160060, {id: "message.error-invalid-int", params: ["entity_type_model_attribute_id"] });
errors.set(1160070, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model_attribute id"] });
errors.set(1160080, {id: "message.error-invalid-int", params: ["entity_type_model_attribute_selection_value_id"] });
errors.set(1160090, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model_attribute_selection id"] });
errors.set(1160100, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1160110, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model_attribute_cross id"] });

// Entity
errors.set(1170000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1170010, {id: "message.error-invalid-value-for-organization", params: ["entity id"] });
errors.set(1170020, {id: "message.error-invalid-int", params: ["article_id"] });
errors.set(1170030, {id: "message.error-invalid-value-for-organization", params: ["article id"] });
errors.set(1170040, {id: "message.error-invalid-int", params: ["entity_type_id"] });
errors.set(1170050, {id: "message.error-invalid-value-for-organization", params: ["entity_type id"] });
errors.set(1170060, {id: "message.error-invalid-int", params: ["entity_type_model_id"] });
errors.set(1170070, {id: "message.error-invalid-value-for-organization", params: ["entity_type_model id"] });
errors.set(1170080, {id: "message.error-invalid-int", params: ["customer_id"] });
errors.set(1170090, {id: "message.error-invalid-value-for-organization", params: ["customer id"] });
errors.set(1170100, {id: "message.error-invalid-int", params: ["customer_contact_id"] });
errors.set(1170110, {id: "message.error-table-organization-session" });
errors.set(1170120, {id: "message.error-invalid-int", params: ["parent_entity_id"] });
errors.set(1170130, {id: "message.error-invalid-int", params: ["purchase_cost_bp"] });
errors.set(1170140, {id: "message.error-invalid-int", params: ["equipment_cost_bp"] });
errors.set(1170150, {id: "message.error-invalid-int", params: ["work_cost_bp"] });
errors.set(1170160, {id: "message.error-invalid-int", params: ["sales_price_bp"] });
errors.set(1170170, {id: "message.error-invalid-value", params: ["title"] });
errors.set(1170180, {id: "message.error-invalid-value", params: ["description"] });
errors.set(1170190, {id: "message.error-invalid-value", params: ["comments"] });
errors.set(1170200, {id: "message.error-invalid-date-range", params: ["in_at", "out_at"] });
errors.set(1170210, {id: "message.error-invalid-value", params: ["in_at"] });
errors.set(1170220, {id: "message.error-invalid-value", params: ["out_at"] });
errors.set(1170230, {id: "message.error-invalid-int", params: ["sold_for_bp"] });
errors.set(1170240, {id: "message.error-invalid-object", params: ["title_translated"] });
errors.set(1170250, {id: "message.error-invalid-value", params: ["title_translated"] });
errors.set(1170260, {id: "message.error-invalid-object", params: ["description_translated"] });
errors.set(1170270, {id: "message.error-invalid-value", params: ["description_translated"] });
errors.set(1170280, {id: "message.error-invalid-object", params: ["specification"] });
errors.set(1170290, {id: "message.error-invalid-value", params: ["specification"] });
errors.set(1170300, {id: "message.error-invalid-int", params: ["table_organization_id"] });
errors.set(1170310, {id: "message.error-table-organization-session" });
errors.set(1170320, {id: "message.error-invalid-value-for-organization", params: ["customer_contact id"] });
errors.set(1170330, {id: "message.error-invalid-value", params: ["customer_contact_id"] });
errors.set(1170340, {id: "message.error-data-used", params: ["entity"]});
errors.set(1170350, {id: "message.error-data-used", params: ["entity_attribute_cross"]});
errors.set(1170360, {id: "message.error-invalid-value", params: ["entity_type_model_id"] });

// Entity attribute cross
errors.set(1180000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1180010, {id: "message.error-invalid-value-for-organization", params: ["entity_attribute_cross id"] });
errors.set(1180020, {id: "message.error-table-organization-session" });
errors.set(1180030, {id: "message.error-invalid-int", params: ["entity_type_attribute_id"] });
errors.set(1180040, {id: "message.error-invalid-value-for-organization", params: ["entity_type_attribute id"] });
errors.set(1180050, {id: "message.error-invalid-int", params: ["entity_type_attribute_selection_id"] });
errors.set(1180060, {id: "message.error-invalid-value-for-organization", params: ["entity_type_attribute_selection id"] });
errors.set(1180070, {id: "message.error-invalid-int", params: ["integer_value"] });
errors.set(1180080, {id: "message.error-invalid-string-max-len", params: ["string_value", 256] });
errors.set(1180090, {id: "message.error-invalid-int", params: ["entity_id"] });
errors.set(1180100, {id: "message.error-invalid-value-for-organization", params: ["entity id"] });

// Entity inventory location
errors.set(1190000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1190010, {id: "message.error-invalid-value-for-organization", params: ["entity_inventory_location id"] });
errors.set(1190020, {id: "message.error-table-organization-session" });
errors.set(1190030, {id: "message.error-invalid-int", params: ["entity_type_location_id"] });
errors.set(1190040, {id: "message.error-invalid-value-for-organization", params: ["entity_type_location id"] });
errors.set(1190050, {id: "message.error-invalid-int", params: ["inventory_location_id"] });
errors.set(1190060, {id: "message.error-invalid-value-for-organization", params: ["inventory_location id"] });
errors.set(1190070, {id: "message.error-invalid-int", params: ["entity_id"] });
errors.set(1190080, {id: "message.error-invalid-value-for-organization", params: ["entity id"] });

// Entity quote
errors.set(1200000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1200010, {id: "message.error-invalid-value-for-organization", params: ["entity_quote id"] });
errors.set(1200020, {id: "message.error-table-organization-session" });
errors.set(1200030, {id: "message.error-invalid-int", params: ["entity_id"] });
errors.set(1200040, {id: "message.error-invalid-value-for-organization", params: ["entity id"] });
errors.set(1200050, {id: "message.error-invalid-int", params: ["quote_id"] });
errors.set(1200060, {id: "message.error-invalid-value-for-organization", params: ["quote id"] });
errors.set(1200070, {id: "message.error-invalid-int", params: ["quote_row_id"] });
errors.set(1200080, {id: "message.error-invalid-value", params: ["quote_row_id"] });
errors.set(1200090, {id: "message.error-1200090"});

// Entity invoice
errors.set(1210000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1210010, {id: "message.error-invalid-value-for-organization", params: ["entity_invoice id"] });
errors.set(1210020, {id: "message.error-table-organization-session" });
errors.set(1210030, {id: "message.error-invalid-int", params: ["entity_id"] });
errors.set(1210040, {id: "message.error-invalid-value-for-organization", params: ["entity id"] });
errors.set(1210050, {id: "message.error-invalid-int", params: ["invoice_id"] });
errors.set(1210060, {id: "message.error-invalid-value-for-organization", params: ["invoice id"] });
errors.set(1210070, {id: "message.error-invalid-int", params: ["invoice_row_id"] });
errors.set(1210080, {id: "message.error-invalid-value", params: ["invoice_row_id"] });
errors.set(1210090, {id: "message.error-1210090"});

// Entity order
errors.set(1220000, {id: "message.error-invalid-int", params: ["id"] });
errors.set(1220010, {id: "message.error-invalid-value-for-organization", params: ["entity_order id"] });
errors.set(1220020, {id: "message.error-table-organization-session" });
errors.set(1220030, {id: "message.error-invalid-int", params: ["entity_id"] });
errors.set(1220040, {id: "message.error-invalid-value-for-organization", params: ["entity id"] });
errors.set(1220050, {id: "message.error-1220050" });
errors.set(1220060, {id: "message.error-invalid-int", params: ["order_id"] });
errors.set(1220070, {id: "message.error-invalid-value", params: ["order_id"] });
errors.set(1220080, {id: "message.error-invalid-int", params: ["order_row_id"] });
errors.set(1220090, {id: "message.error-invalid-value", params: ["order_row_id"] });
errors.set(1220100, {id: "message.error-1220100"});

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
