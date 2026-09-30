import { Phone } from 'lucide-react'

import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'
import { PHONE_DISPLAY } from '../content/site'

/**
 * Floating contact actions.
 *  - Desktop: circular phone + WhatsApp buttons pinned bottom-right.
 *  - Mobile : full-width fixed bottom bar with Call | WhatsApp.
 * Both are hidden from assistive tech duplication-wise by design — the bar
 * replaces the circles below `sm`, and both carry descriptive labels.
 */
export default function FloatingContact() {
  return (
    <>
      {/* Desktop: circular buttons */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 sm:flex">
        <WhatsAppLink
          eventLabel="floating"
          icon={<WhatsAppIcon className="size-6" />}
          variant="green"
          ariaLabel={`Chat with Asian Sofa on WhatsApp at ${PHONE_DISPLAY}`}
          className="pointer-events-auto !rounded-full !p-0 size-14 shadow-[0_12px_28px_-12px_rgba(31,143,78,0.8)] hover:shadow-[0_16px_34px_-12px_rgba(31,143,78,0.9)]"
        >
          <span className="sr-only">WhatsApp</span>
        </WhatsAppLink>

        <PhoneLink
          eventLabel="floating"
          icon={<Phone className="size-6" aria-hidden="true" />}
          variant="sm"
          ariaLabel={`Call Asian Sofa on ${PHONE_DISPLAY}`}
          className="pointer-events-auto !rounded-full !p-0 size-14 shadow-[0_12px_28px_-12px_rgba(122,61,34,0.85)]"
        >
          <span className="sr-only">Call {PHONE_DISPLAY}</span>
        </PhoneLink>
      </div>

      {/* Mobile: fixed action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-ivory/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
        <div className="flex gap-2">
          <PhoneLink
            eventLabel="mobile-bar"
            icon={<Phone className="size-4" aria-hidden="true" />}
            className="flex-1"
          >
            Call Now
          </PhoneLink>
          <WhatsAppLink
            eventLabel="mobile-bar"
            icon={<WhatsAppIcon className="size-4" />}
            variant="green"
            className="flex-1"
          >
            WhatsApp
          </WhatsAppLink>
        </div>
      </div>

      {/* Spacer so the mobile bar never covers footer content. */}
      <div aria-hidden="true" className="h-[4.75rem] sm:hidden" />
    </>
  )
}
