import { icons } from './icons'
import { Sparkles } from 'lucide-react'

/**
 * Render a lucide icon by name.
 *
 * Lives in its own module so the registry (`icons.js`) stays JSX-free and the
 * component never gets re-created during render.
 */
export default function Icon({ name, className = 'size-5', strokeWidth }) {
  const Resolved = icons[name] ?? Sparkles
  return <Resolved className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
