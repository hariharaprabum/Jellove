import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  IceCream, Candy, Cake, CupSoda, GlassWater, IceCreamBowl, Citrus,
  Sparkles, Wand2, Plus, ArrowRight, MapPin, Star, Leaf, Globe, Play, Pause,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import {
  iceCreamProducts, candyProducts, dessertProducts,
  faloodaProducts, sundaeProducts, smoothieProducts,
  shakeSpecialities, shakeRegulars, type Product,
} from '../data/products'
import { flavors, natureFlavors } from '../data/flavors'

/* ── accents per section ─────────────────────────────────────────── */
const ACCENT = {
  iceCream: '#D42719',
  candies: '#3A6030',
  shakes: '#B83280',
  faloodas: '#E8A61A',
  sundaes: '#C2410C',
  smoothies: '#2F8F6B',
  desserts: '#8A5A10',
}

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
          <span key={f.id} className="inline-flex items-center gap-1 bg-brand-cream-dark px-2.5 py-1 rounded-full">
            {f.collection === 'nature'
              ? <Leaf size={9} className="text-brand-nature flex-shrink-0" />
              : <Globe size={9} className="text-brand-world flex-shrink-0" />}
            <span className="text-[9px] font-sans font-semibold text-brand-dark/65 whitespace-nowrap">{f.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Ice cream card ──────────────────────────────────────────────── */
function IceCreamCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream-dark flex-shrink-0">
          <img src={product.image} alt={`${product.name} — Jellove`} loading="lazy" decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
          {product.badge && (
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-brand-red text-white text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
              <Star size={9} className="fill-white" /> {product.badge}
            </span>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <span className="section-label text-brand-red/60 mb-2 block">Ice Cream</span>
          <h3 className="font-display font-black text-2xl text-brand-dark leading-tight mb-3">{product.name}</h3>
          <p className="font-body text-sm text-brand-dark/60 leading-relaxed flex-1">{product.description}</p>
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
        <div className="flex flex-col justify-center px-8 md:px-12 py-10 md:py-14 order-2 md:order-1">
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={13} className="text-brand-nature" />
            <span className="section-label text-brand-nature/70">Fruit Candies</span>
          </div>
          <h3 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">{product.name}</h3>
          <p className="font-body text-sm text-white/55 leading-relaxed mb-6 max-w-xs">{product.description}</p>
          {product.flavoursNote && (
            <div className="border-t border-white/10 pt-4">
              <p className="text-[9px] font-sans font-bold tracking-[0.22em] uppercase text-white/30 mb-2.5">Available flavours</p>
              <div className="flex flex-wrap gap-1.5">
                {natureFlavors.map((f) => (
                  <span key={f.id} className="inline-flex items-center gap-1 bg-white/8 border border-white/10 px-2.5 py-1 rounded-full">
                    <Leaf size={9} className="text-brand-nature flex-shrink-0" />
                    <span className="text-[9px] font-sans font-semibold text-white/60 whitespace-nowrap">{f.name}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative overflow-hidden min-h-[260px] md:min-h-0 order-1 md:order-2">
          <img src={product.image} alt={`${product.name} — Jellove`} loading="lazy" decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-brand-dark/20" />
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

/* ── Glass / portrait card (faloodas, sundaes, smoothies, shake specialities) ── */
function GlassCard({ product, accent, label, delay = 0 }: { product: Product; accent: string; label: string; delay?: number }) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream-dark flex-shrink-0">
          {product.image ? (
            <img src={product.image} alt={`${product.name} — Jellove`} loading="lazy" decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2"
              style={{ background: 'linear-gradient(155deg,#7aa55f 0%,#3f6b33 100%)' }}>
              <Leaf size={36} className="text-white/85" />
              <span className="font-sans font-bold text-[10px] tracking-[0.3em] uppercase text-white/70">Matcha</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 md:p-5 flex flex-col flex-1">
          <span className="text-[9px] font-sans font-bold tracking-[0.22em] uppercase mb-1.5" style={{ color: accent }}>{label}</span>
          <h3 className="font-display font-bold text-base md:text-lg text-brand-dark leading-snug mb-1.5">{product.name}</h3>
          <p className="font-body text-[12px] text-brand-dark/55 leading-relaxed flex-1">{product.description}</p>
          {product.note && <p className="mt-2 text-[10px] font-sans font-semibold" style={{ color: accent }}>{product.note}</p>}
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

/* ── Dessert card (square) ───────────────────────────────────────── */
function DessertCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
      >
        <div className="relative aspect-square overflow-hidden bg-brand-cream-dark">
          <img src={product.image} alt={`${product.name} — Jellove`} loading="lazy" decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-107" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Cake size={9} className="text-brand-world/60" />
            <span className="text-[8px] font-sans font-bold tracking-[0.2em] uppercase text-brand-world/60">Dessert</span>
          </div>
          <h3 className="font-display font-bold text-sm md:text-base text-brand-dark leading-snug mb-1 group-hover:text-brand-world transition-colors duration-300">{product.name}</h3>
          <p className="font-body text-[11px] text-brand-dark/45 leading-relaxed line-clamp-2 flex-1">{product.description}</p>
          {product.note && <p className="mt-1.5 text-[9px] font-sans font-semibold text-brand-world/70">{product.note}</p>}
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

/* ── Compact regular-shake card ──────────────────────────────────── */
function RegularShakeCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative aspect-square overflow-hidden bg-brand-cream-dark">
          <img src={product.image} alt={`${product.name} shake — Jellove`} loading="lazy" decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="px-3 py-3 text-center">
          <h4 className="font-display font-bold text-sm text-brand-dark leading-tight">{product.name}</h4>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

/* ── Showcase banner (image or video) ────────────────────────────── */
function ShowcaseBanner({ accent, eyebrow, caption, image, video, poster }: {
  accent: string; eyebrow: string; caption: string; image?: string; video?: string; poster?: string
}) {
  const [playing, setPlaying] = useState(false)
  const isVideo = !!video
  return (
    <AnimatedSection className="mb-9 md:mb-12">
      <div
        className="relative rounded-3xl overflow-hidden shadow-xl aspect-[2/1] sm:aspect-[5/2] lg:aspect-[16/5] bg-brand-cream-dark"
        onMouseEnter={() => isVideo && setPlaying(true)}
        onMouseLeave={() => isVideo && setPlaying(false)}
      >
        {/* Video only mounts (and downloads) once the user presses play */}
        {isVideo && playing ? (
          <video autoPlay loop muted playsInline preload="auto"
            className="absolute inset-0 w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img src={isVideo ? poster : image} alt={caption} loading="lazy" decoding="async"
            className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/45 to-transparent" />
        <div className="relative h-full flex flex-col justify-center px-7 md:px-12 max-w-lg pointer-events-none">
          <span className="section-label mb-2" style={{ color: accent }}>{eyebrow}</span>
          <p className="font-display font-black text-white text-2xl md:text-4xl leading-tight">{caption}</p>
        </div>
        {isVideo && (
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause video' : 'Play video'}
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-brand-dark flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
        )}
      </div>
    </AnimatedSection>
  )
}

/* ── DIY callout ─────────────────────────────────────────────────── */
function DIYCard({ icon, title, desc, accent }: { icon: React.ReactNode; title: string; desc: string; accent: string }) {
  return (
    <div className="rounded-2xl border-2 border-dashed p-6 md:p-7 bg-white/50" style={{ borderColor: accent + '55' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: accent + '1A', color: accent }}>{icon}</div>
      <h4 className="font-display font-black text-xl text-brand-dark mb-1.5">{title}</h4>
      <p className="font-body text-sm text-brand-dark/55 leading-relaxed">{desc}</p>
    </div>
  )
}

/* ── Section heading ─────────────────────────────────────────────── */
function SectionHead({ icon, label, title, accent }: {
  icon: React.ReactNode; label: string; title: React.ReactNode; accent: string
}) {
  return (
    <AnimatedSection className="mb-8 md:mb-12">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: accent + '18', color: accent }}>{icon}</div>
        <div>
          <span className="section-label mb-0.5 block" style={{ color: accent + 'AA' }}>{label}</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-brand-dark leading-tight">{title}</h2>
        </div>
      </div>
    </AnimatedSection>
  )
}

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="border-t border-brand-cream-deeper/50" />
    </div>
  )
}

/* ── nav / chip categories ───────────────────────────────────────── */
const categories = [
  { id: 'ice-cream', label: 'Ice Cream', icon: <IceCream size={13} /> },
  { id: 'fruit-candies', label: 'Candies', icon: <Candy size={13} /> },
  { id: 'shakes', label: 'Shakes', icon: <CupSoda size={13} /> },
  { id: 'faloodas', label: 'Faloodas', icon: <GlassWater size={13} /> },
  { id: 'sundaes', label: 'Sundaes', icon: <IceCreamBowl size={13} /> },
  { id: 'smoothies', label: 'Smoothies', icon: <Citrus size={13} /> },
  { id: 'desserts', label: 'Desserts', icon: <Cake size={13} /> },
]

/* ── JSON-LD for SEO ─────────────────────────────────────────────── */
function menuJsonLd() {
  const mi = (p: Product) => ({ '@type': 'MenuItem', name: p.name, description: p.description })
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Jellove Ice Cream — Menu',
    hasMenuSection: [
      { '@type': 'MenuSection', name: 'Ice Cream', hasMenuItem: iceCreamProducts.map(mi) },
      { '@type': 'MenuSection', name: 'Fruit Candies', hasMenuItem: candyProducts.map(mi) },
      { '@type': 'MenuSection', name: 'Ice Cream Shakes', hasMenuItem: [...shakeSpecialities, ...shakeRegulars].map(mi) },
      { '@type': 'MenuSection', name: 'Faloodas', hasMenuItem: faloodaProducts.map(mi) },
      { '@type': 'MenuSection', name: 'Sundaes', hasMenuItem: sundaeProducts.map(mi) },
      { '@type': 'MenuSection', name: 'Smoothies', hasMenuItem: smoothieProducts.map(mi) },
      { '@type': 'MenuSection', name: 'Desserts', hasMenuItem: dessertProducts.map(mi) },
    ],
  }
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function Products() {
  const { hash } = useLocation()

  useEffect(() => {
    const prev = document.title
    document.title = 'Menu — Jellove Ice Cream | Shakes, Faloodas, Sundaes, Smoothies & Desserts'
    return () => { document.title = prev }
  }, [])

  // Scroll to a section when arriving via /products#<section>
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 250)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd()) }} />

      {/* ══ HERO ═════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-dark py-14 md:py-28 lg:py-36">
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-label text-brand-gold/60 mb-4 block">Our Menu</span>
            <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl text-white mb-5">
              What We <span className="italic text-brand-gold-light">Serve</span>
            </h1>
            <p className="font-body text-white/60 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
              Ice creams, shakes, faloodas, sundaes, smoothies &amp; fresh desserts — all handcrafted in-store, every single day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-2.5 mt-8"
          >
            {categories.map((c) => (
              <button key={c.id} type="button" onClick={() => jump(c.id)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white/75 hover:text-white font-sans font-semibold text-xs tracking-widest uppercase px-4 py-2.5 rounded-full transition-all duration-300">
                {c.icon} {c.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ STICKY NAV ═══════════════════════════════════════════ */}
      <div className="sticky top-16 md:top-20 z-30 bg-brand-cream/95 backdrop-blur-md border-b border-brand-cream-deeper/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-start md:justify-center gap-1 md:gap-3 overflow-x-auto scrollbar-hide py-3.5">
            {categories.map((c) => (
              <button key={c.id} type="button" onClick={() => jump(c.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-sans font-semibold text-sm text-brand-dark/55 hover:text-brand-dark bg-transparent hover:bg-brand-cream-dark transition-all duration-200 whitespace-nowrap flex-shrink-0">
                {c.icon} {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ICE CREAM ════════════════════════════════════════════ */}
      <section id="ice-cream" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead icon={<IceCream size={22} />} label="Collection 01"
            title={<>Ice <span className="italic text-brand-red">Cream</span></>} accent={ACCENT.iceCream} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {iceCreamProducts.map((p, i) => <IceCreamCard key={p.id} product={p} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ FRUIT CANDIES ════════════════════════════════════════ */}
      <section id="fruit-candies" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead icon={<Candy size={22} />} label="Collection 02"
            title={<>Fruit <span className="italic text-brand-nature">Candies</span></>} accent={ACCENT.candies} />
          {candyProducts.map((p) => <CandyCard key={p.id} product={p} />)}
        </div>
      </section>

      <Divider />

      {/* ══ ICE CREAM SHAKES ═════════════════════════════════════ */}
      <section id="shakes" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead icon={<CupSoda size={22} />} label="Collection 03"
            title={<>Ice Cream <span className="italic" style={{ color: ACCENT.shakes }}>Shakes</span></>} accent={ACCENT.shakes} />

          {/* Specialities */}
          <AnimatedSection className="mb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={14} style={{ color: ACCENT.shakes }} />
              <h3 className="font-sans font-bold text-sm tracking-[0.18em] uppercase text-brand-dark/70">Our Specialities</h3>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {shakeSpecialities.map((p, i) => (
              <GlassCard key={p.id} product={p} accent={ACCENT.shakes} label="Speciality" delay={i * 0.06} />
            ))}
          </div>

          {/* Regulars */}
          <AnimatedSection className="mb-4">
            <h3 className="font-sans font-bold text-sm tracking-[0.18em] uppercase text-brand-dark/70">Regulars</h3>
          </AnimatedSection>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 mb-12">
            {shakeRegulars.map((p, i) => <RegularShakeCard key={p.id} product={p} delay={i * 0.04} />)}
          </div>

          {/* DIY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <DIYCard icon={<Plus size={20} />} accent={ACCENT.shakes}
              title="DIY Shake" desc="Choose a scoop of your choice and we'll blend it into your perfect shake." />
            <DIYCard icon={<Wand2 size={20} />} accent={ACCENT.shakes}
              title="DIY Masterclass" desc="Pick two scoops of your choice and create your own shake masterpiece." />
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ FALOODAS ═════════════════════════════════════════════ */}
      <section id="faloodas" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead icon={<GlassWater size={22} />} label="Collection 04"
            title={<>Royal <span className="italic" style={{ color: ACCENT.faloodas }}>Faloodas</span></>} accent={ACCENT.faloodas} />
          <ShowcaseBanner accent={ACCENT.faloodas} eyebrow="Tall · Layered · Royal"
            caption="A glassful of celebration."
            video="/videos/menu/faloodas/showcase.mp4"
            poster="/images/menu/faloodas/showcase-poster.webp" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {faloodaProducts.map((p, i) => (
              <GlassCard key={p.id} product={p} accent={ACCENT.faloodas} label="Falooda" delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ SUNDAES ══════════════════════════════════════════════ */}
      <section id="sundaes" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead icon={<IceCreamBowl size={22} />} label="Collection 05"
            title={<>Signature <span className="italic" style={{ color: ACCENT.sundaes }}>Sundaes</span></>} accent={ACCENT.sundaes} />
          <ShowcaseBanner accent={ACCENT.sundaes} eyebrow="Scooped · Sauced · Stacked"
            caption="Piled high, made to share."
            video="/videos/menu/sundaes/showcase.mp4"
            poster="/images/menu/sundaes/showcase-poster.webp" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {sundaeProducts.map((p, i) => (
              <GlassCard key={p.id} product={p} accent={ACCENT.sundaes} label="Sundae" delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ SMOOTHIES ════════════════════════════════════════════ */}
      <section id="smoothies" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead icon={<Citrus size={22} />} label="Collection 06"
            title={<>Fresh <span className="italic" style={{ color: ACCENT.smoothies }}>Smoothies</span></>} accent={ACCENT.smoothies} />
          <ShowcaseBanner accent={ACCENT.smoothies} eyebrow="Blended · Fresh · Chilled"
            caption="Real fruit, blended fresh."
            video="/videos/menu/smoothies/showcase.mp4"
            poster="/images/menu/smoothies/showcase-poster.webp" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {smoothieProducts.map((p, i) => (
              <GlassCard key={p.id} product={p} accent={ACCENT.smoothies} label="Smoothie" delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ DESSERTS ═════════════════════════════════════════════ */}
      <section id="desserts" className="py-10 md:py-16 lg:py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHead icon={<Cake size={22} />} label="Collection 07"
            title={<>House <span className="italic text-brand-world">Desserts</span></>} accent={ACCENT.desserts} />
          <ShowcaseBanner accent={ACCENT.desserts} eyebrow="Freshly Plated"
            caption="Baked &amp; plated in-house, daily."
            video="/videos/menu/desserts/sampler-platter.mp4"
            poster="/images/menu/desserts/sampler-platter-poster.webp" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {dessertProducts.map((p, i) => <DessertCard key={p.id} product={p} delay={i * 0.06} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <span className="section-label text-brand-gold/60 mb-4 block">Visit Us</span>
            <h3 className="display-heading text-white text-4xl md:text-6xl mb-5">
              Come taste it<br /><span className="italic text-brand-gold-light">in person.</span>
            </h3>
            <p className="font-body text-white/55 mb-8 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
              Everything is made fresh daily. Visit us at KK Nagar, Madurai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/flavours" className="btn-primary">Browse Flavours <ArrowRight size={16} /></Link>
              <Link to="/store" className="btn-outline text-white border-white/30 hover:bg-white/10"><MapPin size={16} /> Find Our Store</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
