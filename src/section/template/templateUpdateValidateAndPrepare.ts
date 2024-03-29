import { ActionOutputError, Nullable, UpdateInput } from '../../handler';
import { TemplateInput } from '.';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkName, checkTemplateType, checkId, checkImagePreview } from './util';
import { IntlShape } from '@formatjs/intl';
import { Campaign_Template_Cross, Template } from '../../db/generated';
import { changedSet } from '../../db/util';
import { isDeepEqual } from '../../util/dataUtil';
import { TemplateQueryType, getTemplateCampaigns } from './query';
import { customError } from '../../util/errorUtil';
import { ErrorDatabase } from '../../util/stringUtil';
import moment from 'moment';
import campaignUpdateValidateAndPrepare from '../campaign/campaignUpdateValidateAndPrepare';

export type TemplateUpdateInput = TemplateInput & UpdateInput<Template>

const templateUpdateValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: TemplateUpdateInput, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "templateUpdate";
  //
  const err = await checkId(intl, isDev, section, data, session, TemplateQueryType.Update);
  if (err) {
    return err;
  }
  //
  const updateCall = await def.newCall();
  let updateSet = changedSet();
  //
  if (data.hasOwnProperty('template_name')) {
    const err = await checkName(intl, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, template_name: data.template_name };
  }
  //
  if (data.hasOwnProperty('template_type_id')) {
    const err = await checkTemplateType(intl, isDev, section, data);
    if (err) {
      return err;
    }
    updateSet = { ...updateSet, template_type_id: data.template_type_id };
  }
  //
  if (data.hasOwnProperty('specification')) {
    updateSet = { ...updateSet, specification: data.specification };
    if (!isDeepEqual(data.specification, data.db.specification)) {
      const errOrUrl = await checkImagePreview(intl, section, data, data.db.template_preview);
      if (errOrUrl.error) {
        return errOrUrl.error
      }
      updateSet = { ...updateSet, template_preview: errOrUrl.data };
      //
      const { errors, data: dataCampaigns } = await getTemplateCampaigns(data.id)
      if (errors) {
        isDev && console.log(errors[0]);
        return await customError(intl, 0, section, [intl.formatMessage({ id: ErrorDatabase })]);
      }
      //
      const err = await Promise.all(dataCampaigns.data.map(async (r: Campaign_Template_Cross) => {
        const { data: campaignData, ...others } = r.campaign.data
        if (campaignData.some(r => r.template_id === data.id)) {
          //update campaign data
          const now = moment.utc()
          const newCampaignData = {
            ...others,
            data: campaignData.map(r => {
              if (r.template_id === data.id) {
                return {
                  ...r,
                  changed_at: now
                }
              }
              return r
            }),
            changed_at: now
          }
          const err = await campaignUpdateValidateAndPrepare(intl, isDev, { id: r.campaign.id, data: newCampaignData }, def, session, true, {
            not_return_data: true,
            template_changed: true
          });
          if (err) {
            return Promise.reject(err);
          }
        }
      })).then(r => null)
        .catch(error => {
          return error
        });
      if (err) {
        return err
      }
    }
  }
  //
  updateCall.parameter = `$id: Int!, $p_${updateCall.idx}: template_set_input`;
  updateCall.command = `
    data: update_template_by_pk(pk_columns: {id: $id}, _set: $p_${updateCall.idx}) {
      id
    }`;
  const updateVariable = {};
  updateVariable['id'] = data.id;
  updateVariable[`p_${updateCall.idx}`] = updateSet;
  updateCall.variable = updateVariable;
  return null;
};
export default templateUpdateValidateAndPrepare;