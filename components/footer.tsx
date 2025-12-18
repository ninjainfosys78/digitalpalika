"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/lib/siteData";
import { Linkedin, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const f = siteData.footer;

  return (
    <footer className="bg-[#003885] text-white w-full" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-5 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold tracking-tight">{t(f.companyName)}</h2>
            <p className="mt-2 text-white/90 max-w-md break-words">
              {t(f.companyMoto)}
            </p>
          </div>

          {/* Right columns */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="mt-3 space-y-2">
                  {/* Address */}
                  <div className="flex items-center gap-2 text-white/90 -ml-2">
                    <MapPin className="h-5 w-5 min-w-[20px] min-h-[20px] text-white/80" />
                    <span>{t(f.contactInfo.details[0].value)}</span>
                  </div>
                  {/* Email */}
                  <div className="flex items-center gap-2 text-white/90 -ml-2">
                    <Mail className="h-5 w-5 min-w-[20px] min-h-[20px] text-white/80" />
                    <span>{t(f.contactInfo.details[1].value)}</span>
                  </div>
                  {/* Telephone */}
                  <div className="flex items-center gap-2 text-white/90 -ml-2">
                    <Phone className="h-5 w-5 min-w-[20px] min-h-[20px] text-white/80" />
                    <span>{t(f.contactInfo.details[2].value)}</span>
                  </div>
                  {/* Phone (first two in one row, last on new row) */}
                  <div className="flex items-start gap-2 text-white/90 -ml-2">
                    <Phone className="h-5 w-5 min-w-[20px] min-h-[20px] text-white/80 mt-1" />
                    <span>
                      {(() => {
                        // Get language from context or fallback
                        const { lang = (typeof navigator !== 'undefined' && navigator.language ? navigator.language.slice(0,2) : 'en') } = useLanguage();
                        let phones: string[] = [];
                        const phoneValue = f.contactInfo.details[3].value;
                        if (phoneValue && typeof phoneValue === "object" && !Array.isArray(phoneValue)) {
                          let val = (phoneValue as Record<string, any>)[lang] || (phoneValue as Record<string, any>)["en"] || "";
                          if (Array.isArray(val)) {
                            phones = val;
                          } else if (typeof val === "string") {
                            phones = val.split(",").map(p => p.trim());
                          }
                        } else if (typeof phoneValue === "string") {
                          phones = (phoneValue as string).split(",").map(p => p.trim());
                        }
                        return (
                          <>
                            <span>{phones.slice(0, 2).join(", ")}</span>
                            <br />
                            <span>{phones[2]}</span>
                          </>
                        );
                      })()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col items-start lg:items-end text-left lg:text-right mt-8 sm:mt-0">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="mt-4 flex justify-start lg:justify-end items-center gap-4">
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
