import { Link } from 'react-router-dom'
import { Clock, MapPin, Phone } from 'lucide-react'

import Brand from './Brand'
import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'
import { navLinks, PHONE_DISPLAY, site } from '../content/site'
import services from '../content/services'

const year = new Date().getFullYear()

export default function Footer() {
  const popular = services.slice(0, 6)

  return (
    <footer className="grain relative bg-forest-950 text-ivory">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand + description */}
          <div className="lg:col-span-4">
            <Brand tone="light" />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-forest-200">
              Asian Sofa repairs and reupholsters sofas and other furniture across
              Gurugram — from seam and foam work to full fabric changes and
              furniture finishing.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <PhoneLink
                eventLabel="footer"
                icon={<Phone className="size-4" aria-hidden="true" />}
                variant="sm"
              >
                Call Now
              </PhoneLink>
              <WhatsAppLink
                eventLabel="footer"
                icon={<WhatsAppIcon className="size-4" />}
                variant="footer"
              >
                WhatsApp Us
              </WhatsAppLink>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-labelledby="footer-quick" className="lg:col-span-2">
            <h2
              id="footer-quick"
              className="eyebrow text-clay-300"
            >
              Quick Links
            </h2>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[0.9375rem] text-forest-100 transition-colors hover:text-clay-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular services — internal linking */}
          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2 id="footer-services" className="eyebrow text-clay-300">
              Popular Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {popular.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-[0.9375rem] text-forest-100 transition-colors hover:text-clay-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow text-clay-300">Contact</h2>
            <ul className="mt-5 space-y-4 text-[0.9375rem]">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-clay-400" aria-hidden="true" />
                <a
                  href="tel:+919873112891"
                  data-event="phone_click"
                  data-event-label="footer-contact"
                  className="font-semibold text-ivory hover:text-clay-300"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-clay-400" aria-hidden="true" />
                <span className="text-forest-100">
                  {site.name}
                  <br />
                  {site.areaServed}
                  <br />
                  Serving Gurugram (Gurgaon) and nearby areas
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-clay-400" aria-hidden="true" />
                <span className="text-forest-200">
                  Call or WhatsApp to discuss your requirement
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="stitch-top border-ivory/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-[0.8125rem] text-forest-300">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[0.8125rem] text-forest-300">
            Sofa &amp; furniture repair services in {site.areaServed}
          </p>
        </div>
      </div>
    </footer>
  )
}
