import { useId, useState } from 'react'

/**
 * Draggable before/after comparison.
 *
 * Implemented with a native range input so it is fully keyboard accessible
 * and screen-reader friendly without custom key handling.
 */
export default function CompareSlider({ before, after, work, summary }) {
  const [position, setPosition] = useState(50)
  const labelId = useId()

  return (
    <figure className="m-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand ring-1 ring-ink-900/10 select-none">
        {/* BEFORE (bottom layer) */}
        <img
          src={before.src}
          alt={`${work}: ${before.alt}`}
          width={before.width}
          height={before.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />

        {/* AFTER (clipped top layer) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          aria-hidden="true"
        >
          <img
            src={after.src}
            alt=""
            width={after.width}
            height={after.height}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute top-3 left-3 rounded bg-forest-950/85 px-2.5 py-1 eyebrow text-[0.5625rem] text-ivory">
          Before
        </span>
        <span className="pointer-events-none absolute top-3 right-3 rounded bg-clay-600/95 px-2.5 py-1 eyebrow text-[0.5625rem] text-ivory">
          After
        </span>

        {/* Divider handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-ivory shadow-[0_0_0_1px_rgba(36,31,26,0.35)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-ivory bg-forest-950 text-ivory shadow-lg">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 7l-4 5 4 5M15 7l4 5-4 5" />
            </svg>
          </span>
        </div>

        {/* Accessible control */}
        <label id={labelId} htmlFor={`${labelId}-range`} className="sr-only">
          {`Reveal the after photo of ${work}`}
        </label>
        <input
          id={`${labelId}-range`}
          type="range"
          min="0"
          max="100"
          step="1"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-labelledby={labelId}
          aria-valuetext={`${position}% before image shown`}
          className="absolute inset-0 size-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>

      <figcaption className="mt-3.5">
        <h3 className="text-[1.15rem] text-forest-900">{work}</h3>
        {summary && (
          <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-500">{summary}</p>
        )}
      </figcaption>
    </figure>
  )
}
