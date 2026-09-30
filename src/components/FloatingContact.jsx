import { Phone } from 'lucide-react'

import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'
import { PHONE_DISPLAY } from '../content/site'

/**
 * Floating action buttons — circular WhatsApp (top) and Call (bottom) actions
 * pinned to the bottom-right corner at every viewport size, so the primary
 * conversion actions are always one tap away.
 *
 * The stack is `position: fixed` (z-1000) and therefore overlays the page.
 * The footer's bottom bar reserves matching clearance: `pb-36` on mobile lifts
 * its text above the stack, and `sm:pr-24` keeps its text out of the corner
 * from `sm` up. The gallery lightbox sits at z-1100 so it still covers these.
 * See Footer.jsx, Lightbox.jsx and the `.fab` rules in index.css.
 */
export default function FloatingContact() {
  return (
    <div className="pointer-events-none fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-[1000] flex flex-col items-center gap-3">
      <WhatsAppLink
        eventLabel="floating-whatsapp"
        variant="primary"
        icon={<WhatsAppIcon className="size-7" />}
        ariaLabel={`Chat with Asian Sofa on WhatsApp at ${PHONE_DISPLAY}`}
        className="fab fab-whatsapp pointer-events-auto"
      >
        <span className="sr-only">WhatsApp</span>
      </WhatsAppLink>

      <PhoneLink
        eventLabel="floating-call"
        variant="primary"
        icon={<Phone className="size-6" aria-hidden="true" />}
        ariaLabel={`Call Asian Sofa on ${PHONE_DISPLAY}`}
        className="fab fab-call pointer-events-auto"
      >
        <span className="sr-only">Call {PHONE_DISPLAY}</span>
      </PhoneLink>
    </div>
  )
}
