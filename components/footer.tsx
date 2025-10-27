"use client"

import Link from "next/link"
import { Linkedin, Twitter, Facebook, Phone, Smartphone, Mail, MapPin } from "lucide-react"

interface FooterProps {
  language: "en" | "ne"
}

export default function Footer({ language }: FooterProps) {
  const content =
    language === "en"
      ? {
          techHeading: "Technologies We Work With",
          techs: [
            { src: "/laravel-svgrepo-com.svg", label: "Laravel" },
            { src: "/react-svgrepo-com.svg", label: "React" },
            { src: "/vue-svgrepo-com.svg", label: "Vue" },
            { src: "/mysql-svgrepo-com.svg", label: "MySQL" },
            { src: "/next-dot-js-svgrepo-com.svg", label: "Next.js" },
            { src: "/NestJS.svg", label: "Nest.js" },
            { src: "/go-gopher-svgrepo-com.svg", label: "Go" },
            { src: "/rust-svgrepo-com.svg", label: "Rust" },
            { src: "/php-svgrepo-com.svg", label: "PHP" },
            { src: "/postgresql-logo-svgrepo-com.svg", label: "PostgreSQL" },
          ],
          copyright: "© 2025 Ninja Infosys. All rights reserved.",
          quickHeading: "Quick Links",
          quickLinks: [
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Solutions", href: "/solutions" },
            { label: "Our Work", href: "/work" },
            { label: "Insights", href: "/blogs" },
            { label: "Contact", href: "/contact" },
          ],
          productsHeading: "Products",
          // UPDATED: all product links now go to /work
          products: [
            { label: "E-palika System", href: "/work" },
            { label: "ICMS Sites", href: "/work" },
            { label: "School Website", href: "/work" },
            { label: "News Portals", href: "/work" },
            { label: "CMS Sites", href: "/work" },
          ],
          connectHeading: "Connect With Us",
          connect: [
            { type: "phone", value: "01-555051203" },
            { type: "mobile", value: "9819175358, 980000000" },
            { type: "email", value: "hello@ninjainfosys.com" },
            { type: "address", value: "Anamnagar, Kathmandu" },
          ],
          legalLinks: [
            { label: "Careers", href: "/careers" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
          ],
        }
      : {
          techHeading: "हामीले प्रयोग गर्ने प्रविधिहरू",
          techs: [
            { src: "/laravel-svgrepo-com.svg", label: "लाराभल" },
            { src: "/react-svgrepo-com.svg", label: "रिएक्ट" },
            { src: "/vue-svgrepo-com.svg", label: "भ्यु" },
            { src: "/mysql-svgrepo-com.svg", label: "MySQL" },
            { src: "/next-dot-js-svgrepo-com.svg", label: "नेक्स्ट.जेएस" },
            { src: "/NestJS.svg", label: "नेस्टजेएस" },
            { src: "/go-gopher-svgrepo-com.svg", label: "गो" },
            { src: "/rust-svgrepo-com.svg", label: "रस्ट" },
            { src: "/php-svgrepo-com.svg", label: "PHP" },
            { src: "/postgresql-logo-svgrepo-com.svg", label: "पोस्टग्रेसक्यूएल" },
          ],
          copyright: "© 2025 Ninja Infosys. सर्वाधिकार सुरक्षित।",
          quickHeading: "छिटो लिंकहरू",
          quickLinks: [
            { label: "हामीबारे", href: "/about" },
            { label: "सेवाहरू", href: "/services" },
            { label: "समाधानहरू", href: "/solutions" },
            { label: "हाम्रो काम", href: "/" },
            { label: "इनसाइट्स", href: "/blogs" },
            { label: "सम्पर्क", href: "/contact" },
          ],
          productsHeading: "उत्पादनहरू",
          // UPDATED: all product links now go to /work
          products: [
            { label: "ई–पालिका प्रणाली", href: "/work" },
            { label: "ICMS साइटहरू", href: "/work" },
            { label: "विद्यालय वेबसाइट", href: "/work" },
            { label: "समाचार पोर्टलहरू", href: "/work" },
            { label: "CMS साइटहरू", href: "/work" },
          ],
          connectHeading: "हामीसँग जडान हुनुहोस्",
          connect: [
            { type: "phone", value: "01-555051203" },
            { type: "mobile", value: "9819175358, 980000000" },
            { type: "email", value: "hello@ninjainfosys.com" },
            { type: "address", value: "अनामनगर, काठमाडौं" },
          ],
          legalLinks: [
            { label: "क्यारियर", href: "/careers" },
            { label: "गोपनीयता नीति", href: "/privacy" },
            { label: "सेवाका सर्तहरू", href: "/terms" },
            { label: "कुकी नीति", href: "/cookies" },
          ],
        }

  return (
    <footer className="bg-ni-graphite text-ni-paper" role="contentinfo">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-8 lg:px-12 2xl:px-16">

        {/* Brand + tagline */}
        <div className="mb-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="mt-8">
              <Link href="/#hero" className="inline-block">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-heading font-bold">NINJA INFOSYS</h2>
                </div>
              </Link>
              <p className="text-ni-paper/60 max-w-md text-pretty">
                {language === "en"
                  ? "Let’s transform your concepts into reality."
                  : "हामी तपाईंको अवधारणाहरूलाई वास्तविकतामा परिवर्तन गरौँ।"}
              </p>
            </div>
          </div>
        </div>

        <div className="my-[42px]" />

        {/* === MAIN ROW: LEFT (tech) | RIGHT (3 compact columns) === */}
        <div className="
          grid gap-y-14 
          lg:grid-cols-[minmax(0,1fr)_auto] 
          lg:items-start 
          lg:gap-x-32
          mb-5
        ">
          {/* LEFT: Technologies */}
          <div className="min-w-0">
            <div className="mb-5">
              <h3 className="text-ni-paper/90 text-lg">{content.techHeading}</h3>
            </div>
            <div className="grid grid-cols-5 gap-3 sm:gap-5 max-w-[550px]">
              {content.techs.map(({ src, label }: { src: string; label: string }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center p-2">
                    <img src={src} alt={label} className="max-w-full max-h-full" />
                  </div>
                  <div className="text-xs text-ni-paper/60">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: three tight columns, aligned to the right */}
          <div className="justify-self-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
              {/* Quick Links */}
              <div className="w-max">
                <div className="mb-5">
                  <h3 className="font-heading font-semibold text-ni-paper/90 text-lg">
                    {content.quickHeading}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {content.quickLinks.map((link: any) => (
                    <li key={String(link.label)}>
                      <Link href={link.href} className="text-sm text-ni-paper/70 hover:text-ni-paper transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div className="w-max">
                <div className="mb-5">
                  <h3 className="font-heading font-semibold text-ni-paper/90 text-lg">
                    {content.productsHeading}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {content.products.map((link: any) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-ni-paper/70 hover:text-ni-paper transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div className="w-max">
                <div className="mb-5">
                  <h3 className="font-heading font-semibold text-ni-paper/90 text-lg mb-4">
                    {content.connectHeading}
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-ni-paper/70">
                  {content.connect.map((c: any, i: number) => (
                    <div className="flex items-start gap-3" key={i}>
                      <span className="mt-1">
                        {c.type === "phone" && <Phone size={18} />}
                        {c.type === "mobile" && <Smartphone size={18} />}
                        {c.type === "email" && <Mail size={18} />}
                        {c.type === "address" && <MapPin size={18} />}
                      </span>
                      <div>{c.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal links row */}
        <div className="border-t-2 border-ni-paper/20 py-2">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="inline-flex items-center gap-4 text-sm text-ni-paper/60">
              {content.legalLinks.map((link: any, idx: number) => (
                <span key={String(link.label)} className="flex items-center">
                  <Link href={link.href} className="text-sm text-ni-paper/60 hover:text-ni-paper transition-colors">
                    {link.label}
                  </Link>
                  {idx < content.legalLinks.length - 1 && (
                    <span className="mx-3 text-ni-paper/30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t-2 border-ni-paper/20">
          <div className="flex items-center justify-between gap-4">
            <div className="mb-4">
              <p className="text-sm text-ni-paper/60">{content.copyright}</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <a href="#" className="p-2 bg-ni-paper/10 rounded-full hover:bg-ni-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-ni-paper/10 rounded-full hover:bg-ni-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-ni-paper/10 rounded-full hover:bg-ni-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-ni-paper/10 rounded-full hover:bg-ni-accent transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-14a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2zm-10 14h-3v-8h3v8zm-1.5-9.3a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm11.5 9.3h-3v-4c0-1-.5-1.5-1.3-1.5-.7 0-1.2.5-1.4 1-.1.2-.1.6-.1.9v3.6h-3v-8h3v1.1c.4-.6 1.1-1.2 2.6-1.2 1.9 0 3.4 1.2 3.4 3.8व4.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
