export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  json: any;
  jsonb: any;
  smallint: any;
  timestamptz: any;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type CampaignDeleteInput = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
};

export type CampaignDeleteOutput = {
  __typename?: 'CampaignDeleteOutput';
  id?: Maybe<Scalars['Int']>;
};

export type CampaignInsertCtcInsertInput = {
  order_by?: Maybe<Scalars['Int']>;
  specification?: Maybe<Scalars['jsonb']>;
  template_id?: Maybe<Scalars['Int']>;
};

export type CampaignInsertCtcsRelInsertInput = {
  data: Array<CampaignInsertCtcInsertInput>;
};

export type CampaignInsertInput = {
  budget?: Maybe<Scalars['jsonb']>;
  campaign_name?: Maybe<Scalars['String']>;
  campaign_template_crosses: CampaignInsertCtcsRelInsertInput;
  campaign_type_id?: Maybe<Scalars['Int']>;
  data?: Maybe<Scalars['jsonb']>;
  is_active?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['jsonb']>;
  specification?: Maybe<Scalars['jsonb']>;
};

export type CampaignInsertOutput = {
  __typename?: 'CampaignInsertOutput';
  id?: Maybe<Scalars['Int']>;
};

export type CampaignPreviewInput = {
  data?: Maybe<Scalars['jsonb']>;
  locale?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

export type CampaignPreviewOutput = {
  __typename?: 'CampaignPreviewOutput';
  data?: Maybe<Scalars['jsonb']>;
};

export type CampaignSourceFetchInput = {
  data?: Maybe<Scalars['jsonb']>;
  locale?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['jsonb']>;
};

export type CampaignSourceFetchOutput = {
  __typename?: 'CampaignSourceFetchOutput';
  data?: Maybe<Scalars['jsonb']>;
};

export type CampaignUpdateCtcUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  specification?: Maybe<Scalars['jsonb']>;
  template_id?: Maybe<Scalars['Int']>;
};

export type CampaignUpdateCtcsRelUpdateInput = {
  data: Array<CampaignUpdateCtcUpdateInput>;
};

export type CampaignUpdateInput = {
  budget?: Maybe<Scalars['jsonb']>;
  campaign_name?: Maybe<Scalars['String']>;
  campaign_template_crosses?: Maybe<CampaignUpdateCtcsRelUpdateInput>;
  campaign_type_id?: Maybe<Scalars['Int']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['jsonb']>;
  specification?: Maybe<Scalars['jsonb']>;
};

export type CampaignUpdateOutput = {
  __typename?: 'CampaignUpdateOutput';
  id?: Maybe<Scalars['Int']>;
};

export type ConnectionDeleteInput = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
};

export type ConnectionDeleteOutput = {
  __typename?: 'ConnectionDeleteOutput';
  id?: Maybe<Scalars['Int']>;
};

