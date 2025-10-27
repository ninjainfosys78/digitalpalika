"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import GlobalCTA from "@/components/global-cta"
import SearchOverlay from "@/components/search-overlay"
import OfficesModal from "@/components/offices-modal"
import Footer from "@/components/footer"

type Lang = "en" | "ne"
type Key = "gov" | "edu" | "health" | "fin" | "corp"

export default function SolutionsPage() {
  const [language, setLanguage] = useState<Lang>("en")
  const [searchOpen, setSearchOpen] = useState(false)
  const [officesOpen, setOfficesOpen] = useState(false)
  const [active, setActive] = useState<Key | null>(null)

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
    router.replace(`/solutions?cat=${key}`)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false)
        setOfficesOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const cards = [
    {
      key: "gov" as Key,
      title: "Government & Municipality",
      copy:
        "Citizen services, service workflows, billing, identity, and secure, traceable platforms.",
      img: "/goverment.jpg",
    },
    {
      key: "edu" as Key,
      title: "Education",
      copy:
        "Student information systems, learning platforms, assessments, and secure data pipelines.",
      img: "/education.jpg",
    },
    {
      key: "health" as Key,
      title: "Healthcare",
      copy:
        "Interoperable, patient-safe software—FHIR-first integrations, auditability, and uptime by design.",
      img: "/healthcare.jpg",
    },
    {
      key: "fin" as Key,
      title: "Fintech",
      copy:
        "KYC, risk, reconciliation and PCI-aware architectures for modern money movement.",
      img: "/fintech.jpg",
    },
    {
      key: "corp" as Key,
      title: "Corporate Solutions",
      copy:
        "Digital commerce, analytics and data platforms that scale reliably across the enterprise.",
      img: "/corporate.jpg",
    },
  ]

  const content: Record<
    Key,
    {
      pageTitle: string
      lead: string
      bulletsCol1: string[]
      bulletsCol2: string[]
      solutionsTitle: string
      solutionsLead: string
      solutionCards: { title: string; copy: string; href: string }[]
    }
  > = useMemo(
    () => ({
      gov: {
        pageTitle: "GOVERNMENT & MUNICIPALITY",
        lead:
          "Digital public services that are safe, simple, and accountable. We design citizen portals and back-office workflows that reduce queues, cut errors, and make services auditable by default.",
        bulletsCol1: [
          "Citizen self-service (applications, payments, certificates)",
          "Case management and approvals with roles & audit trails",
          "eKYC/ID, digital signatures, and document vaults",
        ],
        bulletsCol2: [
          "Revenue modules: billing, tax, fees, and reconciliation",
          "Grievance redressal & RTI tracking",
          "Dashboards for programs, budgets, and SLAs",
        ],
        solutionsTitle: "Featured solutions",
        solutionsLead:
          "From marketing sites to complex portals, we choose the stack that fits  then build for scale and change.",
        solutionCards: [
          {
            title: "Citizen Services Portal",
            copy:
              "One login for forms, payments, status, and notifications across departments.",
            href: "/services/web-development/cms",
          },
          {
            title: "e-Office & Workflow",
            copy:
              "File movement, approvals, and delegation with timers, escalations, and audit logs.",
            href: "/services/web-development/portals",
          },
          {
            title: "Urban Revenue Suite",
            copy:
              "Property tax, trade licence, water/sewerage billing; online & counter collections; MIS.",
            href: "/services/web-development/portals",
          },
        ],
      },
      edu: {
        pageTitle: "EDUCATION",
        lead:
          "Modern digital campus from admissions to alumni. We build student, faculty, and parent portals with secure payments, attendance, LMS, exams, and analytics that help institutions run smoothly.",
        bulletsCol1: [
          "Admissions & enrollment with merit lists and fee payments",
          "Student, faculty, and parent portals (SIS integration)",
          "Attendance, timetable, and course management",
        ],
        bulletsCol2: [
          "LMS & virtual classroom, assignments & grading",
          "Exam scheduling, evaluation, and results publishing",
          "Accreditation & NAAC reporting dashboards",
        ],
        solutionsTitle: "Featured solutions",
        solutionsLead:
          "Purpose-built modules that integrate into your SIS/LMS and finance systems.",
        solutionCards: [
          {
            title: "Admissions & Enrollment",
            copy:
              "Online forms, verification, merit lists, allotment, and secure fee collection with receipts.",
            href: "/solutions/education/admissions",
          },
          {
            title: "LMS & Virtual Classroom",
            copy:
              "Content delivery, quizzes, assignments, submissions, and video sessions with analytics.",
            href: "/solutions/education/lms",
          },
          {
            title: "Examination & Results",
            copy:
              "Scheduling, hall tickets, evaluator workflows, moderation, and result publishing.",
            href: "/solutions/education/exams",
          },
        ],
      },
      health: {
        pageTitle: "HEALTHCARE",
        lead:
          "Patient-centric systems for hospitals and public programs. We deliver EMR/EHR, OPD/IPD, pharmacy, lab integrations (HL7), claims, and telemedicine—privacy-first and reliable.",
        bulletsCol1: [
          "EMR/EHR with role-based access and audit logs",
          "OPD/IPD, appointments, queues, and bed management",
          "Pharmacy, inventory, and e-prescriptions",
        ],
        bulletsCol2: [
          "Lab integrations (HL7), radiology & reports",
          "Insurance/TPA claims and billing",
          "Telemedicine and remote care with consent",
        ],
        solutionsTitle: "Featured solutions",
        solutionsLead:
          "Interoperable components that fit your HIS and public health stack.",
        solutionCards: [
          {
            title: "Hospital Information System",
            copy:
              "OPD/IPD, pharmacy, lab, billing, inventory, and EMR in one interoperable platform.",
            href: "/solutions/healthcare/his",
          },
          {
            title: "Telemedicine & Remote Care",
            copy:
              "Video consults, e-prescriptions, follow-ups, patient education, and secure records.",
            href: "/solutions/healthcare/telemedicine",
          },
          {
            title: "Public Health Dashboards",
            copy:
              "Program indicators, geospatial views, alerts, and reporting for policy action.",
            href: "/solutions/healthcare/public-health",
          },
        ],
      },
      fin: {
        pageTitle: "FINTECH",
        lead:
          "Payments, lending, and compliance platforms engineered for reliability and scale. We ship secure APIs, dashboards, and data pipelines with audits and observability built in.",
        bulletsCol1: [
          "Payments: collections, payouts, reconciliation and settlement",
          "KYC/eKYC, AML checks and risk rules",
          "Ledgering, statements and dispute workflows",
        ],
        bulletsCol2: [
          "Lending: onboarding, scoring, LOS/LMS integrations",
          "Dashboards for operations and compliance reporting",
          "Data warehouse, observability and alerting",
        ],
        solutionsTitle: "Featured solutions",
        solutionsLead:
          "Secure by default: encryption, RBAC, audit trails and rate-limited APIs.",
        solutionCards: [
          {
            title: "Payments Platform",
            copy:
              "Unified collections and payouts with webhooks, reconciliation, settlement and reports.",
            href: "/solutions/fintech/payments",
          },
          {
            title: "Lending Suite",
            copy:
              "Onboarding, KYC, scoring, LOS/LMS integrations and borrower self-service portal.",
            href: "/solutions/fintech/lending",
          },
          {
            title: "Compliance & Risk",
            copy:
              "Rule engine, AML/KYC pipelines, audit logs and dashboards for regulators.",
            href: "/solutions/fintech/compliance",
          },
        ],
      },
      corp: {
        pageTitle: "CORPORATE SOLUTIONS",
        lead:
          "Internal platforms and customer portals that move the needle built with strong design systems, clean APIs, and a focus on security, cost, and reliability.",
        bulletsCol1: [
          "Customer portals and partner ecosystems",
          "Product websites, pricing, quotes and checkout",
          "APIs for CRM/ERP integrations and automation",
        ],
        bulletsCol2: [
          "Internal developer platforms (IDP) for faster delivery",
          "Analytics, experimentation and performance budgets",
          "SSO, RBAC, audit trails and compliance reporting",
        ],
        solutionsTitle: "Featured solutions",
        solutionsLead:
          "We design for longevity modular systems with clear ownership and observability.",
        solutionCards: [
          {
            title: "Customer/Partner Portal",
            copy:
              "Role-based access, orders, invoices, support and knowledge base web & mobile.",
            href: "/solutions/corporate/portal",
          },
          {
            title: "Web Experience & Commerce",
            copy:
              "Modern, fast sites with pricing, quotes, checkout and analytics SEO friendly.",
            href: "/solutions/corporate/web-experience",
          },
          {
            title: "Platform & Automation",
            copy:
              "APIs, integrations, workflows and internal developer platform accelerators.",
            href: "/solutions/corporate/platform",
          },
        ],
      },
    }),
    []
  )

  const leftNav = [
    { label: "Government & Municipality", key: "gov" as Key },
    { label: "Education", key: "edu" as Key },
    { label: "Healthcare", key: "health" as Key },
    { label: "FinTech", key: "fin" as Key },
    { label: "Corporate Solutions", key: "corp" as Key },
  ]

  const detail = active ? content[active] : null

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      <AnnouncementBar language={language} />

      <main className="relative bg-white text-[#0B0D12]">
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-28 lg:pt-32">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: "url('/industry.jpg')", backgroundAttachment: "fixed" }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_20%,rgba(15,98,254,0.25),transparent_60%),radial-gradient(600px_300px_at_85%_70%,rgba(122,90,248,0.2),transparent_60%)]" />

            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16">
              <div className="max-w-[1200px] text-left">
                <h1 className="mt-0 text-5xl font-heading font-semibold text-white sm:text-6xl text-left">
                  {active ? detail?.pageTitle : language === "en" ? "Industry we serve" : "हामीले सेवा दिने उद्योग"}
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
            </div>
          </div>
        </section>

        {!active && (
          <section className="py-14 relative overflow-hidden bg-ni-graphite text-ni-paper">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
              <div className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map(({ key, title, copy, img }) => (
                  <button
                    key={key}
                    onClick={() => activate(key)}
                    className="text-left group relative block select-none overflow-hidden w-full rounded-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] hover:ring-8 hover:ring-white"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-300" />
                    </div>

                    <div className="p-6 sm:p-7 bg-transparent transition-colors duration-300 group-hover:bg-white">
                      <div className="flex items-center">
                        <h3 className="text-xl sm:text-2xl pb-2 font-semibold transition-colors duration-300 group-hover:text-ni-ink">
                          {title}
                        </h3>
                      </div>

                      <p className="mt-3 text-base leading-relaxed text-white/85 transition-colors duration-300 group-hover:text-ni-ink/80">
                        {copy}
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
            <section className="py-12 sm:py-16 bg-white text-[#0B0D12]">
              <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10">
                <div className="grid gap-10 lg:grid-cols-12">
                  <aside className="lg:col-span-4 xl:col-span-3">
                    <div className="space-y-4">
                      {leftNav.map((item) => (
                        <button
                          key={item.key}
                          onClick={() => activate(item.key)}
                          className={`w-full text-left flex items-center justify-between border border-[#2C3242]/20 bg-white px-5 py-5 text-[18px] font-medium hover:border-[#0F62FE] transition-colors ${item.key === active ? "ring-1 ring-[#0F62FE]" : ""}`}
                        >
                          <span>{item.label}</span>
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-[#2C3242]/60 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
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
                        <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
                          {detail.pageTitle}
                        </h2>
                      </div>
                      <p className="mt-3 text-[17px] leading-7 text-[#1F2430]">
                        {detail.lead}
                      </p>
                    </header>

                    <div className="mt-8">
                      <h3 className="mt-8 text-2xl font-semibold">
                        {language === "en" ? "What we deliver" : "हामीले के प्रदान गर्छौँ"}
                      </h3>
                    </div>

                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                      {[detail.bulletsCol1, detail.bulletsCol2].map((col, idx) => (
                        <ul key={idx} className="space-y-3">
                          {col.map((line) => (
                            <li key={line} className="group flex items-start gap-3">
                              <svg
                                viewBox="0 0 24 24"
                                className="mt-[3px] h-5 w-5 flex-none text-[#2C3242] transition-colors group-hover:text-[#0F62FE]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14" />
                                <path d="M13 5l7 7-7 7" />
                              </svg>
                              <span className="text-[16px] leading-7 text-[#1F2430]">{line}</span>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="relative isolate border-t py-12 sm:py-16 bg-ni-graphite">
              <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10">
                <header className="max-w-4xl">
                  <div className="mb-4">
                    <h3 className="text-4xl font-semibold text-white">{detail.solutionsTitle}</h3>
                  </div>
                  <p className="mt-2 text-white/80">{detail.solutionsLead}</p>
                </header>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {detail.solutionCards.map((c) => (
                    <div
                      key={c.title}
                      className="group relative block overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] hover:ring-8 hover:ring-white bg-transparent hover:bg-white cursor-default"
                      role="article"
                      aria-label={c.title}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center bg-[#F3F4F6] text-[#2C3242]/70">
                          IMG
                        </div>
                      </div>

                      <div className="p-6 sm:p-7 bg-transparent transition-colors duration-300 group-hover:bg-white">
                        <div className="flex items-center">
                          <h4 className="text-xl sm:text-2xl pb-2 align-center font-semibold text-white transition-colors duration-300 group-hover:text-ni-ink">
                            {c.title}
                          </h4>
                        </div>

                        <p className="mt-3 text-base leading-relaxed text-white/85 transition-colors duration-300 group-hover:text-ni-ink/80">
                          {c.copy}
                        </p>
                      </div>

                      <span className="pointer-events-none absolute inset-0" />
                    </div>
                  ))}
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
