"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteData } from '@/lib/siteData';

// --- Icon Component: Renders Lucide Icons based on the string name ---
// This centralizes all 12 icon definitions needed for the modules section.
const Icon = ({ name, className = "h-6 w-6" }: { name: string, className?: string }) => {
    // FIX: Explicitly define React.ReactNode for children and JSX.Element for the return type.
    const SvgWrapper = (children: React.ReactNode): React.JSX.Element => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {children}
        </svg>
    );

    switch (name) {
        case 'clipboardCheck': // Digital Citizen Register
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M15 2H9a1 1 0 0 0-1 1v1h8V3a1 1 0 0 0-1-1z" />
                <path d="m9 14 2 2 4-4" />
            </>);
        case 'box': // Office Automation
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 0-6 6H9L3 8m18 0v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8m9 6V8" />
            </>);
        case 'car': // Vehicle Service Management
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9.5-.6.5-1.5 0-2l-2-3.4c-.6-1-1.7-1.3-2.7-.8L8.7 8.3C7.3 9 7 10.7 7.7 12l2.3 4h6" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
            </>);
        case 'messageSquare': // Complaint Portal
            return SvgWrapper(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />);
        case 'users': // Meeting Management
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 13v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </>);
        case 'zap': // Electricity/Water/Tax (EBPS)
            return SvgWrapper(<path d="M10 2L3 22l8-4 4 4 8-20-8 4-4-4z" />);
        case 'building': // Institution/Business Registration
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <rect x="2" y="5" width="20" height="17" rx="2" ry="2" />
                <path d="M10 10h4" />
                <path d="M12 2v3" />
            </>);
        case 'fileText': // Recommendation
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
            </>);
        case 'barChart': // Research & Evaluation
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
            </>);
        case 'calculator': // Estimate System
            // FIX: Wrapped adjacent elements in a Fragment (<></>). This icon is quite complex.
            return SvgWrapper(<>
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="16" y1="10" x2="16" y2="18" />
                <line x1="12" y1="10" x2="12" y2="18" />
                <line x1="8" y1="10" x2="8" y2="18" />
                <line x1="8" y1="14" x2="16" y2="14" />
            </>);
        case 'globe': // Digital GL Profile
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0-4-10 15.3 15.3 0 0 0 4-10z" />
                <line x1="2" y1="12" x2="22" y2="12" />
            </>);
        case 'smartphone': // Integrated Mobile App
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" />
            </>);
        default:
            // FIX: Wrapped adjacent elements in a Fragment (<></>)
            return SvgWrapper(<>
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 16v-4"/><path d="M12 8h.01"/> {/* Changed default to 'info' icon for better fallback */}
            </>);
    }
};

/**
 * Features Component
 * Renders the 12 digital module cards using translated content.
 */
export const Features = () => {
    // Get translation function and site data
    const { t } = useLanguage();
    const modules = siteData.modules;
    const items = modules.items;

    return (
        <section className="bg-white py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Section Title and Description */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        {t(modules.title)}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        {t(modules.description)}
                    </p>
                </div>
                
                {/* Modules Grid (4 columns on large screens) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {items.map((item) => (
                        <div 
                            key={item.id} 
                            // Apply dynamic color class from siteData, ensuring text visibility (text-white for darker backgrounds)
                            className={`p-6 rounded-xl shadow-lg border-2 border-transparent transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${item.colorClass} 
                                ${item.colorClass.includes('text-white') ? 'text-white' : 'text-gray-900'}`
                            }
                        >
                            {/* Icon Container */}
                            <div className="mb-4">
                                <Icon name={item.iconName} className="h-8 w-8" />
                            </div>

                            {/* Title (Label) */}
                            <h3 className="text-xl font-bold mb-2">
                                {t(item.label)}
                            </h3>

                            {/* Description (If available) */}
                            {item.description && (
                                <p className={`text-sm ${item.colorClass.includes('text-white') ? 'text-gray-200' : 'text-gray-600'}`}>
                                    {t(item.description)}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
