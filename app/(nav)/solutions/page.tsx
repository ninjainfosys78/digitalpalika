"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronDown } from "lucide-react"

import Header from "@/components/header"
import GlobalCTA from "@/components/global-cta"
import SearchOverlay from "@/components/search-overlay"
import OfficesModal from "@/components/offices-modal"
import Footer from "@/components/footer"

type Lang = "en" | "ne"
type Key = "gov" | "edu" | "health" | "fin" | "corp"

type Cat =
  | "All"
  | "E-palika System"
  | "ICMS Sites"
  | "School Website"
  | "News Portals"
  | "CMS Sites"

type Localized = { en: string; ne: string }

interface WorkItem {
  title: Localized
  blurb: Localized
  href: string
  category: Cat
  image?: string
  kpis?: { label: string; value: string }[]
}

export default function SolutionsPage() {
  const [language, setLanguage] = useState<Lang>("en")
  const [searchOpen, setSearchOpen] = useState(false)
  const [officesOpen, setOfficesOpen] = useState(false)
  const [active, setActive] = useState<Key | null>(null)

  const [projActive, setProjActive] = useState<Cat>("All")
  const [filterOpen, setFilterOpen] = useState(false)

  const router = useRouter()
  const params = useSearchParams()

  useEffect(() => {
    const cat = (params.get("cat") || "").toLowerCase() as Key
    const allowed: Key[] = ["gov", "edu", "health", "fin", "corp"]
    if (allowed.includes(cat)) setActive(cat)
    else setActive(null)
  }, [params])

  const activate = (key: Key) => {
    setActive(key)
    setProjActive("All")
    setFilterOpen(false)
    router.replace(`/solutions?cat=${key}`)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false)
        setOfficesOpen(false)
        setFilterOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const cards = [
    { key: "gov" as Key, title: { en: "Government & Municipality", ne: "सरकार/पालिका" }, copy: { en: "Citizen services, service workflows, billing, identity, and secure, traceable platforms.", ne: "नागरिक सेवा, सेवा कार्यप्रवाह, बिलिङ, पहिचान, र सुरक्षित ट्रेसयोग्य प्लेटफर्म।" }, img: "/goverment.jpg" },
    { key: "edu" as Key, title: { en: "Education", ne: "शिक्षा" }, copy: { en: "Student information systems, learning platforms, assessments, and secure data pipelines.", ne: "छात्र सूचना प्रणाली, सिकाइ प्लेटफर्म, मूल्यांकन, र सुरक्षित डेटा पाइपलाइन।" }, img: "/education.jpg" },
    { key: "health" as Key, title: { en: "Healthcare", ne: "स्वास्थ्य" }, copy: { en: "Interoperable, patient-safe software—FHIR-first integrations, auditability, and uptime by design.", ne: "रोगी-केंद्रित प्रणालीहरू—FHIR-मैत्री इंटीग्रेशन, अडिटयोग्य र विश्वसनीय।" }, img: "/healthcare.jpg" },
    { key: "fin" as Key, title: { en: "Fintech", ne: "फिनटेक" }, copy: { en: "KYC, risk, reconciliation and PCI-aware architectures for modern money movement.", ne: "KYC, जोखिम, मिलान र PCI-उपयुक्त आर्किटेक्चर।" }, img: "/fintech.jpg" },
    { key: "corp" as Key, title: { en: "Corporate Solutions", ne: "कर्पोरेट समाधान" }, copy: { en: "Digital commerce, analytics and data platforms that scale reliably across the enterprise.", ne: "डिजिटल व्यापार, एनालिटिक्स र डेटा प्लेटफर्महरू जसले विश्वसनीय रूपमा स्केल गर्छन्।" }, img: "/corporate.jpg" },
  ]

  const content = useMemo(
    () => ({
      gov: {
        en: {
          pageTitle: "GOVERNMENT & MUNICIPALITY",
          lead: "Digital public services that are safe, simple, and accountable. We design citizen portals and back-office workflows that reduce queues, cut errors, and make services auditable by default.",
          bulletsCol1: ["Citizen self-service (applications, payments, certificates)", "Case management and approvals with roles & audit trails", "eKYC/ID, digital signatures, and document vaults"],
          bulletsCol2: ["Revenue modules: billing, tax, fees, and reconciliation", "Grievance redressal & RTI tracking", "Dashboards for programs, budgets, and SLAs"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
        ne: {
          pageTitle: "सरकार र नगरपालिका",
          lead: "सुरक्षित, सरल र जवाफदेही डिजिटल सार्वजनिक सेवाहरू। हामीले नागरिक पोर्टल र ब्याक-अफिस वर्कफ्लो डिजाइन गर्छौं जसले पंक्ति घटाउँछ, त्रुटि घटाउँछ, र सेवाहरूलाई अडिटयोग्य बनाउँछ।",
          bulletsCol1: ["नागरिक स्वयं-सेवा (आवेदन, भुक्तानी, प्रमाणपत्र)", "केस व्यवस्थापन र भूमिकाहरू सहित अनुमोदन र अडिट ट्रेल", "eKYC/ID, डिजिटल हस्ताक्षर र दस्तावेज भण्डारण"],
          bulletsCol2: ["राजस्व मोड्युलहरू: बिलिङ, कर, शुल्क र मिलान", "न्यायालय परिमार्जन र RTI ट्र्याकिङ", "कार्यक्रम, बजेट र SLA का लागि ड्यासबोर्ड"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
      },
      edu: {
        en: {
          pageTitle: "EDUCATION",
          lead: "Modern digital campus from admissions to alumni. We build student, faculty, and parent portals with secure payments, attendance, LMS, exams, and analytics that help institutions run smoothly.",
          bulletsCol1: ["Admissions & enrollment with merit lists and fee payments", "Student, faculty, and parent portals (SIS integration)", "Attendance, timetable, and course management"],
          bulletsCol2: ["LMS & virtual classroom, assignments & grading", "Exam scheduling, evaluation, and results publishing", "Accreditation & NAAC reporting dashboards"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
        ne: {
          pageTitle: "शिक्षा",
          lead: "भर्ना देखि एलुमनाइ सम्म आधुनिक डिजिटल क्याम्पस। हामी विद्यार्थी, शिक्षक र अभिभावक पोर्टलहरू बनाउँछौं जसमा सुरक्षित भुक्तानी, उपस्थिति, LMS, परीक्षाहरू र विश्लेषणहरू हुन्छन्।",
          bulletsCol1: ["भर्ना र नामांकन (मेरिट सूची र शुल्क भुक्तानी सहित)", "विद्यार्थी, शिक्षक र अभिभावक पोर्टल (SIS एकीकरण)", "उपस्थिति, समयतालिका, र पाठ्यक्रम व्यवस्थापन"],
          bulletsCol2: ["LMS र भर्चुअल कक्षालय, कार्य र ग्रेडिङ", "परीक्षा तालिका, मूल्यांकन र नतिजा प्रकाशन", "मान्यता र रिपोर्टिंग ड्यासबोर्ड"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
      },
      health: {
        en: {
          pageTitle: "HEALTHCARE",
          lead: "Patient-centric systems for hospitals and public programs. We deliver EMR/EHR, OPD/IPD, pharmacy, lab integrations (HL7), claims, and telemedicine—privacy-first and reliable.",
          bulletsCol1: ["EMR/EHR with role-based access and audit logs", "OPD/IPD, appointments, queues, and bed management", "Pharmacy, inventory, and e-prescriptions"],
          bulletsCol2: ["Lab integrations (HL7), radiology & reports", "Insurance/TPA claims and billing", "Telemedicine and remote care with consent"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
        ne: {
          pageTitle: "स्वास्थ्य",
          lead: "अस्पताल र सार्वजनिक कार्यक्रमहरूका लागि रोगी-केंद्रित प्रणालीहरू। हामी EMR/EHR, OPD/IPD, फार्मेसी, ल्याब इंटीग्रेशन (HL7), दाबी र टेलिमेडिसिन प्रदान गर्छौं—गोपनीयता केन्द्रित र विश्वसनीय।",
          bulletsCol1: ["भूमिका-आधारित पहुँच र अडिट लग सहित EMR/EHR", "OPD/IPD, अपोइन्टमेन्ट, पंक्ति र बेड व्यवस्थापन", "फार्मेसी, भण्डारण र ई-प्रिस्क्रिप्सन"],
          bulletsCol2: ["ल्याब इंटीग्रेशन (HL7), रेडियोलोजी र रिपोर्ट", "बिमा/TPA दाबी र बिलिङ", "स्वीकृतिको साथ टेलिमेडिसिन र दूरस्थ हेरचाह"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
      },
      fin: {
        en: {
          pageTitle: "FINTECH",
          lead: "Payments, lending, and compliance platforms engineered for reliability and scale. We ship secure APIs, dashboards, and data pipelines with audits and observability built in.",
          bulletsCol1: ["Payments: collections, payouts, reconciliation and settlement", "KYC/eKYC, AML checks and risk rules", "Ledgering, statements and dispute workflows"],
          bulletsCol2: ["Lending: onboarding, scoring, LOS/LMS integrations", "Dashboards for operations and compliance reporting", "Data warehouse, observability and alerting"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
        ne: {
          pageTitle: "फिनटेक",
          lead: "भुक्तानी, ऋण र अनुपालन प्लेटफर्महरू जो विश्वसनीय र स्केलेबल छन्। हामी सुरक्षित API, ड्यासबोर्ड र डेटा पाइपलाइनहरू डेलिभर गर्छौं।",
          bulletsCol1: ["भुक्तानी: सङ्कलन, भुक्तानी, मिलान र निकासा", "KYC/eKYC, AML जाँच र जोखिम नियमहरू", "लेजरिंग, विवरण र विवाद कार्यप्रवाह"],
          bulletsCol2: ["ऋण: अनबोर्डिङ, स्कोरिङ, LOS/LMS एकीकरण", "अपरेशन र अनुपालन रिपोर्टिङका लागि ड्यासबोर्ड", "डेटा वेयरहाउस, अव्जर्भेबिलिटी र अलर्टिंग"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
      },
      corp: {
        en: {
          pageTitle: "CORPORATE SOLUTIONS",
          lead: "Internal platforms and customer portals that move the needle built with strong design systems, clean APIs, and a focus on security, cost, and reliability.",
          bulletsCol1: ["Customer portals and partner ecosystems", "Product websites, pricing, quotes and checkout", "APIs for CRM/ERP integrations and automation"],
          bulletsCol2: ["Internal developer platforms (IDP) for faster delivery", "Analytics, experimentation and performance budgets", "SSO, RBAC, audit trails and compliance reporting"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
        ne: {
          pageTitle: "कर्पोरेट समाधान",
          lead: "आन्तरिक प्लेटफर्म र ग्राहक पोर्टलहरू जो बलियो डिजाइन सिस्टम, सफा API र सुरक्षा, लागत र विश्वसनीयतामा केन्द्रित छन्।",
          bulletsCol1: ["ग्राहक पोर्टल र साझेदार पारिस्थितिकी तन्त्र", "उत्पादन वेबसाइटहरू, मूल्य निर्धारण, कोट र चेकआउट", "CRM/ERP एकीकरणका लागि API र अटोमेसन"],
          bulletsCol2: ["भित्रि डेभलपर प्लेटफर्म (IDP) द्रुत डेलिभरीका लागि", "एनालिटिक्स, परीक्षण र प्रदर्शन बजेट", "SSO, RBAC, अडिट ट्रेल र अनुपालन रिपोर्टिङ"],
          solutionsTitle: "",
          solutionsLead: "",
          solutionCards: [],
        },
      },
    }),
    []
  )

  const leftNav = [
    { label: { en: "Government & Municipality", ne: "सरकार/पालिका" }, key: "gov" as Key },
    { label: { en: "Education", ne: "शिक्षा" }, key: "edu" as Key },
    { label: { en: "Healthcare", ne: "स्वास्थ्य" }, key: "health" as Key },
    { label: { en: "FinTech", ne: "फिनटेक" }, key: "fin" as Key },
    { label: { en: "Corporate Solutions", ne: "कर्पोरेट समाधान" }, key: "corp" as Key },
  ]

  const detail = active ? content[active][language] : null

  const t = useMemo(
    () => ({ galleryTitle: language === "en" ? "Projects" : "प्रोजेक्टहरू", filters: ["All", "E-palika System", "ICMS Sites", "School Website", "News Portals", "CMS Sites"] as Cat[] }),
    [language]
  )

  const translateCat = (cat: Cat) => {
    if (cat === "All") return language === "en" ? "All" : "सबै"
    switch (cat) {
      case "E-palika System":
        return language === "en" ? "E-palika System" : "ई-पालिका प्रणाली"
      case "ICMS Sites":
        return language === "en" ? "ICMS Sites" : "ICMS साइटहरू"
      case "School Website":
        return language === "en" ? "School Website" : "स्कुल वेबसाइट"
      case "News Portals":
        return language === "en" ? "News Portals" : "न्युज पोर्टल"
      case "CMS Sites":
        return language === "en" ? "CMS Sites" : "CMS साइटहरू"
      default:
        return cat
    }
  }

  const items: WorkItem[] = useMemo(
    () => [
      { title: { en: "E-Palika Citizen Portal", ne: "ई-पालिका नागरिक पोर्टल" }, blurb: { en: "Self-service forms, payments, certificates, grievance tracking with audit trails.", ne: "स्वयं-सेवा फर्महरू, भुक्तानी, प्रमाणपत्र, गुनासो ट्र्याकिङ र अडिट ट्रेल।" }, href: "/work/e-palika", category: "E-palika System", image: "epalika.png", kpis: [{ label: "Queue time", value: "-68%" }, { label: "Online adoption", value: "4.2×" }] },
      { title: { en: "ICMS for District Court", ne: "जिल्ला अदालतका लागि ICMS" }, blurb: { en: "Content governance, approvals and search for public legal information.", ne: "सामग्री शासन, अनुमोदन र सार्वजनिक कानुनी जानकारीको खोज।" }, href: "/work/icms-court", category: "ICMS Sites", image: "icms.webp", kpis: [{ label: "Publish time", value: "-72%" }, { label: "Findability", value: "+38%" }] },
      { title: { en: "School Website", ne: "स्कुल वेबसाइट" }, blurb: { en: "Accessible, SEO-ready school site with admissions and fee payments.", ne: "पहुँचयोग्य, SEO-तयार स्कूल साइट जसमा भर्ना र शुल्क भुक्तानी छन्।" }, href: "/work/school", category: "School Website", image: "school.jpg", kpis: [{ label: "Core Web Vitals", value: "100/100" }, { label: "Inquiries", value: "+55%" }] },
      { title: { en: "News Portal", ne: "न्युज पोर्टल" }, blurb: { en: "High-traffic news portal with image CDN, editor workflows and live coverage.", ne: "उच्च ट्राफिक न्युज पोर्टल, छवि CDN, सम्पादकीय वर्कफ्लो र प्रत्यक्ष कवरेजसहित।" }, href: "/work/newshub", category: "News Portals", image: "news.jpg", kpis: [{ label: "TTFB", value: "↓ 45%" }, { label: "Pages/Session", value: "+27%" }] },
      { title: { en: "CMS Sites", ne: "CMS साइटहरू" }, blurb: { en: "Multi-brand CMS with typed models, preview environments and CI/CD.", ne: "टाइप गरिएको मोडेल, प्रिभ्यू वातावरण र CI/CD सहित बहु-ब्रान्ड CMS।" }, href: "/work/cms-fleet", category: "CMS Sites", image: "cms.jpg", kpis: [{ label: "Time to publish", value: "-60%" }, { label: "Editors NPS", value: "9.1" }] },
    ],
    []
  )

  const filtered = useMemo(() => (projActive === "All" ? items : items.filter((i) => i.category === projActive)), [projActive, items])

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />

      <main className="relative bg-black text-white">
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-28 lg:pt-32">
            <div className="absolute inset-0 bg-cover bg-center bg-fixed grayscale" style={{ backgroundImage: "url('/industry.jpg')" }} />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16">
              <div className="max-w-[1200px] text-left">
                <nav aria-label="Breadcrumb" className="mt-0 text-sm text-white/80">
                <ol className="flex items-center gap-3">
                  <li>
                    <Link href="/" className="font-medium tracking-wide hover:text-white">NINJA INFOSYS</Link>
                  </li>
                  <li aria-hidden className="inline-flex items-center">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </li>
                  <li>
                    <Link href="/solutions" onClick={() => setActive(null)} className="font-medium tracking-wide hover:text-white">
                      {language === "en" ? "SOLUTIONS" : "समाधान"}
                    </Link>
                  </li>
                  {active && (
                    <>
                      <li aria-hidden className="inline-flex items-center">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                      </li>
                      <li className="font-medium tracking-wide">{detail?.pageTitle}</li>
                    </>
                  )}
                </ol>
              </nav>

                <h1 className="pt-4 text-5xl font-heading font-semibold text-white sm:text-6xl">
                  {active ? detail?.pageTitle : language === "en" ? "Industry we serve" : "हामीले सेवा दिने उद्योग"}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {!active && (
          <section className="py-14 relative overflow-hidden bg-black">
            <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
              <div className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map(({ key, title, copy, img }) => (
                  <button
                    key={key}
                    onClick={() => activate(key)}
                    className={`text-left group relative block select-none overflow-hidden w-full rounded-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] hover:ring-8 hover:ring-white ${(["gov","edu","health","fin","corp"] as Key[]).includes(key) ? "cursor-pointer" : ""}`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={img} alt={title[language]} className="h-full w-full object-cover grayscale" />
                    </div>

                    <div className="p-6 sm:p-7 bg-black transition-colors duration-300 group-hover:bg-white">
                      <div className="flex items-center">
                        <h3 className="text-xl sm:text-2xl pb-2 font-semibold text-white transition-colors duration-300 group-hover:text-black">
                          {title[language]}
                        </h3>
                      </div>

                      <p className="mt-3 text-base leading-relaxed text-white/85 transition-colors duration-300 group-hover:text-black/80">
                        {copy[language]}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {active && detail && (
          <>
            <section className="py-12 sm:py-16 bg-black text-white">
              <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10">
                <div className="grid gap-10 lg:grid-cols-12">
                  <aside className="lg:col-span-4 xl:col-span-3">
                    <div className="space-y-4">
                      {leftNav.map((item) => (
                        <button
                          key={item.key}
                          onClick={() => activate(item.key)}
                          className={`w-full text-left flex items-center justify-between border border-white/20 bg-black px-5 py-5 text-[18px] font-medium transition-colors ${item.key === active ? "ring-1 ring-white" : ""}`}
                        >
                          <span className="text-white">{item.label[language]}</span>
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14" />
                            <path d="M13 5l7 7-7 7" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </aside>

                  <div className="lg:col-span-8 xl:col-span-9">
                    <header className="max-w-3xl">
                      <div className="mb-4">
                        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white">
                          {detail.pageTitle}
                        </h2>
                      </div>
                      <p className="mt-3 text-[17px] leading-7 text-white/80">
                        {detail.lead}
                      </p>
                    </header>

                    <div className="mt-8">
                      <h3 className="mt-8 text-2xl font-semibold text-white">
                        {language === "en" ? "What we deliver" : "हामीले के प्रदान गर्छौँ"}
                      </h3>
                    </div>

                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                      {[detail.bulletsCol1, detail.bulletsCol2].map((col, idx) => (
                        <ul key={idx} className="space-y-3">
                          {col.map((line) => (
                            <li key={line} className="group flex items-start gap-3">
                              <svg viewBox="0 0 24 24" className="mt-[3px] h-5 w-5 flex-none text-white/80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="M13 5l7 7-7 7" />
                              </svg>
                              <span className="text-[16px] leading-7 text-white/85">{line}</span>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-white/10 py-12 sm:py-16 bg-black">
              <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10">
                <header className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-semibold text-white">{t.galleryTitle}</h2>

                  <div className="relative flex items-center gap-2">
                    <button
                      onClick={() => {
                        setProjActive("All")
                        setFilterOpen(false)
                      }}
                      className={`px-4 py-2 text-sm font-medium border rounded-[4px] transition-colors ${
                        projActive === "All" ? "border-white text-white" : "border-white/30 text-white hover:border-white/60"
                      }`}
                    >
                      {language === "en" ? "All" : "सबै"}
                    </button>

                    <button
                      onClick={() => setFilterOpen((s) => !s)}
                      aria-expanded={filterOpen}
                      className="px-4 py-2 text-sm font-medium border border-white/30 text-white hover:border-white/60 inline-flex items-center gap-1"
                    >
                      Filter <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                    </button>

                    {filterOpen && (
                      <div role="menu" className="absolute right-0 top-12 w-56 border border-white/20 bg-black text-white shadow-xl ring-1 ring-white/10 p-2 z-20">
                        {(t.filters.filter((c) => c !== "All") as Cat[]).map((c) => (
                          <button
                            key={c}
                            onClick={() => {
                              setProjActive(c)
                              setFilterOpen(false)
                            }}
                            role="menuitem"
                            aria-selected={projActive === c}
                            className={`w-full cursor-pointer text-left px-3 py-2 rounded-[4px] text-sm transition-colors ${
                              projActive === c ? "bg-white text-black" : "hover:bg-white hover:text-black"
                            }`}
                          >
                            {translateCat(c)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </header>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((c) => {
                    const baseTitle = typeof c.title === 'string' ? c.title : c.title.en
                    const fileName = c.image ? c.image : baseTitle.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-_.-]/g, "")
                    const srcCandidates = c.image ? [`/${fileName}`, `/${fileName}.jpg`, `/${fileName}.png`, `/${fileName}.webp`] : [`/${fileName}.jpg`, `/${fileName}.png`, `/${fileName}.webp`, `/${fileName}.jpeg`]
                    const placeholder = "/placeholder.jpg"

                    return (
                      <div key={c.href} className="group relative block select-none overflow-hidden border border-white/15 bg-black p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-white">
                        <div className="relative aspect-[16/10] bg-black flex items-center justify-center text-white/60 overflow-hidden">
                          <img
                            src={srcCandidates[0]}
                            alt={c.title[language]}
                            className="object-cover w-full h-full grayscale"
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
                          <div className="text-xs font-semibold tracking-wide text-white/80">{translateCat(c.category)}</div>
                          <h3 className="mt-1 text-xl py-2 font-semibold text-white transition-colors">{c.title[language]}</h3>
                          <p className="mt-2 text-white/80">{c.blurb[language]}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        <GlobalCTA language={language} onOfficesOpen={() => setOfficesOpen(true)} />
      </main>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} language={language} />
      <OfficesModal isOpen={officesOpen} onClose={() => setOfficesOpen(false)} language={language} />
      <Footer language={language} />
    </>
  )
}
