"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutPageSection, StatisticItem } from '@/lib/siteData'; // Import types

// --- TYPES ---
interface AboutSectionProps {
    sections: AboutPageSection[];
    stats: StatisticItem[];
}

// --- MAIN ABOUT SECTION COMPONENT ---

const SectionRenderer = ({ section }: { section: AboutPageSection }) => {
    const { t } = useLanguage();
    const isList = !Array.isArray(section.content);

    // Detect section type
    const isIntroduction = section.id === 'introduction';
    const isObjectives = section.id === 'objectives';

    // Layout logic
    const imageOnRight = isIntroduction ? false : section.imagePosition === 'right';
    const layoutClasses = isIntroduction ? 'md:flex-row' : (imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row');
    const textOrder = 'order-1';
    const imageOrder = 'order-2';

    // Set image source based on section
    let imageSrc = '';
    if (isIntroduction) imageSrc = '/Introduction.png';
    if (isObjectives) imageSrc = '/Objectives.png';

    return (
        <div 
            className={`flex flex-col ${layoutClasses} gap-8 lg:gap-12 py-12 md:py-16 border-b border-slate-100 last:border-b-0`}
            id={section.id}
        >
            {/* Text Block */}
            <div className={`w-full md:w-1/2 ${textOrder}`}>
                <h2 className={`text-3xl font-work-sans font-extrabold text-primary text-blue-900 mb-4 ${(isIntroduction || isObjectives) ? 'text-3xl' : 'text-primary'}`}>
                    {t(section.title)}
                </h2>
                {/* Paragraphs */}
                {!isList && Array.isArray(section.content) && section.content.map((p, index) => (
                    <p key={index} className={`text-sm md:text-base font-inter leading-relaxed mb-3 text-justify ${(isIntroduction || isObjectives) ? 'text-black' : 'text-slate'}`}>
                        {t(p)}
                    </p>
                ))}
                {/* Objectives List */}
                {isList && !Array.isArray(section.content) && section.content.type === 'list' && (
                    <ul className="text-sm md:text-base text-black font-inter space-y-3 list-disc list-inside ml-4 text-justify">
                        {section.content.items.map((item, index) => (
                            <li key={index} className="text-black text-justify">
                                {t(item)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* Image Block */}
            {(isIntroduction || isObjectives) && (
                <div className={`w-full md:w-1/2 ${imageOrder} flex justify-center items-center`}>
                    <div className="w-full h-auto max-w-lg overflow-hidden">
                        <Image
                            src={imageSrc}
                            alt={t(section.title)}
                            width={600}
                            height={400}
                            style={{ width: '100%', height: 'auto' }}
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export const AboutSection = ({ sections, stats }: AboutSectionProps) => {
    const { t } = useLanguage();

    return (
        <section className="bg-paper px-4">
            <div className="container mx-auto max-w-7xl">
                
                {/* Render all content sections (Introduction, Objectives, etc.) */}
                {sections.map(section => (
                    <SectionRenderer key={section.id} section={section} />
                ))}

                {/* Removed the Animated Stats Section */}
            </div>
        </section>
    );
}

