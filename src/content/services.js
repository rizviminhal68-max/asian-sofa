import images from './images'

/**
 * Service categories offered by Asian Sofa.
 *
 * These are CATEGORIES of work, not a claim that every variation of every
 * service is available. To add, remove or reword a service, edit this array —
 * the Services page, homepage preview and enquiry dropdown all read from here.
 */
export const services = [
  {
    id: 'sofa-repair',
    title: 'Sofa Repair',
    icon: 'Sofa',
    group: 'sofa',
    image: images.serviceSofaRepair,
    short:
      'Torn seams, loose stitching, wobbling legs and broken springs — fixed without replacing the whole sofa.',
    detail:
      'If the frame is still sound, most sofa problems can be repaired instead of replaced. We close torn upholstery, re-stitch seams, tighten loose joints and sort out sagging sections so the sofa goes back to daily use.',
    includes: [
      'Tear and seam repair',
      'Loose stitching and seam re-closure',
      'Sagging and uneven sections',
      'Frame and leg tightening',
    ],
  },
  {
    id: 'sofa-upholstery',
    title: 'Sofa Upholstery',
    icon: 'Layers',
    group: 'sofa',
    image: images.serviceUpholstery,
    short:
      'Full reupholstery for sofas where the frame is good but the covering has given up.',
    detail:
      'Old covering is removed, the underlying structure is checked and repaired where needed, and new material is fitted and finished. Suitable when the frame and springs are in reasonable shape but the upholstery is beyond simple repair.',
    includes: ['Old covering removal', 'Underlying structure check', 'New cover fitting', 'Finished seams and edges'],
  },
  {
    id: 'sofa-fabric-change',
    title: 'Sofa Fabric Change',
    icon: 'PaintBucket',
    group: 'sofa',
    image: images.serviceFabricChange,
    short:
      'Keep the sofa, change the cover. A straightforward way to refresh colour and fabric.',
    detail:
      'A popular option when a sofa still feels comfortable but the fabric is faded, stained or dated. The existing cover is replaced with fabric you choose, which updates the look of the sofa without the cost of buying a new one.',
    includes: ['Wide fabric selection', 'Old fabric removal', 'Cutting to size', 'Refitting and finishing'],
  },
  {
    id: 'sofa-foam-replacement',
    title: 'Sofa Foam Replacement',
    icon: 'Layers3',
    group: 'sofa',
    image: images.serviceFoam,
    short:
      'Flattened, crunchy or bottomed-out cushions are usually a foam problem, not a sofa problem.',
    detail:
      'When the seat feels flat, uneven or hard, the foam has usually compressed over time. Replacing the foam restores the shape and comfort of the seat without the cost of a new sofa.',
    includes: ['Old foam removal', 'Layered foam options', 'Seat and back filling', 'Cushion refitting'],
  },
  {
    id: 'sofa-cushion-repair',
    title: 'Sofa Cushion Repair',
    icon: 'Frame',
    group: 'sofa',
    image: images.serviceCushion,
    short:
      'Loose, split or flattened cushions rebuilt so the sofa looks intentional again.',
    detail:
      'Cushions are often the first thing to look tired. Covers can be re-stitched, zips replaced and filling renewed so a sofa stops looking deflated in the middle of the room.',
    includes: ['Cover re-stitching', 'Zip and closure replacement', 'Filling renewal', 'Reshaping'],
  },
  {
    id: 'furniture-repair',
    title: 'Furniture Repair',
    icon: 'Wrench',
    group: 'furniture',
    image: images.serviceFurnitureRepair,
    short:
      'Loose joints, wobbly chairs and damaged furniture repaired rather than thrown out.',
    detail:
      'Furniture gets moved, bumped and used hard. When a piece is structurally sound but no longer stable or presentable, repairing it is usually the sensible option — and the cheaper one.',
    includes: ['Joint and frame tightening', 'Leg and support repair', 'Wobble correction', 'Minor wood fixing'],
  },
  {
    id: 'furniture-polishing',
    title: 'Furniture Polishing',
    icon: 'Sparkles',
    group: 'furniture',
    image: images.servicePolishing,
    short:
      'Surface finishing work that brings dull, marked furniture back to a clean look.',
    detail:
      'A finishing pass over wooden surfaces that have lost their sheen or picked up marks from everyday use, helping the piece look cared for again.',
    includes: ['Surface cleaning', 'Mark and scuff treatment', 'Finishing polish', 'Edge and handle attention'],
  },
  {
    id: 'custom-furnishing',
    title: 'Custom Furniture Furnishing',
    icon: 'Home',
    group: 'furniture',
    image: images.serviceFurnishing,
    short:
      'Refresh existing furniture so a room looks put-together again without a full refurnish.',
    detail:
      'Where a room has started to look unfinished, furnishing work on the pieces you already own can close the gap far more cheaply than replacing everything at once.',
    includes: ['Piece-by-piece planning', 'Material selection', 'Upholstery and finishing', 'Room-wise sequencing'],
  },
  {
    id: 'leatherette-rexine',
    title: 'Leatherette / Rexine Replacement',
    icon: 'Droplet',
    group: 'material',
    image: images.serviceLeatherette,
    short:
      'Rexine and leatherette covers fitted where an easy-clean surface makes more sense.',
    detail:
      'Leatherette and rexine are commonly chosen for dining chairs, bar stools, office seating and other high-use furniture where a wipe-clean surface is more practical than fabric.',
    includes: ['Rexine fitting', 'Leatherette panels', 'Seam finishing', 'Edge trimming'],
  },
  {
    id: 'chair-upholstery',
    title: 'Chair Upholstery',
    icon: 'Armchair',
    group: 'material',
    image: images.serviceChair,
    short:
      'Dining chairs, study chairs and stools refreshed with new seat and back covering.',
    detail:
      'Chairs get worn fastest because they are used daily. Replacing the seat and back covering is a small job with a very visible result, especially on a matching dining set.',
    includes: ['Seat cover replacement', 'Back rest covering', 'Rexine or fabric options', 'Matching sets'],
  },
  {
    id: 'bed-upholstery',
    title: 'Bed Upholstery',
    icon: 'Bed',
    group: 'material',
    image: images.serviceBed,
    short:
      'Headboard panels, bed frames and bench seating reupholstered to match the room.',
    detail:
      'Bed frames and headboards often carry a lot of the room\'s character. Upholstery work here is usually done to coordinate with the sofa and other pieces.',
    includes: ['Headboard panelling', 'Frame and rail covering', 'Bench seating', 'Coordinated with sofa work'],
  },
]

export const serviceGroups = [
  {
    id: 'sofa',
    title: 'Sofa Repair & Upholstery',
    description:
      'Everything from a single torn seam to a full reupholstery job, depending on what the sofa actually needs.',
  },
  {
    id: 'furniture',
    title: 'Furniture Repair & Finishing',
    description:
      'Keeping good furniture in use instead of replacing it when the problem is fixable.',
  },
  {
    id: 'material',
    title: 'Fabric, Leatherette & Other Upholstery',
    description:
      'Covering work for chairs, beds and other pieces where the frame is fine but the surface is not.',
  },
]

export const servicesByGroup = (groupId) =>
  services.filter((s) => s.group === groupId)

export const findService = (id) => services.find((s) => s.id === id)

/** Options for the contact form "Service Required" select. */
export const serviceOptions = [
  'Sofa Repair',
  'Sofa Upholstery',
  'Sofa Fabric Change',
  'Sofa Foam Replacement',
  'Sofa Cushion Repair',
  'Furniture Repair',
  'Furniture Polishing',
  'Custom Furniture Furnishing',
  'Leatherette / Rexine Replacement',
  'Chair Upholstery',
  'Bed Upholstery',
  'Something else',
]

export default services
