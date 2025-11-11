"use client";

import Link from "next/link";

interface GlobalCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function GlobalCTA({
  title = "Ready to Digitize Your Municipality?",
  description = "Let’s build a smarter, more transparent, and connected local governance system together. Schedule a free consultation to see how Digital ePalika can transform your municipality into a digital powerhouse.",
  buttonText = "Book a Consultation",
  buttonHref = "/contact",
}: GlobalCTAProps) {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">{description}</p>
      <Link
        href={buttonHref}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F62FE] text-white rounded-lg hover:bg-[#0043CE] transition-all duration-300"
      >
        {buttonText}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </section>
  );
}
