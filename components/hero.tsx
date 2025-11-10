"use client";

import Link from 'next/link';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero = ({ title, description, ctaText, ctaLink }: HeroProps) => {
  const handleScrollDown = () => {
    const el = document.getElementById("main-content");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center bg-paper py-20 px-4 md:py-24 lg:py-32">
      <div className="relative z-10 max-w-5xl space-y-8 lg:space-y-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-ink leading-tight tracking-tighter">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-graphite max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-paper bg-accent rounded-full hover:bg-accent-2 transition-all duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
        >
          {ctaText}
        </Link>
        {/* Dropdown Arrow Button */}
        <button
          type="button"
          aria-label="Scroll Down"
          onClick={handleScrollDown}
          className="mt-8 flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};