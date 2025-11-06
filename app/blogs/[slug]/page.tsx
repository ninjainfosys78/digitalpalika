// app/blogs/[slug]/page.tsx
import 'server-only';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { getAllPostsMeta, getPostSourceBySlug } from '@/lib/posts';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const language: 'en' | 'ne' = 'en';

  const source = getPostSourceBySlug(params.slug);
  if (!source) return notFound();

  let content = '';
  let data: Record<string, any> = {};
  try {
    const parsed = matter(source);
    content = parsed.content ?? '';
    data = parsed.data ?? {};
  } catch (e) {
    // gray-matter failed to parse → treat as 404 instead of 500
    return notFound();
  }

  const title = (data.title as string) || params.slug;
  const date = (data.date as string) || '';
  const image = (data.image as string) || '';

  return (
    <>
      <Header language={language} />

      <section className="relative z-10 bg-black text-white">
        <div className="relative min-h-[44vh] pt-24 lg:pt-28">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60"
            style={{ backgroundImage: `url('${image || '/insights.jpg'}')` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="max-w-[1200px] text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">Blog</p>
              <h1 className="mt-4 text-5xl font-heading font-semibold text-white sm:text-6xl">
                {title}
              </h1>
              {date && (
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  {date}
                </div>
              )}
              <nav aria-label="Breadcrumb" className="mt-4 text-sm text-white/80">
                <ol className="flex items-center gap-3">
                  <li>
                    <Link href="/" className="font-medium tracking-wide hover:text-[#e3e3e3]">
                      Ninja Infosys
                    </Link>
                  </li>
                  <li aria-hidden className="inline-flex items-center">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </li>
                  <li>
                    <Link href="/blogs" className="font-medium tracking-wide hover:text-[#e3e3e3]">
                      Insights
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-black text-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="mb-8">
            <Link href="/blogs" className="text-sm font-medium text-[#E6232D] hover:opacity-90">
              ← Back to Insights
            </Link>
          </div>

          <article className="prose prose-invert prose-lg max-w-none text-white/90 leading-relaxed">
            <MDXRemote source={content} />
          </article>
        </div>
      </main>

      <Footer language={language} />
    </>
  );
}
