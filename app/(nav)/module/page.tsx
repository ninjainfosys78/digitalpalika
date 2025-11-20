"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { ModulesSection } from '@/components/ModulesSection';
import { LanguageProvider } from '@/context/LanguageContext';
import { siteData } from '@/lib/siteData';

// --- Main Module Page Component ---
export default function ModulePage() {
    return (
        <LanguageProvider>
            <ModuleContent />
        </LanguageProvider>
    );
}

// --- Component to render the page content ---
const ModuleContent = () => {
    return (
        <Fragment>
            <Header />
            <main id="main-content">
                <ModulesSection 
                    title={siteData.modulesSection.title}
                    subtitle={siteData.modulesSection.subtitle}
                    modules={siteData.modulesSection.modules}
                />
            </main>
            <Footer />
        </Fragment>
    );
};