import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/JsonLd';
import FeaturesContent from './FeaturesContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Features',
  description:
    'Discover the features of Digital Palika, a smart, connected digital platform that simplifies local governance.',
  path: '/features',
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Features', path: '/features/' }])} />
      <FeaturesContent />
    </>
  );
}
