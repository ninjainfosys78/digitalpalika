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
    firstName: LocalizedString;
    lastName: LocalizedString;
    email: LocalizedString;
    phone: LocalizedString;
    subject: LocalizedString;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    const firstName = (formData.get('firstName') as string).trim();
    const lastName = (formData.get('lastName') as string).trim();
    let phoneNumber = (formData.get('phone') as string).trim();
    
    // Format phone number - add +977 for Nepal if not present
    if (phoneNumber && !phoneNumber.startsWith('+')) {
      // Remove any non-digit characters first
      phoneNumber = phoneNumber.replace(/\D/g, '');
      // If it's a 10-digit Nepal number, add +977
      if (phoneNumber.length === 10) {
        phoneNumber = '+977' + phoneNumber;
      } else if (phoneNumber.length === 9) {
        // If it's 9 digits (without leading 0), add +977 and 0
        phoneNumber = '+9770' + phoneNumber;
      } else {
        // Otherwise just add + prefix
        phoneNumber = '+' + phoneNumber;
      }
    }

    // Build the API payload
    const payload = {
      emailAddress: (formData.get('email') as string).trim(),
      phoneNumber: phoneNumber,
      title: (formData.get('subject') as string).trim(),
      description: (formData.get('message') as string).trim(),
      salutationName: '',
      firstName: firstName,
      lastName: lastName,
      middleName: ''
    };

    console.log('Submitting payload:', payload);

    try {
      const response = await fetch('https://crm.ninjainfosys.com/api/v1/LeadCapture/b2bac8ed85830056ae2f995de854ce78', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (response.ok || response.status === 200 || response.status === 201) {
        formRef.current?.reset();
        setShowModal(true);
      } else {
        let errorMessage = 'Failed to submit form. Please try again.';
        try {
          const errorData = JSON.parse(responseText);
          console.log('Error data:', errorData);
          
          // Handle specific validation errors
          if (errorData.data && errorData.data.field) {
            const field = errorData.data.field;
            const type = errorData.data.type;
            if (field === 'phoneNumber') {
              errorMessage = 'Please enter a valid phone number (e.g., +977 9800000000 or 9800000000)';
            } else {
              errorMessage = `Invalid ${field}: ${type}`;
            }
          } else {
            errorMessage = errorData.message || errorData.error || errorData.title || errorMessage;
          }
          
          // Log validation errors if present
          if (errorData.errors) {
            console.log('Validation errors:', errorData.errors);
            errorMessage = Object.values(errorData.errors).flat().join(', ');
          }
        } catch {
          errorMessage = `Server error (${response.status}): ${responseText || 'Unknown error'}`;
        }
        setError(errorMessage);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      <div className="bg-paper py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
            
            {/* Section Title */}
            <h1 className="text-2xl md:text-5xl font-work-sans font-bold text-[#003893] text-center mb-16">
                {title}
            </h1>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
                
                {/* Phone */}
                <div className="flex flex-col items-center">
                    <div className="text-[#003893] mb-4">
                        <Icon name="Phone" className="w-8 h-8"/>
                    </div>
                    <h2 className="text-lg font-work-sans font-semibold text-black mb-2">
                        {t({ en: 'Phone', ne: 'फोन' })}
                    </h2>
                    {details.phoneNumbers.map((phone, index) => (
                        <a key={index} href={`tel:${phone}`} className="text-[#003893] font-inter transition-colors text-sm">
                            नेपालभित्र: {phone}
                        </a>
                    ))}
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                    <div className="text-[#003893] mb-4">
                        <Icon name="Mail" className="w-8 h-8"/>
                    </div>
                    <h2 className="text-lg font-work-sans font-semibold text-black mb-2">
                        {t({ en: 'Email', ne: 'इमेल' })}
                    </h2>
                    <a href={`mailto:${details.email}`} className="text-[#003893] hover:text-[#003893] font-inter transition-colors">
                        {details.email}
                    </a>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center">
                    <div className="text-[#003893] mb-4">
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
            <div className="bg-[#003893]/6 border border-[#003893]/20 w-full max-w-6xl mx-auto p-8 md:p-12">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
                            <p className="font-semibold">Error:</p>
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {/* First Name and Last Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                                {t(formLabels.firstName)} *
                            </label>
                            <div className="relative">
                                <Icon name="User" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder={t(formLabels.firstName)}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-[#003893] focus:border-[#003893] font-inter text-black disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                                {t(formLabels.lastName)} *
                            </label>
                            <div className="relative">
                                <Icon name="User" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder={t(formLabels.lastName)}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-[#003893] focus:border-[#003893] font-inter text-black disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email and Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    name="email"
                                    placeholder={t(formLabels.email)}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-[#003893] focus:border-[#003893] font-inter text-black disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                                {t(formLabels.phone)} *
                            </label>
                            <div className="relative">
                                <Icon name="Phone" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder={t(formLabels.phone)}
                                    required
                                    disabled={isSubmitting}
                                    pattern="[\+]?[0-9]{10,14}"
                                    title="Enter a valid phone number (e.g., +977 9800000000 or 9800000000)"
                                    className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-[#003893] focus:border-[#003893] font-inter text-black disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                            {t(formLabels.subject)} *
                        </label>
                        <div className="relative">
                            <Icon name="Hash" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder={t(formLabels.subject)}
                                required
                                disabled={isSubmitting}
                                className="w-full pl-10 pr-4 py-2 border border-slate/20 focus:ring-[#003893] focus:border-[#003893] font-inter text-black disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                            {t(formLabels.message)} *
                        </label>
                        <div className="relative">
                            <Icon name="Hash" className="absolute left-3 top-4 text-black w-5 h-5" />
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder={t(formLabels.message)}
                                required
                                disabled={isSubmitting}
                                className="w-full pl-10 pr-4 py-3 border border-slate/20 focus:ring-[#003893] focus:border-[#003893] font-inter text-black disabled:opacity-50 disabled:cursor-not-allowed"
                            ></textarea>
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center px-8 py-3 text-white font-work-sans font-semibold bg-[#003893] hover:bg-[#003893]/90 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            t(formLabels.button)
                        )}
                    </button>
                </form>
            </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-[90%] max-w-md bg-white text-gray-900 p-6 sm:p-8 rounded-none shadow-none">
            <h2 className="text-xl font-semibold mb-2">Form submitted</h2>
            <p className="text-sm text-gray-600 mb-6">
              Your message has been sent successfully. We'll get back to you soon!
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-[#003893] text-white rounded-none shadow-none hover:bg-[#003893]/90"
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