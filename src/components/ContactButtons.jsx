import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '../content/site'
import { EVENTS } from '../lib/tracking'

/**
 * Phone link. Always carries the analytics attributes so GTM/GA4 can be wired
 * up later without touching this component.
 */
export function PhoneLink({
  children = 'Call Now',
  className = '',
  variant = 'primary',
  label,
  ariaLabel = `Call Asian Sofa on ${PHONE_DISPLAY}`,
  eventLabel = 'generic',
  icon = null,
  ...rest
}) {
  const variants = {
    primary: 'btn-primary',
    dark: 'btn-primary',
    outlineLight: 'btn-outline btn-outline-on-light',
    outlineDark: 'btn-outline btn-outline-on-dark',
    footer: 'btn-outline btn-outline-on-dark btn-sm',
    sm: 'btn-primary btn-sm',
  }

  return (
    <a
      href={PHONE_HREF}
      className={`${variants[variant] ?? variants.primary} ${className}`}
      aria-label={ariaLabel}
      data-event={EVENTS.PHONE_CLICK}
      data-event-label={label ?? eventLabel}
      data-event-category="contact"
      {...rest}
    >
      {icon}
      <span>{children}</span>
      <span className="sr-only"> — {PHONE_DISPLAY}</span>
    </a>
  )
}

/** WhatsApp link with a pre-filled enquiry message. */
export function WhatsAppLink({
  children = 'WhatsApp Us',
  className = '',
  variant = 'outlineLight',
  label,
  ariaLabel = 'Message Asian Sofa on WhatsApp',
  eventLabel = 'generic',
  icon = null,
  ...rest
}) {
  const variants = {
    green: 'btn-primary !bg-[#1f8f4e] hover:!bg-[#1a7a43]',
    outlineLight: 'btn-outline btn-outline-on-light',
    outlineDark: 'btn-outline btn-outline-on-dark',
    sm: 'btn-outline btn-outline-on-light btn-sm',
  }

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant] ?? variants.outlineLight} ${className}`}
      aria-label={ariaLabel}
      data-event={EVENTS.WHATSAPP_CLICK}
      data-event-label={label ?? eventLabel}
      data-event-category="contact"
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  )
}

/** WhatsApp glyph — brand-accurate and avoids pulling in another dependency. */
export function WhatsAppIcon({ className = 'size-4', strokeWidth = 2 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      strokeWidth={strokeWidth}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.83 9.83 0 0 0 4.7 1.19h.01c5.43 0 9.86-4.42 9.86-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2zm0 17.99h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.15 8.15 0 0 1-1.25-4.36c0-4.53 3.68-8.21 8.21-8.21 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.68 8.2-8.21 8.2z" />
    </svg>
  )
}

export { PHONE_HREF, WHATSAPP_HREF }
