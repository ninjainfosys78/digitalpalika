"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage, Language } from '@/context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Header = () => {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { href: string; label: Record<Language, string> }[] = [
    { href: '/', label: { en: 'Home', ne: 'गृहपृष्ठ' } },
    { href: '/module', label: { en: 'Modules', ne: 'प्रणालीहरू' } },
    { href: '/clients', label: { en: 'Our Clients', ne: 'हाम्रो ग्राहकहरू' } },
    { href: '/features', label: { en: 'Features', ne: 'विशेषताहरू' } },
    { href: '/contact', label: { en: 'Contact', ne: 'सम्पर्क' } },
  ];

  const handleNavClick = () => setMenuOpen(false);

  // Helper function to check if the current path matches the nav item
  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm transition-shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-20 relative">
        {/* LEFT: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-extrabold text-[#003893]">
              {lang === 'en' ? 'Digital Palika' : 'डिजिटल पालिका'}
            </span>
          </Link>
        </div>

        {/* CENTER: Nav */}
        {!menuOpen && (
          <nav className="hidden lg:flex lg:flex-1 lg:justify-center lg:absolute lg:inset-y-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:items-center z-20">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-base font-[400] transition-colors relative group py-2 ${
                        isActive ? 'text-[#003893] font-[600]' : 'text-black'
                      }`}
                    >
                      {item.label[lang]}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-left duration-300 ${
                          isActive ? 'scale-x-100 bg-[#003893]' : 'scale-x-0 group-hover:scale-x-100 bg-[#003893]'
                        }`}
                      ></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        <div className="ml-auto lg:absolute lg:right-4 flex items-center space-x-3 sm:space-x-4 z-30">
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setLang((lang === 'en' ? 'ne' : 'en') as Language)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setLang((lang === 'en' ? 'ne' : 'en') as Language);
              }}
              aria-label={lang === 'en' ? 'Switch to Nepali' : 'Switch to English'}
              className="p-0"
            >
              <Image
                src={lang === 'en' ? '/toggle.png' : '/toggle.png'}
                alt={lang === 'en' ? 'English' : 'नेपाली'}
                width={32}
                height={32}
                className="object-contain cursor-pointer rounded-sm transition-transform duration-150 w-8 h-8 hover:scale-105"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open mobile menu"
            aria-expanded={menuOpen}
            className="lg:hidden p-2 text-gray-700 hover:text-[#01399A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01399A] rounded-full"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-0 z-50 bg-[#003893] w-screen h-[75vh] flex flex-col lg:hidden shadow-md border-b border-transparent">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              aria-label="Close mobile menu"
              className="p-2 text-white hover:text-white/90 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center items-center gap-2 overflow-y-auto">
            <ul className="w-full max-w-md mx-auto flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-lg font-semibold py-4 text-center transition-colors relative group ${
                        isActive ? 'text-white' : 'text-white'
                      }`}
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                        background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                      }}
                      onClick={handleNavClick}
                    >
                      {item.label[lang]}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 bottom-2 w-2/3 h-0.5 transition-transform origin-left duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
                      ></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex justify-center items-center border-t border-white/20 py-4 gap-2">
            <button
              onClick={() => setLang((lang === 'en' ? 'ne' : 'en') as Language)}
              aria-label={lang === 'en' ? 'Switch to Nepali' : 'Switch to English'}
              className="p-0"
            >
              <Image
                src={lang === 'en' ? '/toggle2.png' : '/toggle2.png'}
                alt={lang === 'en' ? 'English' : 'नेपाली'}
                width={32}
                height={32}
                className="object-contain cursor-pointer rounded-sm transition-transform duration-150 w-8 h-8 hover:scale-105"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
