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
type Key =
  | "web"
  | "mobile"
  | "uiux"
  | "cloud"
  | "maintenance"
  | "consulting"
  | "egov"

export default function ServicesPage() {
  const [language, setLanguage] = useState<Lang>("en")
  const [searchOpen, setSearchOpen] = useState(false)
  const [officesOpen, setOfficesOpen] = useState(false)
  const [active, setActive] = useState<Key | null>(null)

  const router = useRouter()
  const params = useSearchParams()

  useEffect(() => {
    const svc = (params.get("svc") || "").toLowerCase() as Key
    const allowed: Key[] = [
      "web",
      "mobile",
      "uiux",
      "cloud",
      "maintenance",
      "consulting",
      "egov",
    ]
    if (allowed.includes(svc)) setActive(svc)
    else setActive(null)
  }, [params])

  const activate = (key: Key) => {
    setActive(key)
    router.replace(`/services?svc=${key}`)
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

  const t = {
    heading: language === "en" ? "Services" : "सेवाहरू",
    sub:
      language === "en"
        ? "We deal with the aspects of professional IT Services"
        : "हामी व्यावसायिक IT सेवाहरूका पक्षहरूमा काम गर्छौं",
    kicker: language === "en" ? "What we do" : "हामी के गर्छौं",
    learn: language === "en" ? "Learn more" : "थप पढ्नुहोस्",
  }

  const cards = [
    {
      key: "web" as Key,
      title: language === "en" ? "Web Development" : "वेब विकास",
      blurb:
        language === "en"
          ? "High-performance websites and portals (Next.js, SSR/SSG), CMS integrations, accessibility and SEO."
          : "उच्च-प्रदर्शन वेबसाइट/पोर्टल (Next.js, SSR/SSG), CMS, पहुँचयोग्यता र SEO।",
      img: "/webdevelopment.jpg",
    },
    {
      key: "mobile" as Key,
      title: language === "en" ? "Mobile App Development" : "मोबाइल एप विकास",
      blurb:
        language === "en"
          ? "iOS/Android & cross-platform apps with secure APIs, offline support, analytics and CI/CD."
          : "iOS/Android र क्रस-प्लाटफर्म एप—सुरक्षित API, अफलाइन सपोर्ट, एनालिटिक्स र CI/CD सहित।",
      img: "/mobileapp.jpg",
    },
    {
      key: "uiux" as Key,
      title: language === "en" ? "UI/UX Design" : "UI/UX डिजाइन",
      blurb:
        language === "en"
          ? "Research, wireframes, interaction design and design systems with rapid prototyping."
          : "रिसर्च, वायरफ्रेम, इंटरेक्शन डिजाइन र डिजाइन सिस्टम—द्रुत प्रोटोटाइपिङ सहित।",
      img: "/marketing.jpg",
    },
    {
      key: "cloud" as Key,
      title: language === "en" ? "Cloud & DevOps" : "क्लाउड & DevOps",
      blurb:
        language === "en"
          ? "CI/CD, containers, IaC and observability on AWS/Azure/GCP with cost and reliability guardrails."
          : "CI/CD, कन्टेनर, IaC, अव्जर्भेबिलिटी (AWS/Azure/GCP)—लागत र विश्वसनीयता सुरक्षासहित।",
      img: "/services.jpg",
    },
    {
      key: "maintenance" as Key,
      title: language === "en" ? "Software Maintenance" : "सफ्टवेयर मर्मत",
      blurb:
        language === "en"
          ? "Enhancements, bug-fixes, refactors and performance work with SLAs, monitoring and support."
          : "एनह्यान्समेन्ट, बग-फिक्स, रिफ्याक्टर र प्रदर्शन सुधार—SLA, मोनिटरिङ र सपोर्टसहित।",
      img: "/services.jpg",
    },
    {
      key: "consulting" as Key,
      title: language === "en" ? "IT Consulting" : "आईटी परामर्श",
      blurb:
        language === "en"
          ? "Architecture reviews, roadmap planning, security hardening and delivery coaching."
          : "आर्किटेक्चर समीक्षा, रोडम्याप योजना, सुरक्षा मजबुती र डेलिभरी कोचिङ।",
      img: "/services.jpg",
    },
    {
      key: "egov" as Key,
      title: language === "en" ? "E-Governance Solutions" : "ई-गभर्नन्स समाधान",
      blurb:
        language === "en"
          ? "Citizen services, billing and workflow platforms for municipalities with auditability."
          : "नागरिक सेवा, बिलिङ र कार्यप्रवाह प्लेटफर्म—अडिटयोग्य र सुरक्षित।",
      img: "/services.jpg",
    },
  ]

  const content: Record<
    Key,
    {
      pageTitle: string
      lead: string
      why: string
      bulletsCol1: string[]
      bulletsCol2: string[]
      solutionsTitle: string
      solutionsLead: string
      solutionCards: { title: string; copy: string; href: string; img?: string }[]
    }
  > = useMemo(
    () => ({
      web: {
        pageTitle: language === "en" ? "WEB DEVELOPMENT" : "वेब विकास",
        lead:
          language === "en"
            ? "Ninja Infosys builds fast, accessible, and secure web products everything from marketing sites to complex portals using a pragmatic stack centered on Next.js with the Carbon Design System for elegant, consistent UI. We pair modern front-end frameworks (React, Vue) with proven back-end options (Laravel, Nest.js, Go, Rust, PHP) and reliable databases (PostgreSQL, MySQL) to deliver SSR/SSG performance, clean APIs, strong SEO, and WCAG-compliant accessibility. Every build includes CI/CD, testing, and observability from day one."
            : "Ninja Infosys ले Next.js केन्द्रित व्यवहारिक स्ट्याक र Carbon Design System प्रयोग गरेर छिटो, पहुँचयोग्य र सुरक्षित वेब प्रोडक्टहरू बनाउँछ—मार्केटिङ साइटदेखि जटिल पोर्टलसम्म। आधुनिक फ्रन्टएन्ड (React, Vue) लाई परीक्षित ब्याकएन्ड (Laravel, Nest.js, Go, Rust, PHP) र भरपर्दा डाटाबेस (PostgreSQL, MySQL) सँग मिलाएर SSR/SSG प्रदर्शन, सफा API, बलियो SEO र WCAG पहुँचयोग्यता दिन्छौँ। प्रत्येक प्रोजेक्टमा सुरुदेखि CI/CD, परीक्षण र observability हुन्छ।",
        why: language === "en" ? "Why choose us" : "किन हामी?",
        bulletsCol1: [
          "Accessible, SEO-ready and Core Web Vitals focused.",
          "SSR/SSG with caching, CDN and image optimization.",
          "Analytics, A/B tests and performance budgets.",
        ],
        bulletsCol2: [
          "Design systems and component libraries for speed.",
          "Secure forms, auth, role-based access and audits.",
          "CI/CD with previews, reviews and rollbacks.",
        ],
        solutionsTitle:
          language === "en"
            ? "Web solutions for all your need"
            : "तपाईंका आवश्यकताका समाधानहरू",
        solutionsLead:
          language === "en"
            ? "From marketing sites to complex portals, we choose the stack that fits then build for scale and change."
            : "मार्केटिङ साइटदेखि जटिल पोर्टलसम्म, उपयुक्त स्ट्याक छान्छौं र विस्तारयोग्य रूपमा निर्माण गर्छौं।",
        solutionCards: [
          {
            title: "CMS Development",
            copy:
              "Headless CMS (Sanity/Strapi/Contentful) or WordPress typed models, clean authoring.",
            href: "/services/web-development/cms",
            img: "/cms.jpg",
          },
          {
            title: "eCommerce Development",
            copy:
              "Search, carts, checkout, payments and OMS optimized for speed and conversion.",
            href: "/services/web-development/ecommerce",
            img: "/ecommerce.jpg",
          },
          {
            title: "ERP/Portal Development",
            copy:
              "Role-based portals, workflows and reporting with SSO and audit trails.",
            href: "/services/web-development/portals",
            img: "/erp.jpeg",
          },
        ],
      },
      mobile: {
        pageTitle: language === "en" ? "MOBILE APP DEVELOPMENT" : "मोबाइल एप विकास",
        lead:
          language === "en"
            ? "We design and build fast, reliable mobile apps for iOS and Android—native or cross-platform with smooth UX, secure APIs, offline support and analytics."
            : "हामी iOS र Android का लागि छरितो, भरपर्दा मोबाइल एप बनाउँछौँ—नेटिभ वा क्रस-प्लाटफर्म—सुगम UX, सुरक्षित API, अफलाइन सपोर्ट र एनालिटिक्ससहित।",
        why: language === "en" ? "Why choose us" : "किन हामी?",
        bulletsCol1: [
          "iOS/Android with clean, responsive UI.",
          "Secure API integration and auth.",
          "Offline-first data sync and caching.",
        ],
        bulletsCol2: [
          "Performance profiling and crash analytics.",
          "App Store/Play Store readiness and CI/CD.",
          "Accessibility and localization built-in.",
        ],
        solutionsTitle:
          language === "en" ? "App solutions we deliver" : "हामी बनाउने एप समाधान",
        solutionsLead:
          language === "en"
            ? "From MVP to enterprise scale, we ship what fits and keep it easy to evolve."
            : "MVP देखि इन्टरप्राइज—उपयुक्त उपाय छान्छौँ र विस्तार गर्न सजिलो बनाउँछौँ।",
        solutionCards: [
          {
            title: "Cross-platform Apps",
            copy:
              "One codebase for iOS and Android with consistent UX and analytics.",
            href: "/services/mobile-apps/cross-platform",
            img: "/crossplatform.jpg",
          },
          {
            title: "Native Experiences",
            copy:
              "Deep platform features, push notifications, background tasks, secure storage.",
            href: "/services/mobile-apps/native",
            img: "/native.jpeg",
          },
          {
            title: "Mobile Backends",
            copy:
              "Scalable APIs, auth, file delivery instrumented for reliability and cost.",
            href: "/services/mobile-apps/backends",
            img: "/mobilebackends.jpg",
          },
        ],
      },
      uiux: {
        pageTitle: language === "en" ? "UI/UX DESIGN" : "UI/UX डिजाइन",
        lead:
          language === "en"
            ? "We turn ideas into clear, friendly interfaces from research and wireframes to design systems and prototypes that teams can ship with confidence."
            : "हामी रिसर्चदेखि डिजाइन सिस्टमसम्म सहज, छरितो र प्रयोगकर्ता-मैत्री इन्टरफेस बनाउँछौँ।",
        why: language === "en" ? "Why choose us" : "किन हामी?",
        bulletsCol1: [
          "Research-led decisions, not guesswork.",
          "Accessible patterns and clear content.",
          "Responsive layouts for every screen.",
        ],
        bulletsCol2: [
          "Design systems for speed and consistency.",
          "Prototypes for fast feedback and testing.",
          "Handoff with tokens and components.",
        ],
        solutionsTitle:
          language === "en" ? "Design solutions we deliver" : "हामी बनाउने डिजाइन समाधान",
        solutionsLead:
          language === "en"
            ? "Reusable systems and prototypes so teams can build faster."
            : "रियुजेबल सिस्टम र प्रोटोटाइप छिटो निर्माणका लागि।",
        solutionCards: [
          {
            title: "Design Systems",
            copy:
              "Tokens, components and guidelines for consistency across teams.",
            href: "/services/ui-ux/design-systems",
            img: "/designsystems.jpg",
          },
          {
            title: "Product Discovery",
            copy: "User interviews, journeys and flows to clarify scope.",
            href: "/services/ui-ux/discovery",
            img: "/productdiscovery.jpg",
          },
          {
            title: "Prototyping & Testing",
            copy:
              "Clickable prototypes and usability tests that validate early.",
            href: "/services/ui-ux/prototyping",
            img: "/prototyping.jpg",
          },
        ],
      },
      cloud: {
        pageTitle: language === "en" ? "CLOUD & DEVOPS" : "क्लाउड र देवओप्स",
        lead:
          language === "en"
            ? "We set up CI/CD, infrastructure as code and observability on AWS/Azure/GCP so teams ship faster with fewer incidents and clear costs."
            : "हामी AWS/Azure/GCP मा CI/CD, IaC र observability सेटअप गर्छौं ताकि छिटो र सुरक्षित डेलिभरी होस्।",
        why: language === "en" ? "Why choose us" : "हामीलाई किन रोज्ने",
        bulletsCol1: [
          "CI/CD pipelines with previews and rollbacks.",
          "IaC with versioned environments.",
          "Logging, metrics and tracing by default.",
        ],
        bulletsCol2: [
          "SLOs and incident workflows.",
          "Cost visibility and right-sizing.",
          "Security baselines and secrets hygiene.",
        ],
        solutionsTitle:
          language === "en" ? "Platforms we set up" : "हामीले सेटअप गरेका प्लेटफर्महरू",
        solutionsLead:
          language === "en"
            ? "Guardrails and automation that keep delivery safe, fast and repeatable."
            : "गार्डरेल र स्वचालन—सुरक्षित, छिटो र दोहोर्याउन योग्य डेलिभरीका लागि।",
        solutionCards: [
          {
            title: "CI/CD Accelerators",
            copy:
              "Pipelines for web, mobile and services with approvals and rollout strategies.",
            href: "/services/cloud-devops/cicd",
            img: "/CICD.png",
          },
          {
            title: "Observability Stack",
            copy:
              "Dashboards, alerts and runbooks so issues are found and fixed quickly.",
            href: "/services/cloud-devops/observability",
            img: "/observability.jpg",
          },
          {
            title: "Cloud Foundations",
            copy:
              "Accounts, networking, identity and policies that scale safely.",
            href: "/services/cloud-devops/foundations",
            img: "/cloud.jpg",
          },
        ],
      },
      maintenance: {
        pageTitle: "SOFTWARE MAINTENANCE",
        lead:
          "We keep your software healthy fixes, upgrades and performance tuning with SLAs, monitoring and clear release cycles.",
        why: "Why choose us",
        bulletsCol1: [
          "Bug fixes with root-cause analysis.",
          "Library and security updates on schedule.",
          "Performance audits and tuning.",
        ],
        bulletsCol2: [
          "SLA-backed response times.",
          "Release notes and change logs.",
          "Monitoring and alerting in place.",
        ],
        solutionsTitle: "Maintenance programs",
        solutionsLead: "Plans that match your pace and risk profile.",
        solutionCards: [
          {
            title: "Stability Care",
            copy: "Monthly health checks, updates and fixes.",
            href: "/services/maintenance/stability",
            img: "/stability.jpg",
          },
          {
            title: "Performance Care",
            copy: "Profiling, load testing and optimization.",
            href: "/services/maintenance/performance",
            img: "/performance.jpg",
          },
          {
            title: "Security Care",
            copy: "Patch cadence, dependency scanning, hardening.",
            href: "/services/maintenance/security",
            img: "/security.jpg",
          },
        ],
      },
      consulting: {
        pageTitle: language === "en" ? "IT CONSULTING" : "आईटी परामर्श",
        lead:
          "We help you choose the right architecture, roadmap and security posture so you can deliver confidently and avoid costly rework.",
        why: language === "en" ? "Why choose us" : "हामीलाई किन रोज्ने",
        bulletsCol1: [
          "Architecture reviews and modernization paths.",
          "Build vs. buy analysis with TCO.",
          "Security and compliance guidance.",
        ],
        bulletsCol2: [
          "Delivery playbooks and team coaching.",
          "Vendor and tool selection support.",
          "Clear roadmaps and milestones.",
        ],
        solutionsTitle:
          language === "en" ? "Consulting offerings" : "परामर्श प्रस्ताव",
        solutionsLead:
          language === "en"
            ? "Short, focused engagements that unlock clarity and momentum."
            : "छोटो, केन्द्रित संलग्नताहरू जसले स्पष्टता र गति दिन्छ।",
        solutionCards: [
          {
            title: "Architecture Review",
            copy: "Independent assessment and next steps.",
            href: "/services/consulting/architecture",
            img: "/architecture.jpg",
          },
          {
            title: "Security & Risk",
            copy: "Threat modeling, controls and hardening.",
            href: "/services/consulting/security",
            img: "/risk.jpg",
          },
          {
            title: "Delivery Acceleration",
            copy: "Process, tooling and roles to ship faster.",
            href: "/services/consulting/delivery",
            img: "/delivery.jpg",
          },
        ],
      },
      egov: {
        pageTitle:
          language === "en" ? "E-GOVERNANCE SOLUTIONS" : "ई-गभर्नन्स समाधान",
        lead:
          language === "en"
            ? "We build citizen-facing portals and back-office workflows for municipalities—secure by default, easy to use and ready for audit."
            : "हामी नागरिक-सम्पर्क पोर्टल र नगरपालिका ब्याक-अफिस कार्यप्रवाहहरू बनाउँछौँ—डिफल्टमै सुरक्षित, सजिलो र अडिट-रेडी।",
        why: language === "en" ? "Why choose us" : "हामीलाई किन रोज्ने",
        bulletsCol1: [
          "Citizen portals with clear forms and guidance.",
          "Role-based access and approvals.",
          "Reliable records and reporting.",
        ],
        bulletsCol2: [
          "Audit trails and secure data handling.",
          "Integrations with payments and identity.",
          "Uptime and support SLAs.",
        ],
        solutionsTitle:
          language === "en" ? "Government platforms" : "सरकारी प्लेटफर्महरू",
        solutionsLead:
          language === "en"
            ? "Trustworthy services for residents and staff, designed together."
            : "नागरिक र कर्मचारीका लागि विश्वसनीय सेवाहरू—सहकार्यमा डिजाइन।",
        solutionCards: [
          {
            title: "Citizen Services",
            copy:
              "Applications, payments, receipts, status tracking.",
            href: "/services/e-governance/citizen-services",
            img: "/citizen.jpg",
          },
          {
            title: "Back-Office Workflows",
            copy:
              "Queueing, assignments, approvals and visibility.",
            href: "/services/e-governance/workflows",
            img: "/backoffice.jpg",
          },
          {
            title: "Open Data & Reporting",
            copy: "Dashboards and datasets for transparency.",
            href: "/services/e-governance/open-data",
            img: "/opendata.jpg",
          },
        ],
      },
    }),
    [language]
  )

  const leftNav = [
    { label: "Web Development", key: "web" as Key },
    { label: "Mobile App Development", key: "mobile" as Key },
    { label: "UI/UX Design", key: "uiux" as Key },
    { label: "Cloud & DevOps", key: "cloud" as Key },
    { label: "Software Maintenance", key: "maintenance" as Key },
    { label: "IT Consulting", key: "consulting" as Key },
    { label: "E-Governance Solutions", key: "egov" as Key },
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
              style={{ backgroundImage: "url('/services.jpg')", backgroundAttachment: "fixed" }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_20%,rgba(15,98,254,0.25),transparent_60%),radial-gradient(600px_300px_at_85%_70%,rgba(122,90,248,0.2),transparent_60%)]" />

            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16">
              <div className="max-w-[1200px] text-left">
                <h1 className="mt-0 text-5xl font-heading font-semibold text-white sm:text-6xl text-left">
                  {active ? detail?.pageTitle : t.heading}
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
                    <Link href="/services" onClick={() => setActive(null)} className="font-medium tracking-wide hover:text-white">
                      {language === "en" ? "SERVICES" : "सेवाहरू"}
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
          <>
            <section className="bg-white text-ni-ink">
              <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-16">
                <header className="max-w-4xl mx-auto text-center">
                  <p className="mb-[8px] text-base sm:text-md font-semibold tracking-[0.18em] text-slate-600">
                    {t.kicker}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-ni-ink">
                    {t.sub}
                  </h2>
                </header>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cards.map((s) => (
                    <button
                      key={s.key}
                      onClick={() => activate(s.key)}
                      className="group block border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-ni-accent text-left"
                    >
                      <h3 className="text-xl font-semibold text-ni-ink transition-colors group-hover:text-ni-accent">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-slate-700">{s.blurb}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-ni-accent font-medium">
                        {t.learn}
                        <span
                          aria-hidden
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-10 relative overflow-hidden bg-ni-graphite text-ni-paper">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-float"
                  style={{ animationDuration: "8s" }}
                />
                <div
                  className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-float"
                  style={{ animationDuration: "10s", animationDelay: "2s" }}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] animate-float"
                  style={{ animationDuration: "12s", animationDelay: "4s" }}
                />
              </div>

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

              <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-16">
                <header className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {language === "en" ? "Custom IT Solutions" : "कस्टम IT समाधान"}
                  </h3>
                </header>

                <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: language === "en" ? "IT Consulting" : "आईटी परामर्श",
                      copy:
                        language === "en"
                          ? "Architecture reviews, roadmap planning, security hardening and delivery coaching."
                          : "आर्किटेक्चर समीक्षा, रोडम्याप योजना, सुरक्षा मजबुती र डेलिभरी कोचिङ।",
                      href: "/services/itconsulting",
                      img: "/marketing.jpg",
                    },
                    {
                      title:
                        language === "en" ? "Website Development" : "वेबसाइट विकास",
                      copy:
                        language === "en"
                          ? "15+ years of pragmatic web delivery across industries and platforms."
                          : "उद्योग र प्लेटफर्महरूमा १५+ वर्षको व्यावहारिक वेब डेलिभरी।",
                      href: "/services/webdevelopment",
                      img: "/webdevelopment.jpg",
                    },
                    {
                      title:
                        language === "en"
                          ? "Mobile App Development"
                          : "मोबाइल एप विकास",
                      copy:
                        language === "en"
                          ? "Beautiful, reliable mobile apps with modern DevEx and analytics."
                          : "आधुनिक DevEx र एनालिटिक्ससहित सुन्दर, भरपर्दो मोबाइल एप।",
                      href: "/services/mobileappdevelopment",
                      img: "/mobileapp.jpg",
                    },
                  ].map((itm) => (
                    <button
                      key={itm.title}
                      onClick={() =>
                        activate(
                          itm.href.includes("web")
                            ? "web"
                            : itm.href.includes("mobile")
                            ? "mobile"
                            : "consulting"
                        )
                      }
                      className="group relative block overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] hover:ring-8 hover:ring-white bg-transparent hover:bg-white text-left"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={itm.img}
                          alt={itm.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6 sm:p-7 bg-transparent transition-colors duration-300 group-hover:bg-white relative">
                        <h4 className="text-xl sm:text-2xl pb-2 font-semibold transition-colors duration-300 group-hover:text-ni-ink text-white">
                          {itm.title}
                        </h4>
                        <p className="mt-3 text-base leading-relaxed text-white/85 transition-colors duration-300 group-hover:text-ni-ink/80">
                          {itm.copy}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </>
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
                          className={`w-full text-left flex items-center justify-between border border-[#2C3242]/20 bg-white px-5 py-5 text-[18px] font-medium hover:border-[#0F62FE] transition-colors ${
                            item.key === active ? "ring-1 ring-[#0F62FE]" : ""
                          }`}
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
                        {detail.why}
                      </h3>
                    </div>

                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                      {[detail.bulletsCol1, detail.bulletsCol2].map(
                        (col, idx) => (
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
                                <span className="text-[16px] leading-7 text-[#1F2430]">
                                  {line}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative isolate border-t py-12 sm:py-16 bg-ni-graphite">
              <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10">
                <header className="max-w-4xl">
                  <div className="mb-4">
                    <h3 className="text-4xl font-semibold text-white">
                      {detail.solutionsTitle}
                    </h3>
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
                        <img
                          src={c.img ?? "/_.jpg"}
                          alt={c.title}
                          className="h-full w-full object-cover"
                        />
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

        <GlobalCTA
          language={language}
          onOfficesOpen={() => setOfficesOpen(true)}
        />
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
