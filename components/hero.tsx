"use client"
import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"

interface HeroProps {
  showContent?: boolean
  backgroundOnly?: boolean
  children?: React.ReactNode
}

export default function Hero({ showContent = true, backgroundOnly = false, children }: HeroProps) {
  const { language } = useLanguage()

  const content =
    language === "en"
      ? {
          label: "ESTABLISHED VISIONARY STRATEGY",
          titleLine1: "Turning Intent",
          titleLine2: "into",
          titleItalic: "Infrastructure",
          deck: "Bridging the gap between conceptual high-stakes engineering and the physical reality of future-proof urban environments.",
          cta: "Explore Projects",
          cta2: "Our Methodology",
          geo: "KATHMANDU — ANAMNAGAR",
        }
      : {
          label: "स्थापित दूरदर्शी रणनीति",
          titleLine1: "इरादालाई",
          titleLine2: "रूपान्तरण",
          titleItalic: "पूर्वाधारमा",
          deck: "वैचारिक उच्च-जोखिम इन्जिनियरिङ र भविष्यको शहरी वातावरणको भौतिक वास्तविकताबीचको अन्तर पुर्दै।",
          cta: "परियोजनाहरू अन्वेषण गर्नुहोस्",
          cta2: "हाम्रो कार्यप्रणाली",
          geo: "काठमाडौं — अनामनगर",
        }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px", backgroundColor: "#1a0010" }}
      aria-label="Hero section"
    >
      {/* Background gradient layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 60% 40%, #3d0020 0%, #1a0010 50%, #0d0008 100%)",
        }}
      />
      {/* Subtle red glow on left */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          left: "-5%",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,20,40,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Watermark text — right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none pr-4 sm:pr-8 lg:pr-12 text-right leading-none">
        <div
          className="font-heading font-bold uppercase tracking-widest"
          style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "rgba(255,255,255,0.06)" }}
        >
          ARCHITEECTURE
        </div>
        <div
          className="font-heading font-bold uppercase tracking-widest mt-1"
          style={{ fontSize: "clamp(24px, 4vw, 48px)", color: "rgba(255,255,255,0.06)" }}
        >
          SAFE — CARE WORK
        </div>
      </div>

      {/* Botanical / architectural SVG watermark */}
      <div
        className="absolute right-24 top-16 z-0 pointer-events-none opacity-[0.07]"
        style={{ width: "340px", height: "340px" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylised ginkgo / botanical ribs */}
          {[0, 22, 44, 66, 88, 110, 132, 154].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 100 160)`}>
              <path
                d="M100 160 Q80 80 100 20 Q120 80 100 160Z"
                stroke="white"
                strokeWidth="0.8"
                fill="none"
              />
              <path
                d="M100 160 Q88 100 92 40"
                stroke="white"
                strokeWidth="0.4"
                strokeDasharray="2 4"
                fill="none"
              />
            </g>
          ))}
          <circle cx="100" cy="160" r="5" fill="white" opacity="0.3" />
        </svg>
      </div>

      {backgroundOnly ? (
        children
      ) : (
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 2xl:px-16 py-16">
          {children ? (
            children
          ) : showContent ? (
            <div className="max-w-[680px]">
              {/* Label */}
              <div
                className="mb-8 text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "#E31B23" }}
              >
                {content.label}
              </div>

              {/* Headline */}
              <h1
                id="hero-title"
                className="mb-8 leading-[1.0]"
                style={{ fontFamily: "'Newsreader', serif" }}
              >
                <span
                  className="block font-bold text-white"
                  style={{ fontSize: "clamp(52px, 7vw, 88px)" }}
                >
                  {content.titleLine1}
                </span>
                <span
                  className="block font-bold text-white"
                  style={{ fontSize: "clamp(52px, 7vw, 88px)" }}
                >
                  {content.titleLine2}
                </span>
                <span
                  className="block italic font-bold"
                  style={{
                    fontSize: "clamp(52px, 7vw, 88px)",
                    color: "#e8d5d5",
                  }}
                >
                  {content.titleItalic}
                </span>
              </h1>

              {/* Deck */}
              <p
                className="mb-12 leading-relaxed"
                style={{
                  fontSize: "clamp(15px, 1.8vw, 19px)",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: "440px",
                }}
              >
                {content.deck}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: "#E31B23" }}
                >
                  {content.cta}
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-bold transition-all hover:bg-white/10"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                  }}
                >
                  {content.cta2}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* Bottom-right geo tag */}
      <div
        className="absolute bottom-8 right-6 sm:right-12 z-10 pointer-events-none select-none"
        style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "0.18em" }}
      >
        {content.geo}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(11,0,8,0.6))",
        }}
      />
    </section>
  )
}
