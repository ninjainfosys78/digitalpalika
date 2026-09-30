"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { BlogItem } from "@/lib/dcm/dcmBlogs";

const DATE_LOCALES = { ne: "ne-NP", en: "en-US" } as const;

export function BlogCard({ blog }: { blog: BlogItem }) {
    const { t, lang } = useLanguage();
    const title = t(blog.title);
    const summary = t(blog.summary);
    const publishedDate = new Date(blog.publishedDate).toLocaleDateString(DATE_LOCALES[lang], { dateStyle: "long" });

    return (
        <Link href={`/blogs/${blog.slug}`} className="group block">
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#003893] to-[#0a5fd8]">
                    <span className="text-6xl font-bold text-white/80" aria-hidden>
                        {title.charAt(0)}
                    </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                    <time className="text-xs font-medium uppercase tracking-wide text-[#DC143C]">{publishedDate}</time>
                    <h2 className="text-xl font-semibold leading-snug text-[#003893]">{title}</h2>
                    {summary && <p className="line-clamp-3 text-sm text-gray-700">{summary}</p>}
                </div>
            </article>
        </Link>
    );
}
