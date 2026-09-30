/**
 * Icon registry.
 * Content files reference icons by name as plain strings so they stay free of
 * JSX and can be edited without touching imports.
 */
import {
  Armchair,
  Bed,
  Camera,
  Droplet,
  Frame,
  Hammer,
  Home,
  Layers,
  Layers3,
  Leaf,
  MessageCircle,
  PaintBucket,
  Scissors,
  ShieldCheck,
  Sofa,
  Sparkles,
  Truck,
  Wrench,
} from 'lucide-react'

export const icons = {
  Armchair,
  Bed,
  Camera,
  Droplet,
  Frame,
  Hammer,
  Home,
  Layers,
  Layers3,
  Leaf,
  MessageCircle,
  PaintBucket,
  Scissors,
  ShieldCheck,
  Sofa,
  Sparkles,
  Truck,
  Wrench,
}

/** Resolve an icon name to a component, falling back to Sparkles. */
export const getIcon = (name) => icons[name] ?? Sparkles

export default icons
