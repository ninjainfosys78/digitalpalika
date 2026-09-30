"use client";

import { Fragment } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { useBlog } from "@/hooks/useBlog";

const DATE_LOCALES = { ne: "ne-NP", en: "en-US" } as const;

export default function BlogDetailPageContent({ slug }: { slug: string }) {
    const { t, lang } = useLanguage();
    const { blog, loading } = useBlog(slug);

    return (
        <Fragment>
            <Header />
            <main className="bg-white min-h-screen">
                <div className="max-w-3xl mx-auto px-4 py-12">
                    <Breadcrumb
                        items={[
                            { label: t({ en: "Home", ne: "गृहपृष्ठ" }), href: "/" },
                            { label: t({ en: "Blogs", ne: "ब्लगहरू" }), href: "/blogs" },
                            { label: blog ? t(blog.title) : t({ en: "Blog", ne: "ब्लग" }) },
                        ]}
                    />

                    {!loading && !blog && (
                        <p className="mt-10 text-center text-gray-500">
                            {t({ en: "Blog not found.", ne: "ब्लग फेला परेन।" })}
                        </p>
                    )}

                    {blog && (
                        <article className="mt-6 flex flex-col gap-4">
                            <time className="text-xs font-medium uppercase tracking-wide text-[#DC143C]">
                                {new Date(blog.publishedDate).toLocaleDateString(DATE_LOCALES[lang], { dateStyle: "long" })}
                            </time>
                            <h1 className="text-3xl font-bold text-[#003893]">{t(blog.title)}</h1>
                            {blog.imageUrls.map(url => (
                                // Signed storage URLs are not in next/image remotePatterns.
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={url} src={url} alt={t(blog.title)} className="w-full rounded-xl object-cover" />
                            ))}
                            <p className="whitespace-pre-line text-base leading-relaxed text-gray-800">{t(blog.summary)}</p>
                        </article>
                    )}
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}
