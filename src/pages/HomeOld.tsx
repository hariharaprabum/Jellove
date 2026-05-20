import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Globe, MapPin, Star } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { natureFlavors, worldFlavors } from '../data/flavors'

/* ─── Marquee ─────────────────────────────────────────── */
const NATURE_TAGS = ['🥭 Mango', '🍓 Strawberry', '🌴 Tender Coconut', '🍈 Chikoo', '🌿 Jackfruit Musk Melon']
const WORLD_TAGS  = ['🍯 Honeycomb', '🍵 Matcha', '🍬 Peppermint', '🧀 Cheesecake', '🧈 Brown Butter Vanilla']

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden marquee-wrapper">
      <div className={`flex gap-8 whitespace-nowrap ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} marquee-track`}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide">
            {item}
            <span className="opacity-30">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Flavor card ─────────────────────────────────────── */
function HomeFlavorCard({ flavor }: { flavor: typeof natureFlavors[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="aspect-[3/4] overflow-hidden bg-brand-cream-dark">
        <img
          src={flavor.heroImage}
          alt={flavor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className={`text-[10px] font-sans font-semibold tracking-widest uppercase mb-2 inline-block ${
          flavor.collection === 'nature' ? 'text-green-300' : 'text-blue-300'
        }`}>
          {flavor.collection === 'nature' ? '🌿 Nature' : '🌍 World'}
        </span>
        <h3 className="font-display font-bold text-white text-2xl leading-tight">{flavor.name}</h3>
        <p className="text-white/70 text-xs font-body mt-1">{flavor.tagline}</p>
      </div>
    </motion.div>
  )
}

/* ─── Stats ───────────────────────────────────────────── */
const stats = [
  { value: '10+', label: 'Unique Flavours' },
  { value: '2',   label: 'Collections' },
  { value: '5★',  label: 'Customer Love' },
  { value: '1',   label: 'Beloved Store' },
]

/* ─── Testimonials ────────────────────────────────────── */
const testimonials = [
  { quote: "The Honeycomb is unlike anything I've had in Madurai. Genuinely world-class.", name: 'Priya K.', role: 'Food Blogger' },
  { quote: "Tender Coconut flavour tasted like it was made from the tree behind my house. Perfection.", name: 'Ramesh S.', role: 'Regular Customer' },
  { quote: "Matcha scoop had me closing my eyes. Pure Japan in KK Nagar — incredible.", name: 'Divya M.', role: 'Tea Enthusiast' },
]

export default function HomeOld() {
  const featuredFlavors = [
    natureFlavors[0],
    worldFlavors[0],
    natureFlavors[1],
    worldFlavors[1],
  ]

  return (
    <div>
      {/* ── HERO — dual poster split with glassmorphism overlay ── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Nature half */}
        <div className="relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden">
          <img src="/images/posters/nature-1.png" alt="From All of Nature" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-nature/40" />
        </div>
        {/* World half */}
        <div className="relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden">
          <img src="/images/posters/world-1.png" alt="From All Around the World" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-world/50" />
        </div>

        {/* Centre glassmorphism card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 z-10">
          <div className="bg-brand-dark/30 backdrop-blur-sm rounded-3xl px-8 py-10 md:px-16 md:py-14 max-w-3xl w-full border border-white/10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <img src="/logo.png" alt="Jellove" className="h-20 md:h-28 w-auto mx-auto brightness-200 drop-shadow-2xl" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display italic text-white/90 text-lg md:text-2xl mb-3"
            >
              Two worlds. One scoop.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="display-heading text-white text-5xl md:text-7xl lg:text-8xl mb-6"
            >
              Ice Cream<br />
              <span className="italic text-brand-gold-light">Reimagined.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/flavours" className="btn-primary bg-brand-red hover:bg-brand-red-dark text-white">
                Explore Flavours <ArrowRight size={16} />
              </Link>
              <Link to="/store" className="btn-outline text-white border-white/50 hover:bg-white/10">
                <MapPin size={16} /> Find Us in Madurai
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-6 mt-8"
            >
              <div className="flex items-center gap-2 text-white/70 text-sm font-sans">
                <Leaf size={14} className="text-green-300" />
                <span>From All of Nature</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/70 text-sm font-sans">
                <Globe size={14} className="text-blue-300" />
                <span>From Around the World</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-sans tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-px h-8 bg-white/30" />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="overflow-hidden">
        <div className="bg-brand-nature py-3 text-white">
          <Marquee items={NATURE_TAGS} />
        </div>
        <div className="bg-brand-world py-3 text-white">
          <Marquee items={WORLD_TAGS} reverse />
        </div>
      </section>

      {/* ── NATURE COLLECTION ── */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection delay={0.1}>
              <span className="nature-badge mb-5 inline-flex"><Leaf size={12} /> Collection 01</span>
              <h2 className="display-heading text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-6">
                From All<br /><span className="italic text-brand-nature">of Nature</span>
              </h2>
              <p className="font-body text-brand-dark/60 text-lg leading-relaxed mb-8 max-w-md">
                Five flavours born from India's richest soils and coastlines — Mango, Strawberry, Chikoo, Jackfruit Musk Melon, and Tender Coconut.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {natureFlavors.map((f) => (
                  <span key={f.id} className="bg-brand-nature/8 text-brand-nature/80 border border-brand-nature/15 rounded-full px-3 py-1 text-xs font-sans font-semibold">{f.name}</span>
                ))}
              </div>
              <Link to="/flavours" className="btn-primary bg-brand-nature hover:bg-brand-nature-light text-white">
                Taste Nature <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] row-span-2">
                <img src="/images/nature/mango.jpg" alt="Mango" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="/images/nature/strawberry.png" alt="Strawberry" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="/images/nature/tender-coconut.jpg" alt="Tender Coconut" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── WORLD COLLECTION ── */}
      <section className="py-20 md:py-32 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection delay={0.1} className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="/images/world/honeycomb.png" alt="Honeycomb" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] row-span-2">
                <img src="/images/world/matcha.png" alt="Matcha" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="/images/world/peppermint.png" alt="Peppermint" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="order-1 lg:order-2">
              <span className="world-badge mb-5 inline-flex"><Globe size={12} /> Collection 02</span>
              <h2 className="display-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                From All<br /><span className="italic text-brand-world-light">Around the World</span>
              </h2>
              <p className="font-body text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                Honeycomb from British Isles. Matcha from Uji, Japan. Peppermint from English fields. Global luxury, scooped fresh in Madurai.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {worldFlavors.map((f) => (
                  <span key={f.id} className="bg-brand-world/20 text-brand-world-light border border-brand-world/30 rounded-full px-3 py-1 text-xs font-sans font-semibold">{f.name}</span>
                ))}
              </div>
              <Link to="/flavours" className="btn-primary bg-brand-world hover:bg-brand-world-light text-white">
                Explore the World <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FEATURED FLAVOURS ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label text-brand-red/60 mb-3 block">Right Now</span>
            <h2 className="display-heading text-4xl md:text-6xl text-brand-dark">
              Scoop of the<br /><span className="italic text-brand-red">Moment</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredFlavors.map((flavor, i) => (
              <AnimatedSection key={flavor.id} delay={i * 0.1}>
                <HomeFlavorCard flavor={flavor} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link to="/flavours" className="btn-outline text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
              All 10 Flavours <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-brand-cream-dark">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
                <div className="font-display font-black text-5xl md:text-6xl text-brand-red mb-2">{s.value}</div>
                <div className="font-sans text-xs tracking-widest uppercase text-brand-dark/50">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-32 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label text-brand-gold/60 mb-3 block">Word on the Street</span>
            <h2 className="display-heading text-4xl md:text-5xl text-white">
              They said it<br /><span className="italic text-brand-gold">best.</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-brand-gold text-brand-gold" />)}
                  </div>
                  <p className="font-display italic text-white/80 text-lg leading-relaxed mb-6">"{t.quote}"</p>
                  <p className="font-sans font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-sans text-white/40 text-xs mt-0.5">{t.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORE CTA ── */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-brand-cream to-brand-gold/10" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <span className="section-label text-brand-red/60 mb-4 block">Find Us</span>
            <h2 className="display-heading text-5xl md:text-7xl text-brand-dark mb-6">
              Come say<br /><span className="italic text-brand-red">hello.</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-brand-dark/60 font-body text-lg mb-10">
              <MapPin size={18} className="text-brand-red flex-shrink-0" />
              <span>Opp. Sundaram Park, KK Nagar, Madurai</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/store" className="btn-primary">Store Hours & Directions <ArrowRight size={16} /></Link>
              <a href="https://wa.me/918124960933" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-brand-dark border-brand-dark/30 hover:border-brand-red hover:text-brand-red">
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
