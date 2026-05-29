import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Globe, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { natureFlavors, worldFlavors } from '../data/flavors'

/* ─── Marquee — React-controlled pause, resumes from same position ── */
interface MarqueeItem { name: string; origin: string; img: string; collection: 'nature' | 'world' }

const NATURE_ITEMS: MarqueeItem[] = [
  { name: 'Mango',               origin: 'Tamil Nadu',    img: '/images/nature/mango.webp',                collection: 'nature' },
  { name: 'Strawberry',          origin: 'Ooty Farms',    img: '/images/nature/strawberry.webp',           collection: 'nature' },
  { name: 'Tender Coconut',      origin: 'Kerala Coast',  img: '/images/nature/tender-coconut-swirl.webp', collection: 'nature' },
  { name: 'Chikoo',              origin: 'South India',   img: '/images/nature/chikoo.webp',               collection: 'nature' },
  { name: 'Jackfruit Musk Melon',origin: 'Kerala & TN',   img: '/images/nature/jackfruit.webp',            collection: 'nature' },
]
const WORLD_ITEMS: MarqueeItem[] = [
  { name: 'Honeycomb',           origin: 'British Isles', img: '/images/world/honeycomb.webp',             collection: 'world' },
  { name: 'Matcha',              origin: 'Uji, Japan',    img: '/images/world/matcha.webp',                collection: 'world' },
  { name: 'Peppermint',          origin: 'England',       img: '/images/world/peppermint.webp',            collection: 'world' },
  { name: 'Cheesecake',          origin: 'New York',      img: '/images/world/cheesecake-swirl.webp',      collection: 'world' },
  { name: 'Brown Butter Vanilla',origin: 'Paris, France', img: '/images/world/brown-butter-vanilla.webp',  collection: 'world' },
]

