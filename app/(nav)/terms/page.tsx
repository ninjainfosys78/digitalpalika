import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/JsonLd';
import TermsContent from './TermsContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service',
  description: 'The terms and conditions for using the Digital Palika platform.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms/' }])} />
      <TermsContent />
    </>
  );
}
