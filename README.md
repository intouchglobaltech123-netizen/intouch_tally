# INTOUCH × TallyPrime — Next.js website

Premium single-product website for TallyPrime (with the Livekeeping companion app), built with **Next.js (App Router) + TypeScript**.

## Run it locally

Requires **Node.js 20.9 or newer**.

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Enquiry form → email

Both forms (demo booking and licence enquiry) post to `app/api/enquiry/route.ts`, which:

- validates every field again on the server (Indian mobile number, email, enquiry type, consent)
- blocks spam with a hidden honeypot field, a minimum fill time and a per-IP rate limit
- emails the enquiry to Intouch through [Resend](https://resend.com), with the visitor's email set as reply-to

Set these in `.env.local` (or in your host's environment settings — **never** commit real values):

| Variable | Example |
| --- | --- |
| `RESEND_API_KEY` | `re_…` from resend.com |
| `ENQUIRY_TO_EMAIL` | `info@intouchglobaltech.com` (comma-separate for several) |
| `ENQUIRY_FROM_EMAIL` | `Intouch Website <enquiries@intouchglobaltech.com>` — the domain must be verified in Resend |
| `NEXT_PUBLIC_SITE_URL` | `https://www.intouchglobaltech.com` |

Until these are set, the API returns 503 and visitors see your email and phone number instead. The site never shows a fake "sent" message.

## Deploy

Easiest: push to GitHub and import the repo on **Vercel**, then add the environment variables above in *Project → Settings → Environment Variables*. Any host that runs Node.js (`npm run build && npm start`) also works.

## Where to edit

| What | File |
| --- | --- |
| Contact details, site URL, SEO title/description | `lib/site.ts` |
| Product-tour tabs and FAQ text | `lib/content.ts` |
| Each page section (Hero, Product, Features, Story, Audience, Livekeeping, WhyTally, GetStarted, Pricing, Faqs, FinalCta, DemoBooking, Footer) | `components/sections/*.tsx` |
| Styles and design tokens (colours, radii) | `app/globals.css` (`:root` at the top) |
| Logo | `public/logo.png` |
| Privacy Policy / Terms (placeholders — replace before launch) | `app/privacy/page.tsx`, `app/terms/page.tsx` |

## Structure

```
app/
  layout.tsx          fonts (next/font), metadata, Open Graph, pre-paint preloader skip
  page.tsx            assembles the sections
  api/enquiry/        form backend (Resend)
  privacy/ terms/     legal pages
  sitemap.ts robots.ts
components/
  Preloader.tsx Nav.tsx ProductTabs.tsx FaqAccordion.tsx EnquiryForm.tsx   (client)
  SiteEffects.tsx     scroll reveals, pinned storytelling, parallax, demo-button routing
  sections/           static section markup (server components)
lib/
  site.ts content.ts
```

## Notes

- All product screens are illustrative mockups with sample data and are labelled as such.
- FAQ structured data is intentionally not included: Google currently limits FAQ rich results to authoritative government and health sites, so this site isn't eligible. Organization structured data is included.
- Livekeeping plan inclusions come from the Livekeeping feature catalogue; confirm they're current before launch.
- Loading screen (`components/Preloader.tsx`): the logo, a slim progress line and the tagline; then the logo glides into its place in the navigation and the page fades in (~2.2s). It's skipped for returning visitors in the same browser tab and for reduced-motion users, can never block the page (CSS failsafe), and can be replayed by adding `#intro` to the URL.
