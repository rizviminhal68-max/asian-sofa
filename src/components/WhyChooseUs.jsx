import Section from './Section'
import Reveal from '../hooks/useReveal'
import images from '../content/images'
import whyChooseUs from '../content/whyChooseUs'
import Icon from '../lib/Icon'

export default function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      eyebrow="Why Asian Sofa"
      title="Straight answers, work done at your home"
      lead="Repair and upholstery work carried out where your furniture already is — no need to move a sofa across town and back again."
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="arch overflow-hidden ring-1 ring-ink-900/10">
              <img
                src={images.aboutDetail.src}
                alt={images.aboutDetail.alt}
                width={images.aboutDetail.width}
                height={images.aboutDetail.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -right-3 -bottom-6 hidden overflow-hidden rounded-lg border-4 border-ivory-deep shadow-[0_24px_50px_-26px_rgba(18,40,29,0.55)] sm:block sm:w-44">
              <img
                src={images.aboutWorkshop.src}
                alt={images.aboutWorkshop.alt}
                width={images.aboutWorkshop.width}
                height={images.aboutWorkshop.height}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
{whyChooseUs.map((item, i) => (
              <Reveal as="li" key={item.id} delay={(i % 2) * 70}>
                <span className="grid size-11 place-items-center rounded-lg bg-forest-900 text-clay-300">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-[1.15rem] leading-snug text-forest-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
