import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ja from "./locales/ja";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: { ja: { translation: ja }, en: { translation: en } },
		fallbackLng: "ja",
		supportedLngs: ["ja", "en"],
		interpolation: { escapeValue: false },
	});

export default i18n;
