import { executeGraphql } from "./util";

export const getAccountGroupById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:account_group_by_pk(id: $id) {
        table_organization_id
      }
    }`, {
    id: id
  });
}

export const getAccountingRegulationById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:accounting_regulation_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export const getAccountsTrackingTypeById = async (id: number) => {

  return await executeGraphql(`query ($id: bigint!) {
    data:accounts_tracking_type_by_pk(id: $id){
      id
      table_organization_id
      accounts_tracking_type_reference
    }
  }`, {
    id: id
  });
}

export const getApiAccountingTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:api_accounting_type_by_pk(id: $id) {
        id
        api_accounting_type_name
      }
    }`, {
    id: id
  });
}

export const getAttachmentTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:attachment_type_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export const getCountryById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:country_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export const getCustomerCommunicationById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:customer_communication_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export enum CustomerTypeQueryType {
  Default,
  Delete
}

export const getCustomerTypeById = async (id: number, type: CustomerTypeQueryType) => {
  let fields = ''
  switch (type) {
    case CustomerTypeQueryType.Delete:
      fields = `
        customers_aggregate {
          aggregate {
            count
          }
        }
      `
      break;
  }
  
  return await executeGraphql(`
    query ($id: bigint!) {
      data:customer_type_by_pk(id: $id) {
        id
        table_organization_id
        ${fields}
      }
    }`, {
    id: id
  });
}

export const getNotificationTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:notification_type_by_pk(id: $id) {
        id
        is_active
      }
    }`, {
    id: id
  });
}

export const getOrganizationAddressTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:organization_address_type_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export const getOrganizationTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:organization_type_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export enum DeliveryMethodQueryType {
  Default,
  Delete,
  DeliveryMethodSuppliersAggregate
}

export const getDeliveryMethodById = async (id: number, type: DeliveryMethodQueryType = DeliveryMethodQueryType.Default) => {
  let fields = ''
  switch (type) {
    case DeliveryMethodQueryType.Delete:
      fields = `
        customers_aggregate {
          aggregate {
            count
          }
        }
        delivery_method_suppliers_aggregate {
          aggregate {
            count
          }
        }
      `
      break;
    case DeliveryMethodQueryType.DeliveryMethodSuppliersAggregate:
      fields = `
        delivery_method_suppliers_aggregate {
          aggregate {
            count
          }
        }
      `
      break;
  }
  
  return await executeGraphql(`
    query ($id: bigint!) {
      data:delivery_method_by_pk(id: $id) {
        id
        table_organization_id
        ${fields}
      }
    }`, {
    id: id
  });
}

export enum DeliveryTermQueryType {
  Default,
  Delete,
  DeliveryTermSuppliersAggregate
}

export const getDeliveryTermById = async (id: number, type: DeliveryTermQueryType = DeliveryTermQueryType.Default) => {
  let fields = ''
  switch (type) {
    case DeliveryTermQueryType.Delete:
      fields = `
        customers_aggregate {
          aggregate {
            count
          }
        }
        invoices_aggregate {
          aggregate {
            count
          }
        }
        delivery_term_suppliers_aggregate {
          aggregate {
            count
          }
        }
      `
      break;
    case DeliveryTermQueryType.DeliveryTermSuppliersAggregate:
      fields = `
        delivery_term_suppliers_aggregate {
          aggregate {
            count
          }
        }
      `
      break;
  }
  return await executeGraphql(`
    query ($id: bigint!) {
      data:delivery_term_by_pk(id: $id) {
        id
        table_organization_id
        ${fields}
      }
    }`, {
    id: id
  });
}

export enum PaymentTermQueryType {
  Default,
  Delete,
  PaymentTermSuppliersAggregate
}

export const getPaymentTermById = async (id: number, type: PaymentTermQueryType = PaymentTermQueryType.Default) => {
  let fields = ''
  switch (type) {
    case PaymentTermQueryType.Delete:
      fields = `
        payment_term_suppliers_aggregate {
          aggregate {
            count
          }
        }
        invoices_aggregate {
          aggregate {
            count
          }
        }
        customers_aggregate {
          aggregate {
            count
          }
        }
      `
      break;
    case PaymentTermQueryType.PaymentTermSuppliersAggregate:
    fields = `
    payment_term_suppliers_aggregate {
        aggregate {
          count
        }
      }
    `
    break;
  }
  return await executeGraphql(`
    query ($id: bigint!) {
      data:payment_term_by_pk(id: $id) {
        id
        table_organization_id
        ${fields}
      }
    }`, {
    id: id
  });
}

export const getPaymentInformationTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:payment_information_type_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export enum PriceListQueryType {
  Default,
  Delete
}

export const getPriceListById = async (id: number, type: PriceListQueryType = PriceListQueryType.Default) => {
  let fields = ''
  switch (type) {
    case PriceListQueryType.Delete:
      fields = `
        article_price_lists_aggregate {
          aggregate {
            count
          }
        }
        articles_aggregate {
          aggregate {
            count
          }
        }
        customers_aggregate {
          aggregate {
            count
          }
        }
        invoices_aggregate {
          aggregate {
            count
          }
        }
        orders_aggregate {
          aggregate {
            count
          }
        }
        organizations_aggregate {
          aggregate {
            count
          }
        }
        quotes_aggregate {
          aggregate {
            count
          }
        }
      `
      break;
  }
  return await executeGraphql(`
    query ($id: bigint!) {
      data:price_list_by_pk(id: $id) {
        id
        table_organization_id
        ${fields}
      }
    }`, {
    id: id
  });
}

export enum CurrencyQueryType {
  Default,
  ExchangeRate,
  Delete
}
export const getCurrencyById = async (id: number, type: CurrencyQueryType = CurrencyQueryType.Default) => {
  let fields = '';
  switch (type) {
    case CurrencyQueryType.ExchangeRate:
      fields = `
        exchange_rate`;
      break;
    case CurrencyQueryType.Delete:
      fields = `
        customers_aggregate {
          aggregate {
            count
          }
        }
        gls_aggregate {
          aggregate {
            count
          }
        }
        invoices_aggregate {
          aggregate {
            count
          }
        }
        orders_aggregate {
          aggregate {
            count
          }
        }
        organizations_aggregate {
          aggregate {
            count
          }
        }
        price_lists_aggregate {
          aggregate {
            count
          }
        }
        purchase_orders_aggregate {
          aggregate {
            count
          }
        }
        supplier_invoices_aggregate {
          aggregate {
            count
          }
        }
        suppliers_aggregate {
          aggregate {
            count
          }
        }
      `
  }
  return await executeGraphql(`
    query ($id: bigint!) {
      data:currency_by_pk(id: $id) {
        id
        table_organization_id
        ${fields}
      }
    }`, {
    id: id
  });
}

export const getAccountChartTemplateById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:account_chart_template_by_pk(id: $id){
        id
      }
    }`, {
    id: id
  });
}