function Marquee({ items, reverse = false }: { items: MarqueeItem[]; reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const doubled = [...items, ...items, ...items, ...items]
  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }
  return (
    <div
      className="overflow-hidden py-3 select-none"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div
        ref={trackRef}
        className={`flex items-center gap-0 whitespace-nowrap w-max ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 pr-8">
            {/* thumbnail */}
            <span className="relative flex-shrink-0">
              <img
                src={item.img}
                alt={item.name}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white/60"
              />
              <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border border-white flex items-center justify-center ${item.collection === 'nature' ? 'bg-brand-nature' : 'bg-brand-world'}`}>
                {item.collection === 'nature'
                  ? <Leaf size={6} className="text-white" />
                  : <Globe size={6} className="text-white" />}
              </span>
            </span>
            {/* text */}
            <span className="inline-flex flex-col leading-none">
              <span className="font-sans font-bold text-[11px] tracking-[0.1em] uppercase text-brand-dark/70">{item.name}</span>
              <span className="font-body text-[10px] text-brand-dark/35 mt-0.5">{item.origin}</span>
            </span>
            {/* divider */}
            <span className="ml-5 text-brand-dark/12 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Video reel card ──────────────────────────────────── */
interface VideoCardProps {
  src: string
  poster: string
  label: string
  collection: 'nature' | 'world'
  origin: string
}

function VideoCard({ src, poster, label, collection, origin }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handleEnter = () => {
    videoRef.current?.play().catch(() => {})
    setPlaying(true)
  }
  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setPlaying(false)
  }

  return (
    <motion.div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full md:flex-shrink-0 md:w-60 rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '9/16' }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className={`w-full h-full object-cover transition-all duration-700 ${playing ? 'scale-105' : 'scale-100'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className={`inline-flex items-center gap-1 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase mb-2 ${
          collection === 'nature' ? 'text-green-300' : 'text-amber-300'
        }`}>
          {collection === 'nature' ? <Leaf size={9} /> : <Globe size={9} />}
          {collection === 'nature' ? 'Nature' : 'World'}
        </span>
        <h3 className="font-display font-bold text-white text-xl leading-tight">{label}</h3>
        <p className="text-white/50 text-xs font-body mt-1">{origin}</p>
      </div>

      <motion.div
        animate={{ opacity: playing ? 0 : 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
          <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-white ml-1" />
        </div>
      </motion.div>
    </motion.div>
  )
}



/* ─────────────────────────────────────────────────────────
   BACKUP: THE APERTURE HERO (kept for reference)
───────────────────────────────────────────────────────── */
const APERTURE_SLIDES = [
  { src: '/images/nature/strawberry.webp',          collection: 'nature' as const, glow: 'rgba(210,50,70,0.18)'  },
  { src: '/images/world/brown-butter-vanilla.webp', collection: 'world'  as const, glow: 'rgba(200,130,30,0.17)' },
  { src: '/images/nature/tender-coconut-swirl.webp',collection: 'nature' as const, glow: 'rgba(40,160,100,0.15)' },
  { src: '/images/world/cheesecake-swirl.webp',     collection: 'world'  as const, glow: 'rgba(140,60,180,0.14)' },
  { src: '/images/world/peppermint-icecream.webp',  collection: 'world'  as const, glow: 'rgba(40,160,180,0.15)' },
]

export function HeroBannerAperture() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % APERTURE_SLIDES.length), 4200)
    return () => clearInterval(t)
  }, [])

  const isNature = APERTURE_SLIDES[idx].collection === 'nature'

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex flex-col items-center justify-center bg-[#0E0805]">

      {/* ════════════════════════════════════
          BACKGROUND — split brand photography
          Left: golden mangoes (From Nature)
          Right: dramatic honeycomb (From the World)
          Both with a warm translucent overlay
      ════════════════════════════════════ */}
      <div className="absolute inset-0 flex z-0">
        {/* Left — Nature */}
        <div className="flex-1 relative overflow-hidden">
          <motion.img
            src="/images/nature/tender-coconut-icecream.webp"
            alt=""
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, ease: 'easeOut' }}
          />
          {/* Warm overlay — light enough to see the image clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#100804]/70 via-[#100804]/40 to-[#100804]/25" />
        </div>

        {/* Right — World */}
        <div className="flex-1 relative overflow-hidden">
          <motion.img
            src="/images/world/vanilla-bean.webp"
            alt=""
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, ease: 'easeOut' }}
          />
          {/* Warm overlay — light enough to see the image clearly */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#100804]/70 via-[#100804]/40 to-[#100804]/25" />
        </div>
      </div>

      {/* Centre vignette — deepens around the portal for contrast */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 65% at 50% 50%, transparent 20%, rgba(10,5,2,0.22) 100%)',
        }}
      />

      {/* Per-flavour ambient glow — now overlaid on the real imagery ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2]"
        animate={{
          background: `radial-gradient(ellipse 60% 55% at 50% 48%, ${APERTURE_SLIDES[idx].glow} 0%, transparent 68%)`,
        }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />

      {/* ── Fine grain texture ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.055]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />

      {/* ── Ghost watermark — enormous, barely visible ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5] select-none overflow-hidden">
        <p className="font-display font-black text-white/[0.025] whitespace-nowrap leading-none"
          style={{ fontSize: 'clamp(80px, 16vw, 220px)', letterSpacing: '-0.02em' }}>
          JELLOVE
        </p>
      </div>

      {/* ── Main composition ── */}
      <div className="relative z-20 w-full flex items-center justify-center px-4">

        {/* LEFT headline — desktop only (xl+) */}
        <motion.div
          className="hidden xl:flex flex-col items-end absolute left-[7%] 2xl:left-[10%] z-20"
          initial={{ opacity: 0, x: -44 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-right leading-[0.87] tracking-[-0.03em] select-none"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900 }}>
            <div className="text-white" style={{ fontSize: 'clamp(48px, 4.8vw, 76px)' }}>TWO</div>
            <div className="italic text-brand-gold" style={{ fontSize: 'clamp(48px, 4.8vw, 76px)' }}>WORLDS.</div>
          </div>
          <div className="mt-5 flex items-center gap-2 text-[9px] font-sans font-semibold tracking-[0.22em] uppercase text-green-300/60">
            <Leaf size={9} /> From All of Nature
          </div>
        </motion.div>

        {/* ── CIRCLE PORTAL ── */}
        <div className="relative flex-shrink-0"
          style={{ width: 'clamp(240px, 46vw, 460px)', aspectRatio: '1 / 1' }}>

          {/* Outermost diffuse ring */}
          <motion.div
            className="absolute rounded-full border pointer-events-none"
            style={{ inset: '-14px' }}
            animate={{ borderColor: isNature ? 'rgba(58,96,48,0.25)' : 'rgba(138,90,16,0.2)' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
          {/* Middle ring */}
          <motion.div
            className="absolute rounded-full border pointer-events-none"
            style={{ inset: '-5px' }}
            animate={{ borderColor: isNature ? 'rgba(58,96,48,0.35)' : 'rgba(232,166,26,0.3)' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
          {/* Inner gold ring */}
          <div className="absolute inset-0 rounded-full border border-brand-gold/50 z-20 pointer-events-none" />

          {/* Image viewport — clipped to circle */}
          <div className="w-full h-full rounded-full overflow-hidden relative">
            {APERTURE_SLIDES.map((s, i) => (
              <motion.img
                key={s.src}
                src={s.src}
                alt=""
                animate={{
                  opacity: i === idx ? 1 : 0,
                  scale:   i === idx ? 1.0 : 1.06,
                }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>

          {/* Collection arc labels — curved text following the circle border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-30"
            viewBox="0 0 460 460"
            style={{ overflow: 'visible' }}
          >
            <defs>
              {/* Top arc — counterclockwise = text reads left→right along top */}
              <path id="jlv-arc-top" d="M 18,230 A 212,212 0 0,0 442,230" />
              {/* Bottom arc — clockwise = text reads left→right along bottom */}
              <path id="jlv-arc-bot" d="M 18,230 A 212,212 0 0,1 442,230" />
            </defs>

            {/* 🌿 FROM ALL OF NATURE — top */}
            <motion.g
              animate={{ opacity: isNature ? 1 : 0.2 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            >
              {/* subtle dark stroke for readability over any image */}
              <text
                fill="none"
                stroke="rgba(0,0,0,0.55)"
                strokeWidth="3.5"
                paintOrder="stroke"
                fontSize="10"
                fontFamily="Syne, sans-serif"
                fontWeight="700"
                letterSpacing="3"
                textAnchor="middle"
              >
                <textPath href="#jlv-arc-top" startOffset="50%">
                  ✦  FROM ALL OF NATURE  ✦
                </textPath>
              </text>
              <text
                fill="rgb(134,239,172)"
                fontSize="10"
                fontFamily="Syne, sans-serif"
                fontWeight="700"
                letterSpacing="3"
                textAnchor="middle"
              >
                <textPath href="#jlv-arc-top" startOffset="50%">
                  ✦  FROM ALL OF NATURE  ✦
                </textPath>
              </text>
            </motion.g>

            {/* 🌍 FROM ALL THE WORLD — bottom */}
            <motion.g
              animate={{ opacity: isNature ? 0.2 : 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            >
              <text
                fill="none"
                stroke="rgba(0,0,0,0.55)"
                strokeWidth="3.5"
                paintOrder="stroke"
                fontSize="10"
                fontFamily="Syne, sans-serif"
                fontWeight="700"
                letterSpacing="3"
                textAnchor="middle"
              >
                <textPath href="#jlv-arc-bot" startOffset="50%">
                  ✦  FROM ALL THE WORLD  ✦
                </textPath>
              </text>
              <text
                fill="rgb(252,211,77)"
                fontSize="10"
                fontFamily="Syne, sans-serif"
                fontWeight="700"
                letterSpacing="3"
                textAnchor="middle"
              >
                <textPath href="#jlv-arc-bot" startOffset="50%">
                  ✦  FROM ALL THE WORLD  ✦
                </textPath>
              </text>
            </motion.g>
          </svg>

          {/* Progress dots */}
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
            {APERTURE_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  i === idx
                    ? 'bg-brand-gold h-1.5 w-5'
                    : 'bg-white/25 h-1.5 w-1.5 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT headline — desktop only (xl+) */}
        <motion.div
          className="hidden xl:flex flex-col items-start absolute right-[7%] 2xl:right-[10%] z-20"
          initial={{ opacity: 0, x: 44 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-left leading-[0.87] tracking-[-0.03em] select-none"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900 }}>
            <div className="text-white" style={{ fontSize: 'clamp(48px, 4.8vw, 76px)' }}>ONE</div>
            <div className="italic text-brand-gold" style={{ fontSize: 'clamp(48px, 4.8vw, 76px)' }}>SCOOP.</div>
          </div>
          <div className="mt-5 flex items-center gap-2 text-[9px] font-sans font-semibold tracking-[0.22em] uppercase text-amber-300/60">
            <Globe size={9} /> From Around the World
          </div>
        </motion.div>
      </div>

      {/* ── Mobile headline (below circle, hidden on xl+) ── */}
      <motion.div
        className="xl:hidden relative z-20 text-center mt-12 px-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-display font-black text-white leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(38px, 9vw, 60px)' }}>
          Two worlds.{' '}
          <span className="italic text-brand-gold">One scoop.</span>
        </h1>
      </motion.div>

      {/* ── Bottom — location + CTAs ── */}
      <motion.div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/35">
          KK Nagar · Madurai · Tamil Nadu
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/flavours"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-sans font-semibold text-sm tracking-wide px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Explore All Flavours <ArrowRight size={14} />
          </Link>
          <Link
            to="/store"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 hover:border-white/45 hover:text-white font-sans font-semibold text-sm tracking-wide px-6 py-3 rounded-full transition-all duration-300"
          >
            <MapPin size={13} /> Find Our Store
          </Link>
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-8 left-8 md:left-12 z-30 flex items-center gap-2.5 text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-px h-7 bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
        </motion.div>
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────
   THE STOREFRONT HERO
   Warm cream background. Two real Jellove branded poster
   cards leaning side by side — Nature left, World right.
   Logo large at the top. Brand red dominates.
   Feels like a premium ice cream parlour window display.
───────────────────────────────────────────────────────── */
function HeroBanner() {
  return (
    <section className="relative bg-brand-cream overflow-hidden flex flex-col items-center justify-start md:justify-center px-5 md:px-10 pt-24 pb-12 md:min-h-screen md:pt-28 md:pb-0">

      {/* ── Ghost brand watermark ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p
          className="font-display font-black leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: 'clamp(110px, 20vw, 280px)', color: 'rgba(26,13,4,0.032)' }}
        >
          JELLOVE
        </p>
      </div>

      {/* ── Soft radial centre spotlight ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 75% 70% at 50% 52%, transparent 40%, rgba(237,217,184,0.55) 100%)' }}
      />

      {/* ── Two Poster Cards ── */}
      <div className="relative z-10 flex items-end justify-center">

        {/* Nature poster — tilted left */}
        <motion.div
          className="relative flex-shrink-0 cursor-pointer flex flex-col"
          style={{
            width: 'clamp(150px, 22vw, 300px)',
            boxShadow: '0 32px 80px rgba(26,13,4,0.25), 0 8px 24px rgba(26,13,4,0.14)',
            borderRadius: '16px',
          }}
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotate: -2, y: -16, scale: 1.03, transition: { duration: 0.35, ease: 'easeOut' } }}
        >
          {/* Image — pure, no overlays */}
          <div className="relative overflow-hidden flex-shrink-0"
            style={{ aspectRatio: '3/3.4', borderRadius: '16px 16px 0 0' }}>
            <div className="absolute inset-0 rounded-tl-2xl rounded-tr-2xl ring-[5px] ring-white/70 ring-inset z-10 pointer-events-none" />
            <img
              src="/images/posters/nature-2-clean.webp"
              alt="From All of Nature"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Caption tag — outside the image, part of the card */}
          <div className="relative flex items-center gap-3 px-4 py-3.5"
            style={{ background: '#1A0D04', borderRadius: '0 0 16px 16px', borderTop: '2px solid #3A6030' }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(58,96,48,0.25)', border: '1px solid rgba(58,96,48,0.5)' }}>
              <Leaf size={11} className="text-green-300" />
            </div>
            <div className="min-w-0">
              <p className="font-sans font-bold text-green-300/60 leading-none mb-1"
                style={{ fontSize: 'clamp(6px, 0.65vw, 8px)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                From All of
              </p>
              <p className="font-display font-black italic text-white leading-none"
                style={{ fontSize: 'clamp(16px, 2vw, 28px)', letterSpacing: '-0.01em' }}>
                Nature
              </p>
            </div>
            <p className="font-display font-black text-white/10 leading-none ml-auto flex-shrink-0 select-none"
              style={{ fontSize: 'clamp(24px, 3vw, 44px)' }}>
              01
            </p>
          </div>
        </motion.div>

        {/* World poster — tilted right, overlaps slightly */}
        <motion.div
          className="relative flex-shrink-0 cursor-pointer flex flex-col"
          style={{
            width: 'clamp(150px, 22vw, 300px)',
            marginLeft: 'clamp(-24px, -3vw, -40px)',
            boxShadow: '0 32px 80px rgba(26,13,4,0.25), 0 8px 24px rgba(26,13,4,0.14)',
            borderRadius: '16px',
          }}
          initial={{ opacity: 0, x: 50, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotate: 2, y: -16, scale: 1.03, transition: { duration: 0.35, ease: 'easeOut' } }}
        >
          {/* Image — pure, no overlays */}
          <div className="relative overflow-hidden flex-shrink-0"
            style={{ aspectRatio: '3/3.4', borderRadius: '16px 16px 0 0' }}>
            <div className="absolute inset-0 rounded-tl-2xl rounded-tr-2xl ring-[5px] ring-white/70 ring-inset z-10 pointer-events-none" />
            <img
              src="/images/posters/world-1-clean.webp"
              alt="From All the World"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Caption tag */}
          <div className="relative flex items-center gap-3 px-4 py-3.5"
            style={{ background: '#1A0D04', borderRadius: '0 0 16px 16px', borderTop: '2px solid #8A5A10' }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(138,90,16,0.25)', border: '1px solid rgba(138,90,16,0.5)' }}>
              <Globe size={11} className="text-amber-300" />
            </div>
            <div className="min-w-0">
              <p className="font-sans font-bold text-amber-300/60 leading-none mb-1"
                style={{ fontSize: 'clamp(6px, 0.65vw, 8px)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                Around the
              </p>
              <p className="font-display font-black italic text-white leading-none"
                style={{ fontSize: 'clamp(16px, 2vw, 28px)', letterSpacing: '-0.01em' }}>
                World
              </p>
            </div>
            <p className="font-display font-black text-white/10 leading-none ml-auto flex-shrink-0 select-none"
              style={{ fontSize: 'clamp(24px, 3vw, 44px)' }}>
              02
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Tagline ── */}
      <motion.h1
        className="relative z-10 font-display font-black text-center leading-[0.92] tracking-tight mt-8 md:mt-10"
        style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Two worlds.{' '}
        <span className="italic text-brand-red">One scoop.</span>
      </motion.h1>

      {/* ── CTAs ── */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-3 mt-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          to="/flavours"
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-sans font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
        >
          Explore All Flavours <ArrowRight size={14} />
        </Link>
        <Link
          to="/store"
          className="inline-flex items-center gap-2 border-2 border-brand-dark/20 text-brand-dark/70 hover:border-brand-red hover:text-brand-red font-sans font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300"
        >
          <MapPin size={13} /> Find Our Store
        </Link>
      </motion.div>

      {/* ── Scroll cue — bottom-left, clear of centred CTAs ── */}
      <motion.div
        className="absolute bottom-6 left-6 md:left-10 z-10 flex items-center gap-2 text-brand-dark/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-6 bg-brand-dark/20" />
          <div className="w-1 h-1 rounded-full bg-brand-dark/25" />
        </motion.div>
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}

/* ─── Page ─────────────────────────────────────────────── */
export default function HomeNew() {
  const videoScrollRef = useRef<HTMLDivElement>(null)
  const [videoIdx, setVideoIdx] = useState(0)
  const touchStartX = useRef(0)

  const slideVideos = (dir: 'left' | 'right' | number, targetIdx?: number) => {
    const track = videoScrollRef.current
    if (!track) return
    const cards = track.querySelectorAll<HTMLElement>('.vid-card')
    const next = targetIdx !== undefined
      ? targetIdx
      : dir === 'right'
        ? Math.min(videoIdx + 1, cards.length - 1)
        : Math.max(videoIdx - 1, 0)
    const card = cards[next]
    if (!card) return
    track.style.transform = `translateX(-${card.offsetLeft}px)`
    setVideoIdx(next)
  }

  const videos: VideoCardProps[] = [
    { src: '/videos/strawberry.mp4',        poster: '/images/nature/strawberry.webp',          label: 'Strawberry',        collection: 'nature', origin: 'Ooty Farms' },
    { src: '/videos/mango.mp4',             poster: '/images/nature/mango.webp',               label: 'Mango',             collection: 'nature', origin: 'Tamil Nadu' },
    { src: '/videos/chikoo.mp4',            poster: '/images/nature/chikoo.webp',              label: 'Chikoo',            collection: 'nature', origin: 'South India' },
    { src: '/videos/jackfruit.mp4',         poster: '/images/nature/jackfruit.webp',           label: 'Jackfruit Musk Melon', collection: 'nature', origin: 'Kerala & TN' },
    { src: '/videos/tender-coconut.mp4',    poster: '/images/nature/tender-coconut-swirl.webp',label: 'Tender Coconut',    collection: 'nature', origin: 'Kerala Coast' },
    { src: '/videos/honeycomb.mp4',         poster: '/images/world/honeycomb.webp',            label: 'Honeycomb',         collection: 'world',  origin: 'British Isles' },
    { src: '/videos/matcha.mp4',            poster: '/images/world/matcha.webp',               label: 'Matcha',            collection: 'world',  origin: 'Uji, Japan' },
    { src: '/videos/peppermint.mp4',        poster: '/images/world/peppermint.webp',           label: 'Peppermint',        collection: 'world',  origin: 'England' },
    { src: '/videos/cheesecake.mp4',        poster: '/images/world/cheesecake-swirl.webp',     label: 'Cheesecake',        collection: 'world',  origin: 'New York, USA' },
    { src: '/videos/brown-butter-vanilla.mp4', poster: '/images/world/brown-butter-vanilla.webp', label: 'Brown Butter Vanilla', collection: 'world', origin: 'Paris, France' },
  ]

  return (
    <div>
      <HeroBanner />

      {/* ══ MARQUEE ══ */}
      <section className="border-y border-brand-cream-deeper/50 overflow-hidden">
        <div className="border-b border-brand-cream-deeper/30 bg-brand-nature/[0.03]">
          <Marquee items={NATURE_ITEMS} />
        </div>
        <div className="bg-brand-world/[0.03]">
          <Marquee items={WORLD_ITEMS} reverse />
        </div>
      </section>

      {/* ══ COLLECTION 01 — FROM ALL OF NATURE ══ */}
      <section className="py-10 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
            <AnimatedSection delay={0.05}>
              <h2 className="font-display font-black text-brand-dark text-4xl md:text-5xl xl:text-7xl leading-[0.92] tracking-tight mb-4 md:mb-7">
                From All<br /><span className="italic text-brand-nature">of Nature.</span>
              </h2>
              <p className="font-body text-brand-dark/55 text-base md:text-lg leading-relaxed mb-5 md:mb-8 max-w-md">
                Five flavours born from India's richest soils and coastlines — each scoop carries a story of the land, the tree, the harvest.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 md:mb-10">
                {natureFlavors.map((f) => (
                  <span key={f.id} className="border border-brand-nature/20 text-brand-nature/70 rounded-full px-3.5 py-1 text-xs font-sans font-semibold">{f.name}</span>
                ))}
              </div>
              <Link to="/flavours" className="inline-flex items-center gap-2 bg-brand-nature text-white font-sans font-semibold text-sm tracking-wide px-6 py-3.5 rounded-full hover:bg-brand-nature-light transition-all duration-300 hover:scale-105">
                Taste Nature <ArrowRight size={15} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
              <div className="row-span-2 rounded-2xl overflow-hidden">
                <img src="/images/nature/mango.webp" alt="Mango" className="w-full h-full object-cover aspect-[2/3]" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/nature/strawberry.webp" alt="Strawberry" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/nature/tender-coconut.webp" alt="Tender Coconut" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ COLLECTION 02 — FROM AROUND THE WORLD ══ */}
      <section className="py-10 md:py-24 lg:py-36 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
            <AnimatedSection delay={0.05} className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/world/honeycomb.webp" alt="Honeycomb" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
              <div className="row-span-2 rounded-2xl overflow-hidden">
                <img src="/images/world/matcha.webp" alt="Matcha" className="w-full h-full object-cover aspect-[2/3]" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/world/peppermint.webp" alt="Peppermint" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <h2 className="font-display font-black text-white text-4xl md:text-5xl xl:text-7xl leading-[0.92] tracking-tight mb-4 md:mb-7">
                From All<br /><span className="italic text-brand-world-light">the World.</span>
              </h2>
              <p className="font-body text-white/55 text-base md:text-lg leading-relaxed mb-5 md:mb-8 max-w-md">
                Honeycomb from the British Isles. Matcha from Uji. Peppermint from English meadows. The world's great flavours, made with love in Madurai.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 md:mb-10">
                {worldFlavors.map((f) => (
                  <span key={f.id} className="border border-brand-world/40 text-brand-world-light/70 rounded-full px-3.5 py-1 text-xs font-sans font-semibold">{f.name}</span>
                ))}
              </div>
              <Link to="/flavours" className="inline-flex items-center gap-2 bg-brand-world text-white font-sans font-semibold text-sm tracking-wide px-6 py-3.5 rounded-full hover:bg-brand-world-light transition-all duration-300 hover:scale-105">
                Explore the World <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SHOWCASE ══ */}
      <section className="py-10 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10 mb-8 md:mb-10 flex items-end justify-between">
          <AnimatedSection>
            <h2 className="font-display font-black text-brand-dark text-4xl md:text-5xl leading-[0.95] tracking-tight">
              Watch them<br /><span className="italic text-brand-red">come alive.</span>
            </h2>
          </AnimatedSection>
          <div className="flex items-center gap-2">
            <button
              onClick={() => slideVideos('left')}
              disabled={videoIdx === 0}
              className="w-10 h-10 rounded-full border border-brand-dark/15 flex items-center justify-center hover:bg-brand-cream-dark transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={18} className="text-brand-dark/60" />
            </button>
            <button
              onClick={() => slideVideos('right')}
              disabled={videoIdx === videos.length - 1}
              className="w-10 h-10 rounded-full border border-brand-dark/15 flex items-center justify-center hover:bg-brand-cream-dark transition-colors disabled:opacity-30"
            >
              <ChevronRight size={18} className="text-brand-dark/60" />
            </button>
          </div>
        </div>

        {/* Clip wrapper — no scroll, transform slides the track */}
        <div
          className="overflow-hidden px-5 md:px-10"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(diff) > 40) slideVideos(diff > 0 ? 'right' : 'left')
          }}
        >
          <div
            ref={videoScrollRef}
            className="flex gap-3 md:gap-5"
            style={{ transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}
          >
            {videos.map((v, i) => (
              <motion.div
                key={v.src}
                className="vid-card flex-shrink-0 w-[44vw] md:w-60"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <VideoCard {...v} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-5">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => slideVideos('right', i)}
              className={`rounded-full transition-all duration-300 ${i === videoIdx ? 'w-5 h-1.5 bg-brand-red' : 'w-1.5 h-1.5 bg-brand-dark/20 hover:bg-brand-dark/40'}`}
            />
          ))}
        </div>
      </section>

      {/* ══ ABOUT QUOTE ══ */}
      <section className="relative py-14 md:py-28 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/posters/world-1.webp" alt="" className="w-full h-full object-cover object-center" loading="lazy" />
          <div className="absolute inset-0 bg-brand-dark/75" />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 md:px-10">
          <AnimatedSection>
            <p className="font-display font-bold italic text-white/25 text-7xl md:text-9xl leading-none mb-4 select-none">"</p>
            <blockquote className="font-display font-black text-white text-3xl md:text-5xl leading-[1.15] tracking-tight max-w-3xl mb-8">
              We believe ice cream should taste like it came from{' '}
              <span className="italic text-brand-gold-light">somewhere real.</span>
            </blockquote>
            <Link to="/about" className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-white/60 hover:text-white transition-colors tracking-wide">
              Our Story →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ STORE CTA ══ */}
      <section className="py-10 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-display font-black text-brand-dark text-4xl md:text-5xl lg:text-6xl leading-[0.92] tracking-tight mb-4 md:mb-7">
                Come say<br /><span className="italic text-brand-red">hello.</span>
              </h2>
              <div className="flex items-start gap-3 mb-5 md:mb-8">
                <MapPin size={18} className="text-brand-red mt-0.5 flex-shrink-0" />
                <p className="font-body text-brand-dark/60 text-lg leading-relaxed">
                  Opposite Sundaram Park Main Entrance,<br />KK Nagar, Madurai
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/store" className="btn-primary">Store Info & Hours <ArrowRight size={15} /></Link>
                <a href="https://wa.me/918124960933" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark/70 hover:border-[#25D366] hover:text-[#25D366] font-sans font-semibold text-sm tracking-wide px-6 py-3.5 rounded-full transition-all duration-300">
                  WhatsApp Us
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img src="/images/posters/nature-2.webp" alt="Jellove Ice Cream Store" decoding="async" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
