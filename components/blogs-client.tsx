"use client"
import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"
import type { PostMeta } from "@/lib/posts"

// Use a minimal client-side post shape to avoid importing server-only modules
type ClientPost = {
  slug: string
  title: string
  image?: string
  date?: string
  deck?: string
  excerpt?: string
}

type Post = ClientPost | PostMeta

interface BlogsClientProps {
  posts: Post[]
  initialLanguage?: "en" | "ne"
}

export default function BlogsClient({ posts }: BlogsClientProps) {
  const { language } = useLanguage()

  const labels = {
    insights: language === "en" ? "Insights" : "इनसाइट्स",
    readMore: language === "en" ? "Read more" : "थप पढ्नुहोस्",
    home: language === "en" ? "Ninja Infosys" : "निन्जा इन्फोसिस",
  }

  return (
    <main className="relative bg-black text-white">
      {/* Hero */}
      <section className="relative z-10">
        <div className="relative min-h-[44vh] pt-24 lg:pt-28">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60"
            style={{ backgroundImage: "url('/insights.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="max-w-[1200px] text-left">
              <nav aria-label="Breadcrumb" className="mt-4 text-sm text-white/80">
                <ol className="flex items-center gap-3">
                  <li>
                    <Link href="/" className="font-medium tracking-wide hover:text-gray-200">
                      {labels.home}
                    </Link>
                  </li>
                  <li aria-hidden className="inline-flex items-center text-white/70">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </li>
                  <li className="font-medium tracking-wide">{labels.insights}</li>
                </ol>
              </nav>
              <h1 className="mt-4 text-5xl font-heading font-semibold text-white sm:text-6xl">
                {labels.insights}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-10 lg:py-12">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <div
                key={(post as any).slug}
                className="group flex h-full flex-col border border-white/10 bg-[#0B0D12] transition-colors duration-200 hover:border-gray-200"
              >
                {/* Image */}
                <div className="w-full overflow-hidden bg-black">
                  {(post as any).image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={(post as any).image}
                      alt={(post as any).title}
                      className="h-[220px] w-full object-cover grayscale transition duration-300 group-hover:grayscale"
                    />
                  )}
                </div>

                {/* Meta & Deck */}
                <div className="flex-1 px-6 py-5">
                  <h3 className="mb-2 line-clamp-2 font-heading text-xl font-semibold text-white hover:text-gray-200">
                    <Link href={`/blogs/${(post as any).slug}`}>{(post as any).title}</Link>
                  </h3>

                  {(post as any).date && (
                    <div className="pt-3 mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      {(post as any).date}
                    </div>
                  )}

                  {(post as any).deck && (
                    <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-white/70">{(post as any).deck}</p>
                  )}
                </div>

                {/* Read More */}
                <div className="px-6 pb-6">
                  <Link
                    href={`/blogs/${(post as any).slug}`}
                    className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-red-700 transition"
                  >
                    {labels.readMore}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
