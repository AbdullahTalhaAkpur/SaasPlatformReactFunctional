import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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

  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    i18n.changeLanguage(savedLanguage);
  }

export default i18n;