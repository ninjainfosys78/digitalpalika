"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

type Lang = "en" | "ne"
type Ctx = { language: Lang; setLanguage: (l: Lang) => void }

const LanguageContext = createContext<Ctx | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>("en")

  useEffect(() => {
    try {
      const saved = (localStorage.getItem("site-language") as Lang | null) || null
      if (saved === "en" || saved === "ne") {
        setLanguage(saved)
        return
      }
      const m = document.cookie.match(/(?:^|;\s*)site-language=(en|ne)(?:;|$)/)
      if (m) setLanguage(m[1] as Lang)
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("site-language", language)
      document.cookie = `site-language=${language};path=/;max-age=${60 * 60 * 24 * 365}`
    } catch {}
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}