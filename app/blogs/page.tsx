import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/posts';

export const dynamic = 'force-static';

export default function BlogsPage() {
  const language: 'en' | 'ne' = 'en';
  const posts = getAllPostsMeta().slice(0, 6); // show only first 6 cards

  return (
    <>
      <Header language={language} />
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Blog
                </p>
                <h1 className="mt-4 text-5xl font-heading font-semibold text-white sm:text-6xl">
                  Insights
                </h1>
                <nav aria-label="Breadcrumb" className="mt-4 text-sm text-white/80">
                  <ol className="flex items-center gap-3">
                    <li>
                      <Link href="/" className="font-medium tracking-wide hover:text-[#e3e3e3]">
                        Ninja Infosys
                      </Link>
                    </li>
                    <li aria-hidden className="inline-flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-white/70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </li>
                    <li className="font-medium tracking-wide">Blog</li>
                  </ol>
                </nav>
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
                  key={post.slug}
                  className="group flex h-full flex-col border border-white/10 bg-[#0B0D12] transition-colors duration-200 hover:border-[#e3e3e3]"
                >
                  <div className="w-full overflow-hidden bg-black">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-[220px] w-full object-cover grayscale transition duration-300 group-hover:grayscale"
                      />
                    )}
                  </div>

                  <div className="flex-1 px-6 py-5">
                    <h3 className="mb-2 line-clamp-2 font-heading text-xl font-semibold text-white hover:text-[#e3e3e3]">
                      {post.title}
                    </h3>

                    {post.date && (
                      <div className="pt-3 mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                        {post.date}
                      </div>
                    )}

                    {post.deck && (
                      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-white/70">
                        {post.deck}
                      </p>
                    )}
                  </div>

                  {/* Read More */}
                  <div className="px-6 pb-6">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 bg-[#E6232D] px-4 py-2 text-sm font-medium text-white cursor-pointer"
                    >
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
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
      <Footer language={language} />
    </>
  );
}
