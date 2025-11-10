"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ClientsSection } from '@/components/ClientsSection';
import { LanguageProvider } from '@/context/LanguageContext';

// --- Main Page Component ---
export default function ClientsPage() {
    return (
        <LanguageProvider>
            <ClientsContent />
        </LanguageProvider>
    );
}

// --- Component to render layout ---
function ClientsContent() {
    // Remove useLanguage and siteContent usage
    return (
        <Fragment>
            <Header />
            <main>
                <ClientsSection />
            </main>
            <Footer />
        </Fragment>
    );
}