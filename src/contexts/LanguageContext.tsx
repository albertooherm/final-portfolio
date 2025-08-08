"use client";

import { createContext, useContext, useEffect, useState } from "react";
import enTranslations from "@/i18n/locales/en.json";
import esTranslations from "@/i18n/locales/es.json";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string | unknown;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("es");
  const [translations, setTranslations] =
    useState<Record<string, unknown>>(esTranslations);

  useEffect(() => {
    // Check for saved language preference or default to Spanish
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    // Default is already "es" so no need to change
  }, []);

  useEffect(() => {
    // Set translations based on current language
    const newTranslations = language === "en" ? enTranslations : esTranslations;
    setTranslations(newTranslations);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "es" : "en"));
  };

  const t = (key: string): string | unknown => {
    const keys = key.split(".");
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return value; // Return the actual value (string, array, object, etc.)
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
