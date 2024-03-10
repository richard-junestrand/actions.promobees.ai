import { MutationDefinition } from "../../db"
import { ActionOutputError, Nullable, SearchInput, returnValue } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { IntlShape } from '@formatjs/intl';
import { getAppToken, searchInterests } from "../../util/metaUtil";

export type MetaInterestSearchInput = SearchInput

const metaInterestSearchValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: MetaInterestSearchInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "metaInterestSearch"
  //
  let ret=[]
  if(!!data.keyword) {
    const errOrToken = await getAppToken(intl, section);
    if (errOrToken.error) {
      return errOrToken.error
    }
    const token = errOrToken.data.access_token
    //
    const errOrInterests = await searchInterests(intl, section, token, data.keyword);
    if (errOrInterests.error) {
      return errOrInterests.error
    }
    ret=errOrInterests.data.data
  }
  return returnValue(def, {
    data: ret
  });
}

export default metaInterestSearchValidateAndPrepare