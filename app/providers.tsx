"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [initialLang, setInitialLang] = React.useState<"en" | "ne" | null>(null);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      const resolved = stored === "ne" ? "ne" : "en";
      // ensure localStorage is seeded so subsequent loads are consistent
      localStorage.setItem("lang", resolved);
      setInitialLang(resolved);
    } catch {
      setInitialLang("en");
    }
  }, []);

  // don't render app until we know the language — prevents flash of wrong language
  if (initialLang === null) {
    return null;
  }

  return <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>;
}