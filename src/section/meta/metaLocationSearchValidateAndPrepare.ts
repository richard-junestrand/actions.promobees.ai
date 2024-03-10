import { MutationDefinition } from "../../db"
import { ActionOutputError, Nullable, SearchInput, returnValue } from "../../handler"
import { HasuraSession } from "../../handler/session"
import { IntlShape } from '@formatjs/intl';
import { getAppToken, searchLocations } from "../../util/metaUtil";

export type MetaLocationSearchInput = SearchInput

const metaLocationSearchValidateAndPrepare = async (intl: IntlShape<string>, isDev: boolean, data: MetaLocationSearchInput,
  def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
  const section = "metaLocationSearch"
  //
  let ret=[]
  if(!!data.keyword) {
    const errOrToken = await getAppToken(intl, section);
    if (errOrToken.error) {
      return errOrToken.error
    }
    const token = errOrToken.data.access_token
    //
    const errOrLocations = await searchLocations(intl, section, token, data.keyword);
    if (errOrLocations.error) {
      return errOrLocations.error
    }
    ret=errOrLocations.data.data
  }
  return returnValue(def, {
    data: ret
  });
}

export default metaLocationSearchValidateAndPrepare