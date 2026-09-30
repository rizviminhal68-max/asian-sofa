import images from './images'

/**
 * Before / after transformation slots.
 *
 * These describe TYPES OF WORK, not completed client projects — no project
 * claims are made until real photographs are supplied. Replace each `before`
 * and `after` image in `src/content/images.js` with a real photo pair and
 * update the caption.
 */
export const beforeAfterItems = [
  {
    id: 'fabric-change',
    work: 'Sofa Fabric Change',
    summary: 'Keeping the sofa, replacing the cover.',
    before: images.beforeFabricChange,
    after: images.afterFabricChange,
  },
  {
    id: 'sofa-repair',
    work: 'Sofa Repair',
    summary: 'Torn seams re-stitched and sagging sections fixed.',
    before: images.beforeSofaRepair,
    after: images.afterSofaRepair,
  },
  {
    id: 'foam-replacement',
    work: 'Foam Replacement',
    summary: 'Compressed foam replaced to bring the seat shape back.',
    before: images.beforeFoam,
    after: images.afterFoam,
  },
  {
    id: 'furniture-restoration',
    work: 'Furniture Restoration',
    summary: 'A worn armchair brought back to usable condition.',
    before: images.beforeRestoration,
    after: images.afterRestoration,
  },
  {
    id: 'upholstery-work',
    work: 'Upholstery Work',
    summary: 'Damaged covering replaced and finished.',
    before: images.beforeUpholstery,
    after: images.afterUpholstery,
  },
]

export default beforeAfterItems
