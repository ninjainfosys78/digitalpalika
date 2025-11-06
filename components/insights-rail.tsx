"use client"

import { ArrowRight, Clock } from "lucide-react"

interface InsightsRailProps {
  language: "en" | "ne"
}

export default function InsightsRail({ language }: InsightsRailProps) {
  const content =
    language === "en"
      ? {
          title: "Insights",
          viewAll: "View all insights",
          insights: [
            {
              title: "From Paper to Platform: How Digital E-Palika Modernized Municipal Governance",
              deck: "New patterns in capital flows are reshaping competitive dynamics across emerging markets.",
              readTime: "8 min",
              url: "#",
              image: "/abstract-blue-geometric-network-pattern.jpg",
            },
            {
              title: "Reinventing Public Communication: How CMS Portals Are Making Governance Visible",
              deck: "The skills that make great educators often translate directly to strategic problem-solving.",
              readTime: "6 min",
              url: "#",
              image: "/diverse-professionals-collaboration.jpg",
            },
            {
              title: "Scaling Reliability: What Enterprises Forget About Multi-Region Architecture",
              deck: "Intelligent systems are transforming how we plan, book, and experience journeys.",
              readTime: "7 min",
              url: "#",
              image: "/futuristic-travel-technology-interface.jpg",
            },
          ],
        }
      : {
          title: "इनसाइट्स",
          viewAll: "सबै इनसाइट्स हेर्नुहोस्",
          insights: [
            {
              title: "कागजबाट प्लेटफर्ममा: डिजिटल ई-पालिका कसरी नगरपालिका शासनलाई आधुनिक बनाउँछ",
              deck: "पूँजी प्रवाहमा नयाँ ढाँचाले उदीयमान बजारहरूमा प्रतिस्पर्धात्मक गतिशीलता पुनर्निर्माण गर्दैछ।",
              readTime: "८ मिनेट",
              url: "#",
              image: "/abstract-blue-geometric-network-pattern.jpg",
            },
            {
              title: "सार्वजनिक सञ्चारको पुनः आविष्कार: CMS पोर्टलहरूले कसरी शासनलाई दृश्य बनाउँदैछन्",
              deck: "उत्कृष्ट शिक्षक बनाउने सीपहरू प्रायः रणनीतिक समस्या समाधानमा सीधै अनुवाद हुन्छन्।",
              readTime: "६ मिनेट",
              url: "#",
              image: "/diverse-professionals-collaboration.jpg",
            },
            {
              title: "विश्वसनीयता स्केल गर्दै: उद्यमहरूले बहु-क्षेत्र वास्तुकलाबारे के बिर्सन्छन्",
              deck: "बुद्धिमान प्रणालीहरूले हामी कसरी योजना बनाउँछौं, बुक गर्छौं र यात्रा अनुभव गर्छौं भन्ने कुरा परिवर्तन गर्दैछन्।",
              readTime: "७ मिनेट",
              url: "#",
              image: "/futuristic-travel-technology-interface.jpg",
            },
          ],
        }

  return (
    <section id="insights" className="py-16 md:py-20 bg-black" aria-labelledby="insights-title">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <h2
            id="insights-title"
            className="text-[32px] leading-10 font-semibold text-[#e3e3e3]"
          >
            {content.title}
          </h2>
          <a
            href="blogs"
            className="hidden md:flex items-center gap-2 text-sm transition-colors flex-shrink-0 text-[#e3e3e3] hover:text-neutral-900 group"
          >
            {content.viewAll}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {content.insights.map((insight, idx) => (
            <article key={idx} className={`group cursor-pointer ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <a
                href={insight.url}
                className="block h-full rounded-[2px] overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-neutral-900 shadow-[0_2px_8px_0_rgba(20,20,20,0.13)]"
              >
                <div className="relative overflow-hidden bg-red-700/5">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt=""
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale ${
                      idx === 0 ? "h-[280px] sm:h-[350px] md:h-[400px]" : "h-[200px] sm:h-[240px]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
                </div>

                <div className={`p-5 sm:p-6 ${idx === 0 ? "md:p-8" : ""}`}>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span className="flex items-center gap-1 text-xs text-[#e3e3e3]">
                      <Clock size={12} />
                      {insight.readTime}
                    </span>
                  </div>
                  <h3
                    className={`font-semibold mb-2 sm:mb-3 text-balance transition-colors ${
                      idx === 0 ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl"
                    } text-[#e3e3e3] group-hover:text-[#e3e3e3]`}
                  >
                    {insight.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty line-clamp-3 text-[#e3e3e3]">
                    {insight.deck}
                  </p>
                  <div className="flex items-center gap-2 mt-3 sm:mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-[#e3e3e3] underline">
                    Read more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center md:hidden">
          <a
            href="#insights"
            className="inline-flex items-center gap-2 text-sm transition-colors text-[#d52020] hover:text-[#782121]"
          >
            {content.viewAll}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
