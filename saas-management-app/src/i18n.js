import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


const resources = {
  tr: {
    translation: {
      giriş: 'Giriş'
    }
  },
  en: {
    translation: {
      login: 'Login'
    }
  }
}

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr",
    supportedLngs: ['en', 'tr'],
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/saas-management-app/public/translation/translation.json'
    },
  });

export default i18n;