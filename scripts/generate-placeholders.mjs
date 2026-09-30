/**
 * Asian Sofa — placeholder image generator
 * ---------------------------------------------------------------------------
 * These are BRAND-PLACED PLACEHOLDERS, not real project photography.
 * They use the Asian Sofa palette so the site looks finished while real
 * photographs are collected from the client.
 *
 * TO SWAP IN REAL PHOTOGRAPHY
 *   1. Drop the real photo into `public/images/` using the SAME filename but an
 *      optimised extension (.webp or .avif recommended).
 *   2. Update the matching entry in `src/content/images.js`.
 *   3. Add `width` + `height` for that entry so layout never shifts.
 *
 * Run:  npm run images
 */

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')

const palette = {
  forest950: '#0c1a13',
  forest900: '#12281d',
  forest800: '#1a3a2a',
  forest700: '#234c37',
  clay600: '#ac6139',
  clay500: '#c27648',
  clay300: '#e4b793',
  ivory: '#fbf8f2',
  sand: '#ede3d3',
  sandDeep: '#e1d4bf',
  ink900: '#241f1a',
  ink400: '#8c8177',
}

/* --------------------------------------------------------------------------
   Subject drawings — stroke-based line art inside a 400x300 viewBox.
   -------------------------------------------------------------------------- */

const subjects = {
  sofa: `
    <rect x="58" y="96" width="284" height="96" rx="26"/>
    <path d="M58 140h284M200 140v52"/>
    <rect x="30" y="132" width="34" height="104" rx="14"/>
    <rect x="336" y="132" width="34" height="104" rx="14"/>
    <rect x="66" y="192" width="132" height="44" rx="12"/>
    <rect x="202" y="192" width="132" height="44" rx="12"/>
    <path d="M74 236v20M326 236v20"/>`,
  'sofa-side': `
    <path d="M64 226h272v22a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8z"/>
    <rect x="64" y="150" width="180" height="76" rx="22"/>
    <rect x="244" y="118" width="92" height="108" rx="26"/>
    <path d="M78 256v16M322 256v16M140 226v30"/>`,
  armchair: `
    <rect x="104" y="104" width="192" height="112" rx="30"/>
    <rect x="74" y="168" width="46" height="104" rx="18"/>
    <rect x="280" y="168" width="46" height="104" rx="18"/>
    <rect x="120" y="204" width="160" height="68" rx="16"/>
    <path d="M92 272v18M308 272v18M200 204v68"/>`,
  bed: `
    <rect x="54" y="82" width="292" height="86" rx="18"/>
    <path d="M200 82v86M78 122h98M224 122h98"/>
    <rect x="40" y="168" width="320" height="46" rx="12"/>
    <path d="M40 214h320v44a10 10 0 0 1-10 10H50a10 10 0 0 1-10-10z"/>
    <path d="M74 268v14M326 268v14"/>`,
  swatch: `
    <path d="M92 92h150a26 26 0 0 1 26 26v92a26 26 0 0 1-26 26h-64l-38 34v-34H92a26 26 0 0 1-26-26v-92a26 26 0 0 1 26-26z"/>
    <path d="M124 132h116M124 164h116M124 196h72"/>
    <rect x="258" y="150" width="76" height="118" rx="14"/>`,
  tools: `
    <path d="M108 246l78-78"/>
    <rect x="88" y="86" width="120" height="46" rx="14" transform="rotate(-45 88 86)"/>
    <circle cx="268" cy="128" r="34"/>
    <circle cx="318" cy="184" r="34"/>
    <path d="M290 150l-62 62"/>
    <path d="M150 236l-34 34M120 208l34 34"/>`,
  foam: `
    <rect x="58" y="106" width="284" height="52" rx="10"/>
    <rect x="58" y="166" width="284" height="52" rx="10"/>
    <rect x="58" y="226" width="284" height="46" rx="10"/>
    <path d="M58 132h284M58 192h284"/>
    <path d="M92 106v166M150 106v166M208 106v166M266 106v166" stroke-dasharray="3 9"/>`,
  room: `
    <path d="M44 250V138l156-96 156 96v112z"/>
    <rect x="90" y="176" width="220" height="74" rx="18"/>
    <rect x="66" y="192" width="28" height="58" rx="10"/>
    <rect x="306" y="192" width="28" height="58" rx="10"/>
    <rect x="122" y="196" width="74" height="54" rx="10"/>
    <rect x="204" y="196" width="74" height="54" rx="10"/>
    <rect x="252" y="72" width="34" height="42" rx="6"/>`,
  fabric: `
    <rect x="52" y="76" width="296" height="200" rx="18"/>
    <path d="M52 116h296M52 156h296M52 196h296M52 236h296"/>
    <path d="M96 76v200M140 76v200M184 76v200M228 76v200M272 76v200M316 76v200" stroke-dasharray="2 14"/>`,
  detail: `
    <circle cx="200" cy="176" r="86"/>
    <circle cx="200" cy="176" r="52"/>
    <path d="M200 90v172M114 176h172"/>
    <circle cx="200" cy="176" r="14"/>`,
}

