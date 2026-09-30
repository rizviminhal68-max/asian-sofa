import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import ServicesPreview from '../components/ServicesPreview'
import BeforeAfter from '../components/BeforeAfter'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import GalleryPreview from '../components/GalleryPreview'
import ServiceArea from '../components/ServiceArea'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import { faqJsonLd, useSeo } from '../lib/seo'
import homeFaqs from '../content/faqs'
import site from '../content/site'

export default function Home() {
  useSeo({
    title: 'Premium Sofa & Furniture Repair in Gurugram | Asian Sofa',
    description:
      'Asian Sofa provides sofa repair, upholstery and furniture furnishing services across Gurugram. Call or WhatsApp for service enquiries.',
    path: '/',
    jsonLd: [faqJsonLd(homeFaqs)],
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <BeforeAfter />
      <WhyChooseUs />
      <HowItWorks />
      <GalleryPreview />
      <ServiceArea />
      <FAQ
        id="faq"
        items={homeFaqs}
        title="Questions we get asked about sofa repair"
        lead={`Straight answers about working with ${site.name} in ${site.areaServed}.`}
      />
      <CTASection />
    </>
  )
}
