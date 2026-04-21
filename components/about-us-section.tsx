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
              color: "#E31B23"
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "Enable enterprises with modern engineering practices and craft-focused teams—shipping measurable value.",
              color: "#006FB7"
            },
            {
              icon: Heart,
              title: "Our Values",
              text: "Craft and clarity, integrity and ownership, partner mindset, and security by default.",
              color: "#00A651"
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
              color: "#E31B23"
            },
            {
              icon: Target,
              title: "हाम्रो मिशन",
              text: "आधुनिक इन्जिनियरिङ अभ्यास र कौशल केन्द्रित टोलीमार्फत मापनयोग्य मूल्य डेलिभर गराउने।",
              color: "#006FB7"
            },
            {
              icon: Heart,
              title: "हाम्रो मूल्यहरू",
              text: "कला र स्पष्टता, इमानदारी र स्वामित्व, साझेदारी सोच, र सुरक्षा-पहिले।",
              color: "#00A651"
            },
          ],
          cta: "हाम्रो बारेमा थप जान्नुहोस्",
        };

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0b0d12" }}>
      {/* Technological Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} />
        <div className="absolute top-0 left-0 w-full h-full" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(227,27,35,0.05) 0%, transparent 70%)'
        }} />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Centered Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#E31B23] mb-6">
            {content.category}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight">
            {content.title}
          </h2>
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto font-sans">
            {content.description}
          </p>
        </div>

        {/* Individual Technological Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="group relative p-8 bg-white/[0.03] border border-white/10 hover:border-[#E31B23]/50 transition-all duration-500 hover:-translate-y-2"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E31B23] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E31B23] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-8 relative">
                   <div className="absolute inset-0 bg-[#E31B23] blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                   <div className="relative inline-flex p-4 bg-white/5 border border-white/10">
                    <Icon size={28} className="text-[#E31B23]" />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-[#E31B23] transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/50 leading-relaxed font-sans text-[16px]">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Centered CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-4 bg-[#E31B23] text-white font-bold group px-10 py-5 transition-all hover:brightness-110 hover:shadow-[0_0_20px_-5px_rgba(227,27,35,0.4)] active:scale-95"
          >
            <span className="text-lg tracking-widest uppercase">
              {content.cta}
            </span>
            <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
