"use client";
import { Fragment } from 'react';
import { Header } from '@/components/header'; 
import  Footer  from '@/components/footer'; 
import { ContactSection } from '@/components/ContactSection'; 
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'; 

// --- Content for the Contact Page ---
export const siteContent = {
    header: {
        navItems: [],
    },
    hero: { title: {en:'', ne:''}, description: {en:'', ne:''}, ctaText: {en:'', ne:''}, ctaLink: '' }, 
    
    contactPage: {
        title: { en: 'Contact Us', ne: 'सम्पर्क' },
        breadcrumb: { en: 'Home / Contact', ne: 'गृह पृष्ठ / सम्पर्क' },
        details: {
            phoneNumbers: {
                en: ['9854334348', '9858042433'],
                ne: ['९८५४३३४३४८', '९८५८०४२४३३'],
            },
            email: 'marketting@ninjainfosys.com',
            address: {
                en: 'Head Office: Ninja Infosys Pvt. Ltd., Anamnagar-२९, Kathmandu',
                ne: 'प्रधान कार्यालय: निन्जा इन्फोसिस् प्रा. लि., अनामनगर-२९, काठमाडौं',
            },
        },
        form: {
            firstName: { en: 'First Name', ne: 'पहिलो नाम' },
            lastName: { en: 'Last Name', ne: 'थर' },
            email: { en: 'Email', ne: 'इमेल' },
            phone: { en: 'Phone', ne: 'फोन' },
            subject: { en: 'Subject', ne: 'विषय' },
            message: { en: 'Message', ne: 'सन्देश' },
            button: { en: 'Send Request', ne: 'अनुरोध पठाउनुहोस्' },
        }
    },

    footer: {
        copyright: { en: `© ${new Date().getFullYear()} Ninja Infosys. All rights reserved.`, ne: `© ${new Date().getFullYear()} निन्जा इन्फोसिस्। सबै अधिकार सुरक्षित।` },
        links: [
            { label: { en: 'Privacy Policy', ne: 'गोपनीयता नीति' }, href: '/privacy' },
            { label: { en: 'Terms of Use', ne: 'प्रयोगका सर्तहरू' }, href: '/terms' },
        ],
    },
};

export default function ContactPage() {
    return (
        <LanguageProvider>
            <ContactContent />
        </LanguageProvider>
    );
}

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
                        details={{
                            ...contactContent.details,
                            phoneNumbers: contactContent.details.phoneNumbers[lang]
                        }}
                        formLabels={contactContent.form}
                        t={t}
                    />
            </main>
            <Footer />
        </Fragment>
    );
};