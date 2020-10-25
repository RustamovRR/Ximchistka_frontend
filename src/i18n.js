import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRus from './translationRus.json'
import translationUzb from './translationUzb.json'

const resources = {
    uzb: {
        translation: translationUzb
    },
    rus: {
        translation: translationRus
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'uzb',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;