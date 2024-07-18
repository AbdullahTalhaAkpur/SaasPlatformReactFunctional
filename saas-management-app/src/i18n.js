import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


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
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", // Default Language
    supportedLngs: ['en', 'tr'],
    fallbackLng: 'tr',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;