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
          cta: "अन्वेषण गर्नुहोस्",
          cta2: "कल तालिका बनाउनुहोस्",
        }

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] ${
        backgroundOnly ? "" : "text-[#e3e3e3]"
      }`}
      aria-label="Hero section"
    >
      {/* red arc gradient on right */}
      {showContent && (
        /* layered red arc: inner band (sharp) + outer glow (soft) — pushed further right so arc originates fully from screen edge */
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 z-0"
          style={{
            width: "700px",
            height: "700px",
            // narrow, high-contrast red band for a sharper arc
            background:
              "radial-gradient(circle at 85% 85%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(213,32,32,0.98) 61%, rgba(213,32,32,0.92) 64%, rgba(213,32,32,0.45) 67%, rgba(0,0,0,0) 72%)",
            borderRadius: "50%",
            filter: "blur(28px)", // less blur → sharper edge
            transform: "translateX(12%)",
            top: "12%", // push arc slightly down
            position: "absolute",
            mixBlendMode: "normal",
            opacity: 1,
          }}
        />
      )}

      {/* subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {backgroundOnly ? (
        children
      ) : (
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 text-left py-28 sm:py-32 lg:py-36">
          <div className="max-w-[860px]">
            {children ? (
              children
            ) : showContent ? (
              <>
                <h1
                  id="cta-title"
                  className="text-balance tracking-tight max-w-full"
                  style={{
                    fontSize: "64px",
                    lineHeight: "64px",
                    letterSpacing: "-2px",
                    color: "#e3e3e3",
                    verticalAlign: "middle",
                    maxWidth: "640px",
                    width: "100%",
                    overflowWrap: "break-word",
                    marginBottom: 5,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  {content.title}
                </h1>

                <p
                  className="text-pretty"
                  style={{
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "24px",
                    lineHeight: "35.8px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    color: "rgba(227,227,227,0.8)",
                    maxWidth: "640px",
                    width: "100%",
                  }}
                >
                  {content.deck}
                </p>

                <div
                  className="flex flex-wrap gap-4"
                  style={{ marginTop: "32px"}}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between px-8 py-4 w-auto sm:w-[220px]"
                    style={{
                      fontSize: "20px",
                      background: "#d52020",
                      color: "#e3e3e3",
                      borderRadius: "0px",
                      fontWeight: 600,
                      boxShadow: "0 4px 24px 0 #d5202033",
                    }}
                  >
                    <span className="whitespace-nowrap text-left">{content.cta}</span>
                    <span aria-hidden className="w-5" />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex items-center justify-between px-8 py-4 w-auto sm:w-[220px] group"
                    style={{
                      fontSize: "20px",
                      background: "#141414",
                      color: "#e3e3e3",
                      borderRadius: "0px",
                      fontWeight: 600,
                    }}
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