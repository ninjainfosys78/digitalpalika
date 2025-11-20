# Changelog

## [v0.1.0] - 2025-11-10
### Overview

This first public release ships a lightweight, performance-focused marketing site built with Next.js (App Router) and TypeScript. The design emphasises a modern, glassy visual language with a plasma animated hero background, a transparent/blurry navigation bar that lets the hero gradient show through, and responsive, accessible UI components built with Tailwind CSS.

Key features in v0.1.0:
- Global layout, header and footer with CDN-hosted logo and favicon for fast loads.
- Client-side i18n toggle (English ↔ Nepali) with cookie-based persistence so UI strings (navigation, hero, read-more, etc.) update without a full page navigation.
- Blogs (Insights) listing and detail pages, with server-side data fetch for posts and a client wrapper for language-aware rendering.
- Solutions, About, Careers, Privacy and Terms pages with localized UI strings and consistent dark theme styles where requested.
- Polished navigation UX: static header that scrolls with the page, a centered mega-menu for Solutions, and a mobile-friendly collapsible menu.
- Accessibility and performance considerations: semantic markup, keyboard handling for menus, and careful use of blur/opacity to maintain text contrast over backgrounds.

Technical notes:
- Built with Next.js App Router and TypeScript. Styling via Tailwind CSS utilities. Icons from lucide-react.
- The site is configured for static export where possible; language persistence is handled client-side to remain compatible with static rendering.
- Future work: add unit/integration tests, pre-render additional pages where beneficial, and add a small e2e smoke test for the critical path.

This release captures the initial visual and content surface for the site and lays the groundwork for iterative improvements and content publishing workflows.


## [v0.1.1] - 2025-11-20
### Overview
- Updated Ninja logo in header (production hotfix)