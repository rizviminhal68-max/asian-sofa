import { useMemo, useState } from 'react'

import GalleryCard from './GalleryCard'
import Lightbox from './Lightbox'
import Reveal from '../hooks/useReveal'

/**
 * Filterable responsive grid with a lightbox.
 * `tallIndices` enables a masonry-ish rhythm on large screens.
 */
export default function GalleryGrid({ items, categories, tallIndices = [] }) {
  const [filter, setFilter] = useState(categories[0])
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const visible = useMemo(
    () => (filter === 'All' ? items : items.filter((i) => i.category === filter)),
    [filter, items],
  )

  const enriched = useMemo(
    () => visible.map((item) => ({ ...item, tall: tallIndices.includes(item.id) })),
    [visible, tallIndices],
  )

  const closeLightbox = () => setLightboxIndex(null)
  const next = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % enriched.length))
  const prev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + enriched.length) % enriched.length))

  return (
    <div>
      {/* Filters */}
      <div className="no-scrollbar -mx-5 mb-8 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="inline-flex min-w-full gap-2 rounded-full bg-ivory-deep p-1.5 ring-1 ring-ink-900/10 sm:flex-wrap"
        >
          {categories.map((category) => {
            const active = filter === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(category)}
                data-event="gallery_filter"
                data-event-label={category}
                className={`shrink-0 rounded-full px-4 py-2 text-[0.8125rem] font-semibold whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-forest-900 text-ivory'
                    : 'text-ink-600 hover:bg-ivory hover:text-forest-800'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid */}
      {enriched.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enriched.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 60}>
              <GalleryCard
                item={item}
                eager={i < 3}
                onOpen={() => setLightboxIndex(i)}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-dashed border-ink-900/20 p-10 text-center text-ink-500">
          No images in this category yet.
        </p>
      )}

      <p aria-live="polite" className="sr-only">
        {`Showing ${enriched.length} image${enriched.length === 1 ? '' : 's'}${
          filter === 'All' ? '' : ` in ${filter}`
        }.`}
      </p>

      {lightboxIndex !== null && (
        <Lightbox
          items={enriched}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNext={next}
          onPrev={prev}
        />
      )}
    </div>
  )
}
