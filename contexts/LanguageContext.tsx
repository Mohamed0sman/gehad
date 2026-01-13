"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to English for the new website
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Only try to read from localStorage after component mounts (client-side)
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("language") as Language | null;
        if (saved && (saved === "en" || saved === "ar")) {
          setLanguageState(saved);
        }
      } catch (e) {
        // Fallback to English if localStorage fails
        setLanguageState("en");
      }
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

      try {
        localStorage.setItem("language", language);
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const isRTL = language === "ar";

  // Provide default English context during SSR
  const contextValue = {
    language,
    setLanguage,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div dir={isRTL ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // For SSR or build time, return default English context
    return {
      language: "en" as Language,
      setLanguage: () => {},
      isRTL: false,
    };
  }
  return context;
}
