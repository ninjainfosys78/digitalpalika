"use client"

import React, { useState, useEffect } from "react"
import { useLanguage } from "@/components/LanguageProvider"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  const content = {
    en: {
      text: "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
      accept: "Accept",
      decline: "Decline",
    },
    ne: {
      text: "तपाईंको अनुभव सुधार गर्न हामी कुकीहरू प्रयोग गर्छौँ। यस साइटको प्रयोग जारी राखेर तपाईं हाम्रो कुकीहरूको प्रयोगमा सहमत हुनुहुन्छ।",
      accept: "स्वीकार गर्नुहोस्",
      decline: "अस्वीकार गर्नुहोस्",
    },
  }

  const t = language === "en" ? content.en : content.ne

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-black/95 backdrop-blur-md border-t border-white/10 py-4 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <p className="text-sm sm:text-base text-white/80 max-w-3xl text-center md:text-left font-ibm-plex-sans leading-relaxed">
        {t.text}
      </p>
      <div className="flex items-center gap-4 shrink-0">
        <button
          onClick={handleDecline}
          className="px-6 py-2.5 text-sm font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-all font-ibm-plex-sans border border-white/10"
        >
          {t.decline}
        </button>
        <button
          onClick={handleAccept}
          className="px-8 py-2.5 text-sm font-semibold text-white bg-[#d52020] hover:bg-[#b01a1a] transition-all font-ibm-plex-sans shadow-lg shadow-red-900/20"
        >
          {t.accept}
        </button>
      </div>
    </div>
  )
}
