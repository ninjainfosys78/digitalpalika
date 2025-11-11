"use client";

import Link from 'next/link';
import { useLanguage, Language } from '@/context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/**
 * The Header component for the website.
 * It is responsible for navigation and language switching.
 */
export const Header = () => {
    // only need lang and setLang now; translations are in-file
    const { lang, setLang } = useLanguage();
    const pathname = usePathname();

    // Inline nav items with English / Nepali labels (no external siteData)
    const navItems: { href: string; label: Record<Language, string> }[] = [
        { href: '/', label: { en: 'Home', ne: 'गृहपृष्ठ' } },
        { href: '/about', label: { en: 'About Us', ne: 'हाम्रोबारे' } },
        { href: '/clients', label: { en: 'Our Clients', ne: 'हाम्रो ग्राहकहरू' } },
        { href: '/features', label: { en: 'Features', ne: 'विशेषताहरू' } },
        { href: '/contact', label: { en: 'Contact', ne: 'सम्पर्क' } },
    ];

    // Hamburger menu state
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on navigation
    const handleNavClick = () => setMenuOpen(false);

    return (
        // Use fixed width container for responsiveness and sticky top for smooth scrolling
        <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm transition-shadow">
            {/* Main top bar: left logo, centered nav, right utilities */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-20 relative">
                {/* LEFT: Logo / Site Title */}
                <div className="flex items-center flex-shrink-0">
                    <Link href="/" className="flex items-center gap-3">
                        {/* Brand mark (responsive text sizes) */}
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-extrabold text-[#003893]">
                            {lang === 'en' ? 'Digital Palika' : 'डिजिटल पालिका'}
                        </span>
                    </Link>
                </div>

                {/* CENTER: Navigation (hidden while mobile menu is open and removed whenever hamburger shows; visible only on lg+) */}
                {!menuOpen && (
                    <nav className="hidden lg:flex lg:flex-1 lg:justify-center lg:absolute lg:inset-y-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:items-center z-20 pointer-events-auto">
                        <ul className="flex items-center space-x-6 lg:space-x-8">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`text-base transition-colors relative group py-2 ${
                                                isActive ? 'text-[#003893] font-semibold' : 'text-black'
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

                {/* RIGHT: Utilities (language toggle + mobile menu)
                    - default: use ml-auto so utilities sit to the right of the flow
                    - on lg+: absolute to match container inner-right padding */}
                <div className="ml-auto lg:absolute lg:right-8 lg:top-0 h-full flex items-center space-x-3 sm:space-x-4 z-30">
                    {/* Single-image language toggle (hidden on small screens where hamburger is shown) */}
                    <div className="hidden lg:flex items-center p-0.5">
                        <img
                            src={lang === 'en' ? 'toggle.png' : 'toggle.png'}
                            alt={lang === 'en' ? 'English' : 'नेपाली'}
                            role="button"
                            tabIndex={0}
                            onClick={() => setLang((lang === 'en' ? 'ne' : 'en') as Language)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') setLang((lang === 'en' ? 'ne' : 'en') as Language);
                            }}
                            className="object-cover cursor-pointer rounded-sm transition-shadow duration-150 w-5 h-4 sm:w-6 sm:h-5 md:w-8 md:h-6"
                            aria-label={lang === 'en' ? 'Switch to Nepali' : 'Switch to English'}
                        />
                    </div>

                    {/* Mobile Menu Toggle (Only visible on small screens). aria-expanded added */}
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

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="fixed inset-x-0 top-0 z-50 bg-[#003893] w-screen h-[75vh] flex flex-col lg:hidden shadow-md border-b border-transparent">
                    {/* Top bar with logo and close button (close button visible on dark bg) */}
                    <div className="flex items-center justify-between px-6 py-4" >
                        <button
                            aria-label="Close mobile menu"
                            className="p-2 text-white hover:text-white/90 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Navigation links */}
                    <nav className="flex-1 flex flex-col justify-center items-center gap-2 overflow-y-auto">
                        <ul className="w-full max-w-md mx-auto flex flex-col gap-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
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

                    {/* Language toggle at the bottom (smaller on mobile) */}
                    <div className="flex justify-center items-center border-t border-white/20 py-4 gap-2">
                        <img
                            src={lang === 'en' ? 'toggle2.png' : 'toggle2.png'}
                            alt={lang === 'en' ? 'English' : 'नेपाली'}
                            role="button"
                            tabIndex={0}
                            onClick={() => setLang((lang === 'en' ? 'ne' : 'en') as Language)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') setLang((lang === 'en' ? 'ne' : 'en') as Language);
                            }}
                            className="object-cover cursor-pointer rounded-sm transition-shadow duration-150 w-8 h-6"
                            aria-label={lang === 'en' ? 'Switch to Nepali' : 'Switch to English'}
                        />
                    </div>
                </div>
            )}
        </header>
    );
};
