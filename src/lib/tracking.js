/**
 * Analytics / GTM readiness.
 * ---------------------------------------------------------------------------
 * No Google Analytics or GTM ID is hard-coded anywhere in this project.
 *
 * The important user actions already carry `data-event` attributes
 * (phone_click, whatsapp_click, contact_form_submit, service_enquiry_click)
 * so a GTM container can be attached later without touching component code.
 *
 * Additionally, a single delegated listener pushes those events into
 * `window.dataLayer`, which means GA4 / GTM will pick them up as soon as a
 * container is installed — no further code changes required.
 */

export const EVENTS = {
  PHONE_CLICK: 'phone_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  SERVICE_ENQUIRY_CLICK: 'service_enquiry_click',
  NAV_CLICK: 'nav_click',
  GALLERY_FILTER: 'gallery_filter',
  GUIDE_OPEN: 'guide_open',
  FAQ_EXPAND: 'faq_expand',
}

/** Extra context attached to a tracked event. */
function collectDetail(element) {
  if (!element) return {}
  return {
    event_label: element.dataset.eventLabel || undefined,
    link_url: element.getAttribute('href') || undefined,
    event_category: element.dataset.eventCategory || undefined,
  }
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  const layer = window.dataLayer
  if (!Array.isArray(layer)) return
  layer.push({ event: name, ...params })
}

/**
 * Installs the delegated click listener. Call once from the app root.
 * Returns a cleanup function.
 */
export function installTracking() {
  if (typeof document === 'undefined') return () => {}

  const handler = (event) => {
    const target = event.target
    if (!target || typeof target.closest !== 'function') return

    const element = target.closest('[data-event]')
    if (!element) return

    trackEvent(element.dataset.event, {
      ...collectDetail(element),
      page_path: window.location.pathname,
      page_location: window.location.href,
    })
  }

  document.addEventListener('click', handler, { passive: true })
  return () => document.removeEventListener('click', handler)
}

export default { EVENTS, trackEvent, installTracking }
