"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const closeAllMenus = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const onDocPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeAllMenus();
      }
    };
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, []);

  // Scroll-aware: hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);
      
      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 4) {
        setHidden(true);
        setMobileOpen(false);
      } else if (currentY < lastScrollY.current - 4) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 px-6 sm:px-8 lg:px-12 2xl:px-16 mt-4"
      style={{ 
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: hidden ? 'translateY(-120%)' : 'translateY(0)',
      }}
      role="banner"
    >
      <div 
        className="max-w-[1600px] mx-auto h-20 flex items-center justify-between transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'rgba(11,13,18,0.3)',
          backdropFilter: 'blur(12px)',
          padding: isScrolled ? '0 1.5rem' : '0 2rem',
          borderRadius: isScrolled ? '0.5rem' : '1rem',
          border: isScrolled ? '1px solid rgba(11,13,18,0.1)' : '1px solid rgba(255,255,255,0.1)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Ninja Infosys home"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white p-1.5 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Ninja Infosys Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className={`text-xl font-bold font-heading transition-colors ${isScrolled ? 'text-[#0b0d12]' : 'text-white'}`}>
            Ninja Infosys
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-10 whitespace-nowrap ml-12"
          aria-label="Main navigation"
        >
          {[
            { label: 'About Us', href: '/about' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Insights', href: '/blogs' },
            { label: 'Partners', href: '/partners' },
            { label: 'Contact', href: '/contact' }
          ].map((item) => (
            <Link 
              key={item.label}
              href={item.href} 
              className={`text-[15px] font-semibold transition-colors hover:text-[#E31B23] ${isScrolled ? 'text-[#0b0d12]/60' : 'text-white/70'}`}
            >
              {item.label === 'Insights' ? (language === 'en' ? 'Insights' : 'अन्तर्दृष्टि') : (language === 'en' ? item.label : item.label)}
            </Link>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setLanguage(language === "en" ? "ne" : "en")}
            className={`hidden sm:block text-[13px] font-bold tracking-wider transition-colors uppercase ${isScrolled ? 'text-[#0b0d12]/40 hover:text-[#006FB7]' : 'text-white/40 hover:text-white'}`}
          >
            {language === "en" ? "नेपाली" : "English"}
          </button>

          <button 
            onClick={() => {
              if (pathname === "/") {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/contact";
              }
            }}
            className="hidden lg:inline-flex items-center gap-2 bg-[#E31B23] text-white px-7 py-3 text-[15px] font-bold transition-all hover:brightness-110 active:scale-95 shadow-sm"
          >
            <span>{language === 'en' ? 'Build with us' : 'हामीसँग निर्माण गर्नुहोस्'}</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-[#0b0d12]' : 'text-white'}`}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto pt-10">
           <div className="p-8 space-y-10">
             <nav className="flex flex-col gap-8 text-2xl font-bold font-heading">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Solutions', href: '/solutions' },
                  { label: 'Insights', href: '/blogs' },
                  { label: 'Partners', href: '/partners' },
                  { label: 'Contact', href: '/contact' }
                ].map((item) => (
                  <Link key={item.label} href={item.href} onClick={closeAllMenus}>
                    {item.label}
                  </Link>
                ))}
             </nav>
           </div>
        </div>
      )}
    </header>
  );
}
