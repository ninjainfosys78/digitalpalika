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
      { name: "Nepal Telecom", logo: "/partners/Telecom.png", desc: "Digital infrastructure and nationwide connectivity solutions." },
      { name: "Ncell", logo: "/partners/Ncell.png", desc: "Collaborative telecommunication network optimizations." },
      { name: "WorldLink", logo: "/partners/Worldlink.png", desc: "High-speed internet backbone and enterprise systems." }
    ]
  },
  {
    category: "Technology Partners",
    items: [
      { name: "Global IME Bank", logo: "/partners/Global.png", desc: "Secure fintech platforms and digital banking integration." },
      { name: "Aarambha", logo: "/partners/Aarambha.png", desc: "Collaborative software development for municipal governance." },
      { name: "Bajra Technologies", logo: "/partners/Bajra.png", desc: "Strategic engineering and resource augmentation." }
    ]
  },
  {
    category: "Governance & NGO",
    items: [
      { name: "Kathmandu Municipality", logo: "/partners/Kathmandu.png", desc: "Smart city initiatives and digital citizen services." },
      { name: "UNDP", logo: "/partners/undp.png", desc: "Sustainability research and digital inclusion platforms." }
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
      <main className="bg-white pt-32 pb-24">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Hero Area */}
          <div className="max-w-4xl mb-24">
            <h1 className="text-5xl sm:text-7xl font-heading font-bold text-[#0b0d12] mb-8 leading-tight">
              {content.title}
            </h1>
            <p className="text-2xl text-[#0b0d12]/60 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Partners Grid */}
          <div className="space-y-32">
            {PARTNERS.map((cat, idx) => (
              <section key={idx}>
                <div className="flex items-center gap-4 mb-16">
                  <div className="h-px bg-[#E31B23] w-12" />
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#E31B23]">
                    {cat.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {cat.items.map((p, pIdx) => (
                    <div key={pIdx} className="group border-b border-gray-100 pb-12">
                      <div className="h-20 w-48 relative mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <Image
                          src={p.logo}
                          alt={p.name}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-[#0b0d12] mb-4">
                        {p.name}
                      </h3>
                      <p className="text-[#0b0d12]/60 leading-relaxed max-w-sm font-sans">
                        {p.desc}
                      </p>
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
