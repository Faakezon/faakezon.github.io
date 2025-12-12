import type { Dictionary, Locale } from "./i18n-types";
import sv from "../locales/sv.json";
import en from "../locales/en.json"; // if you have it

export const locales: Locale[] = ["sv", "en"];

export const dictionaries: Record<Locale, Dictionary> = {
  sv,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
