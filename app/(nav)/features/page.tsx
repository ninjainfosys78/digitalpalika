"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage } from '@/context/LanguageContext';
import Demo from '@/components/demo';
import { useFeatures } from '@/hooks/useFeatures';
import pb, { type Feature } from '@/lib/pocketbase';

export const dynamic = 'force-dynamic';

export default function FeaturesPage() {
    const { t, lang } = useLanguage();
    const { features, loading, error } = useFeatures();

    const getImageUrl = (feature: Feature) => {
        try {
            if (!feature.img) return '/placeholder.png';
            
            const imageFile = Array.isArray(feature.img) ? feature.img[0] : feature.img;
            
            if (!imageFile) return '/placeholder.png';
            
            return pb.files.getURL(feature, imageFile);
        } catch (error) {
            console.error('Error loading image:', error);
            return '/placeholder.png';
        }
    };

    if (loading) {
        return (
            <Fragment>
                <Header />
                <main className="bg-white pt-10 min-h-screen">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center">
                            <p className="text-gray-600">{t({ en: "Loading features...", ne: "विशेषताहरू लोड हुँदैछ..." })}</p>
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
                <main className="bg-white pt-10 min-h-screen">
                    <div className="max-w-7xl mx-auto px-4">
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
            <main className="bg-white pt-10 min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="block text-[#003893] font-semibold mb-2">
                            {t({ en: "Features", ne: "विशेषताहरू" })}
                        </span>
                        <h2 className="text-[28px] font-bold text-black mb-2">
                            {t({
                                en: "Simplifying local governance through a smart, connected digital platform.",
                                ne: "स्मार्ट, जडित डिजिटल प्लेटफर्ममार्फत स्थानीय शासनलाई सरल बनाउँदै।"
                            })}
                        </h2>
                        <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex flex-col items-center">
                                <div className="w-full aspect-[4/3] bg-gray-100 rounded overflow-hidden mb-3 flex items-center justify-center">
                                    <img
                                        src={getImageUrl(feature)}
                                        alt={lang === "ne" ? feature.ne_name : feature.en_name}
                                        className="object-cover w-full h-full"
                                        draggable={false}
                                    />
                                </div>
                                <div className="w-full text-center">
                                    <div className="text-base font-medium text-black mb-1">
                                        {lang === "ne" ? feature.ne_name : feature.en_name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12">
                    <Demo />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}