"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CareersTeaserProps {
  language: "en" | "ne"
}

export default function CareersTeaser({ language }: CareersTeaserProps) {
  const content =
    language === "en"
      ? {
          title: "Build what matters, then make it last.",
          body: "Analytical, design, and engineering minds—write the next chapter with us.",
          cta: "See roles",
        }
      : {
          title: "महत्वपूर्ण बनाउनुहोस्, दीर्घकालीन टिकाइ राख्नुहोस्।",
          body: "विश्लेषण, डिजाइन, र इन्जिनियरिङ मन—हाम्रो अर्को अध्याय लेख्नुहोस्।",
          cta: "रोलहरू हेर्नुहोस्",
        }

  return (
    <section className="py-15 md:py-23 bg-ni-graphite text-ni-paper" aria-labelledby="careers-title">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <h2 id="careers-title" className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
            {content.title}
          </h2>
          <p className="text-xl text-ni-paper/70 pt-4 pb-3 leading-relaxed text-pretty">{content.body}</p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-ni-accent hover:text-ni-accent-2 font-medium transition-colors group"
          >
            {content.cta}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
