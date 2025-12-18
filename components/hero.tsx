"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    return <HomeContent />;
}

const HomeContent = () => {
    const { lang } = useLanguage();

    const title = {
        en: 'Technology-enabled,\nTechnology-friendly\nDigital Palika',
        ne: 'प्रविधि युक्त,\nप्रविधि मैत्री\nडिजिटल पालिका',
    };
    
    const description = {
        en: 'Designed to save time and make citizens\' tasks easier through modern technology, information systems, and municipality management, transforming local bodies into technology-enabled digital municipalities.',
        ne: 'हरेक स्थानीय निकायलाई सूचना तथा आधुनिक प्रविधिको माध्यमबाट सशक्त बनाउँदै प्रविधि युक्त, प्रविधि मैत्री डिजिटल पालिकाको रूपमा रूपान्तरण गर्न परिकल्पना गरिएको एक प्रणाली डिजिटल पालिका हो ।',
    };

    const active = lang === 'ne' ? 'ne' : 'en';

    return (
        <section className="relative bg-white overflow-visible pt-20 md:pt-24">
            {/* Phone Mockup - Only show on large screens and up */}
            <div className="hidden lg:flex lg:absolute lg:right-20 xl:right-36 2xl:right-52 lg:top-[55%] lg:-translate-y-1/2 justify-center mt-8 lg:mt-0 z-30 pointer-events-none"
                style={{ pointerEvents: 'none' }}>
                <div className="relative w-[200px] sm:w-[230px] md:w-[250px] lg:w-[260px] xl:w-[280px] 2xl:w-[300px]">
                    {/* Phone Frame Shadow */}
                    <div className="absolute inset-0 bg-black/30 blur-2xl rounded-[3rem] scale-95"></div>
                    
                    {/* Phone Frame */}
                    <div className="relative bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-7 bg-black rounded-b-3xl z-10"></div>
                        
                        {/* Screen */}
                        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                            <img
                                src="/herosection.png"
                                alt="Digital Palika Mobile App"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-4 md:py-6 lg:py-6">
                {/* Blue Background Section - Full Width */}
                <div className="w-full bg-[#003893] slanted-top -mt-4 sm:-mt-6 lg:-mt-8">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative flex flex-col lg:flex-row items-center">
                            {/* Left Content */}
                            <div className="w-full lg:w-[60%] text-white pr-4 sm:pr-8 lg:pr-48 xl:pr-56 py-10 sm:py-12 lg:py-14 xl:py-18 relative z-10">
                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-5 sm:mb-6 leading-tight whitespace-pre-line">
                                    {title[active]}
                                </h1>

                                {/* Description */}
                                <p className="text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed opacity-90 max-w-2xl">
                                    {description[active]}
                                </p>
                            </div>
                            {/* (No phone here anymore) */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};