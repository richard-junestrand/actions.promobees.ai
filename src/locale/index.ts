import { createIntl, createIntlCache } from "@formatjs/intl";
import { isValidLocale } from "./util";

export const loadLocale = async (locale: string = 'en') => {
  let thelocale = locale || 'en';
  if(!isValidLocale(thelocale)){
    thelocale="en";
  }
  const messages = await import(`../locale/${thelocale}`);
  
  const cache = createIntlCache();
  const intl = createIntl(
    {
      // Locale of the application
      locale: thelocale,
      messages: messages.default,
    },
    cache
  );
  return intl;
}

export type TranslationInput = {
  [key: string]: string
};