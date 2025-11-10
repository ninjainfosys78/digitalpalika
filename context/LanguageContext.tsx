"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react"; // add this

// Core types for the language state
export type Language = 'en' | 'ne';
export interface LocalizedString {
    en: string;
    ne: string;
}

export interface NavItem {
    label: LocalizedString;
    href: string;
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

export const LanguageProvider = ({ children, initialLang = "ne" }: LanguageProviderProps) => {
    // Use server-provided initialLang so SSR and client match
    const [lang, setLangState] = useState<Language>(initialLang);

    // On mount, sync with cookie/localStorage (if present)
    useEffect(() => {
        const cookieMatch = document.cookie.match(/(?:^|;\s*)lang=(en|ne)/);
        const cookieLang = (cookieMatch?.[1] as Language) || null;
        const stored = (localStorage.getItem("lang") as Language | null) || null;
        const next = cookieLang || stored || initialLang;
        if (next && next !== lang) setLangState(next);
    }, []); // run once

    const setLang = (l: Language) => {
        setLangState(l);
        try { localStorage.setItem("lang", l); } catch {}
        document.cookie = `lang=${l}; Path=/; Max-Age=31536000; SameSite=Lax`;
    };

    const t = (v: LocalizedString) => v[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};