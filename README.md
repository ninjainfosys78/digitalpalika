# Ninja Infosys — Global Consulting

A production-ready, fully static landing site for Ninja Infosys, a global consulting company. Built with Next.js, TypeScript, and Tailwind CSS v4.

## Features

- ✅ Fully static (no SSR, no server functions) — ready for Cloudflare Pages
- ✅ Bilingual support (English/Nepali) with language toggle
- ✅ WCAG 2.2 AA accessibility compliance
- ✅ SEO optimized with meta tags, sitemap, and robots.txt
- ✅ Sophisticated editorial design with subtle animations
- ✅ Client-side search functionality
- ✅ Responsive and mobile-first
- ✅ Cookie consent banner
- ✅ Keyboard shortcuts (/ for search, Esc to close)

## Tech Stack

- **Framework**: Next.js 15 (static export)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deployment to Cloudflare Pages

1. **Connect your repository** to Cloudflare Pages
2. **Configure build settings**:
   - Build command: `npm run build`
   - Build output directory: `out`
3. **Deploy**

The site is fully static and requires no serverless functions or environment variables.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── header.tsx          # Sticky header with navigation
│   ├── hero.tsx            # Hero section with abstract animation
│   ├── insights-rail.tsx   # Editorial insights cards
│   ├── taxonomy.tsx        # Practices/Industries taxonomy
│   ├── case-spotlight.tsx  # Featured case study
│   ├── perspective-block.tsx # Leadership note
│   ├── careers-teaser.tsx  # Careers section
│   ├── global-cta.tsx      # Contact CTA
│   ├── footer.tsx          # Site footer
│   ├── search-overlay.tsx  # Full-screen search
│   ├── offices-modal.tsx   # Office locations modal
│   ├── cookie-banner.tsx   # Cookie consent
│   └── announcement-bar.tsx # Dismissible announcement
├── public/
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine directives
└── README.md
```

## Design System

### Colors

- **Ink**: `#0B0D12` (primary text)
- **Paper**: `#FFFFFF` (background)
- **Graphite**: `#1F2430` (secondary text)
- **Slate**: `#2C3242` (muted text)
- **Accent**: `#0F62FE` (primary brand)
- **Accent 2**: `#7A5AF8` (secondary brand)

### Typography

- **Headings**: Inter Tight / Work Sans (600-700)
- **Body**: Inter (400-500)
- **Editorial**: Source Serif Pro (italic, sparingly)

### Accessibility

- WCAG 2.2 AA compliant
- Semantic HTML landmarks
- Visible focus indicators
- 44px minimum tap targets
- Respects `prefers-reduced-motion`
- Skip-to-content link
- Proper ARIA labels and roles

## Content Management

All content is embedded as JSON in `app/page.tsx` within a `<script type="application/json" id="ni-content">` tag. This allows for easy content updates and potential future CMS integration.

## License

© Ninja Infosys. All rights reserved.
