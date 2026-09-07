import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        if (typeof window === "undefined") return "es";
        const saved = window.localStorage.getItem("lang");
        if (saved === "es" || saved === "en") return saved;

        // Si no hay preferencia guardada, usamos el idioma del navegador.
        const browserLang = window.navigator.language?.slice(0, 2);
        return browserLang === "en" ? "en" : "es";
    });

    useEffect(() => {
        window.localStorage.setItem("lang", language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () =>
        setLanguage((prev) => (prev === "es" ? "en" : "es"));

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
    }
    return context;
}