export type ConnectionInsertInput = {
  connection_type_id?: Maybe<Scalars['Int']>;
  credentials?: Maybe<Scalars['jsonb']>;
  locale?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

export type ConnectionInsertOutput = {
  __typename?: 'ConnectionInsertOutput';
  id?: Maybe<Scalars['Int']>;
};

export type ConnectionUpdateInput = {
  credentials?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
};

export type ConnectionUpdateOutput = {
  __typename?: 'ConnectionUpdateOutput';
  id?: Maybe<Scalars['Int']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type OrganizationInsertInput = {
  city?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  info_email?: Maybe<Scalars['String']>;
  invoice_email?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  organization_reg_nr?: Maybe<Scalars['String']>;
  payment_type_id?: Maybe<Scalars['Int']>;
  street_address?: Maybe<Scalars['String']>;
  vat_nr?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type OrganizationInsertOutput = {
  __typename?: 'OrganizationInsertOutput';
  id?: Maybe<Scalars['Int']>;
};

export type OrganizationUpdateInput = {
  city?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info_email?: Maybe<Scalars['String']>;
  invoice_email?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  organization_reg_nr?: Maybe<Scalars['String']>;
  payment_type_id?: Maybe<Scalars['Int']>;
  street_address?: Maybe<Scalars['String']>;
  vat_nr?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type OrganizationUpdateOutput = {
  __typename?: 'OrganizationUpdateOutput';
  id?: Maybe<Scalars['Int']>;
};

export type OrganizationUserDeleteInput = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
};

export type OrganizationUserDeleteOutput = {
  __typename?: 'OrganizationUserDeleteOutput';
  id?: Maybe<Scalars['Int']>;
};

export type OrganizationUserInsertInput = {
  locale?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  organization_user_roles?: Maybe<OrganizationUserInsertRolesRelInsertInput>;
  user?: Maybe<OrganizationUserInsertUserRelInsertInput>;
};

export type OrganizationUserInsertOutput = {
  __typename?: 'OrganizationUserInsertOutput';
  id?: Maybe<Scalars['Int']>;
};

export type OrganizationUserInsertRoleInsertInput = {
  role_id?: Maybe<Scalars['Int']>;
};

export type OrganizationUserInsertRolesRelInsertInput = {
  data: Array<OrganizationUserInsertRoleInsertInput>;
};

export type OrganizationUserInsertUserInsertInput = {
  user_email?: Maybe<Scalars['String']>;
};

export type OrganizationUserInsertUserRelInsertInput = {
  data: OrganizationUserInsertUserInsertInput;
};

export type OrganizationUserUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  organization_user_roles?: Maybe<OrganizationUserUpdateRolesRelUpdateInput>;
  user?: Maybe<OrganizationUserUpdateUserRelUpdateInput>;
};

export type OrganizationUserUpdateOutput = {
  __typename?: 'OrganizationUserUpdateOutput';
  id?: Maybe<Scalars['Int']>;
};

export type OrganizationUserUpdateRoleUpdateInput = {
  role_id?: Maybe<Scalars['Int']>;
};

export type OrganizationUserUpdateRolesRelUpdateInput = {
  data: Array<OrganizationUserUpdateRoleUpdateInput>;
};

export type OrganizationUserUpdateUserRelUpdateInput = {
  data: OrganizationUserUpdateUserUpdateInput;
};

export type OrganizationUserUpdateUserUpdateInput = {
  first_name?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type TemplateDeleteInput = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
};

export type TemplateDeleteOutput = {
  __typename?: 'TemplateDeleteOutput';
  id?: Maybe<Scalars['Int']>;
};

export type TemplateInsertInput = {
  locale?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  specification?: Maybe<Scalars['jsonb']>;
  template_name?: Maybe<Scalars['String']>;
  template_type_id?: Maybe<Scalars['Int']>;
};

export type TemplateInsertOutput = {
  __typename?: 'TemplateInsertOutput';
  id?: Maybe<Scalars['Int']>;
};

export type TemplateUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  specification?: Maybe<Scalars['jsonb']>;
  template_name?: Maybe<Scalars['String']>;
  template_type_id?: Maybe<Scalars['Int']>;
};

export type TemplateUpdateOutput = {
  __typename?: 'TemplateUpdateOutput';
  id?: Maybe<Scalars['Int']>;
};

export type UserResetPasswordInput = {
  confirm_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserResetPasswordOutput = {
  __typename?: 'UserResetPasswordOutput';
  id?: Maybe<Scalars['Int']>;
};

export type UserUpdateInput = {
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initials?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type UserUpdateOutput = {
  __typename?: 'UserUpdateOutput';
  id?: Maybe<Scalars['Int']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "campaign" */
export type Campaign = {
  __typename?: 'campaign';
  budget?: Maybe<Scalars['jsonb']>;
  campaign_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  campaign_template_crosses: Array<Campaign_Template_Cross>;
  /** An aggregate relationship */
  campaign_template_crosses_aggregate: Campaign_Template_Cross_Aggregate;
  campaign_type_id: Scalars['Int'];
  changed_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  organization_id: Scalars['Int'];
  source?: Maybe<Scalars['jsonb']>;
  specification?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "campaign" */
export type CampaignBudgetArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignCampaign_Template_CrossesArgs = {
  distinct_on?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Template_Cross_Order_By>>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignCampaign_Template_Crosses_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Template_Cross_Order_By>>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignDataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignSourceArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignSpecificationArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "campaign" */
export type Campaign_Aggregate = {
  __typename?: 'campaign_aggregate';
  aggregate?: Maybe<Campaign_Aggregate_Fields>;
  nodes: Array<Campaign>;
};

/** aggregate fields of "campaign" */
export type Campaign_Aggregate_Fields = {
  __typename?: 'campaign_aggregate_fields';
  avg?: Maybe<Campaign_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Max_Fields>;
  min?: Maybe<Campaign_Min_Fields>;
  stddev?: Maybe<Campaign_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Sum_Fields>;
  var_pop?: Maybe<Campaign_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Variance_Fields>;
};


/** aggregate fields of "campaign" */
export type Campaign_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaign_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Campaign_Append_Input = {
  budget?: Maybe<Scalars['jsonb']>;
  data?: Maybe<Scalars['jsonb']>;
  source?: Maybe<Scalars['jsonb']>;
  specification?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Campaign_Avg_Fields = {
  __typename?: 'campaign_avg_fields';
  campaign_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type Campaign_Bool_Exp = {
  _and?: Maybe<Array<Campaign_Bool_Exp>>;
  _not?: Maybe<Campaign_Bool_Exp>;
  _or?: Maybe<Array<Campaign_Bool_Exp>>;
  budget?: Maybe<Jsonb_Comparison_Exp>;
  campaign_name?: Maybe<String_Comparison_Exp>;
  campaign_template_crosses?: Maybe<Campaign_Template_Cross_Bool_Exp>;
  campaign_type_id?: Maybe<Int_Comparison_Exp>;
  changed_at?: Maybe<Timestamptz_Comparison_Exp>;
  data?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  source?: Maybe<Jsonb_Comparison_Exp>;
  specification?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign" */
export enum Campaign_Constraint {
  /** unique or primary key constraint */
  CampaignPk = 'campaign_pk'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Campaign_Delete_At_Path_Input = {
  budget?: Maybe<Array<Scalars['String']>>;
  data?: Maybe<Array<Scalars['String']>>;
  source?: Maybe<Array<Scalars['String']>>;
  specification?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Campaign_Delete_Elem_Input = {
  budget?: Maybe<Scalars['Int']>;
  data?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  specification?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Campaign_Delete_Key_Input = {
  budget?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  specification?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "campaign" */
export type Campaign_Inc_Input = {
  campaign_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign" */
export type Campaign_Insert_Input = {
  budget?: Maybe<Scalars['jsonb']>;
  campaign_name?: Maybe<Scalars['String']>;
  campaign_template_crosses?: Maybe<Campaign_Template_Cross_Arr_Rel_Insert_Input>;
  campaign_type_id?: Maybe<Scalars['Int']>;
  changed_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  organization_id?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['jsonb']>;
  specification?: Maybe<Scalars['jsonb']>;
};

/** columns and relationships of "campaign_log" */
export type Campaign_Log = {
  __typename?: 'campaign_log';
  campaign_id: Scalars['Int'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  /** 1: update data */
  log_type: Scalars['smallint'];
};

/** aggregated selection of "campaign_log" */
export type Campaign_Log_Aggregate = {
  __typename?: 'campaign_log_aggregate';
  aggregate?: Maybe<Campaign_Log_Aggregate_Fields>;
  nodes: Array<Campaign_Log>;
};

/** aggregate fields of "campaign_log" */
export type Campaign_Log_Aggregate_Fields = {
  __typename?: 'campaign_log_aggregate_fields';
  avg?: Maybe<Campaign_Log_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Log_Max_Fields>;
  min?: Maybe<Campaign_Log_Min_Fields>;
  stddev?: Maybe<Campaign_Log_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Log_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Log_Sum_Fields>;
  var_pop?: Maybe<Campaign_Log_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Log_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Log_Variance_Fields>;
};


/** aggregate fields of "campaign_log" */
export type Campaign_Log_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaign_Log_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Campaign_Log_Avg_Fields = {
  __typename?: 'campaign_log_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "campaign_log". All fields are combined with a logical 'AND'. */
export type Campaign_Log_Bool_Exp = {
  _and?: Maybe<Array<Campaign_Log_Bool_Exp>>;
  _not?: Maybe<Campaign_Log_Bool_Exp>;
  _or?: Maybe<Array<Campaign_Log_Bool_Exp>>;
  campaign_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  log_type?: Maybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_log" */
export enum Campaign_Log_Constraint {
  /** unique or primary key constraint */
  PkCampaignLog = 'pk_campaign_log'
}

/** input type for incrementing numeric columns in table "campaign_log" */
export type Campaign_Log_Inc_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "campaign_log" */
export type Campaign_Log_Insert_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type Campaign_Log_Max_Fields = {
  __typename?: 'campaign_log_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['smallint']>;
};

/** aggregate min on columns */
export type Campaign_Log_Min_Fields = {
  __typename?: 'campaign_log_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['smallint']>;
};

/** response of any mutation on the table "campaign_log" */
export type Campaign_Log_Mutation_Response = {
  __typename?: 'campaign_log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign_Log>;
};

/** on_conflict condition type for table "campaign_log" */
export type Campaign_Log_On_Conflict = {
  constraint: Campaign_Log_Constraint;
  update_columns?: Array<Campaign_Log_Update_Column>;
  where?: Maybe<Campaign_Log_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign_log". */
export type Campaign_Log_Order_By = {
  campaign_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  log_type?: Maybe<Order_By>;
};

/** primary key columns input for table: campaign_log */
export type Campaign_Log_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "campaign_log" */
export enum Campaign_Log_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LogType = 'log_type'
}

/** input type for updating data in table "campaign_log" */
export type Campaign_Log_Set_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Campaign_Log_Stddev_Fields = {
  __typename?: 'campaign_log_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Log_Stddev_Pop_Fields = {
  __typename?: 'campaign_log_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Log_Stddev_Samp_Fields = {
  __typename?: 'campaign_log_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Campaign_Log_Sum_Fields = {
  __typename?: 'campaign_log_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['smallint']>;
};

/** update columns of table "campaign_log" */
export enum Campaign_Log_Update_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LogType = 'log_type'
}

/** aggregate var_pop on columns */
export type Campaign_Log_Var_Pop_Fields = {
  __typename?: 'campaign_log_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Campaign_Log_Var_Samp_Fields = {
  __typename?: 'campaign_log_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Campaign_Log_Variance_Fields = {
  __typename?: 'campaign_log_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** 1: update data */
  log_type?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Campaign_Max_Fields = {
  __typename?: 'campaign_max_fields';
  campaign_name?: Maybe<Scalars['String']>;
  campaign_type_id?: Maybe<Scalars['Int']>;
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Campaign_Min_Fields = {
  __typename?: 'campaign_min_fields';
  campaign_name?: Maybe<Scalars['String']>;
  campaign_type_id?: Maybe<Scalars['Int']>;
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "campaign" */
export type Campaign_Mutation_Response = {
  __typename?: 'campaign_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign>;
};

/** input type for inserting object relation for remote table "campaign" */
export type Campaign_Obj_Rel_Insert_Input = {
  data: Campaign_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Campaign_On_Conflict>;
};

/** on_conflict condition type for table "campaign" */
export type Campaign_On_Conflict = {
  constraint: Campaign_Constraint;
  update_columns?: Array<Campaign_Update_Column>;
  where?: Maybe<Campaign_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign". */
export type Campaign_Order_By = {
  budget?: Maybe<Order_By>;
  campaign_name?: Maybe<Order_By>;
  campaign_template_crosses_aggregate?: Maybe<Campaign_Template_Cross_Aggregate_Order_By>;
  campaign_type_id?: Maybe<Order_By>;
  changed_at?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  source?: Maybe<Order_By>;
  specification?: Maybe<Order_By>;
};

/** primary key columns input for table: campaign */
export type Campaign_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Campaign_Prepend_Input = {
  budget?: Maybe<Scalars['jsonb']>;
  data?: Maybe<Scalars['jsonb']>;
  source?: Maybe<Scalars['jsonb']>;
  specification?: Maybe<Scalars['jsonb']>;
};

export type Campaign_Search_Args = {
  _filter?: Maybe<Scalars['json']>;
};

/** select columns of table "campaign" */
export enum Campaign_Select_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  CampaignName = 'campaign_name',
  /** column name */
  CampaignTypeId = 'campaign_type_id',
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Source = 'source',
  /** column name */
  Specification = 'specification'
}

/** input type for updating data in table "campaign" */
export type Campaign_Set_Input = {
  budget?: Maybe<Scalars['jsonb']>;
  campaign_name?: Maybe<Scalars['String']>;
  campaign_type_id?: Maybe<Scalars['Int']>;
  changed_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  organization_id?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['jsonb']>;
  specification?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Campaign_Stddev_Fields = {
  __typename?: 'campaign_stddev_fields';
  campaign_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Stddev_Pop_Fields = {
  __typename?: 'campaign_stddev_pop_fields';
  campaign_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Stddev_Samp_Fields = {
  __typename?: 'campaign_stddev_samp_fields';
  campaign_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Campaign_Sum_Fields = {
  __typename?: 'campaign_sum_fields';
  campaign_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "campaign_template_cross" */
export type Campaign_Template_Cross = {
  __typename?: 'campaign_template_cross';
  /** An object relationship */
  campaign: Campaign;
  campaign_id: Scalars['Int'];
  id: Scalars['Int'];
  order_by: Scalars['Int'];
  specification?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  template: Template;
  template_id: Scalars['Int'];
};


/** columns and relationships of "campaign_template_cross" */
export type Campaign_Template_CrossSpecificationArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "campaign_template_cross" */
export type Campaign_Template_Cross_Aggregate = {
  __typename?: 'campaign_template_cross_aggregate';
  aggregate?: Maybe<Campaign_Template_Cross_Aggregate_Fields>;
  nodes: Array<Campaign_Template_Cross>;
};

/** aggregate fields of "campaign_template_cross" */
export type Campaign_Template_Cross_Aggregate_Fields = {
  __typename?: 'campaign_template_cross_aggregate_fields';
  avg?: Maybe<Campaign_Template_Cross_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Template_Cross_Max_Fields>;
  min?: Maybe<Campaign_Template_Cross_Min_Fields>;
  stddev?: Maybe<Campaign_Template_Cross_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Template_Cross_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Template_Cross_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Template_Cross_Sum_Fields>;
  var_pop?: Maybe<Campaign_Template_Cross_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Template_Cross_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Template_Cross_Variance_Fields>;
};


/** aggregate fields of "campaign_template_cross" */
export type Campaign_Template_Cross_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaign_template_cross" */
export type Campaign_Template_Cross_Aggregate_Order_By = {
  avg?: Maybe<Campaign_Template_Cross_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Campaign_Template_Cross_Max_Order_By>;
  min?: Maybe<Campaign_Template_Cross_Min_Order_By>;
  stddev?: Maybe<Campaign_Template_Cross_Stddev_Order_By>;
  stddev_pop?: Maybe<Campaign_Template_Cross_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Campaign_Template_Cross_Stddev_Samp_Order_By>;
  sum?: Maybe<Campaign_Template_Cross_Sum_Order_By>;
  var_pop?: Maybe<Campaign_Template_Cross_Var_Pop_Order_By>;
  var_samp?: Maybe<Campaign_Template_Cross_Var_Samp_Order_By>;
  variance?: Maybe<Campaign_Template_Cross_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Campaign_Template_Cross_Append_Input = {
  specification?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "campaign_template_cross" */
export type Campaign_Template_Cross_Arr_Rel_Insert_Input = {
  data: Array<Campaign_Template_Cross_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Campaign_Template_Cross_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaign_Template_Cross_Avg_Fields = {
  __typename?: 'campaign_template_cross_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
  template_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Avg_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign_template_cross". All fields are combined with a logical 'AND'. */
export type Campaign_Template_Cross_Bool_Exp = {
  _and?: Maybe<Array<Campaign_Template_Cross_Bool_Exp>>;
  _not?: Maybe<Campaign_Template_Cross_Bool_Exp>;
  _or?: Maybe<Array<Campaign_Template_Cross_Bool_Exp>>;
  campaign?: Maybe<Campaign_Bool_Exp>;
  campaign_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  order_by?: Maybe<Int_Comparison_Exp>;
  specification?: Maybe<Jsonb_Comparison_Exp>;
  template?: Maybe<Template_Bool_Exp>;
  template_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_template_cross" */
export enum Campaign_Template_Cross_Constraint {
  /** unique or primary key constraint */
  CampaignTemplateCrossPk = 'campaign_template_cross_pk'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Campaign_Template_Cross_Delete_At_Path_Input = {
  specification?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Campaign_Template_Cross_Delete_Elem_Input = {
  specification?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Campaign_Template_Cross_Delete_Key_Input = {
  specification?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "campaign_template_cross" */
export type Campaign_Template_Cross_Inc_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  template_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign_template_cross" */
export type Campaign_Template_Cross_Insert_Input = {
  campaign?: Maybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  specification?: Maybe<Scalars['jsonb']>;
  template?: Maybe<Template_Obj_Rel_Insert_Input>;
  template_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Campaign_Template_Cross_Max_Fields = {
  __typename?: 'campaign_template_cross_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  template_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Max_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Campaign_Template_Cross_Min_Fields = {
  __typename?: 'campaign_template_cross_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  template_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Min_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "campaign_template_cross" */
export type Campaign_Template_Cross_Mutation_Response = {
  __typename?: 'campaign_template_cross_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign_Template_Cross>;
};

/** on_conflict condition type for table "campaign_template_cross" */
export type Campaign_Template_Cross_On_Conflict = {
  constraint: Campaign_Template_Cross_Constraint;
  update_columns?: Array<Campaign_Template_Cross_Update_Column>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign_template_cross". */
export type Campaign_Template_Cross_Order_By = {
  campaign?: Maybe<Campaign_Order_By>;
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  specification?: Maybe<Order_By>;
  template?: Maybe<Template_Order_By>;
  template_id?: Maybe<Order_By>;
};

/** primary key columns input for table: campaign_template_cross */
export type Campaign_Template_Cross_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Campaign_Template_Cross_Prepend_Input = {
  specification?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "campaign_template_cross" */
export enum Campaign_Template_Cross_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderBy = 'order_by',
  /** column name */
  Specification = 'specification',
  /** column name */
  TemplateId = 'template_id'
}

/** input type for updating data in table "campaign_template_cross" */
export type Campaign_Template_Cross_Set_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  specification?: Maybe<Scalars['jsonb']>;
  template_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Campaign_Template_Cross_Stddev_Fields = {
  __typename?: 'campaign_template_cross_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
  template_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Stddev_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Template_Cross_Stddev_Pop_Fields = {
  __typename?: 'campaign_template_cross_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
  template_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Stddev_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Template_Cross_Stddev_Samp_Fields = {
  __typename?: 'campaign_template_cross_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
  template_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Stddev_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Campaign_Template_Cross_Sum_Fields = {
  __typename?: 'campaign_template_cross_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  template_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Sum_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** update columns of table "campaign_template_cross" */
export enum Campaign_Template_Cross_Update_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderBy = 'order_by',
  /** column name */
  Specification = 'specification',
  /** column name */
  TemplateId = 'template_id'
}

/** aggregate var_pop on columns */
export type Campaign_Template_Cross_Var_Pop_Fields = {
  __typename?: 'campaign_template_cross_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
  template_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Var_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Template_Cross_Var_Samp_Fields = {
  __typename?: 'campaign_template_cross_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
  template_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Var_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Template_Cross_Variance_Fields = {
  __typename?: 'campaign_template_cross_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
  template_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaign_template_cross" */
export type Campaign_Template_Cross_Variance_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** columns and relationships of "campaign_type" */
export type Campaign_Type = {
  __typename?: 'campaign_type';
  campaign_type_description?: Maybe<Scalars['String']>;
  campaign_type_description_translated?: Maybe<Scalars['String']>;
  campaign_type_name?: Maybe<Scalars['String']>;
  campaign_type_name_translated?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** aggregated selection of "campaign_type" */
export type Campaign_Type_Aggregate = {
  __typename?: 'campaign_type_aggregate';
  aggregate?: Maybe<Campaign_Type_Aggregate_Fields>;
  nodes: Array<Campaign_Type>;
};

/** aggregate fields of "campaign_type" */
export type Campaign_Type_Aggregate_Fields = {
  __typename?: 'campaign_type_aggregate_fields';
  avg?: Maybe<Campaign_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Type_Max_Fields>;
  min?: Maybe<Campaign_Type_Min_Fields>;
  stddev?: Maybe<Campaign_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Type_Sum_Fields>;
  var_pop?: Maybe<Campaign_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Type_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Type_Variance_Fields>;
};


/** aggregate fields of "campaign_type" */
export type Campaign_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaign_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Campaign_Type_Avg_Fields = {
  __typename?: 'campaign_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "campaign_type". All fields are combined with a logical 'AND'. */
export type Campaign_Type_Bool_Exp = {
  _and?: Maybe<Array<Campaign_Type_Bool_Exp>>;
  _not?: Maybe<Campaign_Type_Bool_Exp>;
  _or?: Maybe<Array<Campaign_Type_Bool_Exp>>;
  campaign_type_description?: Maybe<String_Comparison_Exp>;
  campaign_type_description_translated?: Maybe<String_Comparison_Exp>;
  campaign_type_name?: Maybe<String_Comparison_Exp>;
  campaign_type_name_translated?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_type" */
export enum Campaign_Type_Constraint {
  /** unique or primary key constraint */
  CampaignTypePk = 'campaign_type_pk'
}

/** input type for incrementing numeric columns in table "campaign_type" */
export type Campaign_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign_type" */
export type Campaign_Type_Insert_Input = {
  campaign_type_description?: Maybe<Scalars['String']>;
  campaign_type_description_translated?: Maybe<Scalars['String']>;
  campaign_type_name?: Maybe<Scalars['String']>;
  campaign_type_name_translated?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Campaign_Type_Max_Fields = {
  __typename?: 'campaign_type_max_fields';
  campaign_type_description?: Maybe<Scalars['String']>;
  campaign_type_description_translated?: Maybe<Scalars['String']>;
  campaign_type_name?: Maybe<Scalars['String']>;
  campaign_type_name_translated?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Campaign_Type_Min_Fields = {
  __typename?: 'campaign_type_min_fields';
  campaign_type_description?: Maybe<Scalars['String']>;
  campaign_type_description_translated?: Maybe<Scalars['String']>;
  campaign_type_name?: Maybe<Scalars['String']>;
  campaign_type_name_translated?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "campaign_type" */
export type Campaign_Type_Mutation_Response = {
  __typename?: 'campaign_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign_Type>;
};

/** on_conflict condition type for table "campaign_type" */
export type Campaign_Type_On_Conflict = {
  constraint: Campaign_Type_Constraint;
  update_columns?: Array<Campaign_Type_Update_Column>;
  where?: Maybe<Campaign_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign_type". */
export type Campaign_Type_Order_By = {
  campaign_type_description?: Maybe<Order_By>;
  campaign_type_description_translated?: Maybe<Order_By>;
  campaign_type_name?: Maybe<Order_By>;
  campaign_type_name_translated?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: campaign_type */
export type Campaign_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "campaign_type" */
export enum Campaign_Type_Select_Column {
  /** column name */
  CampaignTypeDescription = 'campaign_type_description',
  /** column name */
  CampaignTypeDescriptionTranslated = 'campaign_type_description_translated',
  /** column name */
  CampaignTypeName = 'campaign_type_name',
  /** column name */
  CampaignTypeNameTranslated = 'campaign_type_name_translated',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "campaign_type" */
export type Campaign_Type_Set_Input = {
  campaign_type_description?: Maybe<Scalars['String']>;
  campaign_type_description_translated?: Maybe<Scalars['String']>;
  campaign_type_name?: Maybe<Scalars['String']>;
  campaign_type_name_translated?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Campaign_Type_Stddev_Fields = {
  __typename?: 'campaign_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Type_Stddev_Pop_Fields = {
  __typename?: 'campaign_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Type_Stddev_Samp_Fields = {
  __typename?: 'campaign_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Campaign_Type_Sum_Fields = {
  __typename?: 'campaign_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "campaign_type" */
export enum Campaign_Type_Update_Column {
  /** column name */
  CampaignTypeDescription = 'campaign_type_description',
  /** column name */
  CampaignTypeDescriptionTranslated = 'campaign_type_description_translated',
  /** column name */
  CampaignTypeName = 'campaign_type_name',
  /** column name */
  CampaignTypeNameTranslated = 'campaign_type_name_translated',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Campaign_Type_Var_Pop_Fields = {
  __typename?: 'campaign_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Campaign_Type_Var_Samp_Fields = {
  __typename?: 'campaign_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Campaign_Type_Variance_Fields = {
  __typename?: 'campaign_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** update columns of table "campaign" */
export enum Campaign_Update_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  CampaignName = 'campaign_name',
  /** column name */
  CampaignTypeId = 'campaign_type_id',
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Source = 'source',
  /** column name */
  Specification = 'specification'
}

/** aggregate var_pop on columns */
export type Campaign_Var_Pop_Fields = {
  __typename?: 'campaign_var_pop_fields';
  campaign_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Campaign_Var_Samp_Fields = {
  __typename?: 'campaign_var_samp_fields';
  campaign_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Campaign_Variance_Fields = {
  __typename?: 'campaign_variance_fields';
  campaign_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "connection" */
export type Connection = {
  __typename?: 'connection';
  changed_at?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "connection_info" */
  connection_info?: Maybe<Scalars['jsonb']>;
  /** A computed field, executes function "connection_pages" */
  connection_pages?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  connection_type: Connection_Type;
  connection_type_id: Scalars['Int'];
  credentials?: Maybe<Scalars['jsonb']>;
  id: Scalars['Int'];
  organization_id: Scalars['Int'];
};


/** columns and relationships of "connection" */
export type ConnectionConnection_InfoArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "connection" */
export type ConnectionConnection_PagesArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "connection" */
export type ConnectionCredentialsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "connection" */
export type Connection_Aggregate = {
  __typename?: 'connection_aggregate';
  aggregate?: Maybe<Connection_Aggregate_Fields>;
  nodes: Array<Connection>;
};

/** aggregate fields of "connection" */
export type Connection_Aggregate_Fields = {
  __typename?: 'connection_aggregate_fields';
  avg?: Maybe<Connection_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Connection_Max_Fields>;
  min?: Maybe<Connection_Min_Fields>;
  stddev?: Maybe<Connection_Stddev_Fields>;
  stddev_pop?: Maybe<Connection_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Connection_Stddev_Samp_Fields>;
  sum?: Maybe<Connection_Sum_Fields>;
  var_pop?: Maybe<Connection_Var_Pop_Fields>;
  var_samp?: Maybe<Connection_Var_Samp_Fields>;
  variance?: Maybe<Connection_Variance_Fields>;
};


/** aggregate fields of "connection" */
export type Connection_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Connection_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Connection_Append_Input = {
  credentials?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Connection_Avg_Fields = {
  __typename?: 'connection_avg_fields';
  connection_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "connection". All fields are combined with a logical 'AND'. */
export type Connection_Bool_Exp = {
  _and?: Maybe<Array<Connection_Bool_Exp>>;
  _not?: Maybe<Connection_Bool_Exp>;
  _or?: Maybe<Array<Connection_Bool_Exp>>;
  changed_at?: Maybe<Timestamptz_Comparison_Exp>;
  connection_info?: Maybe<Jsonb_Comparison_Exp>;
  connection_pages?: Maybe<Jsonb_Comparison_Exp>;
  connection_type?: Maybe<Connection_Type_Bool_Exp>;
  connection_type_id?: Maybe<Int_Comparison_Exp>;
  credentials?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "connection" */
export enum Connection_Constraint {
  /** unique or primary key constraint */
  ConnectionPk = 'connection_pk',
  /** unique or primary key constraint */
  IxConnectionOrganizationConnectionType = 'ix_connection_organization_connection_type'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Connection_Delete_At_Path_Input = {
  credentials?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Connection_Delete_Elem_Input = {
  credentials?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Connection_Delete_Key_Input = {
  credentials?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "connection" */
export type Connection_Inc_Input = {
  connection_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "connection" */
export type Connection_Insert_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  connection_type?: Maybe<Connection_Type_Obj_Rel_Insert_Input>;
  connection_type_id?: Maybe<Scalars['Int']>;
  credentials?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Connection_Max_Fields = {
  __typename?: 'connection_max_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  connection_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Connection_Min_Fields = {
  __typename?: 'connection_min_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  connection_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "connection" */
export type Connection_Mutation_Response = {
  __typename?: 'connection_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Connection>;
};

/** on_conflict condition type for table "connection" */
export type Connection_On_Conflict = {
  constraint: Connection_Constraint;
  update_columns?: Array<Connection_Update_Column>;
  where?: Maybe<Connection_Bool_Exp>;
};

/** Ordering options when selecting data from "connection". */
export type Connection_Order_By = {
  changed_at?: Maybe<Order_By>;
  connection_info?: Maybe<Order_By>;
  connection_pages?: Maybe<Order_By>;
  connection_type?: Maybe<Connection_Type_Order_By>;
  connection_type_id?: Maybe<Order_By>;
  credentials?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** primary key columns input for table: connection */
export type Connection_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Connection_Prepend_Input = {
  credentials?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "connection" */
export enum Connection_Select_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  ConnectionTypeId = 'connection_type_id',
  /** column name */
  Credentials = 'credentials',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id'
}

/** input type for updating data in table "connection" */
export type Connection_Set_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  connection_type_id?: Maybe<Scalars['Int']>;
  credentials?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Connection_Stddev_Fields = {
  __typename?: 'connection_stddev_fields';
  connection_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Connection_Stddev_Pop_Fields = {
  __typename?: 'connection_stddev_pop_fields';
  connection_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Connection_Stddev_Samp_Fields = {
  __typename?: 'connection_stddev_samp_fields';
  connection_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Connection_Sum_Fields = {
  __typename?: 'connection_sum_fields';
  connection_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "connection_type" */
export type Connection_Type = {
  __typename?: 'connection_type';
  connection_type_caption?: Maybe<Scalars['String']>;
  connection_type_description?: Maybe<Scalars['String']>;
  connection_type_description_translated?: Maybe<Scalars['jsonb']>;
  connection_type_name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  order_by: Scalars['Int'];
};


/** columns and relationships of "connection_type" */
export type Connection_TypeConnection_Type_Description_TranslatedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "connection_type" */
export type Connection_Type_Aggregate = {
  __typename?: 'connection_type_aggregate';
  aggregate?: Maybe<Connection_Type_Aggregate_Fields>;
  nodes: Array<Connection_Type>;
};

/** aggregate fields of "connection_type" */
export type Connection_Type_Aggregate_Fields = {
  __typename?: 'connection_type_aggregate_fields';
  avg?: Maybe<Connection_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Connection_Type_Max_Fields>;
  min?: Maybe<Connection_Type_Min_Fields>;
  stddev?: Maybe<Connection_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Connection_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Connection_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Connection_Type_Sum_Fields>;
  var_pop?: Maybe<Connection_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Connection_Type_Var_Samp_Fields>;
  variance?: Maybe<Connection_Type_Variance_Fields>;
};


/** aggregate fields of "connection_type" */
export type Connection_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Connection_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Connection_Type_Append_Input = {
  connection_type_description_translated?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Connection_Type_Avg_Fields = {
  __typename?: 'connection_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "connection_type". All fields are combined with a logical 'AND'. */
export type Connection_Type_Bool_Exp = {
  _and?: Maybe<Array<Connection_Type_Bool_Exp>>;
  _not?: Maybe<Connection_Type_Bool_Exp>;
  _or?: Maybe<Array<Connection_Type_Bool_Exp>>;
  connection_type_caption?: Maybe<String_Comparison_Exp>;
  connection_type_description?: Maybe<String_Comparison_Exp>;
  connection_type_description_translated?: Maybe<Jsonb_Comparison_Exp>;
  connection_type_name?: Maybe<String_Comparison_Exp>;
  icon?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  order_by?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "connection_type" */
export enum Connection_Type_Constraint {
  /** unique or primary key constraint */
  ConnectionTypePk = 'connection_type_pk'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Connection_Type_Delete_At_Path_Input = {
  connection_type_description_translated?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Connection_Type_Delete_Elem_Input = {
  connection_type_description_translated?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Connection_Type_Delete_Key_Input = {
  connection_type_description_translated?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "connection_type" */
export type Connection_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "connection_type" */
export type Connection_Type_Insert_Input = {
  connection_type_caption?: Maybe<Scalars['String']>;
  connection_type_description?: Maybe<Scalars['String']>;
  connection_type_description_translated?: Maybe<Scalars['jsonb']>;
  connection_type_name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Connection_Type_Max_Fields = {
  __typename?: 'connection_type_max_fields';
  connection_type_caption?: Maybe<Scalars['String']>;
  connection_type_description?: Maybe<Scalars['String']>;
  connection_type_name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Connection_Type_Min_Fields = {
  __typename?: 'connection_type_min_fields';
  connection_type_caption?: Maybe<Scalars['String']>;
  connection_type_description?: Maybe<Scalars['String']>;
  connection_type_name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "connection_type" */
export type Connection_Type_Mutation_Response = {
  __typename?: 'connection_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Connection_Type>;
};

/** input type for inserting object relation for remote table "connection_type" */
export type Connection_Type_Obj_Rel_Insert_Input = {
  data: Connection_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Connection_Type_On_Conflict>;
};

/** on_conflict condition type for table "connection_type" */
export type Connection_Type_On_Conflict = {
  constraint: Connection_Type_Constraint;
  update_columns?: Array<Connection_Type_Update_Column>;
  where?: Maybe<Connection_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "connection_type". */
export type Connection_Type_Order_By = {
  connection_type_caption?: Maybe<Order_By>;
  connection_type_description?: Maybe<Order_By>;
  connection_type_description_translated?: Maybe<Order_By>;
  connection_type_name?: Maybe<Order_By>;
  icon?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
};

/** primary key columns input for table: connection_type */
export type Connection_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Connection_Type_Prepend_Input = {
  connection_type_description_translated?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "connection_type" */
export enum Connection_Type_Select_Column {
  /** column name */
  ConnectionTypeCaption = 'connection_type_caption',
  /** column name */
  ConnectionTypeDescription = 'connection_type_description',
  /** column name */
  ConnectionTypeDescriptionTranslated = 'connection_type_description_translated',
  /** column name */
  ConnectionTypeName = 'connection_type_name',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  OrderBy = 'order_by'
}

/** input type for updating data in table "connection_type" */
export type Connection_Type_Set_Input = {
  connection_type_caption?: Maybe<Scalars['String']>;
  connection_type_description?: Maybe<Scalars['String']>;
  connection_type_description_translated?: Maybe<Scalars['jsonb']>;
  connection_type_name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Connection_Type_Stddev_Fields = {
  __typename?: 'connection_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Connection_Type_Stddev_Pop_Fields = {
  __typename?: 'connection_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Connection_Type_Stddev_Samp_Fields = {
  __typename?: 'connection_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Connection_Type_Sum_Fields = {
  __typename?: 'connection_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "connection_type" */
export enum Connection_Type_Update_Column {
  /** column name */
  ConnectionTypeCaption = 'connection_type_caption',
  /** column name */
  ConnectionTypeDescription = 'connection_type_description',
  /** column name */
  ConnectionTypeDescriptionTranslated = 'connection_type_description_translated',
  /** column name */
  ConnectionTypeName = 'connection_type_name',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  OrderBy = 'order_by'
}

/** aggregate var_pop on columns */
export type Connection_Type_Var_Pop_Fields = {
  __typename?: 'connection_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Connection_Type_Var_Samp_Fields = {
  __typename?: 'connection_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Connection_Type_Variance_Fields = {
  __typename?: 'connection_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** update columns of table "connection" */
export enum Connection_Update_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  ConnectionTypeId = 'connection_type_id',
  /** column name */
  Credentials = 'credentials',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id'
}

/** aggregate var_pop on columns */
export type Connection_Var_Pop_Fields = {
  __typename?: 'connection_var_pop_fields';
  connection_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Connection_Var_Samp_Fields = {
  __typename?: 'connection_var_samp_fields';
  connection_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Connection_Variance_Fields = {
  __typename?: 'connection_variance_fields';
  connection_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "country" */
export type Country = {
  __typename?: 'country';
  country_name?: Maybe<Scalars['String']>;
  country_name_translated?: Maybe<Scalars['jsonb']>;
  id: Scalars['Int'];
  is_eu: Scalars['Boolean'];
  short_name?: Maybe<Scalars['String']>;
};


/** columns and relationships of "country" */
export type CountryCountry_Name_TranslatedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "country" */
export type Country_Aggregate = {
  __typename?: 'country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "country" */
export type Country_Aggregate_Fields = {
  __typename?: 'country_aggregate_fields';
  avg?: Maybe<Country_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Country_Max_Fields>;
  min?: Maybe<Country_Min_Fields>;
  stddev?: Maybe<Country_Stddev_Fields>;
  stddev_pop?: Maybe<Country_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Country_Stddev_Samp_Fields>;
  sum?: Maybe<Country_Sum_Fields>;
  var_pop?: Maybe<Country_Var_Pop_Fields>;
  var_samp?: Maybe<Country_Var_Samp_Fields>;
  variance?: Maybe<Country_Variance_Fields>;
};


/** aggregate fields of "country" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Country_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Country_Append_Input = {
  country_name_translated?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Country_Avg_Fields = {
  __typename?: 'country_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "country". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  _and?: Maybe<Array<Country_Bool_Exp>>;
  _not?: Maybe<Country_Bool_Exp>;
  _or?: Maybe<Array<Country_Bool_Exp>>;
  country_name?: Maybe<String_Comparison_Exp>;
  country_name_translated?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_eu?: Maybe<Boolean_Comparison_Exp>;
  short_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "country" */
export enum Country_Constraint {
  /** unique or primary key constraint */
  PkCountry = 'pk_country'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Country_Delete_At_Path_Input = {
  country_name_translated?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Country_Delete_Elem_Input = {
  country_name_translated?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Country_Delete_Key_Input = {
  country_name_translated?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "country" */
export type Country_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "country" */
export type Country_Insert_Input = {
  country_name?: Maybe<Scalars['String']>;
  country_name_translated?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  is_eu?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'country_max_fields';
  country_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  short_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'country_min_fields';
  country_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  short_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "country" */
export type Country_Mutation_Response = {
  __typename?: 'country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** on_conflict condition type for table "country" */
export type Country_On_Conflict = {
  constraint: Country_Constraint;
  update_columns?: Array<Country_Update_Column>;
  where?: Maybe<Country_Bool_Exp>;
};

/** Ordering options when selecting data from "country". */
export type Country_Order_By = {
  country_name?: Maybe<Order_By>;
  country_name_translated?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_eu?: Maybe<Order_By>;
  short_name?: Maybe<Order_By>;
};

/** primary key columns input for table: country */
export type Country_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Country_Prepend_Input = {
  country_name_translated?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "country" */
export enum Country_Select_Column {
  /** column name */
  CountryName = 'country_name',
  /** column name */
  CountryNameTranslated = 'country_name_translated',
  /** column name */
  Id = 'id',
  /** column name */
  IsEu = 'is_eu',
  /** column name */
  ShortName = 'short_name'
}

/** input type for updating data in table "country" */
export type Country_Set_Input = {
  country_name?: Maybe<Scalars['String']>;
  country_name_translated?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  is_eu?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Country_Stddev_Fields = {
  __typename?: 'country_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Country_Stddev_Pop_Fields = {
  __typename?: 'country_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Country_Stddev_Samp_Fields = {
  __typename?: 'country_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Country_Sum_Fields = {
  __typename?: 'country_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "country" */
export enum Country_Update_Column {
  /** column name */
  CountryName = 'country_name',
  /** column name */
  CountryNameTranslated = 'country_name_translated',
  /** column name */
  Id = 'id',
  /** column name */
  IsEu = 'is_eu',
  /** column name */
  ShortName = 'short_name'
}

/** aggregate var_pop on columns */
export type Country_Var_Pop_Fields = {
  __typename?: 'country_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Country_Var_Samp_Fields = {
  __typename?: 'country_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Country_Variance_Fields = {
  __typename?: 'country_variance_fields';
  id?: Maybe<Scalars['Float']>;
};



/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  CampaignDelete?: Maybe<CampaignDeleteOutput>;
  CampaignInsert?: Maybe<CampaignInsertOutput>;
  CampaignPreview?: Maybe<CampaignPreviewOutput>;
  CampaignSourceFetch?: Maybe<CampaignSourceFetchOutput>;
  CampaignUpdate?: Maybe<CampaignUpdateOutput>;
  ConnectionDelete?: Maybe<ConnectionDeleteOutput>;
  ConnectionInsert?: Maybe<ConnectionInsertOutput>;
  ConnectionUpdate?: Maybe<ConnectionUpdateOutput>;
  OrganizationInsert?: Maybe<OrganizationInsertOutput>;
  OrganizationUpdate?: Maybe<OrganizationUpdateOutput>;
  OrganizationUserDelete?: Maybe<OrganizationUserDeleteOutput>;
  OrganizationUserInsert?: Maybe<OrganizationUserInsertOutput>;
  OrganizationUserUpdate?: Maybe<OrganizationUserUpdateOutput>;
  TemplateDelete?: Maybe<TemplateDeleteOutput>;
  TemplateInsert?: Maybe<TemplateInsertOutput>;
  TemplateUpdate?: Maybe<TemplateUpdateOutput>;
  UserResetPassword?: Maybe<UserResetPasswordOutput>;
  UserUpdate?: Maybe<UserUpdateOutput>;
  /** delete data from the table: "campaign" */
  delete_campaign?: Maybe<Campaign_Mutation_Response>;
  /** delete single row from the table: "campaign" */
  delete_campaign_by_pk?: Maybe<Campaign>;
  /** delete data from the table: "campaign_log" */
  delete_campaign_log?: Maybe<Campaign_Log_Mutation_Response>;
  /** delete single row from the table: "campaign_log" */
  delete_campaign_log_by_pk?: Maybe<Campaign_Log>;
  /** delete data from the table: "campaign_template_cross" */
  delete_campaign_template_cross?: Maybe<Campaign_Template_Cross_Mutation_Response>;
  /** delete single row from the table: "campaign_template_cross" */
  delete_campaign_template_cross_by_pk?: Maybe<Campaign_Template_Cross>;
  /** delete data from the table: "campaign_type" */
  delete_campaign_type?: Maybe<Campaign_Type_Mutation_Response>;
  /** delete single row from the table: "campaign_type" */
  delete_campaign_type_by_pk?: Maybe<Campaign_Type>;
  /** delete data from the table: "connection" */
  delete_connection?: Maybe<Connection_Mutation_Response>;
  /** delete single row from the table: "connection" */
  delete_connection_by_pk?: Maybe<Connection>;
  /** delete data from the table: "connection_type" */
  delete_connection_type?: Maybe<Connection_Type_Mutation_Response>;
  /** delete single row from the table: "connection_type" */
  delete_connection_type_by_pk?: Maybe<Connection_Type>;
  /** delete data from the table: "country" */
  delete_country?: Maybe<Country_Mutation_Response>;
  /** delete single row from the table: "country" */
  delete_country_by_pk?: Maybe<Country>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "organization_user" */
  delete_organization_user?: Maybe<Organization_User_Mutation_Response>;
  /** delete single row from the table: "organization_user" */
  delete_organization_user_by_pk?: Maybe<Organization_User>;
  /** delete data from the table: "organization_user_role" */
  delete_organization_user_role?: Maybe<Organization_User_Role_Mutation_Response>;
  /** delete single row from the table: "organization_user_role" */
  delete_organization_user_role_by_pk?: Maybe<Organization_User_Role>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "template" */
  delete_template?: Maybe<Template_Mutation_Response>;
  /** delete single row from the table: "template" */
  delete_template_by_pk?: Maybe<Template>;
  /** delete data from the table: "template_type" */
  delete_template_type?: Maybe<Template_Type_Mutation_Response>;
  /** delete single row from the table: "template_type" */
  delete_template_type_by_pk?: Maybe<Template_Type>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "campaign" */
  insert_campaign?: Maybe<Campaign_Mutation_Response>;
  /** insert data into the table: "campaign_log" */
  insert_campaign_log?: Maybe<Campaign_Log_Mutation_Response>;
  /** insert a single row into the table: "campaign_log" */
  insert_campaign_log_one?: Maybe<Campaign_Log>;
  /** insert a single row into the table: "campaign" */
  insert_campaign_one?: Maybe<Campaign>;
  /** insert data into the table: "campaign_template_cross" */
  insert_campaign_template_cross?: Maybe<Campaign_Template_Cross_Mutation_Response>;
  /** insert a single row into the table: "campaign_template_cross" */
  insert_campaign_template_cross_one?: Maybe<Campaign_Template_Cross>;
  /** insert data into the table: "campaign_type" */
  insert_campaign_type?: Maybe<Campaign_Type_Mutation_Response>;
  /** insert a single row into the table: "campaign_type" */
  insert_campaign_type_one?: Maybe<Campaign_Type>;
  /** insert data into the table: "connection" */
  insert_connection?: Maybe<Connection_Mutation_Response>;
  /** insert a single row into the table: "connection" */
  insert_connection_one?: Maybe<Connection>;
  /** insert data into the table: "connection_type" */
  insert_connection_type?: Maybe<Connection_Type_Mutation_Response>;
  /** insert a single row into the table: "connection_type" */
  insert_connection_type_one?: Maybe<Connection_Type>;
  /** insert data into the table: "country" */
  insert_country?: Maybe<Country_Mutation_Response>;
  /** insert a single row into the table: "country" */
  insert_country_one?: Maybe<Country>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** insert data into the table: "organization_user" */
  insert_organization_user?: Maybe<Organization_User_Mutation_Response>;
  /** insert a single row into the table: "organization_user" */
  insert_organization_user_one?: Maybe<Organization_User>;
  /** insert data into the table: "organization_user_role" */
  insert_organization_user_role?: Maybe<Organization_User_Role_Mutation_Response>;
  /** insert a single row into the table: "organization_user_role" */
  insert_organization_user_role_one?: Maybe<Organization_User_Role>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "template" */
  insert_template?: Maybe<Template_Mutation_Response>;
  /** insert a single row into the table: "template" */
  insert_template_one?: Maybe<Template>;
  /** insert data into the table: "template_type" */
  insert_template_type?: Maybe<Template_Type_Mutation_Response>;
  /** insert a single row into the table: "template_type" */
  insert_template_type_one?: Maybe<Template_Type>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "campaign" */
  update_campaign?: Maybe<Campaign_Mutation_Response>;
  /** update single row of the table: "campaign" */
  update_campaign_by_pk?: Maybe<Campaign>;
  /** update data of the table: "campaign_log" */
  update_campaign_log?: Maybe<Campaign_Log_Mutation_Response>;
  /** update single row of the table: "campaign_log" */
  update_campaign_log_by_pk?: Maybe<Campaign_Log>;
  /** update data of the table: "campaign_template_cross" */
  update_campaign_template_cross?: Maybe<Campaign_Template_Cross_Mutation_Response>;
  /** update single row of the table: "campaign_template_cross" */
  update_campaign_template_cross_by_pk?: Maybe<Campaign_Template_Cross>;
  /** update data of the table: "campaign_type" */
  update_campaign_type?: Maybe<Campaign_Type_Mutation_Response>;
  /** update single row of the table: "campaign_type" */
  update_campaign_type_by_pk?: Maybe<Campaign_Type>;
  /** update data of the table: "connection" */
  update_connection?: Maybe<Connection_Mutation_Response>;
  /** update single row of the table: "connection" */
  update_connection_by_pk?: Maybe<Connection>;
  /** update data of the table: "connection_type" */
  update_connection_type?: Maybe<Connection_Type_Mutation_Response>;
  /** update single row of the table: "connection_type" */
  update_connection_type_by_pk?: Maybe<Connection_Type>;
  /** update data of the table: "country" */
  update_country?: Maybe<Country_Mutation_Response>;
  /** update single row of the table: "country" */
  update_country_by_pk?: Maybe<Country>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update data of the table: "organization_user" */
  update_organization_user?: Maybe<Organization_User_Mutation_Response>;
  /** update single row of the table: "organization_user" */
  update_organization_user_by_pk?: Maybe<Organization_User>;
  /** update data of the table: "organization_user_role" */
  update_organization_user_role?: Maybe<Organization_User_Role_Mutation_Response>;
  /** update single row of the table: "organization_user_role" */
  update_organization_user_role_by_pk?: Maybe<Organization_User_Role>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update data of the table: "template" */
  update_template?: Maybe<Template_Mutation_Response>;
  /** update single row of the table: "template" */
  update_template_by_pk?: Maybe<Template>;
  /** update data of the table: "template_type" */
  update_template_type?: Maybe<Template_Type_Mutation_Response>;
  /** update single row of the table: "template_type" */
  update_template_type_by_pk?: Maybe<Template_Type>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootCampaignDeleteArgs = {
  data: CampaignDeleteInput;
};


/** mutation root */
export type Mutation_RootCampaignInsertArgs = {
  data: CampaignInsertInput;
};


/** mutation root */
export type Mutation_RootCampaignPreviewArgs = {
  data: CampaignPreviewInput;
};


/** mutation root */
export type Mutation_RootCampaignSourceFetchArgs = {
  data: CampaignSourceFetchInput;
};


/** mutation root */
export type Mutation_RootCampaignUpdateArgs = {
  data: CampaignUpdateInput;
};


/** mutation root */
export type Mutation_RootConnectionDeleteArgs = {
  data: ConnectionDeleteInput;
};


/** mutation root */
export type Mutation_RootConnectionInsertArgs = {
  data: ConnectionInsertInput;
};


/** mutation root */
export type Mutation_RootConnectionUpdateArgs = {
  data: ConnectionUpdateInput;
};


/** mutation root */
export type Mutation_RootOrganizationInsertArgs = {
  data: OrganizationInsertInput;
};


/** mutation root */
export type Mutation_RootOrganizationUpdateArgs = {
  data: OrganizationUpdateInput;
};


/** mutation root */
export type Mutation_RootOrganizationUserDeleteArgs = {
  data: OrganizationUserDeleteInput;
};


/** mutation root */
export type Mutation_RootOrganizationUserInsertArgs = {
  data: OrganizationUserInsertInput;
};


/** mutation root */
export type Mutation_RootOrganizationUserUpdateArgs = {
  data: OrganizationUserUpdateInput;
};


/** mutation root */
export type Mutation_RootTemplateDeleteArgs = {
  data: TemplateDeleteInput;
};


/** mutation root */
export type Mutation_RootTemplateInsertArgs = {
  data: TemplateInsertInput;
};


/** mutation root */
export type Mutation_RootTemplateUpdateArgs = {
  data: TemplateUpdateInput;
};


/** mutation root */
export type Mutation_RootUserResetPasswordArgs = {
  data: UserResetPasswordInput;
};


/** mutation root */
export type Mutation_RootUserUpdateArgs = {
  data: UserUpdateInput;
};


/** mutation root */
export type Mutation_RootDelete_CampaignArgs = {
  where: Campaign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Campaign_LogArgs = {
  where: Campaign_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Log_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Template_CrossArgs = {
  where: Campaign_Template_Cross_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Template_Cross_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Campaign_TypeArgs = {
  where: Campaign_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ConnectionArgs = {
  where: Connection_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Connection_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Connection_TypeArgs = {
  where: Connection_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Connection_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CountryArgs = {
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Country_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_UserArgs = {
  where: Organization_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_User_RoleArgs = {
  where: Organization_User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_User_Role_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TemplateArgs = {
  where: Template_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Template_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Template_TypeArgs = {
  where: Template_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Template_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CampaignArgs = {
  objects: Array<Campaign_Insert_Input>;
  on_conflict?: Maybe<Campaign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_LogArgs = {
  objects: Array<Campaign_Log_Insert_Input>;
  on_conflict?: Maybe<Campaign_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Log_OneArgs = {
  object: Campaign_Log_Insert_Input;
  on_conflict?: Maybe<Campaign_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_OneArgs = {
  object: Campaign_Insert_Input;
  on_conflict?: Maybe<Campaign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Template_CrossArgs = {
  objects: Array<Campaign_Template_Cross_Insert_Input>;
  on_conflict?: Maybe<Campaign_Template_Cross_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Template_Cross_OneArgs = {
  object: Campaign_Template_Cross_Insert_Input;
  on_conflict?: Maybe<Campaign_Template_Cross_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_TypeArgs = {
  objects: Array<Campaign_Type_Insert_Input>;
  on_conflict?: Maybe<Campaign_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Type_OneArgs = {
  object: Campaign_Type_Insert_Input;
  on_conflict?: Maybe<Campaign_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConnectionArgs = {
  objects: Array<Connection_Insert_Input>;
  on_conflict?: Maybe<Connection_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Connection_OneArgs = {
  object: Connection_Insert_Input;
  on_conflict?: Maybe<Connection_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Connection_TypeArgs = {
  objects: Array<Connection_Type_Insert_Input>;
  on_conflict?: Maybe<Connection_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Connection_Type_OneArgs = {
  object: Connection_Type_Insert_Input;
  on_conflict?: Maybe<Connection_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryArgs = {
  objects: Array<Country_Insert_Input>;
  on_conflict?: Maybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Country_OneArgs = {
  object: Country_Insert_Input;
  on_conflict?: Maybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: Maybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: Maybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_UserArgs = {
  objects: Array<Organization_User_Insert_Input>;
  on_conflict?: Maybe<Organization_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_User_OneArgs = {
  object: Organization_User_Insert_Input;
  on_conflict?: Maybe<Organization_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_User_RoleArgs = {
  objects: Array<Organization_User_Role_Insert_Input>;
  on_conflict?: Maybe<Organization_User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_User_Role_OneArgs = {
  object: Organization_User_Role_Insert_Input;
  on_conflict?: Maybe<Organization_User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TemplateArgs = {
  objects: Array<Template_Insert_Input>;
  on_conflict?: Maybe<Template_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Template_OneArgs = {
  object: Template_Insert_Input;
  on_conflict?: Maybe<Template_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Template_TypeArgs = {
  objects: Array<Template_Type_Insert_Input>;
  on_conflict?: Maybe<Template_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Template_Type_OneArgs = {
  object: Template_Type_Insert_Input;
  on_conflict?: Maybe<Template_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CampaignArgs = {
  _append?: Maybe<Campaign_Append_Input>;
  _delete_at_path?: Maybe<Campaign_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Campaign_Delete_Elem_Input>;
  _delete_key?: Maybe<Campaign_Delete_Key_Input>;
  _inc?: Maybe<Campaign_Inc_Input>;
  _prepend?: Maybe<Campaign_Prepend_Input>;
  _set?: Maybe<Campaign_Set_Input>;
  where: Campaign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_By_PkArgs = {
  _append?: Maybe<Campaign_Append_Input>;
  _delete_at_path?: Maybe<Campaign_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Campaign_Delete_Elem_Input>;
  _delete_key?: Maybe<Campaign_Delete_Key_Input>;
  _inc?: Maybe<Campaign_Inc_Input>;
  _prepend?: Maybe<Campaign_Prepend_Input>;
  _set?: Maybe<Campaign_Set_Input>;
  pk_columns: Campaign_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_LogArgs = {
  _inc?: Maybe<Campaign_Log_Inc_Input>;
  _set?: Maybe<Campaign_Log_Set_Input>;
  where: Campaign_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Log_By_PkArgs = {
  _inc?: Maybe<Campaign_Log_Inc_Input>;
  _set?: Maybe<Campaign_Log_Set_Input>;
  pk_columns: Campaign_Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Template_CrossArgs = {
  _append?: Maybe<Campaign_Template_Cross_Append_Input>;
  _delete_at_path?: Maybe<Campaign_Template_Cross_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Campaign_Template_Cross_Delete_Elem_Input>;
  _delete_key?: Maybe<Campaign_Template_Cross_Delete_Key_Input>;
  _inc?: Maybe<Campaign_Template_Cross_Inc_Input>;
  _prepend?: Maybe<Campaign_Template_Cross_Prepend_Input>;
  _set?: Maybe<Campaign_Template_Cross_Set_Input>;
  where: Campaign_Template_Cross_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Template_Cross_By_PkArgs = {
  _append?: Maybe<Campaign_Template_Cross_Append_Input>;
  _delete_at_path?: Maybe<Campaign_Template_Cross_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Campaign_Template_Cross_Delete_Elem_Input>;
  _delete_key?: Maybe<Campaign_Template_Cross_Delete_Key_Input>;
  _inc?: Maybe<Campaign_Template_Cross_Inc_Input>;
  _prepend?: Maybe<Campaign_Template_Cross_Prepend_Input>;
  _set?: Maybe<Campaign_Template_Cross_Set_Input>;
  pk_columns: Campaign_Template_Cross_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_TypeArgs = {
  _inc?: Maybe<Campaign_Type_Inc_Input>;
  _set?: Maybe<Campaign_Type_Set_Input>;
  where: Campaign_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Type_By_PkArgs = {
  _inc?: Maybe<Campaign_Type_Inc_Input>;
  _set?: Maybe<Campaign_Type_Set_Input>;
  pk_columns: Campaign_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ConnectionArgs = {
  _append?: Maybe<Connection_Append_Input>;
  _delete_at_path?: Maybe<Connection_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Connection_Delete_Elem_Input>;
  _delete_key?: Maybe<Connection_Delete_Key_Input>;
  _inc?: Maybe<Connection_Inc_Input>;
  _prepend?: Maybe<Connection_Prepend_Input>;
  _set?: Maybe<Connection_Set_Input>;
  where: Connection_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Connection_By_PkArgs = {
  _append?: Maybe<Connection_Append_Input>;
  _delete_at_path?: Maybe<Connection_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Connection_Delete_Elem_Input>;
  _delete_key?: Maybe<Connection_Delete_Key_Input>;
  _inc?: Maybe<Connection_Inc_Input>;
  _prepend?: Maybe<Connection_Prepend_Input>;
  _set?: Maybe<Connection_Set_Input>;
  pk_columns: Connection_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Connection_TypeArgs = {
  _append?: Maybe<Connection_Type_Append_Input>;
  _delete_at_path?: Maybe<Connection_Type_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Connection_Type_Delete_Elem_Input>;
  _delete_key?: Maybe<Connection_Type_Delete_Key_Input>;
  _inc?: Maybe<Connection_Type_Inc_Input>;
  _prepend?: Maybe<Connection_Type_Prepend_Input>;
  _set?: Maybe<Connection_Type_Set_Input>;
  where: Connection_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Connection_Type_By_PkArgs = {
  _append?: Maybe<Connection_Type_Append_Input>;
  _delete_at_path?: Maybe<Connection_Type_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Connection_Type_Delete_Elem_Input>;
  _delete_key?: Maybe<Connection_Type_Delete_Key_Input>;
  _inc?: Maybe<Connection_Type_Inc_Input>;
  _prepend?: Maybe<Connection_Type_Prepend_Input>;
  _set?: Maybe<Connection_Type_Set_Input>;
  pk_columns: Connection_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CountryArgs = {
  _append?: Maybe<Country_Append_Input>;
  _delete_at_path?: Maybe<Country_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Country_Delete_Elem_Input>;
  _delete_key?: Maybe<Country_Delete_Key_Input>;
  _inc?: Maybe<Country_Inc_Input>;
  _prepend?: Maybe<Country_Prepend_Input>;
  _set?: Maybe<Country_Set_Input>;
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Country_By_PkArgs = {
  _append?: Maybe<Country_Append_Input>;
  _delete_at_path?: Maybe<Country_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Country_Delete_Elem_Input>;
  _delete_key?: Maybe<Country_Delete_Key_Input>;
  _inc?: Maybe<Country_Inc_Input>;
  _prepend?: Maybe<Country_Prepend_Input>;
  _set?: Maybe<Country_Set_Input>;
  pk_columns: Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _inc?: Maybe<Organization_Inc_Input>;
  _set?: Maybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _inc?: Maybe<Organization_Inc_Input>;
  _set?: Maybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_UserArgs = {
  _inc?: Maybe<Organization_User_Inc_Input>;
  _set?: Maybe<Organization_User_Set_Input>;
  where: Organization_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_User_By_PkArgs = {
  _inc?: Maybe<Organization_User_Inc_Input>;
  _set?: Maybe<Organization_User_Set_Input>;
  pk_columns: Organization_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_User_RoleArgs = {
  _inc?: Maybe<Organization_User_Role_Inc_Input>;
  _set?: Maybe<Organization_User_Role_Set_Input>;
  where: Organization_User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_User_Role_By_PkArgs = {
  _inc?: Maybe<Organization_User_Role_Inc_Input>;
  _set?: Maybe<Organization_User_Role_Set_Input>;
  pk_columns: Organization_User_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _inc?: Maybe<Role_Inc_Input>;
  _set?: Maybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _inc?: Maybe<Role_Inc_Input>;
  _set?: Maybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TemplateArgs = {
  _append?: Maybe<Template_Append_Input>;
  _delete_at_path?: Maybe<Template_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Template_Delete_Elem_Input>;
  _delete_key?: Maybe<Template_Delete_Key_Input>;
  _inc?: Maybe<Template_Inc_Input>;
  _prepend?: Maybe<Template_Prepend_Input>;
  _set?: Maybe<Template_Set_Input>;
  where: Template_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Template_By_PkArgs = {
  _append?: Maybe<Template_Append_Input>;
  _delete_at_path?: Maybe<Template_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Template_Delete_Elem_Input>;
  _delete_key?: Maybe<Template_Delete_Key_Input>;
  _inc?: Maybe<Template_Inc_Input>;
  _prepend?: Maybe<Template_Prepend_Input>;
  _set?: Maybe<Template_Set_Input>;
  pk_columns: Template_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Template_TypeArgs = {
  _append?: Maybe<Template_Type_Append_Input>;
  _delete_at_path?: Maybe<Template_Type_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Template_Type_Delete_Elem_Input>;
  _delete_key?: Maybe<Template_Type_Delete_Key_Input>;
  _inc?: Maybe<Template_Type_Inc_Input>;
  _prepend?: Maybe<Template_Type_Prepend_Input>;
  _set?: Maybe<Template_Type_Set_Input>;
  where: Template_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Template_Type_By_PkArgs = {
  _append?: Maybe<Template_Type_Append_Input>;
  _delete_at_path?: Maybe<Template_Type_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Template_Type_Delete_Elem_Input>;
  _delete_key?: Maybe<Template_Type_Delete_Key_Input>;
  _inc?: Maybe<Template_Type_Inc_Input>;
  _prepend?: Maybe<Template_Type_Prepend_Input>;
  _set?: Maybe<Template_Type_Set_Input>;
  pk_columns: Template_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organization" */
export type Organization = {
  __typename?: 'organization';
  changed_at?: Maybe<Scalars['timestamptz']>;
  city?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  info_email?: Maybe<Scalars['String']>;
  invoice_email?: Maybe<Scalars['String']>;
  organization_name: Scalars['String'];
  organization_reg_nr?: Maybe<Scalars['String']>;
  /** An array relationship */
  organization_users: Array<Organization_User>;
  /** An aggregate relationship */
  organization_users_aggregate: Organization_User_Aggregate;
  payment_type_id?: Maybe<Scalars['Int']>;
  street_address?: Maybe<Scalars['String']>;
  vat_nr?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};


/** columns and relationships of "organization" */
export type OrganizationOrganization_UsersArgs = {
  distinct_on?: Maybe<Array<Organization_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Order_By>>;
  where?: Maybe<Organization_User_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationOrganization_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Order_By>>;
  where?: Maybe<Organization_User_Bool_Exp>;
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  avg?: Maybe<Organization_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organization_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization" */
export type Organization_Aggregate_Order_By = {
  avg?: Maybe<Organization_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organization_Max_Order_By>;
  min?: Maybe<Organization_Min_Order_By>;
  stddev?: Maybe<Organization_Stddev_Order_By>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Order_By>;
  sum?: Maybe<Organization_Sum_Order_By>;
  var_pop?: Maybe<Organization_Var_Pop_Order_By>;
  var_samp?: Maybe<Organization_Var_Samp_Order_By>;
  variance?: Maybe<Organization_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  __typename?: 'organization_avg_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organization" */
export type Organization_Avg_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: Maybe<Array<Organization_Bool_Exp>>;
  _not?: Maybe<Organization_Bool_Exp>;
  _or?: Maybe<Array<Organization_Bool_Exp>>;
  changed_at?: Maybe<Timestamptz_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  country_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  info_email?: Maybe<String_Comparison_Exp>;
  invoice_email?: Maybe<String_Comparison_Exp>;
  organization_name?: Maybe<String_Comparison_Exp>;
  organization_reg_nr?: Maybe<String_Comparison_Exp>;
  organization_users?: Maybe<Organization_User_Bool_Exp>;
  payment_type_id?: Maybe<Int_Comparison_Exp>;
  street_address?: Maybe<String_Comparison_Exp>;
  vat_nr?: Maybe<String_Comparison_Exp>;
  zipcode?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint */
  OrganizationPk = 'organization_pk'
}

/** input type for incrementing numeric columns in table "organization" */
export type Organization_Inc_Input = {
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  payment_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  city?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info_email?: Maybe<Scalars['String']>;
  invoice_email?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  organization_reg_nr?: Maybe<Scalars['String']>;
  organization_users?: Maybe<Organization_User_Arr_Rel_Insert_Input>;
  payment_type_id?: Maybe<Scalars['Int']>;
  street_address?: Maybe<Scalars['String']>;
  vat_nr?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  city?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info_email?: Maybe<Scalars['String']>;
  invoice_email?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  organization_reg_nr?: Maybe<Scalars['String']>;
  payment_type_id?: Maybe<Scalars['Int']>;
  street_address?: Maybe<Scalars['String']>;
  vat_nr?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "organization" */
export type Organization_Max_Order_By = {
  changed_at?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  info_email?: Maybe<Order_By>;
  invoice_email?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  organization_reg_nr?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
  street_address?: Maybe<Order_By>;
  vat_nr?: Maybe<Order_By>;
  zipcode?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  city?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info_email?: Maybe<Scalars['String']>;
  invoice_email?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  organization_reg_nr?: Maybe<Scalars['String']>;
  payment_type_id?: Maybe<Scalars['Int']>;
  street_address?: Maybe<Scalars['String']>;
  vat_nr?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "organization" */
export type Organization_Min_Order_By = {
  changed_at?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  info_email?: Maybe<Order_By>;
  invoice_email?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  organization_reg_nr?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
  street_address?: Maybe<Order_By>;
  vat_nr?: Maybe<Order_By>;
  zipcode?: Maybe<Order_By>;
};

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: Maybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  changed_at?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  info_email?: Maybe<Order_By>;
  invoice_email?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  organization_reg_nr?: Maybe<Order_By>;
  organization_users_aggregate?: Maybe<Organization_User_Aggregate_Order_By>;
  payment_type_id?: Maybe<Order_By>;
  street_address?: Maybe<Order_By>;
  vat_nr?: Maybe<Order_By>;
  zipcode?: Maybe<Order_By>;
};

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  City = 'city',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  Id = 'id',
  /** column name */
  InfoEmail = 'info_email',
  /** column name */
  InvoiceEmail = 'invoice_email',
  /** column name */
  OrganizationName = 'organization_name',
  /** column name */
  OrganizationRegNr = 'organization_reg_nr',
  /** column name */
  PaymentTypeId = 'payment_type_id',
  /** column name */
  StreetAddress = 'street_address',
  /** column name */
  VatNr = 'vat_nr',
  /** column name */
  Zipcode = 'zipcode'
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  city?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info_email?: Maybe<Scalars['String']>;
  invoice_email?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  organization_reg_nr?: Maybe<Scalars['String']>;
  payment_type_id?: Maybe<Scalars['Int']>;
  street_address?: Maybe<Scalars['String']>;
  vat_nr?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  __typename?: 'organization_stddev_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organization" */
export type Organization_Stddev_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  __typename?: 'organization_stddev_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organization" */
export type Organization_Stddev_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  __typename?: 'organization_stddev_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organization" */
export type Organization_Stddev_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  __typename?: 'organization_sum_fields';
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  payment_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "organization" */
export type Organization_Sum_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
};

/** update columns of table "organization" */
export enum Organization_Update_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  City = 'city',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  Id = 'id',
  /** column name */
  InfoEmail = 'info_email',
  /** column name */
  InvoiceEmail = 'invoice_email',
  /** column name */
  OrganizationName = 'organization_name',
  /** column name */
  OrganizationRegNr = 'organization_reg_nr',
  /** column name */
  PaymentTypeId = 'payment_type_id',
  /** column name */
  StreetAddress = 'street_address',
  /** column name */
  VatNr = 'vat_nr',
  /** column name */
  Zipcode = 'zipcode'
}

/** columns and relationships of "organization_user" */
export type Organization_User = {
  __typename?: 'organization_user';
  changed_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  organization_id: Scalars['Int'];
  /** An array relationship */
  organization_user_roles: Array<Organization_User_Role>;
  /** An aggregate relationship */
  organization_user_roles_aggregate: Organization_User_Role_Aggregate;
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};


/** columns and relationships of "organization_user" */
export type Organization_UserOrganization_User_RolesArgs = {
  distinct_on?: Maybe<Array<Organization_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Role_Order_By>>;
  where?: Maybe<Organization_User_Role_Bool_Exp>;
};


/** columns and relationships of "organization_user" */
export type Organization_UserOrganization_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Role_Order_By>>;
  where?: Maybe<Organization_User_Role_Bool_Exp>;
};

/** aggregated selection of "organization_user" */
export type Organization_User_Aggregate = {
  __typename?: 'organization_user_aggregate';
  aggregate?: Maybe<Organization_User_Aggregate_Fields>;
  nodes: Array<Organization_User>;
};

/** aggregate fields of "organization_user" */
export type Organization_User_Aggregate_Fields = {
  __typename?: 'organization_user_aggregate_fields';
  avg?: Maybe<Organization_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Organization_User_Max_Fields>;
  min?: Maybe<Organization_User_Min_Fields>;
  stddev?: Maybe<Organization_User_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_User_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_User_Sum_Fields>;
  var_pop?: Maybe<Organization_User_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_User_Var_Samp_Fields>;
  variance?: Maybe<Organization_User_Variance_Fields>;
};


/** aggregate fields of "organization_user" */
export type Organization_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organization_User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization_user" */
export type Organization_User_Aggregate_Order_By = {
  avg?: Maybe<Organization_User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organization_User_Max_Order_By>;
  min?: Maybe<Organization_User_Min_Order_By>;
  stddev?: Maybe<Organization_User_Stddev_Order_By>;
  stddev_pop?: Maybe<Organization_User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organization_User_Stddev_Samp_Order_By>;
  sum?: Maybe<Organization_User_Sum_Order_By>;
  var_pop?: Maybe<Organization_User_Var_Pop_Order_By>;
  var_samp?: Maybe<Organization_User_Var_Samp_Order_By>;
  variance?: Maybe<Organization_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organization_user" */
export type Organization_User_Arr_Rel_Insert_Input = {
  data: Array<Organization_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Organization_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Organization_User_Avg_Fields = {
  __typename?: 'organization_user_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organization_user" */
export type Organization_User_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization_user". All fields are combined with a logical 'AND'. */
export type Organization_User_Bool_Exp = {
  _and?: Maybe<Array<Organization_User_Bool_Exp>>;
  _not?: Maybe<Organization_User_Bool_Exp>;
  _or?: Maybe<Array<Organization_User_Bool_Exp>>;
  changed_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  organization_user_roles?: Maybe<Organization_User_Role_Bool_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_user" */
export enum Organization_User_Constraint {
  /** unique or primary key constraint */
  IxOrganizationUserOrganizationUser = 'ix_organization_user_organization_user',
  /** unique or primary key constraint */
  PkOrganizationUser = 'pk_organization_user'
}

/** input type for incrementing numeric columns in table "organization_user" */
export type Organization_User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organization_user" */
export type Organization_User_Insert_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  organization_user_roles?: Maybe<Organization_User_Role_Arr_Rel_Insert_Input>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Organization_User_Max_Fields = {
  __typename?: 'organization_user_max_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "organization_user" */
export type Organization_User_Max_Order_By = {
  changed_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_User_Min_Fields = {
  __typename?: 'organization_user_min_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "organization_user" */
export type Organization_User_Min_Order_By = {
  changed_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "organization_user" */
export type Organization_User_Mutation_Response = {
  __typename?: 'organization_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_User>;
};

/** input type for inserting object relation for remote table "organization_user" */
export type Organization_User_Obj_Rel_Insert_Input = {
  data: Organization_User_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Organization_User_On_Conflict>;
};

/** on_conflict condition type for table "organization_user" */
export type Organization_User_On_Conflict = {
  constraint: Organization_User_Constraint;
  update_columns?: Array<Organization_User_Update_Column>;
  where?: Maybe<Organization_User_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_user". */
export type Organization_User_Order_By = {
  changed_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  organization_user_roles_aggregate?: Maybe<Organization_User_Role_Aggregate_Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: organization_user */
export type Organization_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "organization_user_role" */
export type Organization_User_Role = {
  __typename?: 'organization_user_role';
  id: Scalars['Int'];
  /** An object relationship */
  organization_user: Organization_User;
  organization_user_id: Scalars['Int'];
  role_id: Scalars['Int'];
};

/** aggregated selection of "organization_user_role" */
export type Organization_User_Role_Aggregate = {
  __typename?: 'organization_user_role_aggregate';
  aggregate?: Maybe<Organization_User_Role_Aggregate_Fields>;
  nodes: Array<Organization_User_Role>;
};

/** aggregate fields of "organization_user_role" */
export type Organization_User_Role_Aggregate_Fields = {
  __typename?: 'organization_user_role_aggregate_fields';
  avg?: Maybe<Organization_User_Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Organization_User_Role_Max_Fields>;
  min?: Maybe<Organization_User_Role_Min_Fields>;
  stddev?: Maybe<Organization_User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_User_Role_Sum_Fields>;
  var_pop?: Maybe<Organization_User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_User_Role_Var_Samp_Fields>;
  variance?: Maybe<Organization_User_Role_Variance_Fields>;
};


/** aggregate fields of "organization_user_role" */
export type Organization_User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organization_User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization_user_role" */
export type Organization_User_Role_Aggregate_Order_By = {
  avg?: Maybe<Organization_User_Role_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organization_User_Role_Max_Order_By>;
  min?: Maybe<Organization_User_Role_Min_Order_By>;
  stddev?: Maybe<Organization_User_Role_Stddev_Order_By>;
  stddev_pop?: Maybe<Organization_User_Role_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organization_User_Role_Stddev_Samp_Order_By>;
  sum?: Maybe<Organization_User_Role_Sum_Order_By>;
  var_pop?: Maybe<Organization_User_Role_Var_Pop_Order_By>;
  var_samp?: Maybe<Organization_User_Role_Var_Samp_Order_By>;
  variance?: Maybe<Organization_User_Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organization_user_role" */
export type Organization_User_Role_Arr_Rel_Insert_Input = {
  data: Array<Organization_User_Role_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Organization_User_Role_On_Conflict>;
};

/** aggregate avg on columns */
export type Organization_User_Role_Avg_Fields = {
  __typename?: 'organization_user_role_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organization_user_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organization_user_role" */
export type Organization_User_Role_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization_user_role". All fields are combined with a logical 'AND'. */
export type Organization_User_Role_Bool_Exp = {
  _and?: Maybe<Array<Organization_User_Role_Bool_Exp>>;
  _not?: Maybe<Organization_User_Role_Bool_Exp>;
  _or?: Maybe<Array<Organization_User_Role_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  organization_user?: Maybe<Organization_User_Bool_Exp>;
  organization_user_id?: Maybe<Int_Comparison_Exp>;
  role_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_user_role" */
export enum Organization_User_Role_Constraint {
  /** unique or primary key constraint */
  IxOrganizationUserRoleOrganizationUserRole = 'ix_organization_user_role_organization_user_role',
  /** unique or primary key constraint */
  PkOrganizationUserRole = 'pk_organization_user_role'
}

/** input type for incrementing numeric columns in table "organization_user_role" */
export type Organization_User_Role_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_user_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organization_user_role" */
export type Organization_User_Role_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_user?: Maybe<Organization_User_Obj_Rel_Insert_Input>;
  organization_user_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Organization_User_Role_Max_Fields = {
  __typename?: 'organization_user_role_max_fields';
  id?: Maybe<Scalars['Int']>;
  organization_user_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "organization_user_role" */
export type Organization_User_Role_Max_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_User_Role_Min_Fields = {
  __typename?: 'organization_user_role_min_fields';
  id?: Maybe<Scalars['Int']>;
  organization_user_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "organization_user_role" */
export type Organization_User_Role_Min_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "organization_user_role" */
export type Organization_User_Role_Mutation_Response = {
  __typename?: 'organization_user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_User_Role>;
};

/** on_conflict condition type for table "organization_user_role" */
export type Organization_User_Role_On_Conflict = {
  constraint: Organization_User_Role_Constraint;
  update_columns?: Array<Organization_User_Role_Update_Column>;
  where?: Maybe<Organization_User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_user_role". */
export type Organization_User_Role_Order_By = {
  id?: Maybe<Order_By>;
  organization_user?: Maybe<Organization_User_Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** primary key columns input for table: organization_user_role */
export type Organization_User_Role_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "organization_user_role" */
export enum Organization_User_Role_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationUserId = 'organization_user_id',
  /** column name */
  RoleId = 'role_id'
}

/** input type for updating data in table "organization_user_role" */
export type Organization_User_Role_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_user_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Organization_User_Role_Stddev_Fields = {
  __typename?: 'organization_user_role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organization_user_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organization_user_role" */
export type Organization_User_Role_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_User_Role_Stddev_Pop_Fields = {
  __typename?: 'organization_user_role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_user_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organization_user_role" */
export type Organization_User_Role_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_User_Role_Stddev_Samp_Fields = {
  __typename?: 'organization_user_role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_user_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organization_user_role" */
export type Organization_User_Role_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organization_User_Role_Sum_Fields = {
  __typename?: 'organization_user_role_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organization_user_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "organization_user_role" */
export type Organization_User_Role_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** update columns of table "organization_user_role" */
export enum Organization_User_Role_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationUserId = 'organization_user_id',
  /** column name */
  RoleId = 'role_id'
}

/** aggregate var_pop on columns */
export type Organization_User_Role_Var_Pop_Fields = {
  __typename?: 'organization_user_role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_user_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organization_user_role" */
export type Organization_User_Role_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_User_Role_Var_Samp_Fields = {
  __typename?: 'organization_user_role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_user_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organization_user_role" */
export type Organization_User_Role_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_User_Role_Variance_Fields = {
  __typename?: 'organization_user_role_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organization_user_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organization_user_role" */
export type Organization_User_Role_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** select columns of table "organization_user" */
export enum Organization_User_Select_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "organization_user" */
export type Organization_User_Set_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Organization_User_Stddev_Fields = {
  __typename?: 'organization_user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organization_user" */
export type Organization_User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_User_Stddev_Pop_Fields = {
  __typename?: 'organization_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organization_user" */
export type Organization_User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_User_Stddev_Samp_Fields = {
  __typename?: 'organization_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organization_user" */
export type Organization_User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organization_User_Sum_Fields = {
  __typename?: 'organization_user_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "organization_user" */
export type Organization_User_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "organization_user" */
export enum Organization_User_Update_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Organization_User_Var_Pop_Fields = {
  __typename?: 'organization_user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organization_user" */
export type Organization_User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_User_Var_Samp_Fields = {
  __typename?: 'organization_user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organization_user" */
export type Organization_User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_User_Variance_Fields = {
  __typename?: 'organization_user_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organization_user" */
export type Organization_User_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  __typename?: 'organization_var_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organization" */
export type Organization_Var_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  __typename?: 'organization_var_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organization" */
export type Organization_Var_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  __typename?: 'organization_variance_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organization" */
export type Organization_Variance_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type_id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "campaign_log" */
  campaign_log: Array<Campaign_Log>;
  /** fetch aggregated fields from the table: "campaign_log" */
  campaign_log_aggregate: Campaign_Log_Aggregate;
  /** fetch data from the table: "campaign_log" using primary key columns */
  campaign_log_by_pk?: Maybe<Campaign_Log>;
  /** execute function "campaign_search" which returns "campaign" */
  campaign_search: Array<Campaign>;
  /** execute function "campaign_search" and query aggregates on result of table type "campaign" */
  campaign_search_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign_template_cross" */
  campaign_template_cross: Array<Campaign_Template_Cross>;
  /** fetch aggregated fields from the table: "campaign_template_cross" */
  campaign_template_cross_aggregate: Campaign_Template_Cross_Aggregate;
  /** fetch data from the table: "campaign_template_cross" using primary key columns */
  campaign_template_cross_by_pk?: Maybe<Campaign_Template_Cross>;
  /** fetch data from the table: "campaign_type" */
  campaign_type: Array<Campaign_Type>;
  /** fetch aggregated fields from the table: "campaign_type" */
  campaign_type_aggregate: Campaign_Type_Aggregate;
  /** fetch data from the table: "campaign_type" using primary key columns */
  campaign_type_by_pk?: Maybe<Campaign_Type>;
  /** fetch data from the table: "connection" */
  connection: Array<Connection>;
  /** fetch aggregated fields from the table: "connection" */
  connection_aggregate: Connection_Aggregate;
  /** fetch data from the table: "connection" using primary key columns */
  connection_by_pk?: Maybe<Connection>;
  /** fetch data from the table: "connection_type" */
  connection_type: Array<Connection_Type>;
  /** fetch aggregated fields from the table: "connection_type" */
  connection_type_aggregate: Connection_Type_Aggregate;
  /** fetch data from the table: "connection_type" using primary key columns */
  connection_type_by_pk?: Maybe<Connection_Type>;
  /** fetch data from the table: "country" */
  country: Array<Country>;
  /** fetch aggregated fields from the table: "country" */
  country_aggregate: Country_Aggregate;
  /** fetch data from the table: "country" using primary key columns */
  country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_user" */
  organization_user: Array<Organization_User>;
  /** fetch aggregated fields from the table: "organization_user" */
  organization_user_aggregate: Organization_User_Aggregate;
  /** fetch data from the table: "organization_user" using primary key columns */
  organization_user_by_pk?: Maybe<Organization_User>;
  /** fetch data from the table: "organization_user_role" */
  organization_user_role: Array<Organization_User_Role>;
  /** fetch aggregated fields from the table: "organization_user_role" */
  organization_user_role_aggregate: Organization_User_Role_Aggregate;
  /** fetch data from the table: "organization_user_role" using primary key columns */
  organization_user_role_by_pk?: Maybe<Organization_User_Role>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "template" */
  template: Array<Template>;
  /** fetch aggregated fields from the table: "template" */
  template_aggregate: Template_Aggregate;
  /** fetch data from the table: "template" using primary key columns */
  template_by_pk?: Maybe<Template>;
  /** execute function "template_search" which returns "template" */
  template_search: Array<Template>;
  /** execute function "template_search" and query aggregates on result of table type "template" */
  template_search_aggregate: Template_Aggregate;
  /** fetch data from the table: "template_type" */
  template_type: Array<Template_Type>;
  /** fetch aggregated fields from the table: "template_type" */
  template_type_aggregate: Template_Type_Aggregate;
  /** fetch data from the table: "template_type" using primary key columns */
  template_type_by_pk?: Maybe<Template_Type>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootCampaignArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCampaign_LogArgs = {
  distinct_on?: Maybe<Array<Campaign_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Log_Order_By>>;
  where?: Maybe<Campaign_Log_Bool_Exp>;
};


export type Query_RootCampaign_Log_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Log_Order_By>>;
  where?: Maybe<Campaign_Log_Bool_Exp>;
};


export type Query_RootCampaign_Log_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootCampaign_SearchArgs = {
  args: Campaign_Search_Args;
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_Search_AggregateArgs = {
  args: Campaign_Search_Args;
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_Template_CrossArgs = {
  distinct_on?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Template_Cross_Order_By>>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};


export type Query_RootCampaign_Template_Cross_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Template_Cross_Order_By>>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};


export type Query_RootCampaign_Template_Cross_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCampaign_TypeArgs = {
  distinct_on?: Maybe<Array<Campaign_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Type_Order_By>>;
  where?: Maybe<Campaign_Type_Bool_Exp>;
};


export type Query_RootCampaign_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Type_Order_By>>;
  where?: Maybe<Campaign_Type_Bool_Exp>;
};


export type Query_RootCampaign_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootConnectionArgs = {
  distinct_on?: Maybe<Array<Connection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connection_Order_By>>;
  where?: Maybe<Connection_Bool_Exp>;
};


export type Query_RootConnection_AggregateArgs = {
  distinct_on?: Maybe<Array<Connection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connection_Order_By>>;
  where?: Maybe<Connection_Bool_Exp>;
};


export type Query_RootConnection_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootConnection_TypeArgs = {
  distinct_on?: Maybe<Array<Connection_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connection_Type_Order_By>>;
  where?: Maybe<Connection_Type_Bool_Exp>;
};


export type Query_RootConnection_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Connection_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connection_Type_Order_By>>;
  where?: Maybe<Connection_Type_Bool_Exp>;
};


export type Query_RootConnection_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCountryArgs = {
  distinct_on?: Maybe<Array<Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Country_Order_By>>;
  where?: Maybe<Country_Bool_Exp>;
};


export type Query_RootCountry_AggregateArgs = {
  distinct_on?: Maybe<Array<Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Country_Order_By>>;
  where?: Maybe<Country_Bool_Exp>;
};


export type Query_RootCountry_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrganization_UserArgs = {
  distinct_on?: Maybe<Array<Organization_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Order_By>>;
  where?: Maybe<Organization_User_Bool_Exp>;
};


export type Query_RootOrganization_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Order_By>>;
  where?: Maybe<Organization_User_Bool_Exp>;
};


export type Query_RootOrganization_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrganization_User_RoleArgs = {
  distinct_on?: Maybe<Array<Organization_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Role_Order_By>>;
  where?: Maybe<Organization_User_Role_Bool_Exp>;
};


export type Query_RootOrganization_User_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Role_Order_By>>;
  where?: Maybe<Organization_User_Role_Bool_Exp>;
};


export type Query_RootOrganization_User_Role_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTemplateArgs = {
  distinct_on?: Maybe<Array<Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Order_By>>;
  where?: Maybe<Template_Bool_Exp>;
};


export type Query_RootTemplate_AggregateArgs = {
  distinct_on?: Maybe<Array<Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Order_By>>;
  where?: Maybe<Template_Bool_Exp>;
};


export type Query_RootTemplate_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTemplate_SearchArgs = {
  args: Template_Search_Args;
  distinct_on?: Maybe<Array<Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Order_By>>;
  where?: Maybe<Template_Bool_Exp>;
};


export type Query_RootTemplate_Search_AggregateArgs = {
  args: Template_Search_Args;
  distinct_on?: Maybe<Array<Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Order_By>>;
  where?: Maybe<Template_Bool_Exp>;
};


export type Query_RootTemplate_TypeArgs = {
  distinct_on?: Maybe<Array<Template_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Type_Order_By>>;
  where?: Maybe<Template_Type_Bool_Exp>;
};


export type Query_RootTemplate_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Template_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Type_Order_By>>;
  where?: Maybe<Template_Type_Bool_Exp>;
};


export type Query_RootTemplate_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  id: Scalars['Int'];
  role_description?: Maybe<Scalars['String']>;
  role_description_translated?: Maybe<Scalars['String']>;
  role_name?: Maybe<Scalars['String']>;
  role_name_translated?: Maybe<Scalars['String']>;
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'role_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: Maybe<Array<Role_Bool_Exp>>;
  _not?: Maybe<Role_Bool_Exp>;
  _or?: Maybe<Array<Role_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  role_description?: Maybe<String_Comparison_Exp>;
  role_description_translated?: Maybe<String_Comparison_Exp>;
  role_name?: Maybe<String_Comparison_Exp>;
  role_name_translated?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint */
  RolePk = 'role_pk'
}

/** input type for incrementing numeric columns in table "role" */
export type Role_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  role_description?: Maybe<Scalars['String']>;
  role_description_translated?: Maybe<Scalars['String']>;
  role_name?: Maybe<Scalars['String']>;
  role_name_translated?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  id?: Maybe<Scalars['Int']>;
  role_description?: Maybe<Scalars['String']>;
  role_description_translated?: Maybe<Scalars['String']>;
  role_name?: Maybe<Scalars['String']>;
  role_name_translated?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  id?: Maybe<Scalars['Int']>;
  role_description?: Maybe<Scalars['String']>;
  role_description_translated?: Maybe<Scalars['String']>;
  role_name?: Maybe<Scalars['String']>;
  role_name_translated?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: Maybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  id?: Maybe<Order_By>;
  role_description?: Maybe<Order_By>;
  role_description_translated?: Maybe<Order_By>;
  role_name?: Maybe<Order_By>;
  role_name_translated?: Maybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleDescription = 'role_description',
  /** column name */
  RoleDescriptionTranslated = 'role_description_translated',
  /** column name */
  RoleName = 'role_name',
  /** column name */
  RoleNameTranslated = 'role_name_translated'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  role_description?: Maybe<Scalars['String']>;
  role_description_translated?: Maybe<Scalars['String']>;
  role_name?: Maybe<Scalars['String']>;
  role_name_translated?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'role_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleDescription = 'role_description',
  /** column name */
  RoleDescriptionTranslated = 'role_description_translated',
  /** column name */
  RoleName = 'role_name',
  /** column name */
  RoleNameTranslated = 'role_name_translated'
}

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'role_variance_fields';
  id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "campaign_log" */
  campaign_log: Array<Campaign_Log>;
  /** fetch aggregated fields from the table: "campaign_log" */
  campaign_log_aggregate: Campaign_Log_Aggregate;
  /** fetch data from the table: "campaign_log" using primary key columns */
  campaign_log_by_pk?: Maybe<Campaign_Log>;
  /** execute function "campaign_search" which returns "campaign" */
  campaign_search: Array<Campaign>;
  /** execute function "campaign_search" and query aggregates on result of table type "campaign" */
  campaign_search_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign_template_cross" */
  campaign_template_cross: Array<Campaign_Template_Cross>;
  /** fetch aggregated fields from the table: "campaign_template_cross" */
  campaign_template_cross_aggregate: Campaign_Template_Cross_Aggregate;
  /** fetch data from the table: "campaign_template_cross" using primary key columns */
  campaign_template_cross_by_pk?: Maybe<Campaign_Template_Cross>;
  /** fetch data from the table: "campaign_type" */
  campaign_type: Array<Campaign_Type>;
  /** fetch aggregated fields from the table: "campaign_type" */
  campaign_type_aggregate: Campaign_Type_Aggregate;
  /** fetch data from the table: "campaign_type" using primary key columns */
  campaign_type_by_pk?: Maybe<Campaign_Type>;
  /** fetch data from the table: "connection" */
  connection: Array<Connection>;
  /** fetch aggregated fields from the table: "connection" */
  connection_aggregate: Connection_Aggregate;
  /** fetch data from the table: "connection" using primary key columns */
  connection_by_pk?: Maybe<Connection>;
  /** fetch data from the table: "connection_type" */
  connection_type: Array<Connection_Type>;
  /** fetch aggregated fields from the table: "connection_type" */
  connection_type_aggregate: Connection_Type_Aggregate;
  /** fetch data from the table: "connection_type" using primary key columns */
  connection_type_by_pk?: Maybe<Connection_Type>;
  /** fetch data from the table: "country" */
  country: Array<Country>;
  /** fetch aggregated fields from the table: "country" */
  country_aggregate: Country_Aggregate;
  /** fetch data from the table: "country" using primary key columns */
  country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_user" */
  organization_user: Array<Organization_User>;
  /** fetch aggregated fields from the table: "organization_user" */
  organization_user_aggregate: Organization_User_Aggregate;
  /** fetch data from the table: "organization_user" using primary key columns */
  organization_user_by_pk?: Maybe<Organization_User>;
  /** fetch data from the table: "organization_user_role" */
  organization_user_role: Array<Organization_User_Role>;
  /** fetch aggregated fields from the table: "organization_user_role" */
  organization_user_role_aggregate: Organization_User_Role_Aggregate;
  /** fetch data from the table: "organization_user_role" using primary key columns */
  organization_user_role_by_pk?: Maybe<Organization_User_Role>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "template" */
  template: Array<Template>;
  /** fetch aggregated fields from the table: "template" */
  template_aggregate: Template_Aggregate;
  /** fetch data from the table: "template" using primary key columns */
  template_by_pk?: Maybe<Template>;
  /** execute function "template_search" which returns "template" */
  template_search: Array<Template>;
  /** execute function "template_search" and query aggregates on result of table type "template" */
  template_search_aggregate: Template_Aggregate;
  /** fetch data from the table: "template_type" */
  template_type: Array<Template_Type>;
  /** fetch aggregated fields from the table: "template_type" */
  template_type_aggregate: Template_Type_Aggregate;
  /** fetch data from the table: "template_type" using primary key columns */
  template_type_by_pk?: Maybe<Template_Type>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootCampaignArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCampaign_LogArgs = {
  distinct_on?: Maybe<Array<Campaign_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Log_Order_By>>;
  where?: Maybe<Campaign_Log_Bool_Exp>;
};


export type Subscription_RootCampaign_Log_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Log_Order_By>>;
  where?: Maybe<Campaign_Log_Bool_Exp>;
};


export type Subscription_RootCampaign_Log_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootCampaign_SearchArgs = {
  args: Campaign_Search_Args;
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_Search_AggregateArgs = {
  args: Campaign_Search_Args;
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_Template_CrossArgs = {
  distinct_on?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Template_Cross_Order_By>>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};


export type Subscription_RootCampaign_Template_Cross_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Template_Cross_Order_By>>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};


export type Subscription_RootCampaign_Template_Cross_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCampaign_TypeArgs = {
  distinct_on?: Maybe<Array<Campaign_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Type_Order_By>>;
  where?: Maybe<Campaign_Type_Bool_Exp>;
};


export type Subscription_RootCampaign_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Type_Order_By>>;
  where?: Maybe<Campaign_Type_Bool_Exp>;
};


export type Subscription_RootCampaign_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootConnectionArgs = {
  distinct_on?: Maybe<Array<Connection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connection_Order_By>>;
  where?: Maybe<Connection_Bool_Exp>;
};


export type Subscription_RootConnection_AggregateArgs = {
  distinct_on?: Maybe<Array<Connection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connection_Order_By>>;
  where?: Maybe<Connection_Bool_Exp>;
};


export type Subscription_RootConnection_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootConnection_TypeArgs = {
  distinct_on?: Maybe<Array<Connection_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connection_Type_Order_By>>;
  where?: Maybe<Connection_Type_Bool_Exp>;
};


export type Subscription_RootConnection_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Connection_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connection_Type_Order_By>>;
  where?: Maybe<Connection_Type_Bool_Exp>;
};


export type Subscription_RootConnection_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCountryArgs = {
  distinct_on?: Maybe<Array<Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Country_Order_By>>;
  where?: Maybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_AggregateArgs = {
  distinct_on?: Maybe<Array<Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Country_Order_By>>;
  where?: Maybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrganization_UserArgs = {
  distinct_on?: Maybe<Array<Organization_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Order_By>>;
  where?: Maybe<Organization_User_Bool_Exp>;
};


export type Subscription_RootOrganization_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Order_By>>;
  where?: Maybe<Organization_User_Bool_Exp>;
};


export type Subscription_RootOrganization_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrganization_User_RoleArgs = {
  distinct_on?: Maybe<Array<Organization_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Role_Order_By>>;
  where?: Maybe<Organization_User_Role_Bool_Exp>;
};


export type Subscription_RootOrganization_User_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Role_Order_By>>;
  where?: Maybe<Organization_User_Role_Bool_Exp>;
};


export type Subscription_RootOrganization_User_Role_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTemplateArgs = {
  distinct_on?: Maybe<Array<Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Order_By>>;
  where?: Maybe<Template_Bool_Exp>;
};


export type Subscription_RootTemplate_AggregateArgs = {
  distinct_on?: Maybe<Array<Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Order_By>>;
  where?: Maybe<Template_Bool_Exp>;
};


export type Subscription_RootTemplate_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTemplate_SearchArgs = {
  args: Template_Search_Args;
  distinct_on?: Maybe<Array<Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Order_By>>;
  where?: Maybe<Template_Bool_Exp>;
};


export type Subscription_RootTemplate_Search_AggregateArgs = {
  args: Template_Search_Args;
  distinct_on?: Maybe<Array<Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Order_By>>;
  where?: Maybe<Template_Bool_Exp>;
};


export type Subscription_RootTemplate_TypeArgs = {
  distinct_on?: Maybe<Array<Template_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Type_Order_By>>;
  where?: Maybe<Template_Type_Bool_Exp>;
};


export type Subscription_RootTemplate_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Template_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Template_Type_Order_By>>;
  where?: Maybe<Template_Type_Bool_Exp>;
};


export type Subscription_RootTemplate_Type_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "template" */
export type Template = {
  __typename?: 'template';
  /** An array relationship */
  campaign_template_crosses: Array<Campaign_Template_Cross>;
  /** An aggregate relationship */
  campaign_template_crosses_aggregate: Campaign_Template_Cross_Aggregate;
  changed_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  organization_id: Scalars['Int'];
  specification?: Maybe<Scalars['jsonb']>;
  template_name?: Maybe<Scalars['String']>;
  template_preview?: Maybe<Scalars['String']>;
  template_type_id: Scalars['Int'];
};


/** columns and relationships of "template" */
export type TemplateCampaign_Template_CrossesArgs = {
  distinct_on?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Template_Cross_Order_By>>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};


/** columns and relationships of "template" */
export type TemplateCampaign_Template_Crosses_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Template_Cross_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Template_Cross_Order_By>>;
  where?: Maybe<Campaign_Template_Cross_Bool_Exp>;
};


/** columns and relationships of "template" */
export type TemplateSpecificationArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "template" */
export type Template_Aggregate = {
  __typename?: 'template_aggregate';
  aggregate?: Maybe<Template_Aggregate_Fields>;
  nodes: Array<Template>;
};

/** aggregate fields of "template" */
export type Template_Aggregate_Fields = {
  __typename?: 'template_aggregate_fields';
  avg?: Maybe<Template_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Template_Max_Fields>;
  min?: Maybe<Template_Min_Fields>;
  stddev?: Maybe<Template_Stddev_Fields>;
  stddev_pop?: Maybe<Template_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Template_Stddev_Samp_Fields>;
  sum?: Maybe<Template_Sum_Fields>;
  var_pop?: Maybe<Template_Var_Pop_Fields>;
  var_samp?: Maybe<Template_Var_Samp_Fields>;
  variance?: Maybe<Template_Variance_Fields>;
};


/** aggregate fields of "template" */
export type Template_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Template_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Template_Append_Input = {
  specification?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Template_Avg_Fields = {
  __typename?: 'template_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  template_type_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "template". All fields are combined with a logical 'AND'. */
export type Template_Bool_Exp = {
  _and?: Maybe<Array<Template_Bool_Exp>>;
  _not?: Maybe<Template_Bool_Exp>;
  _or?: Maybe<Array<Template_Bool_Exp>>;
  campaign_template_crosses?: Maybe<Campaign_Template_Cross_Bool_Exp>;
  changed_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  specification?: Maybe<Jsonb_Comparison_Exp>;
  template_name?: Maybe<String_Comparison_Exp>;
  template_preview?: Maybe<String_Comparison_Exp>;
  template_type_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "template" */
export enum Template_Constraint {
  /** unique or primary key constraint */
  TemplatePk = 'template_pk'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Template_Delete_At_Path_Input = {
  specification?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Template_Delete_Elem_Input = {
  specification?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Template_Delete_Key_Input = {
  specification?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "template" */
export type Template_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  template_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "template" */
export type Template_Insert_Input = {
  campaign_template_crosses?: Maybe<Campaign_Template_Cross_Arr_Rel_Insert_Input>;
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  specification?: Maybe<Scalars['jsonb']>;
  template_name?: Maybe<Scalars['String']>;
  template_preview?: Maybe<Scalars['String']>;
  template_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Template_Max_Fields = {
  __typename?: 'template_max_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  template_name?: Maybe<Scalars['String']>;
  template_preview?: Maybe<Scalars['String']>;
  template_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Template_Min_Fields = {
  __typename?: 'template_min_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  template_name?: Maybe<Scalars['String']>;
  template_preview?: Maybe<Scalars['String']>;
  template_type_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "template" */
export type Template_Mutation_Response = {
  __typename?: 'template_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Template>;
};

/** input type for inserting object relation for remote table "template" */
export type Template_Obj_Rel_Insert_Input = {
  data: Template_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Template_On_Conflict>;
};

/** on_conflict condition type for table "template" */
export type Template_On_Conflict = {
  constraint: Template_Constraint;
  update_columns?: Array<Template_Update_Column>;
  where?: Maybe<Template_Bool_Exp>;
};

/** Ordering options when selecting data from "template". */
export type Template_Order_By = {
  campaign_template_crosses_aggregate?: Maybe<Campaign_Template_Cross_Aggregate_Order_By>;
  changed_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  specification?: Maybe<Order_By>;
  template_name?: Maybe<Order_By>;
  template_preview?: Maybe<Order_By>;
  template_type_id?: Maybe<Order_By>;
};

/** primary key columns input for table: template */
export type Template_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Template_Prepend_Input = {
  specification?: Maybe<Scalars['jsonb']>;
};

export type Template_Search_Args = {
  _filter?: Maybe<Scalars['json']>;
};

/** select columns of table "template" */
export enum Template_Select_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Specification = 'specification',
  /** column name */
  TemplateName = 'template_name',
  /** column name */
  TemplatePreview = 'template_preview',
  /** column name */
  TemplateTypeId = 'template_type_id'
}

/** input type for updating data in table "template" */
export type Template_Set_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  specification?: Maybe<Scalars['jsonb']>;
  template_name?: Maybe<Scalars['String']>;
  template_preview?: Maybe<Scalars['String']>;
  template_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Template_Stddev_Fields = {
  __typename?: 'template_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  template_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Template_Stddev_Pop_Fields = {
  __typename?: 'template_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  template_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Template_Stddev_Samp_Fields = {
  __typename?: 'template_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  template_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Template_Sum_Fields = {
  __typename?: 'template_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  template_type_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "template_type" */
export type Template_Type = {
  __typename?: 'template_type';
  id: Scalars['Int'];
  order_by: Scalars['Int'];
  template_type_description?: Maybe<Scalars['String']>;
  template_type_description_translated?: Maybe<Scalars['jsonb']>;
  template_type_name?: Maybe<Scalars['String']>;
  template_type_name_translated?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "template_type" */
export type Template_TypeTemplate_Type_Description_TranslatedArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "template_type" */
export type Template_TypeTemplate_Type_Name_TranslatedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "template_type" */
export type Template_Type_Aggregate = {
  __typename?: 'template_type_aggregate';
  aggregate?: Maybe<Template_Type_Aggregate_Fields>;
  nodes: Array<Template_Type>;
};

/** aggregate fields of "template_type" */
export type Template_Type_Aggregate_Fields = {
  __typename?: 'template_type_aggregate_fields';
  avg?: Maybe<Template_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Template_Type_Max_Fields>;
  min?: Maybe<Template_Type_Min_Fields>;
  stddev?: Maybe<Template_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Template_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Template_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Template_Type_Sum_Fields>;
  var_pop?: Maybe<Template_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Template_Type_Var_Samp_Fields>;
  variance?: Maybe<Template_Type_Variance_Fields>;
};


/** aggregate fields of "template_type" */
export type Template_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Template_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Template_Type_Append_Input = {
  template_type_description_translated?: Maybe<Scalars['jsonb']>;
  template_type_name_translated?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Template_Type_Avg_Fields = {
  __typename?: 'template_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "template_type". All fields are combined with a logical 'AND'. */
export type Template_Type_Bool_Exp = {
  _and?: Maybe<Array<Template_Type_Bool_Exp>>;
  _not?: Maybe<Template_Type_Bool_Exp>;
  _or?: Maybe<Array<Template_Type_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  order_by?: Maybe<Int_Comparison_Exp>;
  template_type_description?: Maybe<String_Comparison_Exp>;
  template_type_description_translated?: Maybe<Jsonb_Comparison_Exp>;
  template_type_name?: Maybe<String_Comparison_Exp>;
  template_type_name_translated?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "template_type" */
export enum Template_Type_Constraint {
  /** unique or primary key constraint */
  TemplateTypePk = 'template_type_pk'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Template_Type_Delete_At_Path_Input = {
  template_type_description_translated?: Maybe<Array<Scalars['String']>>;
  template_type_name_translated?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Template_Type_Delete_Elem_Input = {
  template_type_description_translated?: Maybe<Scalars['Int']>;
  template_type_name_translated?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Template_Type_Delete_Key_Input = {
  template_type_description_translated?: Maybe<Scalars['String']>;
  template_type_name_translated?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "template_type" */
export type Template_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "template_type" */
export type Template_Type_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  template_type_description?: Maybe<Scalars['String']>;
  template_type_description_translated?: Maybe<Scalars['jsonb']>;
  template_type_name?: Maybe<Scalars['String']>;
  template_type_name_translated?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Template_Type_Max_Fields = {
  __typename?: 'template_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  template_type_description?: Maybe<Scalars['String']>;
  template_type_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Template_Type_Min_Fields = {
  __typename?: 'template_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  template_type_description?: Maybe<Scalars['String']>;
  template_type_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "template_type" */
export type Template_Type_Mutation_Response = {
  __typename?: 'template_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Template_Type>;
};

/** on_conflict condition type for table "template_type" */
export type Template_Type_On_Conflict = {
  constraint: Template_Type_Constraint;
  update_columns?: Array<Template_Type_Update_Column>;
  where?: Maybe<Template_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "template_type". */
export type Template_Type_Order_By = {
  id?: Maybe<Order_By>;
  order_by?: Maybe<Order_By>;
  template_type_description?: Maybe<Order_By>;
  template_type_description_translated?: Maybe<Order_By>;
  template_type_name?: Maybe<Order_By>;
  template_type_name_translated?: Maybe<Order_By>;
};

/** primary key columns input for table: template_type */
export type Template_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Template_Type_Prepend_Input = {
  template_type_description_translated?: Maybe<Scalars['jsonb']>;
  template_type_name_translated?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "template_type" */
export enum Template_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderBy = 'order_by',
  /** column name */
  TemplateTypeDescription = 'template_type_description',
  /** column name */
  TemplateTypeDescriptionTranslated = 'template_type_description_translated',
  /** column name */
  TemplateTypeName = 'template_type_name',
  /** column name */
  TemplateTypeNameTranslated = 'template_type_name_translated'
}

/** input type for updating data in table "template_type" */
export type Template_Type_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
  template_type_description?: Maybe<Scalars['String']>;
  template_type_description_translated?: Maybe<Scalars['jsonb']>;
  template_type_name?: Maybe<Scalars['String']>;
  template_type_name_translated?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Template_Type_Stddev_Fields = {
  __typename?: 'template_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Template_Type_Stddev_Pop_Fields = {
  __typename?: 'template_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Template_Type_Stddev_Samp_Fields = {
  __typename?: 'template_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Template_Type_Sum_Fields = {
  __typename?: 'template_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "template_type" */
export enum Template_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderBy = 'order_by',
  /** column name */
  TemplateTypeDescription = 'template_type_description',
  /** column name */
  TemplateTypeDescriptionTranslated = 'template_type_description_translated',
  /** column name */
  TemplateTypeName = 'template_type_name',
  /** column name */
  TemplateTypeNameTranslated = 'template_type_name_translated'
}

/** aggregate var_pop on columns */
export type Template_Type_Var_Pop_Fields = {
  __typename?: 'template_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Template_Type_Var_Samp_Fields = {
  __typename?: 'template_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Template_Type_Variance_Fields = {
  __typename?: 'template_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['Float']>;
};

/** update columns of table "template" */
export enum Template_Update_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Specification = 'specification',
  /** column name */
  TemplateName = 'template_name',
  /** column name */
  TemplatePreview = 'template_preview',
  /** column name */
  TemplateTypeId = 'template_type_id'
}

/** aggregate var_pop on columns */
export type Template_Var_Pop_Fields = {
  __typename?: 'template_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  template_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Template_Var_Samp_Fields = {
  __typename?: 'template_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  template_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Template_Variance_Fields = {
  __typename?: 'template_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  template_type_id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  changed_at?: Maybe<Scalars['timestamptz']>;
  external_user_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  initials?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  organization_users: Array<Organization_User>;
  /** An aggregate relationship */
  organization_users_aggregate: Organization_User_Aggregate;
  phone?: Maybe<Scalars['String']>;
  user_email: Scalars['String'];
  /** A computed field, executes function "user_hasura_session" */
  user_hasura_session?: Maybe<Scalars['jsonb']>;
  /** A computed field, executes function "user_organizations" */
  user_organizations?: Maybe<Array<Organization>>;
};


/** columns and relationships of "user" */
export type UserOrganization_UsersArgs = {
  distinct_on?: Maybe<Array<Organization_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Order_By>>;
  where?: Maybe<Organization_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserOrganization_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_User_Order_By>>;
  where?: Maybe<Organization_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Hasura_SessionArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "user" */
export type UserUser_OrganizationsArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  changed_at?: Maybe<Timestamptz_Comparison_Exp>;
  external_user_id?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initials?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  organization_users?: Maybe<Organization_User_Bool_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  user_email?: Maybe<String_Comparison_Exp>;
  user_hasura_session?: Maybe<Jsonb_Comparison_Exp>;
  user_organizations?: Maybe<Organization_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  IxUserUserEmail = 'ix_user_user_email',
  /** unique or primary key constraint */
  PkUser = 'pk_user',
  /** unique or primary key constraint */
  UniqueUserUserEmail = 'unique_user_user_email'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  external_user_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initials?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  organization_users?: Maybe<Organization_User_Arr_Rel_Insert_Input>;
  phone?: Maybe<Scalars['String']>;
  user_email?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  external_user_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initials?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  user_email?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  changed_at?: Maybe<Scalars['timestamptz']>;
  external_user_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initials?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  user_email?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  changed_at?: Maybe<Order_By>;
  external_user_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initials?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  organization_users_aggregate?: Maybe<Organization_User_Aggregate_Order_By>;
  phone?: Maybe<Order_By>;
  user_email?: Maybe<Order_By>;
  user_hasura_session?: Maybe<Order_By>;
  user_organizations_aggregate?: Maybe<Organization_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  ExternalUserId = 'external_user_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  Initials = 'initials',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UserEmail = 'user_email'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  changed_at?: Maybe<Scalars['timestamptz']>;
  external_user_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initials?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  user_email?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  ExternalUserId = 'external_user_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  Initials = 'initials',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UserEmail = 'user_email'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};
