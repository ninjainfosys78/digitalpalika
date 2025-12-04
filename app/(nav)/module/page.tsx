"use client";

import { Fragment } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import Demo from "@/components/demo";
import { useModules } from "@/hooks/useModules";
import pb, { type Module } from "@/lib/pocketbase";

export default function ModulePage() {
    const { t, lang } = useLanguage();
    const { modules, loading, error } = useModules();

    const getImageUrl = (module: Module) => {
        try {
            if (!module.img) return '/placeholder.png';
            
            const imageFile = Array.isArray(module.img) ? module.img[0] : module.img;
            
            if (!imageFile) return '/placeholder.png';
            
            return pb.files.getURL(module, imageFile);
        } catch (error) {
            console.error('Error loading image:', error);
            return '/placeholder.png';
        }
    };

    if (loading) {
        return (
            <Fragment>
                <Header />
                <main className="bg-white min-h-screen">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <div className="text-center">
                            <p className="text-gray-600">{t({ en: "Loading modules...", ne: "मोड्युलहरू लोड हुँदैछ..." })}</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </Fragment>
        );
    }

    if (error) {
        return (
            <Fragment>
                <Header />
                <main className="bg-white min-h-screen">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <div className="text-center text-red-600">
                            <p>{error}</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Header />
            <main className="bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="block text-[#003893] font-semibold mb-2">
                            {t({ en: "Modules", ne: "मोड्युलहरू" })}
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
                            {t({
                                en: "Comprehensive digital solutions for modern municipalities.",
                                ne: "आधुनिक पालिकाका लागि समग्र डिजिटल समाधानहरू।"
                            })}
                        </h2>
                        <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className="flex flex-col items-center border border-gray-200 bg-white rounded-none p-8 min-h-[180px] justify-center text-center hover:shadow transition"
                            >
                                <div className="mb-4 w-16 h-16 flex items-center justify-center">
                                    <img
                                        src={getImageUrl(module)}
                                        alt={lang === "ne" ? module.ne_name : module.en_name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="text-base font-semibold text-black leading-tight">
                                    {lang === "ne" ? module.ne_name : module.en_name}
                                </div>
                            </div>
                        ))}
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