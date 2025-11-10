"use client";
import { Fragment } from 'react';
import { Header } from '@/components/header'; 
import { Footer } from '@/components/footer'; 
import { ContactSection } from '@/components/ContactSection'; 
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'; 
import type { FullSiteContent } from '@/lib/siteData';

// --- Content for the Contact Page ---
// Allow an additional `contactPage` key here (not part of FullSiteContent) without changing the global type.
export const siteContent: Partial<FullSiteContent> & { contactPage?: any } = {
    // Header nav items here aren’t used by <Header /> (Header reads from siteData),
    // so keep it empty to avoid type/shape mismatches.
    header: {
        navItems: [],
    },
    // Hero is not strictly needed for a contact page, keep it minimal
    // Include subtitle to satisfy FullSiteContent type
    hero: { title: {en:'', ne:''}, subtitle: {en:'', ne:''}, description: {en:'', ne:''}, ctaText: {en:'', ne:''}, ctaLink: '' }, 
    
    // NEW: Contact Page Content
    contactPage: {
        title: { en: 'Contact Us', ne: 'सम्पर्क' },
        breadcrumb: { en: 'Home / Contact', ne: 'गृह पृष्ठ / सम्पर्क' },
        details: {
            phoneNumbers: ['०८९ ५२०३६९', '०१-५९१९२३४'], // From the image (Nepali text)
            email: 'sale@digitalpalika.com', // From the image
            address: {
                en: 'Head Office: Ninja Infosys Bire-Kapokorit Office, Anamnagar-२९, Kathmandu',
                ne: 'प्रधान कार्यालय: नेपालगञ्ज बीरे-कपोकरिट कार्यालय, अनामनगर-२९, काठमाडौं',
            },
        },
        form: {
            fullName: { en: 'Full Name', ne: 'पुरा नाम' },
            email: { en: 'Email', ne: 'इमेल' },
            contactReason: { en: 'Contact Reason', ne: 'सम्पर्क' },
            topic: { en: 'Topic', ne: 'विषय' },
            message: { en: 'Comments', ne: 'टिप्पणीहरु' },
            button: { en: 'Send Request', ne: 'अनुरोध पठाउने' },
            subject: { en: 'Subject', ne: 'विषय' }, // Use this if 'Topic' is a select field and 'Subject' is a text input. Sticking to Topic/Message for simplicity for now.
        }
    },

    // Re-use footer content from global siteData (do not override here)
};

// --- Main Contact Page Component ---
export default function ContactPage() {
    return (
        <LanguageProvider>
            <ContactContent />
        </LanguageProvider>
    );
}

// --- Component to render the page content ---
const ContactContent = () => {
    const { t, lang } = useLanguage();
    const contactContent = siteContent.contactPage!;

    return (
        <Fragment>
            <Header />
            <main id="main-content">
                <ContactSection
                    title={t(contactContent.title)}
                    breadcrumb={t(contactContent.breadcrumb)}
                    details={contactContent.details}
                    formLabels={contactContent.form}
                    t={t} // Pass the translator function to the child component
                />
            </main>
            {/* Footer doesn’t take props; it reads from siteData internally */}
            <Footer />
        </Fragment>
    );
};