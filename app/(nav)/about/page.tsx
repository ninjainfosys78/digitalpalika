"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/AboutSection';
import { LanguageProvider } from '@/context/LanguageContext';
import { siteData, FullSiteContent } from '@/lib/siteData';

// --- Main About Page Component ---
export default function AboutPage() {
    return (
        <LanguageProvider>
            <AboutContent />
        </LanguageProvider>
    );
}

// --- Component to render the page content ---
const AboutContent = () => {
    // Use the imported global data
    const content: FullSiteContent = siteData;

    // The AboutSection now takes the entire array of sections
    const aboutSections = content.aboutPage.sections;
    const stats = content.statistics;

    return (
        <Fragment>
            <Header />
            <main id="main-content">
                <AboutSection sections={aboutSections} stats={stats} />
            </main>
            <Footer />
        </Fragment>
    );
};