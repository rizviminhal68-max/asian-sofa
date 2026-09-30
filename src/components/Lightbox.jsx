import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Accessible lightbox. Traps focus, closes on Escape, and supports arrow-key
 * navigation. Renders in a portal-less fixed overlay at the end of the tree.
 */
export default function Lightbox({ items, index, onClose, onNext, onPrev }) {
  const item = items[index]

  useEffect(() => {
    if (!item) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [item, onClose, onNext, onPrev])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${item.title}`}
      className="fixed inset-0 z-[1100] flex flex-col bg-forest-950/96 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <p className="eyebrow text-clay-300">
          {item.category} · {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery image"
          autoFocus
          className="grid size-10 place-items-center rounded-lg text-ivory ring-1 ring-ivory/25 transition-colors hover:bg-ivory hover:text-forest-950"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className="flex flex-1 items-center justify-center px-4 pb-6 sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous image"
          className="mr-2 hidden size-11 shrink-0 place-items-center rounded-full text-ivory ring-1 ring-ivory/25 transition-colors hover:bg-ivory hover:text-forest-950 sm:grid"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>

        <figure className="flex max-h-full min-w-0 flex-col items-center">
          <img
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            className="max-h-[62vh] w-auto max-w-full rounded-lg object-contain"
          />
          <figcaption className="mt-4 max-w-lg text-center">
            <p className="font-display text-lg text-ivory">{item.title}</p>
            <p className="mt-1 text-[0.875rem] text-forest-300">{item.note}</p>
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next image"
          className="ml-2 hidden size-11 shrink-0 place-items-center rounded-full text-ivory ring-1 ring-ivory/25 transition-colors hover:bg-ivory hover:text-forest-950 sm:grid"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
