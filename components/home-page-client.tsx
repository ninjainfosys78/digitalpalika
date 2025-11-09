"use client"

import { useState, useEffect } from "react"
import Head from "next/head"

import Header from "@/components/header"
import Hero from "@/components/hero"
import InsightsRail, { type InsightCard } from "@/components/insights-rail"
import Testimonials from "@/components/testimonials"
import TrustedBy from "@/components/trusted-by"
import GlobalCTA from "@/components/global-cta"
import Footer from "@/components/footer"
import SearchOverlay from "@/components/search-overlay"
import CookieBanner from "@/components/cookie-banner"
import OfficesModal from "@/components/offices-modal"

type Lang = "en" | "ne"

export default function HomePageClient({ insights }: { insights: InsightCard[] }) {
  const [language, setLanguage] = useState<Lang>("en")
  const [searchOpen, setSearchOpen] = useState(false)
  const [officesOpen, setOfficesOpen] = useState(false)

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !searchOpen) {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === "Escape") {
        setSearchOpen(false)
        setOfficesOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [searchOpen])

  // Metadata per language
  const meta = {
    en: {
      title: "Ninja Infosys — Global Consulting",
      description: "A global consulting company shaping decisive outcomes in complex environments.",
      ogImage: "/assets/og/og-default.jpg",
      siteName: "Ninja Infosys",
    },
    ne: {
      title: "निन्जा इन्फोसिस — ग्लोबल कन्सल्टिङ",
      description: "एक विश्वव्यापी कन्सल्टिङ कम्पनी जसले जटिल वातावरणमा निर्णायक परिणामहरू बनाउँछ।",
      ogImage: "/assets/og/og-default.jpg",
      siteName: "निन्जा इन्फोसिस",
    },
  } as const

  const currentMeta = meta[language]

  return (
    <>
      {/* Dynamic Head tags */}
      <Head>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content={currentMeta.ogImage} />
        <meta property="og:site_name" content={currentMeta.siteName} />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta name="twitter:image" content={currentMeta.ogImage} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Header */}
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Main content */}
      <main id="main-content" className="sharp-edges">
        <Hero language={language} />
        <TrustedBy language={language} />
        <InsightsRail language={language} insights={insights} />
        <GlobalCTA language={language} onOfficesOpen={() => setOfficesOpen(true)} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Overlays */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} language={language} />
      <OfficesModal isOpen={officesOpen} onClose={() => setOfficesOpen(false)} language={language} />
      <CookieBanner language={language} />

      {/* Embedded JSON Content */}
      <script
        type="application/json"
        id="ni-content"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            /* your JSON blob unchanged */
          }),
        }}
      />
    </>
  )
}
