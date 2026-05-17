"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
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
  Linkedin,
  Mail,
  Quote,
  Calendar,
  History,
  TrendingUp,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GlobalCTA from "@/components/global-cta";
import ContactModals from "@/components/contact-modals";
import { useContactModals } from "@/lib/hooks/use-contact-modals";
import { useLanguage } from "@/components/LanguageProvider";
import { getBannerByImgName } from "@/lib/banners";
import { getTeamMembers, TeamMember } from "../../../lib/team";
import { getAboutGeneral, getPrinciples, getTimeline, getFeatures, getCorePillars, AboutGeneralData, PrincipleItem, TimelineEvent, FeatureItem, CorePillarItem } from "@/lib/about";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Handshake,
  Globe2,
  ShieldCheck,
  BadgeCheck,
  Eye,
  Target,
  Heart,
};

function StoryItem({ t, i, scrollYProgress, language }: { t: any, i: number, scrollYProgress: any, language: string }) {
  const y = useTransform(scrollYProgress, [0, 1], [80 * (i + 1), -80 * (i + 1)]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      className="relative group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div
        style={{ y, opacity: 0.01 }}
        className="absolute -top-8 -left-4 lg:-left-12 text-[50px] lg:text-[100px] font-heading font-black text-foreground select-none pointer-events-none transition-colors duration-1000 group-hover:text-[#d52020] group-hover:opacity-10"
      >
        {t.year}
      </motion.div>

      <div className="relative z-10">
        <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d52020]/20 group-hover:border-[#d52020] text-[#d52020] font-heading text-lg transition-all duration-500 group-hover:bg-[#d52020] group-hover:text-white shadow-sm">
            {t.year.slice(-2)}
          </div>
          <div className="h-px w-10 bg-[#d52020]/20 group-hover:w-20 transition-all duration-500" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#d52020] uppercase">{t.year}</span>
        </motion.div>

        <motion.h4 variants={itemVariants} className="text-xl lg:text-3xl font-heading font-semibold text-foreground mb-4 tracking-tight">
          {t.title}
        </motion.h4>

        <motion.p variants={itemVariants} className="text-base lg:text-lg text-foreground/60 leading-relaxed max-w-2xl font-light">
          {t.text}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const { language } = useLanguage();
  const { 
    officesOpen, openOffices, closeOffices,
    bookingOpen, openBooking, closeBooking,
    quoteOpen, openQuote, closeQuote 
  } = useContactModals();
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [secondImageUrl, setSecondImageUrl] = useState<string | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [generalData, setGeneralData] = useState<AboutGeneralData | null>(null);
  const [principles, setPrinciples] = useState<PrincipleItem[]>([]);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
  const [features, setFeatures] = useState<FeatureItem[]>([]);
  const [corePillars, setCorePillars] = useState<CorePillarItem[]>([]);

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

    getTeamMembers()
      .then((members: TeamMember[]) => {
        if (!mounted) return;
        setTeamMembers(members);
      })
      .catch(() => { });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    getAboutGeneral(language)
      .then((data) => {
        if (!mounted) return;
        setGeneralData(data);
      })
      .catch(() => {});

    getPrinciples(language)
      .then((items) => {
        if (!mounted) return;
        setPrinciples(items);
      })
      .catch(() => {});

    getTimeline(language)
      .then((events) => {
        if (!mounted) return;
        setTimelineEvents(events);
      })
      .catch(() => {});

    getFeatures(language)
      .then((items) => {
        if (!mounted) return;
        setFeatures(items);
      })
      .catch(() => {});

    getCorePillars(language)
      .then((items) => {
        if (!mounted) return;
        setCorePillars(items);
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [language]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scrollY = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100
  });

  const content = useMemo(() => {
    return language === "en"
      ? {
        who: generalData?.whoTitle || "Who we are",
        heroTitle: "ABOUT US",
        brand: "NINJA INFOSYS",
        whoDesc:
          generalData?.whoDesc || "Ninja Infosys is an IT technical solution provider. Our dedicated technical professionals offer our clients services in the field of IT Consultancy, Software Development, Web/Mobile Application Development, Project-based solutions and IT System Maintenance. Our mission from the very first day has been to establish professional relationship with our clients, to provide effective and reliable information technology solutions for their need.",
        coreTitle: generalData?.coreTitle || "Our Core",
        features: features.length > 0 ? features.map(f => ({
          icon: ICON_MAP[f.icon] || Handshake,
          title: f.title,
          desc: f.desc,
        })) : [
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
        core: corePillars.length > 0 ? corePillars.map(c => ({
          icon: ICON_MAP[c.icon] || Eye,
          title: c.title,
          body: c.body,
        })) : [
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
        storyTitle: generalData?.storyTitle || "Our story",
        timeline: timelineEvents.length > 0 ? timelineEvents : [
          {
            year: "2016",
            title: "Humble start",
            text: "Founded by a small group of passionate engineers, Ninja Infosys began as a specialized studio focused on building high-performance web systems. Our early focus was on establishing a foundation of technical excellence and a partner-first mindset that still drives us today.",
          },
          {
            year: "2018",
            title: "First Fortune 500",
            text: "A significant milestone as we partnered with our first Fortune 500 client. We successfully modernized and scaled critical payment and risk platforms, introducing streamlined developer experiences and robust CI/CD pipelines into complex enterprise environments.",
          },
          {
            year: "2020",
            title: "Platform practice",
            text: "We formally launched our Platform Engineering practice, developing internal accelerators that allow clients to ship software faster and more safely. Our focus shifted towards site reliability (SRE) and automated cloud-native infrastructure at scale.",
          },
          {
            year: "2023",
            title: "Data & AI",
            text: "Expanding into the frontier of pragmatic AI, we integrated retrieval-augmented generation (RAG) and specialized evaluation frameworks into shipping products. We help partners navigate the complexity of AI safety and real-world implementation.",
          },
          {
            year: "2025",
            title: "Global footprint",
            text: "Today, Ninja Infosys serves as a global technical partner with a presence across multiple regions. While our reach has expanded, we maintain our 'small-team' DNA—prioritizing engineering craft, deep ownership, and measurable business outcomes.",
          },
        ],
        principlesTitle: generalData?.principlesTitle || "Engineering Principles",
        principles: principles.length > 0 ? principles : [
          { title: "Automation First", body: "We eliminate toil. If a task is repeatable, it is automated. This ensures consistency and frees our engineers to solve creative problems." },
          { title: "Security by Default", body: "Security isn't a checkbox at the end—it's woven into every line of code we write and every architectural decision we make." },
          { title: "Pragmatic Innovation", body: "We don't chase hype. We apply new technologies like AI and Cloud-Native patterns only when they drive real business outcomes." }
        ],
        leadershipTitle: "Our Team",
        leaders: teamMembers.map(m => ({
          name: m.name,
          role: m.role,
          image: m.imageUrl || "/insights.jpg",
          bio: m.bio_en
        }))
      }
      : {
        who: generalData?.whoTitle || "हामी को हौं",
        heroTitle: "हाम्रो बारेमा",
        brand: "निन्जा इन्फोसिस",
        whoDesc:
          generalData?.whoDesc || "निन्जा इन्फोसिस एक आईटी प्राविधिक समाधान प्रदायक हो। हाम्रा समर्पित प्राविधिक पेशेवरहरूले ग्राहकहरूलाई आईटी परामर्श, सफ्टवेयर विकास, वेब/मोबाइल एप विकास, परियोजना-आधारित समाधान र आईटी प्रणाली मर्मतसम्भारमा सेवाहरू प्रदान गर्दछन्। सुरुदेखि नै हाम्रो लक्ष्य ग्राहकहरूसँग व्यावसायिक सम्बन्ध स्थापन गरी प्रभावकारी र भरपर्दो सूचना प्रविधि समाधानहरू उपलब्ध गराउनु हो।",
        features: features.length > 0 ? features.map(f => ({
          icon: ICON_MAP[f.icon] || Handshake,
          title: f.title,
          desc: f.desc,
        })) : [
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
        coreTitle: generalData?.coreTitle || "हाम्रो मूल",
        core: corePillars.length > 0 ? corePillars.map(c => ({
          icon: ICON_MAP[c.icon] || Eye,
          title: c.title,
          body: c.body,
        })) : [
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
        storyTitle: generalData?.storyTitle || "हाम्रो कथा",
        timeline: timelineEvents.length > 0 ? timelineEvents : [
          {
            year: "२०१६",
            title: "न्यानो सुरुवात",
            text: "उत्साही ईन्जिनियरहरूको एउटा सानो समूहद्वारा स्थापित, निन्जा इन्फोसिसले उच्च-कार्यक्षमता वेब प्रणालीहरू निर्माणमा केन्द्रित एक विशेष स्टुडियोको रूपमा आफ्नो यात्रा सुरु गर्यो।",
          },
          {
            year: "२०१८",
            title: "पहिलो फोर्च्यून ५००",
            text: "हामीले हाम्रो पहिलो 'फोर्च्यून ५००' ग्राहकसँग साझेदारी गर्दा यो एक महत्वपूर्ण उपलब्धि थियो। हामीे जटिल उद्यम वातावरणहरूमा आधुनिक विकासकर्ता अनुभवहरू र मजबुत प्रक्रियाहरू भित्र्याउँदै महत्वपूर्ण भुक्तानी र जोखिम प्लेटफर्महरूको आधुनिकीकरण गर्यौँ।",
          },
          {
            year: "२०२०",
            title: "प्लेटफर्म अभ्यास",
            text: "हामीले औपचारिक रूपमा हाम्रो 'प्लेटफर्म इन्जिनियरिङ' अभ्यास सुरु गर्यौँ। हाम्रो ध्यान साइट रिलायबिलिटी (SRE) र ठूला स्वचालित क्लाउड-नेटिभ पूर्वाधार निर्माणतर्फ केन्द्रित भयो, जसले ग्राहकहरूलाई सफ्टवेयर अझ छिटो र सुरक्षित रूपमा डेलिभर गर्न मद्दत गर्यो।",
          },
          {
            year: "२०२३",
            title: "डेटा र एआई",
            text: "व्यावहारिक एआईको क्षेत्रमा पाइला चाल्दै, हामीले उत्पादनहरूमा रिट्राइभल-अगमेन्टेड जेनेरेशन (RAG) र विशेष मूल्याङ्कन ढाँचाहरू एकीकृत गर्यौँ। हामी हाम्रा साझेदारहरूलाई एआई सुरक्षा र वास्तविक कार्यान्वयनको जटिलताहरू बुझ्न मद्दत गर्छौं।",
          },
          {
            year: "२०२५",
            title: "वैश्विक उपस्थिति",
            text: "समान सानो-टिम डीएनए र कला मानकसहित बहु-क्षेत्रीय डेलिभरी।",
          },
        ],
        principlesTitle: generalData?.principlesTitle || "इन्जिनियरिङ सिद्धान्तहरू",
        principles: principles.length > 0 ? principles : [
          { title: "स्वचालन पहिलो", body: "हामी कठिन कामहरू हटाउँछौं। यदि कुनै कार्य दोहोरिने खालको छ भने, त्यसलाई स्वचालित बनाइन्छ।" },
          { title: "पूर्वनिर्धारित सुरक्षा", body: "सुरक्षा अन्तिममा गरिने चेकबक्स होइन—यो हामीले लेख्ने कोड र हरेक वास्तुकला निर्णयमा बुनिएको हुन्छ।" },
          { title: "व्यावहारिक नवाचार", body: "हामी केवल चर्चाको पछि लाग्दैनौं। हामी एआई जस्ता नयाँ प्रविधिहरू प्रयोग गर्छौं जसले वास्तविक नतिजा दिन्छ।" }
        ],
        leadershipTitle: "हाम्रो टिम",
        leaders: teamMembers.map(m => ({
          name: m.name_ne || m.name,
          role: m.role_ne || m.role,
          image: m.imageUrl || "/insights.jpg",
          bio: m.bio_ne
        }))
      };
  }, [language, teamMembers, generalData, principles, timelineEvents, features, corePillars]);

  return (
    <>
      <Header />

      <main className="relative bg-background text-foreground transition-colors duration-300">
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-28 lg:pt-32">
            <div
              className="absolute inset-y-0 right-0 left-1/2 md:left-1/3 lg:left-1/4 bg-no-repeat mt-[100px] filter grayscale"
              style={
                bannerUrl
                  ? {
                    backgroundImage: `url('${bannerUrl}')`,
                    backgroundSize: "contain",
                    backgroundPosition: "center top",
                  }
                  : {}
              }
            />
            {/* Removed dark overlay so banner is visible */}

            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16">
              <div className="max-w-[1600px] text-left">
                <nav
                  aria-label="Breadcrumb"
                  className="mt-0 text-sm text-white"
                >
                  <ol className="flex items-center gap-3">
                    <li>
                      <Link
                        href="/"
                        className="font-medium tracking-wide hover:text-white/80"
                      >
                        {content.brand}
                      </Link>
                    </li>
                    <li aria-hidden className="inline-flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-white/70"
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

                <h1 className="pt-4 text-5xl font-heading font-semibold text-white sm:text-6xl text-left">
                  {content.heroTitle}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section id="who-we-are" className="relative isolate bg-background border-t border-foreground/10">
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

        <section id="our-core" className="relative z-10 bg-background">
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

        <section id="engineering-principles" className="relative z-10 bg-muted">
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

        <section id="leadership" className="relative z-10 bg-background overflow-hidden border-t border-foreground/5">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
            <div className="max-w-2xl mb-24">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#d52020] mb-6">
                {generalData?.leadershipSubtitle || (language === 'en' ? 'Leadership' : 'नेतृत्व')}
              </h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tighter"
              >
                {generalData?.leadershipTitle || (language === 'en' ? 'The minds behind the' : 'हाम्रो शिल्प पछाडिका')}{' '}
                <span className="text-[#d52020] italic">
                  {generalData?.leadershipHighlight || (language === 'en' ? 'craft' : 'मस्तिष्कहरू')}
                </span>
              </motion.h3>
            </div>
            
            <div className="space-y-40 lg:space-y-64">
              {content.leaders.map((leader, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx} 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center group">
                    <div className={`lg:col-span-5 flex ${isEven ? 'lg:justify-start' : 'lg:justify-end lg:order-last'}`}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-56 h-56 lg:w-96 lg:h-96 relative"
                      >
                         <div className="absolute inset-0 rounded-full border-8 border-[#d52020]/5 group-hover:border-[#d52020]/20 transition-all duration-700 -rotate-12 group-hover:rotate-0" />
                         <div className="w-full h-full rounded-full overflow-hidden border-2 border-foreground/5 shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-105">
                            <img 
                              src={leader.image} 
                              alt={leader.name} 
                              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-105 transition-all duration-1000 group-hover:scale-110"
                            />
                         </div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`lg:col-span-7 flex flex-col gap-6 ${isEven ? 'lg:pl-20' : 'lg:pr-20 lg:items-end lg:text-right'}`}
                    >
                       <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
                          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#d52020] mb-4">
                             {leader.role}
                          </span>
                          <h4 className="text-4xl lg:text-7xl font-heading font-medium text-foreground mb-6 tracking-tight italic">
                             {leader.name}
                          </h4>
                          <div className={`h-1 w-24 bg-[#d52020]/50 transition-all duration-700 group-hover:w-48 ${!isEven && 'origin-right'}`} />
                       </div>
                       
                       <div className="relative pt-4">
                          <Quote 
                            className={`absolute text-[#d52020]/10 ${isEven ? '-left-10 -top-2 rotate-180' : '-right-10 -top-2'}`} 
                            size={64} 
                          />
                          <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-xl font-light">
                             {leader.bio}
                          </p>
                       </div>
                       
                       <div className={`flex gap-6 mt-6 items-center w-full ${!isEven && 'flex-row-reverse'}`}>
                          <div className="flex gap-4">
                            <div className="h-12 w-12 border border-foreground/10 flex items-center justify-center hover:border-[#d52020] transition-all cursor-pointer text-foreground/40 hover:text-[#d52020] hover:bg-[#d52020]/5">
                               <Linkedin size={20} />
                            </div>
                            <div className="h-12 w-12 border border-foreground/10 flex items-center justify-center hover:border-[#d52020] transition-all cursor-pointer text-foreground/40 hover:text-[#d52020] hover:bg-[#d52020]/5">
                               <Mail size={20} />
                            </div>
                          </div>
                          <div className="h-px flex-grow bg-foreground/10" />
                       </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section 
          id="our-story" 
          ref={sectionRef}
          className="relative z-10 scroll-mt-28 bg-background overflow-hidden border-t border-foreground/5"
        >
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
              <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d52020] mb-6">
                    {generalData?.storySubtitle || (language === 'en' ? 'The Evolution' : 'विकासक्रम')}
                  </h2>
                  <h3 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tighter mb-8 italic">
                    {content.storyTitle.split(' ')[0]}<br />
                    <span className="pl-4 lg:pl-10 text-[#d52020]">{content.storyTitle.split(' ')[1]}</span>
                  </h3>
                  <div className="h-1 w-20 bg-[#d52020] mb-8" />
                  <p className="text-base lg:text-lg text-foreground/50 leading-relaxed max-w-sm font-light">
                    {generalData?.storyDesc || (language === 'en' 
                      ? "A decade of engineering excellence, scaling from a small studio to a global technical partner."
                      : "एक दशकको उत्कृष्ट इन्जिनियरिङ, सानो स्टुडियोबाट वैश्विक प्राविधिक साझेदारसम्मको यात्रा।")}
                  </p>
                  
                  <div className="hidden lg:block mt-12 relative h-48 w-px bg-foreground/10 ml-1">
                    <motion.div 
                      className="absolute top-0 left-0 w-full bg-[#d52020] origin-top"
                      style={{ scaleY: scrollYProgress }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-32 lg:space-y-48 pb-32 border-l border-foreground/5 lg:pl-16 ml-6 lg:ml-0">
                  {content.timeline.map((t, i) => (
                    <StoryItem 
                      key={t.year} 
                      t={t} 
                      i={i} 
                      scrollYProgress={scrollYProgress} 
                      language={language} 
                    />
                  ))}
                </div>
                
                <motion.div 
                  className="pt-24 border-t border-foreground/5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <p className="text-foreground/30 font-heading italic text-xl">
                    {generalData?.storyFooter || (language === 'en' ? 'To be continued...' : 'क्रमशः...')}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <GlobalCTA 
          onOfficesOpen={openOffices} 
          onBookingOpen={openBooking}
          onQuoteOpen={openQuote}
        />
      </main>

      <ContactModals 
        officesOpen={officesOpen}
        onOfficesClose={closeOffices}
        bookingOpen={bookingOpen}
        onBookingClose={closeBooking}
        quoteOpen={quoteOpen}
        onQuoteClose={closeQuote}
      />

      <Footer />
    </>
  );
}
