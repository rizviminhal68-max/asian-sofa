import { useEffect, useRef } from 'react'

/**
 * Reveals children as they scroll into view. Falls back to visible
 * immediately when IntersectionObserver is unavailable or motion is reduced.
 * One shared observer instance is used for every Reveal on the page.
 */
let observer = null

function getObserver() {
  if (observer) return observer
  if (typeof IntersectionObserver === 'undefined') return null

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = 'true'
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  )

  return observer
}

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (reduced || !getObserver()) {
      node.dataset.visible = 'true'
      return
    }

    node.dataset.visible = 'false'
    getObserver().observe(node)
    return () => getObserver()?.unobserve(node)
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
