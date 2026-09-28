import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/JsonLd';
import ModuleContent from './ModuleContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Digital Palika Modules',
  description:
    'Explore the modules available in the Digital Palika system for managing local government services and municipal operations.',
  path: '/module',
});

export default function ModulePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Modules', path: '/module/' }])} />
      <ModuleContent />
    </>
  );
}
