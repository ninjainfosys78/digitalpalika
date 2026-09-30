import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import BlogDetailPageContent from './BlogDetailPageContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog',
  description: 'Read the latest news and articles from Digital Palika.',
  path: '/blogs',
});

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogDetailPageContent slug={slug} />;
}
