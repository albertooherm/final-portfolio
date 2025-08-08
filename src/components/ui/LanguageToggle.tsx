"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 font-sans">
      <Button
        variant={language === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => language !== "es" && toggleLanguage()}
        className="h-8 px-2 text-xs font-medium transition-all duration-200 font-sans"
        disabled={language === "es"}
      >
        ES
      </Button>
      <div className="w-px h-4 bg-border"></div>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => language !== "en" && toggleLanguage()}
        className="h-8 px-2 text-xs font-medium transition-all duration-200 font-sans"
        disabled={language === "en"}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
