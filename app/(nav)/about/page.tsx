"use client"

import { useState } from "react"
import {
  Target,
  Sparkles,
  Handshake,
  Globe2,
  Users,
  ShieldCheck,
  BadgeCheck,
  Eye,
  Heart,
} from "lucide-react"

import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [language, setLanguage] = useState<"en" | "ne">("en")

  const content =
    language === "en"
      ? {
          who: "Who we are",
          heroTitle: "ABOUT US  ",      
          coreKicker: "OUR CORE",
          coreTitle: "Purpose, Mission & Values",
          coreSub: "The foundation of everything we do at Ninja Infosys.",
          core: [
            {
              icon: Eye,
              title: "Our purpose",
              body:
                "Build trustworthy software that helps teams move faster, operate safely, and deliver real outcomes—without the drama.",
            },
            {
              icon: Target,
              title: "Our mission",
              body:
                "Enable enterprises with modern engineering practices and small, craft-focused teams—shipping measurable value, iteratively.",
            },
            {
              icon: Heart,
              title: "Our values",
              body:
                "Craft and clarity, integrity and ownership, partner mindset, accessibility and security by default, and continuous improvement.",
            },
          ],
          // NEW: core values section titles/descriptions
          coreValuesTitle: "Our Core Values",
          coreValues: [
            { icon: Sparkles, title: "Innovation", desc: "We constantly push boundaries to develop cutting-edge solutions." },
            { icon: ShieldCheck, title: "Integrity", desc: "We build trust through transparency and ethical practices." },
            { icon: Users, title: "Collaboration", desc: "We believe the best solutions emerge from teamwork." },
            { icon: BadgeCheck, title: "Excellence", desc: "We’re committed to delivering exceptional quality." },
            { icon: Heart, title: "Passion", desc: "We’re driven by enthusiasm for technology’s potential." },
            { icon: Target, title: "Results", desc: "We measure success by tangible business outcomes." },
          ],
          values: [
            {
              icon: Sparkles,
              title: "Craft over chaos",
              desc:
                "Small teams, strong practices, and code we’re proud to run at 3 a.m. if needed.",
            },
            {
              icon: Target,
              title: "Outcomes first",
              desc:
                "We ship thin slices tied to measurable business results—not activity.",
            },
            {
              icon: Handshake,
              title: "Partner, not vendor",
              desc:
                "We pair, enable, and leave your teams stronger than we found them.",
            },
          ],
          storyTitle: "Our story",
          timeline: [
            {
              year: "2016",
              title: "Humble start",
              text:
                "Ninja Infosys began as a two-person studio focused on resilient web systems.",
            },
            {
              year: "2018",
              title: "First Fortune 500",
              text:
                "Scaled payment and risk platforms, bringing modern DevEx into legacy estates.",
            },
            {
              year: "2020",
              title: "Platform practice",
              text:
                "Launched our internal developer platform accelerators and reliability program.",
            },
            {
              year: "2023",
              title: "Data & AI",
              text:
                "Added pragmatic AI—retrieval, evaluation, and safety—to shipping products.",
            },
            {
              year: "2025",
              title: "Global footprint",
              text:
                "Multi-region delivery with the same small-team DNA and craft standards.",
            },
          ],
          whereTitle: "Where we work",
          whereCopy:
            "Distributed by design. We collaborate across time zones with a shared playbook and strong communication rituals.",
          whereStats: [
            { Icon: Globe2, label: "Regions", val: "3+" },
            { Icon: Users, label: "Nationalities", val: "12+" },
            { Icon: BadgeCheck, label: "Certifications", val: "40+" },
            { Icon: ShieldCheck, label: "Sec reviews / yr", val: "100+" },
          ],
        }
      : {
          who: "हामी को हौं",
          heroTitle: "हामीबारे",
          coreKicker: "हाम्रो मूल",
          coreTitle: "उद्देश्य, मिशन र मूल्यहरू",
          coreSub: "Ninja Infosys मा हामी जे गर्छौं, त्यसको आधार यही हो।",
          core: [
            {
              icon: Eye,
              title: "हाम्रो उद्देश्य",
              body:
                "विश्वासयोग्य सफ्टवेयर बनाउनु—जसले टिमलाई छिटो र सुरक्षित रूपमा काम गर्न मद्दत गर्छ र वास्तविक नतिजा दिन्छ।",
            },
            {
              icon: Target,
              title: "हाम्रो मिशन",
              body:
                "आधुनिक इन्जिनियरिङ अभ्यास र साना, कौशल केन्द्रित टोलीमार्फत क्रमिक रूपमा मापनयोग्य मूल्य डेलिभर गराउने।",
            },
            {
              icon: Heart,
              title: "हाम्रो मूल्यहरू",
              body:
                "कला र स्पष्टता, इमानदारी र स्वामित्व, साझेदारी सोच, पहुँचयोग्यता र सुरक्षा-पहिले, र निरन्तर सुधार।",
            },
          ],
          coreValuesTitle: "हाम्रा मूल मूल्यहरू",
          coreValues: [
            { icon: Sparkles, title: "नवप्रवर्तन", desc: "हामी अत्याधुनिक समाधान विकास गर्न सीमाना धकेल्छौं।" },
            { icon: ShieldCheck, title: "इमानदारी", desc: "पारदर्शिता र नैतिक अभ्यासमार्फत विश्वास बनाउँछौं।" },
            { icon: Users, title: "सहकार्य", desc: "उत्कृष्ट समाधान टोली कार्यबाटै जन्मिन्छन् भन्नेमा हामी विश्वास गर्छौं।" },
            { icon: BadgeCheck, title: "उत्कृष्टता", desc: "हामी असाधारण गुणस्तर डेलिभर गर्न प्रतिबद्ध छौं।" },
            { icon: Heart, title: "उत्साह", desc: "प्रविधिको सम्भावनाप्रति हाम्रो जोशले हामीलाई चलाउँछ।" },
            { icon: Target, title: "नतिजा", desc: "हामी ठोस व्यवसायिक परिणामबाट सफलता मापन गर्छौं।" },
          ],
          values: [
            { icon: Sparkles, title: "कला र गुणस्तर", desc: "साना टीम, बलिया अभ्यास, र आवश्यकता परे राति ३ बजे पनि चलाउन सकिने कोड।" },
            { icon: Target, title: "नतिजा पहिला", desc: "साना तर उपयोगी टुक्रामा डेलिभरी—सिधै व्यवसायिक परिणामसँग जोडिएको।" },
            { icon: Handshake, title: "साझेदार, विक्रेता होइन", desc: "सँगै काम, सक्षम बनाउने, र तपाईंको टोलीलाई अझ बलियो बनाउने।" },
          ],
          storyTitle: "हाम्रो कथा",
          timeline: [
            { year: "2016", title: "न्यानो सुरुवात", text: "Ninja Infosys दुई जनाबाट सुरु भयो—लचिलो वेब प्रणालीहरूमा केन्द्रित।" },
            { year: "2018", title: "पहिलो Fortune 500", text: "भुक्तानी र जोखिम प्लेटफर्म स्केल गर्दै आधुनिक DevEx पुर्‍यायौँ।" },
            { year: "2020", title: "Platform अभ्यास", text: "आन्तरिक डेभलपर प्लेटफर्म एक्सेलेरेटर र विश्वसनीयता कार्यक्रम सुरु।" },
            { year: "2023", title: "Data & AI", text: "व्यावहारिक AI—retrieval, evaluation, safety—उत्पादनमा।" },
            { year: "2025", title: "वैश्विक उपस्थिति", text: "समान सानो-टिम DNA र कला मानकसहित बहु-क्षेत्रीय डेलिभरी।" },
          ],
          whereTitle: "हामी कहाँ काम गर्छौं",
          whereCopy:
            "डिजाइनमै वितरित—साझा प्लेबुक र बलियो सञ्चार अभ्यासहरूसँग समयक्षेत्रहरूमा सहकार्य।",
          whereStats: [
            { Icon: Globe2, label: "क्षेत्रहरू", val: "3+" },
            { Icon: Users, label: "राष्ट्रियता", val: "12+" },
            { Icon: BadgeCheck, label: "प्रमाणपत्र", val: "40+" },
            { Icon: ShieldCheck, label: "सुरक्षा समीक्षा/वर्ष", val: "100+" },
          ],
        }

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      <AnnouncementBar language={language} />

      <main className="relative bg-white text-[#0B0D12]">
        {/* HERO */}
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-28 lg:pt-32">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: "url('/about.jpg')", backgroundAttachment: "fixed" }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_20%,rgba(15,98,254,0.25),transparent_60%),radial-gradient(600px_300px_at_85%_70%,rgba(122,90,248,0.2),transparent_60%)]" />

            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16">
              <div className="max-w-[1200px] text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  <span>{content.who}</span>
                </p>
                <h1 className="mt-4 text-5xl font-heading font-semibold text-white sm:text-6xl text-left">
                  {content.heroTitle}
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
                  <li className="font-medium tracking-wide">{content.heroTitle}</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* PURPOSE • MISSION • VALUES (plain white background) */}
        <section className="relative z-10 border-b border-[#2C3242]/10">
          <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-28 lg:py-16">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#2C3242]/70">{content.coreKicker}</p>
              <div className="mt-2 mb-3">
                <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-semibold">{content.coreTitle}</h2>
              </div>
              <p className="mt-3 text-[#1F2430]">{content.coreSub}</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {content.core.map(({ icon: Icon, title, body }) => (
                <article key={title} className="border border-[#E6E9EE] bg-white p-6 shadow-sm rounded-none transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-[#0F62FE]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center bg-[#0F62FE]/10 text-[#0F62FE]">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-semibold text-[#0B0D12]">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#1F2430]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

  {/* NEW: OUR CORE VALUES (graphite background) */}
  <section className="relative isolate bg-ni-graphite">
          <div className="pointer-events-none absolute inset-0 " />
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-28 py-10 lg:py-14">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white">{content.coreValuesTitle}</h3>

            <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
              {content.coreValues.map((v) => (
                <article key={v.title} className="group flex items-start gap-4 bg-transparent p-4 rounded-none transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-white">
                  <div className="h-9 w-9 flex items-center justify-center rounded bg-white/5 text-white transition-colors group-hover:text-[#0B0D12]">
                    {v.icon ? <v.icon size={16} className="text-current" /> : null}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white transition-colors group-hover:text-[#0B0D12]">{v.title}</div>
                    <p className="mt-1 text-[15px] leading-7 text-white/80 transition-colors group-hover:text-[#1F2430]">{v.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* STORY / TIMELINE */}
        <section id="our-story" className="relative z-10 scroll-mt-28">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
            <h2 className="text-center text-2xl lg:text-3xl font-semibold">
              {content.storyTitle}
            </h2>

            <div className="relative mt-10">
              {/* Center line */}
              <span className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200" />

              <ol className="space-y-10">
                {content.timeline.map((t, i) => (
                  <li
                    key={t.year}
                    className="relative grid grid-cols-1 md:grid-cols-2 md:gap-10"
                  >
                    {/* Marker dot at the center */}
                    <span className="absolute left-1/2 top-2 z-10 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-[#0F62FE] ring-4 ring-[#0F62FE]/20" />

                    {/* Card - alternates sides on md+ */}
                    <div
                      className={
                        i % 2 === 0
                          ? "md:col-start-1 md:pr-10"
                          : "md:col-start-2 md:pl-10"
                      }
                    >
                      <div className="border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                        <div className="text-xs font-semibold tracking-wide text-[#0F62FE]">
                          {t.year}
                        </div>
                        <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                        <p className="mt-1 text-sm text-slate-700">{t.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>



  {/* EXISTING: What we believe (graphite background) */}
  <section className="relative isolate bg-ni-graphite">
          <div className="pointer-events-none absolute inset-0 " />

          <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white">
              {language === "en" ? "What we believe" : "हामीले के विश्वास गर्छौं"}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.values.map(({ icon: Icon, title, desc }, idx) => (
                <article key={title} className="group bg-transparent p-3 shadow-none rounded-none transition-all hover:shadow-xl hover:bg-white">
                  <div className="w-full aspect-[4/2] overflow-hidden">
                    {idx === 0 && (
                      <img src="/craft.jpg" alt="Craft" className="w-full h-full object-cover" />
                    )}
                    {idx === 1 && (
                      <img src="/Outcomes.jpg" alt="Outcomes" className="w-full h-full object-cover" />
                    )}
                    {idx === 2 && (
                      <img src="/mountain-peak-leadership-vision.jpg" alt="Our mission" className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#0B0D12]">{title}</h3>
                    <p className="mt-2 text-sm text-white/80 transition-colors group-hover:text-[#1F2430]">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHERE WE WORK */}
        <section className="relative z-10 border-t border-slate-200 bg-slate-50/40">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-3">
                  <h2 className="text-2xl lg:text-3xl font-semibold">{content.whereTitle}</h2>
                </div>
                <p className="mt-3 text-slate-700">{content.whereCopy}</p>
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {content.whereStats.map(({ Icon, label, val }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 border border-slate-200 bg-white p-4 shadow-sm "
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center bg-[#0F62FE]/10 text-[#0F62FE]">
                        <Icon size={16} />
                      </span>
                      <div>
                        <div className="text-base font-semibold">{val}</div>
                        <div className="text-xs text-slate-500">{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[16/10] w-full border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <img
                    src="/how we work.jpg"
                    alt="How we work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </>
  )
}
