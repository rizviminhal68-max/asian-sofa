import Section from './Section'
import CompareSlider from './CompareSlider'
import Reveal from '../hooks/useReveal'
import beforeAfterItems from '../content/beforeAfter'

/**
 * Before → after transformation section.
 *
 * The images are placeholders. Replace them in `src/content/images.js` and
 * delete the caption note below once real project photos are available.
 */
export default function BeforeAfter() {
  return (
    <Section
      id="before-after"
      tone="deep"
      eyebrow="Before &amp; after"
      title="What a change can look like"
      lead="Drag the handle on each card to compare. These show the types of transformation the work involves — sofa fabric changes, structural repair, foam replacement, furniture restoration and upholstery."
    >
      <p className="-mt-4 mb-8 max-w-2xl text-[0.8125rem] text-ink-400">
        Images shown are placeholders and will be replaced with Asian Sofa
        project photographs.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beforeAfterItems.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 70}>
            <CompareSlider
              before={item.before}
              after={item.after}
              work={item.work}
              summary={item.summary}
            />
          </Reveal>
        ))}

        <Reveal delay={(beforeAfterItems.length % 3) * 70}>
          <div className="flex h-full min-h-[16rem] flex-col justify-center rounded-lg border border-dashed border-forest-300 bg-ivory p-7">
            <p className="eyebrow text-clay-700">Your sofa could be next</p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-700">
              Send a photo of your sofa on WhatsApp and we will tell you what the
              work involves.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
