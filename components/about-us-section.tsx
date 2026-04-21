"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Eye, Target, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutUsSection() {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          category: "Capabilities",
          title: "Engineered for excellence, built for scale.",
          description:
            "Ninja Infosys is an IT technical solution provider. Our dedicated technical professionals offer services in IT Consultancy, Software Development, and Project-based solutions with a mission to establish lasting professional relationships provided through reliable technology.",
          pillars: [
            {
              icon: Eye,
              title: "Our Purpose",
              text: "Build trustworthy software that helps teams move faster, operate safely, and deliver real outcomes.",
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "Enable enterprises with modern engineering practices and craft-focused teams—shipping measurable value.",
            },
            {
              icon: Heart,
              title: "Our Values",
              text: "Craft and clarity, integrity and ownership, partner mindset, and security by default.",
            },
          ],
          cta: "Learn more about us",
        }
      : {
          category: "क्षमताहरू",
          title: "उत्कृष्टताको लागि इन्जिनियर गरिएको, स्केलको लागि निर्मित।",
          description:
            "निन्जा इन्फोसिस एक आईटी प्राविधिक समाधान प्रदायक हो। हाम्रा समर्पित प्राविधिक पेशेवरहरूले आईटी परामर्श, सफ्टवेयर विकास, र परियोजना-आधारित समाधानहरूमा सेवाहरू प्रदान गर्दछन्।",
          pillars: [
            {
              icon: Eye,
              title: "हाम्रो उद्देश्य",
              text: "विश्वासयोग्य सफ्टवेयर बनाउनु—जसले टिमलाई छिटो र सुरक्षित रूपमा काम गर्न मद्दत गर्छ।",
            },
            {
              icon: Target,
              title: "हाम्रो मिशन",
              text: "आधुनिक इन्जिनियरिङ अभ्यास र कौशल केन्द्रित टोलीमार्फत मापनयोग्य मूल्य डेलिभर गराउने।",
            },
            {
              icon: Heart,
              title: "हाम्रो मूल्यहरू",
              text: "कला र स्पष्टता, इमानदारी र स्वामित्व, साझेदारी सोच, र सुरक्षा-पहिले।",
            },
          ],
          cta: "हाम्रो बारेमा थप जान्नुहोस्",
        };

  return (
    <section className="py-24 bg-[#f9f9f9] border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-16">
          <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#E31B23] mb-6">
            {content.category}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#0b0d12] mb-8 leading-[1.1]">
            {content.title}
          </h2>
          <p className="text-xl text-[#0b0d12]/70 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content.pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="group">
                <div className="mb-6 inline-flex p-3 bg-white shadow-sm group-hover:shadow-md transition-shadow">
                  <Icon size={24} className="text-[#E31B23]" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#0b0d12] mb-4">
                  {p.title}
                </h3>
                <p className="text-[#0b0d12]/60 leading-relaxed font-sans">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-[#0b0d12] font-bold group"
          >
            <span className="text-lg underline underline-offset-8 decoration-2 decoration-[#E31B23] group-hover:decoration-[#0b0d12] transition-colors">
              {content.cta}
            </span>
            <ArrowRight className="mt-1 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
