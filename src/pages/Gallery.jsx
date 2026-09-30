import PageHero from '../components/PageHero'
import GalleryGrid from '../components/GalleryGrid'
import BeforeAfter from '../components/BeforeAfter'
import CTASection from '../components/CTASection'
import { useSeo, breadcrumbJsonLd } from '../lib/seo'
import galleryItems, { galleryCategories } from '../content/gallery'
import images from '../content/images'

const tallIndices = ['g-fabric-1', 'g-ba-fabric', 'g-bed-1']

export default function Gallery() {
  useSeo({
    title: 'Sofa Repair & Upholstery Gallery in Gurugram | Asian Sofa',
    description:
      'Browse sofa repair, upholstery, fabric change and furniture work from Asian Sofa in Gurugram. Filter by category and view before and after results.',
    path: '/gallery',
    jsonLd: [
      breadcrumbJsonLd([
        { label: 'Home', to: '/' },
        { label: 'Gallery', to: '/gallery' },
      ]),
    ],
  })

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Sofa repair and upholstery work"
        lead="Filter by the type of work, and drag the handle on any before and after card to see the difference."
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Gallery', to: '/gallery' },
        ]}
        image={images.galleryUpholstery.src}
        imageAlt={images.galleryUpholstery.alt}
      />

      <section className="container-page py-12 sm:py-14 lg:py-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Gallery images
        </h2>
        <GalleryGrid
          items={galleryItems}
          categories={galleryCategories}
          tallIndices={tallIndices}
        />
        <p className="mt-8 text-[0.8125rem] text-ink-400">
          Images shown are placeholders and will be replaced with Asian Sofa
          project photographs.
        </p>
      </section>

      <BeforeAfter />

      <CTASection
        eyebrow="Like what you see?"
        title="Send us a photo of your sofa"
        lead="Every piece is different. Share a few pictures and we will tell you what the work would involve."
      />
    </>
  )
}
