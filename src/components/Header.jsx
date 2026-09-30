import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'

import Brand from './Brand'
import { PhoneLink, WhatsAppLink, WhatsAppIcon } from './ContactButtons'
import { navLinks, PHONE_DISPLAY } from '../content/site'
import useScrolled from '../hooks/useScrolled'

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [lastPath, setLastPath] = useState(location.pathname)
  const scrolled = useScrolled(10)
  const panelRef = useRef(null)
  const toggleRef = useRef(null)
  const panelId = useId()

  // Close the mobile panel whenever the route changes (adjust state in render
  // rather than in an effect, so the panel never flashes open after a nav).
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    if (open) setOpen(false)
  }

  // Lock body scroll and support Escape while the panel is open.
  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    panelRef.current?.querySelector('a, button')?.focus()

    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(36,31,26,0.09)]'
          : 'bg-ivory'
      }`}
    >
      <div className="container-page">
        <div className="flex h-[68px] items-center justify-between gap-4 sm:h-[76px]">
          <Link
            to="/"
            className="shrink-0 rounded-sm"
            aria-label="Asian Sofa — home"
          >
            <Brand />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `relative rounded-sm px-3 py-2 text-[0.9375rem] font-semibold transition-colors ${
                        isActive
                          ? 'text-forest-800'
                          : 'text-ink-700 hover:text-forest-800'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-clay-600 transition-transform duration-200 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <PhoneLink
              eventLabel="header"
              icon={<Phone className="size-4" aria-hidden="true" />}
              className="hidden sm:inline-flex"
            >
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
            </PhoneLink>

            <a
              href={`tel:+919873112891`}
              aria-label={`Call Asian Sofa on ${PHONE_DISPLAY}`}
              data-event="phone_click"
              data-event-label="header-mobile-icon"
              className="btn-primary btn-sm sm:hidden"
            >
              <Phone className="size-4" aria-hidden="true" />
              <span className="sr-only">Call {PHONE_DISPLAY}</span>
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid size-10 place-items-center rounded-[10px] border border-ink-900/15 text-forest-900 transition-colors hover:bg-forest-900 hover:text-ivory lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="grain border-t border-ivory/10 bg-forest-950 lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page pb-7 pt-4">
          <ul className="divide-y divide-ivory/10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3.5 font-display text-xl font-semibold transition-colors ${
                      isActive ? 'text-clay-300' : 'text-ivory hover:text-clay-300'
                    }`
                  }
                >
                  {link.label}
                  <span aria-hidden="true" className="text-clay-500/60">
                    →
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-2.5">
            <PhoneLink
              eventLabel="mobile-menu"
              icon={<Phone className="size-4" aria-hidden="true" />}
              className="w-full"
            >
              Call {PHONE_DISPLAY}
            </PhoneLink>
            <WhatsAppLink
              eventLabel="mobile-menu"
              icon={<WhatsAppIcon className="size-4" />}
              variant="green"
              className="w-full"
            >
              WhatsApp Us
            </WhatsAppLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
