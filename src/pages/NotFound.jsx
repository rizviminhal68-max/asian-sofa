import { Link } from 'react-router-dom'

import { PhoneLink, WhatsAppLink, WhatsAppIcon } from '../components/ContactButtons'
import { useSeo } from '../lib/seo'
import { PHONE_DISPLAY, navLinks } from '../content/site'
import images from '../content/images'

export default function NotFound() {
  useSeo({
    title: 'Page not found | Asian Sofa',
    description: 'The page you were looking for could not be found.',
    path: '/404',
    noindex: true,
  })

  return (
    <section className="grain relative overflow-hidden bg-forest-950 text-ivory">
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 text-ivory opacity-60"
      />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4 flex items-center gap-2.5 text-clay-300">
              <span aria-hidden="true" className="inline-block h-px w-7 bg-current opacity-60" />
              Error 404
            </p>
            <h1 className="text-[2.5rem] leading-[1.05] sm:text-[3.2rem]">
              This page has been reupholstered somewhere else.
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-forest-200">
              The link you followed does not exist on this site. Try one of the
              pages below, or get straight to the point and call us about your
              sofa.
            </p>

            <nav aria-label="Site pages" className="mt-8">
              <ul className="flex flex-wrap gap-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-block rounded-full border border-ivory/25 px-4 py-2 text-[0.875rem] font-semibold text-ivory transition-colors hover:bg-ivory hover:text-forest-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PhoneLink eventLabel="404" className="w-full sm:w-auto">
                Call {PHONE_DISPLAY}
              </PhoneLink>
              <WhatsAppLink
                eventLabel="404"
                icon={<WhatsAppIcon className="size-4" />}
                variant="green"
                className="w-full sm:w-auto"
              >
                WhatsApp Us
              </WhatsAppLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="arch overflow-hidden ring-1 ring-ivory/15">
              <img
                src={images.gallerySofaRepair.src}
                alt={images.gallerySofaRepair.alt}
                width={images.gallerySofaRepair.width}
                height={images.gallerySofaRepair.height}
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
