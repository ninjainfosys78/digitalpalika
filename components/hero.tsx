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
          cta: "Contact Us",
          cta2: "Explore",
        }
      : {
          title: "इरादालाई पूर्वाधारमा परिणत गर्दै",
          deck: "हामी योजनाहरू भन्दा पर जान्छौं, तिनीहरूलाई काम गर्ने प्रणालीहरू डिजाइन र निर्माण गर्दै।",
          cta: "सम्पर्क गर्नुहोस्",
          cta2: "अन्वेषण",
        }

  return (
    <section
      id="hero"
      className={`relative h-screen flex items-center justify-center overflow-hidden bg-black ${
        backgroundOnly ? "" : "text-[#e3e3e3]"
      }`}
      aria-label="Hero section"
    >
      {showContent && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 z-0 w-[700px] h-[700px] rounded-full blur-[28px] translate-x-[12%] top-[12%] mix-blend-normal opacity-100 bg-[radial-gradient(circle_at_85%_85%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(213,32,32,0.98)_61%,rgba(213,32,32,0.92)_64%,rgba(213,32,32,0.45)_67%,rgba(0,0,0,0)_72%)]"
        />
      )}

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      {backgroundOnly ? (
        children
      ) : (
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 text-left py-0">
          <div className="max-w-[860px]">
            {children ? (
              children
            ) : showContent ? (
              <>
                <h1
                  id="cta-title"
                  className="text-balance tracking-tight max-w-[640px] w-full break-words mb-2 text-[64px] leading-[64px] [-letter-spacing:2px] text-[#e3e3e3]"
                >
                  {content.title}
                </h1>

                <p className="text-pretty font-normal text-[24px] leading-[35.8px] text-[#e3e3e3]/80 max-w-[640px] w-full">
                  {content.deck}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between px-8 py-4 w-auto sm:w-[220px] text-[20px] bg-[#d52020] text-[#e3e3e3] rounded-none font-semibold shadow-[0_4px_24px_0_#d5202033]"
                  >
                    <span className="whitespace-nowrap text-left">{content.cta}</span>
                    <span aria-hidden className="w-5" />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex items-center justify-between px-8 py-4 w-auto sm:w-[220px] group text-[20px] bg-[#141414] text-[#e3e3e3] rounded-none font-semibold"
                  >
                    <span className="whitespace-nowrap text-left">{content.cta2}</span>
                    <span className="flex items-center">
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </section>
  )
}
