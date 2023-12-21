const data={
    "line-detail": "Line {p0}",
    "message.error": "Error.",
    "message.error-detail": "Error: {p0}.",
    "message.error-database": "Database Error.",
    "message.error-duplicated-value": "Duplicated {field0} {p0}.",
    "message.error-duplicated-value2": "Duplicated {field0} {p0} and {field1} {p1}.",
    "message.error-not-supported-file-extension": "Not supported file extension {p0}.",
    "message.error-invalid-object": "{field0} has to be an object.",
    "message.error-invalid-array": "{field0} has to be an array.",
    "message.error-empty-array": "{field0} has to be non-zero array.",
    "message.error-empty-array-data": "{field0} has to contain non-zero array 'data'.",
    "message.error-invalid-boolean": "{field0} has to be a boolean.",
    "message.error-invalid-date-range": "{field1} should be after or equal {field0}.",
    "message.error-invalid-int": "{field0} has to be an integer.",
    "message.error-invalid-float": "{field0} has to be an numeric.",
    "message.error-invalid-value": "Invalid value of {field0}.",
    "message.error-invalid-value-for-organization": "Invalid {field0} {p0} for the organization.",
    "message.error-invalid-string-max-len": "Invalid {field0} (max len {field1}).",
    "message.error-invalid-string-number": "Invalid number string {field0} (max len {field1}).",
    "message.error-invalid-sum-10000": "The sum of {field0} has to be 10000 (=100%).",
    "message.error-used-value": "{field0} {p0} is used.",
    "message.error-conflicted-value": "{field0} {p0} is conflicted.",
    "message.error-fail-get-value": "Failed to get {field0}: {p0}.",
    "message.error-not-match-parent": "{field0} {p0} does not match {field1}.",
    "message.error-required": "{field0} is required.",
    "message.error-deactivated": "{field0} {p0} is deactivated.",
    "message.error-inactive": "{field0} {p0} is inactive.",
    "message.error-not-found": "{field0} {p0} not found.",
    "message.error-file-not-found": "File not found.",
    "message.error-invalid-sweden-zip-code": "Invalid zip code for Sweden (5 digits).",
    "message.error-data-used": "Data is used in {field0}",
    "message.error-table-organization-session": "TODO:??message.error-table-organization-session",
    "message.error-organization-session": "The organization_id has to match the organization.id currently registered with users session.",
    "message.error-already-record": "There is a record of {field0} already.",
    "message.error-1": "You have no permission.",
    "message.error-100000": "More than 1 target_email record found.",
    "message.error-100010": "No target_email record found.",
    "message.error-100020": "More than 1 supplier_source_email record found.",
    "message.error-100030": "No attachments found.",
    "message.error-110030": "Not supported serie type.",
    "message.error-210040": "The organization is not allowed to use requested dimension {p0} for gl_dimension.dimension_id.",
    "message.error-210050": "A value for gl_dimension_value.dimension_value_id {p0} does not belong to specified dimension.",
    "message.error-220030": "A dimension type can only be present once on each gl row. The dimension that was present more than once has id: {p0}.",
    "message.error-220100": "There is dimension required for gl that has not been passed. This dimension has id: {p0}.",
    "message.error-220110": "There is dimension required for the account that has not been passed. The account has nr and id: {p0} (account_id: {p1}). This dimension has id: {2}.",
    "message.error-220120": "There is dimension passed that is not defined for the organization. This dimension has id: {p0}.",
    "message.error-220130": "There are no dimension values defined for at least on of the dimensions. This dimension has id: {p0}.",
    "message.error-220140": "One of the dimensions uses a non-valid dimension_value. The dimension has id: {p0}. The dimension_value has id: {p1}.",
    "message.error-220150": "There is dimension required for the gl that has not been passed. This dimension has id: {p0}.",
    "message.error-220190": "cannot update gl.{p0} of a locked verification.",    
    "message.error-230090": "The verification has to balance, i.e., sum of gl.local_value_bp has to be zero.",
    "message.error-230100": "Invalid verification date for accounting year.",
    "message.error-230120": "Cannot update {p0} of a locked verification.",
    "message.error-230160": "Invalid file type document.uri {p0}.",
    "message.error-230190": "Not found suitable accounting year for verification date.",
    "message.error-230200": "Failed to save document.uri {p0} to blob storage.",
    "message.error-230210": "System verification series {p0} is not allowed.",
    "message.error-230250": "Not found verification_series for invoice.",
    "message.error-250030": "The verification_template.table_organization_id has to match the organization.id currently registered with users session.",
    "message.error-250060": "Template {p0} is identical. Use this instead of saving a copy. Can not save 2 identical templates.",
    "message.error-250090": "The verification template has to balance, i.e., sum of gl.share_bp has to be zero.",
    "message.error-250110": "System verification series {p0} is not allowed.",
    "message.error-260030": "A dimension type can only be present once on each gl row. The dimension that was present more than once has id: {p0}.",
    "message.error-260060": "There is dimension required for gl that has not been passed. This dimension has id: {p0}.",
    "message.error-260080": "There is dimension required for the account that has not been passed. The account has nr and id: {p0} (account_id: {p1}). This dimension has id: {2}.",
    "message.error-270040": "The organization is not allowed to use requested dimension {p0} for verification_template_gl_dimension.dimension_id.",
    "message.error-270050": "A value for verification_template_gl_dimension_value.dimension_value_id {p0} does not belong to specified dimension.",
    "message.error-290001": "Failed to get entity customer logs: {p0}.",
    "message.error-290002": "Failed to get price agreement customers: {p0}.",
    "message.error-290003": "Failed to get verification detail: {p0}.",
    "message.error-290004": "Failed to get accounts trackings: {p0}.",
    "message.error-290005": "Failed to get account classifications: {p0}.",
    "message.error-290006": "Failed to get approval cycles: {p0}.",
    "message.error-290007": "Failed to get supplier VAT types: {p0}.",
    "message.error-290008": "Failed to get jobs: {p0}.",
    "message.error-290009": "Failed to get job rows: {p0}.",
    "message.error-290010": "The control digit of the registration number is incorrect according to Swedish standards.",
    "message.error-290150": "Invalid Registration number for Sweden (xxxxxx-xxxx).",
    "message.error-290260": "Failed to get Fortnox account detail: {p0}.",
    "message.error-290270": "Failed to get Fortnox voucher detail: {p0}.",
    "message.error-290420": "Failed to get url {p0}.",
    "message.error-290430": "Failed to get code from url: {p0}.",
    "message.error-290440": "Failed to get Fortnox token: {p0}.",
    "message.error-290450": "Failed to get Fortnox company settings: {p0}.",
    "message.error-290460": "Failed to get Fortnox delivery terms: {p0}.",
    "message.error-290470": "Failed to get Fortnox purchase orders: {p0}.",
    "message.error-290480": "Failed to get Fortnox financial years: {p0}.",
    "message.error-290490": "Failed to get entities: {p0}.",
    "message.error-290500": "Failed to get Fortnox units: {p0}.",
    "message.error-290510": "Failed to get verification series: {p0}.",
    "message.error-290520": "Failed to get Fortnox payment terms: {p0}.",
    "message.error-290530": "Failed to get Fortnox currencies: {p0}.",
    "message.error-290540": "Failed to get users: {p0}.",
    "message.error-290550": "Failed to get article accounting groups: {p0}.",
    "message.error-290560": "Failed to get suppliers: {p0}.",
    "message.error-290570": "Failed to get Fortnox price lists: {p0}.",
    "message.error-290580": "Failed to get orders: {p0}.",
    "message.error-290590": "Failed to get invoices: {p0}.",
    "message.error-290600": "Failed to get supplier invoices: {p0}.",
    "message.error-290610": "Failed to get order detail: {p0}.",
    "message.error-290620": "Failed to get Fortnox purchase order detail: {p0}.",
    "message.error-290630": "Failed to get invoice detail: {p0}.",
    "message.error-290640": "Failed to get Fortnox supplier invoice detail: {p0}.",
    "message.error-290650": "Failed to get Fortnox vouchers: {p0}.",
    "message.error-290660": "Failed to get Fortnox prices: {p0}.",
    "message.error-290790": "Failed to get file: {p0}.",
    "message.error-290800": "Failed to save file {p0} to blob storage.",
    "message.error-290810": "Failed to get inventory stocks: {p0}.",    
    "message.error-290860": "Failed to get articles: {p0}.",
    "message.error-290870": "Failed to get customers: {p0}.",
    "message.error-290880": "Failed to get starting balance: {p0}.",
    "message.error-290890": "Failed to get inventories: {p0}.",
    "message.error-290900": "Failed to get verifications: {p0}.",
    "message.error-290940": "Failed to get accounts: {p0}.",
    "message.error-290950": "Failed to get brands: {p0}.",
    "message.error-290960": "Failed to get models: {p0}.",
    "message.error-290970": "Failed to save backup to blob storage.",
    "message.error-300130": "Invalid zip code for Sweden (5 digits).",
    "message.error-320010": "The account_group.table_organization_id has to match table_organization value.",
    "message.error-350050": "Conflicted date range.",
    "message.error-350070": "There are verifications for the accounting year.",
    "message.error-350090": "Accounting year is already unlocked.",
    "message.error-350110": "Accounting year is already locked.",
    "message.error-370030": "There are accounts already for this organization.",
    "message.error-380040": "Org nr does not match.",
    "message.error-380050": "Not found org nr.",
    "message.error-380060": "Invalid accounting year.",
    "message.error-380070": "Accounting year {p0} does not match organization accounting years.",
    "message.error-380080": "There are verifications already.",
    "message.error-380090": "Accounts not found.",
    "message.error-380100": "Account nr {p0} does not exist.",
    "message.error-380120": "Account nr {p0} has different name.",
    "message.error-380130": "Balance not found.",
    "message.error-380140": "Invalid account.",
    "message.error-380160": "Invalid verification syntax.",
    "message.error-380170": "Verifications not found.",
    "message.error-380180": "Invalid verification gl.",
    "message.error-380190": "Please select checkbox of error accounting year.",
    "message.error-380200": "The verification has no gl.",
    "message.error-380210": "Broken series of numbers.",
    "message.error-380220": "Not found verification_series_short in left list.",
    "message.error-380230": "Not found verification_series_short in right list.",
    "message.error-380240": "Duplicated account nr {p0}.",
    "message.error-380250": "Not found account nr {p0}.",
    "message.error-380260": "Not found accounting year.",
    "message.error-380270": "Not found accounting year {p0}.",
    "message.error-380280": "Invalid balance syntax.",
    "message.error-380290": "Duplicated balance account nr {p0}.",
    "message.error-380300": "Please select checkbox of error accounts.",
    "message.error-380320": "Failed to get url {p0}.",
    "message.error-380340": "Not found sie type.",
    "message.error-380350": "Invalid dimension syntax.",
    "message.error-380360": "Dimensions not found.",
    "message.error-430010": "The article_price_list.article.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-430060": "The article_price_list.price_list.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-460360": "Article present in forreign key",
    "message.error-470000": "Dimension {p0} has article_usage=NOT IN USE.",
    "message.error-470110": "Invalid dimension_value_id {p0} for dimension_id {p1}.",
    "message.error-480100": "The article_price_list.article.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-480110": "The article_price_list.price_list.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-490210": "Invalid zip code for Sweden (5 digits).",
    "message.error-500080": "Invalid zip code for Sweden (5 digits).",
    "message.error-510080": "The accounts_receivable.organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-510090": "accounts_tracking_id {p0} is already matched.",
    "message.error-510100": "Payments are bigger than invoice unpaid amount.",
    "message.error-510130": "The order.organization_id has to match the organization.id currently registered with users session.",
    "message.error-510170": "order_row_id {p0} does not match order_id.",
    "message.error-510410": "Invalid file type document.uri {p0}.",
    "message.error-510420": "Failed to save document.uri {p0} to blob storage.",
    "message.error-510460": "Invalid invoice_zip code for Sweden (5 digits).",
    "message.error-510470": "Invalid delivery_zip code for Sweden (5 digits).",
    "message.error-510540": "Not found verification_series for invoice pay.",
    "message.error-520110": "Invalid inventory_location_id {p0} for article_id {p1}.",
    "message.error-520120": "Not enough quantity in inventory_location_id {p0} for article_id {p1}.",
    "message.error-520130": "Not enough quantity in inventory for article_id {p0}.",
    "message.error-520140": "Should not save stock information for article_id {p0}.",
    "message.error-540460": "Invalid zip code for Sweden (5 digits).",
    "message.error-550190": "Invalid zip code for Sweden (5 digits).",
    "message.error-560020": "Unsupported source {p0}.",
    "message.error-570020": "The accounts_tracking.gl.verification.organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-570050": "accounts_trackings do not refer to the same tracking type.",
    "message.error-570060": "accounts_tracking_id {p0} is already matched.",
    "message.error-570080": "accounts_trackings do not refer to the same organization.",
    "message.error-570090": "accounts_trackings do not refer to the same tracking identifier.",
    "message.error-580020": "The accounts_tracking.gl.verification.organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-580030": "accounts_tracking_id {p0} is already matched.",
    "message.error-590100": "The inventory_visible_for_organization_id has to match the organization.id currently registered with users session.",
    "message.error-600010": "The inventory.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-610010": "The inventory_location.inventory.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-620140": "Cannot update an ordered quote.",
    "message.error-620190": "Cannot update an accepted quote.",
    "message.error-620200": "Cannot update a void quote.",
    "message.error-630100": "quote_row_id {p0} does not match quote_id.",
    "message.error-630130": "Cannot update an ordered quote row.",
    "message.error-640130": "The order.organization_id has to match the organization.id currently registered with users session.",
    "message.error-640170": "Cannot update an invoiced order.",
    "message.error-640210": "quote_row_id {p0} does not match quote_id.",
    "message.error-640260": "Cannot update an invoiced order.",
    "message.error-640270": "Cannot update a void order.",
    "message.error-650100": "order_row_id {p0} does not match order_id.",
    "message.error-650130": "Cannot update an invoiced order row.",
    "message.error-660020": "The customer_contact_customer_communication.customer_contact.customer.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-680060": "The article_price_list.article.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-680080": "The article_price_list.price_list.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-680100": "The article_price_list.article.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-680110": "The article_price_list.price_list.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-690010": "The article_price_list_campaign.article_price_list.article.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-690060": "The article_price_list_campaign.article_price_list.price_list.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-710020": "The supplier_contact_supplier_communication.supplier_contact.supplier.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-720090": "Cannot update an received purchase order.",
    "message.error-720100": "The purchase_order.organization_id has to match the organization.id currently registered with users session.",
    "message.error-720150": "Purchase order is already partly or fully completed.",
    "message.error-720160": "Purchase order is not partly completed.",
    "message.error-730020": "purchase_order_row_id {p0} does not match purchase_order_id.",
    "message.error-730070": "Cannot update an received order row.",
    "message.error-740010": "Received/cancelled units exceed ordered one of purchase_order_row_id {p0}.",
    "message.error-740090": "The purchase_order.organization_id has to match the organization.id currently registered with users session.",
    "message.error-750000": "The inventory_location.inventory.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-790100": "User does not connect to an Auth0 account. Please provide a password to create account.",
    "message.error-810020": "The inventory.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-810100": "Cannot update an completed stocktaking.",
    "message.error-810110": "Cannot update articles and locations of an stocktaking.",
    "message.error-820020": "inventory_count_row_id {p0} does not match inventory_count_id.",
    "message.error-820100": "The inventory_location.inventory.table_organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-820140": "Invalid inventory_location_id {p0} for inventory.",
    "message.error-870020": "No file handler found.",
    "message.error-870030": "Not allowed to transfer the supplier invoice: {p0}.",
    "message.error-870070": "Invalid file type for organization.",
    "message.error-870100": "Failed to save file to blob storage.",
    "message.error-870120": "Failed to get file content.",
    "message.error-870130": "Failed to move attachments.",
    "message.error-870150": "Failed to save file.",
    "message.error-870160": "Failed to process file.",
    "message.error-870210": "Supplier invoice is already transferred.",
    "message.error-870220": "Supplier invoice is already approved.",
    "message.error-870230": "The accounting does not balance.",
    "message.error-870240": "You are not an approver.",
    "message.error-870340": "Total must be equal or greater than VAT + Shipping.",
    "message.error-870750": "Not found verification_series for supplier invoice.",
    "message.error-870760": "Not found verification_series for supplier invoice pay.",
    "message.error-880080": "Not found job_id {p0}.",
    "message.error-880090": "There are no transactions recorded for the job. Do you want to delete this job?",
    "message.error-880100": "There are {p0} transactions recorded for this job. Do you still want to delete this job?",
    "message.error-880130": "Not found job_source_id {p0} for job id {p1}.",
    "message.error-880140": "Not found verification_template_id {p0}.",
    "message.error-890020": "Not found job_id {p0}.",
    "message.error-890050": "Not found job source type id {p0}",
    "message.error-890060": "Inactive job source type id {p0}.",
    "message.error-890090": "Not found job source id {p0}.",
    "message.error-890100": "Cannot delete since there are active rules.",
    "message.error-890110": "More than 1 row have the same external_identifier {p0}.",
    "message.error-890140": "Nordigen configuration is required.",
    "message.error-890160": "Not found specification.uri {p0}.",
    "message.error-890180": "There is no columns defined in specification.columns",
    "message.error-890190": "Not found specification filter column.",
    "message.error-890200": "Not found specification.external_identifier.",
    "message.error-890210": "Not found specification.job_row_value.",
    "message.error-890220": "Not found specification.job_row_datetime.",
    "message.error-900010": "Not found job source id {p0}.",
    "message.error-900070": "job_row_datetime cannot earlier than {p0}.",
    "message.error-900090": "At least 2 rows are required.",
    "message.error-900120": "Only proposed match can be converted to committed.",
    "message.error-900140": "job_row_id {p0} already has a match.",
    "message.error-900150": "job_row_id {p0} has ignore_error_check=true.",
    "message.error-900160": "Rows and verification template do not belong to the same organization.",
    "message.error-900170": "Cannot delete a job row with a match.",
    "message.error-900180": "job_row_id {p0} already has a match.",
    "message.error-900190": "job_rows do not belong to the same job. ",
    "message.error-900200": "Selected rows don't match.",
    "message.error-900210": "Only committed match can be converted to proposed.",
    "message.error-900220": "Cannot edit a job row from source which is not manual.",
    "message.error-900230": "There is already row match.",
    "message.error-910000": "Database error while applying job rule id {p0}",
    "message.error-910020": "Not found job_id {p0}.",
    "message.error-910030": "The job.organization_id has to match the organization.id currently registered with users session.",
    "message.error-910060": "Not found job source id {p0}.",
    "message.error-910070": "Job source id {p0} does not belong to job id {p1}.",
    "message.error-910120": "Not found job rule id {p0}.",
    "message.error-910130": "The job.organization_id has to match the organization.id currently registered with users session.",
    "message.error-910140": "Cannot delete since there are row matches.",
    "message.error-920000": "You cannot load job source data earlier than {p0}.",
    "message.error-920010": "Failed to read data from API {p0}: {p1}.",
    "message.error-920020": "Failed to read data from Nordigen: {p0}.",
    "message.error-920040": "Failed to read data from file {p0}: {p1}.",
    "message.error-920050": "Failed to read data from FTP {p0}: {p1}.",
    "message.error-920060": "Failed to delete file(s) from FTP: {p0}.",
    "message.error-930010": "The organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-930100": "The department.organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-960020": "You are not an tracking owner.",
    "message.error-960030": "Tracking is already done.",
    "message.error-960090": "The track_status.organization_id has to match the organization.id currently registered with users session.",
    "message.error-960150": "The department.organization_id has to match the shared organization.id currently registered with users session.",
    "message.error-990150": "Failed to get Auth0 token: {p0}.",
    "message.error-990160": "Failed to get Auth0 user: {p0}.",
    "message.error-990180": "Failed to create Auth0 user: {p0}.",
    "message.error-1040040": "Report not found.",
    "message.error-1060030": "An article cannot refer to itself.",
    "message.error-1070030": "An article cannot refer to itself.",  
    "message.error-1200090": "quote_row_id {p0} does not match quote_id.",
    "message.error-1210090": "invoice_row_id {p0} does not match invoice_id.",
    "message.error-1220050": "The order.organization_id has to match the organization.id currently registered with users session.",
    "message.error-1220100": "order_row_id {p0} does not match order_id.",
    "message.getting-token": "Getting token based on code..",
    "message.getting-company-settings": "Getting company settings..",
    "message.saving-org": "Saving organization data..",
    "message.done-import-fortnox":"Done importing Fortnox data.",
    "message.failed-import-fortnox":"Failed to import Fortnox data.",
    "message.done-import-account-chart-template": "Done importing account chart template.",
    "message.failed-import-account-chart-template": "Failed to import account chart template.",
    "message.you-are-not-log-owner": "You are not log owner.",
    "message.getting-customers": "Getting customers..",
    "message.done-import-customers":"Done importing customers.",
    "message.failed-import-customers":"Failed to import customers.",
    "message.getting-suppliers": "Getting suppliers..",
    "message.done-import-suppliers":"Done importing suppliers.",
    "message.failed-import-suppliers":"Failed to import suppliers.",
    "message.getting-accounts-trackings": "Getting accounts trackings..",
    "message.done-import-accounts-trackings":"Done importing accounts trackings.",
    "message.failed-import-accounts-trackings":"Failed to import accounts trackings.",
    "message.getting-accounts-trackings-supplier": "Getting accounts trackings for supplier..",
    "message.done-import-accounts-trackings-supplier":"Done importing accounts trackings for supplier.",
    "message.failed-import-accounts-trackings-supplier":"Failed to import accounts trackings for supplier.",
    "message.getting-articles": "Getting articles..",
    "message.done-import-articles":"Done importing articles.",
    "message.failed-import-articles":"Failed to import articles.",
    "message.getting-article-accounting-groups": "Getting article accounting groups..",
    "message.done-import-article-accounting-groups":"Done importing article accounting groups.",
    "message.failed-import-article-accounting-groups":"Failed to import article accounting groups.",
    "message.getting-inventories": "Getting inventories..",
    "message.done-import-inventories":"Done importing inventories.",
    "message.failed-import-inventories":"Failed to import inventories.",    
    "message.getting-verifications": "Getting verifications..",    
    "message.done-import-verifications":"Done importing verifications.",
    "message.failed-import-verifications":"Failed to import verifications.",
    "message.getting-verification-series": "Getting verification series..",    
    "message.done-import-verification-series":"Done importing verification series.",
    "message.failed-import-verification-series":"Failed to import verification series.",
    "message.getting-stocks": "Getting inventory stocks..",
    "message.done-import-stocks":"Done importing inventory stocks.",
    "message.failed-import-stocks":"Failed to import inventory stocks.",
    "message.getting-accounts": "Getting accounts..",
    "message.done-import-accounts":"Done importing accounts.",
    "message.failed-import-accounts":"Failed to import accounts.",
    "message.getting-accounting-years": "Getting accounting years..",
    "message.done-import-accounting-years":"Done importing accounting years.",
    "message.failed-import-accounting-years":"Failed to import accounting years.",
    "message.getting-units": "Getting units..",
    "message.done-import-units":"Done importing units.",
    "message.failed-import-units":"Failed to import units.",
    "message.getting-payment-terms": "Getting payment terms..",
    "message.done-import-payment-terms":"Done importing payment terms.",
    "message.failed-import-payment-terms":"Failed to import payment terms.",
    "message.getting-delivery-terms": "Getting delivery terms..",
    "message.done-import-delivery-terms":"Done importing delivery terms.",
    "message.failed-import-delivery-terms":"Failed to import delivery terms.",
    "message.getting-currencies": "Getting currencies..",
    "message.done-import-currencies":"Done importing currencies.",
    "message.failed-import-currencies":"Failed to import currencies.",
    "message.getting-price-lists": "Getting price lists..",
    "message.done-import-price-lists":"Done importing price lists.",
    "message.failed-import-price-lists":"Failed to import price lists.",
    "message.getting-article-price-lists": "Getting article price lists..",
    "message.done-import-article-price-lists":"Done importing article price lists.",
    "message.failed-import-article-price-lists":"Failed to import article price lists.",
    "message.getting-entity-type-model-brands": "Getting entity type model brands..",
    "message.done-import-entity-type-model-brands":"Done importing entity type model brands.",
    "message.failed-import-entity-type-model-brands":"Failed to import entity type model brands.",
    "message.getting-entity-type-models": "Getting entity type models..",
    "message.done-import-entity-type-models":"Done importing entity type models.",
    "message.failed-import-entity-type-models":"Failed to import entity type models.",
    "message.getting-entities": "Getting entities..",
    "message.done-import-entities":"Done importing entities.",
    "message.failed-import-entities":"Failed to import entities.",
    "message.getting-entity-customer-logs": "Getting entiy customer logs..",
    "message.done-import-entity-customer-logs":"Done importing entiy customer logs.",
    "message.failed-import-entity-customer-logs":"Failed to import entiy customer logs.",
    "message.getting-price-agreement-customers": "Getting price agreement customers..",
    "message.done-import-price-agreement-customers":"Done importing price agreement customers.",
    "message.failed-import-price-agreement-customers":"Failed to import price agreement customers.",
    "message.getting-users": "Getting users..",
    "message.done-import-users":"Done importing users.",
    "message.failed-import-users":"Failed to import users.",
    "message.getting-users2": "Getting users..",
    "message.done-import-users2":"Done importing users.",
    "message.failed-import-users2":"Failed to import users.",
    "message.getting-jobs": "Getting jobs..",
    "message.done-import-jobs":"Done importing jobs.",
    "message.failed-import-jobs":"Failed to import jobs.",
    "message.getting-job-rows": "Getting job rows..",
    "message.done-import-job-rows":"Done importing job rows.",
    "message.failed-import-job-rows":"Failed to import job rows.",
    "message.getting-account-classifications": "Getting account classifications..",
    "message.done-import-account-classifications":"Done importing account classifications.",
    "message.failed-import-account-classifications":"Failed to import account classifications.",
    "message.getting-approval-cycles": "Getting approval cycles..",
    "message.done-import-approval-cycles":"Done importing approval cycles.",
    "message.failed-import-approval-cycles":"Failed to import approval cycles.",
    "message.getting-vat-type-suppliers": "Getting supplier VAT types..",
    "message.done-import-vat-type-suppliers":"Done importing supplier VAT types.",
    "message.failed-import-vat-type-suppliers":"Failed to import supplier VAT types.",
    "message.getting-orders": "Getting orders..",
    "message.done-import-orders":"Done importing orders.",
    "message.failed-import-orders":"Failed to import orders.",
    "message.getting-purchase-orders": "Getting purchase orders..",
    "message.done-import-purchase-orders":"Done importing purchase orders.",
    "message.failed-import-purchase-orders":"Failed to import purchase orders.",
    "message.getting-vouchers": "Getting vouchers..",
    "message.done-import-vouchers":"Done importing vouchers.",
    "message.failed-import-vouchers":"Failed to import vouchers.",
    "message.getting-voucher-rows": "Getting voucher rows..",
    "message.done-import-voucher-rows":"Done importing voucher rows.",
    "message.failed-import-voucher-rows":"Failed to import voucher rows.",
    "message.getting-voucher-files": "Getting voucher files..",
    "message.done-import-voucher-files":"Done importing voucher files.",
    "message.failed-import-voucher-files":"Failed to import voucher files.",
    "message.getting-account-balance": "Getting account balance..",
    "message.done-import-account-balance":"Done importing account balance.",
    "message.failed-import-account-balance":"Failed to import account balance.",
    "message.getting-invoices": "Getting invoices..",
    "message.done-import-invoices":"Done importing invoices.",
    "message.failed-import-invoices":"Failed to import invoices.",
    "message.getting-supplier-invoices": "Getting supplier invoices..",
    "message.done-import-supplier-invoices":"Done importing supplier invoices.",
    "message.failed-import-supplier-invoices":"Failed to import supplier invoices.",
    "message.done-import-starting-balance":"Done importing starting balance data.",
    "message.failed-import-starting-balance":"Failed to import starting balance data.",
    "message.done-import-seed":"Done seeding data.",
    "message.failed-import-seed":"Failed to seed data.",
    "message.done-import-invoice-rounding":"Done rounding invoice data.",
    "message.failed-import-invoice-rounding":"Failed to round invoice data.",
    "message.done-import-check-invoice-order":"Done checking invoice order data.",
    "message.failed-import-check-invoice-order":"Failed to check invoice order data.",
    "message.done-backup":"Done backup.",
    "message.failed-backup":"Failed to backup.",
    "message.failed-run-job":"Failed to run the job.",
    "message.getting-organization-data": "Getting organization data..",
    "message.creating-backup-file": "Creating backup file.."
}

export default data;