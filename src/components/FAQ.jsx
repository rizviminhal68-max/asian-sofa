import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import Section from './Section'
import Reveal from '../hooks/useReveal'
import { EVENTS } from '../lib/tracking'

/** Accessible accordion. Only one panel open at a time. */
export default function FAQ({ items, id = 'faq', eyebrow = 'Common questions', title = 'Questions we get asked', lead }) {
  const [open, setOpen] = useState(0)

  return (
    <Section id={id} eyebrow={eyebrow} title={title} lead={lead} width="narrow">
      <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={item.q} delay={i * 50}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel-${i}`}
                  id={`${id}-button-${i}`}
                  data-event={EVENTS.FAQ_EXPAND}
                  data-event-label={item.q}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="text-[1.0625rem] leading-snug font-semibold text-forest-900 sm:text-[1.125rem]">
                    {item.q}
                  </span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 border-clay-600 bg-clay-600 text-ivory'
                        : 'border-ink-900/20 text-forest-800'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>
              </h3>

              <div
                id={`${id}-panel-${i}`}
                role="region"
                aria-labelledby={`${id}-button-${i}`}
                hidden={!isOpen}
                className="pb-6"
              >
                <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-ink-600">
                  {item.a}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
