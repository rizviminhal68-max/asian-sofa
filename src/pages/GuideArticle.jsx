import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Info } from 'lucide-react'

import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTASection from '../components/CTASection'
import Reveal from '../hooks/useReveal'
import { useSeo, breadcrumbJsonLd, articleJsonLd } from '../lib/seo'
import guides, { findGuide, relatedGuides } from '../content/guides'
import services from '../content/services'

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-10 text-[1.5rem] leading-snug text-forest-900 sm:text-[1.7rem]">
          {block.text}
        </h2>
      )
    case 'ul':
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[1rem] leading-relaxed text-ink-700">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-clay-500"
              />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'note':
      return (
        <aside className="mt-7 flex gap-3.5 rounded-lg border-l-[3px] border-clay-500 bg-clay-100/70 p-5">
          <Info className="mt-0.5 size-5 shrink-0 text-clay-700" aria-hidden="true" />
          <p className="text-[0.9375rem] leading-relaxed text-ink-700">{block.text}</p>
        </aside>
      )
    default:
      return <p className="mt-5 text-[1rem] leading-relaxed text-ink-700">{block.text}</p>
  }
}

export default function GuideArticle() {
  const { slug } = useParams()
  const guide = findGuide(slug)

  useSeo({
    title: guide
      ? `${guide.title} | Asian Sofa Gurugram`
      : 'Guide not found | Asian Sofa',
    description: guide ? guide.excerpt : 'This guide could not be found.',
    path: `/guides/${slug}`,
    image: guide?.image.src,
    type: 'article',
    noindex: !guide,
    jsonLd: guide
      ? [
          breadcrumbJsonLd([
            { label: 'Home', to: '/' },
            { label: 'Guides', to: '/guides' },
            { label: guide.title, to: `/guides/${guide.slug}` },
          ]),
          articleJsonLd({
            title: guide.title,
            description: guide.excerpt,
            url: `/guides/${guide.slug}`,
            image: guide.image.src,
          }),
        ]
      : [],
  })

  if (!guide) {
    return (
      <section className="container-page py-20 text-center">
        <h1 className="text-[2rem]">We could not find that guide</h1>
        <p className="mt-4 text-ink-600">
          The link may be out of date. Browse the guides we have, or get in touch
          about your sofa directly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/guides" className="btn-primary">
            All guides
          </Link>
          <Link to="/contact" className="btn-outline btn-outline-on-light">
            Contact us
          </Link>
        </div>
      </section>
    )
  }

  const others = relatedGuides(guide)

  return (
    <>
      <PageHero
        eyebrow={`${guide.category} · ${guide.readMinutes} min read`}
        title={guide.title}
        lead={guide.excerpt}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Guides', to: '/guides' },
          { label: guide.title, to: `/guides/${guide.slug}` },
        ]}
        image={guide.image.src}
        imageAlt={guide.image.alt}
      />

      <article className="container-page py-12 sm:py-14 lg:py-16">
        <Reveal className="container-prose">
          <p className="text-[0.9375rem] text-ink-500">
            Published by{' '}
            <span className="font-semibold text-forest-900">Asian Sofa</span> —
            sofa repair and upholstery services in Gurugram.
          </p>

          <div className="mt-6">
            {guide.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="stitch-top mt-12 pt-7">
            <h2 className="text-[1.35rem] text-forest-900">Talk it through with us</h2>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-600">
              Every sofa is different. Send photos on WhatsApp or call and we will
              tell you what the work involves for your particular piece.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary btn-sm">
                Contact Asian Sofa
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn-outline btn-outline-on-light btn-sm">
                See services
              </Link>
            </div>
          </div>
        </Reveal>
      </article>

      {/* Related guides */}
      <Section
        id="related-guides"
        tone="deep"
        eyebrow="Keep reading"
        title="More guides"
        className="border-t border-ink-900/8"
      >
        <ul className="grid gap-5 sm:grid-cols-3">
          {others.map((other, i) => (
            <Reveal as="li" key={other.slug} delay={i * 70}>
              <Link
                to={`/guides/${other.slug}`}
                data-event="guide_open"
                data-event-label={`related-${other.title}`}
                className="group flex h-full flex-col rounded-lg border border-ink-900/10 bg-ivory p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-26px_rgba(18,40,29,0.45)]"
              >
                <span className="eyebrow text-clay-700">{other.category}</span>
                <span className="mt-3 font-display text-[1.15rem] leading-snug text-forest-900">
                  {other.title}
                </span>
                <span className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-ink-600">
                  {other.excerpt}
                </span>
                <span className="link-arrow mt-4">
                  Read
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-9">
          <Link to="/guides" className="link-arrow" data-event="nav_click" data-event-label="all-guides">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all {guides.length} guides
          </Link>
        </div>
      </Section>

      {/* Services mentioned by this guide */}
      <Section
        id="guide-services"
        tone="forest"
        eyebrow="Related services"
        title="Services this guide refers to"
        className="border-t border-ivory/10"
      >
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((s) =>
              [
                'Sofa Repair',
                'Sofa Fabric Change',
                'Sofa Foam Replacement',
                'Sofa Upholstery',
                'Leatherette / Rexine Replacement',
                'Furniture Repair',
              ].includes(s.title),
            )
            .map((service) => (
              <li key={service.id} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-clay-400"
                />
                <Link
                  to={`/services#${service.id}`}
                  data-event="service_enquiry_click"
                  data-event-label={`guide-${service.title}`}
                  className="text-[0.9375rem] text-forest-100 transition-colors hover:text-clay-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <CTASection />
    </>
  )
}
