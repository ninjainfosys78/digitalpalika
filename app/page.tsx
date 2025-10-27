"use client"

import { useState, useEffect } from "react"
import Head from "next/head"

import Header from "@/components/header"
import Hero from "@/components/hero"
import AnnouncementBar from "@/components/announcement-bar"
import InsightsRail from "@/components/insights-rail"
import Testimonials from "@/components/testimonials"
import TrustedBy from "@/components/trusted-by"
import GlobalCTA from "@/components/global-cta"
import Footer from "@/components/footer"
import SearchOverlay from "@/components/search-overlay"
import CookieBanner from "@/components/cookie-banner"
import OfficesModal from "@/components/offices-modal"

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "ne">("en")
  const [searchOpen, setSearchOpen] = useState(false)
  const [officesOpen, setOfficesOpen] = useState(false)

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !searchOpen) {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === "Escape") {
        setSearchOpen(false)
        setOfficesOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [searchOpen])

  // Metadata per language
  const meta = {
    en: {
      title: "Ninja Infosys — Global Consulting",
      description:
        "A global consulting company shaping decisive outcomes in complex environments.",
      ogImage: "/assets/og/og-default.jpg",
      siteName: "Ninja Infosys",
    },
    ne: {
      title: "निन्जा इन्फोसिस — ग्लोबल कन्सल्टिङ",
      description:
        "एक विश्वव्यापी कन्सल्टिङ कम्पनी जसले जटिल वातावरणमा निर्णायक परिणामहरू बनाउँछ।",
      ogImage: "/assets/og/og-default.jpg",
      siteName: "निन्जा इन्फोसिस",
    },
  }

  const currentMeta = meta[language]

  return (
    <>
      {/* Dynamic Head tags */}
      <Head>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content={currentMeta.ogImage} />
        <meta property="og:site_name" content={currentMeta.siteName} />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta name="twitter:image" content={currentMeta.ogImage} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Accessibility
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a> */}

      {/* Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
      />

      <AnnouncementBar language={language} />

      {/* Main content */}
  <main id="main-content" className="sharp-edges">
        <Hero language={language} />
        <InsightsRail language={language} />
        <Testimonials language={language} />
        <TrustedBy language={language} />
        <GlobalCTA
          language={language}
          onOfficesOpen={() => setOfficesOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Overlays */}
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

      <CookieBanner language={language} />

      {/* Embedded JSON Content */}
      <script
        type="application/json"
        id="ni-content"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            meta: {
              siteName: "Ninja Infosys — Global Consulting",
              title: "Ninja Infosys — Global Consulting",
              description:
                "A global consulting company shaping decisive outcomes in complex environments.",
              ogImage: "/assets/og/og-default.jpg",
              languageDefault: "en",
              languages: ["en", "ne"],
            },
            strings: {
              en: {
                nav: [
                  "Insights",
                  "Practices",
                  "Solutions",
                  "Perspectives",
                  "Careers",
                  "About",
                ],
                cta_primary: "Start a conversation",
                cta_secondary: "Explore insights",
                cta_email: "Email us",
                cta_office: "Find an office",
                search_placeholder:
                  "Search perspectives, ideas, and cases…",
                hero: {
                  title: "Clarity at decisive moments.",
                  deck: "Ninja Infosys is a global consulting company helping leaders turn inflection points into advantage—quietly, and at scale.",
                  trust:
                    "Working alongside boards, ministries, and market leaders across Asia and beyond.",
                },
                announcement:
                  "Ninja Insights 2025: A quiet guide to decisive leadership.",
                insights_title: "Insights",
                insights_view_all: "View all insights",
                insights: [
                  {
                    kicker: "Perspective",
                    title:
                      "Operating through uncertainty: the discipline of ambition",
                    deck: "Why the best operators raise their sights precisely when signals feel noisy.",
                    readTime: "6 min",
                    url: "#",
                  },
                  {
                    kicker: "Public Sector",
                    title:
                      "Systems at national scale: lessons from digital public infrastructure",
                    deck: "Trust, uptime, and the human experience of services—designed together.",
                    readTime: "7 min",
                    url: "#",
                  },
                  {
                    kicker: "Board Brief",
                    title:
                      "AI confidence: where to lean in—and where to wait",
                    deck: "Practical thresholds for value, risk, and organizational readiness.",
                    readTime: "5 min",
                    url: "#",
                  },
                  {
                    kicker: "Operating Model",
                    title: "The choreography of change",
                    deck: "How to move complex organizations without breaking the rhythm of delivery.",
                    readTime: "8 min",
                    url: "#",
                  },
                ],
                taxonomy: {
                  tabs: ["Practices", "Solutions"],
                  practices: [
                    {
                      name: "Strategy",
                      blurb:
                        "Choices under real constraints—made legible and durable.",
                    },
                    {
                      name: "Transformation",
                      blurb:
                        "From initiatives to trajectory: shift the slope, not just the intercept.",
                    },
                    {
                      name: "Technology",
                      blurb:
                        "Architecture, platforms, and ways of working that compound.",
                    },
                    {
                      name: "Operating Model",
                      blurb:
                        "The org behind the outcomes: accountability, cadence, clarity.",
                    },
                    { name: "Risk", blurb: "Resilience designed in, not patched on." },
                    {
                      name: "People & Change",
                      blurb: "Adoption at scale—where tools meet behavior.",
                    },
                  ],
                  solutions: [
                    {
                      name: "Financial Services",
                      blurb: "Scale and trust in the same sentence.",
                    },
                    {
                      name: "Public Sector (e-Gov)",
                      blurb:
                        "Beyond portals: citizen-scale systems that feel human.",
                    },
                    {
                      name: "Energy",
                      blurb: "Long-cycle bets, short-cycle delivery.",
                    },
                    {
                      name: "Health",
                      blurb: "Care journeys designed as systems, not silos.",
                    },
                    {
                      name: "Consumer",
                      blurb:
                        "Attention is scarce; loyalty is earned in moments.",
                    },
                    {
                      name: "Telecom",
                      blurb: "Networks as strategic assets, not just utilities.",
                    },
                  ],
                },
                perspective: {
                  title: "A note from leadership",
                  body: "Our work is quiet on purpose. We build confidence where it matters—governance, scale, and the human experience of using systems.",
                },
                careers: {
                  title: "Build what matters, then make it last.",
                  body: "Analytical, design, and engineering minds—write the next chapter with us.",
                  cta: "See roles",
                },
                globalCta: {
                  title:
                    "Let’s Build What’s Next. Together.",
                },
                offices: [
                  {
                    city: "Kathmandu",
                    label: "Primary hub (Asia)",
                    email: "hello@ninjainfosys.com",
                  },
                  {
                    city: "Remote",
                    label: "Global network",
                    email: "hello@ninjainfosys.com",
                  },
                ],
                footer: {
                  cols: [
                    { title: "Insights", links: ["Latest", "Collections", "Newsletter"] },
                    {
                      title: "Practices",
                      links: [
                        "Strategy",
                        "Transformation",
                        "Technology",
                        "Operating Model",
                        "Risk",
                        "People & Change",
                      ],
                    },
                    {
                      title: "Solutions",
                      links: [
                        "Financial Services",
                        "Public Sector",
                        "Energy",
                        "Health",
                        "Consumer",
                        "Telecom",
                      ],
                    },
                    { title: "About", links: ["Company", "Leadership", "Careers", "Contact"] },
                  ],
                  legal:
                    "© Ninja Infosys. Privacy · Terms · Cookie preferences",
                  },
                },

              ne: {
                nav: [
                  "इनसाइट्स",
                  "प्रयासहरू",
                  "उद्योगहरू",
                  "दृष्टिकोण",
                  "क्यारियर",
                  "विषयमा",
                ],
                cta_primary: "वार्ता शुरू गर्नुहोस्",
                cta_secondary: "इनसाइट्स हेर्नुहोस्",
                cta_email: "हामीलाई इमेल गर्नुहोस्",
                cta_office: "कार्यालय खोज्नुहोस्",
                search_placeholder: "दृष्टिकोण, विचार, केसहरू खोज्नुहोस्…",
                hero: {
                  title: "महत्वपूर्ण क्षणमा स्पष्टता।",
                  deck: "Ninja Infosys एक विश्वव्यापी कन्सल्टिङ कम्पनी हो—जसले नेतृत्वकर्ताहरूलाई निर्णायक मोडहरूलाई फाइदामा बदल्न सघाउँछ, शान्त ढंगले र ठूला परिमाणमा।",
                  trust: "एशिया र त्यसपार बोर्ड, मन्त्रालय र बजार नेतृत्वसँग सहकार्य।",
                },
                announcement: "Ninja Insights 2025: निर्णायक नेतृत्वका लागि शान्त मार्गदर्शक।",
                insights_title: "इनसाइट्स",
                insights_view_all: "सबै इनसाइट्स हेर्नुहोस्",
                insights: [
                  {
                    kicker: "दृष्टिकोण",
                    title: "अनिश्चिततामा सञ्चालन: महत्वाकांक्षाको अनुशासन",
                    deck: "सिग्नल अस्पष्ट हुँदा उत्कृष्ट अपरेटर किन अझ उचाइमा लक्ष्य राख्छन्।",
                    readTime: "६ मिनेट",
                    url: "#",
                  },
                  {
                    kicker: "सार्वजनिक क्षेत्र",
                    title: "राष्ट्रिय स्तरका प्रणाली: डिजिटल सार्वजनिक पूर्वाधारबाट सिकाइ",
                    deck: "विश्वास, अपटाइम, र सेवाको मानवीय अनुभव—साँथै डिजाइन।",
                    readTime: "७ मिनेट",
                    url: "#",
                  },
                  {
                    kicker: "बोर्ड संक्षेप",
                    title: "एआई आत्मविश्वास: कहाँ अघि बढ्ने—र कहाँ पर्खने",
                    deck: "मूल्य, जोखिम, र संस्थागत तयारीका व्यावहारिक सीमा।",
                    readTime: "५ मिनेट",
                    url: "#",
                  },
                  {
                    kicker: "अपरेटिङ मोडल",
                    title: "परिवर्तनको कोरियोग्राफी",
                    deck: "डेलिभरीको लय नटुटाई जटिल संस्थाहरू कसरी सार्ने।",
                    readTime: "८ मिनेट",
                    url: "#",
                  },
                ],
                taxonomy: {
                  tabs: ["प्रयासहरू", "समाधान"],
                  practices: [
                    { name: "रणनीति", blurb: "वास्तविक सीमाभित्रका विकल्प—स्पष्ट र टिकाउ।" },
                    { name: "रूपान्तरण", blurb: "सिर्फ बिन्दु होइन ढलान परिवर्तन गर्नुहोस्।" },
                    { name: "प्रविधि", blurb: "अर्किटेक्चर र प्लेटफर्महरू जो समयसँगै जोडिन्छन्।" },
                    { name: "अपरेटिङ मोडल", blurb: "परिणाम पछाडिको संगठन: जवाफदेहिता, ताल, स्पष्टता।" },
                    { name: "जोखिम", blurb: "टालटुल होइन, डिजाइनमै लचिलोपन।" },
                    { name: "मानिस र परिवर्तन", blurb: "व्यवहारमा टेकेको व्यापक अपनत्व।" },
                  ],
                  solutions: [
                    { name: "वित्तीय सेवा", blurb: "परिमाण र विश्वास एउटै वाक्यमा।" },
                    { name: "सार्वजनिक क्षेत्र (e-Gov)", blurb: "पोर्टल भन्दा पर: नागरिक-स्तरका मानवीय प्रणालीहरू।" },
                    { name: "ऊर्जा", blurb: "लामो चक्रका लगानी, छोटो चक्रको डेलिभरी।" },
                    { name: "स्वास्थ्य", blurb: "खण्डित होइन, प्रणालीका रूपमा केयर यात्राहरू।" },
                    { name: "उपभोक्ता", blurb: "ध्यान दुर्लभ; निष्ठा क्षणमै कमाइन्छ।" },
                    { name: "टेलिकम", blurb: "सिर्फ युटिलिटी होइन, रणनीतिक सम्पत्ति।" },
                  ],
                },
                case: {
                  headline: "जब आदेश राष्ट्रिय हुन्छ।",
                  subtext: "बहुवर्षीय रूपान्तरणले स्थायी अपटाइम, नागरिक-स्तरको अनुभव, र पारदर्शी शासन संकेतहरू दियो।",
                  metrics: [
                    { stat: ">99.95%", label: "प्लेटफर्म उपलब्धता" },
                    { stat: "Millions", label: "मासिक सक्रिय अन्तरक्रिया" },
                    { stat: "हप्ताहरू, महिनाहरू होइन", label: "रिलिज क्याडेन्स" },
                  ],
                  quote: "हामीले महत्वाकांक्षालाई सिस्टम सोचाइसँग भेटायौं। बाँकी आफैं आयो।",
                  cta: "निजी ब्रिफिङ अनुरोध गर्नुहोस्",
                },
                perspective: {
                  title: "नेतृत्वको टिप्पणी",
                  body: "हाम्रो काम जानाजानी शान्त छ। शासन, परिमाण, र मानिसले प्रणाली प्रयोग गर्दा हुने अनुभव—यही ठाँउमा हामी आत्मविश्वास बनाउँछौं।",
                },
                careers: {
                  title: "महत्वपूर्ण बनाउनुहोस्, दीर्घकालीन टिकाइ राख्नुहोस्।",
                  body: "विश्लेषण, डिजाइन, र इन्जिनियरिङ मन—हाम्रो अर्को अध्याय लेख्नुहोस्।",
                  cta: "रोलहरू हेर्नुहोस्",
                },
                globalCta: {
                  title: "यदि तपाईं निर्णायक मोडमा हुनुहुन्छ भने, कुरा गरौँ।",
                },
                offices: [
                  { city: "काठमाडौँ", label: "प्रमुख हब (एशिया)", email: "hello@ninjainfosys.com" },
                  { city: "Remote", label: "वैश्विक नेटवर्क", email: "hello@ninjainfosys.com" },
                ],
                footer: {
                  cols: [
                    { title: "इनसाइट्स", links: ["नवीनतम", "सङ्कलनहरू", "न्युजलेटर"] },
                    {
                      title: "प्रयासहरू",
                      links: ["रणनीति", "रूपान्तरण", "प्रविधि", "अपरेटिङ मोडल", "जोखिम", "मानिस र परिवर्तन"],
                    },
                    { title: "उद्योगहरू", links: ["वित्तीय सेवा", "सार्वजनिक क्षेत्र", "ऊर्जा", "स्वास्थ्य", "उपभोक्ता", "टेलिकम"] },
                    { title: "विषयमा", links: ["कम्पनी", "नेतृत्व", "क्यारियर", "सम्पर्क"] },
                  ],
                  legal: "© Ninja Infosys. गोपनीयता · सर्तहरू · कुकी प्राथमिकताहरू",
                },
              },
            },
          }),
        }}
      />
    </>
  )
}
