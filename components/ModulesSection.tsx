"use client";

import { useLanguage, LocalizedString } from '@/context/LanguageContext';

interface Module {
    id: string;
    icon: string;
    title: LocalizedString;
}

interface ModulesSectionProps {
    title: LocalizedString;
    subtitle: LocalizedString;
    modules: Module[];
    onLearnMore?: () => void; // Optional handler for the button
}

// SVG Icon Component (black icons)
const ModuleIcon = ({ name }: { name: string }) => {
    const icons: Record<string, React.ReactNode> = {
        "digital-archive-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor"/>
                <path d="M9 9h6M9 13h6" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
        "office-automation": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor"/>
                <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor"/>
            </svg>
        ),
        "citizen-charter-and-record-management": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor"/>
                <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
        "integrated-mobile-application": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor"/>
                <circle cx="12" cy="18" r="1" fill="currentColor"/>
                <path d="M11 5h2" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
        "grant-management-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 2L2 20h20L12 2z" stroke="currentColor"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
            </svg>
        ),
        "hospital-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor"/>
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
        "digital-house-mapping": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" stroke="currentColor"/>
                <path d="M12 8v4l3 3" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
        "digital-ivr-call-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor"/>
                <circle cx="8" cy="12" r="1" fill="currentColor"/>
                <circle cx="16" cy="12" r="1" fill="currentColor"/>
                <path d="M9 16c1.5 1 4.5 1 6 0" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
        "digital-card-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor"/>
                <path d="M3 10h18" stroke="currentColor"/>
            </svg>
        ),
        "complaint-and-roster-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4" stroke="currentColor"/>
                <path d="M7 14h10M12 17v-3" stroke="currentColor" strokeLinecap="round"/>
                <circle cx="19" cy="19" r="2" stroke="currentColor"/>
                <circle cx="5" cy="19" r="2" stroke="currentColor"/>
            </svg>
        ),
        "court-judicial-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 3v18M5 21h14M3 7h18" stroke="currentColor"/>
                <path d="M7 7v4a2 2 0 1 1-4 0V7" stroke="currentColor"/>
                <path d="M21 7v4a2 2 0 1 1-4 0V7" stroke="currentColor"/>
            </svg>
        ),
        "project-management-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor"/>
                <path d="M7 7h10v10H7z" stroke="currentColor"/>
            </svg>
        ),
        "bank-management-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor"/>
                <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor"/>
            </svg>
        ),
        "birth-registration-and-mapping": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" stroke="currentColor"/>
                <path d="M6 20v-2a4 4 0 0 1 8 0v2" stroke="currentColor"/>
            </svg>
        ),
        "organization-department-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor"/>
                <path d="M16 3v4M8 3v4" stroke="currentColor"/>
            </svg>
        ),
        "recommendation-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor"/>
                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
        "digital-archive-record": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor"/>
                <path d="M9 9h6M9 13h6" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
        "office-automation-2": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor"/>
                <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor"/>
            </svg>
        ),
        "service-fee-management-system": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 1v22M5 6h14M5 18h14" stroke="currentColor"/>
            </svg>
        ),
        "complaint-portal": (
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
                <path d="M12 8v4" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        ),
    };
    return icons[name] || (
        <svg className="w-10 h-10 mb-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <path d="M8 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" />
        </svg>
    );
};

export function ModulesSection({ title, subtitle, modules, onLearnMore }: ModulesSectionProps) {
    const { t } = useLanguage();

    // Only show the first 5 modules for the homepage
    const visibleModules = modules.slice(0, 5);

    console.log(modules.map(m => m.id));

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
                    {visibleModules.map((module) => (
                        <div
                            key={module.id}
                            className="w-full max-w-xs bg-white border border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-200"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <ModuleIcon name={module.id} />
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

export { ModuleIcon };