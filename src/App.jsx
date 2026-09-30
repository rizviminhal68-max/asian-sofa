import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Guides from './pages/Guides'
import GuideArticle from './pages/GuideArticle'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { installTracking } from './lib/tracking'

export default function App() {
  useEffect(() => installTracking(), [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="guides" element={<Guides />} />
          <Route path="guides/:slug" element={<GuideArticle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
