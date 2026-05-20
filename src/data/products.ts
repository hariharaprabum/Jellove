export interface ProductSize {
  name: string
  scoops: number
  price: number
  bestFor: string
}

export interface Product {
  id: string
  name: string
  description: string
  sizes: ProductSize[]
  image: string
  badge?: string
  popular?: boolean
}

export const products: Product[] = [
  {
    id: 'single-scoop',
    name: 'Single Scoop Cup',
    description: 'One generous scoop in our signature Jellove cup. The classic way to enjoy any single flavour.',
    sizes: [
      { name: 'Regular', scoops: 1, price: 60, bestFor: 'A quick treat' },
      { name: 'Large', scoops: 1, price: 80, bestFor: 'Generous indulgence' },
    ],
    image: '/images/nature/strawberry.png',
    popular: false,
  },
  {
    id: 'double-scoop',
    name: 'Double Scoop Cup',
    description: 'Two scoops — mix any two flavours across Nature or World collections.',
    sizes: [
      { name: 'Standard', scoops: 2, price: 110, bestFor: 'Mixing collections' },
      { name: 'Loaded', scoops: 2, price: 140, bestFor: 'Extra generous' },
    ],
    image: '/images/world/honeycomb.png',
    popular: true,
    badge: 'Most Popular',
  },
  {
    id: 'trio-cup',
    name: 'Trio Cup',
    description: 'Three scoops of your choice — the perfect sampler to explore both collections.',
    sizes: [
      { name: 'Classic', scoops: 3, price: 160, bestFor: 'First-time explorers' },
    ],
    image: '/images/world/cheesecake.png',
    badge: 'Fan Favourite',
    popular: true,
  },
  {
    id: 'party-pack',
    name: 'Party Pack',
    description: 'Take the joy home. Choose up to 5 flavours in our premium party tub — perfect for celebrations.',
    sizes: [
      { name: '500ml', scoops: 0, price: 280, bestFor: '2–3 people' },
      { name: '1 Litre', scoops: 0, price: 520, bestFor: '4–6 people' },
      { name: '2 Litres', scoops: 0, price: 950, bestFor: 'Parties & events' },
    ],
    image: '/images/posters/nature-2.jpg',
    popular: false,
  },
  {
    id: 'combo-box',
    name: 'Combo Tasting Box',
    description: 'A curated set of 6 single-serve cups — 3 from Nature, 3 from the World. The perfect gift.',
    sizes: [
      { name: 'Tasting Set', scoops: 6, price: 350, bestFor: 'Gifting & exploration' },
    ],
    image: '/images/world/matcha.png',
    badge: 'Gift Ready',
    popular: false,
  },
]
