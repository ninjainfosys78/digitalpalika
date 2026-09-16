"use client";

import { useLanguage, LocalizedString } from '@/context/LanguageContext';
import { modulesData } from '@/lib/modulesData';

// Add the correct type for ModulesSectionProps
export interface ModulesSectionProps {
    title: LocalizedString;
    subtitle: LocalizedString;
    onLearnMore?: () => void;
}

export function ModulesSection({ title, subtitle, onLearnMore }: ModulesSectionProps) {
    const { t, lang } = useLanguage();

    // Only show the first 5 modules for the homepage
    const visibleModules = modulesData.slice(0, 5);

    return (
        <section className="bg-white py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="block text-[#003893] text-[16px] font-inter font-medium mb-2">
                        {t({ en: "Modules", ne: "मोड्युलहरू" })}
                    </span>
                    <h2 className="text-[28px] font-bold text-black mb-2">
                        {t(title)}
                    </h2>
                    <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                    <p className="text-lg text-gray-700 mb-2">{t(subtitle)}</p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                    {visibleModules.map((module) => {
                        const Icon = module.icon;
                        return (
                            <div
                                key={module.id}
                                className="flex flex-col items-center border border-gray-200 bg-white rounded-none p-8 min-h-[180px] justify-center text-center hover:shadow transition"
                            >
                                <div className="mb-4 w-16 h-16 flex items-center justify-center">
                                    <Icon className="w-10 h-10 text-[#003893]" strokeWidth={1.5} />
                                </div>
                                <div className={lang === 'ne' ? "text-black font-inter text-base text-center" : "text-base font-semibold text-black leading-tight"}>
                                    {t(module.name)}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Learn More Button */}
                <div className="flex justify-center">
                    <a
                        href="/module"
                        className="inline-flex items-center justify-center gap-2 bg-[#003893] hover:bg-[#002f72] text-white text-base px-8 py-3.5"
                    >
                        {t({ en: 'Learn more', ne: 'थप विवरण हेर्नुहोस्' })}
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M13 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
