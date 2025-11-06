"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

type Lang = "en" | "ne"

interface HeaderProps {
  language: Lang
  onLanguageChange?: (lang: Lang) => void
}

const DATA = {
  en: {
    items: [
      { type: "link", href: "/about", label: "About Us" },
      { type: "link", href: "/blogs", label: "Insights" },
      {
        type: "mega",
        key: "solutions",
        label: "Solutions",
        title: "Industry we serve",
        featured: {
          title: "Products",
          cards: [
            {
              heading: "Our Work",
              copy: " Explore our successful projects across industries.",
              href: "/work",
            },
          ],
        },
        cols: [
          [
            { href: "/solutions?cat=gov", label: "Government & Municipality" },
            { href: "/solutions?cat=edu", label: "Education" },
            { href: "/solutions?cat=health", label: "Healthcare" },
          ],
          [
            { href: "/solutions?cat=fin", label: "Fintech" },
            { href: "/solutions?cat=corp", label: "Corporate Solutions" },
          ],
        ],
      },
      { type: "link", href: "/careers", label: "Careers" },
    ] as const,
  },

  ne: {
    items: [
      { type: "link", href: "/about", label: "हामीबारे" },
      { type: "link", href: "/blogs", label: "अन्तर्दृष्टि" },
      {
        type: "mega",
        key: "solutions",
        label: "समाधान",
        title: "हामीले सेवा दिने उद्योग",
        featured: {
          title: "विशेष",
          cards: [
            { heading: "फिनटेक प्लेटफर्म", copy: "KYC, जोखिम, मिलान, PCI-रेडी।", href: "/solutions?cat=fin" },
            { heading: "सार्वजनिक क्षेत्र", copy: "नागरिक सेवा, खुला डेटा, सुरक्षित कार्यप्रवाह।", href: "/solutions?cat=gov" },
          ],
        },
        cols: [
          [
            { href: "/solutions?cat=gov", label: "सरकार/पालिका" },
            { href: "/solutions?cat=edu", label: "शिक्षा" },
            { href: "/solutions?cat=health", label: "स्वास्थ्य" },
          ],
          [
            { href: "/solutions?cat=fin", label: "फिनटेक" },
            { href: "/solutions?cat=corp", label: "कर्पोरेट समाधान" },
          ],
        ],
      },
      { type: "link", href: "/careers", label: "क्यारियर" },
    ] as const,
  },
}

