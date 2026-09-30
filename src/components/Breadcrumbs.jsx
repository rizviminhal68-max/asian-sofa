import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/** Visual + semantic breadcrumb trail. The last item is the current page. */
export default function Breadcrumbs({ trail = [], tone = 'light', className = '' }) {
  const dark = tone === 'dark'

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.8125rem] ${
          dark ? 'text-forest-200' : 'text-ink-500'
        }`}
      >
        {trail.map((item, i) => {
          const last = i === trail.length - 1
          return (
            <Fragment key={item.to}>
              <li className="flex items-center gap-1.5">
                {last || !item.to ? (
                  <span aria-current={last ? 'page' : undefined} className="font-semibold">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    className={`transition-colors ${
                      dark ? 'hover:text-clay-300' : 'hover:text-clay-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
              {!last && (
                <li aria-hidden="true" className="opacity-50">
                  <ChevronRight className="size-3.5" />
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
