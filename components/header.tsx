"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
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
      className="fixed top-0 left-0 w-full z-50"
      style={{ 
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), background-color 0.2s',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        backgroundColor: 'rgba(255,255,255,0.97)', 
        backdropFilter: 'blur(12px)', 
        borderBottom: '1px solid rgba(11,13,18,0.08)', 
        boxShadow: '0 1px 12px 0 rgba(11,13,18,0.05)' 
      }}
      role="banner"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 2xl:px-16">
        <div className="relative h-20 flex items-center justify-between">
          
          {/* Logo - Serif Text */}
          <Link
            href="/"
            className="flex-none inline-flex items-center"
            aria-label="Ninja Infosys home"
          >
            <span className="text-2xl font-bold font-heading text-[#0b0d12] tracking-normal">
              Ninja Infosys
            </span>
          </Link>

          {/* Desktop Navigation - As per Screenshot */}
          <nav
            className="hidden lg:flex items-center gap-10 whitespace-nowrap ml-12"
            aria-label="Main navigation"
          >
            <Link href="/about" className="text-[15px] font-semibold text-[#0b0d12]/60 hover:text-[#006FB7] transition-colors">{language === 'en' ? 'About Us' : 'हामीबारे'}</Link>
            <Link 
              href="/solutions" 
              className="text-[15px] font-semibold text-[#0b0d12]/60 hover:text-[#006FB7] transition-colors"
            >
              {language === 'en' ? 'Solutions' : 'समाधान'}
            </Link>
            <Link 
              href="/blogs" 
              className="text-[15px] font-semibold text-[#0b0d12]/60 hover:text-[#006FB7] transition-colors"
            >
              {language === 'en' ? 'Insights' : 'अन्तर्दृष्टि'}
            </Link>
            <Link 
              href="/partners" 
              className="text-[15px] font-semibold text-[#0b0d12]/60 hover:text-[#006FB7] transition-colors"
            >
              {language === 'en' ? 'Partners' : 'साझेदारहरू'}
            </Link>
            <Link 
              href="/contact" 
              className="text-[15px] font-semibold text-[#0b0d12]/60 hover:text-[#006FB7] transition-colors"
            >
              {language === 'en' ? 'Contact' : 'सम्पर्क'}
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setLanguage(language === "en" ? "ne" : "en")}
              className="hidden sm:block text-[13px] font-bold tracking-wider text-[#0b0d12]/40 hover:text-[#006FB7] transition-colors cursor-pointer uppercase"
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
              className="hidden lg:inline-flex items-center gap-2 bg-[#E31B23] text-white px-7 py-3 text-[15px] font-bold transition-all hover:brightness-110 active:scale-95 shadow-sm cursor-pointer"
            >
              <span>{language === 'en' ? 'Build with us' : 'हामीसँग निर्माण गर्नुहोस्'}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden p-2 text-[#0b0d12] hover:bg-[#0b0d12]/5 transition-colors"
              aria-expanded={mobileOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto animate-in slide-in-from-top duration-300">
           <div className="p-8 space-y-10">
             <nav className="flex flex-col gap-8 text-2xl font-bold font-heading">
               <Link href="/about" onClick={closeAllMenus}>About Us</Link>
               <Link href="/solutions" onClick={closeAllMenus}>Solutions</Link>
               <Link href="/blogs" onClick={closeAllMenus}>Insights</Link>
               <Link href="/partners" onClick={closeAllMenus}>Partners</Link>
               <Link href="/contact" onClick={closeAllMenus}>Contact</Link>
             </nav>
             <div className="pt-10 border-t border-gray-100 flex flex-col gap-5">
               <button 
                 onClick={() => {
                   closeAllMenus();
                   if (pathname === "/") {
                     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                   } else {
                     window.location.href = "/contact";
                   }
                 }} 
                 className="bg-[#E31B23] text-white text-center py-5 font-bold text-lg shadow-md cursor-pointer"
               >
                 {language === 'en' ? 'Build with us' : 'हामीसँग निर्माण गर्नुहोस्'}
               </button>
               <button
                  onClick={() => { setLanguage(language === "en" ? "ne" : "en"); closeAllMenus(); }}
                  className="text-center font-bold text-gray-400 tracking-widest text-sm uppercase p-4"
                >
                  {language === "en" ? "नेपाली" : "English"}
                </button>
             </div>
           </div>
        </div>
      )}

      <style jsx global>{`
        .font-heading { font-family: 'Newsreader', serif; }
      `}</style>
    </header>
  );
}
