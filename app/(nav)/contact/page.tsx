"use client"

import { useState } from "react"
import Link from "next/link"

import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import SearchOverlay from "@/components/search-overlay"
import Hero from "@/components/hero"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "ne">("en")
  const [searchOpen, setSearchOpen] = useState(false)

  const t =
    language === "en"
      ? {
          formTitle: "Send us an inquiry",
          name: "Name",
          email: "Email",
          message: "Message",
          required: "*",
          send: "Send inquiry",
          mapTitle: "Where to find us",
          mapCaption: "Ninja Infosys, Anamnagar, Kathmandu, Nepal",
        }
      : {
          formTitle: "हामीलाई सोधपुछ पठाउनुहोस्",
          name: "नाम",
          email: "इमेल",
          message: "सन्देश",
          required: "*",
          send: "अनुरोध पठाउनुहोस्",
          mapTitle: "हामी कहाँ छौं",
          mapCaption: "निन्जा इन्फोसिस, अनामनगर, काठमाडौं, नेपाल",
        }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    }
    console.log("Inquiry:", payload)
    alert(language === "en" ? "Thanks! We’ll get back to you shortly." : "धन्यवाद! हामी छिट्टै सम्पर्क गर्नेछौं।")
    e.currentTarget.reset()
  }

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage}  />
      <AnnouncementBar language={language} />

  <Hero language={language} showContent={false}>
    <div className="relative z-10 max-w-[1200px] mx-auto px-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: inquiry form inside white square-edge card */}
            <div>
              <div className="bg-white rounded-none p-8 shadow">
                <div className="mb-7">
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#0B0D12] text-start mb-4">{t.formTitle}</h2>
                </div>
                <form onSubmit={onSubmit} className="grid gap-5">
                  <label className="block">
                    <span className="mb-2 block text-sm text-gray-700 text-start">{t.name}</span>
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="w-full  border border-gray-200 bg-white px-2 py-2 text-black placeholder-gray-400 outline-none transition-colors duration-150 hover:border-ni-accent hover:text-ni-accent focus:border-ni-accent focus:text-ni-accent"
                      placeholder={t.name}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-gray-700 text-start">
                      {t.email}
                      <span className="text-ni-accent">{t.required}</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full border border-gray-200 bg-white px-2 py-2 text-black placeholder-gray-400 outline-none transition-colors duration-150 hover:border-ni-accent hover:text-ni-accent focus:border-ni-accent focus:text-ni-accent"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-gray-700 text-start">
                      {t.message}
                      <span className="text-ni-accent">{t.required}</span>
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={8}
                      className="w-full  border border-gray-200 bg-white px-2 py-2 text-black placeholder-gray-400 outline-none transition-colors duration-150 hover:border-ni-accent hover:text-ni-accent focus:border-ni-accent focus:text-ni-accent"
                      placeholder={t.message}
                    />
                  </label>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center  bg-ni-accent px-4 py-2 font-semibold text-white transition-colors hover:bg-ni-accent-2"
                    >
                      {t.send}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: map  */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white text-start mb-4">{t.mapTitle}</h2>
              <div className="mt-3 mb-5">
                <p className="text- text-start text-gray-300">{t.mapCaption}</p>
              </div>
              <div className="overflow-hidden rounded-none border border-gray-200">
                <iframe
                  title="Anamnagar map"
                  src={"https://www.google.com/maps?q=Anamnagar%20Kathmandu%20Nepal&output=embed"}
                  style={{ width: '100%', height: '420px', border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
      </div>
  </Hero>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} language={language} />
      <Footer language={language} />
    </>
  )
}
