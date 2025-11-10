import './globals.css'; 
import type { Metadata } from 'next';
import { Inter, Inter_Tight, Work_Sans, Source_Serif_4 } from 'next/font/google';
import Providers from "./providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter', 
  weight: ['400', '500'], 
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  weight: ['600', '700'], 
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  weight: ['600', '700'], 
});

const sourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif-pro',
  weight: ['400'], 
  style: ['normal', 'italic'],
});

// 2. Define SEO Metadata
export const metadata: Metadata = {
  title: 'डिजिटल पालिका',
  description: 'Digital e-Palika is a complete local government management system.',
  keywords: ['consulting', 'global', 'strategy', 'technology', 'digital transformation', 'Ninja Infosys'],
  metadataBase: new URL('https://your-domain.com'), // <<< IMPORTANT: CHANGE THIS TO YOUR ACTUAL DOMAIN
  openGraph: {
    title: 'डिजिटल पालिका',
    description: 'Digital e-Palika is a complete local government management system.',
    url: 'https://your-domain.com', // <<< IMPORTANT: CHANGE THIS
    siteName: 'Digital Palika',
    images: [
      {
        url: '/next.svg', 
        width: 1200,
        height: 630,
        alt: 'Digital Palika',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ninja Infosys — Global Consulting',
    description: 'Ninja Infosys is a global consulting company specializing in digital transformation, strategy, and technology solutions.',
    creator: '@', 
    images: ['/file.svg'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // For bilingual support, we'll need dynamic alternates in a later step
  // For now, a single canonical URL is sufficient.
  alternates: {
    canonical: 'https://your-domain.com', // <<< IMPORTANT: CHANGE THIS
  },
};

// 3. Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}