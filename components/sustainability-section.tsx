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
          category: "Digital Sustainability",
          title: "Engineering a Greener Digital Future",
          description:
            "Architecting energy-efficient digital infrastructure and sustainable codebases that minimize carbon footprints without compromising high-stakes performance.",
          cta: "Our Green IT Framework",
        }
      : {
          category: "डिजिटल दिगोपन",
          title: "हरियाली डिजिटल भविष्यको निर्माण",
          description:
            "ऊर्जा-कुशल डिजिटल पूर्वाधार र दिगो कोडबेसहरूको निर्माण जसले उच्च-स्तरको प्रदर्शनमा सम्झौता नगरी कार्बन पदचिह्नलाई न्यूनीकरण गर्दछ।",
          cta: "हाम्रो ग्रीन आईटी फ्रेमवर्क",
        };

  return (
    <section className="relative overflow-hidden bg-[#0b0d12] py-24 lg:py-40">
      {/* Background Decorative Grid - Brand Theme */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#E31B23 1px, transparent 1px), linear-gradient(90deg, #006FB7 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />
      
      {/* Ambient Glows - Red & Blue */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E31B23 0%, transparent 70%)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #006FB7 0%, transparent 70%)', filter: 'blur(120px)' }}
      />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#E31B23] to-[#006FB7]" />
              <div className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#E31B23]">
                {content.category}
              </div>
            </div>
            
            <h2 
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-10 leading-[1.0]"
              style={{ fontFamily: "'Newsreader', serif" }}
            >
              <span className="text-white">{content.title.split(' ')[0]} </span>
              <span className="text-white/40">{content.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            
            <p className="text-xl text-white/50 mb-12 leading-relaxed max-w-xl">
              {content.description}
            </p>
            
            <Link
              href="/solutions"
              className="inline-flex items-center px-10 py-5 bg-white text-[#0b0d12] font-bold transition-all hover:bg-[#E31B23] hover:text-white group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#006FB7] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 mr-4 tracking-wider uppercase text-sm">
                {content.cta}
              </span>
              <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          {/* Image Side - Modern IT Frame */}
          <div className="order-1 lg:order-2 relative group">
            <div className="relative aspect-[1/1] overflow-hidden rounded-sm border border-white/5 bg-[#161922]">
              <Image
                src="/sustainability-construction.jpg"
                alt="Construction Sustainability"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
                priority
              />
              
              {/* Dynamic Overlay - Logo Theme Tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0d12]/80 via-transparent to-[#E31B23]/10 opacity-70" />
              <div className="absolute inset-0 bg-[#006FB7]/10 mix-blend-overlay" />
              
              {/* Achievement Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-[#0b0d12]/40 border border-white/10 rounded-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#E31B23] animate-pulse" />
                  <div className="text-white font-bold tracking-[0.2em] text-[10px] uppercase">Operational Efficiency</div>
                </div>
                <div className="flex gap-8">
                  <div>
                    <div className="text-white text-2xl font-bold mb-1">99.9%</div>
                    <div className="text-white/40 text-[10px] uppercase">Uptime Goal</div>
                  </div>
                  <div className="border-l border-white/10 pl-8">
                    <div className="text-[#006FB7] text-2xl font-bold mb-1">-40%</div>
                    <div className="text-white/40 text-[10px] uppercase">Carbon Offset</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Logo Themed Accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-[#E31B23]/20 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-[#006FB7]/20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
