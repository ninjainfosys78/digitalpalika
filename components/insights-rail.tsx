"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export type InsightCard = {
  title: string;
  deck: string;
  readTime: string;
  url: string;
  image: string;
};

interface InsightsRailProps {
  language?: "en" | "ne";
  insights?: InsightCard[] | null;
}

export default function InsightsRail({
  language: propLanguage,
  insights,
}: InsightsRailProps) {
  const { language: ctxLanguage } = useLanguage();
  const language = propLanguage ?? ctxLanguage ?? "en";

  const content =
    language === "en"
      ? {
          title: "Insights",
          viewAll: "View all insights",
          readMore: "Read more",
        }
      : {
          title: "इनसाइट्स",
          viewAll: "सबै इनसाइट्स हेर्नुहोस्",
          readMore: "थप पढ्नुहोस्",
        };

  const safeInsights: InsightCard[] = Array.isArray(insights) ? insights : [];

  return (
    <section
      id="insights"
      className="py-16 md:py-20 bg-black"
      aria-labelledby="insights-title"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <h2
            id="insights-title"
            className="text-[32px] leading-10 font-semibold text-[#e3e3e3]"
          >
            {content.title}
          </h2>

          <Link
            href="/blogs"
            className="hidden md:flex items-center gap-2 text-sm transition-colors flex-shrink-0 text-white hover:text-white/70 group"
          >
            {content.viewAll}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {safeInsights.map((insight, idx) => (
            <article
              key={insight.url}
              className={`group cursor-pointer ${
                idx === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Link
                href={insight.url}
                className="block h-full rounded-[2px] overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-neutral-900 shadow-[0_2px_8px_0_rgba(20,20,20,0.13)]"
              >
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale ${
                      idx === 0
                        ? "h-[280px] sm:h-[350px] md:h-[400px]"
                        : "h-[200px] sm:h-[240px]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
                </div>

                <div className={`p-5 sm:p-6 ${idx === 0 ? "md:p-8" : ""}`}>
                  {insight.readTime && (
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="flex items-center gap-1 text-xs text-[#e3e3e3]">
                        <Clock size={12} />
                        {insight.readTime}
                      </span>
                    </div>
                  )}

                  <h3
                    className={`font-semibold mb-2 sm:mb-3 text-balance transition-colors ${
                      idx === 0
                        ? "text-xl sm:text-2xl md:text-3xl"
                        : "text-lg sm:text-xl"
                    } text-[#e3e3e3]`}
                  >
                    {insight.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-pretty line-clamp-3 text-[#e3e3e3]">
                    {insight.deck}
                  </p>

                  <div className="flex items-center gap-2 mt-3 sm:mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-[#e3e3e3] underline">
                    {content.readMore}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center md:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm transition-colors text-white hover:text-white/70"
          >
            {content.viewAll}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
