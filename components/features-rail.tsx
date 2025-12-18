"use client";

import { useLanguage } from '@/context/LanguageContext';
import { usePathname } from 'next/navigation';
import { useFeatures } from '@/hooks/useFeatures';
import pb, { type Feature } from '@/lib/pocketbase';

export default function FeatureRail() {
    const { t, lang } = useLanguage();
    const pathname = usePathname();
    const { features, loading } = useFeatures();

    const active = lang === 'ne' ? 'ne' : 'en';
    const isFeaturePage = pathname === '/features';

    // Get only first 5 features
    const displayFeatures = features.slice(0, 5);

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
            <section
                className="w-full py-12 md:py-16"
                style={{ backgroundColor: isFeaturePage ? 'transparent' : '#eef6fb' }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600">{t({ en: "Loading features...", ne: "विशेषताहरू लोड हुँदैछ..." })}</p>
                </div>
            </section>
        );
    }

    return (
        <section
            className="w-full py-12 md:py-16"
            style={{ backgroundColor: isFeaturePage ? 'transparent' : '#eef6fb' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[16px] text-[#003893] font-medium mb-3">
                    {active === 'ne' ? 'विशेषताहरु' : 'Features'}
                </p>
                <h2 className="text-[28px] font-bold mb-3 sm:mb-4 text-[#000000] mb-4">
                    {active === 'ne'
                        ? 'स्मार्ट, जडित डिजिटल प्लेटफर्म मार्फत स्थानीय शासनलाई सरल बनाउँदै।'
                        : 'Simplifying local governance through a smart, connected digital platform.'}
                </h2>
                <div className="w-24 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#003893' }}></div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start mb-8">
                    {displayFeatures.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-center text-center md:items-start md:text-left">
                            <div className="w-full overflow-hidden bg-white">
                                <div className="w-full h-40 sm:h-44 md:aspect-square">
                                    <img
                                        src={getImageUrl(feature)}
                                        alt={active === 'ne' ? feature.ne_name : feature.en_name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <p className="text-sm text-[#000000] leading-relaxed mt-3">
                                {active === 'ne' ? feature.ne_name : feature.en_name}
                            </p>
                        </div>
                    ))}
                </div>

                {!isFeaturePage && (
                    <div className="flex justify-center">
                        <a
                            href="/features"
                            className="inline-flex items-center justify-center gap-2 bg-[#003893] hover:bg-[#002f72] text-white text-base px-8 py-3.5"
                        >
                            {t({ en: 'Learn more', ne: 'थप विवरण हेर्नुहोस्' })}
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M5 12h14M13 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
