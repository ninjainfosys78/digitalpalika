"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function SustainabilitySection() {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          category: "Sustainability",
          title: "Accelerating the Net-Zero Transition",
          description:
            "Strategic frameworks for organizations to achieve carbon neutrality while maintaining resilient growth in a shifting global landscape.",
          cta: "Read our full report",
        }
      : {
          category: "दिगोपन",
          title: "नेट-शून्य संक्रमणलाई गति दिँदै",
          description:
            "परिवर्तित विश्वव्यापी परिदृश्यमा लचिलो वृद्धि कायम राख्दै संस्थाहरूका लागि कार्बन तटस्थता प्राप्त गर्न रणनीतिक रूपरेखाहरू।",
          cta: "हाम्रो पूर्ण रिपोर्ट पढ्नुहोस्",
        };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#E31B23] mb-6">
              {content.category}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#0b0d12] mb-8 leading-[1.1]">
              {content.title}
            </h2>
            <p className="text-xl text-[#0b0d12]/70 mb-10 leading-relaxed max-w-xl">
              {content.description}
            </p>
            <Link
              href="/blogs/net-zero"
              className="inline-flex items-center gap-3 text-[#0b0d12] font-bold group"
            >
              <span className="text-lg underline underline-offset-8 decoration-2 decoration-[#E31B23] group-hover:decoration-[#0b0d12] transition-colors">
                {content.cta}
              </span>
              <ArrowRight className="mt-1 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative aspect-[16/10] lg:aspect-square overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600"
              alt="Green energy infrastructure"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
