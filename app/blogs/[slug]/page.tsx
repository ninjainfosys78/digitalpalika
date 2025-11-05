import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { getAllPostsMeta, getPostSourceBySlug } from '@/lib/posts';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
  return getAllPostsMeta().map(p => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const source = getPostSourceBySlug(params.slug);
  if (!source) return notFound();

  const { content, data } = matter(source);

  return (
    <>
      <Header language="en" />
      <main className="max-w-3xl mx-auto px-6 py-16 pt-24 lg:pt-28">
        <div className="mb-8">
          <Link
            href="/blogs"
            className="text-sm font-medium text-ni-accent hover:text-ni-accent-2 transition-colors"
          >
            ← Back to Insights
          </Link>
        </div>

        <div className="w-full mb-6 h-[300px] overflow-hidden">
          {data.image && <img src={data.image} alt={data.title} className="w-full h-full object-cover" />}
        </div>

        {data.kicker && (
          <span className="inline-flex w-fit bg-ni-accent/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ni-accent mb-4 rounded">
            {data.kicker}
          </span>
        )}

        <h1 className="text-4xl font-heading font-semibold mb-3">{data.title}</h1>
        <div className="text-sm text-ni-slate/70 mb-6">
          {data.date}{data.readTime ? ` • ${data.readTime}` : ''}
        </div>

        <article className="prose prose-lg max-w-none text-ni-ink leading-relaxed">
          <MDXRemote source={content} />
        </article>
      </main>
      <Footer language="en" />
    </>
  );
}
