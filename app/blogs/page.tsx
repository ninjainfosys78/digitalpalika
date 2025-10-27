"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SearchOverlay from "@/components/search-overlay";
import Link from "next/link";

export default function BlogsPage() {
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  type Post = {
    title: string;
    deck: string;
    readTime: string;
    url: string;
    kicker: string;
    date: string;
    image: string;
    inside?: string[];
    collection?: string;
    content?: string;
  };

  type LanguageContent = {
    hero: { kicker: string; title: string };
    posts: Post[];
    newsletter: {
      kicker: string;
      title: string;
      desc: string;
      note: string;
      placeholder: string;
      button: string;
    };
    tags?: string[];
  };

  const content: Record<"en" | "ne", LanguageContent> = {
    en: {
      hero: {
        kicker: "Field Notes",
        title: "BLOGS",
      },
      posts: [
        {
          title: "Operating through uncertainty: the discipline of ambition",
          deck: "Why the best operators raise their sights precisely when signals feel noisy.",
          readTime: "6 min read",
          url: "perspective",
          kicker: "Perspective",
          date: "January 14, 2025",
          image: "/blog1.png",
          inside: [
            "How leaders can keep ambition steady when signals feel noisy.",
            "Frameworks for sensing change without overreacting to volatility.",
            "Operating rhythms that protect execution during strategy shifts.",
          ],
          collection: "Part of the Leadership Under Uncertainty collection",
          content:
            "In a world filled with uncertainty, ambition must remain constant. Leaders who thrive are those who balance adaptability with long-term vision. By maintaining a disciplined rhythm and focusing on execution, teams can navigate uncertainty without losing momentum.",
        },
        {
          title:
            "Systems at national scale: lessons from digital public infrastructure",
          deck:
            "Trust, uptime, and the human experience of services—designed together.",
          readTime: "7 min read",
          url: "publicsector",
          kicker: "Public Sector",
          date: "January 6, 2025",
          image: "/blog2.jpg",
          content:
            "Digital public infrastructure requires careful balance between reliability and inclusiveness. Building trust at scale means ensuring uptime, transparency, and accessibility across all layers of government services.",
        },
        {
          title: "AI confidence: where to lean in—and where to wait",
          deck:
            "Practical thresholds for value, risk, and organizational readiness.",
          readTime: "5 min read",
          url: "boardbrief",
          kicker: "Board Brief",
          date: "December 20, 2024",
          image: "/blog3.jpg",
          content:
            "AI confidence is about knowing when your organization is ready to integrate intelligent systems responsibly. Leaders should focus on areas with clear value creation and ethical safeguards.",
        },
        {
          title: "The choreography of change",
          deck:
            "How to move complex organizations without breaking the rhythm of delivery.",
          readTime: "8 min read",
          url: "operatingmodel",
          kicker: "Operating Model",
          date: "December 12, 2024",
          image: "/blog4.jpg",
          content:
            "Organizational transformation is a dance — too fast, and you lose stability; too slow, and you lose momentum. The key is aligning operational rhythm with change initiatives.",
        },
        {
          title: "Resilience as a product",
          deck: "Designing for graceful failure and fast recovery at citizen scale.",
          readTime: "6 min read",
          url: "technology",
          kicker: "Technology",
          date: "November 28, 2024",
          image: "/blog5.jpg",
          content:
            "Resilience isn't an add-on — it's a design principle. Systems that anticipate failure are better equipped to recover quickly and maintain trust among users.",
        },
        {
          title: "Closing the knowing–doing gap in transformation",
          deck:
            "Why the boldest plans drift—and how to anchor them in frontline reality from week one.",
          readTime: "9 min read",
          url: "transformation",
          kicker: "Transformation",
          date: "November 5, 2024",
          image: "/blog6.jpg",
          content:
            "Most transformations fail not due to poor strategy but due to execution gaps. Aligning plans with real-world workflows ensures consistent and measurable progress.",
        },
        {
          title: "Building Trust in Remote Teams",
          deck: "Strategies for fostering collaboration and accountability online.",
          readTime: "7 min read",
          url: "remoteteams",
          kicker: "Teamwork",
          date: "October 22, 2024",
          image: "/blog7.jpg",
          content:
            "Remote teams thrive on trust and clear communication. Leaders must set expectations and use digital tools to keep everyone aligned and engaged.",
        },
        {
          title: "Data Privacy in the Age of AI",
          deck: "Balancing innovation with user protection.",
          readTime: "6 min read",
          url: "dataprivacy",
          kicker: "Privacy",
          date: "October 10, 2024",
          image: "/blog8.jpg",
          content:
            "As AI systems become more pervasive, organizations must prioritize data privacy and transparency to maintain user trust.",
        },
        {
          title: "Scaling Startups Sustainably",
          deck: "Growth tactics that don’t burn out your team.",
          readTime: "8 min read",
          url: "scalingstartups",
          kicker: "Startups",
          date: "September 28, 2024",
          image: "/blog9.jpg",
          content:
            "Sustainable scaling means balancing rapid growth with team well-being and operational stability.",
        },
        {
          title: "Design Thinking for Public Services",
          deck: "How empathy-driven design improves citizen experience.",
          readTime: "5 min read",
          url: "designthinking",
          kicker: "Design",
          date: "September 15, 2024",
          image: "/blog10.jpg",
          content:
            "Design thinking puts citizens at the center of public service innovation, leading to better outcomes and satisfaction.",
        },
      ],
      newsletter: {
        kicker: "Stay in cadence",
        title: "Get our monthly briefing on strategy, tech, and transformation.",
        desc: "Sign up for a curated summary of the latest perspectives, case stories, and tools we are using with clients across the region—no noise, just what you can apply.",
        note: "We respect your inbox. One update each month, plus occasional invites to closed-door sessions.",
        placeholder: "your.email@example.com",
        button: "Join the list",
      },
    },
    ne: {
      hero: {
        kicker: "क्षेत्रीय नोटहरू",
        title: "ब्लगहरू",
      },
      tags: ["सबै", "रणनीति", "रूपान्तरण", "प्रविधि", "सार्वजनिक क्षेत्र", "जोखिम"],
      posts: [],
      newsletter: {
        kicker: "तालमा रहनुहोस्",
        title: "रणनीति, प्रविधि, र रूपान्तरणमा हाम्रो मासिक जानकारी प्राप्त गर्नुहोस्।",
        desc: "ताजा दृष्टिकोण, केस कथाहरू, र उपकरणहरूको छनोट गरिएको सारांश — कुनै अनावश्यक कुरा होइन, केवल उपयोगी सामग्री।",
        note: "हामी तपाईंको इनबक्सको सम्मान गर्छौं। प्रत्येक महिनामा एउटा अद्यावधिक मात्र।",
        placeholder: "तपाईंको इमेल ठेगाना",
        button: "सूचीमा सामेल हुनुहोस्",
      },
    },
  };

  content.ne.posts = content.en.posts;

  const t = content[language];
  const allPosts = t.posts;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const paginatedPosts = allPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const toNepaliNumber = (num: number) => {
    const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return num
      .toString()
      .split("")
      .map((d) => (/\d/.test(d) ? nepaliDigits[parseInt(d)] : d))
      .join("");
  };

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="relative bg-white text-[#0B0D12]">
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-24 lg:pt-28">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: "url('/insights.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_20%,rgba(15,98,254,0.25),transparent_60%),radial-gradient(600px_300px_at_85%_70%,rgba(122,90,248,0.2),transparent_60%)]" />
            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
              <div className="max-w-[1200px] text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  <span>{t.hero.kicker}</span>
                </p>
                <h1 className="mt-4 text-5xl font-heading font-semibold text-white sm:text-6xl text-left">
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
              </div>
            </div>
          </div>
        </section>

        {selectedPost ? (
          <section className="py-16 px-4 sm:px-10 max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 text-sm text-ni-accent hover:text-ni-accent-2"
            >
              ← {language === "ne" ? "सबै ब्लगहरूमा फर्कनुहोस्" : "Back to all posts"}
            </button>
            <div className="w-full flex items-center justify-center bg-white overflow-hidden mb-6" style={{ height: "300px" }}>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                style={{ height: "300px" }}
              />
            </div>
            <span className="inline-flex w-fit bg-ni-accent/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ni-accent mb-4 rounded">
              {selectedPost.kicker}
            </span>
            <h2 className="text-4xl font-heading font-semibold mb-3">
              {selectedPost.title}
            </h2>
            <div className="text-sm text-ni-slate/70 mb-2">
              {selectedPost.date} • {selectedPost.readTime}
            </div>
            <p className="text-lg text-ni-slate/80 mb-6">{selectedPost.deck}</p>
            {selectedPost.inside && selectedPost.inside.length > 0 && (
              <div className="mb-8 rounded border border-ni-accent/40 bg-ni-accent/5 px-6 py-4">
                <ul className="list-disc pl-5 space-y-1 text-ni-ink">
                  {selectedPost.inside.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="prose prose-lg max-w-none text-ni-ink leading-relaxed">
              {selectedPost.content}
            </div>
          </section>
        ) : (
          <>
            <section className="py-12">
              <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
                <div className="grid gap-8 md:grid-cols-3">
                  {paginatedPosts.map((post) => (
                    <div
                      key={post.title}
                      onClick={() => setSelectedPost(post)}
                      className="group cursor-pointer flex flex-col h-full bg-white border border-black transition-all duration-200 hover:border-ni-accent/40"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-ni-slate/50 px-6 pt-6 pb-2">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="w-full bg-white overflow-hidden" style={{ height: "200px" }}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          style={{ height: "200px" }}
                        />
                      </div>
                      <div className="flex-1 flex flex-col px-6 py-5">
                        <span className="inline-flex w-fit bg-ni-accent/10 px-2 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-ni-accent mb-3 rounded">
                          {post.kicker}
                        </span>
                        <h3 className="text-lg sm:text-xl font-heading font-semibold text-ni-ink group-hover:text-ni-accent transition-colors mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-ni-slate/80 leading-relaxed line-clamp-3 mb-2">
                          {post.deck}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-black bg-white text-black disabled:opacity-50"
                  >
                    {language === "ne" ? "अघिल्लो" : "Previous"}
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 border border-black ${
                        currentPage === i + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {language === "ne" ? toNepaliNumber(i + 1) : i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-black bg-white text-black disabled:opacity-50"
                  >
                    {language === "ne" ? "अर्को" : "Next"}
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {!selectedPost && (
          <section className="py-20">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
              <div className="relative overflow-hidden border border-ni-graphite/10 bg-ni-graphite text-ni-paper">
                <div
                  className="absolute inset-0 opacity-[0.16]"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(15,98,254,0.8), transparent 60%)",
                  }}
                />
                <div className="relative z-10 space-y-6 px-8 py-12 sm:px-12 sm:py-16">
                  <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-ni-accent">
                    <span className="size-1.5 bg-ni-accent" />
                    {t.newsletter.kicker}
                  </span>

                  <h2 className="text-3xl pb-2 sm:text-4xl font-heading font-semibold">
                    {t.newsletter.title}
                  </h2>

                  <p className="max-w-2xl py-4 text-base text-ni-paper/70">
                    {t.newsletter.desc}
                  </p>

                  <form className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      placeholder={t.newsletter.placeholder}
                      className="w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-ni-paper placeholder:text-ni-paper/40 focus:border-ni-accent focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-ni-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ni-accent-2"
                    >
                      {t.newsletter.button}
                    </button>
                  </form>

                  <p className="text-xs text-ni-paper/50">{t.newsletter.note}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer language={language} />
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
      />
    </>
  );
}
