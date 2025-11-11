
"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import Footer  from '@/components/footer';
import { FeatureSection } from '@/components/FeatureSection';
import { LanguageProvider } from '@/context/LanguageContext';
import { siteData, FullSiteContent } from '@/lib/siteData';
import Demo from '@/components/demo';
import FeatureRail from '@/components/features-rail';

export default function FeaturesPage() {
    return (
        <LanguageProvider>
            <FeaturesContent />
        </LanguageProvider>
    );
}

function FeaturesContent() {
    const content: FullSiteContent = siteData;
    const { featuresPage } = content;

    return (
        <Fragment>
            <Header />
            {/* <main>
                <FeatureSection
                    title={featuresPage.title}
                    subtitle={featuresPage.subtitle}
                    features={featuresPage.items}
                />
            </main> */}
            <FeatureRail />
            <Demo />
            <Footer />
        </Fragment>
    );
}