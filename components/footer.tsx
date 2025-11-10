"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteData } from '@/lib/siteData';
import { Mail, Phone, MapPin, QrCode } from 'lucide-react'; // Lucide icons for contact details

// Helper component for rendering individual link groups (Quick Links, User Support)
const FooterLinkGroup = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => {
    return (
        <div>
            <h4 className="text-lg font-bold text-[#ffffff] mb-4 border-b border-[#000000] pb-1">
                {title}
            </h4>
            <ul className="space-y-3">
                {links.map((link, index) => (
                    <li key={index}>
                        <a 
                            href={link.href} 
                            className="text-[#ffffff] hover:text-[#6b6b6b] transition-colors duration-200 text-sm font-medium"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Helper component for rendering individual contact details
const ContactDetailItem = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => (
    <div className="flex items-start space-x-3">
        {/* Primary changed from blue to black for contrast on blue background */}
        <span className="text-[#ffffff] mt-1 flex-shrink-0">{icon}</span>
        <div className="text-sm">
            <span className="text-[#ffffff] font-semibold block">{label}:</span>
            <span className="text-[#ffffff] block mt-0.5">{value}</span>
        </div>
    </div>
);

/**
 * Footer Component: Renders the entire site footer using dynamic, translated content.
 */
export const Footer = () => {
    const { t } = useLanguage();
    const footerData = siteData.footer;

    const getIconForDetail = (label: string): React.ReactNode => {
        const lowerLabel = label.toLowerCase();
        if (lowerLabel.includes('office')) return <MapPin size={18} />;
        if (lowerLabel.includes('phone') || lowerLabel.includes('mobile')) return <Phone size={18} />;
        if (lowerLabel.includes('email')) return <Mail size={18} />;
        return <MapPin size={18} />;
    };

    const copyrightText = t(footerData.copyright)
        .replace('${new Date().getFullYear()}', new Date().getFullYear().toString());

    return (
        // Primary background set to dark blue
        <footer className="bg-[#001841] text-[#ffffff]">
            {/* Main Footer Content Area */}
            <div className="container mx-auto max-w-7xl px-4 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Column 1: Company Info & Moto */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-3xl font-extrabold text-[#ffffff]" style={{ marginLeft: "-20px" }}>
                            {t(footerData.companyName)}
                        </h3>
                        <p className="text-[#ffffff] max-w-sm" style={{ marginLeft: "-20px" }}>
                            {t(footerData.companyMoto)}
                        </p>
                        <div className="pt-2">
                            {/* Badge inverted: black bg with gray text */}
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-none bg-[#ffffff] text-[#001841]" style={{ marginLeft: "-20px" }}>
                                {t(footerData.isoText)}
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <FooterLinkGroup 
                        title={t(footerData.quickLinks.title)}
                        links={footerData.quickLinks.links.map(l => ({ label: t(l.label), href: l.href }))}
                    />

                    {/* Column 3: User Support */}
                    <FooterLinkGroup
                        title={t(footerData.userSupport.title)}
                        links={footerData.userSupport.links.map(l => ({ label: t(l.label), href: l.href }))}
                    />

                    {/* Column 4: Contact Information */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-[#ffffff] mb-4 border-b border-[#000000] pb-1">
                            {t(footerData.contactInfo.title)}
                        </h4>
                        <div className="space-y-4">
                            {footerData.contactInfo.details.map((detail, index) => (
                                <ContactDetailItem 
                                    key={index}
                                    label={t(detail.label)}
                                    value={t(detail.value)}
                                    icon={getIconForDetail(t(detail.label))}
                                />
                            ))}
                        </div>
                        
                        {/* QR Code Placeholder Note */}
                        <div className="flex items-center space-x-2 pt-2 text-sm italic">
                            <QrCode size={18} className="text-[#ffffff]" />
                            <span>{t(footerData.contactInfo.note)}</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#000000] py-4">
                <div className="container mx-auto max-w-7xl px-4 flex justify-center text-sm font-inter">
                    {copyrightText}
                </div>
            </div>
        </footer>
    );
};
