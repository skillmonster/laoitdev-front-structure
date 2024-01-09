import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') || 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: {},
    debug: import.meta.env.MODE === 'development',
    returnNull: true,
    load: 'all',
    backend: {
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
      ],
    },
  });
