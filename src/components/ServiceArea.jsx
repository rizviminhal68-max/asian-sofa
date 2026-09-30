import { MapPin, Phone } from 'lucide-react'

import Section from './Section'
import Reveal from '../hooks/useReveal'
import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'
import { serviceAreaCopy, serviceAreaGroups } from '../content/serviceArea'
import { PHONE_DISPLAY } from '../content/site'
import images from '../content/images'

export default function ServiceArea() {
  return (
    <Section
      id="service-area"
      eyebrow="Where we work"
      title={serviceAreaCopy.heading}
      lead={serviceAreaCopy.lead}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="grid gap-8 sm:grid-cols-3">
            {serviceAreaGroups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 70}>
                <h3 className="stitch-b pb-3 text-[1.0625rem] text-forest-900">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-1.5">
                  {group.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2 text-[0.9375rem] text-ink-600"
                    >
                      <MapPin
                        className="mt-1 size-3.5 shrink-0 text-forest-400"
                        aria-hidden="true"
                      />
                      {area}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-9 rounded-lg bg-ivory-deep p-6 ring-1 ring-ink-900/8">
            <p className="text-[0.9375rem] leading-relaxed text-ink-700">
              <strong className="font-semibold text-forest-900">Outside these areas?</strong>{' '}
              Call or WhatsApp with your location and the sofa you need looked at.
              If we can reach you, we will tell you honestly whether the job
              makes sense to travel for.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <PhoneLink
                eventLabel="service-area"
                icon={<Phone className="size-4" aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                Call {PHONE_DISPLAY}
              </PhoneLink>
              <WhatsAppLink
                eventLabel="service-area"
                icon={<WhatsAppIcon className="size-4" />}
                variant="green"
                className="w-full sm:w-auto"
              >
                WhatsApp Us
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="lg:col-span-5">
          <div className="arch overflow-hidden ring-1 ring-ink-900/10">
            <img
              src={images.galleryFurnishing.src}
              alt={images.galleryFurnishing.alt}
              width={images.galleryFurnishing.width}
              height={images.galleryFurnishing.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
