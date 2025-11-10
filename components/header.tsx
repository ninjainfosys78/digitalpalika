"use client";

import Link from 'next/link';
import { siteData } from '@/lib/siteData';
import { useLanguage, Language } from '@/context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/**
 * The Header component for the website.
 * It is responsible for navigation and language switching.
 */
export const Header = () => {
    // 1. Hook into the language context to get the current language state and translation function
    const { lang, setLang, t } = useLanguage();
    const pathname = usePathname();

    // Determine the data needed from the centralized siteData
    const navItems = siteData.header.navItems;

    // Hamburger menu state
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on navigation
    const handleNavClick = () => setMenuOpen(false);

    return (
        // Use fixed width container for responsiveness and sticky top for smooth scrolling
        <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm transition-shadow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                
                {/* Logo/Site Title: Uses the title from siteData */}
                <Link
                    href="/"
                    className="text-3xl font-extrabold tracking-tight text-blue-900"
                    style={{ marginLeft: "90px" }} 
                >
                    {t(siteData.hero.title)}
                </Link>

                {/* Main Navigation (Hidden on small screens, shown on large) */}
                <nav className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {/* Ensure all nav items from siteData are displayed, including Contact */}
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`text-base transition-colors relative group py-2 ${
                                            isActive ? 'text-blue-900 font-bold' : 'text-black font-normal'
                                        }`}
                                    >
                                        {t(item.label)}
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-left duration-300 ${
                                                isActive
                                                    ? 'scale-x-100 bg-blue-900'
                                                    : 'scale-x-0 group-hover:scale-x-100 bg-blue-900'
                                            }`}
                                        ></span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Right-aligned utility section: Search, Language Toggle, Mobile Menu */}
                <div className="flex items-center space-x-4 sm:space-x-6 relative">
                    {/* Language Toggle */}
                    <div className="flex items-center border border-gray-300 p-0.5 space-x-0.5 shadow-sm">
                        <button
                            onClick={() => setLang('en' as Language)}
                            className={`px-3 py-1 text-base font-semibold transition-all duration-200 ${
                                lang === 'en'
                                    ? 'text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            aria-label="Switch to English"
                            style={lang === 'en' ? { backgroundColor: "#01399A" } : {}}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLang('ne' as Language)}
                            className={`px-3 py-1 text-base font-semibold transition-all duration-200 ${
                                lang === 'ne'
                                    ? 'text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            aria-label="Switch to Nepali"
                            style={lang === 'ne' ? { backgroundColor: "#01399A" } : {}}
                        >
                            NP
                        </button>
                    </div>

                    {/* Mobile Menu Toggle (Only visible on small screens) */}
                    <button
                        aria-label="Open mobile menu"
                        className="lg:hidden p-2 text-gray-700 hover:text-blue-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-full"
                        style={{ alignSelf: 'center' }}
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="fixed inset-x-0 top-0 z-50 bg-white w-screen h-[75vh] flex flex-col lg:hidden shadow-md border-b border-blue-100">
                    {/* Top bar with logo and close button */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-blue-100">
                        <Link href="/" className="text-2xl font-extrabold tracking-tight" style={{ color: "#01399A" }}>
                            {t(siteData.hero.title)}
                        </Link>
                        <button
                            aria-label="Close mobile menu"
                            className="p-2 text-gray-700 hover:text-[#01399A] transition-colors"
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
                                                isActive ? 'text-[#01399A]' : 'text-black'
                                            }`}
                                            style={{
                                                borderBottom: '1px solid #E3EAF6',
                                                background: isActive ? '#F0F6FF' : 'transparent',
                                            }}
                                            onClick={handleNavClick}
                                        >
                                            {t(item.label)}
                                            <span
                                                className={`absolute left-1/2 -translate-x-1/2 bottom-2 w-2/3 h-0.5 transition-transform origin-left duration-300 ${
                                                    isActive
                                                        ? 'scale-x-100'
                                                        : 'scale-x-0 group-hover:scale-x-100'
                                                }`}
                                                style={{ backgroundColor: "#01399A" }}
                                            ></span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    {/* Language toggle at the bottom */}
                    <div className="flex justify-center items-center border-t border-blue-100 py-4 gap-2">
                        <button
                            onClick={() => setLang('en' as Language)}
                            className={`px-4 py-2 text-base font-semibold transition-all duration-200 ${
                                lang === 'en'
                                    ? 'text-white'
                                    : 'text-[#01399A] hover:bg-blue-50'
                            }`}
                            style={lang === 'en' ? { backgroundColor: "#01399A" } : { border: '1px solid #01399A', background: 'white' }}
                            aria-label="Switch to English"
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLang('ne' as Language)}
                            className={`px-4 py-2 text-base font-semibold transition-all duration-200 ${
                                lang === 'ne'
                                    ? 'text-white'
                                    : 'text-[#01399A] hover:bg-blue-50'
                            }`}
                            style={lang === 'ne' ? { backgroundColor: "#01399A" } : { border: '1px solid #01399A', background: 'white' }}
                            aria-label="Switch to Nepali"
                        >
                            NP
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
