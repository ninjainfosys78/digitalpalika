"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function Demo() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden bg-white py-14 md:py-20">
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl bg-gradient-to-br from-[#f2f7fd] to-white shadow-md shadow-[#003893]/10 px-6 py-10 sm:px-12 sm:py-14 text-center">
                    <h2 className="text-black text-[28px] sm:text-3xl font-bold mb-4">
                        {t({ en: 'Do you want to see the demo?', ne: 'डेमो हेर्न चाहनु हुन्छ ?' })}
                    </h2>

                    <p className="mx-auto max-w-[620px] text-sm sm:text-base text-gray-700 mb-8 leading-relaxed">
                        {t({
                            en: "We're on a mission to help your municipality go digital. Let us understand your needs and show you a demo tailored to you.",
                            ne: 'हामी तपाईंको पालिकालाई डिजिटल बनाउने अभियानमा छौं । तपाईंको आवश्यकता बुझेर उपयुक्त डेमो देखाउन चाहन्छौं ।'
                        })}
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 bg-[#003893] hover:bg-[#002f72] text-white font-semibold text-base px-8 py-3.5 shadow-lg shadow-[#003893]/20 transition-all duration-200 hover:-translate-y-0.5"
                            aria-label="See demo"
                        >
                            {t({ en: 'See Demo', ne: 'डेमो हेर्नुहोस्' })}
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:translate-x-1">
                                <path d="M5 12h14M13 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
