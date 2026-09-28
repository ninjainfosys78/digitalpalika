import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/JsonLd';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with the Digital Palika team for questions about municipal digital services and support.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])} />
      <ContactPageContent />
    </>
  );
}
