/**
 * Core business facts. Everything the site is allowed to state as fact lives
 * here. If the client supplies new details (address, hours, etc.) add them in
 * one place and they will flow through the whole site.
 *
 * NOTE: do not invent facts. Anything unknown is either omitted or written as
 * neutral, replaceable content.
 */

export const PHONE_DISPLAY = '9873112891'
export const PHONE_E164 = '+919873112891'
export const PHONE_HREF = 'tel:+919873112891'
export const WHATSAPP_NUMBER = '919873112891'
export const WHATSAPP_HREF = 'https://wa.me/919873112891'

/** Pre-filled WhatsApp enquiry text. */
export const WHATSAPP_MESSAGE =
  'Hello Asian Sofa, I need help with sofa repair / upholstery work in Gurgaon. Please share more details.'

export const whatsappLink = (message = WHATSAPP_MESSAGE) =>
  `${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`

export const site = {
  name: 'Asian Sofa',
  legalName: 'Asian Sofa',
  tagline: 'Sofa & Furniture Repair in Gurugram',
  shortDescription:
    'Asian Sofa provides sofa repair, upholstery and furniture furnishing services across Gurugram. Call or WhatsApp for service enquiries.',
  areaServed: 'Gurugram, Haryana',
  areaServedLong: 'Gurugram (Gurgaon), Haryana, India',
  city: 'Gurugram',
  region: 'Haryana',
  country: 'India',
  countryCode: 'IN',
  email: '', // Not provided by the client — intentionally blank.
  address: null, // Exact address not provided — intentionally null (never invent one).
  openingHours: null, // Opening hours not provided — intentionally null.
  socialProfiles: [], // No verified social profiles — never invent them.
}

/** Canonical origin. Override with VITE_SITE_URL in .env once the domain is live. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://www.asiansofa.in'
).replace(/\/$/, '')

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Guides', to: '/guides' },
  { label: 'Contact', to: '/contact' },
]

export const serviceCategories = [
  'Sofa Repair',
  'Upholstery',
  'Fabric Change',
  'Furniture Work',
  'Before & After',
]

export default site
