import { useEffect } from 'react'

import { SITE_URL, site, PHONE_E164 } from '../content/site'

/* --------------------------------------------------------------------------
   Tag helpers — create if missing, otherwise update in place.
   -------------------------------------------------------------------------- */

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== 'content') el.setAttribute(k, v)
    })
    el.setAttribute('content', attrs.content ?? '')
    document.head.appendChild(el)
  } else {
    Object.entries(attrs).forEach(([k, v]) => {
      if (v == null) return
      if (k === 'content') el.setAttribute('content', v)
      else el.setAttribute(k, v)
    })
  }
  return el
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  return el
}

/** JSON-LD blocks are managed by key so they update instead of duplicating. */
function upsertJsonLd(key, data) {
  const id = `ld-json-${key}`
  let el = document.getElementById(id)
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/** Remove per-page JSON-LD from the previous route before writing new blocks. */
function clearPageJsonLd() {
  document.head
    .querySelectorAll('script[id^="ld-json-page-"]')
    .forEach((el) => el.remove())
}

/* --------------------------------------------------------------------------
   Structured data
   -------------------------------------------------------------------------- */

/**
 * LocalBusiness structured data.
 *
 * Deliberately excludes anything the client has not confirmed: no street
 * address, no opening hours, no ratings, no price range, no social profiles.
 */
export const localBusinessJsonLd = (biz = site) => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: biz.name,
  description: biz.shortDescription,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/images/og-asian-sofa.jpg`,
  telephone: PHONE_E164,
  address: {
    '@type': 'PostalAddress',
    addressLocality: biz.city,
    addressRegion: biz.region,
    addressCountry: biz.country,
  },
  areaServed: [
    { '@type': 'City', name: 'Gurugram' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'State', name: 'Haryana' },
  ],
  knowsLanguage: ['en'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sofa and Furniture Repair Services',
    itemListElement: [
      'Sofa Repair',
      'Sofa Upholstery',
      'Sofa Fabric Change',
      'Sofa Foam Replacement',
      'Sofa Cushion Repair',
      'Furniture Repair',
      'Furniture Polishing',
      'Custom Furniture Furnishing',
      'Leatherette / Rexine Replacement',
      'Chair Upholstery',
      'Bed Upholstery',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: PHONE_E164,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en'],
    },
  ],
})

export const websiteJsonLd = (biz = site) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: biz.name,
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE_URL}/#business` },
})

export const breadcrumbJsonLd = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: `${SITE_URL}${item.to}`,
  })),
})

/** `items` are the same `{ q, a }` objects the FAQ accordion renders. */
export const faqJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
})

export const articleJsonLd = ({ title, description, url, image, datePublished }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  mainEntityOfPage: `${SITE_URL}${url}`,
  url: `${SITE_URL}${url}`,
  image: `${SITE_URL}${image}`,
  ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
  author: { '@type': 'Organization', name: site.name, url: `${SITE_URL}/` },
  publisher: { '@id': `${SITE_URL}/#business` },
})

/* --------------------------------------------------------------------------
   useSeo hook
   -------------------------------------------------------------------------- */

const OG_TYPE_DEFAULT = 'website'

export function useSeo({
  title,
  description,
  path = '/',
  image = '/images/og-asian-sofa.jpg',
  type = OG_TYPE_DEFAULT,
  jsonLd = [],
  noindex = false,
} = {}) {
  // Serialised once so the effect has a stable, primitive dependency.
  const jsonLdKey = JSON.stringify(jsonLd)

  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const fullTitle = title
    const img = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = fullTitle

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    })

    upsertLink('canonical', url)

    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Asian Sofa' })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: img })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: img })

    upsertJsonLd('business', localBusinessJsonLd())
    upsertJsonLd('website', websiteJsonLd())

    clearPageJsonLd()
    JSON.parse(jsonLdKey).forEach((entry, i) => {
      upsertJsonLd(`page-${i}`, entry)
    })
  }, [title, description, path, image, type, noindex, jsonLdKey])
}

export { SITE_URL }
