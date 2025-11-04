import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google"

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  variable: "--font-body",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300","400","600"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ninja Infosys — Global Consulting",
  description: "A global consulting company shaping decisive outcomes in complex environments.",
  openGraph: {
    title: "Ninja Infosys — Global Consulting",
    description: "A global consulting company shaping decisive outcomes in complex environments.",
    images: ["/assets/og/og-default.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninja Infosys — Global Consulting",
    description: "A global consulting company shaping decisive outcomes in complex environments.",
    images: ["/assets/og/og-default.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibm.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
