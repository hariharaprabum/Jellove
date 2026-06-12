export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: 'icecream' | 'candies' | 'desserts'
  badge?: string
  flavoursNote?: string
}

export const iceCreamProducts: Product[] = [
  {
    id: 'icecream-small',
    name: 'Ice Cream — Small',
    description: 'A perfectly portioned cup — great for a quick treat or for the little ones. Choose any single flavour from our Nature or World collection.',
    image: '/images/nature/strawberry.webp',
    category: 'icecream',
    flavoursNote: 'Available in all 10 flavours',
  },
  {
    id: 'icecream-regular',
    name: 'Ice Cream — Regular',
    description: 'Our signature serving. A generous scoop of your favourite flavour — handcrafted fresh, every single day.',
    image: '/images/nature/mango.webp',
    category: 'icecream',
    badge: 'Most Popular',
    flavoursNote: 'Available in all 10 flavours',
  },
]

export const candyProducts: Product[] = [
  {
    id: 'fruit-candies',
    name: 'Fruit Candies',
    description: 'Stick ice cream made with real fruit — refreshing, natural, and perfect for a quick bite on the go. Made from our From All of Nature collection flavours.',
    image: '/images/world/peppermint-icecream.webp',
    category: 'candies',
    flavoursNote: 'Available in select Nature flavours',
  },
]

export const dessertProducts: Product[] = [
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    description: 'Rich, creamy cheesecake made in-house. Dense, velvety, and perfectly balanced between sweet and tangy.',
    image: '/images/desserts/cheesecake.webp',
    category: 'desserts',
  },
  {
    id: 'brownie-pit',
    name: 'Brownie Pit',
    description: 'A deep, fudgy brownie — warm, chocolatey, and indulgent. Crisp edges, gooey centre.',
    image: '/images/desserts/brownie.webp',
    category: 'desserts',
  },
  {
    id: 'apple-pie',
    name: 'Apple Pie',
    description: 'Classic apple pie with a buttery crust and cinnamon-spiced filling. Comfort food at its finest.',
    image: '/images/desserts/apple-pie.webp',
    category: 'desserts',
  },
  {
    id: 'lemon-tart',
    name: 'Lemon Tart',
    description: 'A bright, zesty lemon curd in a crisp pastry shell. Sharp, refreshing, and beautifully light.',
    image: '/images/desserts/lemon-tart.webp',
    category: 'desserts',
  },
  {
    id: 'ny-cookies',
    name: 'New York Cookies',
    description: 'Thick, bakery-style cookies — crispy outside, chewy inside. Inspired by the classic New York cookie shops.',
    image: '/images/desserts/ny-cookies.webp',
    category: 'desserts',
  },
]
