"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GlobalCTA from "@/components/global-cta";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import { getPartners, type Partner } from "@/lib/partners";

export default function PartnersPage() {
  const { language } = useLanguage();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    const fetchPartners = () => {
      getPartners().then((data) => setPartners(data)).finally(() => setLoading(false));
    };

    fetchPartners();

    // Subscribe to realtime changes in PocketBase
    const COLLECTION = "NinjaLanding_Partners";
    import("@/lib/pocketbase").then((module) => {
      const pb = module.default;
      pb.collection(COLLECTION).subscribe("*", (e) => {
        console.log("Realtime update received:", e.action, e.record);
        fetchPartners(); // Refresh everything when any change happens
      });
    });

    return () => {
      import("@/lib/pocketbase").then((module) => {
        const pb = module.default;
        pb.collection(COLLECTION).unsubscribe("*");
      });
    };
  }, []);

  const content = language === "en"
    ? {
        title: "Our Global Network",
        subtitle: "We collaborate with industry leaders and innovators to build resilient infrastructure and impactful digital systems.",
        cta: "Become a Partner",
      }
    : {
        title: "हाम्रो विश्वव्यापी सञ्जाल",
        subtitle: "हामी लचिलो पूर्वाधार र प्रभावकारी डिजिटल प्रणालीहरू निर्माण गर्न उद्योग प्रमुखहरू र आविष्कारकहरूसँग सहकार्य गर्छौं।",
        cta: "साझेदार बन्नुहोस्",
      };

  // Group partners by category
  const isNe = language === "ne";
  const grouped = partners.reduce<Record<string, Partner[]>>((acc, p) => {
    const cat = isNe ? p.category_ne : p.category_en;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(p);
    return acc;
  }, {});

  const categoryGroups = Object.entries(grouped);

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

          {/* Loading state */}
          {loading && (
            <div className="flex items-center justify-center py-32">
              <div className="w-8 h-8 border-2 border-[#d52020] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Partners Grid — grouped by category */}
          {!loading && (
            <div className="space-y-32">
              {categoryGroups.map(([category, items], idx) => (
                <section key={idx}>
                  <div className="flex items-center gap-4 mb-16">
                    <div className="h-px bg-[#d52020] w-12" />
                    <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#d52020]">
                      {category}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((p) => {
                      const displayName = isNe ? p.name_ne : p.name_en;
                      const displayDesc = isNe ? p.description_ne : p.description_en;

                      return (
                        <div
                          key={p.id}
                          className="group relative bg-[#0b0d12] border border-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#d52020]/30 hover:shadow-[0_20px_40px_-20px_rgba(213,32,32,0.15)] flex flex-col h-full"
                        >
                          <div className="h-48 flex items-center justify-center mb-8 bg-white/[0.03] rounded-sm overflow-hidden group-hover:bg-white/[0.07] transition-all duration-500">
                            <div className="relative h-28 w-56 transform transition-transform duration-500 group-hover:scale-110">
                              <Image
                                src={p.logoUrl}
                                alt={displayName}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-2xl font-heading font-bold text-white mb-3">
                              {displayName}
                            </h3>
                            <p className="text-white/50 leading-relaxed text-sm font-sans">
                              {displayDesc}
                            </p>
                          </div>
                          <div className="mt-6 h-1 w-12 bg-[#d52020]/20 group-hover:w-full transition-all duration-500" />
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}

        </div>
      </main>
      <GlobalCTA onOfficesOpen={() => {}} />
      <Footer />
    </>
  );
}
