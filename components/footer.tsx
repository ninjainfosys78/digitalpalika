"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/lib/siteData";
import { Linkedin, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const f = siteData.footer;

  const phoneNumbers = t(f.contactInfo.details[3].value)
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <footer className="bg-[#003885] text-white w-full" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] gap-x-8 gap-y-10 items-start">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">{t(f.companyName)}</h2>
            <p className="mt-2 text-white/90 max-w-md break-words">
              {t(f.companyMoto)}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-16">
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
            <div className="mt-3 space-y-2">
              {/* Address */}
              <div className="flex items-start gap-2 text-white/90">
                <MapPin className="h-5 w-5 shrink-0 text-white/80 mt-0.5" />
                <span>{t(f.contactInfo.details[0].value)}</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2 text-white/90">
                <Mail className="h-5 w-5 shrink-0 text-white/80" />
                <span>{t(f.contactInfo.details[1].value)}</span>
              </div>
              {/* Telephone */}
              <div className="flex items-center gap-2 text-white/90">
                <Phone className="h-5 w-5 shrink-0 text-white/80" />
                <span>{t(f.contactInfo.details[2].value)}</span>
              </div>
              {/* Phone numbers, one per line */}
              {phoneNumbers.map((number, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90">
                  <Phone className="h-5 w-5 shrink-0 text-white/80" />
                  <span>{number}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex items-center gap-4">
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
