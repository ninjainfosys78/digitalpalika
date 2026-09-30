import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/JsonLd';
import BlogsPageContent from './BlogsPageContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blogs',
  description: 'News, updates and articles about Digital Palika and digital transformation of local bodies in Nepal.',
  path: '/blogs',
});

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blogs', path: '/blogs/' }])} />
      <BlogsPageContent />
    </>
  );
}
