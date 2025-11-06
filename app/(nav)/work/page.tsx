"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, PenTool, Code, RefreshCw, ChevronDown } from "lucide-react"

import Header from "@/components/header"
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
  | "सबै"
  | "ई-पालिका प्रणाली"
  | "ICMS साइटहरू"
  | "विद्यालय वेबसाइट"
  | "समाचार पोर्टलहरू"
  | "CMS साइटहरू"

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
      language === "en" ? "All" : "सबै",
      language === "en" ? "E-palika System" : "ई-पालिका प्रणाली",
      language === "en" ? "ICMS Sites" : "ICMS साइटहरू",
      language === "en" ? "School Website" : "विद्यालय वेबसाइट",
      language === "en" ? "News Portals" : "समाचार पोर्टलहरू",
      language === "en" ? "CMS Sites" : "CMS साइटहरू",
    ] as Cat[],
    galleryTitle: language === "en" ? "Projects" : "प्रोजेक्टहरू",
    featuredTitle: language === "en" ? "Featured case studies" : "मुख्य केस स्टडीहरू",
    processTitle: language === "en" ? "How we work" : "हामी कसरी काम गर्छौं",
    filterBtn: language === "en" ? "Filter" : "फिल्टर",
    allBtn: language === "en" ? "All" : "सबै",
    discover: language === "en" ? "Discover" : "पत्ता लगाउनुहोस्",
    discoverDesc: language === "en"
      ? "Goals, users, constraints. We pick a thin slice tied to outcomes."
      : "लक्ष्य, प्रयोगकर्ता, सीमाहरू। हामी परिणामसँग सम्बन्धित भाग छान्छौं।",
    design: language === "en" ? "Design" : "डिजाइन",
    designDesc: language === "en"
      ? "IA, flows, accessible UI using our Carbon-based system."
      : "IA, फ्लोहरू, हाम्रो कार्बन-आधारित प्रणाली प्रयोग गरी पहुँचयोग्य UI।",
    build: language === "en" ? "Build" : "निर्माण",
    buildDesc: language === "en"
      ? "Small releases, reviews, CI/CD, telemetry, performance budgets."
      : "सानो रिलीज, समीक्षा, CI/CD, टेलीमेट्री, प्रदर्शन बजेट।",
    evolve: language === "en" ? "Evolve" : "विकास गर्नुहोस्",
    evolveDesc: language === "en"
      ? "A/B tests, analytics, and roadmaps—no drama launches."
      : "A/B परीक्षण, विश्लेषण, रोडम्याप—साधारण लन्च।",
  }

  const items: WorkItem[] = [
    {
      title: language === "en" ? "E-Palika Citizen Portal" : "ई-पालिका नागरिक पोर्टल",
      blurb: language === "en"
        ? "Self-service forms, payments, certificates, grievance tracking with audit trails."
        : "आत्म-सेवा फारम, भुक्तानी, प्रमाणपत्र, गुनासो ट्र्याकिङ र अडिट ट्रेल।",
      href: "/work/e-palika",
      category: language === "en" ? "E-palika System" : "ई-पालिका प्रणाली",
      image: "epalika.png",
    },
    {
      title: language === "en" ? "ICMS for District Court" : "जिल्ला अदालतका लागि ICMS",
      blurb: language === "en"
        ? "Content governance, approvals and search for public legal information."
        : "सामग्री शासन, स्वीकृति र सार्वजनिक कानुनी जानकारीको खोज।",
      href: "/work/icms-court",
      category: language === "en" ? "ICMS Sites" : "ICMS साइटहरू",
      image: "icms.webp",
    },
    {
      title: language === "en" ? "School Website" : "विद्यालय वेबसाइट",
      blurb: language === "en"
        ? "Accessible, SEO-ready school site with admissions and fee payments."
        : "पहुँचयोग्य, SEO तयार विद्यालय साइट, भर्ना र शुल्क भुक्तानी सहित।",
      href: "/work/school",
      category: language === "en" ? "School Website" : "विद्यालय वेबसाइट",
      image: "school.jpg",
    },
    {
      title: language === "en" ? "News Portal" : "समाचार पोर्टल",
      blurb: language === "en"
        ? "High-traffic news portal with image CDN, editor workflows and live coverage."
        : "उच्च ट्राफिक समाचार पोर्टल, छवि CDN, सम्पादक वर्कफ्लो र प्रत्यक्ष कवरेज।",
      href: "/work/newshub",
      category: language === "en" ? "News Portals" : "समाचार पोर्टलहरू",
      image: "news.jpg",
    },
    {
      title: language === "en" ? "CMS Sites" : "CMS साइटहरू",
      blurb: language === "en"
        ? "Multi-brand CMS with typed models, preview environments and CI/CD."
        : "टाइप गरिएको मोडेल, पूर्वावलोकन वातावरण र CI/CD सहितको बहु-ब्रान्ड CMS।",
      href: "/work/cms-fleet",
      category: language === "en" ? "CMS Sites" : "CMS साइटहरू",
      image: "cms.jpg",
    },
  ]

  const featured = [
    {
      eyebrow: language === "en" ? "Municipality" : "नगरपालिका",
      title: language === "en"
        ? "E-Palika roll-out across 12 wards"
        : "१२ वडामा ई-पालिका विस्तार",
      problem: language === "en"
        ? "Fragmented counters, manual files, citizens waiting hours for simple services."
        : "छरिएको काउन्टर, म्यानुअल फाइल, नागरिकहरू साधारण सेवाका लागि घण्टौं कुर्दै।",
      approach: language === "en"
        ? "Citizen portal (Next.js + Carbon), role-based e-Office, payments, SMS/email alerts, dashboards."
        : "नागरिक पोर्टल (Next.js + Carbon), भूमिका-आधारित ई-कार्यालय, भुक्तानी, SMS/इमेल सूचना, ड्यासबोर्ड।",
      result: language === "en"
        ? ["-68% average queue time", "95% services online", "Full auditability"]
        : ["-६८% औसत पंक्ति समय", "९५% सेवा अनलाइन", "पूर्ण अडिट क्षमता"],
    },
    {
      eyebrow: language === "en" ? "Education" : "शिक्षा",
      title: language === "en"
        ? "Admissions funnel for Greenfield School"
        : "ग्रीनफिल्ड विद्यालयका लागि भर्ना प्रक्रिया",
      problem: language === "en"
        ? "Admissions handled on paper; poor visibility on inquiries and conversions."
        : "कागजमा भर्ना प्रक्रिया; जिज्ञासा र रूपान्तरणमा कम दृश्यता।",
      approach: language === "en"
        ? "Accessible site, program pages, online applications, fee gateway, CRM export."
        : "पहुँचयोग्य साइट, कार्यक्रम पृष्ठ, अनलाइन आवेदन, शुल्क गेटवे, CRM निर्यात।",
      result: language === "en"
        ? ["+55% inquiries", "Application completion +31%", "LCP < 1.2s"]
        : ["+५५% जिज्ञासा", "आवेदन पूरा +३१%", "LCP < १.२s"],
    },
  ]

  const filtered = useMemo(
    () =>
      active === t.filters[0]
        ? items
        : items.filter((i) =>
            i.category === active ||
            // Fix: show items when switching language and filter is in other language
            (language === "en"
              ? i.category === t.filters.find((f) => f === active)
              : i.category === t.filters.find((f) => f === active))
          ),
    [active, items, t.filters, language]
  )

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />

      <main className="relative bg-[#000000] text-[#e3e3e3]">
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-28 lg:pt-32">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed filter grayscale opacity-60 bg-[url('/services.jpg')]"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="pointer-events-none absolute inset-0" />
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


        {/* Projects */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1450px] w-full px-6 sm:px-10">
            <header className="flex items-center justify-between gap-4">
              <h2 className="font-semibold text-[32px]">{t.galleryTitle}</h2>
              <div className="relative flex items-center gap-2">
                <button
                  onClick={() => {
                    setActive(t.filters[0])
                    setFilterOpen(false)
                  }}
                  className={`px-4 py-2 text-sm font-medium border transition-colors ${
                    active === t.filters[0]
                      ? "border-[#e3e3e3] text-[#e3e3e3]"
                      : "border-[#000000]/20 hover:border-[#e3e3e3]/60"
                  }`}
                >
                  {t.allBtn}
                </button>
                <button
                  onClick={() => setFilterOpen((s) => !s)}
                  aria-expanded={filterOpen}
                  className="px-4 py-2 text-sm font-medium border inline-flex items-center gap-1"
                >
                  {t.filterBtn} <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                </button>
                {filterOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-12 w-56 border border-black/10 bg-[#000000] shadow-xl ring-1 ring-black/5 p-2 z-20"
                  >
                    {(t.filters.filter((c) => c !== t.filters[0]) as Cat[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setActive(c)
                          setFilterOpen(false)
                        }}
                        role="menuitem"
                        aria-selected={active === c}
                        className={`w-full cursor-pointer text-left px-3 py-2 text-sm transition-colors
                          ${
                            active === c
                              ? "text-[#141414] font-medium bg-ni-paper"
                              : "text-[#e3e3e3]/90"
                          }
                          hover:bg-[#141414] hover:text-[#e3e3e3] hover:border hover:border-white focus:outline-none focus:ring-2 focus:ring-white/30`}
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
                    className="group relative block select-none overflow-hidden border border-[#e3e3e3] bg-[#000000] p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] bg-ni-paper/60 flex items-center justify-center text-ni-slate overflow-hidden">
                      <img
                        src={srcCandidates[0]}
                        alt={c.title}
                        className="object-cover w-full h-full filter grayscale"
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
                      <div className="text-xs font-semibold tracking-wide text-[#e3e3e3]/80">
                        {c.category}
                      </div>
                      <h3 className="mt-1 text-xl py-2 font-semibold transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-[#e3e3e3]/80">{c.blurb}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-ni-graphite/10 bg-[#000000] py-12 sm:py-16">
          <div className="mx-auto max-w-[1450px] w-full px-6 sm:px-10">
            <h2 className="font-semibold text-white text-[32px]">{t.featuredTitle}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {featured.map((cs) => (
                <article
                  key={cs.title}
                  className="group border border-white/10 bg-white/5 p-6 text-white rounded-none transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#141414] hover:text-[#e3e3e3]"
                >
                  <div className="text-[12px] font-semibold tracking-wider ">
                    {cs.eyebrow}
                  </div>
                  <h3 className="mt-1 text-xl pt-1 font-semibold text-white transition-colors group-hover:text-[#e3e3e3]">
                    {cs.title}
                  </h3>
                  <div className="mt-3 grid gap-3 text-white/85">
                    <p>
                      <span className="font-semibold text-white transition-colors group-hover:text-[#e3e3e3]">
                        {language === "en" ? "Problem:" : "समस्या:"}{" "}
                      </span>
                      <span className="ml-1 text-white/85 transition-colors group-hover:text-[#e3e3e3]">
                        {cs.problem}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-white transition-colors group-hover:text-[#e3e3e3]">
                        {language === "en" ? "Approach:" : "दृष्टिकोण:"}{" "}
                      </span>
                      <span className="ml-1 text-white/85 transition-colors group-hover:text-[#e3e3e3]">
                        {cs.approach}
                      </span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border border-ni-graphite/10 py-12 sm:py-16 bg-[#000000]">
          <div className="mx-auto max-w-[1450px] w-full px-6 sm:px-10">
            <h3 className="font-semibold text-white text-[32px]">{t.processTitle}</h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  t: t.discover,
                  d: t.discoverDesc,
                  Icon: Search
                },
                {
                  t: t.design,
                  d: t.designDesc,
                  Icon: PenTool
                },
                {
                  t: t.build,
                  d: t.buildDesc,
                  Icon: Code
                },
                {
                  t: t.evolve,
                  d: t.evolveDesc,
                  Icon: RefreshCw
                }
              ].map((s) => (
                <li
                  key={s.t}
                  className="
                    group border border-ni-graphite/15 bg-transparent p-5
                    transition-transform
                    hover:-translate-y-0.5
                    hover:bg-gray-500/5
                    hover:border-white/30
                  "
                >
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 flex items-center justify-center bg-white/5 text-white">
                      {s.Icon ? <s.Icon size={16} className="text-current" /> : null}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{s.t}</div>
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
