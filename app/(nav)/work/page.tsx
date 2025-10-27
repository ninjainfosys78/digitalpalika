"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, PenTool, Code, RefreshCw, ChevronDown } from "lucide-react"

import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import GlobalCTA from "@/components/global-cta"
import SearchOverlay from "@/components/search-overlay"
import OfficesModal from "@/components/offices-modal"
import Footer from "@/components/footer"

type Cat =
  | "All"
  | "E-palika System"
  | "ICMS Sites"
  | "School Website"
  | "News Portals"
  | "CMS Sites"

interface WorkItem {
  title: string
  blurb: string
  href: string
  category: Cat
  image?: string
  kpis?: { label: string; value: string }[]
}

export default function WorkPage() {
  const [language, setLanguage] = useState<"en" | "ne">("en")
  const [searchOpen, setSearchOpen] = useState(false)
  const [officesOpen, setOfficesOpen] = useState(false)

  const [active, setActive] = useState<Cat>("All")
  const [filterOpen, setFilterOpen] = useState(false)

  const t = {
    crumbRoot: "NINJA INFOSYS",
    crumbSelf: language === "en" ? "OUR WORK " : "हाम्रो काम",
    heroTitle: language === "en" ? "Our work" : "हाम्रो काम",
    heroLead:
      language === "en"
        ? "A few projects and products we’re proud of—fast, accessible and built to last."
        : "छिटो, पहुँचयोग्य र दीर्घकालीन समाधानहरू—हाम्रा केही प्रोजेक्ट र प्रोडक्टहरू।",
    filters: [
      "All",
      "E-palika System",
      "ICMS Sites",
      "School Website",
      "News Portals",
      "CMS Sites",
    ] as Cat[],
    galleryTitle: language === "en" ? "Projects" : "प्रोजेक्टहरू",
    featuredTitle: language === "en" ? "Featured case studies" : "मुख्य केस स्टडीहरू",
    resultsTitle: language === "en" ? "Selected results" : "चयनित नतिजाहरू",
    testimonialTitle: language === "en" ? "What clients say" : "ग्राहकहरूको भनाइ",
    processTitle: language === "en" ? "How we work" : "हामी कसरी काम गर्छौं",
  }

  const items: WorkItem[] = [
    {
      title: "E-Palika Citizen Portal",
      blurb:
        "Self-service forms, payments, certificates, grievance tracking with audit trails.",
      href: "/work/e-palika",
      category: "E-palika System",
      image: "epalika.png",
      kpis: [
        { label: "Queue time", value: "-68%" },
        { label: "Online adoption", value: "4.2×" },
      ],
    },
    {
      title: "ICMS for District Court",
      blurb:
        "Content governance, approvals and search for public legal information.",
      href: "/work/icms-court",
      category: "ICMS Sites",
      image: "icms.webp",
      kpis: [
        { label: "Publish time", value: "-72%" },
        { label: "Findability", value: "+38%" },
      ],
    },
    {
      title: "School Website",
      blurb:
        "Accessible, SEO-ready school site with admissions and fee payments.",
      href: "/work/school",
      category: "School Website",
      image: "school.jpg",
      kpis: [
        { label: "Core Web Vitals", value: "100/100" },
        { label: "Inquiries", value: "+55%" },
      ],
    },
    {
      title: "News Portal",
      blurb:
        "High-traffic news portal with image CDN, editor workflows and live coverage.",
      href: "/work/newshub",
      category: "News Portals",
      image: "news.jpg",
      kpis: [
        { label: "TTFB", value: "↓ 45%" },
        { label: "Pages/Session", value: "+27%" },
      ],
    },
    {
      title: "CMS Sites",
      blurb:
        "Multi-brand CMS with typed models, preview environments and CI/CD.",
      href: "/work/cms-fleet",
      category: "CMS Sites",
      image: "cms.jpg",
      kpis: [
        { label: "Time to publish", value: "-60%" },
        { label: "Editors NPS", value: "9.1" },
      ],
    },
  ]

  const featured = [
    {
      eyebrow: "Municipality",
      title: "E-Palika roll-out across 12 wards",
      problem:
        "Fragmented counters, manual files, citizens waiting hours for simple services.",
      approach:
        "Citizen portal (Next.js + Carbon), role-based e-Office, payments, SMS/email alerts, dashboards.",
      result: ["-68% average queue time", "95% services online", "Full auditability"],
    },
    {
      eyebrow: "Education",
      title: "Admissions funnel for Greenfield School",
      problem:
        "Admissions handled on paper; poor visibility on inquiries and conversions.",
      approach:
        "Accessible site, program pages, online applications, fee gateway, CRM export.",
      result: ["+55% inquiries", "Application completion +31%", "LCP < 1.2s"],
    },
  ]

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active]
  )

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      <AnnouncementBar language={language} />

      <main className="relative bg-white text-[#0B0D12]">
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-28 lg:pt-32">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: "url('/services.jpg')", backgroundAttachment: "fixed" }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_20%,rgba(15,98,254,0.25),transparent_60%),radial-gradient(600px_300px_at_85%_70%,rgba(122,90,248,0.2),transparent_60%)]" />

            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16">
              <div className="max-w-[1200px] text-left">
                <h1 className="mt-0 text-5xl font-heading font-semibold text-white sm:text-6xl text-left">
                  {t.heroTitle}
                </h1>
              </div>

              <nav aria-label="Breadcrumb" className="mt-4 text-sm text-white/80">
                <ol className="flex items-center gap-3">
                  <li>
                    <Link href="/" className="font-medium tracking-wide hover:text-white">NINJA INFOSYS</Link>
                  </li>
                  <li aria-hidden className="inline-flex items-center">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </li>
                  <li className="font-medium tracking-wide">{t.crumbSelf}</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10">
            <header className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold">{t.galleryTitle}</h2>

              <div className="relative flex items-center gap-2">
                <button
                  onClick={() => {
                    setActive("All")
                    setFilterOpen(false)
                  }}
                  className={`px-4 py-2 text-sm font-medium border rounded-[4px] transition-colors ${
                    active === "All"
                      ? "border-ni-accent text-ni-accent"
                      : "border-ni-graphite/20 hover:border-ni-accent/60"
                  }`}
                >
                  All
                </button>

                <button
                  onClick={() => setFilterOpen((s) => !s)}
                  aria-expanded={filterOpen}
                  className="px-4 py-2 text-sm font-medium border  border-ni-graphite/20 hover:border-ni-accent/60 inline-flex items-center gap-1"
                >
                  Filter <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                </button>

                {filterOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-12 w-56  border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-2 z-20"
                  >
                    {(t.filters.filter((c) => c !== "All") as Cat[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setActive(c)
                          setFilterOpen(false)
                        }}
                        role="menuitem"
                        aria-selected={active === c}
                        className={`w-full cursor-pointer text-left px-3 py-2 rounded-[4px] text-sm transition-colors
                          ${
                            active === c
                              ? "text-ni-accent font-medium bg-ni-paper"
                              : "text-ni-ink/90"
                          }
                          hover:bg-ni-paper hover:text-ni-accent focus:outline-none focus:ring-2 focus:ring-ni-accent/30`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </header>

            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((c) => {
                const fileName = c.image
                  ? c.image
                  : c.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-_.-]/g, "")
                const srcCandidates = c.image
                  ? [`/${fileName}`, `/${fileName}.jpg`, `/${fileName}.png`, `/${fileName}.webp`]
                  : [`/${fileName}.jpg`, `/${fileName}.png`, `/${fileName}.webp`, `/${fileName}.jpeg`]
                const placeholder = "/placeholder.jpg"

                return (
                  <div
                    key={c.title}
                    className="group relative block select-none overflow-hidden border border-ni-graphite/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-ni-accent"
                  >
                    <div className="relative aspect-[16/10] bg-ni-paper/60 flex items-center justify-center text-ni-slate overflow-hidden">
                      <img
                        src={srcCandidates[0]}
                        alt={c.title}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const targ = e.currentTarget as HTMLImageElement
                          const current = targ.getAttribute("src") || ""
                          const next = srcCandidates.find((s) => s !== current && s !== undefined)
                          if (next) {
                            targ.src = next
                          } else {
                            targ.src = placeholder
                          }
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-semibold tracking-wide text-ni-accent">
                        {c.category}
                      </div>
                      <h3 className="mt-1 text-xl py-2 font-semibold transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-ni-ink/80">{c.blurb}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-ni-graphite/10 bg-ni-graphite py-12 sm:py-16">
          <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10">
            <h2 className="text-2xl font-semibold text-white">{t.featuredTitle}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {featured.map((cs) => (
                <article
                  key={cs.title}
                  className="group border border-white/10 bg-white/5 p-6 text-white rounded-none transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-white hover:text-[#0B0D12]"
                >
                  <div className="text-[12px] font-semibold tracking-wider text-ni-accent">
                    {cs.eyebrow}
                  </div>

                  <h3 className="mt-1 text-xl pt-1 font-semibold text-white transition-colors group-hover:text-[#0B0D12]">
                    {cs.title}
                  </h3>

                  <div className="mt-3 grid gap-3 text-white/85">
                    <p>
                      <span className="font-semibold text-white transition-colors group-hover:text-[#0B0D12]">
                        Problem:{" "}
                      </span>
                      <span className="ml-1 text-white/85 transition-colors group-hover:text-[#0B0D12]">
                        {cs.problem}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-white transition-colors group-hover:text-[#0B0D12]">
                        Approach:{" "}
                      </span>
                      <span className="ml-1 text-white/85 transition-colors group-hover:text-[#0B0D12]">
                        {cs.approach}
                      </span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ni-graphite/10 py-12 sm:py-16 bg-ni-graphite">
          <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10">
            <h3 className="text-2xl font-semibold text-white">{t.processTitle}</h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Discover", d: "Goals, users, constraints. We pick a thin slice tied to outcomes.", Icon: Search },
                { t: "Design", d: "IA, flows, accessible UI using our Carbon-based system.", Icon: PenTool },
                { t: "Build", d: "Small releases, reviews, CI/CD, telemetry, performance budgets.", Icon: Code },
                { t: "Evolve", d: "A/B tests, analytics, and roadmaps—no drama launches.", Icon: RefreshCw },
              ].map((s) => (
                <li
                  key={s.t}
                  className="
                    group border border-ni-graphite/15 bg-transparent p-5
                    transition-transform
                    hover:-translate-y-0.5
                    hover:bg-white/5
                    hover:border-white/30
                  "
                >
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 flex items-center justify-center rounded bg-white/5 text-white">
                      {s.Icon ? <s.Icon size={16} className="text-current" /> : null}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ni-accent">{s.t}</div>
                      <p className="mt-1 text-white/85">
                        {s.d}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <GlobalCTA language={language} onOfficesOpen={() => setOfficesOpen(true)} />
      </main>

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
      />
      <OfficesModal
        isOpen={officesOpen}
        onClose={() => setOfficesOpen(false)}
        language={language}
      />
      <Footer language={language} />
    </>
  )
}
