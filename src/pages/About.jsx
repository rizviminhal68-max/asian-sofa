import { Link } from 'react-router-dom'
import { ArrowRight, Hammer, Home, MapPin, Sparkles } from 'lucide-react'

import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTASection from '../components/CTASection'
import Reveal from '../hooks/useReveal'
import { useSeo, breadcrumbJsonLd } from '../lib/seo'
import images from '../content/images'
import services from '../content/services'
import { site } from '../content/site'

const principles = [
  {
    icon: Home,
    title: 'Doorstep, not drop-off',
    body: 'Your furniture stays where it is. There is no moving a sofa to a workshop and waiting for it to come back — the work is done in your home.',
  },
  {
    icon: Hammer,
    title: 'Repair is the first option',
    body: 'A sofa with a tired cover or flat foam is usually a covering problem, not a furniture problem. We look at repairing before anyone reaches for a new one.',
  },
  {
    icon: Sparkles,
    title: 'Upholstery is the skill',
    body: 'Fabric changing, reupholstery, rexine fitting, cushion work and stitching sit at the centre of what Asian Sofa does.',
  },
  {
    icon: MapPin,
    title: 'Local to Gurugram',
    body: 'Work is carried out across Gurugram — commonly called Gurgaon — so the same word you search with is the word we work by.',
  },
]

export default function About() {
  useSeo({
    title: 'About Asian Sofa | Sofa & Furniture Repair in Gurugram',
    description:
      'Asian Sofa repairs and reupholsters sofas and furniture across Gurugram, Haryana. Learn about our doorstep approach to sofa repair, upholstery and furnishing work.',
    path: '/about',
    jsonLd: [
      breadcrumbJsonLd([
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Asian Sofa',
        url: 'https://www.asiansofa.in/about',
        mainEntity: { '@id': 'https://www.asiansofa.in/#business' },
      },
    ],
  })

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Helping people keep the furniture they already own"
        lead="Asian Sofa provides sofa repair, upholstery and furniture furnishing services across Gurugram. We work with the furniture that is already in the room, and fix the part that needs fixing."
        trail={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
        ]}
        image={images.aboutWorkshop.src}
        imageAlt={images.aboutWorkshop.alt}
      />

      {/* Main story */}
      <Section id="story" eyebrow="Our approach" title="Furniture is worth fixing more often than people think">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-700 lg:col-span-7">
            <p>
              Most sofas that get written off were not built badly. They were
              used hard — a decade of sitting, spilling, sunlight and pet hair
              does more damage to the covering and the foam than it does to the
              frame underneath. That is why so much of our work is repair and
              reupholstery rather than replacement.
            </p>
            <p>
              It is also why we work at your home. A sofa is a large, awkward
              object, and moving it to a workshop and back costs the customer
              money and effort for no benefit. Instead, the repair is carried
              out where the furniture already sits.
            </p>
            <p>
              The work itself is practical: closing torn seams, rebuilding
              flattened cushions, replacing compressed foam, changing fabric on
              an otherwise sound frame, fitting rexine and leatherette where a
              wipe-clean surface makes more sense, and finishing repairs on
              wooden furniture.
            </p>
            <p>
              {site.name} works across {site.areaServedLong} — commonly searched
              for as Gurgaon. If a sofa can be sensibly repaired, we would
              rather tell you that than sell you a new one.
            </p>

            <div className="stitch-top pt-7">
              <Link to="/services" className="link-arrow" data-event="nav_click" data-event-label="about-services">
                See what we work on
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="arch overflow-hidden ring-1 ring-ink-900/10">
                <img
                  src={images.galleryCushion.src}
                  alt={images.galleryCushion.alt}
                  width={images.galleryCushion.width}
                  height={images.galleryCushion.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div className="mt-8 arch overflow-hidden ring-1 ring-ink-900/10">
                <img
                  src={images.galleryStitch.src}
                  alt={images.galleryStitch.alt}
                  width={images.galleryStitch.width}
                  height={images.galleryStitch.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Principles */}
      <Section
        id="principles"
        tone="deep"
        eyebrow="How we work"
        title="Four things that shape every job"
      >
        <ul className="grid gap-8 sm:grid-cols-2">
          {principles.map(({ icon: Icon, title, body }, i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 70}>
              <span className="grid size-11 place-items-center rounded-lg bg-forest-900 text-clay-300">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[1.2rem] text-forest-900">{title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Services summary */}
      <Section
        id="about-services"
        tone="forest"
        eyebrow="Scope of work"
        title="What Asian Sofa works on"
        lead="A summary of the service categories. Full detail is on the services page."
      >
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-clay-400"
              />
              <Link
                to={`/services#${service.id}`}
                data-event="service_enquiry_click"
                data-event-label={`about-${service.title}`}
                className="text-[0.9375rem] text-forest-100 transition-colors hover:text-clay-300"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-9">
          <Link to="/services" className="btn-outline btn-outline-on-dark">
            View all services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Placeholder for client-provided business facts */}
      <Section
        id="business-details"
        eyebrow="Business details"
        title="Talk to us directly"
        lead="Phone and WhatsApp are the fastest ways to reach us. Send a photo of the sofa or chair and describe what is wrong, and we will tell you whether the job is worth doing."
        width="narrow"
      >
        <dl className="grid gap-5 rounded-lg bg-ivory-deep p-6 ring-1 ring-ink-900/8 sm:grid-cols-2 sm:p-7">
          <div>
            <dt className="eyebrow text-clay-700">Business</dt>
            <dd className="mt-2 text-[1.0625rem] font-semibold text-forest-900">
              {site.name}
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-clay-700">Service area</dt>
            <dd className="mt-2 text-[1.0625rem] font-semibold text-forest-900">
              {site.areaServed}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="eyebrow text-clay-700">Phone / WhatsApp</dt>
            <dd className="mt-2">
              <a
                href="tel:+919873112891"
                data-event="phone_click"
                data-event-label="about-phone"
                className="font-display text-[1.5rem] font-semibold text-forest-900 hover:text-clay-700"
              >
                9873112891
              </a>
            </dd>
          </div>
        </dl>

        <p className="mt-6 text-[0.875rem] leading-relaxed text-ink-500">
          Founding year, team details and shop address are not published on this
          site yet. Ask us directly and we will tell you.
        </p>
      </Section>

      <CTASection
        eyebrow="Get in touch"
        title="Call or WhatsApp Asian Sofa"
        lead="Send a photo of the sofa, tell us what is wrong, and we will tell you what the work involves."
      />
    </>
  )
}
