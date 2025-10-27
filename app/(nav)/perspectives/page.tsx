"use client"

import { useState } from "react"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import SearchOverlay from "@/components/search-overlay"
import Link from "next/link"

export default function PerspectivesPage() {
  const [language, setLanguage] = useState<"en" | "ne">("en")
  const [searchOpen, setSearchOpen] = useState(false)

  const content =
    language === "en"
      ? {
          breadcrumb: "Perspective | Ninja Infosys",
          title: "Our purpose, mission & values",
          intro1:
            "We help leaders make distinctive, lasting improvements in performance and build resilient systems that scale with clarity, regulation, and real-world complexity. We’re product engineers at heart: small senior teams, strong practices, clear outcomes.",
          intro2:
            "At Ninja Infosys, our values evolve with the world but stay anchored in craft, evidence, and integrity. They guide our long-term strategy, the way we partner with clients every day, and how we grow our people.",
          values: [
            {
              heading: "Adhere to the highest professional standards",
              bullets: [
                "Put client and user outcomes ahead of our firm’s convenience",
                "Maintain high standards for security, privacy, and reliability",
                "Act with integrity always",
                "Preserve confidences and protect data",
                "Bring independent, evidence-based perspectives",
                "Steward time and resources with care",
              ],
            },
            {
              heading: "Improve our clients’ performance significantly",
              bullets: [
                "Work shoulder-to-shoulder with leadership and teams",
                "Pursue holistic impact strategy, product, and organization",
                "Use our global network to bring the best of Ninja Infosys",
                "Introduce practical innovations not novelty for its own sake",
                "Build capabilities that last beyond our engagement",
                "Form long-term partnerships grounded in trust",
              ],
            },
            {
              heading: "Create an unrivaled environment for exceptional people",
              bullets: [
                "Be non-hierarchical, kind, and inclusive",
                "Sustain a caring meritocracy that celebrates craft",
                "Grow through apprenticeship, feedback, and mentorship",
                "Embrace diverse perspectives with curiosity and respect",
                "Govern ourselves as a “one team” partnership",
              ],
            },
          ],
        }
      : {
          breadcrumb: "परिप्रेक्ष्य | Ninja Infosys",
          title: "हाम्रो उद्देश्य, मिशन र मूल्यहरू",
          intro1:
            "हामी नेताहरूलाई प्रदर्शनमा विशिष्ट र दीर्घकालीन सुधार गर्न मद्दत गर्छौं र स्पष्टता, नियम, र वास्तविक-विश्व जटिलतासँग मिल्ने लचिलो प्रणालीहरू निर्माण गर्छौं। हामी मुटुमा उत्पाद इन्जिनियर हौं: साना वरिष्ठ टोलीहरू, बलियो अभ्यासहरू, स्पष्ट परिणामहरू।",
          intro2:
            "Ninja Infosys मा, हाम्रा मूल्यहरू संसारसँग विकसित हुन्छन् तर सीप, प्रमाण, र इमानदारीमा अडिग रहन्छन्। तिनीहरूले हाम्रो दीर्घकालीन रणनीति, हाम्रा दैनिक साझेदारिहरू, र हाम्रो मानिसहरूको विकासलाई मार्गदर्शन गर्छन्।",
          values: [
            {
              heading: "उच्चतम पेशागत मानकहरू पालना गर्नु",
              bullets: [
                "क्लाइन्ट र प्रयोगकर्ता नतिजालाई हाम्रो संस्थाको सुविधाभन्दा अघि राख्नु",
                "सुरक्षा, गोपनीयता, र विश्वसनीयताका उच्च मानकहरू कायम राख्नु",
                "सधैं इमानदार र नैतिक रूपमा कार्य गर्नु",
                "विवरणहरू सुरक्षित राख्नु र डाटा संरक्षण गर्नु",
                "स्वतन्त्र, प्रमाण-आधारित दृष्टिकोण ल्याउनु",
                "समय र स्रोतहरूलाई विचारपूर्वक व्यवस्थापन गर्नु",
              ],
            },
            {
              heading: "हाम्रा क्लाइन्टहरूको प्रदर्शन उल्लेखनीय रूपमा सुधार गर्नु",
              bullets: [
                "नेतृत्व र टोलीसँग नजिकबाट काम गर्नु",
                "समग्र प्रभाव रणनीति, उत्पादन, र संगठनको खोजी गर्नु",
                "हाम्रो विश्वव्यापी नेटवर्क प्रयोग गरेर उत्तम स्रोत ल्याउनु",
                "नवीनता जसले व्यवहारिक लाभ दिन्छ, न की मात्र नयाँपनका लागि",
                "हामीले गरेको संलग्नताको बाहिर पनि टिक्ने क्षमता निर्माण गर्नु",
                "विश्वासमा आधारित दीर्घकालीन साझेदारीहरू बनाउनु",
              ],
            },
            {
              heading: "उत्कृष्ट व्यक्तिहरूका लागि अनुपम वातावरण सिर्जना गर्नु",
              bullets: [
                "अर्ध-हाइरार्चिकल होइन, दयालु र समावेशी हुनु",
                "कसरी काम गर्नेमा निपुणतालाई सम्मान गर्ने दयालु मेरिटोक्रेसी कायम गर्नु",
                "अप्रेन्टिसशिप, प्रतिक्रिया, र मार्गदर्शनमार्फत बढ्नु",
                "जिज्ञासा र सम्मानका साथ विविध दृष्टिकोणहरू स्वीकार्नु",
                "आफ्नो संगठनलाई 'एक टिम' साझेदारीको रूपमा शासित गर्नु",
              ],
            },
          ],
        }

  return (
    <>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        
      />
      <AnnouncementBar language={language} />

      <main className="bg-white text-ni-ink">
        {/* KEEP: generous spacer for fixed header */}
        <div className="h-30 md:h-40" />

        {/* ONE container + ONE two-column grid for the whole page */}
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-14">
            {/* ===================== LEFT COLUMN ===================== */}
            <div className="min-w-0">
              {/* KEEP: breadcrumb + natural gaps */}
              <p className="text-xs tracking-[0.2em] text-ni-ink/60 uppercase">{content.breadcrumb}</p>

              {/* Intro block — keep spacing between title, subtitle, paragraphs */}
              <section className="mt-5 space-y-6">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl leading-tight">{content.title}</h1>

                <div className="mt-5">
                  <p className="text-lg leading-relaxed text-ni-ink/80">{content.intro1}</p>
                </div>

                <div className="mt-8">
                    <p className="text-lg leading-relaxed text-ni-ink/70">{content.intro2}</p></div>
              </section>

              {/* Continuous content below; gaps preserved via space-y */}
              <section className="mt-16 lg:mt-20 space-y-16 lg:space-y-20">
                {/* Our purpose */}
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">{language === 'en' ? 'Our purpose' : 'हाम्रो उद्देश्य'}</h2>
                  <div className="mt-5">
                    <p className="text-lg text-ni-ink/80 leading-relaxed">{language === 'en' ? 'To create positive, enduring change by shipping trustworthy systems, strengthening teams, and making technology feel simple and humane.' : 'भरपर्दो प्रणालीहरू प्रदान गरेर सकारात्मक, दीर्घकालीन परिवर्तन सिर्जना गर्नु—टिमहरूलाई सक्षम बनाउनु र प्रविधिलाई सरल र मानवीय बनाउनु।'}</p>
                  </div>
                </div>

                {/* Our mission */}
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">{language === 'en' ? 'Our mission' : 'हाम्रो मिशन'}</h2>
                  <div className="mt-5">
                    <p className="text-lg text-ni-ink/80 leading-relaxed">{language === 'en' ? 'Help ambitious organizations grow intelligently, operate efficiently, and innovate responsibly. We combine data, design, and disciplined engineering so leaders can think clearly, act decisively, and perform sustainably.' : 'महत्त्वाकांक्षी संस्थाहरूलाई बुद्धिमानीपूर्वक विकास गर्न, कुशलतापूर्वक सञ्चालन गर्न, र जिम्मेवार रूपमा नवप्रवर्तन गर्न मद्दत गर्नु। हामी डेटा, डिजाइन, र अनुशासित इन्जिनियरिङ मिलाएर नेताहरूलाई स्पष्ट सोच्न, निर्णयात्मक रूपमा कार्य गर्न, र दीर्घकालीन प्रदर्शन गर्न सक्षम पार्छौं।'}</p>
                  </div>
                </div>

                {/* Our values */}
                <div className="space-y-8">
                  <div className="mb-7">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">{language === 'en' ? 'Our values' : 'हाम्रा मूल्यहरू'}</h2>
                  </div>

                    <div className="space-y-10">
                      {content.values.map((block) => (
                        <div key={block.heading} className="pb-5">
                          <h3 className="font-heading text-2xl sm:text-3xl">{block.heading}</h3>
                          <ul className="mt-8 space-y-3 text-lg text-ni-ink/60">
                            {block.bullets.map((b) => (
                              <li key={b} className="list-disc ml-6">{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                </div>
              </section>
            </div>

            {/* ===================== RIGHT COLUMN ===================== */}
            <aside className="min-w-0">
              <div className="mt-2 mb-5 h-px w-full bg-ni-ink/15" />

              <div className="space-y-12">
                <section aria-labelledby="history-title" className="space-y-4">
                 <div className="mb-5">
                   <h3 id="history-title" className="text-xs tracking-[0.2em] text-ni-ink/70 uppercase">{language === 'en' ? 'Our history' : 'हाम्रो इतिहास'}</h3>
                 </div>

                  <div className="w-full overflow-hidden border border-ni-ink/10 shadow-sm">
                    <img src="/History.jpg" alt={language === 'en' ? 'History of our firm' : 'हाम्रो संस्थाको इतिहास'} className="w-full h-[260px] object-cover" />
                  </div>

                  <div>
                    <div className="mt-8 mb-5">
                      <Link href={{ pathname: "/about", hash: "our-story" }} className="inline-flex items-center gap-2 text-ni-ink hover:text-ni-accent transition-colors font-semibold text-2xl leading-tight">
                      {language === 'en' ? 'History of our firm' : 'हाम्रो संस्थाको इतिहास'}
                      <span aria-hidden className="text-3xl leading-none">›</span>
                    </Link>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ni-ink/70">{language === 'en' ? 'Learn how Ninja Infosys grew from an engineering studio into a partner for large-scale, human-centered transformation.' : 'जान्नुहोस् कि कसरी Ninja Infosys एउटा इन्जिनियरिङ स्टुडियोबाट ठूला, मानव-केंद्रित परिवर्तनका साझेदारमा विकास भयो।'}</p>
                  </div>
                </section>

                <section aria-labelledby="coc-title" className="space-y-4">
              <div className="mt-2 mb-5 h-px w-full bg-ni-ink/15" />

                  <div className="mb-5">
                    <h3 id="coc-title" className="text-xs tracking-[0.2em] text-ni-ink/70 uppercase">{language === 'en' ? 'Our code of conduct' : 'हाम्रो आचार संहिता'}</h3>
                  </div>

                  <div className="w-full overflow-hidden border border-ni-ink/10 shadow-sm">
                    <img src="/Codeofconduct.jpg" alt={language === 'en' ? 'Our code of conduct' : 'हाम्रो आचार संहिता'} className="w-full h-[260px] object-cover" />
                  </div>

                  <div>
                    <div className="mt-8 mb-5">
                      <a role="button" tabIndex={0} className="inline-flex items-center gap-2 text-ni-ink hover:text-ni-accent transition-colors font-semibold text-2xl leading-tight">
                      {language === 'en' ? 'Our code of conduct' : 'हाम्रो आचार संहिता'}
                      <span aria-hidden className="text-2xl leading-none">›</span>
                    </a>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ni-ink/70">{language === 'en' ? 'Principles that keep our work ethical, secure, inclusive, and reliable across people, process, and product.' : 'नीतिहरू जसले हाम्रो कामलाई नैतिक, सुरक्षित, समावेशी, र भरपर्दो बनाउँछन्—मानिसहरू, प्रक्रियाहरू, र उत्पादनभरि।'}</p>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
      />
      <Footer language={language} />
    </>
  )
}
