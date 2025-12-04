"use client";

import React, { useRef, useState } from "react";
import { LocalizedString } from "@/context/LanguageContext";

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
const Icon = ({ name, className = "" }: { name: string; className?: string }) => {
  const defaultClasses = `w-6 h-6 ${className}`;
  switch (name) {
    case "Phone":
      return (
        <svg
          className={defaultClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72c.15.9.15 2.14-.02 3.12a2 2 0 0 1-1.25 1.58L6.4 10.4a15 15 0 0 0 6.7 6.7l1.4-1.63a2 2 0 0 1 1.58-1.25c.98-.17 2.22-.17 3.12-.02a2 2 0 0 1 1.72 2z" />
        </svg>
      );
    case "Mail":
      return (
        <svg
          className={defaultClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "MapPin":
      return (
        <svg
          className={defaultClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "User":
      return (
        <svg
          className={defaultClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "Hash":
      return (
        <svg
          className={defaultClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="9" y2="9" />
          <line x1="4" x2="20" y1="15" y2="15" />
          <line x1="10" x2="8" y1="3" y2="21" />
          <line x1="16" x2="14" y1="3" y2="21" />
        </svg>
      );
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

    const firstName = (formData.get("firstName") as string).trim();
    const lastName = (formData.get("lastName") as string).trim();
    let phoneNumber = (formData.get("phone") as string).trim();

    // Format phone number - add +977 for Nepal if not present
    if (phoneNumber && !phoneNumber.startsWith("+")) {
      // Remove any non-digit characters first
      phoneNumber = phoneNumber.replace(/\D/g, "");
      // If it's a 10-digit Nepal number, add +977
      if (phoneNumber.length === 10) {
        phoneNumber = "+977" + phoneNumber;
      } else if (phoneNumber.length === 9) {
        // If it's 9 digits (without leading 0), add +977 and 0
        phoneNumber = "+9770" + phoneNumber;
      } else {
        // Otherwise just add + prefix
        phoneNumber = "+" + phoneNumber;
      }
    }

    // Build the API payload
    const payload = {
      emailAddress: (formData.get("email") as string).trim(),
      phoneNumber: phoneNumber,
      title: (formData.get("subject") as string).trim(),
      description: (formData.get("message") as string).trim(),
      salutationName: "",
      firstName: firstName,
      lastName: lastName,
      middleName: "",
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetch(
        "https://crm.ninjainfosys.com/api/v1/LeadCapture/b2bac8ed85830056ae2f995de854ce78",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("Response status:", response.status);
      const responseText = await response.text();
      console.log("Response body:", responseText);

      if (response.ok || response.status === 200 || response.status === 201) {
        formRef.current?.reset();
        setShowModal(true);
      } else {
        let errorMessage = "Failed to submit form. Please try again.";
        try {
          const errorData = JSON.parse(responseText);
          console.log("Error data:", errorData);

          // Handle specific validation errors
          if (errorData.data && errorData.data.field) {
            const field = errorData.data.field;
            const type = errorData.data.type;
            if (field === "phoneNumber") {
              errorMessage =
                "Please enter a valid phone number (e.g., +977 9800000000 or 9800000000)";
            } else {
              errorMessage = `Invalid ${field}: ${type}`;
            }
          } else {
            errorMessage =
              errorData.message || errorData.error || errorData.title || errorMessage;
          }

          // Log validation errors if present
          if (errorData.errors) {
            console.log("Validation errors:", errorData.errors);
            errorMessage = (Object.values(errorData.errors) as string[][])
              .flat()
              .join(", ");
          }
        } catch {
          errorMessage = `Server error (${response.status}): ${
            responseText || "Unknown error"
          }`;
        }
        setError(errorMessage);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-white py-12 md:py-16">
      {/* Top Heading and Subtitle */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-[#003893] font-semibold mb-2 text-sm">
          {t({ en: "Contact us", ne: "सम्पर्क गर्नुहोस्" })}
        </h2>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          {t({
            en: "Your digital gateway to municipal services.",
            ne: "तपाईंको नगरपालिका सेवाहरूको लागि डिजिटल गेटवे।"
          })}
          <br />
          {t({
            en: "Submit requests, track applications, and",
            ne: "अनुरोधहरू पेश गर्नुहोस्, आवेदनहरू ट्र्याक गर्नुहोस्, र"
          })}
          <br />
          {t({
            en: "connect with ",
            ne: "र सम्पर्क गर्नुहोस् "
          })}
          <span className="font-bold">
            {t({ en: "local", ne: "स्थानीय" })}
          </span>
          {t({ en: " government.", ne: " सरकारसँग।" })}
        </h1>
        <div className="mx-auto w-16 h-0.5 bg-black mb-4" />
      </div>

      {/* Info Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Secure & Private */}
        <div className="bg-[#e9eff7] border border-[#B0C1DE] flex flex-col items-center justify-center py-6 min-h-[110px]">
          {/* Shield Icon (matches your provided image) */}
          <svg className="w-6 h-6 mb-2 text-black" viewBox="0 0 24 24" fill="none">
            <path d="M12 21C7 18 4 14.5 4 10V5.5L12 3l8 2.5V10c0 4.5-3 8-8 11z" stroke="black" strokeWidth="2" fill="none"/>
            <path d="M12 3v18c4.5-3 8-6.5 8-11V5.5L12 3z" fill="black"/>
          </svg>
          <span className="text-base font-semibold text-black">
            {t({ en: "Secure & Private", ne: "सुरक्षित र निजी" })}
          </span>
        </div>
        {/* 24-48 Hour Response */}
        <div className="bg-[#e9eff7] border border-[#B0C1DE] flex flex-col items-center justify-center py-6 min-h-[110px]">
          {/* Clock Icon */}
          <svg className="w-6 h-6 mb-2 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-base font-semibold text-black">
            {t({ en: "24-48 Hour Response", ne: "२४-४८ घण्टामा प्रतिक्रिया" })}
          </span>
        </div>
        {/* Official Government Portal */}
        <div className="bg-[#e9eff7] border border-[#B0C1DE] flex flex-col items-center justify-center py-6 min-h-[110px]">
          {/* Calculator Icon (clean, solid display/buttons) */}
          <svg className="w-6 h-6 mb-2 text-black" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="3" width="16" height="18" rx="2" stroke="black" strokeWidth="2" fill="none"/>
            <rect x="7" y="6" width="10" height="2" rx="0.5" fill="black"/>
            <rect x="7" y="10" width="2" height="2" rx="0.5" fill="black"/>
            <rect x="11" y="10" width="2" height="2" rx="0.5" fill="black"/>
            <rect x="15" y="10" width="2" height="2" rx="0.5" fill="black"/>
            <rect x="7" y="14" width="2" height="2" rx="0.5" fill="black"/>
            <rect x="11" y="14" width="2" height="2" rx="0.5" fill="black"/>
            <rect x="15" y="14" width="2" height="2" rx="0.5" fill="black"/>
          </svg>
          <span className="text-base font-semibold text-black">
            {t({ en: "Official Government Portal", ne: "आधिकारिक सरकारी पोर्टल" })}
          </span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
              <p className="font-semibold">Error:</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                {t({ en: "First Name *", ne: "पहिलो नाम *" })}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={t({ en: "Enter your first name", ne: "आफ्नो पहिलो नाम लेख्नुहोस्" })}
                required
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-[#003893] focus:border-[#003893] disabled:opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                {t({ en: "Last Name *", ne: "थर नाम *" })}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={t({ en: "Enter your last name", ne: "आफ्नो थर नाम लेख्नुहोस्" })}
                required
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-[#003893] focus:border-[#003893] disabled:opacity-50"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                {t({ en: "Email Address *", ne: "इमेल ठेगाना *" })}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your example@gmail.com"
                required
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-[#003893] focus:border-[#003893] disabled:opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                {t({ en: "Phone *", ne: "फोन *" })}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="98XXXXXXXX"
                required
                disabled={isSubmitting}
                pattern="[\+]?[0-9]{10,14}"
                title="Enter a valid phone number"
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-[#003893] focus:border-[#003893] disabled:opacity-50"
              />
            </div>
          </div>

          {/* Subject & Topic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                {t({ en: "Contact reason *", ne: "सम्पर्कको कारण *" })}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={t({ en: "e.g., Service inquiry", ne: "जस्तै, सेवा सोधपुछ" })}
                required
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-[#003893] focus:border-[#003893] disabled:opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="topic"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                {t({ en: "Topic", ne: "विषय" })}
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                placeholder={t({ en: "e.g., Municipal services", ne: "जस्तै, नगरपालिका सेवाहरू" })}
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-[#003893] focus:border-[#003893] disabled:opacity-50"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-gray-700 mb-1"
            >
              {t({ en: "Comments *", ne: "टिप्पणीहरू *" })}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder={t({ en: "Please describe your request in detail...", ne: "कृपया आफ्नो अनुरोधलाई विस्तारमा वर्णन गर्नुहोस्..." })}
              required
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-[#003893] focus:border-[#003893] disabled:opacity-50"
            ></textarea>
          </div>

          {/* Submit Button - Updated to match features-rail and aligned left */}
          <div className="flex justify-start">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-[#003893] hover:bg-[#002f72] text-white text-base px-8 py-3.5 disabled:opacity-50"
            >
              {isSubmitting
                ? t({ en: "Sending...", ne: "पठाउँदै..." })
                : t({ en: "Submit Request", ne: "अनुरोध पठाउनुहोस्" })}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
          
          <div className="text-left text-xs text-gray-500 mt-2">
            {t({ en: "We typically respond within 24-48 hours", ne: "हामी सामान्यतया २४-४८ घण्टामा प्रतिक्रिया दिन्छौं" })}
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-[90%] max-w-md bg-white text-gray-900 p-6 sm:p-8 rounded-none shadow-none">
            <h2 className="text-xl font-semibold mb-2">
              {t({ en: "Form submitted", ne: "फर्म पेश गरियो" })}
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              {t({ en: "Your message has been sent successfully. We'll get back to you soon!", ne: "तपाईंको सन्देश सफलतापूर्वक पठाइयो। हामी चाँडै तपाईंलाई फर्कनेछौं!" })}
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-[#003893] text-white rounded-none shadow-none hover:bg-[#003893]/90"
              >
                {t({ en: "OK", ne: "ठीक छ" })}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
