import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./locales/enTranslation.json')
      },
      tr: {
        translation: require('./locales/trTranslation.json')
      }
    },
    lng: localStorage.getItem('language') || 'tr', // Default language from localStorage or 'tr'
    fallbackLng: 'tr',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;