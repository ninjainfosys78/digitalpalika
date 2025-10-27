"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  language: "en" | "ne"
  showContent?: boolean
  backgroundOnly?: boolean
  children?: React.ReactNode
}

export default function Hero({ language, showContent = true, backgroundOnly = false, children }: HeroProps) {
  const content =
    language === "en"
      ? {
          title: "Turning Intent into Infrastructure",
          deck: "We move beyond plans, designing and building the systems that make them work.",
          cta: "Explore our work",
          cta2: "Schedule a call",
        }
      : {
          title: "इरादालाई पूर्वाधारमा परिणत गर्दै",
          deck: "हामी योजनाहरू भन्दा पर जान्छौं, तिनीहरूलाई काम गर्ने प्रणालीहरू डिजाइन र निर्माण गर्दै।",
          cta: "हाम्रो काम हेर्नुहोस्",
          cta2: "कल तालिका बनाउनुहोस्",
        }

  return (
    <section
      id="hero"
      className={
        `relative min-h-screen flex items-center justify-center overflow-hidden bg-ni-ink ${
          backgroundOnly ? "" : "text-ni-paper"
        }`
      }
      aria-label="Hero section"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ni-accent rounded-2px blur-[120px] animate-float"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-ni-accent-2 rounded-2px blur-[120px] animate-float"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-ni-accent/50 rounded-2px blur-[100px] animate-float"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {backgroundOnly ? (
        // when used as background only, render children directly and don't add extra padding/text color
        children
      ) : (
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-20 sm:py-28 lg:py-32">
          {children ? (
            children
          ) : showContent ? (
            <>
              <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-8 sm:mb-12 py-12 text-balance leading-[1.1] tracking-tight">
                {content.title}
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-ni-paper/80 mb-10 sm:mb-16 lg:mb-20 max-w-6xl mx-auto text-pretty leading-relaxed font-light">
                {content.deck}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-6xl mx-auto mt-6 sm:mt-4 lg:mt-6 py-12">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ni-accent text-white text-base font-semibold rounded-2px hover:bg-ni-accent-2 transition-all hover:gap-3 group shadow-lg shadow-ni-accent/20 w-full sm:w-auto sm:flex-1 sm:max-w-[240px]"
                >
                  {content.cta}
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-2px hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20 w-full sm:w-auto sm:flex-1 sm:max-w-[240px]"
                >
                  {content.cta2}
                </Link>
              </div>
            </>
          ) : null}
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-ni-paper/40 to-transparent" />
      </div>
    </section>
  )
}
