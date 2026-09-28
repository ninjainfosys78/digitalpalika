import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/buildMetadata';
import HomeContent from './HomeContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildPageMetadata({
  title: 'Digital Palika — Digital Municipality Management System',
  description:
    'Digital Palika helps local bodies in Nepal deliver technology-enabled, citizen-friendly municipal services through a modern digital platform.',
  path: '/',
});

export default function HomePage() {
  return <HomeContent />;
}
