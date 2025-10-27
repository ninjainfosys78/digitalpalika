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
          subtitle: "Partner with Ninja Infosys to design, develop, and scale digital systems that work as hard as you do.",
          ctaPrimary: "Schedule a Consultation",
          ctaEmail: "Request a Quote",
          ctaOffice: "Talk to Our Team",
        }
      : {
          title: "आउनुहोस्, सँगै के अगाडि छ निर्माण गरौं।",
          subtitle: "Ninja Infosys सँग साझेदारी गर्नुहोस् ताकि तपाईंको लागि काम गर्ने डिजिटल प्रणालीहरू डिजाइन, विकास र स्केल गर्न सकियोस्।",
          ctaPrimary: "परामर्श तालिका बनाउनुहोस्",
          ctaEmail: "उद्धरणको लागि अनुरोध गर्नुहोस्",
          ctaOffice: "हाम्रो टोलीसँग कुरा गर्नुहोस्",
        }

  return (
    <>
      <hr className="w-full border-t border-gray-200 mb-0" />
      <section
        id="contact"
        className="scroll-mt-24 pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 relative overflow-hidden"
        aria-labelledby="cta-title"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-left relative z-10 text-ni-ink">
          <h2
            id="cta-title"
            className="text-3xl text-black sm:text-4xl pt-7 md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-balance leading-tight text-left"
          >
            {content.title}
          </h2>

          <p className="text-lg py-7 sm:text-xl md:text-2xl text-ni-slate mb-6 sm:mb-8 lg:mb-8 text-pretty leading-relaxed text-left">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch justify-start gap-4 mb-8 sm:mb-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-ni-accent text-white text-base font-semibold rounded-2px hover:bg-ni-accent-2 transition-all hover:gap-3 group shadow-lg shadow-ni-accent/20 sm:flex-1"
            >
              {content.ctaPrimary}
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 border-2 border-ni-graphite/20 text-ni-ink text-base font-semibold rounded-2px hover:border-ni-accent hover:text-ni-accent transition-colors sm:flex-1"
            >
              <Mail size={20} />
              {content.ctaEmail}
            </a>
            <button
              onClick={onOfficesOpen}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 border-2 border-ni-graphite/20 text-ni-ink text-base font-semibold rounded-2px hover:border-ni-accent hover:text-ni-accent transition-colors sm:flex-1"
            >
              <MapPin size={20} />
              {content.ctaOffice}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
