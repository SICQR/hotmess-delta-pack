# HOTMESS London — Next.js App Router (No Supabase… yet)

Men‑only, 18+ queer ecosystem: **fashion** (RAW/HUNG/HIGH + SUPER), **HOTMESS RADIO** 24/7, **RAW CONVICT RECORDS**, and **HNH MESS** — the only lube with real aftercare.

This repo is **Next.js + Tailwind only** so you can deploy fast. Supabase can be layered in later for auth, logs, affiliate, QR, and DSAR forms — no refactor needed.

---

## Features
- App Router + Tailwind, brand orange **#FF5300**, Oswald/Inter via `next/font`
- **AudioDock** persistent mini‑player (site‑wide)
- **Radio schedule** page (`/radio/schedule`)
- **SEO/OG**: dynamic OG image generator at `/og`
- **PWA**: `app/manifest.ts` + icons + theme‑color
- **A11y**: Skip link, focus rings, reduced‑motion support
- **Legal set**: Privacy, Terms, Care Disclaimer, Age Verification, Data & Privacy Hub, UGC, Abuse & Safety, DMCA, Sponsorships
- **Forms (no DB)**: 
  - Affiliate Apply → `mailto:affiliates@hotmessldn.com`
  - DSAR/Delete → `mailto:privacy@hotmessldn.com`
  - Abuse Report → `mailto:safety@hotmessldn.com`

---

## Quick Start (Local)
```bash
# Terminal (zsh) — no heredocs, one line at a time
npm install
cp .env.example .env.local
npm run dev   # http://localhost:3000
```

### Required env for radio
```
NEXT_PUBLIC_STREAM_URL=
RADIOKING_NOWPLAYING_URL=
```
Optional:
```
NEXT_PUBLIC_OPENWEATHER_KEY=
NEXT_PUBLIC_WEATHER_CITY=London,GB
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=
```

---

## Deploy to Vercel
1. Create new Vercel project → **Import GitHub repo**.
2. Add envs from `.env.example` to Vercel → Project → Settings → Environment Variables.
3. Deploy. Vercel will run `npm install` and `npm run build` automatically.

> Tip: keep Supabase off until after go‑live. The forms already work via `mailto:`.

---

## Project Structure
```
app/
  (pages)...
  og/route.tsx               # Dynamic Open Graph image
  manifest.ts                # PWA manifest
  sitemap.xml/route.ts       # SEO
  robots.txt/route.ts        # SEO
components/
  AudioDock.tsx
  NowPlaying.tsx
  WetterWatch.tsx
  Header.tsx / Footer.tsx / AgeGate.tsx / ConsentBar.tsx
lib/
  constants.ts, cookies.ts, shopify.ts
public/
  icon-*.png, favicon.svg
```

---

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — start production server

---

## Compliance & A11y
- **18+ AgeGate**, **GDPR Consent Bar**, **Care Disclaimer** (info & services; not medical advice)
- Keyboard‑friendly, high contrast, alt‑text guidance in copy

---

## CI
A minimal GitHub Actions workflow builds the project on every push/PR.

---

## License
MIT © HOTMESS London
