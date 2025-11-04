"use client"

import { Mail, MapPin, ArrowRight } from "lucide-react"

interface GlobalCTAProps {
  language: "en" | "ne"
  onOfficesOpen: () => void
}

export default function GlobalCTA({ language, onOfficesOpen }: GlobalCTAProps) {
  const content =
    language === "en"
      ? {
          title: "Let’s Build What’s Next. Together.",
          subtitle:
            "Partner with Ninja Infosys to design, develop, and scale digital systems that work as hard as you do.",
          ctaPrimary: "Schedule a Consultation",
          ctaEmail: "Request a Quote",
          ctaOffice: "Talk to Our Team",
        }
      : {
          title: "आउनुहोस्, सँगै के अगाडि छ निर्माण गरौं।",
          subtitle:
            "Ninja Infosys सँग साझेदारी गर्नुहोस् ताकि तपाईंको लागि काम गर्ने डिजिटल प्रणालीहरू डिजाइन, विकास र स्केल गर्न सकियोस्।",
          ctaPrimary: "परामर्श तालिका बनाउनुहोस्",
          ctaEmail: "उद्धरणको लागि अनुरोध गर्नुहोस्",
          ctaOffice: "हाम्रो टोलीसँग कुरा गर्नुहोस्",
        }

  return (
    <section
      id="contact"
      className="scroll-mt-24 pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 relative overflow-hidden bg-black"
      aria-labelledby="cta-title"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-left relative z-10">
        <h2
          id="cta-title"
          className="text-[36px] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-left text-[#e3e3e3] pt-7"
        >
          {content.title}
        </h2>
        <p className="text-[22px] sm:text-xl md:text-2xl mb-6 sm:mb-8 lg:mb-8 leading-relaxed text-left text-[#e3e3e3] py-7">
          {content.subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-10">
          <a
            href="/contact"
            className="w-full inline-flex items-center justify-between px-6 py-4 text-base font-semibold rounded-sm transition-all group shadow-lg bg-[#d52020] text-white shadow-[0_4px_24px_0_#d5202033]"
          >
            <span className="text-left">{content.ctaPrimary}</span>
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1 ml-2"
            />
          </a>

          <a
            href="/contact"
            className="w-full inline-flex items-center justify-between px-6 py-4 border-2 text-base font-semibold rounded-sm transition-colors border-[#141414] text-[#e3e3e3] bg-[#141414]"
          >
            <span className="flex items-center gap-3">
              <Mail size={20} />
              <span>{content.ctaEmail}</span>
            </span>
          </a>

          <button
            onClick={onOfficesOpen}
            className="w-full inline-flex items-center justify-between px-6 py-4 border-2 text-base font-semibold rounded-sm transition-colors border-[#141414] text-[#e3e3e3] bg-[#141414]"
          >
            <span className="flex items-center gap-3">
              <MapPin size={20} />
              <span>{content.ctaOffice}</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