/* Background treatments, keyed by mood. */
const moods = {
  dark: {
    bg: palette.forest950,
    bg2: palette.forest800,
    line: palette.forest400,
    text: palette.ivory,
    muted: palette.forest300,
  },
  light: {
    bg: palette.ivory,
    bg2: palette.sand,
    line: palette.forest700,
    text: palette.ink900,
    muted: palette.ink400,
  },
  clay: {
    bg: palette.clay600,
    bg2: palette.clay800,
    line: palette.clay300,
    text: palette.ivory,
    muted: palette.clay200,
  },
}

/** SVG is XML — any `&`, `<`, `>`, `"` or `'` in text must be escaped. */
const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

/** Build one placeholder SVG. */
function makeSvg({ subject, mood = 'light', w = 1200, h = 800, label, kicker }) {
  const m = moods[mood]
  const vbW = 400
  const vbH = 300
  // Centre the 400x300 art inside the requested aspect ratio.
  const scale = Math.min(w / vbW, h / vbH) * 0.62
  const tx = (w - vbW * scale) / 2
  const ty = (h - vbH * scale) / 2
  const id = Math.random().toString(36).slice(2, 8)
  const alt = escapeXml(label)
  const capKicker = escapeXml(kicker ?? 'ASIAN SOFA · GURUGRAM')
  const capLabel = escapeXml(label)

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${alt}">
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${m.bg}"/>
      <stop offset="1" stop-color="${m.bg2}"/>
    </linearGradient>
    <filter id="grain-${id}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.12"/></feComponentTransfer>
    </filter>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#bg-${id})"/>

  <!-- measuring-paper grid -->
  <g stroke="${m.muted}" stroke-opacity="0.14" stroke-width="1">
    ${Array.from({ length: Math.ceil(w / 60) + 1 }, (_, i) => `<path d="M${i * 60} 0V${h}"/>`).join('')}
    ${Array.from({ length: Math.ceil(h / 60) + 1 }, (_, i) => `<path d="M0 ${i * 60}H${w}"/>`).join('')}
  </g>

  <!-- subject line art -->
  <g transform="translate(${tx} ${ty}) scale(${scale})"
     fill="none" stroke="${m.line}" stroke-width="3.2"
     stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.85">
    ${subjects[subject] ?? subjects.sofa}
  </g>

  <!-- stitched inner border -->
  <rect x="22" y="22" width="${w - 44}" height="${h - 44}" rx="10" fill="none"
        stroke="${m.muted}" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="7 9"/>

  <rect width="${w}" height="${h}" filter="url(#grain-${id})" opacity="0.5"/>

  <!-- label -->
  <g font-family="Manrope, Segoe UI, sans-serif">
    <text x="52" y="${h - 74}" font-size="17" font-weight="700" letter-spacing="3.6"
          fill="${m.muted}" fill-opacity="0.9">${capKicker}</text>
    <text x="52" y="${h - 44}" font-size="25" font-weight="700" letter-spacing="0.2"
          fill="${m.text}">${capLabel}</text>
  </g>
</svg>
`
}

/* --------------------------------------------------------------------------
   Manifest — mirrors src/content/images.js
   -------------------------------------------------------------------------- */

const assets = [
  // Hero
  ['hero-sofa-workshop', { subject: 'sofa', mood: 'dark', label: 'Sofa Repair & Upholstery' }],
  ['hero-fabric-detail', { subject: 'fabric', mood: 'clay', label: 'Fabric & Rexine Work' }],
  ['hero-chair-detail', { subject: 'armchair', mood: 'light', label: 'Chair Upholstery' }],

  // Services
  ['service-sofa-repair', { subject: 'sofa', mood: 'light', label: 'Sofa Repair' }],
  ['service-sofa-upholstery', { subject: 'sofa-side', mood: 'dark', label: 'Sofa Upholstery' }],
  ['service-fabric-change', { subject: 'fabric', mood: 'clay', label: 'Sofa Fabric Change' }],
  ['service-foam-replacement', { subject: 'foam', mood: 'light', label: 'Foam Replacement' }],
  ['service-cushion-repair', { subject: 'detail', mood: 'dark', label: 'Cushion Repair' }],
  ['service-furniture-repair', { subject: 'detail', mood: 'light', label: 'Furniture Repair' }],
  ['service-furniture-polishing', { subject: 'tools', mood: 'dark', label: 'Furniture Polishing' }],
  ['service-chair-upholstery', { subject: 'armchair', mood: 'light', label: 'Chair Upholstery' }],
  ['service-bed-upholstery', { subject: 'bed', mood: 'dark', label: 'Bed Upholstery' }],
  ['service-leatherette', { subject: 'swatch', mood: 'clay', label: 'Leatherette / Rexine' }],
  ['service-custom-furnishing', { subject: 'room', mood: 'light', label: 'Custom Furnishing' }],

  // Before / after pairs
  ['before-sofa-fabric-change', { subject: 'sofa', mood: 'light', label: 'Before', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['after-sofa-fabric-change', { subject: 'sofa-side', mood: 'clay', label: 'After', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['before-sofa-repair', { subject: 'sofa-side', mood: 'light', label: 'Before', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['after-sofa-repair', { subject: 'sofa', mood: 'dark', label: 'After', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['before-foam-replacement', { subject: 'foam', mood: 'light', label: 'Before', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['after-foam-replacement', { subject: 'foam', mood: 'clay', label: 'After', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['before-furniture-restoration', { subject: 'armchair', mood: 'light', label: 'Before', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['after-furniture-restoration', { subject: 'armchair', mood: 'dark', label: 'After', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['before-upholstery-work', { subject: 'fabric', mood: 'light', label: 'Before', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],
  ['after-upholstery-work', { subject: 'swatch', mood: 'clay', label: 'After', kicker: 'PLACEHOLDER · REPLACE WITH REAL PHOTO' }],

  // Gallery
  ['asian-sofa-repair-gurugram', { subject: 'sofa', mood: 'dark', label: 'Sofa Repair' }],
  ['asian-sofa-upholstery', { subject: 'sofa-side', mood: 'light', label: 'Upholstery Work' }],
  ['sofa-fabric-change-gurugram', { subject: 'fabric', mood: 'clay', label: 'Fabric Change' }],
  ['furniture-repair-gurugram', { subject: 'detail', mood: 'light', label: 'Furniture Repair' }],
  ['asian-sofa-foam-replacement', { subject: 'foam', mood: 'light', label: 'Foam Replacement' }],
  ['asian-sofa-chair-upholstery', { subject: 'armchair', mood: 'dark', label: 'Chair Upholstery' }],
  ['asian-sofa-bed-upholstery', { subject: 'bed', mood: 'dark', label: 'Bed Upholstery' }],
  ['asian-sofa-rexine-work', { subject: 'swatch', mood: 'light', label: 'Rexine Work' }],
  ['asian-sofa-cushion-repair', { subject: 'detail', mood: 'clay', label: 'Cushion Repair' }],
  ['asian-sofa-furniture-polishing', { subject: 'tools', mood: 'light', label: 'Furniture Polishing' }],
  ['asian-sofa-custom-furnishing', { subject: 'room', mood: 'dark', label: 'Custom Furnishing' }],
  ['asian-sofa-stitch-work', { subject: 'fabric', mood: 'dark', label: 'Stitching Detail' }],

  // About / misc
  ['about-workshop', { subject: 'tools', mood: 'dark', label: 'Workshop & Craft' }],
  ['about-detail', { subject: 'detail', mood: 'clay', label: 'Upholstery Detail' }],
  ['og-asian-sofa', { subject: 'sofa', mood: 'dark', label: 'Asian Sofa — Sofa & Furniture Repair in Gurugram', w: 1200, h: 630 }],
]

mkdirSync(OUT_DIR, { recursive: true })

for (const [name, opts] of assets) {
  writeFileSync(resolve(OUT_DIR, `${name}.svg`), makeSvg(opts), 'utf8')
}

// Deterministic favicon: a stitched cushion mark on forest green.
writeFileSync(
  resolve(OUT_DIR, '..', 'favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="${palette.forest900}"/>
  <g fill="none" stroke="${palette.clay500}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="22" width="40" height="22" rx="8"/>
    <path d="M12 33h40M32 33v11"/>
    <rect x="7" y="28" width="7" height="20" rx="3.5"/>
    <rect x="50" y="28" width="7" height="20" rx="3.5"/>
    <path d="M14 44v6M50 44v6"/>
  </g>
</svg>
`,
  'utf8',
)

console.log(`Generated ${assets.length + 1} placeholder assets in public/`)
