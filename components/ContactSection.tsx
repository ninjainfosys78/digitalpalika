"use client";

import React, { useRef, useState } from 'react';
import { LocalizedString } from '@/context/LanguageContext';

// --- Add missing types ---
export interface ContactDetails {
    phoneNumbers: string[];
    email: string;
    address: LocalizedString;
}
export interface ContactFormLabels {
    fullName: LocalizedString;
    email: LocalizedString;
    contactReason: LocalizedString;
    topic: LocalizedString;
    message: LocalizedString;
    button: LocalizedString;
}

// Define the icons using lucide-react names for better reusability
const Icon = ({ name, className = "" }: { name: string, className?: string }) => {
    const defaultClasses = `w-6 h-6 ${className}`;
    switch (name) {
        case 'Phone':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72c.15.9.15 2.14-.02 3.12a2 2 0 0 1-1.25 1.58L6.4 10.4a15 15 0 0 0 6.7 6.7l1.4-1.63a2 2 0 0 1 1.58-1.25c.98-.17 2.22-.17 3.12-.02a2 2 0 0 1 1.72 2z"/></svg>;
        case 'Mail':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
        case 'MapPin':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/><circle cx="12" cy="10" r="3"/></svg>;
        case 'User':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
        case 'Hash':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>;
        default:
            return null;
    }
};

interface ContactSectionProps {
    title: string;
    breadcrumb: string;
    details: ContactDetails;
    formLabels: ContactFormLabels;
    t: (text: LocalizedString) => string; 
}

export function ContactSection({ title, details, formLabels, t }: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If you have controlled inputs, also reset their state here.
    // setFormValues({ name: "", email: "", topic: "", message: "" });

    // Clear uncontrolled inputs
    formRef.current?.reset();

    // Show modal
    setShowModal(true);
  };

  return (
    <section className="relative">
      <div className="bg-paper py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
            
            {/* Section Title */}
            <h1 className="text-2xl md:text-5xl font-work-sans font-bold text-blue-900 text-center mb-16">
                {title}
            </h1>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
                
                {/* Phone */}
                <div className="flex flex-col items-center">
                    <div className="text-blue-900 mb-4">
                        <Icon name="Phone" className="w-8 h-8"/>
                    </div>
                    <h2 className="text-lg font-work-sans font-semibold text-black mb-2">
                        {t({ en: 'Phone', ne: 'फोन' })}
                    </h2>
                    {details.phoneNumbers.map((phone, index) => (
                        <a key={index} href={`tel:${phone}`} className="text-blue-900 font-inter transition-colors text-sm">
                            नेपालभित्र: {phone}
                        </a>
                    ))}
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                    <div className="text-blue-900 mb-4">
                        <Icon name="Mail" className="w-8 h-8"/>
                    </div>
                    <h2 className="text-lg font-work-sans font-semibold text-black mb-2">
                        {t({ en: 'Email', ne: 'इमेल' })}
                    </h2>
                    <a href={`mailto:${details.email}`} className="text-blue-900 hover:text-accent font-inter transition-colors">
                        {details.email}
                    </a>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center">
                    <div className="text-blue-900 mb-4">
                        <Icon name="MapPin" className="w-8 h-8"/>
                    </div>
                    <h2 className="text-lg font-work-sans font-semibold text-black mb-2">
                        {t({ en: 'Address', ne: 'ठेगाना' })}
                    </h2>
                    <p className="text-black font-inter max-w-xs">
                        {t(details.address)} 
                    </p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-50/60 border border-blue-100 w-full max-w-6xl mx-auto p-8 md:p-12">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                                {t(formLabels.fullName)} *
                            </label>
                            <div className="relative">
                                <Icon name="User" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder={t(formLabels.fullName)}
                                    required
                                    className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-accent focus:border-accent font-inter text-black"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                                {t(formLabels.email)} *
                            </label>
                            <div className="relative">
                                <Icon name="Mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder={t(formLabels.email)}
                                    required
                                    className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-accent focus:border-accent font-inter text-black"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Reason and Topic Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Reason */}
                        <div>
                            <label htmlFor="contactReason" className="block text-sm font-medium text-black mb-2">
                                {t(formLabels.contactReason)} *
                            </label>
                            <div className="relative">
                                <Icon name="Phone" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                                <input
                                    type="text"
                                    id="contactReason"
                                    placeholder={t(formLabels.contactReason)}
                                    required
                                    className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-accent focus:border-accent font-inter text-black"
                                />
                            </div>
                        </div>

                        {/* Topic */}
                        <div>
                            <label htmlFor="topic" className="block text-sm font-medium text-black mb-2">
                                {t(formLabels.topic)} *
                            </label>
                            <div className="relative">
                                <Icon name="Hash" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                                <input
                                    type="text"
                                    id="topic"
                                    placeholder={t(formLabels.topic)}
                                    required
                                    className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-accent focus:border-accent font-inter text-black"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Comments/Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                            {t(formLabels.message)} *
                        </label>
                        <div className="relative">
                            <Icon name="Hash" className="absolute left-3 top-4 text-black w-5 h-5" />
                            <textarea
                                id="message"
                                rows={5}
                                placeholder={t(formLabels.message)}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-slate/20 focus:ring-accent focus:border-accent font-inter text-black"
                            ></textarea>
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center px-8 py-3 text-white font-work-sans font-semibold bg-blue-700 hover:bg-blue-700 transition-all duration-300 ease-in-out"
                    >
                        {t(formLabels.button)}
                    </button>
                </form>
            </div>
        </div>
      </div>

      {/* Modal: centered, no shadow, sharp edges */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-[90%] max-w-md bg-white text-gray-900 p-6 sm:p-8 rounded-none shadow-none">
            <h2 className="text-xl font-semibold mb-2">Form submitted</h2>
            <p className="text-sm text-gray-600 mb-6">
              Your message has been sent successfully.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-none shadow-none hover:bg-indigo-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}