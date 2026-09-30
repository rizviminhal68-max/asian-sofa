import { Phone } from 'lucide-react'

import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'
import Reveal from '../hooks/useReveal'
import { PHONE_DISPLAY, site } from '../content/site'

/** Final conversion band, used at the bottom of most pages. */
export default function CTASection({
  eyebrow = 'Ready when you are',
  title = 'Tell us about your sofa',
  lead = 'Send a few photos on WhatsApp or give us a call. Either way, we can tell you what the work involves and whether repair is worth it.',
  tone = 'forest',
}) {
  const dark = tone === 'forest'

  return (
    <section
      className={`grain relative overflow-hidden ${
        dark ? 'bg-forest-950 text-ivory' : 'bg-clay-600 text-ivory'
      }`}
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 text-ivory opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-[28rem] rounded-full bg-forest-700/35 blur-3xl"
      />

      <div className="container-page relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4 flex items-center gap-2.5 text-clay-300">
              <span aria-hidden="true" className="inline-block h-px w-7 bg-current opacity-60" />
              {eyebrow}
            </p>
            <h2
              id="cta-heading"
              className="text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3rem]"
            >
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-forest-200">
              {lead}
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="rounded-lg bg-ivory/6 p-6 ring-1 ring-ivory/15 backdrop-blur-sm sm:p-7">
              <p className="eyebrow text-forest-300">{site.name}</p>
              <a
                href="tel:+919873112891"
                data-event="phone_click"
                data-event-label="cta-band-number"
                className="mt-3 block font-display text-[2rem] leading-none font-semibold text-ivory hover:text-clay-300 sm:text-[2.4rem]"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-3 text-[0.875rem] text-forest-200">
                Serving {site.areaServedLong}
              </p>

              <div className="mt-6 grid gap-2.5">
                <PhoneLink
                  eventLabel="cta-band"
                  icon={<Phone className="size-4" aria-hidden="true" />}
                  className="w-full"
                >
                  Call Now
                </PhoneLink>
                <WhatsAppLink
                  eventLabel="cta-band"
                  icon={<WhatsAppIcon className="size-4" />}
                  variant="green"
                  className="w-full"
                >
                  WhatsApp Us
                </WhatsAppLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
