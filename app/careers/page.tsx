"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SearchOverlay from "@/components/search-overlay";
import Link from "next/link";
import { Compass, LineChart, UsersRound } from "lucide-react";

export default function CareersPage() {
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const [searchOpen, setSearchOpen] = useState(false);

  type Opening = {
    title: string;
    practice: string;
    location: string;
    description: string;
    tags: string[];
  };

  type CultureHighlight = {
    title: string;
    description: string;
    icon: React.ComponentType<{ size: number; strokeWidth: number }>;
  };

  type JourneyStep = {
    name: string;
    detail: string;
  };

  type LanguageContent = {
    hero: { kicker: string; title: string };
    overview: { title: string; desc: string };
    roles: { title: string; desc: string };
    culture: { title: string; desc: string; note: string };
    journey: { kicker: string; title: string; desc: string };
    openings: Opening[];
    cultureHighlights: CultureHighlight[];
    journeySteps: JourneyStep[];
  };

  const content: Record<"en" | "ne", LanguageContent> = {
    en: {
      hero: {
        kicker: "Join the build",
        title: "CAREERS",
      },
      overview: {
        title: "Our Reach and Expertise",
        desc: "We work across industries and functions, bringing deep expertise and fresh perspectives to every engagement.",
      },
      roles: {
        title: "Current openings",
        desc: "We look for people who can see the whole system and still ship progress weekly. Every role blends client delivery, internal build time, and community mentorship.",
      },
      culture: {
        title: "How we operate",
        desc: "The work is demanding. So we build systems that keep the team energised, informed, and able to do the best work of their careers—without running on fumes.",
        note: "Our squads blend strategy, change, and build. You will rarely be the only specialist in the room—but you will be accountable for your craft.",
      },
      journey: {
        kicker: "Your path in",
        title: "The hiring journey",
        desc: "Expect candid conversations, collaborative problem solving, and clear feedback. We optimise for mutual fit, not theatrics.",
      },
      openings: [
        {
          title: "Principal, Strategy & Deals",
          practice: "Strategy",
          location: "Kathmandu · Hybrid",
          description:
            "Lead multi-market growth programmes, shape deal theses, and coach teams turning ambiguity into actionable plays.",
          tags: ["Client leadership", "Portfolio strategy", "Growth bets"],
        },
        {
          title: "Transformation Program Lead",
          practice: "Transformation",
          location: "Singapore · Flexible",
          description:
            "Spin up cross-functional squads, steer operating-model shifts, and keep momentum anchored to measurable outcomes.",
          tags: ["Change orchestration", "CxO advisory", "Scaled delivery"],
        },
        {
          title: "Senior Technology Architect",
          practice: "Technology",
          location: "Remote · South Asia",
          description:
            "Architect platforms that balance resilience with pace, mentor engineers, and set the standards for modern delivery.",
          tags: ["Cloud-native", "Security by design", "Platform thinking"],
        },
        {
          title: "People & Change Specialist",
          practice: "People & Change",
          location: "Kathmandu · Hybrid",
          description:
            "Design adoption journeys, translate insights into rituals, and help leaders bring teams along the transformation curve.",
          tags: ["Organisation design", "Facilitation", "Behavioural insight"],
        },
      ],
      cultureHighlights: [
        {
          title: "Craft over noise",
          description:
            "We bias toward depth, not volume. Small teams of senior operators work closely with clients and ship visible momentum early.",
          icon: Compass,
        },
        {
          title: "Growth that compounds",
          description:
            "Every engagement includes structured learning—rotations across practices, peer guilds, and scenario camps keep skills sharp.",
          icon: LineChart,
        },
        {
          title: "Teams built on trust",
          description:
            "We operate with radical clarity: shared dashboards, crisp rituals, and feedback loops that keep delivery humane and sustainable.",
          icon: UsersRound,
        },
      ],
      journeySteps: [
        {
          name: "1. Connect",
          detail: "Share your intent, portfolio, and what you want to build next. We respond within five working days.",
        },
        {
          name: "2. Working sessions",
          detail: "Two conversations with future teammates focused on problem-solving, craft depth, and values alignment.",
        },
        {
          name: "3. Applied challenge",
          detail: "A short, contextual exercise that mirrors the real problems we solve. We give structured feedback regardless of outcome.",
        },
        {
          name: "4. Offer & onboarding",
          detail: "We co-design your first 100 days—mix of client work, internal build time, and mentorship pairings.",
        },
      ],
    },
    ne: {
      hero: {
        kicker: "निर्माणमा सामेल हुनुहोस्",
        title: "क्यारियरहरू",
      },
      overview: {
        title: "हाम्रो पहुँच र विशेषज्ञता",
        desc: "हामी रणनीतिकार, प्राविधिक, र परिवर्तन विशेषज्ञहरूको समूह हौं जसले नेताहरूलाई अवसरहरूलाई दिगो गतिमा बदल्न मद्दत गर्छ।",
      },
      roles: {
        title: "हालका रिक्त स्थानहरू",
        desc: "हामी यस्ता व्यक्तिहरू खोज्छौं जो समग्र प्रणाली देख्न सक्छन् र साप्ताहिक प्रगति प्रदान गर्न सक्छन्। प्रत्येक भूमिकामा ग्राहक डेलिभरी, आन्तरिक निर्माण समय, र समुदाय मार्गदर्शनको मिश्रण हुन्छ।",
      },
      culture: {
        title: "हामी कसरी काम गर्छौं",
        desc: "काम चुनौतीपूर्ण छ। त्यसैले हामी यस्ता प्रणालीहरू निर्माण गर्छौं जसले टोलीलाई ऊर्जावान, सूचित, र उनीहरूको क्यारियरको उत्कृष्ट काम गर्न सक्षम बनाउँछ—थकान बिना।",
        note: "हाम्रा टोलीहरू रणनीति, परिवर्तन, र निर्माणको मिश्रण हुन्। तपाईं सधैं एक्लो विशेषज्ञ हुनुहुन्न—तर तपाईं आफ्नो सीपको लागि जिम्मेवार हुनुहुन्छ।",
      },
      cultureHighlights: [
        {
          title: "गुणस्तर प्राथमिकता",
          description: "हामी गहिराइलाई प्राथमिकता दिन्छौं, संख्यालाई होइन। साना, अनुभवी टोलीहरूले ग्राहकहरूसँग मिलेर छिटो प्रगति गर्छन्।",
          icon: Compass,
        },
        {
          title: "लगातार वृद्धि",
          description: "हरेक काममा संरचित सिकाइ हुन्छ—प्याक्टिस घुम्ती, सहकर्मी समूह, र परिदृश्य क्याम्पहरूले सीपलाई तेज राख्छन्।",
          icon: LineChart,
        },
        {
          title: "विश्वासमा आधारित टोली",
          description: "हामी स्पष्टता र विश्वासमा काम गर्छौं: साझा ड्यासबोर्ड, नियमित अभ्यास, र प्रतिक्रिया चक्रले कामलाई दिगो बनाउँछ।",
          icon: UsersRound,
        },
      ],
      journey: {
        kicker: "तपाईंको बाटो",
        title: "भर्ना प्रक्रिया",
        desc: "खुला संवाद, सहकार्यमा समस्या समाधान, र स्पष्ट प्रतिक्रिया अपेक्षा गर्नुहोस्। हामी आपसी उपयुक्तता खोज्छौं, नाटक होइन।",
      },
      journeySteps: [
        {
          name: "१. सम्पर्क गर्नुहोस्",
          detail: "आफ्नो उद्देश्य, पोर्टफोलियो, र तपाईं के निर्माण गर्न चाहनुहुन्छ साझा गर्नुहोस्। हामी पाँच कार्य दिनभित्र प्रतिक्रिया दिन्छौं।",
        },
        {
          name: "२. कार्य सत्रहरू",
          detail: "भविष्यका सहकर्मीहरूसँग दुई संवाद, समस्या समाधान, सीप गहिराइ, र मूल्य मिलानमा केन्द्रित।",
        },
        {
          name: "३. प्रयोगात्मक चुनौती",
          detail: "हाम्रो वास्तविक समस्यासँग मिल्दोजुल्दो छोटो अभ्यास। नतिजा जे भए पनि संरचित प्रतिक्रिया दिन्छौं।",
        },
        {
          name: "४. प्रस्ताव र सामेल",
          detail: "पहिलो १०० दिनको योजना सँगै बनाउँछौं—ग्राहक काम, आन्तरिक निर्माण, र मार्गदर्शनको संयोजन।",
        },
      ],
      openings: [], // will reuse English openings
    },
  };

  content.ne.openings = content.en.openings;
  const t = content[language];

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="relative bg-white text-[#0B0D12]">
        {/* HERO */}
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-24 lg:pt-28">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: "url('/careers.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_20%,rgba(15,98,254,0.25),transparent_60%),radial-gradient(600px_300px_at_85%_70%,rgba(122,90,248,0.2),transparent_60%)]" />
            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
              <div className="max-w-[1200px] text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  <span>{t.hero.kicker}</span>
                </p>
                <h1 className="mt-4 text-4xl font-heading font-semibold text-white sm:text-6xl text-left">
                  {t.hero.title}
                </h1>

                <nav aria-label="Breadcrumb" className="mt-4 text-sm text-white/80">
                  <ol className="flex items-center gap-3">
                    <li>
                      <Link href="/" className="font-medium tracking-wide hover:text-white">
                        NINJA INFOSYS
                      </Link>
                    </li>
                    <li aria-hidden className="inline-flex items-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </li>
                    <li className="font-medium tracking-wide">{t.hero.title}</li>
                  </ol>
                </nav>
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-ni-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ni-accent-2"
                  >
                    {language === "ne" ? "आफ्नो प्रोफाइल साझा गर्नुहोस्" : "Share your profile"}
                  </Link>
                  <Link
                    href="#open-roles"
                    className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ni-accent hover:text-ni-accent"
                  >
                    {language === "ne" ? "खुला भूमिका हेर्नुहोस्" : "View open roles"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-12">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-ni-ink">{t.overview.title}</h2>
              <p className="mt-6 sm:text-xl text-ni-slate/80 leading-relaxed text-3xl sm:text-4xl font-heading font-semibold text-ni-ink">{t.overview.desc}</p>
            </div>
            <div className="mt-10 grid gap-7 sm:grid-cols-3">
              <div className="border border-ni-graphite/10 bg-ni-slate/2 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-ni-slate/50">
                  {language === "ne" ? "सञ्चालन बजारहरू" : "Operating markets"}
                </p>
                <p className="mt-3 text-2xl font-semibold text-ni-ink">
                  {language === "ne" ? "दक्षिण एशिया · एसईए · जीसीसी" : "South Asia · SEA · GCC"}
                </p>
              </div>
              <div className="border border-ni-graphite/10 bg-ni-slate/2 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-ni-slate/50">
                  {language === "ne" ? "अनुशासनहरू" : "Disciplines"}
                </p>
                <p className="mt-3 text-2xl font-semibold text-ni-ink">
                  {language === "ne" ? "रणनीति · परिवर्तन · इन्जिनियरिङ" : "Strategy · Change · Engineering"}
                </p>
              </div>
              <div className="border border-ni-graphite/10 bg-ni-slate/2 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-ni-slate/50">
                  {language === "ne" ? "औसत कार्यकाल" : "Average tenure"}
                </p>
                <p className="mt-3 text-2xl font-semibold text-ni-ink">
                  {language === "ne" ? "४.६ वर्ष" : "4.6 years"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-ni-graphite/10 my-8 mx-auto max-w-[1600px]" />

        {/* OPEN ROLES */}
        <section id="open-roles" className="py-15">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold">{t.roles.title}</h2>
                <p className="mt-4 max-w-2xl text-ni-slate/80 leading-relaxed">{t.roles.desc}</p>
              </div>
              <Link
                href="mailto:careers@ninjainfosys.com"
                className="inline-flex items-center justify-center border border-ni-graphite/20 px-6 py-3 text-sm font-semibold text-ni-ink transition-all hover:border-ni-accent hover:text-ni-accent"
              >
                {language === "ne" ? "आफूलाई परिचय गराउनुहोस्" : "Introduce yourself"}
              </Link>
            </div>
            <div className="grid gap-6">
              {t.openings.map((role) => (
                <div
                  key={role.title}
                  className="border border-ni-graphite/10 bg-ni-slate/5 p-6 lg:p-10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div>
                      <span className="inline-flex items-center gap-2 bg-ni-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ni-accent">
                        {role.practice}
                      </span>
                      <h3 className="mt-4 text-2xl font-heading font-semibold text-ni-ink">{role.title}</h3>
                      <p className="mt-3 max-w-2xl text-ni-slate/80 leading-relaxed">{role.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <span key={tag} className="border border-ni-graphite/15 bg-white/50 px-3 py-1 text-xs font-medium text-ni-slate/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="min-w-[220px]">
                      <div className="border border-ni-graphite/10 bg-white/50 p-4 text-sm text-ni-slate/80">
                        <span className="block text-xs uppercase tracking-[0.24em] text-ni-slate/50">
                          {language === "ne" ? "स्थान" : "Location"}
                        </span>
                        <span className="mt-1 block font-semibold text-ni-ink">{role.location}</span>
                      </div>
                      <Link
                        href={`mailto:careers@ninjainfosys.com?subject=Application%20-%20${role.title}`}
                        className="mt-4 inline-flex items-center justify-center bg-ni-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ni-accent-2"
                      >
                        {language === "ne" ? "अहिले आवेदन दिनुहोस्" : "Apply now"}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section className="py-20 bg-[#1F2430] text-ni-paper">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold">{t.culture.title}</h2>
                <p className="mt-4 text-lg text-ni-paper/80 leading-relaxed">{t.culture.desc}</p>
              </div>
              <div className="border border-white/10 bg-white/10 p-4 text-sm text-ni-paper/80">
                {t.culture.note}
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {t.cultureHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="border border-white/10 bg-white/10 p-6">
                    <div className="inline-flex items-center justify-center bg-ni-accent/15 p-3 text-ni-accent">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 text-xl font-heading font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-ni-paper/80 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="py-20">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="mb-12 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-ni-accent">
                <span className="size-1.5 bg-ni-accent" />
                {t.journey.kicker}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-heading font-semibold">{t.journey.title}</h2>
              <p className="mt-4 text-ni-slate/80 leading-relaxed">{t.journey.desc}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {t.journeySteps.map((step) => (
                <div key={step.name} className="border border-ni-graphite/10 bg-white/80 p-6">
                  <h3 className="text-lg font-heading font-semibold text-ni-ink">{step.name}</h3>
                  <p className="mt-3 text-ni-slate/80 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} language={language} />
    </>
  );
}