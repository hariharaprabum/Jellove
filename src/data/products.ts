export interface Product {
  id: string
  name: string
  description: string
  image?: string
  category: 'icecream' | 'candies' | 'desserts' | 'faloodas' | 'sundaes' | 'smoothies' | 'shakes'
  badge?: string
  flavoursNote?: string
  note?: string // small caption, e.g. flavour variants
}

export const iceCreamProducts: Product[] = [
  {
    id: 'icecream-small',
    name: 'Ice Cream — Small',
    description: 'A perfectly portioned 110ml scoop — great for a quick treat or for the little ones. Served as a cup or cone.',
    image: '/images/nature/strawberry.webp',
    category: 'icecream',
    flavoursNote: 'Available in all 10 flavours',
  },
  {
    id: 'icecream-regular',
    name: 'Ice Cream — Regular',
    description: 'Our signature 180ml serving — a generous scoop of your favourite flavour, handcrafted fresh every single day. Cup or cone.',
    image: '/images/nature/mango.webp',
    category: 'icecream',
    badge: 'Most Popular',
    flavoursNote: 'Available in all 10 flavours',
  },
  {
    id: 'icecream-large',
    name: 'Ice Cream — Large',
    description: 'The full 210ml indulgence — for when a single scoop simply isn\'t enough. Served as a cup or cone.',
    image: '/images/world/brown-butter-vanilla.webp',
    category: 'icecream',
    flavoursNote: 'Available in all 10 flavours',
  },
]

export const candyProducts: Product[] = [
  {
    id: 'fruit-candies',
    name: 'Fruit Candies',
    description: 'Stick ice cream made with real fruit — refreshing, natural, and perfect for a quick bite on the go. Made from our From All of Nature collection flavours.',
    image: '/images/nature/fruit-candies.webp',
    category: 'candies',
    flavoursNote: 'Available in select Nature flavours',
  },
]

export const dessertProducts: Product[] = [
  {
    id: 'plain-cheesecake',
    name: 'Plain Cheesecake',
    description: 'Dense, velvety New York–style cheesecake on a buttery biscuit base. Pure, classic indulgence.',
    image: '/images/menu/desserts/plain-cheesecake.webp',
    category: 'desserts',
  },
  {
    id: 'flavoured-cheesecake',
    name: 'Flavoured Cheesecake',
    description: 'Our signature cheesecake crowned with fresh seasonal fruit and a glossy fruit glaze.',
    image: '/images/menu/desserts/flavoured-cheesecake.webp',
    category: 'desserts',
    note: 'Strawberry · Blueberry & more',
  },
  {
    id: 'apple-pie',
    name: 'Apple Pie',
    description: 'Golden lattice crust over warm, cinnamon-spiced apples. Comfort food at its finest.',
    image: '/images/menu/desserts/apple-pie.webp',
    category: 'desserts',
  },
  {
    id: 'lime-layers',
    name: 'Lime Layers',
    description: 'Zesty lime layered with airy sponge and cream — bright, refreshing and beautifully light.',
    image: '/images/menu/desserts/lime-layers.webp',
    category: 'desserts',
  },
  {
    id: 'brownie-pit',
    name: 'Brownie Pit',
    description: 'A deep, fudgy brownie with a molten gooey centre and crisp, chewy edges.',
    image: '/images/menu/desserts/brownie-pit.webp',
    category: 'desserts',
  },
  {
    id: 'ny-cookies',
    name: 'New York Cookies',
    description: 'Thick, bakery-style cookie with a gooey melting chocolate centre. Served by the piece.',
    image: '/images/menu/desserts/ny-cookies.webp',
    category: 'desserts',
  },
]

export const faloodaProducts: Product[] = [
  {
    id: 'classic-royal',
    name: 'Classic Royal',
    description: 'The timeless rose falooda — vermicelli, basil seeds, chilled milk and a scoop of ice cream, finished with nuts.',
    image: '/images/menu/faloodas/classic-royal.webp',
    category: 'faloodas',
  },
  {
    id: 'mango-royal',
    name: 'Mango Royal',
    description: 'Layers of sweet mango, falooda and creamy ice cream, crowned with fresh mango cubes.',
    image: '/images/menu/faloodas/mango-royal.webp',
    category: 'faloodas',
  },
  {
    id: 'strawberry-magic',
    name: 'Strawberry Magic',
    description: 'Fresh strawberry, silky cream and falooda — pink, playful and impossible to resist.',
    image: '/images/menu/faloodas/strawberry-magic.webp',
    category: 'faloodas',
  },
  {
    id: 'matcha-berry',
    name: 'Matcha Berry',
    description: 'Earthy Japanese matcha layered with berries and ice cream. Unexpected and refreshing.',
    image: '/images/menu/faloodas/matcha-berry.webp',
    category: 'faloodas',
  },
  {
    id: 'choco-brownie',
    name: 'Choco Brownie',
    description: 'Rich chocolate falooda loaded with fudgy brownie chunks and a scoop of ice cream.',
    image: '/images/menu/faloodas/choco-brownie.webp',
    category: 'faloodas',
  },
]

