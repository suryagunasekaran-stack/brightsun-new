import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Welcome": "Welcome to Our Website!",
            // ... other English translations
        }
    },
    ja: {
        translation: {
            "Welcome": "私たちのウェブサイトへようこそ！",
            // ... other Japanese translations
        }
    },
    ta: {
        translation: {
            "Welcome": "எங்கள் வலைத்தளத்திற்கு வரவேற்கின்றோம்!",
            // ... other Tamil translations
        }
    },
    ms: {
        translation: {
            "Welcome": "Selamat Datang ke Laman Web Kami!",
            // ... other Malay translations
        }
    },
    zh: {
        translation: {
            "Welcome": "欢迎访问我们的网站！",
            // ... other Chinese translations
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;