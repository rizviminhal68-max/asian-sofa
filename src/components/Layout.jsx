import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import FloatingContact from './FloatingContact'
import ScrollToTop from './ScrollToTop'

/** Shared page chrome for every route. */
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-forest-900 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <Header />

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  )
}
