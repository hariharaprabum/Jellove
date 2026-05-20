export interface Flavor {
  id: string
  name: string
  tagline: string
  description: string
  collection: 'nature' | 'world'
  heroImage: string
  color: string
  accentHex: string
  origin: string
  highlight: string
}

export const flavors: Flavor[] = [
  {
    id: 'mango',
    name: 'Mango',
    tagline: 'Sunlit & Golden',
    description: 'Ripe Alphonso mangoes from Tamil Nadu groves — pure, golden, impossibly sweet.',
    collection: 'nature',
    heroImage: '/images/nature/mango.jpg',
    color: 'bg-amber-50',
    accentHex: '#E8A000',
    origin: 'Tamil Nadu, India',
    highlight: 'Real Alphonso Mango',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    tagline: 'Ripe & Ruby',
    description: 'Fresh strawberries churned into a velvety cream — bright, tangy, and alive.',
    collection: 'nature',
    heroImage: '/images/nature/strawberry.png',
    color: 'bg-rose-50',
    accentHex: '#E8234A',
    origin: 'Ooty Farms, India',
    highlight: 'Fresh-Crushed Berries',
  },
  {
    id: 'chikoo',
    name: 'Chikoo',
    tagline: 'Earthy & Sweet',
    description: 'Sapodilla at its finest — warm caramel notes with a uniquely tropical soul.',
    collection: 'nature',
    heroImage: '/images/nature/chikoo.png',
    color: 'bg-orange-50',
    accentHex: '#A0622A',
    origin: 'South India',
    highlight: 'Rare Sapodilla Fruit',
  },
  {
    id: 'jackfruit',
    name: 'Jackfruit Musk Melon',
    tagline: 'Tropical Fusion',
    description: 'Two iconic South Indian flavours woven together in creamy harmony.',
    collection: 'nature',
    heroImage: '/images/nature/jackfruit.jpg',
    color: 'bg-yellow-50',
    accentHex: '#C8A000',
    origin: 'Kerala & Tamil Nadu',
    highlight: 'Dual-Fruit Blend',
  },
  {
    id: 'tender-coconut',
    name: 'Tender Coconut',
    tagline: 'Cool & Pure',
    description: 'Young coconut water and cream folded into the most refreshing scoop imaginable.',
    collection: 'nature',
    heroImage: '/images/nature/tender-coconut.jpg',
    color: 'bg-emerald-50',
    accentHex: '#2D8A50',
    origin: 'Kerala Coast',
    highlight: 'Young Coconut Cream',
  },
  {
    id: 'honeycomb',
    name: 'Honeycomb',
    tagline: 'Amber & Bold',
    description: 'Raw honeycomb shards folded into golden cream — British countryside luxury.',
    collection: 'world',
    heroImage: '/images/world/honeycomb.png',
    color: 'bg-amber-50',
    accentHex: '#D4800A',
    origin: 'British Isles',
    highlight: 'Raw Honeycomb Shards',
  },
  {
    id: 'matcha',
    name: 'Matcha',
    tagline: 'Ceremonial Grade',
    description: 'First-flush Japanese matcha whisked into cream — earthy, complex, and meditative.',
    collection: 'world',
    heroImage: '/images/world/matcha.png',
    color: 'bg-green-50',
    accentHex: '#3D7A2A',
    origin: 'Uji, Japan',
    highlight: 'Ceremonial Matcha',
  },
  {
    id: 'peppermint',
    name: 'Peppermint',
    tagline: 'Crisp & Arctic',
    description: 'English peppermint oil in pure white cream — clean, cool, and unexpectedly luxurious.',
    collection: 'world',
    heroImage: '/images/world/peppermint.png',
    color: 'bg-teal-50',
    accentHex: '#0E8A7A',
    origin: 'England',
    highlight: 'Pure Peppermint Oil',
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    tagline: 'New York Dream',
    description: 'Cream cheese base with a buttery graham cracker swirl — the real New York deal.',
    collection: 'world',
    heroImage: '/images/world/cheesecake.png',
    color: 'bg-purple-50',
    accentHex: '#7A3A8A',
    origin: 'New York, USA',
    highlight: 'Graham Cracker Swirl',
  },
  {
    id: 'brown-butter-vanilla',
    name: 'Brown Butter Vanilla',
    tagline: 'Nutty & Deep',
    description: 'Beurre noisette and Madagascar vanilla — a Parisian classic reinvented in every scoop.',
    collection: 'world',
    heroImage: '/images/world/brown-butter-vanilla.png',
    color: 'bg-amber-50',
    accentHex: '#8A5A1A',
    origin: 'Paris, France',
    highlight: 'Madagascar Vanilla',
  },
]

export const natureFlavors = flavors.filter((f) => f.collection === 'nature')
export const worldFlavors = flavors.filter((f) => f.collection === 'world')