export default function Header({ language = "en", onLanguageChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMega, setOpenMega] = useState<string | null>(null)
  const hoverTimer = useRef<number | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  const clearHoverTimer = () => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current)
      hoverTimer.current = null
    }
  }

  const scheduleClose = (delay = 150) => {
    clearHoverTimer()
    hoverTimer.current = window.setTimeout(() => {
      setOpenMega(null)
      hoverTimer.current = null
    }, delay)
  }

  const nav = DATA[language].items

  const DesktopLink = ({ href, label, isActive, onClick }: any) => (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm transition-colors relative group font-ibm-plex-sans ${
        isActive ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {label}
      <span className="pointer-events-none absolute -bottom-1 left-1/2 w-0 h-px bg-red-600 transition-all duration-200 group-hover:w-full group-hover:left-0" />
    </Link>
  )

  const MobileLink = ({ href, label, onClick }: any) => (
    <Link
      href={href}
      onClick={onClick}
      className="text-base text-white/85 hover:text-white transition-colors py-2 font-ibm-plex-sans"
    >
      {label}
    </Link>
  )

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false)
        setOpenMega(null)
      }
    }
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [])

  useEffect(() => {
    const onDocPointerDown = (e: PointerEvent) => {
      const root = headerRef.current
      if (!root) return
      if (!root.contains(e.target as Node)) setOpenMega(null)
    }
    document.addEventListener("pointerdown", onDocPointerDown)
    return () => document.removeEventListener("pointerdown", onDocPointerDown)
  }, [])

  const closeAllMenus = () => {
    setOpenMega(null)
    setMobileOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black transition-colors duration-200 backdrop-blur-md border-b border-black/10"
      role="banner"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="relative h-20 flex items-center flex-nowrap">
          <Link href="/" className="flex-none inline-flex items-center" aria-label="Ninja Infosys home">
            <Image
              src="/ninja-infosys-logo.png"
              alt="Ninja Infosys"
              width={48}
              height={48}
              className="h-8 sm:h-10 w-auto"
              priority
            />
            <span className="sr-only">NINJA INFOSYS</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 whitespace-nowrap ml-8" aria-label="Main navigation">
            {nav.map((item: any, idx: number) => {
              if (item.type === "link") {
                const isActive = pathname === item.href
                return (
                  <DesktopLink
                    key={`${item.href}-${idx}`}
                    href={item.href}
                    label={item.label}
                    isActive={isActive}
                    onClick={closeAllMenus}
                  />
                )
              }

              const k = item.key as string
              const open = openMega === k
              const exploreHref = k === "solutions" ? "/solutions" : "/services"

              return (
                <div
                  key={k}
                  className="relative"
                  onMouseEnter={() => {
                    clearHoverTimer()
                    setOpenMega(k)
                  }}
                  onMouseLeave={() => {
                    scheduleClose()
                  }}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors font-ibm-plex-sans cursor-pointer"
                    aria-haspopup="menu"
                    aria-expanded={open}
                    onClick={() => setOpenMega(open ? null : k)}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>

                  {open && (
                    <div
                      role="menu"
                      className="fixed left-1/2 -translate-x-1/2 top-16 w-[min(90vw,1100px)] border border-white/10 bg-black text-white shadow-2xl ring-1 ring-black/5 p-10 rounded-none"
                      onMouseEnter={() => clearHoverTimer()}
                      onMouseLeave={() => scheduleClose()}
                    >
                      <div className="flex items-center justify-between pb-6 border-b border-white/10">
                        <div className="text-base font-semibold tracking-wide text-white font-source-serif-pro">
                          {item.title}
                        </div>
                        <Link
                          href={exploreHref}
                          onClick={closeAllMenus}
                          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-ibm-plex-sans"
                        >
                          {language === "en" ? "Explore all" : "सबै हेर्नुहोस्"}
                          <ArrowRight size={16} />
                        </Link>
                      </div>

                      <div className="pt-8 grid grid-cols-1 md:grid-cols-[1.2fr_1.2fr_0.9fr] gap-10">
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
                          <div className="space-y-4">
                            <ul className="space-y-3">
                              {item.cols[0].map((it: any) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    onClick={closeAllMenus}
                                    className="text-sm relative group inline-block text-white/95 font-ibm-plex-sans"
                                  >
                                    <span className="block">{it.label}</span>
                                    <span className="pointer-events-none absolute -bottom-1 left-1/2 w-0 h-px bg-red-600 transition-all duration-200 group-hover:w-full group-hover:left-0" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <ul className="space-y-3">
                              {item.cols[1].map((it: any) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    onClick={closeAllMenus}
                                    className="text-sm relative group inline-block text-white/95 font-ibm-plex-sans"
                                  >
                                    <span className="block">{it.label}</span>
                                    <span className="pointer-events-none absolute -bottom-1 left-1/2 w-0 h-px bg-red-600 transition-all duration-200 group-hover:w-full group-hover:left-0" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="hidden md:flex flex-col pl-8 border-l border-white/25">
                          <div className="flex flex-col space-y-2 mt-3">
                            <div className="text-xs font-semibold tracking-wider text-white/70 uppercase font-ibm-plex-sans">
                              {item.featured.title}
                            </div>
                            {item.featured.cards.map((c: any) => (
                              <Link key={c.heading} href={c.href} onClick={closeAllMenus}>
                                <div className="font-semibold text-white leading-tight pb-1 font-source-serif-pro">
                                  {c.heading}
                                </div>
                                <p className="text-sm text-gray-400 leading-tight font-ibm-plex-sans">{c.copy}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="ml-auto flex items-center gap-5 flex-none">
            <button
              onClick={() => onLanguageChange?.(language === "en" ? "ne" : "en")}
              className="w-10 h-10 flex items-center justify-center shrink-0 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label={`Switch to ${language === "en" ? "Nepali" : "English"}`}
              title={language === "en" ? "Switch to Nepali" : "Switch to English"}
            >
              <Image
                src="/toggle.png"
                alt={language === "en" ? "Switch to Nepali" : "Switch to English"}
                width={48}
                height={48}
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
              <span className="sr-only">{language === "en" ? "Switch to Nepali" : "Switch to English"}</span>
            </button>

            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
