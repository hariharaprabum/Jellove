import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IceCream, Candy, Cake, CupSoda, ArrowRight, MapPin, Star, Leaf, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { iceCreamProducts, candyProducts, dessertProducts, treatProducts, type Product } from '../data/products'
import { flavors, natureFlavors } from '../data/flavors'

/* ── helpers ─────────────────────────────────────────────────────── */
function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ── Flavour name strip ──────────────────────────────────────────── */
function FlavourStrip({ items }: { items: typeof flavors }) {
  return (
    <div className="mt-4 pt-4 border-t border-brand-cream-deeper/50">
      <p className="text-[9px] font-sans font-bold tracking-[0.22em] uppercase text-brand-dark/35 mb-2.5">
        Available flavours
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((f) => (
          <span
            key={f.id}
            className="inline-flex items-center gap-1 bg-brand-cream-dark px-2.5 py-1 rounded-full"
          >
            {f.collection === 'nature'
              ? <Leaf size={9} className="text-brand-nature flex-shrink-0" />
              : <Globe size={9} className="text-brand-world flex-shrink-0" />}
            <span className="text-[9px] font-sans font-semibold text-brand-dark/65 whitespace-nowrap">
              {f.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Ice cream card — portrait, generous ─────────────────────────── */
function IceCreamCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream-dark flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
          {product.badge && (
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-brand-red text-white text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
              <Star size={9} className="fill-white" /> {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <span className="section-label text-brand-red/60 mb-2 block">Ice Cream</span>
          <h3 className="font-display font-black text-2xl text-brand-dark leading-tight mb-3">
            {product.name}
          </h3>
          <p className="font-body text-sm text-brand-dark/60 leading-relaxed flex-1">
            {product.description}
          </p>
          {product.flavoursNote && <FlavourStrip items={flavors} />}
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

/* ── Candy featured card ─────────────────────────────────────────── */
function CandyCard({ product }: { product: Product }) {
  return (
    <AnimatedSection>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group grid grid-cols-1 md:grid-cols-2 bg-brand-dark rounded-3xl overflow-hidden shadow-xl"
      >
        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-12 py-10 md:py-14 order-2 md:order-1">
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={13} className="text-brand-nature" />
            <span className="section-label text-brand-nature/70">Fruit Candies</span>
          </div>
          <h3 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
            {product.name}
          </h3>
          <p className="font-body text-sm text-white/55 leading-relaxed mb-6 max-w-xs">
            {product.description}
          </p>
          {product.flavoursNote && (
            <div className="border-t border-white/10 pt-4">
              <p className="text-[9px] font-sans font-bold tracking-[0.22em] uppercase text-white/30 mb-2.5">
                Available flavours
              </p>
              <div className="flex flex-wrap gap-1.5">
                {natureFlavors.map((f) => (
                  <span
                    key={f.id}
                    className="inline-flex items-center gap-1 bg-white/8 border border-white/10 px-2.5 py-1 rounded-full"
                  >
                    <Leaf size={9} className="text-brand-nature flex-shrink-0" />
                    <span className="text-[9px] font-sans font-semibold text-white/60 whitespace-nowrap">
                      {f.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Image */}
        <div className="relative overflow-hidden min-h-[260px] md:min-h-0 order-1 md:order-2">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-brand-dark/20" />
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

/* ── Dessert card ────────────────────────────────────────────────── */
function DessertCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const isTreat = product.category === 'treats'
  const TagIcon = isTreat ? CupSoda : Cake
  const tagLabel = isTreat ? 'Treat' : 'Dessert'
  const tagColor = isTreat ? 'text-brand-gold/70' : 'text-brand-world/60'
  const hoverColor = isTreat ? 'group-hover:text-brand-gold' : 'group-hover:text-brand-world'
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative aspect-square overflow-hidden bg-brand-cream-dark">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-107"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <TagIcon size={9} className={tagColor} />
            <span className={`text-[8px] font-sans font-bold tracking-[0.2em] uppercase ${tagColor}`}>{tagLabel}</span>
          </div>
          <h3 className={`font-display font-bold text-sm md:text-base text-brand-dark leading-snug mb-1 ${hoverColor} transition-colors duration-300`}>
            {product.name}
          </h3>
          <p className="font-body text-[11px] text-brand-dark/45 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

/* ── Section heading ─────────────────────────────────────────────── */
function SectionHead({ icon, label, title, accent }: {
  icon: React.ReactNode; label: string; title: React.ReactNode; accent: string
}) {
  return (
    <AnimatedSection className="mb-8 md:mb-12">
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: accent + '18', color: accent }}
        >
          {icon}
        </div>
        <div>
          <span className="section-label mb-0.5 block" style={{ color: accent + 'AA' }}>{label}</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-brand-dark leading-tight">
            {title}
          </h2>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function Products() {
  return (
    <div className="pt-20">

      {/* ══ HERO — matches Flavours/About theme exactly ══════════ */}
      <section className="relative overflow-hidden bg-brand-dark py-14 md:py-28 lg:py-36">
        {/* Split background — nature left, world right */}
        <div className="absolute inset-0 flex">
          <div className="flex-1 opacity-20">
            <img src="/images/posters/nature-2.webp" alt="" decoding="async" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 opacity-20">
            <img src="/images/posters/world-1.webp" alt="" decoding="async" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-brand-dark/65" />

        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label text-brand-gold/60 mb-4 block">Our Menu</span>
            <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl text-white mb-5">
              What We <span className="italic text-brand-gold-light">Serve</span>
            </h1>
            <p className="font-body text-white/60 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
              Handcrafted ice creams, fruit candies &amp; freshly made desserts — all made in-store, every day.
            </p>
          </motion.div>

          {/* Category chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {[
              { id: 'ice-cream',     label: 'Ice Cream',    icon: <IceCream size={13} /> },
              { id: 'fruit-candies', label: 'Fruit Candies', icon: <Candy size={13} /> },
              { id: 'desserts',      label: 'Desserts',      icon: <Cake size={13} /> },
              { id: 'treats',        label: 'Treats',        icon: <CupSoda size={13} /> },
            ].map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => jump(c.id)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white/75 hover:text-white font-sans font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300"
              >
                {c.icon} {c.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ STICKY NAV — matches Flavours sticky style ═══════════ */}
      <div className="sticky top-16 md:top-20 z-30 bg-brand-cream/95 backdrop-blur-md border-b border-brand-cream-deeper/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide py-3.5">
            {[
              { id: 'ice-cream',     label: 'Ice Cream',    icon: <IceCream size={13} />, active: 'bg-brand-red text-white' },
              { id: 'fruit-candies', label: 'Fruit Candies', icon: <Candy size={13} />,   active: 'bg-brand-nature text-white' },
              { id: 'desserts',      label: 'Desserts',      icon: <Cake size={13} />,    active: 'bg-brand-world text-white' },
              { id: 'treats',        label: 'Treats',        icon: <CupSoda size={13} />, active: 'bg-brand-gold text-white' },
            ].map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => jump(c.id)}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-sans font-semibold text-sm text-brand-dark/55 hover:text-brand-dark bg-transparent hover:bg-brand-cream-dark transition-all duration-200 whitespace-nowrap flex-shrink-0"
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ICE CREAM ════════════════════════════════════════════ */}
      <section id="ice-cream" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead
            icon={<IceCream size={22} />}
            label="Collection 01"
            title={<>Ice <span className="italic text-brand-red">Cream</span></>}
            accent="#D42719"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl">
            {iceCreamProducts.map((p, i) => (
              <IceCreamCard key={p.id} product={p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="border-t border-brand-cream-deeper/50" />
      </div>

      {/* ══ FRUIT CANDIES ════════════════════════════════════════ */}
      <section id="fruit-candies" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead
            icon={<Candy size={22} />}
            label="Collection 02"
            title={<>Fruit <span className="italic text-brand-nature">Candies</span></>}
            accent="#3A6030"
          />
          <div>
            {candyProducts.map((p) => (
              <CandyCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="border-t border-brand-cream-deeper/50" />
      </div>

      {/* ══ DESSERTS ═════════════════════════════════════════════ */}
      <section id="desserts" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead
            icon={<Cake size={22} />}
            label="Collection 03"
            title={<>House <span className="italic text-brand-world">Desserts</span></>}
            accent="#8A5A10"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {dessertProducts.map((p, i) => (
              <DessertCard key={p.id} product={p} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="border-t border-brand-cream-deeper/50" />
      </div>

      {/* ══ SIGNATURE TREATS ═════════════════════════════════════ */}
      <section id="treats" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead
            icon={<CupSoda size={22} />}
            label="Collection 04"
            title={<>Signature <span className="italic text-brand-gold">Treats</span></>}
            accent="#E8A61A"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
            {treatProducts.map((p, i) => (
              <DessertCard key={p.id} product={p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA — matches About/Flavours CTA style ═══════════════ */}
      <section className="py-12 md:py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <span className="section-label text-brand-gold/60 mb-4 block">Visit Us</span>
            <h3 className="display-heading text-white text-4xl md:text-6xl mb-5">
              Come taste it<br />
              <span className="italic text-brand-gold-light">in person.</span>
            </h3>
            <p className="font-body text-white/55 mb-8 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
              Everything is made fresh daily. Visit us at KK Nagar, Madurai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/flavours" className="btn-primary">
                Browse Flavours <ArrowRight size={16} />
              </Link>
              <Link to="/store" className="btn-outline text-white border-white/30 hover:bg-white/10">
                <MapPin size={16} /> Find Our Store
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
