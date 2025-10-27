import Link from "next/link"

const updated = "January 2025"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      'Ninja Infosys ("We", "Us", "Our") is committed to protecting your privacy. This policy explains the data we collect, how we use it, and the measures we take to safeguard it when you interact with our website or services.',
    ],
  },
  {
    id: "information",
    title: "Information we collect",
    paragraphs: [
      "We collect information you actively provide when you engage with us, along with limited technical data that helps us understand how the site performs.",
    ],
    bullets: [
      "Contact details such as name, email address, phone number, and company",
      "Professional information like role, areas of interest, and engagement history",
      "Content of messages you send us via forms, email, or other communication channels",
      "Consent preferences for communications and events",
      "Technical data including IP address, browser type, pages visited, and time spent on each page",
    ],
  },
  {
    id: "use",
    title: "How we use information",
    paragraphs: ["We use collected information to:"],
    bullets: [
      "Deliver, maintain, and improve our services",
      "Respond to inquiries, requests, and support needs",
      "Send insights, event invites, and updates with your consent",
      "Analyse site performance to enhance user experience",
      "Meet legal obligations and enforce our agreements",
    ],
  },
  {
    id: "sharing",
    title: "Information sharing",
    paragraphs: [
      "We do not sell personal data. We may share information only with trusted parties aligned to our delivery needs:",
    ],
    bullets: [
      "Service providers who support our operations under strict contractual safeguards",
      "Professional advisers such as lawyers, auditors, and accountants",
      "Regulators or authorities when legally required",
      "Partners and collaborators with your explicit consent",
    ],
  },
  {
    id: "security",
    title: "Data security",
    paragraphs: [
      "We implement organisational, technical, and physical safeguards to protect personal data against loss, misuse, or unauthorised access. While we strive for best practice, no method of transmission or storage is entirely risk-free.",
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    paragraphs: ["Depending on your jurisdiction, you may request to:"],
    bullets: [
      "Access a copy of the personal information we hold about you",
      "Correct or update inaccurate data",
      "Delete your personal information, subject to legal retention requirements",
      "Restrict or object to specific processing activities",
      "Withdraw consent to marketing at any time",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    paragraphs: [
      "We use cookies and similar technologies to understand usage patterns and improve site performance. You can manage preferences via your browser or our cookie banner. Learn more in our Cookie Policy.",
    ],
    actions: [
      {
        label: "Read the Cookie Policy",
        href: "/cookies",
      },
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    paragraphs: [
      "Your information may be processed outside your country of residence. When we transfer data internationally, we ensure appropriate safeguards consistent with this policy and applicable laws.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      'We may update this policy periodically. We will post the revised version here and adjust the "Last updated" date. Continued use after an update signals acceptance of the changes.',
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      "For privacy questions or to exercise your rights, contact our privacy team. We aim to respond within five working days.",
    ],
    actions: [
      {
        label: "privacy@ninjainfosys.com",
        href: "mailto:privacy@ninjainfosys.com",
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-ni-paper text-ni-ink">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ni-accent/10 via-transparent to-ni-accent-2/10" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ni-accent via-ni-accent-2 to-ni-accent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 pt-28 pb-20">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-ni-accent hover:text-ni-accent-2 transition-colors">
            ← Back to home
          </Link>
          <h1 className="mt-10 text-4xl sm:text-5xl font-heading font-bold text-balance">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-lg text-ni-slate/80 leading-relaxed">
            Transparency on how we collect, use, and safeguard the information shared with us—so you can collaborate with
            confidence.
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
