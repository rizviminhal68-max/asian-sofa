# Asian Sofa

Marketing website for **Asian Sofa** — sofa repair, upholstery and furniture
furnishing services across Gurugram (Gurgaon), Haryana.

Built as a client-side React single-page application. Every route is a real
path; see [Routing](#routing-and-seo) for how that is served in production.

## Stack

| Concern    | Choice                                       |
| ---------- | -------------------------------------------- |
| Build      | Vite 8                                       |
| UI         | React 19 + React Router 7                     |
| Styling    | Tailwind CSS 4 (`@tailwindcss/vite`)          |
| Icons      | `lucide-react`                                |
| Lint       | `oxlint`                                      |
| Fonts      | Fraunces + Manrope, self-hosted Latin subset  |

No UI kit, no component library, no runtime CSS-in-JS.

## Getting started

```bash
npm install
npm run dev      # dev server, HMR
npm run lint     # oxlint
npm run build    # production build -> dist/
npm run preview  # serve the built dist/ locally
npm run images   # legacy: writes the old SVG placeholders (do not run)
```

## Environment

Copy `.env.example` to `.env` (git-ignored) and fill in real values. Vite only
exposes `VITE_`-prefixed variables to the client bundle.

| Variable                 | Required | Purpose                                                                                       |
| ------------------------ | -------- | --------------------------------------------------------------------------------------------- |
| `VITE_SITE_URL`          | yes      | Canonical origin. Drives canonical tags, Open Graph URLs, JSON-LD `@id`s and `sitemap.xml`.     |
| `VITE_ENQUIRY_ENDPOINT`  | no       | Endpoint that receives the contact form as JSON. Blank = WhatsApp handoff (nothing is sent).    |
| `VITE_GTM_ID`            | no       | Reserved. No container ID is hard-coded or injected by this project — see [Tracking](#tracking). |

`VITE_SITE_URL` currently falls back to `https://www.asiansofa.in` in
`src/content/site.js`. **Confirm the real domain before launch.**

## Content editing

All copy lives in `src/content/` — no text is hard-coded inside components.

| File                      | Contains                                              |
| ------------------------- | ----------------------------------------------------- |
| `site.js`                 | Business name, phone, WhatsApp URL, service area, nav  |
| `services.js`             | Service categories, groups, contact form service list  |
| `whyChooseUs.js`          | Homepage differentiators                               |
| `faqs.js`                 | FAQ accordion entries (also drives FAQPage JSON-LD)     |
| `serviceArea.js`          | Locality coverage copy                                 |
| `guides.js`               | SEO guide articles, blocks and related slugs           |
| `gallery.js`              | Gallery items and before/after pairs                   |
| `images.js`               | Image paths, intrinsic dimensions and alt text          |

> Anything not supplied by the client (exact street address, opening hours,
> founding year, team size, social profiles, prices, review counts) is
> deliberately **absent** rather than invented. Add it here as real facts arrive.

## Replacing the images

Every image currently in `public/images/` is free, commercially-usable stock
photography (StockSnap and the WordPress Photo Directory, both CC0). These are
stand-ins until the client supplies photos of their own completed work.

To swap in the client's photography:

1. Drop the file into `public/images/` (keep the filename, or rename it).
2. Update the matching entry in `src/content/images.js`, including the real
   `width`/`height` (this prevents layout shift) and a descriptive `alt`.
3. Re-run `npm run lint && npm run build`.

The legacy placeholder generator is `scripts/generate-placeholders.mjs`. Do
**not** run `npm run images` — it writes the old SVG placeholders back.

## Contact form

`src/components/ContactForm.jsx` validates in the browser and then:

- **with** `VITE_ENQUIRY_ENDPOINT` — POSTs `{ name, phone, service, message }` as JSON;
- **without** it — builds a WhatsApp deep link pre-filled with the enquiry and
  opens it. No data is transmitted or stored.

There is no server, database or spam protection. Add an endpoint before
promising the client that enquiries are stored anywhere.

## Analytics / tracking

`src/lib/tracking.js` exposes an `EVENTS` map and a single delegated
`click` listener on `document`. Every tracked element carries
`data-event`, `data-event-label` and `data-event-category` attributes, so new
events can be added purely from markup:

```jsx
<a data-event="whatsapp_click" data-event-label="hero" data-event-category="contact">
```

Listeners are pushed to `window.dataLayer`, so connecting GTM or GA4 requires
only pasting the container snippet into `index.html` — no code changes. No
placeholder or invented measurement ID is included.

## Routing and SEO

Routes: `/`, `/services`, `/gallery`, `/about`, `/guides`,
`/guides/:slug`, `/contact`, and a catch-all 404.

The site is a SPA, so the host must rewrite unknown paths to `index.html` and
**not** return a 404 for client routes. On Netlify use `public/_redirects`:

```
/*  /index.html  200
```

On Vercel use `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Per-page metadata, canonicals, Open Graph and Twitter tags are set by
`src/lib/seo.js` via `useSeo()`. JSON-LD is emitted for:

| Type                | Where                                                    |
| ------------------- | -------------------------------------------------------- |
| `LocalBusiness`     | Site-wide (every page), incl. `OfferCatalog` of services |
| `WebSite`           | Site-wide (every page)                                   |
| `BreadcrumbList`    | Every page except the homepage                           |
| `FAQPage`           | `/` and `/contact`                                       |
| `ItemList`          | `/services`                                              |
| `CollectionPage`    | `/guides`                                                |
| `Article`           | `/guides/:slug`                                          |
| `AboutPage`         | `/about`                                                 |
| `ContactPage`       | `/contact`                                               |

`public/sitemap.xml` and `public/robots.txt` are hand-maintained — update
`sitemap.xml` when adding or removing a guide.

> `og-asian-sofa.jpg` is a 1200×630 JPEG suitable for social previews. Replace
> it with a branded image before launch if desired.

## Design system

Tokens are CSS custom properties defined at the top of `src/index.css`:
forest / ivory / clay palette, type scale, radii, shadows and the self-hosted
font faces. Reusable primitives: `btn`, `btn-primary`, `btn-outline`,
`eyebrow`, `card`, `arch`, `chip`, `rule` and the reveal animations.

## Accessibility

Skip link, single `<h1>` per page, labelled landmarks, visible focus rings,
`aria-expanded` on the mobile menu, keyboard-dismissible lightbox, and
`prefers-reduced-motion` support. Colours were chosen to keep body text at or
above WCAG AA contrast.

## Deployment

`npm run build` emits a fully static `dist/`. Deploy to any static host. No
server-side runtime is required.

Remember to set `VITE_SITE_URL`, confirm the domain, add the SPA rewrite rule,
and replace the placeholder images.
