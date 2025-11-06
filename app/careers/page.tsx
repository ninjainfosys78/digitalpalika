"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SearchOverlay from "@/components/search-overlay";
import Link from "next/link";
import GlobalCTA from "@/components/global-cta";
import OfficesModal from "@/components/offices-modal";

export default function CareersPage() {
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const [searchOpen, setSearchOpen] = useState(false);
  const [officesOpen, setOfficesOpen] = useState(false);

  const content = {
    en: { hero: { title: "Careers" } },
    ne: { hero: { title: "क्यारियर" } },
  } as const;

  const t = content[language];

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="relative bg-black text-white">
        <section className="relative z-10">
          <div className="relative min-h-[70vh]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed grayscale"
              style={{ backgroundImage: "url('/careers.png')" }}
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12 flex items-center min-h-[70vh]">
              <div className="max-w-[1200px] text-left">
                <nav aria-label="Breadcrumb" className="mt-0 text-sm text-white/80">
                  <ol className="flex items-center gap-3">
                    <li>
                      <Link href="/" className="font-medium tracking-wide hover:text-white">
                        Ninja Infosys
                      </Link>
                    </li>
                    <li aria-hidden className="inline-flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-white/70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </li>
                    <li className="font-medium tracking-wide">{t.hero.title}</li>
                  </ol>
                </nav>

                <h1 className="pt-4 text-4xl sm:text-6xl font-heading font-semibold text-white">
                  {t.hero.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="py-12 sm:py-16">
              <div className="max-w-3xl">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-white/90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9 9l6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/90">
                      Currently, there are no active openings at Ninja Infosys.
                    </p>
                    <p className="mt-2 text-white/70 text-sm">
                      Please stay tuned — new opportunities will be announced here soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GlobalCTA language={language} onOfficesOpen={() => setOfficesOpen(true)} />
      <Footer language={language} />
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
      />
      <OfficesModal
        isOpen={officesOpen}
        onClose={() => setOfficesOpen(false)}
        language={language}
      />
    </>
  );
}
