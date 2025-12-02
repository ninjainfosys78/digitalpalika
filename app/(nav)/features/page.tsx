"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage, LanguageProvider } from '@/context/LanguageContext';
import { siteData, FullSiteContent } from '@/lib/siteData';
import Demo from '@/components/demo';

export const dynamic = 'force-dynamic';

export default function FeaturesPage() {
    return (
        <LanguageProvider>
            <FeaturesContent />
        </LanguageProvider>
    );
}

function FeaturesContent() {
    const content: FullSiteContent = siteData;
    const { featuresPage } = content;
    const { t } = useLanguage();

    const featureImages = [
        "/feature1.png",
        "/feature2.png",
        "/feature3.png",
        "/feature4.png",
        "/feature5.png",
        "/feature6.png",
        "/feature7.png",
    ];

    const features = [
        {
            img: featureImages[0],
            title: t({
                en: "Integrated mobile and web-based system",
                ne: "एकीकृत मोबाइल र वेब-आधारित प्रणाली"
            }),
            desc: "",
        },
        {
            img: featureImages[1],
            title: t({
                en: "Online access to citizen services and information",
                ne: "नागरिक सेवाहरू र जानकारीमा अनलाइन पहुँच"
            }),
            desc: "",
        },
        {
            img: featureImages[2],
            title: t({
                en: "Online application, registration, and certificate issuance for municipal services",
                ne: "नगरपालिका सेवाहरूको लागि अनलाइन आवेदन, दर्ता, र प्रमाणपत्र जारी"
            }),
            desc: "",
        },
        {
            img: featureImages[3],
            title: t({
                en: "Personal, business, and institutional information",
                ne: "व्यक्तिगत, व्यवसायिक, र संस्थागत जानकारी"
            }),
            desc: "",
        },
        {
            img: featureImages[4],
            title: t({
                en: "Active citizen participation in daily municipal activities",
                ne: "दैनिक नगरपालिका गतिविधिहरूमा सक्रिय नागरिक सहभागिता"
            }),
            desc: "",
        },
        {
            img: featureImages[5],
            title: t({
                en: "Automating workflow for efficiency",
                ne: "दक्षताका लागि कार्यप्रवाह स्वचालित गर्दै"
            }),
            desc: "",
        },
        {
            img: featureImages[6],
            title: t({
                en: "Providing a seamless experience for citizens interacting with the municipality sitting from home",
                ne: "घरमै बसेर पालिकासँग अन्तरक्रिया गर्ने नागरिकहरूका लागि सहज अनुभव प्रदान गर्दै"
            }),
            desc: "",
        },
    ];

    return (
        <Fragment>
            <Header />
            <main className="bg-white pt-10 min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="block text-[#003893] font-semibold mb-2">
                            {t({ en: "Features", ne: "विशेषताहरू" })}
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
                            {t({
                                en: "Simplifying local governance through a smart, connected digital platform.",
                                ne: "स्मार्ट, जडित डिजिटल प्लेटफर्ममार्फत स्थानीय शासनलाई सरल बनाउँदै।"
                            })}
                        </h2>
                        <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-full aspect-[4/3] bg-gray-100 rounded overflow-hidden mb-3 flex items-center justify-center">
                                    <img
                                        src={feature.img}
                                        alt={feature.title}
                                        className="object-cover w-full h-full"
                                        draggable={false}
                                    />
                                </div>
                                <div className="w-full text-center">
                                    <div className="text-base font-medium text-black mb-1">
                                        {feature.title}
                                    </div>
                                    {feature.desc && (
                                        <div className="text-sm text-gray-600">{feature.desc}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Add margin-top above Demo, remove margin-bottom below Demo */}
                <div className="mt-12">
                    <Demo />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}