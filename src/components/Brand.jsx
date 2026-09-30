/**
 * Wordmark. The mark is an upholstered cushion with a stitch line — the same
 * motif used throughout the site. Inline SVG, so it costs nothing to load.
 */
export default function Brand({ tone = 'dark', className = '' }) {
  const isLight = tone === 'light'
  const wordColor = isLight ? 'text-ivory' : 'text-forest-900'
  const subColor = isLight ? 'text-forest-200' : 'text-clay-700'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-[10px] sm:size-10 ${
          isLight ? 'bg-ivory/10 ring-1 ring-ivory/25' : 'bg-forest-900'
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className="size-6 sm:size-[26px]" fill="none">
          <g
            stroke={isLight ? '#e4b793' : '#c27648'}
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="12" y="22" width="40" height="22" rx="8" />
            <path d="M12 33h40M32 33v11" />
            <rect x="7" y="28" width="7" height="20" rx="3.5" />
            <rect x="50" y="28" width="7" height="20" rx="3.5" />
            <path d="M14 44v6M50 44v6" />
          </g>
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.3rem] font-semibold tracking-[-0.02em] sm:text-[1.45rem] ${wordColor}`}
        >
          Asian Sofa
        </span>
        <span className={`mt-1 eyebrow text-[0.5rem] sm:text-[0.55rem] ${subColor}`}>
          Sofa &amp; Furniture Repair
        </span>
      </span>
    </span>
  )
}
