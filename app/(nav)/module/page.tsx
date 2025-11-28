"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage } from '@/context/LanguageContext';
import { siteData } from '@/lib/siteData';
import { ModuleIcon } from '@/components/ModulesSection';

export default function ModulePage() {
    const { t } = useLanguage();
    const modules = siteData.modulesSection.modules;

    return (
        <Fragment>
            <Header />
            <main id="main-content" className="bg-white pt-12 min-h-screen">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="block text-[#003893] font-semibold mb-2">Modules</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
                            {t(siteData.modulesSection.title)}
                        </h2>
                        <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                        <p className="text-lg text-gray-700 mb-2">{t(siteData.modulesSection.subtitle)}</p>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className="bg-white border"
                                style={{ borderColor: "#B0C1DE" }}
                            >
                                <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                                    <ModuleIcon name={module.id} />
                                    <h3 className="text-base font-bold text-black leading-tight">
                                        {t(module.title)}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Demo Section - full width, only Tailwind */}
                <section className="w-full bg-[#e9eff7] mt-12 py-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                            {t({
                                en: "Do you want to see a Demo?",
                                ne: "डेमो हेर्न चाहनुहुन्छ?"
                            })}
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                            {t({
                                en: "Hello, we are continuously campaigning to transform you and your municipality into digital. We want to understand the situation and needs of your municipality and show to demo to transform into technology-friendly municipality.",
                                ne: "नमस्ते, हामी तपाईं र तपाईंको पालिकालाई डिजिटलमा रूपान्तरण गर्न निरन्तर अभियान सञ्चालन गर्दैछौं। हामी तपाईंको पालिकाको अवस्था र आवश्यकताहरू बुझ्न चाहन्छौं र प्रविधिमैत्री पालिकामा रूपान्तरण गर्न डेमो देखाउन चाहन्छौं।"
                            })}
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold bg-[#003893] text-white hover:bg-[#002366] transition rounded-none min-w-[120px]"
                        >
                            {t({ en: "See Demo", ne: "डेमो हेर्नुहोस्" })}
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </Fragment>
    );
}