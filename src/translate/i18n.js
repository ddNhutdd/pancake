import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import VItranslate from "./locales/VItranslation.json";
import Entranslate from "./locales/ENtranslation.json";

export const availableLanguage = {
  vi: "vi",
};

const resources = {
  vi: {
    translation: VItranslate,
  },
  en: {
    translation: Entranslate,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: availableLanguage.en,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
