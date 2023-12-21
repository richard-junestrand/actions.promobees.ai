import { executeGraphql } from "../../db/util";

export enum AccountQueryType {
  Default,
  Detail,
  Active
}

export const getAccountByNrAndTableOrganizationId = async (nr: number, tableOrganizationId: number, type = AccountQueryType.Default) => {
  let fields = '';
  switch (type) {
    case AccountQueryType.Active:
      fields = `
          is_active
          `;
      break;
  }
  return await executeGraphql(`
      query ($table_organization_id: bigint!, $nr: bigint!) {
        data:account(where: {account_nr: {_eq: $nr}, table_organization_id: {_eq: $table_organization_id}}){
          id
          ${fields}
        }
      }`, {
    nr: nr,
    table_organization_id: tableOrganizationId
  });
}

export const getAccountCountByOrganizationId = async (tableOrganizationId: number) => {
  return await executeGraphql(`
      query ($table_organization_id: bigint!) {
        data:account_aggregate(where: {table_organization_id: {_eq: $table_organization_id}}){
          aggregate {
            count
          }
        }
      }`, {
    table_organization_id: tableOrganizationId
  });
}

export const getAccountById = async (id: number, type = AccountQueryType.Default) => {
  let fields = '';
  switch (type) {
    case AccountQueryType.Detail:
      fields = `
          account_nr
          account_name
          account_dimensions {
            dimension_id
            dimension_usage
            account_dimension_defaults {
              dimension_value_id
              share_bp
            }
          }
          `;
      break;
  }
  return await executeGraphql(`
      query ($id: bigint!) {
        data:account_by_pk(id: $id) {
          id
          is_active
          table_organization_id
          ${fields}
        }
      }`, {
    id: id
  });
}

export const getAccountTemplateById = async (id: number) => {
  return await executeGraphql(`
  query ($id: bigint!) {
    data: account_template_by_pk(id: $id) {
      vat_type_template_id
      specification
      is_active
      credit_is_default
      account_type
      account_nr
      account_name_translated
      account_name
      account_group_template_id
    }
  }
  `, {
    id
  })
} 

export const getVatTypeTemplatesForAccountsInAagaByAccountChartTemplateId = async (account_chart_template_id: number) => {
  return await executeGraphql(`
    query ($account_chart_template_id: bigint!) {
      data: vat_type_template(where: {account_templates: {_or: [{article_accounting_group_account_templates_cogs: {article_accounting_group_account_type_template: {account_chart_template_id: {_eq: $account_chart_template_id}}, article_accounting_group_template: {account_chart_template_id: {_eq: $account_chart_template_id}}}}, {article_accounting_group_account_templates_inventory: {article_accounting_group_account_type_template: {account_chart_template_id: {_eq: $account_chart_template_id}}, article_accounting_group_template: {account_chart_template_id: {_eq: $account_chart_template_id}}}}, {article_accounting_group_account_templates_sales: {article_accounting_group_account_type_template: {account_chart_template_id: {_eq: $account_chart_template_id}}, article_accounting_group_template: {account_chart_template_id: {_eq: $account_chart_template_id}}}}]}}) {
        id
      }
    }
  `, {
    account_chart_template_id
  })
} 

export const getAccountGroupTemplatesForAccountsInAagaByAccountChartTemplateId = async (account_chart_template_id: number) => {
  return await executeGraphql(`
    query ($account_chart_template_id: bigint!) {
      data: account_group_template(where: {account_templates: {_or: [{article_accounting_group_account_templates_cogs: {article_accounting_group_account_type_template: {account_chart_template_id: {_eq: $account_chart_template_id}}, article_accounting_group_template: {account_chart_template_id: {_eq: $account_chart_template_id}}}}, {article_accounting_group_account_templates_inventory: {article_accounting_group_account_type_template: {account_chart_template_id: {_eq: $account_chart_template_id}}, article_accounting_group_template: {account_chart_template_id: {_eq: $account_chart_template_id}}}}, {article_accounting_group_account_templates_sales: {article_accounting_group_account_type_template: {account_chart_template_id: {_eq: $account_chart_template_id}}, article_accounting_group_template: {account_chart_template_id: {_eq: $account_chart_template_id}}}}]}}) {
        id
      }
    }
  `, {
    account_chart_template_id
  })
} 