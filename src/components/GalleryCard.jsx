import { ZoomIn } from 'lucide-react'

/** Gallery tile. The whole tile is a single button that opens the lightbox. */
export default function GalleryCard({ item, onOpen, eager = false }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View larger image: ${item.title}`}
      data-event="gallery_filter"
      data-event-label={`open-${item.id}`}
      className="group relative block w-full overflow-hidden rounded-lg bg-sand text-left ring-1 ring-ink-900/10 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(18,40,29,0.5)]"
    >
      <img
        src={item.image.src}
        alt={item.image.alt}
        width={item.image.width}
        height={item.image.height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] ${
          item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
        }`}
      />

      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95"
      />

      <span className="absolute top-3 left-3 rounded bg-ivory/92 px-2.5 py-1 eyebrow text-[0.5625rem] text-forest-800">
        {item.category}
      </span>

      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <span className="min-w-0">
          <span className="block font-display text-[1.0625rem] leading-tight text-ivory">
            {item.title}
          </span>
          <span className="mt-1 block truncate text-[0.8125rem] text-forest-200">
            {item.note}
          </span>
        </span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ivory/95 text-forest-900 opacity-0 transition-opacity group-hover:opacity-100">
          <ZoomIn className="size-4" aria-hidden="true" />
        </span>
      </span>
    </button>
  )
}
