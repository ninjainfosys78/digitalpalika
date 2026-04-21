"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GlobalCTA from "@/components/global-cta";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";

const PARTNERS = [
  {
    category: "Strategic Partners",
    items: [
      { name: "Nepal Telecom", logo: "/nt-logo.png", desc: "Digital infrastructure and nationwide connectivity solutions." },
      { name: "Ncell", logo: "/partners/Ncell.jpg", desc: "Collaborative telecommunication network optimizations." },
      { name: "WorldLink", logo: "/partners/Worldlink.jpg", desc: "High-speed internet backbone and enterprise systems." }
    ]
  },
  {
    category: "Technology Partners",
    items: [
      { name: "Prabhu Bank", logo: "/partners/Prabhu.jpg", desc: "Streamlined fintech ecosystems and digital corporate banking solutions." }
    ]
  },
  {
    category: "Governance & NGO",
    items: [
      { name: "Kathmandu Municipality", logo: "/partners/kathmandu.png", desc: "Smart city initiatives and digital citizen services." }
    ]
  }
];

export default function PartnersPage() {
  const { language } = useLanguage();

  const content = language === 'en' ? {
    title: "Our Global Network",
    subtitle: "We collaborate with industry leaders and innovators to build resilient infrastructure and impactful digital systems.",
    cta: "Become a Partner"
  } : {
    title: "हाम्रो विश्वव्यापी सञ्जाल",
    subtitle: "हामी लचिलो पूर्वाधार र प्रभावकारी डिजिटल प्रणालीहरू निर्माण गर्न उद्योग प्रमुखहरू र आविष्कारकहरूसँग सहकार्य गर्छौं।",
    cta: "साझेदार बन्नुहोस्"
  };

  return (
    <>
      <Header />
      <main className="bg-black pt-32 pb-24">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Hero Area */}
          <div className="max-w-4xl mb-24">
            <h1 className="text-5xl sm:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              {content.title}
            </h1>
            <p className="text-2xl text-white/60 leading-relaxed">
              {content.subtitle}
            </p>
          </div>
 
          {/* Partners Grid */}
          <div className="space-y-32">
            {PARTNERS.map((cat, idx) => (
              <section key={idx}>
                <div className="flex items-center gap-4 mb-16">
                  <div className="h-px bg-[#d52020] w-12" />
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#d52020]">
                    {cat.category}
                  </h2>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.items.map((p, pIdx) => (
                    <div key={pIdx} className="group relative bg-[#0b0d12] border border-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#d52020]/30 hover:shadow-[0_20px_40px_-20px_rgba(213,32,32,0.15)] flex flex-col h-full">
                      <div className="h-48 flex items-center justify-center mb-8 bg-white/[0.03] rounded-sm overflow-hidden group-hover:bg-white/[0.07] transition-all duration-500">
                        <div className="relative h-28 w-56 transform transition-transform duration-500 group-hover:scale-110">
                          <Image
                            src={p.logo}
                            alt={p.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-heading font-bold text-white mb-3">
                          {p.name}
                        </h3>
                        <p className="text-white/50 leading-relaxed text-sm font-sans">
                          {p.desc}
                        </p>
                      </div>
                      <div className="mt-6 h-1 w-12 bg-[#d52020]/20 group-hover:w-full transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
 
        </div>
      </main>
      <GlobalCTA onOfficesOpen={() => {}} />
      <Footer />
    </>
  );
}
