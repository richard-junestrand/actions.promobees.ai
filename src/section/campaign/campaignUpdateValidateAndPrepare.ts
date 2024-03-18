import { ActionOutputError, HandlerOptions, Nullable, RelListInput, UpdateInput, WithId } from '../../handler';
import { CampaignInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkName, checkCampaignType, checkId, checkActive, checkData, checkConnection, checkBudget } from './util';
import { IntlShape } from '@formatjs/intl';
import { Campaign } from '../../db/generated';
import { changedSet } from '../../db/util';
import campaignTemplateCrossUpdateValidateAndPrepare, { CampaignTemplateCrossUpdateInput } from '../campaignTemplateCross/campaignTemplateCrossUpdateValidateAndPrepare';
import campaignTemplateCrossInsertValidateAndPrepare, { CampaignTemplateCrossInsertInput } from '../campaignTemplateCross/campaignTemplateCrossInsertValidateAndPrepare';
import { checkList } from '../../util/dataUtil';
import { CampaignQueryType } from './query';
import { ConnectionQueryType } from '../connection/query';
import { customError } from '../../util/errorUtil';

export type CampaignUpdateInput = CampaignInput & UpdateInput<Campaign> & {
  campaign_template_crosses?: RelListInput<CampaignTemplateCrossUpdateInput | CampaignTemplateCrossInsertInput>
}

const campaignUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: CampaignUpdateInput, def: MutationDefinition,
  session: HasuraSession, validated=false, options?: HandlerOptions & {
    template_changed: boolean
  }): Promise<Nullable<ActionOutputError>> => {
  const section = "campaignUpdate";
  //
  if(!validated) {
    const err = await checkId(intl, isDev, section, data, session, CampaignQueryType.Update);
    if (err) {
      return err;
    }
  }
  //
  const updateCall = await def.newCall();
  let updateSet = changedSet();
  let connectionType1 = data.db?.connection?.connection_type_id;
  let connectionType2 = data.db?.campaign_type?.connection_type_id;
  //
  if (data.hasOwnProperty('campaign_name')) {
    const err = await checkName(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, campaign_name: data.campaign_name };
  }
  //
  if (data.hasOwnProperty('campaign_type_id')) {
    const errOrType = await checkCampaignType(intl, isDev, section, { campaign_type_id: data.campaign_type_id });
    if (errOrType.error) {
      return errOrType.error;
    }
    connectionType2 = errOrType.data.connection_type_id
    updateSet = { ...updateSet, campaign_type_id: data.campaign_type_id };
  }
  //
  if (data.hasOwnProperty('is_active')) {
    const err = await checkActive(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, is_active: data.is_active };
  }
  //
  if (data.hasOwnProperty('source')) {
    updateSet = { ...updateSet, source: data.source };
  }
  let dataUpdated = false
  if (data.hasOwnProperty('data')) {
    if (options?.template_changed) {
      updateSet = { ...updateSet, data: data.data };
      await logUpdate(def, data, LogType.TemplateUpdate)
    } else {
      dataUpdated = checkData(data, data.db.data);
      if (dataUpdated) {
        updateSet = { ...updateSet, data: data.data };
      }
    }

  }
  let budgetUpdated = false
  if (data.hasOwnProperty('budget')) {
    budgetUpdated = checkBudget(data, data.db.budget);
    if (budgetUpdated) {
      updateSet = { ...updateSet, budget: data.budget };
    }
  }
  if (dataUpdated || budgetUpdated) {
    await logUpdate(def, data)
  }
  if (data.hasOwnProperty('specification')) {
    updateSet = { ...updateSet, specification: data.specification };
  }

  if (data.hasOwnProperty('connection_id')) {
    const errOrConnection = await checkConnection(intl, isDev, section, { connection_id: data.connection_id },
      ConnectionQueryType.Default, undefined, data.db.organization_id);
    if (errOrConnection.error) {
      return errOrConnection.error;
    }
    connectionType1 = errOrConnection.data.connection_type_id
    updateSet = { ...updateSet, connection_id: data.connection_id };
  }
  //
  if (connectionType1 !== connectionType2) {
    return await customError(intl, 100110, section)
  }
  //
  if (data.hasOwnProperty('campaign_template_crosses')) {
    const rows = data.campaign_template_crosses.data;
    //
    const deleteRowsCall = await def.newCall();
    // Validate the children
    const err = await checkList(intl, section, rows, (r, i) => {
      r.campaign_id = data.id;
      if (r.hasOwnProperty('id')) {
        return campaignTemplateCrossUpdateValidateAndPrepare(intl, isDev, r as CampaignTemplateCrossUpdateInput, def, session, data.db.organization_id);

      } else {
        return campaignTemplateCrossInsertValidateAndPrepare(intl, isDev, r as CampaignTemplateCrossInsertInput, def, session, data.db.organization_id);
      }
    })
    if (err) {
      return err;
    }
    //
    const rowIds = rows.filter(r => r.hasOwnProperty('id')).map(r => (<CampaignTemplateCrossUpdateInput>r).id);

    deleteRowsCall.parameter = `$ids_${deleteRowsCall.idx}: [Int!]`;
    deleteRowsCall.command = `
        data_${deleteRowsCall.idx}: delete_campaign_template_cross(where: {campaign_id: {_eq: $id_${updateCall.idx}}, id: {_nin: $ids_${deleteRowsCall.idx}}}) {
          affected_rows
        }`;
    const variable = {};
    variable[`ids_${deleteRowsCall.idx}`] = rowIds;
    deleteRowsCall.variable = variable;
  }
  //
  updateCall.parameter = `$id_${updateCall.idx}: Int!, $p_${updateCall.idx}: campaign_set_input`;
  updateCall.command = `
    data${updateCall.dataLabel(options?.not_return_data || false)}: update_campaign_by_pk(pk_columns: {id: $id_${updateCall.idx}}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {};
  updateVariable[`id_${updateCall.idx}`] = data.id;
  updateVariable[`p_${updateCall.idx}`] = updateSet;
  updateCall.variable = updateVariable;
  return null;
};
export default campaignUpdateValidateAndPrepare;

enum LogType {
  DataUpdate=1,
  Publish=2,
  TemplateUpdate=3
}
const logUpdate = async (def: MutationDefinition, data: WithId, type=LogType.DataUpdate) => {
  const call = await def.newCall();
  call.parameter = `$p_${call.idx}: campaign_log_insert_input!`;
  call.command = `
      data_${call.idx}: insert_campaign_log_one(object: $p_${call.idx}) {
        id
      }`;
  const variable = {};
  variable[`p_${call.idx}`] = {
    campaign_id: data.id,
    log_type: type
  };
  call.variable = variable;
}