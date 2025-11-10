"use client"
import React, { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/LanguageProvider"

interface Testimonial {
  name: string
  role: string
  quote: string
  image?: string
}

export default function Testimonials() {
  const { language } = useLanguage()

  const items: Testimonial[] =
    language === "en"
      ? [
          {
            name: "Ranjish Mishra",
            role: "Information Officer, Ministry of Land Management, Nepal",
            quote:
              "Ninja Infosys works with such determination and great sincerity in the service of software development and website designing. We highly acknowledge their commitment to delivering high-quality solutions and their responsiveness throughout every project phase.",
            image: "/ranjish_mishra.png",
          },
          {
            name: "Balkrishna Sharma",
            role: "CEO, LB Malla & Company",
            quote:
              "Overall, the Ninja Infosys team is a group of highly motivated and professional individuals. Their mix of expertise and enthusiasm makes for reliable, exciting collaboration. We have been impressed with their technical depth and consistency in execution.",
            image: "/balkrishna.png",
          },
          {
            name: "Bimala KC",
            role: "Former Minister, Ministry of Land Management",
            quote:
              "Ninja Infosys has made it possible for students to obtain their results directly on their mobile phones via SMS, freeing them from unnecessary hassles. Their innovative solutions are practical and impactful, especially in simplifying public access to information.",
            image: "/bimala_kc.png",
          },
          {
            name: "Shiv Ram Adhikari",
            role: "Province Director",
            quote:
              "I am very happy with the services of Ninja Infosys. I personally liked the website they designed. The main thing is, they are always available when needed and deliver with professionalism and precision.",
            image: "/shiv_ram_adhikari.png",
          },
        ]
      : [
          {
            name: "रञ्जिश मिश्र",
            role: "सूचना अधिकारी, भूमि व्यवस्था मन्त्रालय, नेपाल",
            quote:
              "निन्जा इन्फोसिसले सफ्टवेयर विकास र वेबसाइट डिजाइन सेवामा दृढता र इमानदारीका साथ काम गर्छ। हामी तिनीहरूको उच्च गुणस्तरको समाधान र प्रत्येक परियोजना चरणमा देखाएको उत्तरदायित्वको उच्च कदर गर्छौं।",
            image: "/ranjish_mishra.png",
          },
          {
            name: "बलकृष्ण शर्मा",
            role: "सीईओ, एलबी मल्ल एण्ड कम्पनी",
            quote:
              "समग्रमा, निन्जा इन्फोसिसको टोली अत्यन्त प्रेरित र व्यावसायिक छ। तिनीहरूको विशेषज्ञता र उत्साहको संयोजनले भरपर्दो र रोमाञ्चक सहकार्य सम्भव बनाउँछ। हामी तिनीहरूको प्राविधिक गहिराइ र कार्यान्वयनमा निरन्तरताबाट प्रभावित छौं।",
            image: "/balkrishna.png",
          },
          {
            name: "बिमला केसी",
            role: "पूर्व मन्त्री, भूमि व्यवस्था मन्त्रालय",
            quote:
              "निन्जा इन्फोसिसले विद्यार्थीहरूलाई एसएमएसमार्फत मोबाइलमा नै नतिजा प्राप्त गर्न सक्ने बनाएको छ, जसले अनावश्यक झन्झटबाट मुक्ति दिएको छ। तिनीहरूको नवप्रवर्तनशील समाधानहरू व्यवहारिक र प्रभावकारी छन्, विशेष गरी सार्वजनिक सूचना पहुँचलाई सरल बनाउन।",
            image: "/bimala_kc.png",
          },
          {
            name: "शिव राम अधिकारी",
            role: "प्रदेश निर्देशक",
            quote:
              "म निन्जा इन्फोसिसको सेवाबाट धेरै सन्तुष्ट छु। व्यक्तिगत रूपमा, मलाई तिनीहरूले डिजाइन गरेको वेबसाइट मन पर्यो। मुख्य कुरा, तिनीहरू सधैं आवश्यक पर्दा उपलब्ध छन् र व्यावसायिकता तथा शुद्धताका साथ डेलिभर गर्छन्।",
            image: "/shiv_ram_adhikari.png",
          },
        ]

  const [perView, setPerView] = useState<number>(typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1)
  const [page, setPage] = useState<number>(0)
  const [isPaused, setIsPaused] = useState(false)

  // recompute pages when perView changes
  const pageCount = Math.max(1, Math.ceil(items.length / perView))

  // responsive listener
  useEffect(() => {
    function onResize() {
      const next = window.innerWidth >= 768 ? 2 : 1
      setPerView((prev) => {
        if (prev !== next) {
          // keep first visible item stable
          const firstIndex = page * prev
          const newPage = Math.floor(firstIndex / next)
          setPage(newPage)
        }
        return next
      })
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  // autoplay (infinite loop)
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount)
    }, 4500)
    return () => clearInterval(id)
  }, [pageCount, isPaused])

  // group items into pages
  const slides: Testimonial[][] = []
  for (let i = 0; i < items.length; i += perView) slides.push(items.slice(i, i + perView))

  // track transform values
  const trackWidthPercent = slides.length * 100
  const trackTransform = `translateX(-${page * (100 / slides.length)}%)`

  function goTo(i: number) {
    setPage(i % slides.length)
  }

  return (
    <section
      aria-label="Testimonials"
      className="relative pt-20 pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <h3
          className="text-2xl md:text-3xl font-semibold text-left text-[var(--color-foreground,#f3f3f3)] mb-7"
        >
          {language === "en" ? "What our clients say" : "हाम्रा ग्राहकहरूले के भन्छन्"}
        </h3>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              aria-live="polite"
              className="flex transform translate-x-[var(--track-trans)] transition-transform duration-[520ms] ease-[cubic-bezier(.2,.9,.2,1)]"
              style={{
                width: `${trackWidthPercent}%`,
                ["--track-trans" as any]: `-${page * (100 / slides.length)}%`,
              }}
            >
              {slides.map((group, slideIndex) => (
                <div key={slideIndex} style={{ width: `${100 / slides.length}%` }} className="pr-4">
                  <div
                    className="grid gap-6"
                    style={{
                      gridTemplateColumns: `repeat(${perView}, 1fr)`,
                      alignItems: "stretch",
                    }}
                  >
                    {group.map((item, idx) => (
                      <article
                        key={`${slideIndex}-${idx}-${item.name}`}
                        className="p-6 bg-transparent border border-[rgba(255,255,255,0.08)] min-h-[180px] flex gap-4 items-start"
                        aria-label={`${item.name} — ${item.role}`}
                      >
                        {/* circular placeholder or image */}
                        <div
                          aria-hidden
                          className="w-14 h-14 rounded-full bg-gradient-to-b from-[#222] to-[#111] border border-[rgba(255,255,255,0.06)] flex items-center justify-center overflow-hidden flex-none"
                        >
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-full grayscale"
                            />
                          ) : null}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="text-[var(--color-foreground,#f3f3f3)] font-semibold text-[16px]">{item.name}</div>
                              <div className="text-[#b1b1b1] text-[13px] mt-1">{item.role}</div>
                            </div>

                            <div aria-hidden className="text-[rgba(255,255,255,0.9)] text-[36px] leading-[1]">
                              ”
                            </div>
                          </div>

                          <p className="text-[rgba(243,243,243,0.9)] mt-3 text-[14px] leading-[1.7]">
                            {item.quote}
                          </p>
                        </div>
                      </article>
                    ))}
                    {/* if perView=1 keep spacing consistent by adding an empty column on desktop */}
                    {group.length < perView && <div className="min-h-[1px]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* pagination dots centered below (used for navigation) */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonials page ${i + 1}`}
                  className={`rounded-full border-none cursor-pointer transition-all duration-200 ${i === page ? 'bg-[var(--color-foreground,#f3f3f3)] w-3 h-3' : 'bg-[rgba(255,255,255,0.12)] w-[10px] h-[10px]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* subtle rounded corners on desktop to match design */
        @media (min-width: 768px) {
          section :global(article) {
            border-radius: 2px;
          }
        }
      `}</style>
    </section>
  )
}
