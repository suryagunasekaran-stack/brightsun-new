import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Welcome": "Ship Repair, We Made It Simple.",
            "Brou": "Brouchere",
            "Welcome2": "Brightsun is Trustworthy for Predictive, Preventive, Shutdown Maintenance and Repairs towards the Safe Sailing of Marine Vessel's all around the Globe.",
            // ... other English translations
        }
    },
    ja: {
        translation: {
            "Welcome": "船の修理、私たちはそれをシンプルにしました。",
            "Brou": "パンフレット",
            "Welcome2": "Brightsunは、世界中の海洋船舶の安全な航行のための予測、予防、シャットダウンの保守および修理に信頼できます。",
            // ... other Japanese translations
        }
    },
    ta: {
        translation: {
            "Welcome": "கப்பல் பழுது பார்த்தல், நாங்கள் அதை எளிதாக்கினோம்.",
            "Brou": "புக்கிளேட்",
            "Welcome2": "உலகம் முழுவதும் கடல் கப்பல்களின் பாதுகாப்பான பயணத்திற்கு முன்கணிப்பு, தடுப்பு, ஷட்டுடவுன் பராமரிப்பு மற்றும் பழுது பார்த்தல் கிடைக்கும் Brightsun நம்பகமானது.",
            // ... other Tamil translations
        }
    },
    ms: {
        translation: {
            "Welcome": "Pembaikan Kapal, Kami Buat Ia Mudah.",
            "Brou": "Brosur",
            "Welcome2": "Brightsun adalah Dipercayai untuk Penyelenggaraan dan Pembaikan yang Dapat Diprediksi, Pencegahan, Penutupan terhadap Pelayaran Selamat Kapal Laut di seluruh Dunia.",
            // ... other Malay translations
        }
    },
    zh: {
        translation: {
            "Welcome": "船舶修理，我们让它变得简单",
            "Brou": "手册",
            "Welcome2": "Brightsun在全球范围内都被认为是可靠的，能够预测、预防、关闭维护和修理，确保海上船舶的安全航行。",
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