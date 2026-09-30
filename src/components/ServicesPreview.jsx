import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import ServiceCard from './ServiceCard'
import Section from './Section'
import Reveal from '../hooks/useReveal'
import services from '../content/services'

const featured = services.slice(0, 6)

export default function ServicesPreview() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title="Sofa and furniture work, handled in one place"
      lead="Most sofas do not need replacing — they need the right part of the job done. These are the service categories we work across."
      action={
        <Link
          to="/services"
          className="link-arrow"
          data-event="nav_click"
          data-event-label="services-all"
        >
          See all services
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, i) => (
          <Reveal key={service.id} delay={(i % 3) * 80}>
            <ServiceCard service={service} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
