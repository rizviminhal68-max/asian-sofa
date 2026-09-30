import images from './images'

/**
 * Gallery items and filters.
 *
 * The `photo: true` flag marks every entry as needing real client photography.
 * The placeholder line in the UI is driven by this flag, so once real photos
 * are added set `photo: false` (or delete the flag) and the note disappears.
 */
export const galleryItems = [
  {
    id: 'g-sofa-repair-1',
    category: 'Sofa Repair',
    image: images.gallerySofaRepair,
    title: 'Sofa repair',
    note: 'Seam and joint repairs on a three-seater sofa.',
  },
  {
    id: 'g-upholstery-1',
    category: 'Upholstery',
    image: images.galleryUpholstery,
    title: 'Sofa upholstery',
    note: 'Old covering removed and new material fitted.',
  },
  {
    id: 'g-fabric-1',
    category: 'Fabric Change',
    image: images.galleryFabricChange,
    title: 'Fabric change',
    note: 'New cover on an existing sofa frame.',
  },
  {
    id: 'g-furniture-1',
    category: 'Furniture Work',
    image: images.galleryFurnitureRepair,
    title: 'Furniture repair',
    note: 'Joint and stability work on wooden furniture.',
  },
  {
    id: 'g-foam-1',
    category: 'Sofa Repair',
    image: images.galleryFoam,
    title: 'Foam replacement',
    note: 'Layered foam fitted to restore seat shape.',
  },
  {
    id: 'g-chair-1',
    category: 'Upholstery',
    image: images.galleryChair,
    title: 'Chair upholstery',
    note: 'Seat and back covering replaced on a single chair.',
  },
  {
    id: 'g-bed-1',
    category: 'Upholstery',
    image: images.galleryBed,
    title: 'Bed upholstery',
    note: 'Headboard panelling in coordinated material.',
  },
  {
    id: 'g-rexine-1',
    category: 'Fabric Change',
    image: images.galleryRexine,
    title: 'Rexine work',
    note: 'Leatherette material samples and fitted panels.',
  },
  {
    id: 'g-cushion-1',
    category: 'Sofa Repair',
    image: images.galleryCushion,
    title: 'Cushion repair',
    note: 'Flattened cushions reworked and reshaped.',
  },
  {
    id: 'g-polishing-1',
    category: 'Furniture Work',
    image: images.galleryPolishing,
    title: 'Furniture polishing',
    note: 'Surface finishing on a marked wooden piece.',
  },
  {
    id: 'g-furnishing-1',
    category: 'Furniture Work',
    image: images.galleryFurnishing,
    title: 'Custom furnishing',
    note: 'Existing furniture refreshed room by room.',
  },
  {
    id: 'g-stitch-1',
    category: 'Upholstery',
    image: images.galleryStitch,
    title: 'Stitching detail',
    note: 'Neat seams and finished edges on a sofa panel.',
  },
  {
    id: 'g-ba-fabric',
    category: 'Before & After',
    image: images.beforeFabricChange,
    title: 'Before — fabric change',
    note: 'Faded and worn cover before a fabric change.',
  },
  {
    id: 'g-ba-fabric-after',
    category: 'Before & After',
    image: images.afterFabricChange,
    title: 'After — fabric change',
    note: 'Same sofa with a fresh cover fitted.',
  },
  {
    id: 'g-ba-foam',
    category: 'Before & After',
    image: images.beforeFoam,
    title: 'Before — foam replacement',
    note: 'Compressed foam taken out of the seat.',
  },
  {
    id: 'g-ba-foam-after',
    category: 'Before & After',
    image: images.afterFoam,
    title: 'After — foam replacement',
    note: 'New layered foam fitted and cushion closed.',
  },
  {
    id: 'g-ba-restoration',
    category: 'Before & After',
    image: images.beforeRestoration,
    title: 'Before — furniture restoration',
    note: 'Worn armchair before restoration work.',
  },
  {
    id: 'g-ba-restoration-after',
    category: 'Before & After',
    image: images.afterRestoration,
    title: 'After — furniture restoration',
    note: 'Same armchair with new upholstery.',
  },
]

/** Featured items for the homepage preview. */
export const galleryFeatured = galleryItems.slice(0, 6)

export const galleryCategories = ['All', ...new Set(galleryItems.map((i) => i.category))]

export default galleryItems
