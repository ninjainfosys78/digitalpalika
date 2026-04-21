"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Testimonials: React.ComponentType<any> = dynamic(
  () => import("@/components/testimonials").then((m) => m.default ?? m),
  { ssr: false }
);
import {
  Target,
  Handshake,
  Globe2,
  ShieldCheck,
  BadgeCheck,
  Eye,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GlobalCTA from "@/components/global-cta";
import { useLanguage } from "@/components/LanguageProvider";
import { getBannerByImgName } from "@/lib/banners";

export default function AboutPage() {
  const { language } = useLanguage();
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [secondImageUrl, setSecondImageUrl] = useState<string | null>(null);

  const content =
    language === "en"
      ? {
        who: "Who we are",
        heroTitle: "ABOUT US",
        brand: "NINJA INFOSYS",
        whoDesc:
          "Ninja Infosys is an IT technical solution provider. Our dedicated technical professionals offer our clients services in the field of IT Consultancy, Software Development, Web/Mobile Application Development, Project-based solutions and IT System Maintenance. Our mission from the very first day has been to establish professional relationship with our clients, to provide effective and reliable information technology solutions for their need.",
        coreTitle: "Our Core",
        features: [
          {
            icon: Handshake,
            title: "Collaboration",
            desc: "Working closely with partners",
          },
          {
            icon: Globe2,
            title: "Global research",
            desc: "Multi-region delivery",
          },
          {
            icon: ShieldCheck,
            title: "Trust & Security",
            desc: "Secure, reliable solutions",
          },
          {
            icon: BadgeCheck,
            title: "Quality",
            desc: "Standards & Certifications",
          },
        ],
        core: [
          {
            icon: Eye,
            title: "Our purpose",
            body: "Build trustworthy software that helps teams move faster, operate safely, and deliver real outcomes—without the drama.",
          },
          {
            icon: Target,
            title: "Our mission",
            body: "Enable enterprises with modern engineering practices and small, craft-focused teams—shipping measurable value, iteratively.",
          },
          {
            icon: Heart,
            title: "Our values",
            body: "Craft and clarity, integrity and ownership, partner mindset, accessibility and security by default, and continuous improvement.",
          },
        ],
        storyTitle: "Our story",
        timeline: [
          {
            year: "2016",
            title: "Humble start",
            text: "Ninja Infosys began as a two-person studio focused on resilient web systems.",
          },
          {
            year: "2018",
            title: "First Fortune 500",
            text: "Scaled payment and risk platforms, bringing modern DevEx into legacy estates.",
          },
          {
            year: "2020",
            title: "Platform practice",
            text: "Launched our internal developer platform accelerators and reliability program.",
          },
          {
            year: "2023",
            title: "Data & AI",
            text: "Added pragmatic AI—retrieval, evaluation, and safety—to shipping products.",
          },
          {
            year: "2025",
            title: "Global footprint",
            text: "Multi-region delivery with the same small-team DNA and craft standards.",
          },
        ],
        principlesTitle: "Engineering Principles",
        principles: [
          { title: "Automation First", body: "We eliminate toil. If a task is repeatable, it is automated. This ensures consistency and frees our engineers to solve creative problems." },
          { title: "Security by Default", body: "Security isn't a checkbox at the end—it's woven into every line of code we write and every architectural decision we make." },
          { title: "Pragmatic Innovation", body: "We don't chase hype. We apply new technologies like AI and Cloud-Native patterns only when they drive real business outcomes." }
        ],
        leadershipTitle: "Our Team",
        leaders: [
          { name: "Ramesh Chettri", role: "Chairman", image: "/ramesh_chairman.png" },
          { name: "Shiv Ram Adhikari", role: "Chief Technology Officer", image: "/shiv_ram_adhikari.png" },
          { name: "Bimala KC", role: "Principal Software Engineer", image: "/bimala_kc.png" }
        ]
      }
      : {
        who: "हामी को हौं",
        heroTitle: "हामीबारे",
        brand: "निन्जा इन्फोसिस",
        whoDesc:
          "निन्जा इन्फोसिस एक आईटी प्राविधिक समाधान प्रदायक हो। हाम्रा समर्पित प्राविधिक पेशेवरहरूले ग्राहकहरूलाई आईटी परामर्श, सफ्टवेयर विकास, वेब/मोबाइल एप विकास, परियोजना-आधारित समाधान र आईटी प्रणाली मर्मतसम्भारमा सेवाहरू प्रदान गर्दछन्। सुरुदेखि नै हाम्रो लक्ष्य ग्राहकहरूसँग व्यावसायिक सम्बन्ध स्थापन गरी प्रभावकारी र भरपर्दो सूचना प्रविधि समाधानहरू उपलब्ध गराउनु हो।",
        features: [
          {
            icon: Handshake,
            title: "सहकार्य",
            desc: "साझेदारहरूसँग नजिकबाट काम गरिन्छ",
          },
          {
            icon: Globe2,
            title: "वैश्विक शोध",
            desc: "बहु-क्षेत्रीय डेलिभरी",
          },
          {
            icon: ShieldCheck,
            title: "विश्वास र सुरक्षा",
            desc: "सुरक्षित, भरपर्दो समाधान",
          },
          {
            icon: BadgeCheck,
            title: "गुणस्तर",
            desc: "मानक र प्रमाणपत्रहरू",
          },
        ],
        coreTitle: "हाम्रो मूल",
        core: [
          {
            icon: Eye,
            title: "हाम्रो उद्देश्य",
            body: "विश्वासयोग्य सफ्टवेयर बनाउनु—जसले टिमलाई छिटो र सुरक्षित रूपमा काम गर्न मद्दत गर्छ र वास्तविक नतिजा दिन्छ।",
          },
          {
            icon: Target,
            title: "हाम्रो मिशन",
            body: "आधुनिक इन्जिनियरिङ अभ्यास र साना, कौशल केन्द्रित टोलीमार्फत क्रमिक रूपमा मापनयोग्य मूल्य डेलिभर गराउने।",
          },
          {
            icon: Heart,
            title: "हाम्रो मूल्यहरू",
            body: "कला र स्पष्टता, इमानदारी र स्वामित्व, साझेदारी सोच, पहुँचयोग्यता र सुरक्षा-पहिले, र निरन्तर सुधार।",
          },
        ],
        storyTitle: "हाम्रो कथा",
        timeline: [
          {
            year: "२०१६",
            title: "न्यानो सुरुवात",
            text: "निन्जा इन्फोसिस दुई जनाबाट सुरु भयो—लचिलो वेब प्रणालीहरूमा केन्द्रित।",
          },
          {
            year: "२०१८",
            title: "पहिलो फोर्च्यून ५००",
            text: "भुक्तानी र जोखिम प्लेटफर्म स्केल गर्दै आधुनिक डेभएक्स पुर्‍यायौँ।",
          },
          {
            year: "२०२०",
            title: "प्लेटफर्म अभ्यास",
            text: "आन्तरिक डेभलपर प्लेटफर्म त्वरक र विश्वसनीयता कार्यक्रम सुरु।",
          },
          {
            year: "२०२३",
            title: "डेटा र एआई",
            text: "व्यावहारिक एआई—प्राप्ति, मूल्याङ्कन, सुरक्षा—उत्पादनमा।",
          },
          {
            year: "२०२५",
            title: "वैश्विक उपस्थिति",
            text: "समान सानो-टिम डीएनए र कला मानकसहित बहु-क्षेत्रीय डेलिभरी।",
          },
        ],
        principlesTitle: "इन्जिनियरिङ सिद्धान्तहरू",
        principles: [
          { title: "स्वचालन पहिलो", body: "हामी कठिन कामहरू हटाउँछौं। यदि कुनै कार्य दोहोरिने खालको छ भने, त्यसलाई स्वचालित बनाइन्छ।" },
          { title: "पूर्वनिर्धारित सुरक्षा", body: "सुरक्षा अन्तिममा गरिने चेकबक्स होइन—यो हामीले लेख्ने कोड र हरेक वास्तुकला निर्णयमा बुनिएको हुन्छ।" },
          { title: "व्यावहारिक नवाचार", body: "हामी केवल चर्चाको पछि लाग्दैनौं। हामी एआई जस्ता नयाँ प्रविधिहरू प्रयोग गर्छौं जसले वास्तविक नतिजा दिन्छ।" }
        ],
        leadershipTitle: "हाम्रो टिम",
        leaders: [
          { name: "रमेश क्षेत्री", role: "अध्यक्ष (Chairman)", image: "/ramesh_chairman.png" },
          { name: "शिव राम अधिकारी", role: "मुख्य प्राविधिक अधिकृत", image: "/shiv_ram_adhikari.png" },
          { name: "बिमला केसी", role: "प्रमुख सफ्टवेयर इन्जिनियर", image: "/bimala_kc.png" }
        ]
      };

  useEffect(() => {
    let mounted = true;

    getBannerByImgName("about")
      .then((url) => {
        if (!mounted) return;
        setBannerUrl(url || null);
      })
      .catch(() => { });

    getBannerByImgName("about-2")
      .then((url) => {
        if (!mounted) return;
        setSecondImageUrl(url || null);
      })
      .catch(() => { });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Header />

      <main className="relative bg-background text-foreground transition-colors duration-300">
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-28 lg:pt-32">
            <div
              className="absolute inset-0 bg-center bg-fixed filter grayscale"
              style={
                bannerUrl
                  ? {
                    backgroundImage: `url('${bannerUrl}')`,
                    backgroundSize: "cover",
                  }
                  : {}
              }
            />
            <div className="absolute inset-0 bg-background/80" />

            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16">
              <div className="max-w-[1600px] text-left">
                <nav
                  aria-label="Breadcrumb"
                  className="mt-0 text-sm text-foreground/80"
                >
                  <ol className="flex items-center gap-3">
                    <li>
                      <Link
                        href="/"
                        className="font-medium tracking-wide hover:text-foreground"
                      >
                        {content.brand}
                      </Link>
                    </li>
                    <li aria-hidden className="inline-flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-foreground/70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </li>
                    <li className="font-medium tracking-wide">
                      {content.heroTitle}
                    </li>
                  </ol>
                </nav>

                <h1 className="pt-4 text-5xl font-heading font-semibold text-foreground sm:text-6xl text-left">
                  {content.heroTitle}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate bg-background border-t border-foreground/10">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
            <div className="grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-6">
                <div className="h-[420px] overflow-hidden bg-muted">
                  {secondImageUrl && (
                    <img
                      src={secondImageUrl}
                      alt="Who we are"
                      className="w-full h-full object-cover grayscale"
                    />
                  )}
                </div>
              </div>
              <div className="md:col-span-6 md:h-[420px] flex flex-col justify-center gap-6">
                <h2 className="text-[32px] font-heading font-semibold text-left -mt-3 lg:-mt-4 text-foreground">
                  {content.who}
                </h2>
                <p className="mt-0 leading-relaxed text-foreground/80">
                  {content.whoDesc}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {content.features.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div
                        key={f.title}
                        className="flex items-start gap-3 bg-card p-4 border border-foreground/5 shadow-sm"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center bg-foreground/5 text-foreground">
                          <Icon size={16} />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-foreground">
                            {f.title}
                          </div>
                          <div className="text-xs text-foreground/60">
                            {f.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-background">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-16">
            <div className="mt-2 mb-3">
              <h2 className="mt-2 text-[32px] font-heading font-semibold text-left text-foreground">
                {content.coreTitle}
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-12">
              {content.core.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="md:col-span-4 border border-foreground/10 bg-card p-6 shadow-sm rounded-none transition-all duration-300 hover:-translate-y-2 hover:border-[#d52020] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center bg-foreground/5 text-foreground transition-colors group-hover:bg-[#d52020] group-hover:text-white">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-heading font-semibold text-foreground text-left">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="relative z-10 bg-muted">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-16">
            <h2 className="text-[32px] font-heading font-semibold text-left text-foreground mb-12">
              {content.principlesTitle}
            </h2>
            <div className="grid gap-12 md:grid-cols-3">
              {content.principles.map((p, idx) => (
                <div key={idx} className="border-l-2 border-[#d52020] pl-6 py-2">
                  <h3 className="text-xl font-heading font-bold mb-4">{p.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="relative z-10 bg-background">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
            <div className="max-w-2xl mb-16">
              <h2 className="text-[32px] font-heading font-semibold text-left text-foreground mb-4">
                {content.leadershipTitle}
              </h2>
              <div className="h-1 w-20 bg-[#d52020]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
              {content.leaders.map((leader, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center">
                  <div className="w-64 h-64 relative overflow-hidden rounded-full bg-muted mb-8 border-4 border-foreground/5 shadow-xl transition-all duration-500 group-hover:border-[#d52020] group-hover:scale-105">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className={`w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 ${leader.name === 'Ramesh' || leader.name === 'रमेश' ? 'scale-110 object-top' : ''}`}
                    />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">{leader.name}</h3>
                  <p className="text-[#d52020] font-semibold uppercase tracking-widest text-[11px] mt-2 bg-foreground/5 px-4 py-1 rounded-full">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-story" className="relative z-10 scroll-mt-28 bg-background">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
            <h2 className="text-[32px] font-heading font-semibold text-left text-foreground">
              {content.storyTitle}
            </h2>

            <div className="relative mt-10">
              <span className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground/10" />

              <ol className="space-y-12">
                {content.timeline.map((t, i) => (
                  <li
                    key={t.year}
                    className="group/box relative grid grid-cols-1 md:grid-cols-2 md:gap-10"
                  >
                    <span className="absolute left-1/2 top-6 z-10 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-[#d52020] ring-2 ring-foreground/20 transition-transform duration-300 group-hover/box:scale-125" />

                    <div
                      className={
                        i % 2 === 0
                          ? "md:col-start-1 md:pr-10 flex md:justify-end"
                          : "md:col-start-2 md:pl-10 flex md:justify-start"
                      }
                    >
                      <div className="max-w-[420px] w-full border border-foreground/10 bg-card p-6 rounded-none text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-ni-accent/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                        <div className="text-xs font-semibold tracking-wide text-foreground/50 group-hover/box:text-ni-accent transition-colors">
                          {t.year}
                        </div>
                        <h3 className="mt-2 text-lg font-heading font-semibold text-foreground text-left">
                          {t.title}
                        </h3>
                        <p className="mt-3 text-sm text-foreground/80">
                          {t.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <GlobalCTA onOfficesOpen={() => { }} />
      </main>

      <Footer />
    </>
  );
}
