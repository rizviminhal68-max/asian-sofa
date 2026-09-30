import { Phone } from 'lucide-react'

import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'
import { PHONE_DISPLAY } from '../content/site'

/**
 * Floating contact actions — a circular WhatsApp + Call stack pinned to the
 * bottom-right corner at every viewport size, so the primary conversion
 * actions are reachable without scrolling on both mobile and desktop.
 *
 * Because the stack is `position: fixed`, it overlays the page. The footer's
 * bottom bar reserves matching clearance: `pb-20` on mobile lifts its text
 * above the (short, side-by-side) mobile row, and `sm:pr-24` keeps its text
 * out of the (taller, stacked) desktop corner. See Footer.jsx.
 */
export default function FloatingContact() {
  return (
    <div className="pointer-events-none fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex flex-row items-center gap-2.5 sm:right-6 sm:bottom-6 sm:flex-col sm:items-end sm:gap-3">
      <WhatsAppLink
        eventLabel="floating"
        icon={<WhatsAppIcon className="size-5 sm:size-6" />}
        variant="green"
        ariaLabel={`Chat with Asian Sofa on WhatsApp at ${PHONE_DISPLAY}`}
        className="pointer-events-auto !rounded-full !p-0 size-12 sm:size-14 shadow-[0_12px_28px_-12px_rgba(31,143,78,0.8)] transition hover:shadow-[0_16px_34px_-12px_rgba(31,143,78,0.9)]"
      >
        <span className="sr-only">WhatsApp</span>
      </WhatsAppLink>

      <PhoneLink
        eventLabel="floating"
        icon={<Phone className="size-5 sm:size-6" aria-hidden="true" />}
        variant="sm"
        ariaLabel={`Call Asian Sofa on ${PHONE_DISPLAY}`}
        className="pointer-events-auto !rounded-full !p-0 size-12 sm:size-14 shadow-[0_12px_28px_-12px_rgba(122,61,34,0.85)]"
      >
        <span className="sr-only">Call {PHONE_DISPLAY}</span>
      </PhoneLink>
    </div>
  )
}
