import { ActionOutputError, Nullable, UpdateInput } from '../../handler';
import { HasuraSession } from '../../handler/session';
import { MutationDefinition } from '../../db';
import { checkId } from './util';
import { IntlShape } from '@formatjs/intl';
import { Template } from '../../db/generated';
import { TemplateQueryType } from './query';
import { customError } from '../../util/errorUtil';

export type TemplateDeleteInput = UpdateInput<Template>

const templateDeleteValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: TemplateDeleteInput, def: MutationDefinition, session: HasuraSession, validated: boolean = false): Promise<Nullable<ActionOutputError>> => {
  const section = "templateDelete";
  //
  const err = await checkId(intl, isDev, section, data, session, TemplateQueryType.Delete);
  if (err) {
    return err;
  }
  if (data.db.campaign_template_crosses_aggregate.aggregate.count > 0) {
    return await customError(intl,120070, section)
  }
  //
  const deleteCall = await def.newCall();
  deleteCall.parameter = `$id_${deleteCall.idx}: Int!`;
  deleteCall.command = `
    data: delete_template_by_pk(id: $id_${deleteCall.idx}){
      id
    }`;
  const deleteVariable = {};
  deleteVariable[`id_${deleteCall.idx}`] = data.id;
  deleteCall.variable = deleteVariable;
  return null;
};
export default templateDeleteValidateAndPrepare;