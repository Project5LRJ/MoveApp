import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import nl from './nl.json';
  
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    nl: nl,
  },
  interpolation: {
    escapeValue: false
  }
});
  
export default i18n;