import './globals.css'; 
import type { Metadata } from 'next';
import { Source_Serif_4, IBM_Plex_Sans } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Digital Palika',
  description: 'Digital Municipality Management System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${ibmPlex.variable}`}>
      <body>{children}</body>
    </html>
  );
}