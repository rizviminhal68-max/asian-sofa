import { Link, useSearchParams } from 'react-router-dom'
import { Clock, MapPin, Phone } from 'lucide-react'

import PageHero from '../components/PageHero'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import { PhoneLink, WhatsAppLink, WhatsAppIcon } from '../components/ContactButtons'
import Reveal from '../hooks/useReveal'
import { useSeo, breadcrumbJsonLd, faqJsonLd } from '../lib/seo'
import images from '../content/images'
import { PHONE_DISPLAY, PHONE_HREF, site, WHATSAPP_HREF } from '../content/site'
import services from '../content/services'

const contactFaqs = [
  {
    q: 'What is the fastest way to reach Asian Sofa?',
    a: `Call ${PHONE_DISPLAY} or send a message on WhatsApp. Both reach us directly. If it is easier, a WhatsApp message with a photo of the sofa gets you the quickest useful answer.`,
  },
  {
    q: 'What should I include when I get in touch?',
    a: 'Photos of the whole piece and a close-up of the problem, the number of seats if it is a sofa, and what you would like done — repair, fabric change, foam replacement or something else.',
  },
  {
    q: 'Do you need to see the sofa before quoting?',
    a: 'Photos and a description usually help us understand the work. If more detail is needed, we will tell you and arrange to look at the piece in Gurugram.',
  },
  {
    q: 'Which areas do you cover?',
    a: `Gurugram as a whole, commonly called Gurgaon — including the DLF phases, Golf Course Road and its extension, Sohna Road, the residential sectors and New Gurgaon. Call with your location and we will confirm.`,
  },
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service')
  const matchedService = services.find((s) => s.id === serviceParam)

  useSeo({
    title: 'Contact Asian Sofa | Sofa Repair in Gurugram | Call 9873112891',
    description: `Call Asian Sofa on ${PHONE_DISPLAY} or send a WhatsApp message for sofa repair, upholstery and furniture furnishing services in Gurugram, Haryana.`,
    path: '/contact',
    jsonLd: [
      breadcrumbJsonLd([
        { label: 'Home', to: '/' },
        { label: 'Contact', to: '/contact' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Asian Sofa',
        url: 'https://www.asiansofa.in/contact',
        mainEntity: { '@id': 'https://www.asiansofa.in/#business' },
      },
      faqJsonLd(contactFaqs),
    ],
  })

  // Pre-select the service field when arriving from a service link.
  const initialService = matchedService?.title ?? ''

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call or WhatsApp Asian Sofa"
        lead={`Sofa repair and upholstery services across ${site.areaServedLong}. Call ${PHONE_DISPLAY} or send a message — either way you are speaking to the person doing the work.`}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Contact', to: '/contact' },
        ]}
        image={images.galleryFabricChange.src}
        imageAlt={images.galleryFabricChange.alt}
      />

      {/* Contact cards */}
      <section className="container-page py-12 sm:py-14" aria-label="Contact details">
        <div className="grid gap-4 sm:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-lg border border-ink-900/10 bg-ivory-deep p-6">
              <span className="grid size-11 place-items-center rounded-lg bg-forest-900 text-clay-300">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 eyebrow text-clay-700">Phone</h2>
              <a
                href={PHONE_HREF}
                data-event="phone_click"
                data-event-label="contact-card"
                className="mt-1.5 block font-display text-[1.5rem] font-semibold text-forest-900 hover:text-clay-700"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-2 text-[0.875rem] text-ink-500">Tap to call directly.</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-lg border border-ink-900/10 bg-ivory-deep p-6">
              <span className="grid size-11 place-items-center rounded-lg bg-[#1f8f4e] text-ivory">
                <WhatsAppIcon className="size-5" />
              </span>
              <h2 className="mt-4 eyebrow text-clay-700">WhatsApp</h2>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                data-event-label="contact-card"
                className="mt-1.5 block font-display text-[1.5rem] font-semibold text-forest-900 hover:text-clay-700"
              >
                Message us
              </a>
              <p className="mt-2 text-[0.875rem] text-ink-500">
                Good for sending photos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="h-full rounded-lg border border-ink-900/10 bg-ivory-deep p-6">
              <span className="grid size-11 place-items-center rounded-lg bg-forest-900 text-clay-300">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 eyebrow text-clay-700">Service area</h2>
              <p className="mt-1.5 font-display text-[1.5rem] font-semibold text-forest-900">
                {site.areaServed}
              </p>
              <p className="mt-2 flex items-start gap-1.5 text-[0.875rem] text-ink-500">
                <Clock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                Doorstep service across Gurugram
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <PhoneLink eventLabel="contact-actions" className="w-full sm:w-auto">
            Call Now
          </PhoneLink>
          <WhatsAppLink
            eventLabel="contact-actions"
            icon={<WhatsAppIcon className="size-4" />}
            variant="green"
            className="w-full sm:w-auto"
          >
            WhatsApp Us
          </WhatsAppLink>
          <Link to="/services" className="btn-outline btn-outline-on-light w-full sm:w-auto">
            See services
          </Link>
        </div>
      </section>

      {/* Form */}
      <Section
        id="enquiry"
        tone="deep"
        eyebrow="Enquiry form"
        title="Tell us what needs doing"
        lead="A name, a phone number and what the job is — that is enough for us to start. Add photos on WhatsApp for the fastest answer."
      >
        <Reveal className="mx-auto max-w-3xl">
          <ContactForm initialService={initialService} />
        </Reveal>
      </Section>

      {/* Service area recap */}
      <Section
        id="contact-service-area"
        eyebrow="Service area"
        title="Where we work"
        lead="Gurugram as a whole — commonly searched as Gurgaon. If you are nearby, get in touch."
        width="narrow"
      >
        <div className="flex flex-wrap gap-2">
          {[
            'DLF Phase 1', 'DLF Phase 2', 'DLF Phase 3', 'DLF Phase 4', 'DLF Phase 5',
            'Golf Course Road', 'Golf Course Extension Road', 'Sohna Road', 'New Gurgaon',
            'Sector 14', 'Sector 21', 'Sector 22', 'Sector 23', 'Sector 40', 'Sector 43',
            'Sector 45', 'Sector 46', 'Sector 47', 'Sector 49', 'Sector 50', 'Sector 56',
            'Sector 57', 'Sector 58',
          ].map((area) => (
            <span
              key={area}
              className="rounded-full bg-ivory-deep px-3.5 py-1.5 text-[0.8125rem] font-semibold text-ink-700 ring-1 ring-ink-900/8"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-7">
          <Link to="/#service-area" className="link-arrow">
            See the full service area
          </Link>
        </div>
      </Section>

      <FAQ
        id="contact-faq"
        items={contactFaqs}
        eyebrow="Before you call"
        title="Quick answers"
        lead="The things people usually want to know before getting in touch."
      />
    </>
  )
}
