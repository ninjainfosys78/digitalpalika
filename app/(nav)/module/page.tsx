"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage } from '@/context/LanguageContext';
import { siteData } from '@/lib/siteData';
import { ModuleIcon } from '@/components/ModulesSection';
import Demo from '@/components/demo';

export default function ModulePage() {
    const { t } = useLanguage();
    const modules = siteData.modulesSection.modules;

    return (
        <Fragment>
            <Header />
            <main id="main-content" className="bg-white pt-12 min-h-screen">
                <div className="container mx-auto px-4 pb-16">
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
                {/* Demo Section from homepage */}
                <Demo />
            </main>
            <Footer />
        </Fragment>
    );
}