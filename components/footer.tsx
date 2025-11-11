"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/lib/siteData";
import { Linkedin, Facebook, Twitter, MapPin, Mail, Smartphone, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const f = siteData.footer;

  return (
    <footer className="bg-[#003885] text-white w-full" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">{t(f.companyName)}</h2>
            <p className="mt-2 text-white/90">{t(f.companyMoto)}</p>
          </div>

          {/* Right columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-3 space-y-2">
                  {f.quickLinks.links.map((l, i) => (
                    <li key={i}>
                      <Link
                        href={l.href}
                        className="text-white hover:text-white/70 transition-colors duration-200"
                      >
                        {t(l.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold">{t(f.contactInfo.title)}</h3>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{t(f.contactInfo.details[0].value)}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a
                      href={`mailto:${t(f.contactInfo.details[1].value)}`}
                      className="hover:underline"
                    >
                      {t(f.contactInfo.details[1].value)}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    <span>{t(f.contactInfo.details[2].value)}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{t(f.contactInfo.details[3].value)}</span>
                  </li>
                </ul>
              </div>

              {/* Follow Us — right aligned on desktop, left on mobile */}
                <div className="flex flex-col items-start sm:items-end text-left sm:text-right">
                {/* On large screens we offset the heading so its left edge matches icons */}
                <h3 className="text-lg font-semibold sm:pr-[66px]">Follow Us</h3>

                <div className="mt-4 flex justify-start sm:justify-end items-center gap-4">
                    <a
                    href="#"
                    aria-label="LinkedIn"
                    className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center transition hover:border-white"
                    >
                    <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                    href="#"
                    aria-label="Facebook"
                    className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center transition hover:border-white"
                    >
                    <Facebook className="h-5 w-5" />
                    </a>
                    <a
                    href="#"
                    aria-label="Twitter"
                    className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center transition hover:border-white"
                    >
                    <Twitter className="h-5 w-5" />
                    </a>
                </div>
                </div>

            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-6 mb-4 h-px w-full bg-white/30" />

        {/* Bottom bar */}
        <div className="mt-2 mb-1 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-white/90">{t(f.copyright)}</div>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="text-white hover:text-white/70">
              Privacy Policy
            </Link>
            <span className="text-white/60">|</span>
            <Link href="/terms" className="text-white hover:text-white/70">
              Term of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
