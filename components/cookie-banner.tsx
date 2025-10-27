"use client"

import { useState, useEffect } from "react"

interface CookieBannerProps {
  language: "en" | "ne"
}

export default function CookieBanner({ language }: CookieBannerProps) {
  const [visible, setVisible] = useState(false)

  const content =
    language === "en"
      ? {
          message:
            "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
          accept: "Accept",
          decline: "Decline",
        }
      : {
          message:
            "हामी तपाईंको अनुभव सुधार गर्न कुकीहरू प्रयोग गर्छौं। यो साइट भ्रमण जारी राखेर तपाईं हाम्रो कुकी प्रयोगमा सहमत हुनुहुन्छ।",
          accept: "स्वीकार गर्नुहोस्",
          decline: "अस्वीकार गर्नुहोस्",
        }

  useEffect(() => {
    const consent = localStorage.getItem("ni-cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("ni-cookie-consent", "accepted")
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("ni-cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-ni-graphite text-ni-paper p-6 shadow-lg animate-slideUp"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ni-paper/80 flex-1">{content.message}</p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-6 py-2 border border-ni-paper/20 text-ni-paper text-sm font-medium rounded hover:bg-ni-paper/10 transition-colors"
            style={{ minHeight: "44px" }}
          >
            {content.decline}
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-ni-accent text-white text-sm font-medium rounded hover:bg-ni-accent-2 transition-colors"
            style={{ minHeight: "44px" }}
          >
            {content.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
