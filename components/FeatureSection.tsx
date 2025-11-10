"use client";

import { useLanguage, LocalizedString } from '@/context/LanguageContext';
import { FeatureItem } from '@/lib/siteData';
import React from 'react';
import {Monitor, Building, ListChecks, Calculator, Info, Video, Globe, BarChart, Users, ClipboardCheck, Box, Car, MessageSquare, FileText, Smartphone, Zap} from 'lucide-react';
interface FeatureSectionProps {
    title: LocalizedString;
    subtitle: LocalizedString;
    features: FeatureItem[];
}

// Map icon string to Lucide React icon component
const iconMap: Record<string, React.ElementType> = {
    monitor: Monitor,
    building: Building,
    "list-check": ListChecks,
    calculator: Calculator,
    "info-circle": Info,
    video: Video,
    globe: Globe,
    "barChart": BarChart,
    users: Users,
    clipboardCheck: ClipboardCheck,
    box: Box,
    car: Car,
    messageSquare: MessageSquare,
    fileText: FileText,
    smartphone: Smartphone,
    zap: Zap,
};

// Animated glow background for icon
const FeatureIcon = ({ icon }: { icon: string }) => {
    const LucideIcon = iconMap[icon] || Monitor;
    return (
        <div className="relative w-16 h-16 flex items-center justify-center mb-6">
            {/* Animated glow background */}
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse-slow" />

            {/* Main Icon container */}
            <div className="relative w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-md">
                <LucideIcon size={32} />
            </div>
        </div>
    );
};

// Keyframes (custom animation)
const style = `
@keyframes pulse-slow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
}
.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}
`;

export const FeatureSection = ({ title, subtitle, features }: FeatureSectionProps) => {
    const { t } = useLanguage();

    return (
        <>
            {/* Inject animation style */}
            <style>{style}</style>

            <section className="bg-paper py-20 md:py-28 px-4">
                <div className="container mx-auto max-w-7xl">
                    
                    {/* Section Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-3xl md:text-4xl font-work-sans font-bold text-blue-900 mb-4">
                            {t(title)}
                        </h1>
                        <p className="text-lg md:text-xl text-black font-inter leading-relaxed">
                            {t(subtitle)}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                        {features.map((feature) => (
                            <div 
                                key={feature.id} 
                                className="bg-secondary p-8 rounded-xl transition duration-300 transform hover:-translate-y-1 border border-slate-200"
                            >
                                <FeatureIcon icon={feature.icon} />

                                <h3 className="text-xl font-work-sans font-semibold text-black mb-2">
                                    {t(feature.title)}
                                </h3>
                                
                                <p className="text-base text-black font-inter">
                                    {t(feature.description)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
