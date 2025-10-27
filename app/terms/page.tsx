import Link from "next/link"

const updated = "January 2025"

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    paragraphs: [
      "By accessing or using the Ninja Infosys website and services, you agree to comply with these Terms of Service. If you do not agree, please discontinue use immediately.",
    ],
  },
  {
    id: "services",
    title: "Services description",
    paragraphs: [
      "We provide consulting services spanning strategy, transformation, technology, risk, and people advisory. Every engagement is governed by its own agreement. These Terms cover your use of our public website and digital experiences.",
    ],
  },
  {
    id: "use",
    title: "Use of website",
    paragraphs: ["You agree to use the site responsibly and not to:"],
    bullets: [
      "Infringe on the intellectual property or privacy rights of others",
      "Restrict or inhibit other users from accessing the site",
      "Attempt to gain unauthorised access to our systems",
      "Transmit malware, malicious code, or conduct security probes without consent",
      "Harvest data or personal information without explicit permission",
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    paragraphs: [
      "All site content—including copy, visuals, and software—is owned by Ninja Infosys or our licensors and is protected by copyright, trademark, and related laws. You may not reproduce, distribute, or create derivative works without written consent.",
    ],
  },
  {
    id: "engagements",
    title: "Client engagements",
    paragraphs: [
      "Consulting services are delivered under separate engagement letters or contracts. These will always take precedence over any conflicting information contained on this site.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    paragraphs: [
      "We maintain strict confidentiality standards for client information. Any confidential materials shared with us are handled in accordance with engagement agreements and applicable law.",
    ],
  },
  {
    id: "warranties",
    title: "Disclaimer of warranties",
    paragraphs: [
      "The website and its content are provided \"as is\" without warranties of any kind. We do not warrant uninterrupted availability, error-free operation, or freedom from harmful components.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by law, Ninja Infosys is not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.",
    ],
  },
  {
    id: "links",
    title: "Third-party links",
    paragraphs: [
      "Our website may link to external sites not operated by Ninja Infosys. We do not control and are not responsible for the content or practices of those sites. Access them at your own discretion.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws of Nepal, without regard to conflict-of-law principles. All disputes fall under the exclusive jurisdiction of courts in Nepal.",
    ],
  },
  {
    id: "changes",
    title: "Changes to terms",
    paragraphs: [
      'We may update these Terms from time to time. The latest version is always available on this page, and the "Last updated" date will indicate when changes take effect.',
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Have questions about these Terms or how they apply? Reach out to our legal team any time.",
    ],
    actions: [
      {
        label: "legal@ninjainfosys.com",
        href: "mailto:legal@ninjainfosys.com",
      },
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="bg-ni-paper text-ni-ink">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ni-accent/10 via-transparent to-ni-accent-2/10" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ni-accent via-ni-accent-2 to-ni-accent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 pt-28 pb-20">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-ni-accent hover:text-ni-accent-2 transition-colors">
            ← Back to home
          </Link>
          <h1 className="mt-10 text-4xl sm:text-5xl font-heading font-bold text-balance">Terms of Service</h1>
          <p className="mt-5 max-w-2xl text-lg text-ni-slate/80 leading-relaxed">
            Clear expectations on how we operate, what we commit to, and how we partner responsibly with clients,
            collaborators, and visitors to our digital experiences.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.22em] text-ni-slate/50">Last updated · {updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 pb-24">
        <div className="grid gap-10 lg:grid-cols-[260px,1fr]">
          <nav className="top-28 hidden lg:block self-start rounded-2xl border border-ni-graphite/10 bg-white/60 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ni-slate/60">Navigate</p>
            <ul className="mt-4 space-y-3 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-ni-slate/70 transition-colors hover:bg-ni-accent/10 hover:text-ni-accent"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-3xl border border-ni-graphite/10 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,98,254,0.3)]"
              >
                <h2 className="text-2xl font-heading font-semibold text-ni-ink">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-ni-slate/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 rounded-2xl border border-ni-graphite/10 bg-ni-graphite/5 p-4">
                      {section.bullets.map((item) => (
                        <li key={item} className="pl-5 text-sm text-ni-slate/80" style={{ textIndent: "-1.25rem" }}>
                          <span className="mr-2 text-ni-accent">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.actions && (
                    <div className="flex flex-wrap gap-3">
                      {section.actions.map((action) => (
                        <Link
                          key={action.href}
                          href={action.href}
                          className="inline-flex items-center justify-center rounded-lg border border-ni-graphite/15 px-4 py-2 text-sm font-semibold text-ni-accent transition-colors hover:border-ni-accent hover:text-ni-accent-2"
                        >
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  )
}
