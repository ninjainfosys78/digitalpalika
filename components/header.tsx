"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

type Lang = "en" | "ne"

interface HeaderProps {
  language: Lang
  onLanguageChange: (lang: Lang) => void
}

const DATA = {
  en: {
    cta: "Start a conversation",
    items: [
      { type: "link", href: "/", label: "Home" },
      { type: "link", href: "/about", label: "About" },
      {
        type: "mega",
        key: "services",
        label: "Services",
        title: "Explore our services",
        featured: {
          title: "Featured",
          cards: [
            {
              heading: "E-Governance Solutions",
              copy:
                "Digital services for municipalities: service workflows, billing, and citizen portals.",
              href: "/services?svc=egov",
            },
            {
              heading: "Cloud & DevOps Accelerators",
              copy:
                "Reference architectures, CI/CD, observability, and cost-aware cloud baselines.",
              href: "/services?svc=cloud",
            },
          ],
        },
        cols: [
          [
            { href: "/services?svc=web", label: "Web Development" },
            { href: "/services?svc=mobile", label: "Mobile App Development" },
            { href: "/services?svc=uiux", label: "UI/UX Design" },
            { href: "/services?svc=cloud", label: "Cloud & DevOps" },
          ],
          [
            { href: "/services?svc=maintenance", label: "Software Maintenance" },
            { href: "/services?svc=consulting", label: "IT Consulting" },
            { href: "/services?svc=egov", label: "E-Governance Solutions" },
          ],
        ],
      },
      {
        type: "mega",
        key: "solutions",
        label: "Solutions",
        title: "Industry we serve",
        featured: {
          title: "Featured",
          cards: [
            {
              heading: "Fintech Platforms",
              copy: "KYC, risk, reconciliation and PCI-ready architectures.",
              href: "/solutions?cat=fin",
            },
            {
              heading: "Public Sector Stack",
              copy: "Citizen services, open data platforms, and secure workflows.",
              href: "/solutions?cat=gov",
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
      { type: "link", href: "/work", label: "Our Work" },
      { type: "link", href: "/blogs", label: "Blogs" },
      { type: "link", href: "/careers", label: "Careers" },
      { type: "link", href: "/contact", label: "Contact" },
    ] as const,
  },

  ne: {
    cta: "सम्पर्क गरौँ",
    items: [
      { type: "link", href: "/", label: "होम" },
      { type: "link", href: "/about", label: "हामीबारे" },
      {
        type: "mega",
        key: "services",
        label: "सेवाहरू",
        title: "हाम्रा सेवाहरू",
        featured: {
          title: "विशेष",
          cards: [
            { heading: "ई-शासन समाधान", copy: "नगरपालिकाका लागि सेवा, बिलिङ र नागरिक पोर्टल।", href: "/services?svc=egov" },
            { heading: "क्लाउड & DevOps", copy: "CI/CD, अव्जर्भेबिलिटी र लागत सचेत बेसलाइनहरू।", href: "/services?svc=cloud" },
          ],
        },
        cols: [
          [
            { href: "/services?svc=web", label: "वेब विकास" },
            { href: "/services?svc=mobile", label: "मोबाइल एप विकास" },
            { href: "/services?svc=uiux", label: "UI/UX डिजाइन" },
            { href: "/services?svc=cloud", label: "क्लाउड & DevOps" },
          ],
          [
            { href: "/services?svc=maintenance", label: "सफ्टवेयर मर्मत" },
            { href: "/services?svc=consulting", label: "आईटी परामर्श" },
            { href: "/services?svc=egov", label: "ई-शासन समाधान" },
          ],
        ],
      },
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
      { type: "link", href: "/work", label: "हाम्रो काम" },
      { type: "link", href: "/blogs", label: "ब्लगहरू" },
      { type: "link", href: "/careers", label: "क्यारियर" },
      { type: "link", href: "/contact", label: "सम्पर्क" },
    ] as const,
  },
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMega, setOpenMega] = useState<string | null>(null)
  const [mobileMenus, setMobileMenus] = useState<Record<string, boolean>>({})
  const [dropdownTop, setDropdownTop] = useState<number | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  const nav = DATA[language].items
  const ctaLabel = DATA[language].cta

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

  useEffect(() => {
    const updateTop = () => {
      const el = headerRef.current
      if (!el) return setDropdownTop(null)
      const { height, top } = el.getBoundingClientRect()
      const overlap = 30
      setDropdownTop(Math.round(top + height - overlap))
    }

    updateTop()
    window.addEventListener("resize", updateTop)
    window.addEventListener("scroll", updateTop, { passive: true })
    return () => {
      window.removeEventListener("resize", updateTop)
      window.removeEventListener("scroll", updateTop)
    }
  }, [headerRef])

  const closeAllMenus = () => {
    setOpenMega(null)
    setMobileOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-ni-ink/80 backdrop-blur-md border-b border-white/10"
      role="banner"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="relative h-20 flex items-center flex-nowrap">
          <Link
            href="/"
            className="flex-none text-lg font-heading font-semibold tracking-tight text-white"
            aria-label="Ninja Infosys home"
          >
            NINJA INFOSYS
          </Link>

          <nav
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 whitespace-nowrap"
            aria-label="Main navigation"
          >
            {nav.map((item: any, idx: number) => {
              if (item.type === "link") {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={`${item.href}-${idx}`}
                    href={item.href}
                    className={`text-sm transition-colors relative group ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 w-0 h-px bg-ni-accent transition-all duration-200 group-hover:w-full group-hover:left-0" />
                  </Link>
                )
              }

              const k = item.key as string
              const open = openMega === k
              const exploreHref = k === "solutions" ? "/solutions" : "/services"

              return (
                <div key={k} className="relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
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
                      className="
                        fixed left-1/2 -translate-x-1/2
                        w-[min(90vw,1100px)] rounded-2px border border-black/5
                        bg-white text-ni-ink shadow-2xl ring-1 ring-black/5
                        p-6
                      "
                      style={dropdownTop ? { top: `${dropdownTop}px` } : undefined}
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-black/10">
                        <div className="text-sm font-semibold tracking-wide">
                          {item.title}
                        </div>
                        <Link
                          href={exploreHref}
                          onClick={closeAllMenus}
                          className="inline-flex items-center gap-2 text-sm text-ni-accent hover:text-ni-accent-2"
                        >
                          {language === "en" ? "Explore all" : "सबै हेर्नुहोस्"}
                          <ArrowRight size={16} />
                        </Link>
                      </div>

                      <div className="pt-4 grid grid-cols-1 md:grid-cols-[1.2fr_1.2fr_0.9fr] gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 md:col-span-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ul className="space-y-2">
                              {item.cols[0].map((it: any) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    onClick={closeAllMenus}
                                    className="text-sm text-ni-ink/80 hover:text-ni-ink hover:underline underline-offset-4"
                                  >
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <ul className="space-y-2">
                              {item.cols[1].map((it: any) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    onClick={closeAllMenus}
                                    className="text-sm text-ni-ink/80 hover:text-ni-ink hover:underline underline-offset-4"
                                  >
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="hidden md:block border-l border-black/10 pl-6">
                          <div className="text-xs font-semibold tracking-wider text-ni-ink/60 uppercase mb-3">
                            {item.featured.title}
                          </div>
                          <div className="space-y-4">
                            {item.featured.cards.map((c: any) => (
                              <Link
                                key={c.heading}
                                href={c.href}
                                onClick={closeAllMenus}
                                className="group block rounded-2px p-3 hover:bg-black/[0.04]"
                              >
                                <div className="font-semibold text-ni-ink group-hover:text-ni-accent">
                                  {c.heading}
                                </div>
                                <p className="mt-1 text-xs text-ni-ink/70 leading-relaxed">
                                  {c.copy}
                                </p>
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
            {/* FIXED-WIDTH LANGUAGE TOGGLE */}
            <button
              onClick={() => onLanguageChange(language === "en" ? "ne" : "en")}
              className="w-10 min-w-[2.5rem] shrink-0 text-center text-sm text-white/70 hover:text-white transition-colors font-medium"
              aria-label={`Switch to ${language === "en" ? "Nepali" : "English"}`}
            >
              {language === "en" ? "NE" : "EN"}
            </button>

            {/* FIXED-WIDTH CTA WITH CENTERED TEXT */}
            <Link
              href="/#contact"
              className="hidden md:inline-flex h-10 w-[180px] items-center justify-center bg-ni-accent text-white text-md font-semibold whitespace-nowrap px-4"
            >
              {ctaLabel}
            </Link>

            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-ni-ink/95 backdrop-blur-md border-t border-white/10">
          <nav className="max-w-[1600px] mx-auto px-6 py-6 flex flex-col gap-2" aria-label="Mobile navigation">
            {nav.map((item: any) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base text-white/85 hover:text-white transition-colors py-2"
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </Link>
                )
              }
              const k = item.key as string
              const open = !!mobileMenus[k]
              return (
                <div key={k} className="border-t border-white/10 pt-3">
                  <button
                    className="w-full flex items-center justify-between text-base text-white/90 py-2"
                    onClick={() => setMobileMenus((m) => ({ ...m, [k]: !open }))}
                    aria-expanded={open}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>

                  {open && (
                    <div className="mt-1 pl-2">
                      <div className="grid grid-cols-1 gap-1">
                        {[...item.cols[0], ...item.cols[1]].map((c: any) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="py-2 text-white/80 hover:text-white"
                            onClick={closeAllMenus}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>

                      <div className="mt-3 border-t border-white/10 pt-3">
                        <div className="text-xs font-semibold tracking-wider text-white/60 uppercase mb-2">
                          {item.featured.title}
                        </div>
                        <div className="space-y-2">
                          {item.featured.cards.map((c: any) => (
                            <Link
                              key={c.heading}
                              href={c.href}
                              className="block rounded px-2 py-2 text-sm text-white/85 hover:bg-white/5"
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium">{c.heading}</div>
                              <div className="text-xs text-white/70">{c.copy}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            <Link
              href="/#contact"
              className="mt-4 inline-flex items-center justify-center px-5 py-2.5 bg-ni-accent text-white text-sm font-semibold"
              onClick={closeAllMenus}
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
