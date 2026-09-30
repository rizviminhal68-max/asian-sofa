import Section from './Section'
import Reveal from '../hooks/useReveal'
import howItWorks from '../content/howItWorks'
import Icon from '../lib/Icon'
import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      tone="forest"
      eyebrow="How it works"
      title="Four steps from a worn sofa to a usable one"
      lead="Nothing complicated. Tell us what is wrong, share a photo, and the work gets done at your home."
    >
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((item, i) => (
          <Reveal as="li" key={item.step} delay={i * 80} className="relative">
            <span
              aria-hidden="true"
              className="font-display text-[2.75rem] leading-none font-semibold text-clay-400/35"
            >
              {item.step}
            </span>
            <span className="mt-3 grid size-11 place-items-center rounded-lg bg-ivory/10 text-clay-300 ring-1 ring-ivory/15">
              <Icon name={item.icon} className="size-5" />
            </span>
              <h3 className="mt-4 text-[1.2rem] text-ivory">{item.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-forest-200">
              {item.body}
            </p>
            {i < howItWorks.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-2 -right-3 hidden h-px w-6 bg-ivory/20 lg:block"
              />
            )}
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <PhoneLink eventLabel="how-it-works" className="w-full sm:w-auto">
          Start with a call
        </PhoneLink>
        <WhatsAppLink
          eventLabel="how-it-works"
          variant="green"
          icon={<WhatsAppIcon className="size-4" />}
          className="w-full sm:w-auto"
        >
          Send photos on WhatsApp
        </WhatsAppLink>
      </Reveal>
    </Section>
  )
}
