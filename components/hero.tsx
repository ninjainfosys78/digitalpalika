"use client"
import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

interface HeroProps {
  showContent?: boolean
  backgroundOnly?: boolean
  children?: React.ReactNode
}

export default function Hero({ showContent = true, backgroundOnly = false, children }: HeroProps) {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    "/asocio-award-1.jpg",
    "/asocio-award-2.jpg",
    "/asocio-award-3.jpg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

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
      style={{ paddingTop: "80px", backgroundColor: "#0d0008" }}
      aria-label="Hero section"
    >
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-[5] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      {/* Background gradient layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, #3d0020 0%, #0d0008 70%)",
        }}
      />
      
      {/* Slideshow Area - Right Side */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide]}
              alt="Technology Slideshow"
              fill
              className="object-cover brightness-[0.8]"
              priority
            />
            {/* Red Tint Overlay */}
            <div className="absolute inset-0 bg-[#E31B23]/30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[#0d0008]/40 mix-blend-multiply" />
            
            {/* Gradient Mask to blend with left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0008] via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      { backgroundOnly ? (
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
