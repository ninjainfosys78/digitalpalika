"use client";

import { Fragment } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import Demo from "@/components/demo";
import { useLanguage } from "@/context/LanguageContext";
import { useBlogs } from "@/hooks/useBlogs";
import { BlogCard } from "./BlogCard";

export default function BlogsPageContent() {
    const { t } = useLanguage();
    const { blogs, loading } = useBlogs();

    return (
        <Fragment>
            <Header />
            <main className="bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <Breadcrumb
                        items={[
                            { label: t({ en: "Home", ne: "गृहपृष्ठ" }), href: "/" },
                            { label: t({ en: "Blogs", ne: "ब्लगहरू" }) },
                        ]}
                    />
                    <div className="text-center mb-10">
                        <h1 className="text-[28px] font-bold mb-2 text-[#003893]">
                            {t({ en: "Blogs", ne: "ब्लगहरू" })}
                        </h1>
                        <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                        <p className="text-black max-w-3xl mx-auto">
                            {t({
                                en: "News, updates and articles from Digital Palika.",
                                ne: "डिजिटल पालिकाका समाचार, अपडेट र लेखहरू।"
                            })}
                        </p>
                    </div>

                    {!loading && blogs.length === 0 && (
                        <p className="text-center text-gray-500">
                            {t({ en: "No blogs published yet.", ne: "अहिलेसम्म कुनै ब्लग प्रकाशित भएको छैन।" })}
                        </p>
                    )}

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map(blog => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
                <Demo />
            </main>
            <Footer />
        </Fragment>
    );
}
