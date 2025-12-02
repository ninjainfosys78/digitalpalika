"use client"
import React, { useEffect, useMemo, useState } from "react"
import { useLanguage } from "@/components/LanguageProvider"
import { fetchTestimonials, TestimonialRecord } from "@/lib/testimonials"

interface Testimonial {
  name: string
  role: string
  quote: string
  image?: string
}

export default function Testimonials() {
  const { language } = useLanguage()

  const [records, setRecords] = useState<TestimonialRecord[]>([])
  const [perView, setPerView] = useState<number>(1)
  const [page, setPage] = useState<number>(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetchTestimonials()
      .then((data) => {
        if (!cancelled) {
          setRecords(data)
          setPage(0)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setRecords([])
        }
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const initial = window.innerWidth >= 768 ? 2 : 1
    setPerView(initial)
  }, [])

  useEffect(() => {
    function onResize() {
      const next = window.innerWidth >= 768 ? 2 : 1
      setPerView((prev) => {
        if (prev !== next) {
          const firstIndex = page * prev
          const newPage = Math.floor(firstIndex / next)
          setPage(newPage)
        }
        return next
      })
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [page])

  const items: Testimonial[] = useMemo(
    () =>
      records.reduce<Testimonial[]>((acc, r) => {
        const name =
          language === "en"
            ? r.nameEn
            : r.nameNe || r.nameEn
        const quote =
          language === "en"
            ? r.quoteEn
            : r.quoteNe || r.quoteEn
        if (!name || !quote) return acc
        acc.push({
          name,
          role: "",
          quote,
          image: r.image,
        })
        return acc
      }, []),
    [records, language]
  )

  const pageCount = Math.max(1, Math.ceil(items.length / perView))

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount)
    }, 4500)
    return () => clearInterval(id)
  }, [pageCount, isPaused])

  if (!items.length) return null

  const slides: Testimonial[][] = []
  for (let i = 0; i < items.length; i += perView) {
    slides.push(items.slice(i, i + perView))
  }

  const trackWidthPercent = slides.length * 100

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
        <h3 className="text-2xl md:text-3xl font-semibold text-left text-[var(--color-foreground,#f3f3f3)] mb-7">
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
                <div
                  key={slideIndex}
                  style={{ width: `${100 / slides.length}%` }}
                  className="pr-4"
                >
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
                        aria-label={item.name}
                      >
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
                              <div className="text-[var(--color-foreground,#f3f3f3)] font-semibold text-[16px]">
                                {item.name}
                              </div>
                            </div>

                            <div
                              aria-hidden
                              className="text-[rgba(255,255,255,0.9)] text-[36px] leading-[1]"
                            >
                              ”
                            </div>
                          </div>

                          <p className="text-[rgba(243,243,243,0.9)] mt-3 text-[14px] leading-[1.7]">
                            {item.quote}
                          </p>
                        </div>
                      </article>
                    ))}
                    {group.length < perView && <div className="min-h-[1px]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonials page ${i + 1}`}
                  className={`rounded-full border-none cursor-pointer transition-all duration-200 ${
                    i === page
                      ? "bg-[var(--color-foreground,#f3f3f3)] w-3 h-3"
                      : "bg-[rgba(255,255,255,0.12)] w-[10px] h-[10px]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          section :global(article) {
            border-radius: 2px;
          }
        }
      `}</style>
    </section>
  )
}
