"use client"

import { useState } from "react"

interface TaxonomyProps {
  language: "en" | "ne"
}

export default function Taxonomy({ language }: TaxonomyProps) {
  const [activeTab, setActiveTab] = useState<"practices" | "solutions">("practices")
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const content =
    language === "en"
      ? {
          tabs: ["Practices", "Solutions"],
          practices: [
            { name: "Strategy", blurb: "Choices under real constraints—made legible and durable." },
            {
              name: "Transformation",
              blurb: "From initiatives to trajectory: shift the slope, not just the intercept.",
            },
            { name: "Technology", blurb: "Architecture, platforms, and ways of working that compound." },
            { name: "Operating Model", blurb: "The org behind the outcomes: accountability, cadence, clarity." },
            { name: "Risk", blurb: "Resilience designed in, not patched on." },
            { name: "People & Change", blurb: "Adoption at scale—where tools meet behavior." },
          ],
          solutions: [
            { name: "Financial Services", blurb: "Scale and trust in the same sentence." },
            { name: "Public Sector (e-Gov)", blurb: "Beyond portals: citizen-scale systems that feel human." },
            { name: "Energy", blurb: "Long-cycle bets, short-cycle delivery." },
            { name: "Health", blurb: "Care journeys designed as systems, not silos." },
            { name: "Consumer", blurb: "Attention is scarce; loyalty is earned in moments." },
            { name: "Telecom", blurb: "Networks as strategic assets, not just utilities." },
          ],
        }
      : {
          tabs: ["प्रयासहरू", "उद्योगहरू"],
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
        }

  const items = activeTab === "practices" ? content.practices : content.solutions

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-ni-graphite/5" aria-labelledby="taxonomy-title">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Tabs */}
        <div className="flex gap-4 sm:gap-6 mb-10 sm:mb-12 border-b border-ni-graphite/20 overflow-x-auto">
          {content.tabs.map((tab, idx) => {
            const tabKey = idx === 0 ? "practices" : "solutions"
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tabKey as "practices" | "solutions")
                  setSelectedItem(null)
                }}
                className={`pb-3 sm:pb-4 px-2 text-base sm:text-lg font-heading font-semibold transition-colors relative whitespace-nowrap ${
                  activeTab === tabKey ? "text-ni-ink" : "text-ni-slate hover:text-ni-ink"
                }`}
                aria-selected={activeTab === tabKey}
                role="tab"
                style={{ minHeight: "44px" }}
              >
                {tab}
                {activeTab === tabKey && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ni-accent" />}
              </button>
            )
          })}
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          {items.map((item: { name: string; blurb: string }) => (
            <button
              key={item.name}
              onClick={() => setSelectedItem(selectedItem === item.name ? null : item.name)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedItem === item.name
                  ? "bg-ni-accent text-white"
                  : "bg-white border border-ni-graphite/20 text-ni-graphite hover:border-ni-accent hover:text-ni-accent"
              }`}
              aria-pressed={selectedItem === item.name}
              style={{ minHeight: "44px" }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Blurb reveal */}
        {selectedItem && (
          <div className="p-6 sm:p-8 bg-white border border-ni-graphite/10 rounded-lg animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-ni-ink mb-2 sm:mb-3">{selectedItem}</h3>
            <p className="text-base sm:text-lg text-ni-slate leading-relaxed text-pretty">
              {items.find((i: { name: string; blurb: string }) => i.name === selectedItem)?.blurb}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
