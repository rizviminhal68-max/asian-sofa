import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import Icon from '../lib/Icon'

/**
 * Service card. Deliberately compact: image, title, one short description and
 * a CTA. No long paragraphs.
 */
export default function ServiceCard({ service, index = 0, showImage = true }) {

  return (
    <article
      id={service.id}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-ink-900/10 bg-ivory scroll-mt-28 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-[0_24px_48px_-28px_rgba(18,40,29,0.45)]"
    >
      {showImage && (
        <div className="relative aspect-[16/10] overflow-hidden bg-sand">
          <img
            src={service.image.src}
            alt={service.image.alt}
            width={service.image.width}
            height={service.image.height}
            loading={index < 3 ? 'eager' : 'lazy'}
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent"
          />
          <span className="absolute bottom-3 left-3 grid size-10 place-items-center rounded-lg bg-ivory/95 text-forest-800 shadow-sm">
            <Icon name={service.icon} />
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {!showImage && (
          <span className="mb-4 grid size-11 place-items-center rounded-lg bg-forest-900 text-clay-300">
            <Icon name={service.icon} className="size-5" />
          </span>
        )}

        <h3 className="text-[1.3rem] leading-snug text-forest-900">{service.title}</h3>

        <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
          {service.short}
        </p>

        <Link
          to={`/services#${service.id}`}
          data-event="service_enquiry_click"
          data-event-label={service.title}
          data-event-category="services"
          className="link-arrow mt-5 w-fit"
        >
          Enquire about this
          <ArrowRight className="size-4" aria-hidden="true" />
          <span className="sr-only"> — {service.title}</span>
        </Link>
      </div>
    </article>
  )
}
