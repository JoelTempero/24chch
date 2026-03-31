# 24CHCH - Christchurch 24 Hour Film Festival

## Overview
- **Client**: 24CHCH
- **Type**: Static multi-page website
- **Status**: Post-event updates (event was March 27-28, 2026)
- **URL**: https://24chch.nz

## Tech Stack
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Backend**: None (static site)
- **Database**: None
- **Hosting**: GitHub Pages (CNAME: 24chch.nz)

## Build & Dev Commands
- Dev server: Open HTML files directly or use Live Server
- Build: N/A (no build step)
- Deploy: Push to `main` branch (GitHub Pages)

## Code Conventions
- Single `styles.css` for all styling
- Single `script.js` for all JS
- Google Fonts: Bebas Neue, Space Grotesk, Inter
- Mobile-first responsive design
- Pages: index.html, about.html, 2026.html, 2023.html, screening.html, rules.html, advice.html, handin.html

## Current Progress
- Full multi-page site built with nav, hero, countdown timer
- 2023 films gallery page
- Screening, rules, advice, and hand-in pages
- Sponsor logos added to homepage hero
- Judges section and prize sponsors added to About page
- Sign-up form (Google Forms) and ticket link (Little Andromeda) integrated
- OG social preview image added to all pages (assets/images/og-image.png)

## Next Steps
- [ ] Replace placeholder card for InvercargillFoxFilms "BEST USE OF (TEA) LEAVES" once video is submitted
- [ ] Add remaining films as teams submit YouTube links (7 teams still pending)
- [ ] Update site for 2027 event when dates are confirmed

## Session Log
### 2026-03-31
- Created 2026.html films page with winner, runner up, 6 special awards, 9 other films
- One placeholder card for InvercargillFoxFilms (BEST USE OF (TEA) LEAVES) — awaiting video
- Updated homepage hero: removed countdown/sign-up, replaced with "SEE YOU NEXT YEAR!" + 48Hours CTA
- Added "WATCH THE 2026 FILMS" secondary CTA to homepage
- Updated nav on all 8 pages: added 2026 Films link, removed Sign Up/Tickets CTAs
- Updated footer on all pages: "Connect" column → "Films" column with 2026 + 2023 links
- Added .video-placeholder CSS for "coming soon" cards

### 2026-03-18
- Created OG preview image (1200x630) matching hero branding
- Added og:image and twitter:card meta tags to all 7 pages

## Key Decisions
- Static site approach (no framework) for simplicity and fast GitHub Pages hosting

## Known Issues
- None currently tracked
