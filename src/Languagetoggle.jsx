import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import "./LanguageToggle.css";

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();
    const isEs = language === "es";

    return (
        <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={isEs ? "Switch to English" : "Cambiar a español"}
        >
            <motion.span
                className="lang-toggle-thumb"
                animate={{ x: isEs ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
            />
            <span className={`lang-toggle-option${isEs ? " is-active" : ""}`}>
                ES
            </span>
            <span className={`lang-toggle-option${!isEs ? " is-active" : ""}`}>
                EN
            </span>
        </button>
    );
}