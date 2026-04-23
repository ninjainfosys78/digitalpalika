"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export type InsightCard = {
  title: string;
  title_ne: string;
  deck: string;
  deck_ne: string;
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
      className="py-16 md:py-24"
      style={{ backgroundColor: '#121212ff', color: '#ffffff' }}
      aria-labelledby="insights-title"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <h2
            id="insights-title"
            className="text-[38px] md:text-[48px] leading-tight font-bold"
            style={{ color: '#ffffff' }}
          >
            {content.title}
          </h2>

          <Link
            href="/blogs"
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors flex-shrink-0 hover:opacity-70 group"
            style={{ color: '#ffffff' }}
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
              className={`group cursor-pointer ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
            >
              <Link
                href={insight.url}
                className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className={`relative overflow-hidden ${idx === 0 ? "flex-1" : ""}`}>
                  <img
                    src={insight.image || "/placeholder.jpg"}
                    alt={insight.title}
                    onError={(e) => {
                      const targ = e.currentTarget as HTMLImageElement;
                      if (!targ.src.endsWith("placeholder.jpg")) {
                        targ.src = "/placeholder.jpg";
                      }
                    }}
                    className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${idx === 0
                        ? "h-full min-h-[350px] md:min-h-[500px]"
                        : "h-[200px] sm:h-[240px]"
                      }`}
                  />
                </div>

                <div className={`p-5 sm:p-6 ${idx === 0 ? "md:p-8 md:pt-10 mt-auto" : ""}`}>
                  {insight.readTime && (
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        <Clock size={12} />
                        {insight.readTime}
                      </span>
                    </div>
                  )}

                  <h3
                    className={`font-bold mb-2 sm:mb-3 text-balance transition-colors ${idx === 0
                        ? "text-xl sm:text-2xl md:text-3xl"
                        : "text-lg sm:text-xl"
                      }`}
                    style={{ color: '#ffffff' }}
                  >
                    {language === "ne" ? (insight.title_ne || insight.title) : insight.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-pretty line-clamp-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {language === "ne" ? (insight.deck_ne || insight.deck) : insight.deck}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#ffffff' }}>
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
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: '#ffffff' }}
          >
            {content.viewAll}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
