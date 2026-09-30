import { MapPin, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'

import Reveal from '../hooks/useReveal'

const items = [
  {
    icon: MapPin,
    title: 'Doorstep service',
    body: 'Work carried out at your home across Gurugram — nothing to transport.',
  },
  {
    icon: ShieldCheck,
    title: 'Skilled workmanship',
    body: 'Seams, edges and finishing treated as the part that actually gets noticed.',
  },
  {
    icon: Sparkles,
    title: 'Repair, not replace',
    body: 'If the frame is still good, we look at repairing before recommending a new sofa.',
  },
  {
    icon: MessageCircle,
    title: 'Easy to reach',
    body: 'One phone number. Call it or send photos on WhatsApp — whichever suits you.',
  },
]

export default function TrustBar() {
  return (
    <section aria-label="Service highlights" className="bg-forest-900 text-ivory">
      <div className="container-page py-10 sm:py-12">
        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal as="li" key={title} delay={i * 70}>
              <span className="grid size-10 place-items-center rounded-lg bg-clay-500/15 text-clay-300 ring-1 ring-clay-400/25">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-3.5 text-[1.0625rem] text-ivory">{title}</h2>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-forest-200">
                {body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