export const getArticleManufacturerById = async (id: number) => {
  return await executeGraphql(`query ($id: bigint!) {
    data:article_manufacturer_by_pk(id: $id){
      id
      table_organization_id
    }
  }`, {
    id: id
  });
}

export const getInventoryChangeSourceById = async (id: number) => {
  return await executeGraphql(`query ($id: bigint!) {
    data:inventory_change_source_by_pk(id: $id){
      id
      organization_id
    }
  }`, {
    id: id
  });
}

export const getSupplierContactTypeById = async (id: number) => {
  return await executeGraphql(`
    query ($id: bigint!) {
      data:supplier_contact_type_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export const getVatTypeById = async (id: number) => {
  return await executeGraphql(`query ($id: bigint!) {
    data:vat_type_by_pk(id: $id){
      id
      table_organization_id
    }
  }`, {
    id: id
  });
}

export enum VatTypeSupplierQueryType {
  Default,
  SupplierInvoice
}

export const getVatTypeSupplierById = async (id: number, type = VatTypeSupplierQueryType.Default) => {
  let fields = '';
  switch (type) {
    case VatTypeSupplierQueryType.SupplierInvoice:
      fields = `
      vat_rate
      add_to_total
      `;
      break
  }
  return await executeGraphql(`query ($id: bigint!) {
    data:vat_type_supplier_by_pk(id: $id){
      id
      table_organization_id
      ${fields}
    }
  }`, {
    id: id
  });
}

export enum VatTypeListQueryType {
  Default,
  Transaction
}
export const getVatTypeList = async (tableOrgId: number, type: VatTypeListQueryType) => {
  let fields = '';
  switch (type) {
    case VatTypeListQueryType.Transaction:
      fields = `
      vat_rate
      organization_identification
      `;
      break
  }
  return await executeGraphql(`query ($table_organization_id_account: bigint!) {
    data:vat_type(where: {table_organization_id: {_eq: $table_organization_id_account}}) {
      id
      ${fields}
    }
  }`, {
    table_organization_id_account: tableOrgId
  });
}

export const getArticleSupplierById = async (id: number) => {
  return await executeGraphql(`query ($id: bigint!) {
    data:article_supplier_by_pk(id: $id){
      id
      article {
        table_organization_id
      }
    }
  }`, {
    id: id
  });
}

export const getUsersByOrganizationIdAndRoleId = async (organizationId: number, roleId: number) => {
  return await executeGraphql(`query ($organization_id: bigint!, $role_id: bigint!) {
    data:user(where: {organization_users: {organization_id: {_eq: $organization_id}, is_active: {_eq: true}, 
      organization_user_roles: {role_id: {_eq: $role_id}, is_active: {_eq: true}}}}) {
      id
      user_email
      user_name_or_email
    }
  }`, {
    organization_id: organizationId,
    role_id: roleId
  });
}

export enum JobQueryType {
  Default,
  MatchJob,
  DeleteJob,
  UpdateVerificationTemplates
}
export const getJobById = async (id: number, type: JobQueryType = JobQueryType.Default) => {
  let fields = '';
  switch (type) {
    case JobQueryType.MatchJob:
      fields = `
        job_sources(where: {job_source_type_id: {_neq: 300}}){
          id
        }
        `;
      break;
    case JobQueryType.DeleteJob:
      fields = `
        job_rows_aggregate {
          aggregate {
            count
          }
        }
        `;
      break;
    case JobQueryType.UpdateVerificationTemplates:
      fields = `
          job_verification_template_crosses {
            verification_template_id
          }
          `;
      break;
  }
  return await executeGraphql(`
    query ($id: bigint!) {
      data:job_by_pk(id: $id) {
        id
        organization_id
        ${fields}
      }
    }
    `, {
    id
  });
}

export const getUsersByOrganizationIdAndIds = async (organizationId: number, ids: number[]) => {
  return await executeGraphql(`query ($organization_id: bigint!, $ids: [bigint!]!) {
    data:user(where: {id: {_in:$ids},organization_users: {organization_id: {_eq: $organization_id}, is_active: {_eq: true}}}) {
      id
      user_email
      user_name_or_email
    }
  }`, {
    organization_id: organizationId,
    ids
  });
}

export const getUsersByEmails = async (emails: string[]) => {
  return await executeGraphql(`query ($emails: [String!]!) {
    data:user(where: {user_email: {_in:$emails}}) {
      id
      user_email
    }
  }`, {
    emails
  });
}

export enum UserQueryType {
  Default,
  EmailContact
};

export const getUserById = async (id: number, type: UserQueryType = UserQueryType.Default) => {
  let fields = '';
  switch (type) {
    case UserQueryType.EmailContact:
      fields = `
      user_email
      user_name_or_email
      `;
      break;
  }
  return await executeGraphql(`query ($id: bigint!) {
    data:user_by_pk(id: $id){
      id
      ${fields}
    }
  }`, {
    id: id
  });
}

export enum JobSourceQueryType {
  Default,
  UpdateJobSource,
  DeleteJobSource,
  ReadJobSource,
  JobRule,
  JobRow
}

export const getJobSourceById = async (id: number, type = JobSourceQueryType.Default) => {
  let fields = '';
  switch (type) {
    case JobSourceQueryType.UpdateJobSource:
      fields = `
        job {
          organization_id
        } 
        job_source_type {
          extensions
        }
        `;
      break;
    case JobSourceQueryType.DeleteJobSource:
      fields = `
          job {
            organization_id
          } 
          job_rules_aggregate {
            aggregate {
              count
            }
          }
          job_rules2_aggregate {
            aggregate {
              count
            }
          }
          `;
      break;
    case JobSourceQueryType.ReadJobSource:
      fields = `
        job_id
        allow_pre_first_entry
        specification
        job_source_type_id
        dont_delete_existing
        dont_check_for_changes
        job {
          organization {
            created_at
          }
        }
        `;
      break;
    case JobSourceQueryType.JobRule:
      fields = `
          job_id
          `;
      break;
    case JobSourceQueryType.JobRow:
      fields = `
          job_id
          job {
            organization_id
            organization {
              created_at
            }
          } 
          allow_pre_first_entry
          `;
      break;
  }
  return await executeGraphql(`
  query ($id: bigint!) {
    data:job_source_by_pk (id: $id) {
      id
      ${fields}
    }
  }`, {
    id
  });
}

export enum JobRuleQueryType {
  Default,
  DeleteJobRule
}

export const getJobRuleById = async (id: number, type = JobRuleQueryType.Default) => {
  let fields = '';
  switch (type) {
    case JobRuleQueryType.DeleteJobRule:
      fields = `
        job_row_matches_aggregate {
          aggregate {
            count
          }
        }
        `;
      break;
  }
  return await executeGraphql(`
    query ($id:bigint!) {
      data:job_rule_by_pk (id: $id) {
        id
        job_id
        job {
          organization_id
        }
        ${fields}
      }
    }`, {
    id
  });
}

export const getDocumentCommentTypeById = async (id: number) => {

  return await executeGraphql(`
    query ($id: Int!) {
      data:document_comment_type_by_pk(id: $id) {
        id
      }
    }`, {
    id: id
  });
}

export const getAccountingDimensionByOrgAndDimId = async (orgId: number, dimId: string) => {

  return await executeGraphql(`query ($org_id: bigint!, $dim_id: String!) {
    data:accounting_dimension(where:{organization_id:{_eq: $org_id}, organization_dim_identifier:{_eq: $dim_id}}){
      id
      organization_dim_identifier
      is_required
      accounting_dimension_values {
        organization_dim_value
      }
      accounting_dimension_account_nr_default_values {
        account_nr
        is_required
      }
    }
  }`, {
    org_id: orgId,
    dim_id: dimId
  });
}

export const getTargetEmailByEmail = async (email: string) => {
  return await executeGraphql(`query ($email: String!) {
    data:target_email(where: {target_email: {_eq: $email}}) {
      organization_id
    }
  }`, {
    email
  });
}