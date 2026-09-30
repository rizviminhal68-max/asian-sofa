/**
 * Single source of truth for every image path on the site.
 *
 * ── HOW TO REPLACE THE PLACEHOLDERS WITH REAL PHOTOGRAPHY ────────────────
 * 1. Put the real photo in `public/images/` (prefer `.webp` or `.avif`).
 * 2. Change the path here, and set `width` / `height` to the real dimensions
 *    so the browser can reserve space and the layout never jumps.
 * 3. Nothing else needs to change — every component reads from this file.
 * ─────────────────────────────────────────────────────────────────────────
 */
export const images = {
  // Hero
  heroSofa: { src: '/images/hero-sofa-workshop.svg', width: 1200, height: 800, alt: 'Sofa being repaired and reupholstered by Asian Sofa in Gurugram' },
  heroFabric: { src: '/images/hero-fabric-detail.svg', width: 1200, height: 800, alt: 'Close-up of upholstery fabric and stitching work' },
  heroChair: { src: '/images/hero-chair-detail.svg', width: 1200, height: 800, alt: 'Single armchair with new upholstery fabric' },

  // Services
  serviceSofaRepair: { src: '/images/service-sofa-repair.svg', width: 1200, height: 800, alt: 'Three-seater sofa undergoing structural repair' },
  serviceUpholstery: { src: '/images/service-sofa-upholstery.svg', width: 1200, height: 800, alt: 'Side view of a sofa being reupholstered' },
  serviceFabricChange: { src: '/images/service-fabric-change.svg', width: 1200, height: 800, alt: 'New fabric fitted over an existing sofa' },
  serviceFoam: { src: '/images/service-foam-replacement.svg', width: 1200, height: 800, alt: 'Layered sofa foam ready for replacement' },
  serviceCushion: { src: '/images/service-cushion-repair.svg', width: 1200, height: 800, alt: 'Sofa cushion detail being reworked' },
  serviceFurnitureRepair: { src: '/images/service-furniture-repair.svg', width: 1200, height: 800, alt: 'Wooden furniture joint being repaired' },
  servicePolishing: { src: '/images/service-furniture-polishing.svg', width: 1200, height: 800, alt: 'Tools used for furniture polishing and finishing' },
  serviceChair: { src: '/images/service-chair-upholstery.svg', width: 1200, height: 800, alt: 'Dining chair with refreshed upholstery' },
  serviceBed: { src: '/images/service-bed-upholstery.svg', width: 1200, height: 800, alt: 'Bed headboard with upholstered panel' },
  serviceLeatherette: { src: '/images/service-leatherette.svg', width: 1200, height: 800, alt: 'Leatherette rexine material swatches' },
  serviceFurnishing: { src: '/images/service-custom-furnishing.svg', width: 1200, height: 800, alt: 'Living room arranged with freshly furnished furniture' },

  // Before / after
  beforeFabricChange: { src: '/images/before-sofa-fabric-change.svg', width: 1200, height: 800, alt: 'Sofa before fabric change, faded and worn cover' },
  afterFabricChange: { src: '/images/after-sofa-fabric-change.svg', width: 1200, height: 800, alt: 'Same sofa after fabric change with a fresh cover' },
  beforeSofaRepair: { src: '/images/before-sofa-repair.svg', width: 1200, height: 800, alt: 'Sofa before repair with sagging seat cushions' },
  afterSofaRepair: { src: '/images/after-sofa-repair.svg', width: 1200, height: 800, alt: 'Same sofa after repair, cushions firm and stitching closed' },
  beforeFoam: { src: '/images/before-foam-replacement.svg', width: 1200, height: 800, alt: 'Worn sofa foam layers before replacement' },
  afterFoam: { src: '/images/after-foam-replacement.svg', width: 1200, height: 800, alt: 'New layered sofa foam after replacement' },
  beforeRestoration: { src: '/images/before-furniture-restoration.svg', width: 1200, height: 800, alt: 'Armchair before restoration with worn fabric' },
  afterRestoration: { src: '/images/after-furniture-restoration.svg', width: 1200, height: 800, alt: 'Armchair after restoration with new upholstery' },
  beforeUpholstery: { src: '/images/before-upholstery-work.svg', width: 1200, height: 800, alt: 'Upholstery surface before work, torn and stained' },
  afterUpholstery: { src: '/images/after-upholstery-work.svg', width: 1200, height: 800, alt: 'Upholstery surface after reworking' },

  // Gallery
  gallerySofaRepair: { src: '/images/asian-sofa-repair-gurugram.svg', width: 1200, height: 800, alt: 'Sofa repair work carried out in Gurugram' },
  galleryUpholstery: { src: '/images/asian-sofa-upholstery.svg', width: 1200, height: 800, alt: 'Sofa upholstery work in progress' },
  galleryFabricChange: { src: '/images/sofa-fabric-change-gurugram.svg', width: 1200, height: 800, alt: 'Fabric change on a sofa in Gurugram' },
  galleryFurnitureRepair: { src: '/images/furniture-repair-gurugram.svg', width: 1200, height: 800, alt: 'Furniture repair detail' },
  galleryFoam: { src: '/images/asian-sofa-foam-replacement.svg', width: 1200, height: 800, alt: 'Sofa foam replacement stack' },
  galleryChair: { src: '/images/asian-sofa-chair-upholstery.svg', width: 1200, height: 800, alt: 'Chair upholstery in Gurugram' },
  galleryBed: { src: '/images/asian-sofa-bed-upholstery.svg', width: 1200, height: 800, alt: 'Bed upholstery panel work' },
  galleryRexine: { src: '/images/asian-sofa-rexine-work.svg', width: 1200, height: 800, alt: 'Rexine leatherette material samples' },
  galleryCushion: { src: '/images/asian-sofa-cushion-repair.svg', width: 1200, height: 800, alt: 'Sofa cushion repair detail' },
  galleryPolishing: { src: '/images/asian-sofa-furniture-polishing.svg', width: 1200, height: 800, alt: 'Furniture polishing and finishing' },
  galleryFurnishing: { src: '/images/asian-sofa-custom-furnishing.svg', width: 1200, height: 800, alt: 'Custom furniture furnishing work' },
  galleryStitch: { src: '/images/asian-sofa-stitch-work.svg', width: 1200, height: 800, alt: 'Close-up of upholstery stitching detail' },

  // About
  aboutWorkshop: { src: '/images/about-workshop.svg', width: 1200, height: 800, alt: 'Repair tools and workshop bench' },
  aboutDetail: { src: '/images/about-detail.svg', width: 1200, height: 800, alt: 'Upholstery stitching detail close-up' },

  // Social share
  ogImage: { src: '/images/og-asian-sofa.svg', width: 1200, height: 630, alt: 'Asian Sofa — sofa and furniture repair in Gurugram' },
}

export default images
