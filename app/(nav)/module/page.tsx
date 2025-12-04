"use client";

import { Fragment } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import Demo from "@/components/demo";

const modules = [
    { en: "Digital Nagarik Badapatra", ne: "डिजिटल नागरिक बडापत्र", icon: "FileText" },
    { en: "Office Automation", ne: "अफिस अटोमेसन", icon: "Hexagon" },
    { en: "Indhan Byabasthapan Pranali", ne: "इन्धन व्यवस्थापन प्रणाली", icon: "Calibrate" },
    { en: "Gunaso Portal", ne: "गुनासो पोर्टल", icon: "AlertTriangle" },
    { en: "Baithak Pranali", ne: "बैठक प्रणाली", icon: "Users" },
    { en: "Digital House Mapping Pass", ne: "⁠विद्युतीय घर नक्सा पास", icon: "Zap" },
    { en: "Organization/Business Registration", ne: "संस्था/व्यवसाय दर्ता", icon: "Home" },
    { en: "Recommendation System", ne: "सिफारिस", icon: "Users2" },
    { en: "Digital Card System", ne: "डिजिटल कार्ड प्रणाली", icon: "CreditCard" },
    { en: "Training & Roster System", ne: "तालिम तथा रोस्टर प्रणाली", icon: "Phone" },
    { en: "Court (Judicial)", ne: "इजलास (न्यायिक)", icon: "Scale" },
    { en: "Project Management System", ne: "योजना व्यवस्थापन प्रणाली", icon: "Project" },
    { en: "Grant Management", ne: "अनुदान व्यवस्थापन", icon: "PiggyBank" },
    { en: "Estimate System", ne: "Estimate सिस्टम", icon: "Database" },
    { en: "Digital LG Profile", ne: "डिजिटल एल. जी प्रोफाइल", icon: "Home" },
    { en: "Digital AVR Call System", ne: "डिजिटल AVR Call System", icon: "Phone" },
    { en: "Approval & Evaluation System", ne: "अनुमन र मूल्यांकन प्रणाली", icon: "Settings" },
    { en: "Palika News Portal", ne: "पालिक न्युज पोर्टल", icon: "AlertCircle" },
    { en: "Vendor Management", ne: "बेरुजू व्यवस्थापन", icon: "ShieldCheck" },
    { en: "Mobile Application", ne: "मोबाइल अनुप्रयोग", icon: "Hospital" },
];

const LucideIcons: Record<string, React.ReactNode> = {
    FileText: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <rect x="8" y="7" width="8" height="2" rx="0.5" fill="currentColor"/>
            <rect x="8" y="11" width="8" height="2" rx="0.5" fill="currentColor"/>
        </svg>
    ),
    Hexagon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2" />
        </svg>
    ),
    Calibrate: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="4" fill="currentColor"/>
        </svg>
    ),
    Bus: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="3" y="6" width="18" height="12" rx="2"/>
            <circle cx="7" cy="18" r="2"/>
            <circle cx="17" cy="18" r="2"/>
            <rect x="7" y="10" width="10" height="2" rx="1" fill="currentColor"/>
        </svg>
    ),
    ShieldCheck: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M12 3l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V7l7-4z"/>
            <path d="M9 12l2 2 4-4" strokeLinecap="round"/>
        </svg>
    ),
    AlertTriangle: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <polygon points="12 2 22 20 2 20 12 2"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>
    ),
    Hospital: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M12 8v8M8 12h8" />
        </svg>
    ),
    MapPin: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10z"/>
            <circle cx="12" cy="11" r="2" fill="currentColor"/>
        </svg>
    ),
    Users: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="9" cy="7" r="4"/>
            <circle cx="17" cy="13" r="3"/>
            <path d="M2 21v-2a4 4 0 0 1 4-4h6"/>
            <path d="M17 21v-1a4 4 0 0 0-3-3.87"/>
        </svg>
    ),
    CreditCard: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <rect x="6" y="15" width="4" height="2" fill="currentColor"/>
        </svg>
    ),
    Phone: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/>
        </svg>
    ),
    Scale: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M12 3v18M5 21h14M3 7h18"/>
            <path d="M7 7v4a2 2 0 1 1-4 0V7"/>
            <path d="M21 7v4a2 2 0 1 1-4 0V7"/>
        </svg>
    ),
    Project: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"/>
        </svg>
    ),
    PiggyBank: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="10" ry="7"/>
            <circle cx="8" cy="12" r="1" fill="currentColor"/>
            <circle cx="16" cy="12" r="1" fill="currentColor"/>
        </svg>
    ),
    UserPlus: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="9" cy="7" r="4"/>
            <path d="M17 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 11h6m-3-3v6"/>
        </svg>
    ),
    Home: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M3 12l9-9 9 9"/>
            <rect x="6" y="12" width="12" height="8" rx="2"/>
        </svg>
    ),
    Users2: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="9" cy="7" r="4"/>
            <circle cx="17" cy="13" r="3"/>
            <path d="M2 21v-2a4 4 0 0 1 4-4h6"/>
            <path d="M17 21v-1a4 4 0 0 0-3-3.87"/>
        </svg>
    ),
    Database: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
        </svg>
    ),
    Settings: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
    ),
    Zap: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
    ),
    AlertCircle: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>
    ),
};

export default function ModulePage() {
    const { t, lang } = useLanguage();

    return (
        <Fragment>
            <Header />
            <main className="bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
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
                        {modules.map((module, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center border border-gray-200 bg-white rounded-none p-8 min-h-[180px] justify-center text-center hover:shadow transition"
                            >
                                <div className="mb-4">{LucideIcons[module.icon]}</div>
                                <div className="text-base font-semibold text-black leading-tight">
                                    {lang === "ne" ? module.ne : module.en}
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