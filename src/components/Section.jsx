import Reveal from '../hooks/useReveal'

const tones = {
  light: 'bg-ivory text-ink-900',
  deep: 'bg-ivory-deep text-ink-900',
  forest: 'grain bg-forest-950 text-ivory',
  forestSoft: 'bg-forest-900 text-ivory',
}

const eyebrowColor = {
  light: 'text-clay-700',
  deep: 'text-clay-700',
  forest: 'text-clay-300',
  forestSoft: 'text-clay-300',
}

/**
 * Standard section wrapper: optional eyebrow, H2 heading, lead paragraph and
 * actions. Keeps vertical rhythm consistent without making every band tall.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'light',
  width = 'normal',
  className = '',
  children,
  action = null,
  as: Tag = 'section',
  headingLevel: Heading = 'h2',
}) {
  const centered = align === 'center'
  const maxWidth = width === 'narrow' ? 'max-w-2xl' : 'max-w-3xl'

  return (
    <Tag
      id={id}
      className={`${tones[tone]} ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
      aria-label={id ? undefined : typeof title === 'string' ? title : undefined}
    >
      <div className="container-page py-14 sm:py-16 lg:py-20">
        {(eyebrow || title || lead || action) && (
          <Reveal
            className={`mb-9 flex flex-col sm:mb-11 ${
              centered ? 'items-center text-center' : 'items-start'
            }`}
          >
            {eyebrow && (
              <p className={`eyebrow mb-4 flex items-center gap-2.5 ${eyebrowColor[tone]}`}>
                <span
                  aria-hidden="true"
                  className="inline-block h-px w-7 bg-current opacity-60"
                />
                {eyebrow}
              </p>
            )}

            {title && (
              <Heading
                id={id ? `${id}-heading` : undefined}
                className={`text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3.1rem] ${
                  centered ? '' : 'max-w-2xl'
                }`}
              >
                {title}
              </Heading>
            )}

            {lead && (
              <p
                className={`mt-5 text-[1.0625rem] leading-relaxed ${
                  centered ? `mx-auto ${maxWidth}` : 'max-w-2xl'
                } ${
                  tone === 'forest' || tone === 'forestSoft'
                    ? 'text-forest-200'
                    : 'text-ink-600'
                }`}
              >
                {lead}
              </p>
            )}

            {action && <div className="mt-7">{action}</div>}
          </Reveal>
        )}

        {children}
      </div>
    </Tag>
  )
}
