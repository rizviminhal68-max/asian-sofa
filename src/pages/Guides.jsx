import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTASection from '../components/CTASection'
import Reveal from '../hooks/useReveal'
import { useSeo, breadcrumbJsonLd } from '../lib/seo'
import guides, { guideCategories } from '../content/guides'
import images from '../content/images'

export default function Guides() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? guides : guides.filter((g) => g.category === filter)),
    [filter],
  )

  useSeo({
    title: 'Sofa Repair & Upholstery Guides | Asian Sofa Gurugram',
    description:
      'Practical guides on sofa repair costs, repairing versus replacing a sofa, choosing sofa fabric, leatherette versus fabric and caring for repaired furniture.',
    path: '/guides',
    jsonLd: [
      breadcrumbJsonLd([
        { label: 'Home', to: '/' },
        { label: 'Guides', to: '/guides' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Asian Sofa guides',
        url: 'https://www.asiansofa.in/guides',
        hasPart: guides.map((g) => ({
          '@type': 'Article',
          headline: g.title,
          url: `https://www.asiansofa.in/guides/${g.slug}`,
        })),
      },
    ],
  })

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Sofa care, repair and upholstery guides"
        lead="Written for people in Gurugram deciding what to do with a sofa that is not what it used to be. No sales pitch — just useful answers."
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Guides', to: '/guides' },
        ]}
        image={images.galleryStitch.src}
        imageAlt={images.galleryStitch.alt}
      />

      <Section
        id="guides-list"
        eyebrow="All guides"
        title={`${guides.length} guides, written in plain language`}
        lead="Use the filter to narrow it down, or read them in order if you are starting from scratch."
      >
        <div className="no-scrollbar -mx-5 mb-9 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filter guides by category"
            className="inline-flex min-w-full gap-2 rounded-full bg-ivory-deep p-1.5 ring-1 ring-ink-900/10 sm:flex-wrap"
          >
            {guideCategories.map((category) => {
              const active = filter === category
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(category)}
                  className={`shrink-0 rounded-full px-4 py-2 text-[0.8125rem] font-semibold whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-forest-900 text-ivory'
                      : 'text-ink-600 hover:bg-ivory hover:text-forest-800'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((guide, i) => (
            <Reveal as="li" key={guide.slug} delay={(i % 3) * 70}>
              <article className="group h-full overflow-hidden rounded-lg border border-ink-900/10 bg-ivory transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-[0_24px_48px_-28px_rgba(18,40,29,0.45)]">
                <Link
                  to={`/guides/${guide.slug}`}
                  data-event="guide_open"
                  data-event-label={guide.title}
                  className="flex h-full flex-col"
                >
                  <span className="relative block aspect-[16/10] overflow-hidden bg-sand">
                    <img
                      src={guide.image.src}
                      alt={guide.image.alt}
                      width={guide.image.width}
                      height={guide.image.height}
                      loading={i < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-3 left-3 rounded bg-ivory/92 px-2.5 py-1 eyebrow text-[0.5625rem] text-forest-800">
                      {guide.category}
                    </span>
                  </span>

                  <span className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="text-[0.75rem] font-semibold tracking-wide text-ink-400 uppercase">
                      {guide.readMinutes} min read
                    </span>
                    <h2 className="mt-2.5 text-[1.25rem] leading-snug text-forest-900">
                      {guide.title}
                    </h2>
                    <span className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                      {guide.excerpt}
                    </span>
                    <span className="link-arrow mt-5">
                      Read the guide
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>

        <p aria-live="polite" className="sr-only">
          {`Showing ${visible.length} guide${visible.length === 1 ? '' : 's'}.`}
        </p>
      </Section>

      <CTASection
        eyebrow="Still unsure?"
        title="Send us a photo of the sofa"
        lead="Reading about it only helps so far. A picture of your sofa and a sentence about what is wrong will get you a straight answer."
      />
    </>
  )
}
