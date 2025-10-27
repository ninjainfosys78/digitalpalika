import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  )
}
