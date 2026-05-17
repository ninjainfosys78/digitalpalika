"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SearchOverlay from "@/components/search-overlay";
import Link from "next/link";
import GlobalCTA from "@/components/global-cta";
import ContactModals from "@/components/contact-modals";
import { useContactModals } from "@/lib/hooks/use-contact-modals";
import { useLanguage } from "@/components/LanguageProvider";
import { getBannerByImgName } from "@/lib/banners";
import { getJobOpenings, JobOpening } from "@/lib/careers";

export default function CareersPage() {
  const { language } = useLanguage();
  const [searchOpen, setSearchOpen] = useState(false);
  const { 
    officesOpen, openOffices, closeOffices,
    bookingOpen, openBooking, closeBooking,
    quoteOpen, openQuote, closeQuote 
  } = useContactModals();
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [jobs, setJobs] = useState<JobOpening[]>([]);

  const content = {
    en: {
      hero: { kicker: "LIFE AT NINJA INFOSYS", title: "Careers" },
      body: {
        noOpenings: "Currently, there are no active openings at Ninja Infosys.",
        stayTuned: "Please stay tuned — new opportunities will be announced here soon.",
        breadcrumbHome: "Ninja Infosys",
      },
    },
    ne: {
      hero: { kicker: "निन्जा इन्फोसिसमा जीवन", title: "क्यारियर" },
      body: {
        noOpenings: "हाल निन्जा इन्फोसिसमा कुनै सक्रिय अवसरहरू छैनन्।",
        stayTuned: "कृपया पर्खिनुहोस् — नयाँ अवसरहरू चाँडै यहाँ प्रकाशित गरिनेछ।",
        breadcrumbHome: "निन्जा इन्फोसिस",
      },
    },
  } as const;

  const t = content[language];

  useEffect(() => {
    let mounted = true;
    getBannerByImgName("career")
      .then((url) => {
        if (!mounted) return;
        if (url) setBannerUrl(url);
        else setBannerUrl(null);
      })
      .catch((err) => {
        console.error("Error loading career banner:", err);
        if (!mounted) return;
        setBannerUrl(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    getJobOpenings(language)
      .then((data) => {
        if (!mounted) return;
        setJobs(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [language]);

  return (
    <>
      <Header />
      <main className="relative bg-black text-white">
        <section className="relative z-10">
          <div className="relative min-h-[70vh]">
            <div
              className="absolute inset-0 bg-center bg-fixed grayscale"
              style={
                bannerUrl
                  ? { backgroundImage: `url('${bannerUrl}')`, backgroundSize: "cover" }
                  : {}
              }
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12 flex items-center min-h-[70vh]">
              <div className="max-w-[1200px] text-left">
                <nav aria-label="Breadcrumb" className="mt-0 text-sm text-white/80">
                  <ol className="flex items-center gap-3">
                    <li>
                      <Link href="/" className="font-medium tracking-wide hover:text-white">
                        {t.body.breadcrumbHome}
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
              <div className="max-w-4xl">
                {jobs.length > 0 ? (
                  <div className="space-y-12">
                    {jobs.map((job) => (
                      <div
                        key={job.id}
                        className="bg-white/5 border border-white/10 p-8 hover:border-[#d52020] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                      >
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d52020] bg-[#d52020]/10 px-3 py-1 rounded-full">
                            {job.department}
                          </span>
                          <h2 className="text-2xl font-heading font-bold text-white">
                            {job.title}
                          </h2>
                          <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
                            {job.description}
                          </p>
                          <div className="flex items-center gap-2 text-white/40 text-xs">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#d52020]" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <button
          onClick={() => openOffices()}
                          className="shrink-0 border border-white/20 hover:border-[#d52020] hover:bg-[#d52020] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 transition-all duration-300"
                        >
                          {language === "en" ? "Apply Now" : "अप्लाई गर्नुहोस्"}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
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
                      <p className="text-white/90">{t.body.noOpenings}</p>
                      <p className="mt-2 text-white/70 text-sm">{t.body.stayTuned}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <GlobalCTA 
        onOfficesOpen={openOffices} 
        onBookingOpen={openBooking}
        onQuoteOpen={openQuote}
      />
      <Footer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModals 
        officesOpen={officesOpen}
        onOfficesClose={closeOffices}
        bookingOpen={bookingOpen}
        onBookingClose={closeBooking}
        quoteOpen={quoteOpen}
        onQuoteClose={closeQuote}
      />
    </>
  );
}
