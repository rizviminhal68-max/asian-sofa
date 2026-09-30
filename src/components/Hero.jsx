import { Clock, MapPin, ShieldCheck } from 'lucide-react'

import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'
import Reveal from '../hooks/useReveal'
import { PHONE_DISPLAY } from '../content/site'
import images from '../content/images'

const highlights = [
  { icon: MapPin, label: 'Doorstep service in Gurugram' },
  { icon: ShieldCheck, label: 'Skilled upholstery work' },
  { icon: Clock, label: 'Call or WhatsApp to enquire' },
]

export default function Hero() {
  return (
    <section
      className="grain relative isolate overflow-hidden bg-forest-950 text-ivory"
      aria-labelledby="hero-heading"
    >
      {/* Workshop grid backdrop */}
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 text-ivory opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-forest-700/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/4 size-[26rem] rounded-full bg-clay-700/20 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-5 flex items-center gap-2.5 text-clay-300">
                <span aria-hidden="true" className="inline-block h-px w-7 bg-current opacity-60" />
                Sofa &amp; Furniture Repair · Gurugram
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1
                id="hero-heading"
                className="text-[2.6rem] leading-[1.02] sm:text-[3.5rem] lg:text-[4.1rem]"
              >
                Give your sofa a{' '}
                <span className="relative inline-block text-clay-300">
                  fresh new look
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 220 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-clay-500/70"
                  >
                    <path
                      d="M2 8.5C46 3.5 130 2 218 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-forest-100 sm:text-[1.125rem]">
                Is your sofa worn out but the frame is still good? Asian Sofa
                helps refresh existing furniture with repair, upholstery and
                furnishing services across Gurugram.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <PhoneLink
                  eventLabel="hero"
                  className="w-full sm:w-auto"
                  label="hero-primary-cta"
                >
                  Call {PHONE_DISPLAY}
                </PhoneLink>
                <WhatsAppLink
                  eventLabel="hero"
                  variant="green"
                  icon={<WhatsAppIcon className="size-4" />}
                  className="w-full sm:w-auto"
                  label="hero-secondary-cta"
                >
                  WhatsApp Us
                </WhatsAppLink>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-9 flex flex-col gap-x-6 gap-y-2.5 border-t border-ivory/12 pt-7 sm:flex-row sm:flex-wrap">
                {highlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 text-[0.9375rem] text-forest-200"
                  >
                    <Icon className="size-4 shrink-0 text-clay-400" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Imagery */}
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="arch overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.85)] ring-1 ring-ivory/15">
                <img
                  src={images.heroSofa.src}
                  alt={images.heroSofa.alt}
                  width={images.heroSofa.width}
                  height={images.heroSofa.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[3/2] lg:aspect-[4/5]"
                />
              </div>

              {/* Secondary detail shot */}
              <div className="absolute -bottom-7 -left-4 w-36 overflow-hidden rounded-lg border-4 border-forest-950 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.9)] sm:w-44 lg:-left-9 lg:w-52">
                <img
                  src={images.heroFabric.src}
                  alt={images.heroFabric.alt}
                  width={images.heroFabric.width}
                  height={images.heroFabric.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Stitched accent frame */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 -right-4 hidden size-28 rounded-xl border border-dashed border-clay-400/50 lg:block"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
