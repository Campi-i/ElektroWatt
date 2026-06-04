# ElektroWatt — PRD

## Original problem statement
> I would like to make one page website for electrical installations firm, called ElektroWatt

## User choices (confirmed)
- Language: Croatian (hr)
- Visual style: Modern & bold (dark theme, electric yellow/cyan accents)
- Contact: `mailto:` link only — no backend form, no DB
- Sections requested: Project/portfolio gallery + FAQ
- Services covered: Stambene instalacije · Komercijalni/industrijski · Pametne kuće · Solarni + EV · Hitne 0-24h

## Architecture
- Frontend: React 19 + Tailwind + shadcn/ui + framer-motion + lucide-react
- Backend: Not used for this site (mailto only). FastAPI template remains intact.
- Single-page site with smooth scroll & hash navigation.

## Sections implemented (2025-12)
1. Sticky glass Navbar with mobile menu (`Navbar.jsx`)
2. Hero with full-bleed image, animated status pill, dual CTA (`Hero.jsx`)
3. Yellow trust strip with stats + marquee of partners (`TrustStrip.jsx`)
4. Services bento grid (5 cards) (`Services.jsx`)
5. Asymmetrical gallery (5 images) (`Gallery.jsx`)
6. About section with floating "20+ years" badge (`About.jsx`)
7. Process — 4 steps (`Process.jsx`)
8. FAQ accordion (6 entries, shadcn Accordion) (`FAQ.jsx`)
9. Contact: large mailto block + phone block + address/hours (`Contact.jsx`)
10. Footer (`Footer.jsx`)

## Content
- All copy in Croatian
- Placeholder contact: info@elektrowatt.hr · +385 91 234 5678 · Industrijska 14, Zagreb

## Prioritized backlog
- P1: Replace placeholder phone/email/address/OIB with real data
- P1: Add real project photos & swap stock images
- P2: Add testimonials section
- P2: Wire backend lead-capture form + email notifications (Resend/SendGrid)
- P2: SEO meta, Open Graph image, sitemap, Croatian schema.org LocalBusiness
- P3: Blog / case studies subpages
- P3: Multi-language (EN/DE) toggle

## Next tasks
- Collect real business info from user (phone, email, OIB, address, real portfolio photos)
