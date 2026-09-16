"use client";

import { Fragment } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import Demo from "@/components/demo";
import { modulesData } from "@/lib/modulesData";

export default function ModulePage() {
    const { t, lang } = useLanguage();

    return (
        <Fragment>
            <Header />
            <main className="bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-[28px] font-bold text-[#003893] mb-2">
                            {t({
                                en: "Digital Palika Modules",
                                ne: "डिजिटल पालिका मोड्युल"
                            })}
                        </h2>
                        <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                        <p className="text-black font-inter text-base">
                            {t({
                                en: "Detailed information about the modules used in the Digital Palika system.",
                                ne: "डिजिटल पलिका प्रणालीमा प्रयोग भएका मोड्युलहरु को बिस्तृत जानकारी ।"
                            })}
                        </p>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {modulesData.map((module) => {
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

                    {/* Add space below the modules */}
                    <div className="h-10" />
                </div>
                {/* Demo Section full width */}
                <Demo />
            </main>
            <Footer />
        </Fragment>
    );
}
