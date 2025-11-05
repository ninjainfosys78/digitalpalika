import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/posts';

export const dynamic = 'force-static';

export default function BlogsPage() {
  const language: 'en' | 'ne' = 'en';
  const posts = getAllPostsMeta();

  return (
    <>
      <Header language={language} />
      <main className="relative bg-white text-[#0B0D12]">
        <section className="relative z-10">
          <div className="relative min-h-[50vh] pt-24 lg:pt-28">
            <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/insights.jpg')" }} />
            <div className="absolute inset-0 bg-black/55" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_20%,rgba(15,98,254,0.25),transparent_60%),radial-gradient(600px_300px_at_85%_70%,rgba(122,90,248,0.2),transparent_60%)]" />
            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
              <div className="max-w-[1200px] text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  <span>Field Notes</span>
                </p>
                <h1 className="mt-4 text-5xl font-heading font-semibold text-white sm:text-6xl text-left">BLOGS</h1>
                <nav aria-label="Breadcrumb" className="mt-4 text-sm text-white/80">
                  <ol className="flex items-center gap-3">
                    <li><Link href="/" className="font-medium tracking-wide hover:text-white">NINJA INFOSYS</Link></li>
                    <li aria-hidden className="inline-flex items-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </li>
                    <li className="font-medium tracking-wide">BLOGS</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="grid gap-8 md:grid-cols-3">
              {posts.map((post) => (
                <Link
                  href={`/blogs/${post.slug}`}
                  key={post.slug}
                  className="group flex flex-col h-full bg-white border border-black transition-all duration-200 hover:border-ni-accent/40"
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-ni-slate/50 px-6 pt-6 pb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="w-full bg-white overflow-hidden h-[200px]">
                    {post.image && <img src={post.image} alt={post.title} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex-1 flex flex-col px-6 py-5">
                    <span className="inline-flex w-fit bg-ni-accent/10 px-2 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-ni-accent mb-3 rounded">
                      {post.kicker}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-ni-ink group-hover:text-ni-accent transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-ni-slate/80 leading-relaxed line-clamp-3 mb-2">{post.deck}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}
