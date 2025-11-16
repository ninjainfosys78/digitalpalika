"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";


export default function Providers({ children }: { children: React.ReactNode }) {
  const [initialLang, setInitialLang] = React.useState<"en" | "ne" | null>(null);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      setInitialLang(stored === "ne" ? "ne" : "en");
    } catch {
      setInitialLang("en");
    }
  }, []);

  if (initialLang === null) {
    return <>{children}</>;
  }

  return <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>;
}