export const sundaeProducts: Product[] = [
  {
    id: 'tender-coconut-malai',
    name: 'Tender Coconut Malai',
    description: 'Creamy tender-coconut ice cream with soft coconut malai. Cool, light and tropical.',
    image: '/images/menu/sundaes/tender-coconut-malai.webp',
    category: 'sundaes',
  },
  {
    id: 'merry-berry',
    name: 'Merry Berry',
    description: "A berry lover's dream — mixed berries, berry sauce and scoops piled high.",
    image: '/images/menu/sundaes/merry-berry.webp',
    category: 'sundaes',
  },
  {
    id: 'banana-caramel-crunch',
    name: 'Banana Caramel Crunch',
    description: 'Banana, golden caramel and crunchy nuts over generous creamy scoops.',
    image: '/images/menu/sundaes/banana-caramel-crunch.webp',
    category: 'sundaes',
  },
  {
    id: 'love-by-chocolate',
    name: 'Love by Chocolate',
    description: 'For the chocoholics — layers of rich chocolate sauce, scoops and crunch.',
    image: '/images/menu/sundaes/love-by-chocolate.webp',
    category: 'sundaes',
  },
  {
    id: 'mang-oh-love',
    name: 'Mang-oh-Love',
    description: 'Mango, mango and more mango — scoops, cubes and a nutty crunch.',
    image: '/images/menu/sundaes/mang-oh-love.webp',
    category: 'sundaes',
  },
]

export const smoothieProducts: Product[] = [
  {
    id: 'musk-melony',
    name: 'Musk Melony',
    description: 'Fresh muskmelon blended smooth and chilled. Naturally sweet and hydrating.',
    image: '/images/menu/smoothies/musk-melony.webp',
    category: 'smoothies',
  },
  {
    id: 'strawberry-banana-bliss',
    name: 'Strawberry Banana Bliss',
    description: 'Strawberry and banana whipped into a creamy, fruity blend.',
    image: '/images/menu/smoothies/strawberry-banana-bliss.webp',
    category: 'smoothies',
  },
  {
    id: 'banana-peanut-butter',
    name: 'Banana Peanut Butter',
    description: 'Banana and peanut butter blended thick — nutty, creamy and filling.',
    image: '/images/menu/smoothies/banana-peanut-butter.webp',
    category: 'smoothies',
  },
  {
    id: 'watermelon-mint',
    name: 'Watermelon Mint',
    description: 'Juicy watermelon with a hint of fresh mint. Light and ultra-refreshing.',
    image: '/images/menu/smoothies/watermelon-mint.webp',
    category: 'smoothies',
  },
  {
    id: 'seasonal-fruit',
    name: 'Seasonal Fruit',
    description: "A rotating blend of the season's freshest fruit. Ask us for today's pick.",
    image: '/images/menu/smoothies/seasonal-fruit.webp',
    category: 'smoothies',
  },
]

// Shakes are tiered on the menu: Specialities + Regulars + DIY.
export const shakeSpecialities: Product[] = [
  {
    id: 'matcha-mango-shake',
    name: 'Matcha Mango',
    description: 'Ceremonial matcha meets sweet mango — earthy, fruity and vibrant.',
    category: 'shakes',
  },
  {
    id: 'matcha-strawberry-shake',
    name: 'Matcha Strawberry',
    description: 'Smooth matcha blended with fresh strawberry. Bold and beautifully balanced.',
    category: 'shakes',
  },
  {
    id: 'flavoured-yoghurt-shake',
    name: 'Flavoured Yoghurt',
    description: 'Creamy house yoghurt shake in your favourite flavour. Tangy and refreshing.',
    image: '/images/menu/shakes/flavoured-yoghurt.webp',
    category: 'shakes',
  },
  {
    id: 'cold-mud-coffee',
    name: 'Cold Mud Coffee',
    description: 'Our signature cold coffee — dark, frothy and deeply roasted.',
    image: '/images/menu/shakes/cold-mud-coffee.webp',
    category: 'shakes',
  },
]

export const shakeRegulars: Product[] = [
  { id: 'vanilla-shake', name: 'Vanilla', description: 'Classic, creamy and timeless.', image: '/images/menu/shakes/vanilla.webp', category: 'shakes' },
  { id: 'chocolate-shake', name: 'Chocolate', description: 'Rich and chocolatey through and through.', image: '/images/menu/shakes/chocolate.webp', category: 'shakes' },
  { id: 'strawberry-shake', name: 'Strawberry', description: 'Bright, fruity and pink.', image: '/images/menu/shakes/strawberry.webp', category: 'shakes' },
  { id: 'kitkat-shake', name: 'Kitkat', description: 'Crunchy chocolate wafer blended in.', image: '/images/menu/shakes/kitkat.webp', category: 'shakes' },
  { id: 'nutella-shake', name: 'Nutella', description: 'Velvety chocolate-hazelnut indulgence.', image: '/images/menu/shakes/nutella.webp', category: 'shakes' },
  { id: 'oreo-shake', name: 'Oreo', description: 'Cookies-and-cream in a glass.', image: '/images/menu/shakes/oreo.webp', category: 'shakes' },
  { id: 'biscoff-shake', name: 'Biscoff', description: 'Caramelised Biscoff cookie, blended smooth.', image: '/images/menu/shakes/biscoff.webp', category: 'shakes' },
]
