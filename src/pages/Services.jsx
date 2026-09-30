import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Phone } from 'lucide-react'

import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTASection from '../components/CTASection'
import ServiceCard from '../components/ServiceCard'
import { PhoneLink, WhatsAppLink, WhatsAppIcon } from '../components/ContactButtons'
import Reveal from '../hooks/useReveal'
import { useSeo, breadcrumbJsonLd } from '../lib/seo'
import services, { serviceGroups, servicesByGroup } from '../content/services'
import images from '../content/images'
import guides from '../content/guides'
import { PHONE_DISPLAY, site } from '../content/site'

export default function Services() {
  useSeo({
    title: 'Sofa Repair & Upholstery Services in Gurugram | Asian Sofa',
    description:
      'Sofa repair, reupholstery, fabric change, foam replacement, furniture repair, polishing and rexine work across Gurugram. Call Asian Sofa to discuss your requirement.',
    path: '/services',
    jsonLd: [
      breadcrumbJsonLd([
        { label: 'Home', to: '/' },
        { label: 'Services', to: '/services' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Asian Sofa services',
        itemListElement: services.map((service, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: service.title,
          description: service.short,
        })),
      },
    ],
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sofa repair, upholstery and furniture work"
        lead="These are the categories of work Asian Sofa takes on across Gurugram. If you are not sure which one applies to your sofa, send a photo and we will tell you."
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
        ]}
        image={images.serviceUpholstery.src}
        imageAlt={images.serviceUpholstery.alt}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <PhoneLink
            eventLabel="services-hero"
            icon={<Phone className="size-4" aria-hidden="true" />}
            className="w-full sm:w-auto"
          >
            Call {PHONE_DISPLAY}
          </PhoneLink>
          <WhatsAppLink
            eventLabel="services-hero"
            icon={<WhatsAppIcon className="size-4" />}
            variant="green"
            className="w-full sm:w-auto"
          >
            Send photos on WhatsApp
          </WhatsAppLink>
        </div>
      </PageHero>

      {/* What counts as a service category */}
      <div className="border-b border-ink-900/8 bg-ivory-deep">
        <div className="container-page py-6">
          <p className="text-[0.875rem] leading-relaxed text-ink-600">
            <strong className="font-semibold text-forest-900">A note on this list:</strong>{' '}
            these are service <em>categories</em>, not a guarantee that every
            variation of every job is available. The exact work depends on your
            furniture — call or WhatsApp with a photo and we will confirm what is
            possible for your piece.
          </p>
        </div>
      </div>

      {serviceGroups.map((group, gi) => {
        const items = servicesByGroup(group.id)
        return (
          <Section
            key={group.id}
            id={group.id}
            tone={gi % 2 === 0 ? 'light' : 'deep'}
            eyebrow={`Group ${gi + 1} of ${serviceGroups.length}`}
            title={group.title}
            lead={group.description}
            className="scroll-mt-20"
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((service, i) => (
                <Reveal key={service.id} delay={(i % 3) * 70}>
                  <ServiceCard service={service} index={i} />
                </Reveal>
              ))}
            </div>
          </Section>
        )
      })}

      {/* Expanded detail list — useful for SEO and for scanning */}
      <Section
        id="service-detail"
        tone="light"
        eyebrow="In detail"
        title="What each service involves"
        lead="A little more detail on what each category of work usually covers."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 2) * 60}>
              <article
                id={`${service.id}-detail`}
                className="h-full scroll-mt-28 rounded-lg border border-ink-900/10 bg-ivory p-6"
              >
                <h3 className="text-[1.25rem] text-forest-900">{service.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">
                  {service.detail}
                </p>
                <ul className="mt-4 space-y-2 border-t border-dashed border-ink-900/12 pt-4">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.875rem] text-ink-700"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-clay-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/contact?service=${service.id}`}
                    data-event="service_enquiry_click"
                    data-event-label={`${service.title}-detail`}
                    className="link-arrow"
                  >
                    Enquire about this
                    <ArrowRight className="size-4" aria-hidden="true" />
                    <span className="sr-only"> — {service.title}</span>
                  </Link>
                  <Link
                    to="/gallery"
                    data-event="nav_click"
                    data-event-label={`gallery-from-${service.id}`}
                    className="text-[0.875rem] font-semibold text-forest-700 underline decoration-forest-300 underline-offset-4 hover:decoration-clay-500"
                  >
                    See the gallery
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Not sure which service? */}
      <Section
        id="not-sure"
        tone="deep"
        align="center"
        width="narrow"
        eyebrow="Not sure?"
        title="Describe the problem, we will identify the work"
        lead="A short description and a couple of photos is usually enough to work out whether it is a repair, a fabric change, a foam replacement or something else."
      >
        <div className="mt-2 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppLink
            eventLabel="services-not-sure"
            icon={<Camera className="size-4" aria-hidden="true" />}
            variant="green"
            className="w-full sm:w-auto"
          >
            Send photos on WhatsApp
          </WhatsAppLink>
          <Link to="/guides" className="btn-outline btn-outline-on-light w-full sm:w-auto">
            Read the guides
          </Link>
        </div>
        <p className="mt-6 text-[0.875rem] text-ink-500">
          New to this?{' '}
          <Link
            to="/guides/sofa-repair-vs-buying-a-new-sofa"
            className="font-semibold text-forest-700 underline decoration-forest-300 underline-offset-4 hover:decoration-clay-500"
          >
            Read our guide on repairing versus replacing a sofa
          </Link>{' '}
          — or browse all {guides.length} guides.
        </p>
      </Section>

      <CTASection
        eyebrow="Enquire now"
        title={`Book a visit in ${site.areaServed}`}
        lead="Call or WhatsApp with the type of furniture and what is wrong. We will take it from there."
      />
    </>
  )
}
