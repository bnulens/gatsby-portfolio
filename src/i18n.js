import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

import en from "./locales/en.json"
import nl from "./locales/nl.json"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "nl",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
    debug: true,
    resources: {
      en: {
        translation: en,
      },
      nl: {
        translation: nl,
      },
    },
  })

export default i18n