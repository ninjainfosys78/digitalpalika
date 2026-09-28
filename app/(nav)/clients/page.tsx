import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/JsonLd';
import ClientsPageContent from './ClientsContentPage';

export const metadata: Metadata = buildPageMetadata({
  title: 'Our Clients',
  description:
    'Local bodies across Nepal that use Digital Palika for digital transformation and municipal service delivery.',
  path: '/clients',
});

export default function ClientsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Our Clients', path: '/clients/' }])} />
      <ClientsPageContent />
    </>
  );
}
