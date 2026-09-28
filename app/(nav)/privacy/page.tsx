import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/JsonLd';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: 'Read how Digital Palika collects, uses, and protects your personal information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy/' }])} />
      <PrivacyContent />
    </>
  );
}
