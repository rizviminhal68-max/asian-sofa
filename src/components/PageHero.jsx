import Breadcrumbs from './Breadcrumbs'
import Reveal from '../hooks/useReveal'

/**
 * Compact hero band used at the top of every inner page. Keeps the page
 * identity consistent without making the site feel repetitive.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  trail,
  image,
  imageAlt,
  children,
}) {
  const hasImage = Boolean(image)

  return (
    <section className="grain relative overflow-hidden bg-forest-950 text-ivory">
      <div className="container-page relative py-12 sm:py-14 lg:py-16">
        <div className={hasImage ? 'grid items-center gap-10 lg:grid-cols-12' : ''}>
          <Reveal className={hasImage ? 'lg:col-span-7' : 'max-w-3xl'}>
            <Breadcrumbs trail={trail} tone="dark" className="mb-6" />

            {eyebrow && (
              <p className="eyebrow mb-4 flex items-center gap-2.5 text-clay-300">
                <span aria-hidden="true" className="inline-block h-px w-7 bg-current opacity-60" />
                {eyebrow}
              </p>
            )}

            <h1 className="text-[2.25rem] leading-[1.06] sm:text-[2.9rem] lg:text-[3.4rem]">
              {title}
            </h1>

            {lead && (
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-forest-200">
                {lead}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </Reveal>

          {hasImage && (
            <Reveal delay={120} className="lg:col-span-5">
              <div className="relative">
                <div className="arch overflow-hidden ring-1 ring-ivory/15">
                  <img
                    src={image}
                    alt={imageAlt || ''}
                    width="1200"
                    height="800"
                    loading="eager"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover sm:aspect-[3/2] lg:aspect-[4/5]"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 hidden size-20 rounded-md border border-dashed border-clay-400/60 lg:block"
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
