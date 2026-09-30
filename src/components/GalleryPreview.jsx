import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import Section from './Section'
import Reveal from '../hooks/useReveal'
import galleryItems, { galleryCategories } from '../content/gallery'

const featured = galleryItems.filter((i) => i.category !== 'Before & After').slice(0, 6)

export default function GalleryPreview() {
  return (
    <Section
      id="gallery-preview"
      tone="deep"
      eyebrow="Recent work"
      title="A look at the kind of work we do"
      lead="Repair, reupholstery, fabric changes and finishing across sofas, chairs and other furniture in Gurugram."
      action={
        <Link to="/gallery" className="link-arrow" data-event="nav_click" data-event-label="gallery-all">
          Open the full gallery
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      }
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {featured.map((item, i) => (
          <Reveal
            key={item.id}
            delay={(i % 4) * 60}
            className={i === 0 ? 'col-span-2 row-span-2' : ''}
          >
            <Link
              to="/gallery"
              data-event="nav_click"
              data-event-label={`gallery-${item.id}`}
              className="group relative block h-full overflow-hidden rounded-lg bg-sand ring-1 ring-ink-900/10"
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? 'aspect-square h-full' : 'aspect-square'
                }`}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/5 to-transparent"
              />
              <span className="absolute right-3 bottom-3 left-3">
                <span className="eyebrow block text-[0.5625rem] text-clay-300">
                  {item.category}
                </span>
                <span className="mt-1 block font-display text-[1rem] leading-tight text-ivory">
                  {item.title}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-[0.8125rem] text-ink-400">
        Images shown are placeholders and will be replaced with Asian Sofa
        project photographs. Categories available: {galleryCategories.filter((c) => c !== 'All').join(', ')}.
      </p>
    </Section>
  )
}
