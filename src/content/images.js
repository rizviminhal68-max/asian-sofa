/**
 * Single source of truth for every image path on the site.
 *
 * The photography used here is free, commercially-usable stock imagery
 * (StockSnap + WordPress Photo Directory, both CC0). Swap any entry for the
 * client's own photography when it is available:
 *   1. Put the real photo in `public/images/` (prefer `.webp` or `.avif`).
 *   2. Change the path here, and set `width` / `height` to the real dimensions
 *      so the browser can reserve space and the layout never jumps.
 *   3. Nothing else needs to change — every component reads from this file.
 */
export const images = {
  // Hero
  heroSofa: { src: '/images/sofa-couch.jpg', width: 960, height: 640, alt: 'Sofa being repaired and reupholstered by Asian Sofa in Gurugram' },
  heroFabric: { src: '/images/fabric-1.jpg', width: 960, height: 640, alt: 'Close-up of upholstery fabric and stitching work' },
  heroChair: { src: '/images/armchair-yellow.jpg', width: 2048, height: 1365, alt: 'Single armchair with new upholstery fabric' },

  // Services
  serviceSofaRepair: { src: '/images/sofa-couch.jpg', width: 960, height: 640, alt: 'Three-seater sofa undergoing structural repair' },
  serviceUpholstery: { src: '/images/sofa-black.jpg', width: 960, height: 720, alt: 'Side view of a sofa being reupholstered' },
  serviceFabricChange: { src: '/images/fabric-2.jpg', width: 960, height: 640, alt: 'New fabric fitted over an existing sofa' },
  serviceFoam: { src: '/images/indoor-furniture.jpg', width: 960, height: 640, alt: 'Layered sofa foam ready for replacement' },
  serviceCushion: { src: '/images/sofa-leather.jpg', width: 960, height: 636, alt: 'Sofa cushion detail being reworked' },
  serviceFurnitureRepair: { src: '/images/wooden-furniture.jpg', width: 960, height: 640, alt: 'Wooden furniture joint being repaired' },
  servicePolishing: { src: '/images/furniture-table.jpg', width: 960, height: 640, alt: 'Tools used for furniture polishing and finishing' },
  serviceChair: { src: '/images/armchair-yellow.jpg', width: 2048, height: 1365, alt: 'Dining chair with refreshed upholstery' },
  serviceBed: { src: '/images/bed-large.jpg', width: 960, height: 640, alt: 'Bed headboard with upholstered panel' },
  serviceLeatherette: { src: '/images/leather-brown-1.jpg', width: 960, height: 638, alt: 'Leatherette rexine material swatches' },
  serviceFurnishing: { src: '/images/living-room-1.jpg', width: 960, height: 540, alt: 'Living room arranged with freshly furnished furniture' },

  // Before / after
  beforeFabricChange: { src: '/images/fabric-4.jpg', width: 960, height: 640, alt: 'Sofa before fabric change, faded and worn cover' },
  afterFabricChange: { src: '/images/fabric-2.jpg', width: 960, height: 640, alt: 'Same sofa after fabric change with a fresh cover' },
  beforeSofaRepair: { src: '/images/house-interior.jpg', width: 960, height: 640, alt: 'Sofa before repair with sagging seat cushions' },
  afterSofaRepair: { src: '/images/sofa-couch.jpg', width: 960, height: 640, alt: 'Same sofa after repair, cushions firm and stitching closed' },
  beforeFoam: { src: '/images/dining-interior.jpg', width: 960, height: 620, alt: 'Worn sofa foam layers before replacement' },
  afterFoam: { src: '/images/indoor-furniture.jpg', width: 960, height: 640, alt: 'New layered sofa foam after replacement' },
  beforeRestoration: { src: '/images/leather-brown-2.jpg', width: 960, height: 640, alt: 'Armchair before restoration with worn fabric' },
  afterRestoration: { src: '/images/armchair-ornate.jpg', width: 2048, height: 1536, alt: 'Armchair after restoration with new upholstery' },
  beforeUpholstery: { src: '/images/fabric-3.jpg', width: 960, height: 640, alt: 'Upholstery surface before work, torn and stained' },
  afterUpholstery: { src: '/images/fabric-1.jpg', width: 960, height: 640, alt: 'Upholstery surface after reworking' },

  // Gallery
  gallerySofaRepair: { src: '/images/sofa-black.jpg', width: 960, height: 720, alt: 'Sofa repair work carried out in Gurugram' },
  galleryUpholstery: { src: '/images/house-interior.jpg', width: 960, height: 640, alt: 'Sofa upholstery work in progress' },
  galleryFabricChange: { src: '/images/fabric-2.jpg', width: 960, height: 640, alt: 'Fabric change on a sofa in Gurugram' },
  galleryFurnitureRepair: { src: '/images/wooden-furniture.jpg', width: 960, height: 640, alt: 'Furniture repair detail' },
  galleryFoam: { src: '/images/living-room-2.jpg', width: 960, height: 540, alt: 'Sofa foam replacement stack' },
  galleryChair: { src: '/images/sofa-chair.jpg', width: 960, height: 557, alt: 'Chair upholstery in Gurugram' },
  galleryBed: { src: '/images/bed-2.jpg', width: 960, height: 636, alt: 'Bed upholstery panel work' },
  galleryRexine: { src: '/images/leather-brown-1.jpg', width: 960, height: 638, alt: 'Rexine leatherette material samples' },
  galleryCushion: { src: '/images/sofa-leather.jpg', width: 960, height: 636, alt: 'Sofa cushion repair detail' },
  galleryPolishing: { src: '/images/furniture-table.jpg', width: 960, height: 640, alt: 'Furniture polishing and finishing' },
  galleryFurnishing: { src: '/images/dining-room.jpg', width: 960, height: 640, alt: 'Custom furniture furnishing work' },
  galleryStitch: { src: '/images/sewing.jpg', width: 960, height: 663, alt: 'Close-up of upholstery stitching detail' },

  // About
  aboutWorkshop: { src: '/images/carpenter-workshop.jpg', width: 960, height: 640, alt: 'Repair tools and workshop bench' },
  aboutDetail: { src: '/images/sewing.jpg', width: 960, height: 663, alt: 'Upholstery stitching detail close-up' },

  // Social share
  ogImage: { src: '/images/og-asian-sofa.jpg', width: 1200, height: 630, alt: 'Asian Sofa — sofa and furniture repair in Gurugram' },
}

export default images
