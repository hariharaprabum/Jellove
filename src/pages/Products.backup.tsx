import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Star, Leaf } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { iceCreamProducts, candyProducts, dessertProducts, type Product } from '../data/products'
import { flavors, natureFlavors } from '../data/flavors'

/* ─── Flavour tag strip ─────────────────────────────────────────── */
function FlavourStrip({ items }: { items: typeof flavors }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-brand-cream-deeper/50">
      {items.map((f) => (
        <span
          key={f.id}
          className="inline-flex items-center gap-1.5 bg-brand-cream-dark/70 px-2.5 py-1 rounded-full"
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: f.collection === 'nature' ? '#3A6030' : '#8A5A10' }}
          />
          <span className="text-[9px] font-sans font-semibold tracking-wide text-brand-dark/60 whitespace-nowrap">
            {f.name}
          </span>
        </span>
      ))}
    </div>
  )
}

/* ─── jump ─────────────────────────────────────────────────────── */
function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ─── Ice Cream panel — alternating full-bleed image/text ───────── */
function IceCreamPanel({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 border-b border-brand-cream-deeper/60 last:border-b-0"
    >
      {/* Image — full-bleed, no border-radius, no card */}
      <div
        className={`relative overflow-hidden bg-brand-cream-dark ${isEven ? 'md:order-1' : 'md:order-2'}`}
        style={{ minHeight: '420px' }}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          initial={{ scale: 1.06 }}
          animate={inView ? { scale: 1 } : { scale: 1.06 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* subtle vignette */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(26,13,4,0.12) 0%, transparent 60%)' }} />
        {product.badge && (
          <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-brand-red text-white text-[9px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
            <Star size={8} className="fill-white" /> {product.badge}
          </span>
        )}
      </div>

      {/* Text — generous padding, editorial */}
      <div className={`flex flex-col justify-center px-8 py-12 md:px-14 md:py-20 lg:px-20 bg-brand-cream ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-5 h-0.5 bg-brand-red/50 rounded-full" />
            <span className="text-[10px] font-sans font-bold tracking-[0.28em] uppercase text-brand-red/60">
              Ice Cream
            </span>
          </div>

          <h3
            className="font-display font-black text-brand-dark leading-[0.92] mb-5"
            style={{ fontSize: 'clamp(36px, 4vw, 54px)' }}
          >
            {product.name}
          </h3>

          <p className="font-body text-brand-dark/55 text-sm md:text-base leading-relaxed max-w-xs mb-7">
            {product.description}
          </p>

          {product.flavoursNote && <FlavourStrip items={flavors} />}
        </motion.div>
      </div>
    </motion.div>
  )
}

/* ─── Candy — full-dark cinematic ──────────────────────────────── */
function CandyPanel({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 bg-brand-dark"
    >
      {/* Text */}
      <div className="flex flex-col justify-center px-8 py-12 md:px-14 md:py-20 lg:px-20 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Leaf size={11} className="text-brand-nature" />
            <span className="text-[10px] font-sans font-bold tracking-[0.28em] uppercase text-brand-nature/70">
              Fruit Candies
            </span>
          </div>

          <h3
            className="font-display font-black text-white leading-[0.92] mb-5"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          >
            {product.name}
          </h3>

          <p className="font-body text-white/50 text-sm md:text-base leading-relaxed max-w-xs mb-8">
            {product.description}
          </p>

          {product.flavoursNote && <FlavourStrip items={natureFlavors} />}
        </motion.div>
      </div>

      {/* Image — full-bleed, no radius */}
      <div className="relative overflow-hidden order-1 md:order-2 bg-brand-dark-mid" style={{ minHeight: '420px' }}>
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          initial={{ scale: 1.06 }}
          animate={inView ? { scale: 1 } : { scale: 1.06 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(26,13,4,0.3) 0%, transparent 50%)' }} />
      </div>
    </motion.div>
  )
}

/* ─── Dessert — horizontal menu list ───────────────────────────── */
function DessertRow({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-[40px_72px_1fr] md:grid-cols-[56px_88px_1fr_auto] items-center gap-5 md:gap-7 py-5 md:py-6 border-b border-brand-cream-deeper/60 last:border-0"
    >
      {/* Number */}
      <span className="font-display font-black text-2xl md:text-3xl text-brand-cream-deeper leading-none select-none group-hover:text-brand-world/40 transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Square thumbnail — only element with border-radius */}
      <div className="relative w-[72px] h-[72px] md:w-[88px] md:h-[88px] overflow-hidden rounded-xl flex-shrink-0 bg-brand-cream-dark">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <h3 className="font-display font-bold text-lg md:text-xl text-brand-dark leading-tight mb-1 group-hover:text-brand-world transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-body text-xs md:text-sm text-brand-dark/50 leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Arrow — desktop only */}
      <div className="hidden md:flex w-9 h-9 rounded-full border border-brand-cream-deeper items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-brand-world group-hover:bg-brand-world transition-all duration-300 flex-shrink-0">
        <ArrowRight size={14} className="text-white" />
      </div>
    </motion.div>
  )
}

/* ─── Section label ─────────────────────────────────────────────── */
function SectionLabel({ num, accent, label, title }: {
  num: string; accent: string; label: string; title: React.ReactNode
}) {
  return (
    <div className="flex items-end gap-4 md:gap-6 mb-0">
      <span
        className="font-display font-black leading-none select-none hidden sm:block flex-shrink-0"
        style={{ fontSize: '64px', color: accent + '18', lineHeight: 1 }}
      >
        {num}
      </span>
      <div className="pb-1">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="h-px w-4 rounded-full" style={{ background: accent + '70' }} />
          <span className="text-[10px] font-sans font-bold tracking-[0.28em] uppercase" style={{ color: accent + '80' }}>
            {label}
          </span>
        </div>
        <h2
          className="font-display font-black text-brand-dark leading-tight"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
        >
          {title}
        </h2>
      </div>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function Products() {
  return (
    <div className="pt-20 bg-brand-cream">

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-cream">

        {/* Ghost "MENU" watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-display font-black text-brand-cream-deeper/40 whitespace-nowrap leading-none"
            style={{ fontSize: '22vw' }}
          >
            MENU
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-10 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">

            {/* Headline — spans 7 */}
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-brand-red/50" />
                <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-brand-red/60">
                  Our Menu
                </span>
              </div>
              <h1
                className="font-display font-black text-brand-dark"
                style={{ fontSize: 'clamp(60px, 10vw, 120px)', lineHeight: 0.87, letterSpacing: '-0.02em' }}
              >
                What<br />We<br />
                <span className="italic text-brand-red">Serve.</span>
              </h1>
            </motion.div>

            {/* Right col — spans 5 */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-body text-brand-dark/55 text-base md:text-lg leading-relaxed mb-8 max-w-xs">
                Handcrafted ice creams, fruit candies &amp; freshly made desserts — made in-store, every single day.
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-brand-dark/30 mb-1">
                  Jump to section
                </p>
                {[
                  { id: 'ice-cream', label: '01 — Ice Cream', accent: 'border-brand-red/30 text-brand-red/80' },
                  { id: 'fruit-candies', label: '02 — Fruit Candies', accent: 'border-brand-nature/30 text-brand-nature/80' },
                  { id: 'desserts', label: '03 — Desserts', accent: 'border-brand-world/30 text-brand-world/80' },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => jump(c.id)}
                    className={`text-left font-display font-bold text-base md:text-lg border-b pb-2 transition-all duration-300 hover:pl-2 ${c.accent}`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-12 h-px bg-gradient-to-r from-brand-red/40 via-brand-cream-deeper to-transparent" />
        </div>
      </section>

      {/* ══ STICKY NAV ═══════════════════════════════════════════ */}
      <div className="sticky top-16 md:top-20 z-30 bg-brand-cream/95 backdrop-blur-md border-b border-brand-cream-deeper/60">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide py-3">
            {[
              { id: 'ice-cream', label: '01 / Ice Cream', color: 'hover:text-brand-red' },
              { id: 'fruit-candies', label: '02 / Fruit Candies', color: 'hover:text-brand-nature' },
              { id: 'desserts', label: '03 / Desserts', color: 'hover:text-brand-world' },
            ].map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => jump(c.id)}
                className={`inline-flex items-center gap-1.5 px-5 py-2 font-display font-bold text-sm text-brand-dark/35 ${c.color} transition-colors duration-200 whitespace-nowrap flex-shrink-0`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ICE CREAM ════════════════════════════════════════════ */}
      <section id="ice-cream" className="scroll-mt-36">
        {/* Section label */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-8">
          <AnimatedSection>
            <SectionLabel
              num="01" accent="#D42719" label="Collection 01"
              title={<>Ice <span className="italic text-brand-red">Cream</span></>}
            />
          </AnimatedSection>
        </div>

        {/* Full-bleed alternating panels */}
        <div className="border-t border-brand-cream-deeper/60">
          {iceCreamProducts.map((p, i) => (
            <IceCreamPanel key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* ══ FRUIT CANDIES ════════════════════════════════════════ */}
      <section id="fruit-candies" className="scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-8">
          <AnimatedSection>
            <SectionLabel
              num="02" accent="#3A6030" label="Collection 02"
              title={<>Fruit <span className="italic text-brand-nature">Candies</span></>}
            />
          </AnimatedSection>
        </div>
        <div className="border-t border-brand-cream-deeper/40">
          {candyProducts.map((p) => (
            <CandyPanel key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ══ DESSERTS ═════════════════════════════════════════════ */}
      <section id="desserts" className="scroll-mt-36 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-14 md:pb-24">
          <AnimatedSection>
            <SectionLabel
              num="03" accent="#8A5A10" label="Collection 03"
              title={<>House <span className="italic text-brand-world">Desserts</span></>}
            />
          </AnimatedSection>

          {/* Horizontal menu list */}
          <div className="mt-8 md:mt-12 border-t border-brand-cream-deeper/60">
            {dessertProducts.map((p, i) => (
              <DessertRow key={p.id} product={p} index={i} />
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="mt-6 text-[10px] font-sans text-brand-dark/28 flex items-center gap-2.5">
              <span className="w-4 h-px bg-brand-dark/20 inline-block flex-shrink-0" />
              Dessert images are representative — real photos coming soon.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-dark py-16 md:py-28">
        <div className="absolute inset-0 opacity-[0.07]">
          <img src="/images/posters/world-1.webp" alt="" decoding="async" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/96 to-brand-dark" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-xl mx-auto px-5 md:px-10 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/20" />
              <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-white/35">
                Visit Us
              </span>
              <div className="h-px w-8 bg-white/20" />
            </div>

            <h3
              className="font-display font-black text-white mb-5"
              style={{ fontSize: 'clamp(36px, 6vw, 68px)', lineHeight: 0.92 }}
            >
              Come taste it<br />
              <span className="italic text-brand-gold-light">in person.</span>
            </h3>

            <p className="font-body text-white/40 mb-10 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
              Everything made fresh daily. KK Nagar, Madurai.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/flavours" className="btn-primary">
                Browse Flavours <ArrowRight size={15} />
              </Link>
              <Link to="/store"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/60 hover:text-white font-sans font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300"
              >
                <MapPin size={15} /> Find Our Store
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
