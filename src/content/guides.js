import images from './images'

/**
 * Guides / articles.
 *
 * Structure is intentionally data-driven so new articles can be added by
 * appending to this array — the listing page and the article route both read
 * from here automatically.
 *
 * Block types: p | h2 | ul | note
 * No author names, publish dates or prices are included anywhere.
 */

const countWords = (blocks) =>
  blocks.reduce((total, block) => {
    if (block.type === 'ul') return total + block.items.join(' ').split(/\s+/).length
    return total + String(block.text ?? '').split(/\s+/).length
  }, 0)

const build = (guide) => ({
  ...guide,
  readMinutes: Math.max(2, Math.round(countWords(guide.blocks) / 180)),
})

export const guides = [
  build({
    slug: 'how-much-does-sofa-repair-cost-in-gurugram',
    title: 'How Much Does Sofa Repair Cost in Gurugram?',
    category: 'Pricing',
    image: images.serviceSofaRepair,
    excerpt:
      'There is no single price for sofa repair. What you pay depends on the sofa, what is wrong with it and which materials are used. Here is what actually moves the number.',
    blocks: [
      {
        type: 'p',
        text: 'Ask any sofa repair service for a price and you will get a range back, not a number. That is not evasion — the same job can differ a lot depending on the sofa in front of you. Understanding what affects the cost helps you judge a quote instead of just accepting it.',
      },
      { type: 'h2', text: 'What actually changes the price' },
      {
        type: 'ul',
        items: [
          'The size of the piece. A two-seater costs less in labour and material than a large sectional, purely because there is less of it.',
          'What is actually wrong. Re-stitching a torn seam is a small job. Replacing every cushion and the full foam set is a much bigger one.',
          'Whether the covering stays. A repair that keeps the original fabric costs less than a reupholstery job with new material.',
          'The material you choose. Fabric, rexine and leatherette sit at different price points, and some premium fabrics cost considerably more than standard options.',
          'The condition of the frame. A sound frame can usually be worked on. Frames that need rebuilding, or springs that have to be replaced throughout, add to the work.',
          'Stitching and finishing. Neat seams, matched patterns and finished edges take more time than a rough cover stretched over.',
        ],
      },
      {
        type: 'p',
        text: 'Two quotes for "sofa repair" can both be reasonable and still differ by a wide margin simply because one is repairing a single cushion and the other is replacing the whole covering. When comparing, check that both quotes cover the same scope.',
      },
      { type: 'h2', text: 'How to get an accurate quote' },
      {
        type: 'ul',
        items: [
          'Send clear photos of the whole sofa, plus close-ups of the damaged area.',
          'Mention the number of seats and whether any part is a chaise, recliner or sectional.',
          'Say whether you want to keep the existing fabric or change it.',
          'If you already know the material you want, mention it — it saves a step.',
          'Ask what is included and what would cost extra, so there are no surprises later.',
        ],
      },
      {
        type: 'note',
        text: 'Prices are only confirmed after the piece is seen or described properly. Anyone giving a firm figure over the phone for a sofa they have not seen is guessing.',
      },
      { type: 'h2', text: 'Why repair is often the sensible choice' },
      {
        type: 'p',
        text: 'A sofa with a failing cover or flat foam is a covering problem, not a furniture problem. Once the frame and springs are involved in the damage, replacement becomes the logical option. In the first case you are buying new material on a frame you already own. In the second you are buying a whole new sofa. That is the difference worth weighing before deciding.',
      },
      {
        type: 'p',
        text: 'If you want a figure for your own sofa, call or WhatsApp Asian Sofa with a few photos and a description of the problem. We will tell you what the work involves and whether repair makes sense for that piece.',
      },
    ],
  }),

  build({
    slug: 'sofa-repair-vs-buying-a-new-sofa',
    title: 'Sofa Repair vs Buying a New Sofa',
    category: 'Buying Guide',
    image: images.gallerySofaRepair,
    excerpt:
      'A worn sofa is not automatically a sofa that needs replacing. A few quick checks tell you whether repair is realistic.',
    blocks: [
      {
        type: 'p',
        text: 'Most people face this decision at the worst possible time — when the sofa has started to look genuinely bad and you want it sorted quickly. A few checks help you make the call on evidence rather than frustration.',
      },
      { type: 'h2', text: 'Check the frame first' },
      {
        type: 'p',
        text: 'Sit on the sofa firmly and push into the frame. If you can feel solid timber or metal underneath and the sofa does not rock or twist, the frame is doing its job. That single test rules out the most expensive problem and makes every other option worth considering.',
      },
      { type: 'h2', text: 'Then check the springs and suspension' },
      {
        type: 'p',
        text: 'Remove a cushion and press down. You should meet resistance quickly and evenly, not sink to the bottom. If one section feels markedly softer or creaks under weight, the suspension needs attention — but that is usually repairable rather than a replacement reason.',
      },
      { type: 'h2', text: 'Now check the things that are easy to fix' },
      {
        type: 'ul',
        items: [
          'Faded, stained or worn fabric — a fabric change fixes this entirely.',
          'Flattened or crunchy cushions — new foam or filling restores the feel.',
          'Torn seams, loose stitching or a split zip — a straightforward repair.',
          'Wobbly legs or loose joints — tightening and minor fixing usually sort it.',
        ],
      },
      {
        type: 'note',
        text: 'If most of the list above applies to your sofa, repair is very likely to be the right call.',
      },
      { type: 'h2', text: 'When buying new does make more sense' },
      {
        type: 'ul',
        items: [
          'The frame has visibly warped, cracked or come apart at the joints.',
          'Springs have rusted through or the suspension has failed across most of the sofa.',
          'The design or shape is the problem — you want a different layout or size entirely.',
          'The sofa is a cheap, thin build where the frame will not hold another repair.',
        ],
      },
      { type: 'h2', text: 'The middle ground' },
      {
        type: 'p',
        text: 'Often only part of a sofa needs attention. Reupholstering just the seat sections, or replacing foam in the base while keeping the back as it is, can bring a piece back to a good standard at a fraction of the cost of starting again. When you speak to Asian Sofa, ask about a partial job rather than assuming you need everything done.',
      },
    ],
  }),

  build({
    slug: 'signs-your-sofa-needs-new-foam',
    title: 'Signs Your Sofa Needs New Foam',
    category: 'Maintenance',
    image: images.serviceFoam,
    excerpt:
      'Foam fails quietly. It does not break one day — it compresses slowly until the sofa feels wrong. Here are the early signs.',
    blocks: [
      {
        type: 'p',
        text: 'By the time a sofa feels obviously bad, the foam has usually been compressed for a while. Catching it earlier means less work and a smaller bill, so it is worth knowing what to look for.',
      },
      { type: 'h2', text: 'The early signs' },
      {
        type: 'ul',
        items: [
          'You can feel the frame edge when you sit down, when the foam used to hide it completely.',
          'The seat feels flat or hard in the middle while the edges still feel normal.',
          'Cushions slouch to one side and will not sit square until you push them back.',
          'Creases and folds in the cover stay put instead of springing back when you smooth them.',
          'The sofa makes a rustling or crunching sound when you move, which is the sound of foam breaking down internally.',
          'One person sits comfortably but two people together sink noticeably more than they should.',
        ],
      },
      { type: 'h2', text: 'What compressed foam cannot do' },
      {
        type: 'p',
        text: 'Foam does not recover on its own. Once it has lost its structure, no amount of vacuuming, plumping or rotating will bring it back, because the cells have physically collapsed. Replacing the foam is the only way to restore the original feel of the seat.',
      },
      {
        type: 'note',
        text: 'If the sofa is otherwise good, foam replacement alone can be enough — you do not have to reupholster it at the same time.',
      },
      { type: 'h2', text: 'Foam replacement vs new foam plus new fabric' },
      {
        type: 'p',
        text: 'These are separate decisions. New foam fixes the comfort; new fabric fixes the appearance. If the cover still looks good, replacing only the foam keeps the cost down. If both are tired, doing them together avoids taking the sofa apart twice.',
      },
      {
        type: 'p',
        text: 'Not sure which is your situation? Send a photo of the sofa with the cushions removed on WhatsApp, or call Asian Sofa. A short description of how it feels when you sit down is usually enough to tell which part needs attention.',
      },
    ],
  }),

  build({
    slug: 'how-to-select-sofa-fabric',
    title: 'How to Select Sofa Fabric',
    category: 'Materials',
    image: images.serviceFabricChange,
    excerpt:
      'Fabric choice is decided by who sits on the sofa, what gets spilled on it, and whether you want to clean it easily.',
    blocks: [
      {
        type: 'p',
        text: 'The right fabric is the one that suits the room and the people using it. Here is a straightforward way to narrow the options before you choose.',
      },
      { type: 'h2', text: 'Start with how it will be used' },
      {
        type: 'ul',
        items: [
          'Everyday family use with children: durable, tightly woven and easy to clean beat anything delicate.',
          'Pets: stain resistance and a pattern that hides marks matter more than colour.',
          'Formal living rooms, used occasionally: texture and feel can take priority over durability.',
          'Direct sunlight through large windows: darker or tightly woven fabrics fade less noticeably.',
          'Air conditioning vents pointed at the sofa: very fine or loosely woven fabrics can dry out and weaken.',
        ],
      },
      { type: 'h2', text: 'The common choices' },
      {
        type: 'ul',
        items: [
          'Cotton and cotton blends — breathable and comfortable in Indian conditions, but they stain unless treated.',
          'Linen and linen-look fabrics — cool to the touch and naturally relaxed in appearance.',
          'Velvet and chenille — rich in colour and very soft, though pile can flatten with heavy use and takes care to clean.',
          'Jacquard and printed fabrics — patterned, sturdy and a good choice if you want the sofa to carry the room.',
          'Microfibre and performance fabrics — engineered to resist stains and wipe clean. A sensible option for busy homes.',
          'Rexine and leatherette — wipe-clean and hard-wearing, common on dining and office seating.',
        ],
      },
      { type: 'h2', text: 'Think about cleaning before you fall in love with a colour' },
      {
        type: 'p',
        text: 'Light colours show everything. A cream sofa in a home with young children will need more careful cleaning than a mid-tone fabric. Whatever you choose, ask how it should be cleaned and how it behaves when it gets wet.',
      },
      {
        type: 'note',
        text: 'Always ask to see or feel the actual material before it is cut. Screen colours are not reliable guides to how fabric will look in your lighting.',
      },
      { type: 'h2', text: 'Order extra, keep the details' },
      {
        type: 'p',
        text: 'When the work is quoted, ask whether a small length of the chosen fabric is included for future repairs. Seams and edges wear out first, and a matching offcut saved on day one saves an awkward search later.',
      },
    ],
  }),

  build({
    slug: 'fabric-vs-leatherette-upholstery',
    title: 'Fabric vs Leatherette Upholstery',
    category: 'Materials',
    image: images.serviceLeatherette,
    excerpt:
      'Both are practical choices — for different furniture. Here is a plain comparison to help you pick.',
    blocks: [
      {
        type: 'p',
        text: 'Fabric and leatherette are often discussed as if one is better than the other. In practice they suit different furniture and different households.',
      },
      { type: 'h2', text: 'At a glance' },
      {
        type: 'ul',
        items: [
          'Cleaning: leatherette wipes clean with a damp cloth; fabric needs vacuuming and periodic deeper cleaning.',
          'Feel: fabric is warmer and softer; leatherette is smoother and slightly cooler to touch.',
          'Puncture risk: leatherette can be scratched or scuffed by pets, though small marks are often manageable.',
          'Breathability: fabric allows air through; leatherette does not, so it can feel warm in a sunny room.',
          'Longevity: fabric fades with sunlight over time; leatherette tends to crack with age if not conditioned.',
          'Best suited to: sofas, beds and loungers versus dining chairs, bar stools and office seating.',
        ],
      },
      { type: 'h2', text: 'Where leatherette makes sense' },
      {
        type: 'p',
        text: 'Dining chairs and bar stools get used daily, often with spills, and need to be wiped down quickly after a meal. Office seating takes the same beating. For these pieces, an easy-clean surface is more practical than a softer one.',
      },
      { type: 'h2', text: 'Where fabric makes more sense' },
      {
        type: 'p',
        text: 'Sofas, beds and loungers are used for long stretches at a time. Fabric is more comfortable over hours and suits the warmth of a living room. It is also the easier choice if the room gets a lot of direct afternoon sun and you want the sofa to feel soft rather than cool.',
      },
      {
        type: 'note',
        text: 'A common approach in Gurgaon homes is fabric on the sofa and rexine on the dining chairs — comfort where you relax, easy cleaning where you eat.',
      },
      { type: 'h2', text: 'Can you change your mind later?' },
      {
        type: 'p',
        text: 'Yes — that is what a fabric change or reupholstery job is. If you are unsure, keep the frame in good condition and decide later. A sofa that has been well maintained is much easier to re-cover than one that has been neglected.',
      },
    ],
  }),

  build({
    slug: 'how-to-maintain-a-repaired-sofa',
    title: 'How to Maintain a Repaired Sofa',
    category: 'Maintenance',
    image: images.galleryStitch,
    excerpt:
      'New foam, new seams, new fabric — all of it lasts longer with a few small habits.',
    blocks: [
      {
        type: 'p',
        text: 'Repair work is worth protecting. These are simple habits that keep the work looking good for longer and make the next repair a much smaller job.',
      },
      { type: 'h2', text: 'Regular, low-effort habits' },
      {
        type: 'ul',
        items: [
          'Vacuum the sofa every week, including between cushions and along the seams where dust collects.',
          'Rotate and plump the cushions regularly so the filling wears evenly instead of settling on one side.',
          'Keep fabric out of prolonged direct sunlight where you can, as fading is permanent.',
          'Turn cushions over when the surface starts to look flattened; the underside usually holds up better.',
          'Blot spills immediately with a clean cloth rather than rubbing, which pushes the mark deeper.',
          'Avoid harsh cleaners and solvents on both fabric and rexine until you know what the material tolerates.',
        ],
      },
      { type: 'h2', text: 'Watch the weak points' },
      {
        type: 'p',
        text: 'Seams, piping, cushion zips and the underside of seat cushions take the most strain. If you notice a seam starting to open or a zip straining, get it looked at early. A small repair at that stage costs far less than letting it run.',
      },
      {
        type: 'note',
        text: 'Sitting on the arms or using the back of the sofa as a second seat wears out the foam in the wrong places. Treating the sofa as a sofa is the simplest way to protect it.',
      },
      { type: 'h2', text: 'Climate matters in Gurugram' },
      {
        type: 'p',
        text: 'Air conditioning vents blowing continuously onto upholstery can dry out fabric and foam over time, especially leatherette. Adjusting the vent direction away from the sofa is a small change that makes a real difference.',
      },
      { type: 'p',
        text: 'If something does go wrong, send a photo on WhatsApp before it becomes a bigger job. It is the quickest way to find out whether it needs a repair visit or is something that can be sorted in a few minutes.',
      },
    ],
  }),

  build({
    slug: 'when-should-you-reupholster-furniture',
    title: 'When Should You Reupholster Furniture?',
    category: 'Materials',
    image: images.galleryUpholstery,
    excerpt:
      'Reupholstery is worth it more often than people assume. The signs it is time are mostly visual.',
    blocks: [
      {
        type: 'p',
        text: 'Furniture tends to be kept too long after it stops looking good, and replaced too quickly when it only looks tired. Reupholstery sits between the two, and for a lot of pieces it is exactly right.',
      },
      { type: 'h2', text: 'Signals that the time has come' },
      {
        type: 'ul',
        items: [
          'The frame is solid but the covering has faded unevenly in the sun-exposed areas.',
          'Fabric has worn through at the arms and front edge while the rest still looks sound.',
          'Stains and marks have gone into the weave rather than sitting on the surface.',
          'The colour no longer works with the room, even though the furniture itself is comfortable.',
          'You have had the same sofa long enough that the shape no longer suits how you sit.',
          'The home has changed — new paint, new flooring, new curtains — and the furniture looks left behind.',
        ],
      },
      { type: 'h2', text: 'Reupholstery vs covering repair' },
      {
        type: 'p',
        text: 'A cover repair suits a single torn area or a failed seam. Reupholstery suits a piece whose covering has failed across the board. If you are choosing between the two, the useful test is how widespread the damage is: one problem area is a repair, general wear is a reupholstery.',
      },
      {
        type: 'note',
        text: 'It is worth checking the underlying structure before deciding. Reupholstering a sofa with a failing frame buys a new cover for something that still sags.',
      },
      { type: 'h2', text: 'Good reasons to do it now' },
      {
        type: 'ul',
        items: [
          'You are moving house and want the furniture to suit the new place.',
          'The room is being redecorated and the sofa is the last thing that does not fit.',
          'Spilled liquid has reached the foam and needs to come out regardless of the covering.',
          'A good sofa is available for reupholstery at a much lower cost than a comparable new one.',
        ],
      },
      { type: 'p',
        text: 'Send photos of the piece on WhatsApp or call Asian Sofa. We will tell you whether reupholstery makes sense or whether a smaller repair job will do the job.',
      },
    ],
  }),
]

export const guideCategories = ['All', ...new Set(guides.map((g) => g.category))]

export const findGuide = (slug) => guides.find((g) => g.slug === slug)

/** Other articles to link at the bottom of an article page. */
export const relatedGuides = (current, limit = 3) =>
  guides.filter((g) => g.slug !== current.slug).slice(0, limit)

export default guides
