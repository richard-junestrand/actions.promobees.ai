import { ActionOutputError, Nullable } from "../handler";
import { customError } from "../util/errorUtil";

export const locales=['en','sv'];
export const isValidLocale = (val: string) => locales.includes(val);

export const checkLocale = async (intl,section: string, val: string, err: number): Promise<Nullable<ActionOutputError>> => {
  if (!await isValidLocale(val)) {
      return await customError(intl,err, section);
  }

  return null;
}

export const checkTranslated = async (intl, section: string, val: any, err: number): Promise<Nullable<ActionOutputError>> => {
  return Promise.all(Object.keys(val || {}).map(async r => {
      const er= await checkLocale(intl, section, r, err);
      if(er){
          return Promise.reject(er)
      }
  })).then(r => null).catch(er => {
      return er;
  })
}