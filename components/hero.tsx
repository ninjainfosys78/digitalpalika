"use client"
import React from "react"
import { ArrowRight } from "lucide-react"
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
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2">
        <div className="plasma-wrapper">
          <div className="gradient gradient-1" />
          <div className="gradient gradient-2" />
          <div className="gradient gradient-3" />
        </div>
      </div>

      {backgroundOnly ? (
        children
      ) : (
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 text-left sm:px-8 lg:px-12 2xl:px-16 py-28 sm:py-32 lg:py-36">
          <div className="max-w-[860px]">
            {children ? (
              children
            ) : showContent ? (
              <>
                <h1
                  id="hero-title"
                  className="text-balance mb-[5px] w-full max-w-[640px] break-words text-[46px] sm:text-[64px] leading-[48px] sm:leading-[64px] [-letter-spacing:2px] text-[#e3e3e3]"
                >
                  {content.title}
                </h1>

                <p className="text-pretty max-w-[640px] w-full text-[24px] leading-[35.8px] text-[#e3e3e3]/80">
                  {content.deck}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 min-w-[220px] bg-[#d52020] px-6 py-4 text-[20px] font-semibold text-[#e3e3e3]"
                  >
                    <span className="whitespace-nowrap">{content.cta}</span>
                  </Link>

                  <Link
                    href="/work"
                    className="group inline-flex items-center justify-center gap-3 min-w-[220px] bg-[#141414] px-6 py-4 text-[20px] font-semibold text-[#e3e3e3]"
                  >
                    <span className="whitespace-nowrap">{content.cta2}</span>
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}

      <style jsx global>{`
        .plasma-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          filter: blur(150px);
        }
        .gradient {
          position: absolute;
          border-radius: 100%;
          opacity: 0.6;
          mix-blend-mode: screen;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
        }
        .gradient-1 {
          background: rgb(213, 32, 32);
          width: 700px;
          height: 700px;
          animation-duration: 11s;
          opacity: 0.7;
          left: 60%;
          top: 40%;
          z-index: -2;
          animation-name: animation-gradient-1;
        }
        .gradient-2 {
          background: rgb(213, 32, 32);
          width: 600px;
          height: 600px;
          animation-duration: 16s;
          opacity: 0.16;
          left: 40%;
          top: 60%;
          z-index: -1;
          animation-name: animation-gradient-2;
        }
        .gradient-3 {
          background: rgb(29, 27, 27);
          width: 500px;
          height: 500px;
          animation-duration: 11s;
          opacity: 0.77;
          left: 50%;
          top: 50%;
          z-index: -3;
          animation-name: animation-gradient-3;
        }
        @keyframes animation-gradient-1 {
          0% {
            transform: translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%);
          }
          25% {
            transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg) rotate(80deg) translateX(30%);
          }
          50% {
            transform: translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%);
          }
          75% {
            transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg) rotate(240deg) translateX(15%);
          }
          100% {
            transform: translateY(-50%) translateX(-50%) rotate(340deg) translateX(20%);
          }
        }
        @keyframes animation-gradient-2 {
          0% {
            transform: translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%);
          }
          25% {
            transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg) rotate(110deg) translateX(-5%);
          }
          50% {
            transform: translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%);
          }
          75% {
            transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg) rotate(300deg) translateX(-10%);
          }
          100% {
            transform: translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%);
          }
        }
        @keyframes animation-gradient-3 {
          0% {
            transform: translateY(-50%) translateX(-50%) translateX(-15%) translateY(10%);
          }
          20% {
            transform: translateY(-50%) translateX(-50%) translateX(20%) translateY(-30%);
          }
          40% {
            transform: translateY(-50%) translateX(-50%) translateX(-25%) translateY(-15%);
          }
          60% {
            transform: translateY(-50%) translateX(-50%) translateX(30%) translateY(20%);
          }
          80% {
            transform: translateY(-50%) translateX(-50%) translateX(5%) translateY(35%);
          }
          100% {
            transform: translateY(-50%) translateX(-50%) translateX(-15%) translateY(10%);
          }
        }
      `}</style>
    </section>
  )
}
