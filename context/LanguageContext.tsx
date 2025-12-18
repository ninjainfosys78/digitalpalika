"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Language = 'en' | 'ne';
export interface LocalizedString {
    en: string;
    ne: string;
}

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (text: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
};

interface LanguageProviderProps {
    children: ReactNode;
    initialLang?: Language;
}

export const LanguageProvider = ({ children, initialLang = "en" }: LanguageProviderProps) => {
    // default to English to avoid unexpected Nepali default on first paint
    const [lang, setLangState] = useState<Language>(initialLang);

    useEffect(() => {
        try {
            const cookieMatch = document.cookie.match(/(?:^|;\s*)lang=(en|ne)/);
            const cookieLang = (cookieMatch?.[1] as Language) || null;
            const stored = (localStorage.getItem("lang") as Language | null) || null;
            const next = cookieLang || stored || initialLang;
            if (next && next !== lang) setLangState(next);
            // ensure localStorage is consistent
            if (!stored && next) localStorage.setItem("lang", next);
        } catch {
            // ignore storage errors
        }
    }, []); // run once

    const setLang = (l: Language) => {
        setLangState(l);
        try { localStorage.setItem("lang", l); } catch {}
        try { document.cookie = `lang=${l}; Path=/; Max-Age=31536000; SameSite=Lax`; } catch {}
    };

    const t = (v: LocalizedString) => v[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};