"use client";

import { useLanguage, LocalizedString } from '@/context/LanguageContext';

// Only the first 5 modules
export const modules: {
    id: string;
    icon: string;
    title: LocalizedString;
}[] = [
    {
        id: "digital-archive",
        icon: "FileText",
        title: {
            en: "Digital Archive",
            ne: "डिजिटल नागरिक बडापत्र"
        }
    },
    {
        id: "office-automation",
        icon: "Briefcase",
        title: {
            en: "Office Automation",
            ne: "अफिस अटोमेसन"
        }
    },
    {
        id: "fuel-management",
        icon: "Fuel",
        title: {
            en: "Fuel Management System",
            ne: "इन्धन व्यवस्थापन प्रणाली"
        }
    },
    {
        id: "complaint-portal",
        icon: "MessageCircleWarning",
        title: {
            en: "Complaint Portal",
            ne: "गुनासो पोर्टल"
        }
    },
    {
        id: "meeting-management",
        icon: "Users2",
        title: {
            en: "Meeting Management",
            ne: "बैठक प्रणाली"
        }
    }
];

// Only SVGs for the first 5 modules
const LucideIcons: Record<string, React.ReactNode> = {
    FileText: (
        <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor"/>
            <rect x="8" y="7" width="8" height="2" rx="0.5" fill="currentColor"/>
            <rect x="8" y="11" width="8" height="2" rx="0.5" fill="currentColor"/>
        </svg>
    ),
    Briefcase: (
        <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor"/>
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor"/>
        </svg>
    ),
    Fuel: (
        <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="3" y="11" width="13" height="10" rx="2" stroke="currentColor"/>
            <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor"/>
            <circle cx="13.5" cy="16.5" r="1.5" fill="currentColor"/>
            <path d="M16 16v-5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5" stroke="currentColor"/>
        </svg>
    ),
    MessageCircleWarning: (
        <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor"/>
            <path d="M12 8v4" stroke="currentColor" strokeLinecap="round"/>
            <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>
    ),
    Users2: (
        <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="9" cy="7" r="4" stroke="currentColor"/>
            <circle cx="17" cy="13" r="3" stroke="currentColor"/>
            <path d="M2 21v-2a4 4 0 0 1 4-4h6" stroke="currentColor"/>
            <path d="M17 21v-1a4 4 0 0 0-3-3.87" stroke="currentColor"/>
        </svg>
    ),
};

export const ModuleIcon = ({ name }: { name: string }) => {
    return LucideIcons[name] || (
        <svg className="w-10 h-10 mb-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <path d="M8 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" />
        </svg>
    );
};

// Add the correct type for ModulesSectionProps
export interface ModulesSectionProps {
    title: LocalizedString;
    subtitle: LocalizedString;
    modules: typeof modules;
    onLearnMore?: () => void;
}

export function ModulesSection({ title, subtitle, modules, onLearnMore }: ModulesSectionProps) {
    const { t } = useLanguage();

    // Only show the first 5 modules for the homepage
    const visibleModules = modules.slice(0, 5);

    // Fix: m should be module in the map function for clarity and correctness
    console.log(modules.map(module => module.id));

    return (
        <section className="bg-white py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="block text-[#003893] font-semibold mb-2">Modules</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
                        {t(title)}
                    </h2>
                    <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                    <p className="text-lg text-gray-700 mb-2">{t(subtitle)}</p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
                    {visibleModules.map(module => (
                        <div
                            key={module.id}
                            className="w-full max-w-xs bg-white border border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-200"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <ModuleIcon name={module.icon} />
                            </div>
                            {/* Title */}
                            <h3 className="text-base font-bold text-black leading-tight">
                                {t(module.title)}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Learn More Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => window.location.href = "/module"}
                        className="bg-[#003893] text-white px-8 py-2 font-semibold flex items-center gap-2 hover:bg-[#002366] transition rounded-none"
                    >
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}