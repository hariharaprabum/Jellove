import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Leaf, Globe, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { natureFlavors, worldFlavors } from '../data/flavors'

/* ─── Marquee ──────────────────────────────────────────── */
const NATURE_ITEMS = ['🥭 Mango', '🍓 Strawberry', '🌴 Tender Coconut', '🍈 Chikoo', '🌿 Jackfruit Musk Melon']
const WORLD_ITEMS  = ['🍯 Honeycomb', '🍵 Matcha', '🍬 Peppermint', '🧀 Cheesecake', '🧈 Brown Butter Vanilla']

function Marquee({ items, reverse = false, dark = false }: { items: string[]; reverse?: boolean; dark?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden py-3.5 marquee-wrapper select-none">
      <div className={`flex gap-10 whitespace-nowrap w-max ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} marquee-track`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-3 font-sans font-semibold text-sm tracking-[0.08em] uppercase ${
              dark ? 'text-white/60' : 'text-brand-dark/50'
            }`}
          >
            {item}
            <span className={dark ? 'text-white/20' : 'text-brand-dark/15'}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Video reel card ──────────────────────────────────── */
interface VideoCardProps {
  src: string
  label: string
  collection: 'nature' | 'world'
  origin: string
}

function VideoCard({ src, label, collection, origin }: VideoCardProps) {
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
      className="relative flex-shrink-0 w-52 md:w-60 rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '9/16' }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className={`w-full h-full object-cover transition-all duration-700 ${playing ? 'scale-105' : 'scale-100'}`}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className={`text-[10px] font-sans font-semibold tracking-[0.2em] uppercase mb-2 ${
          collection === 'nature' ? 'text-green-300' : 'text-blue-300'
        }`}>
          {collection === 'nature' ? '🌿 Nature' : '🌍 World'}
        </span>
        <h3 className="font-display font-bold text-white text-xl leading-tight">{label}</h3>
        <p className="text-white/50 text-xs font-body mt-1">{origin}</p>
      </div>

      {/* Play indicator */}
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

/* ─── Flavor card (home grid) ──────────────────────────── */
function FlavorCard({ flavor, large = false }: { flavor: typeof natureFlavors[0]; large?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl ${large ? 'row-span-2' : ''}`}
    >
      <div className={`overflow-hidden bg-brand-cream-dark ${large ? 'aspect-[3/5]' : 'aspect-[4/3]'}`}>
        <img
          src={flavor.heroImage}
          alt={flavor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <span className={`text-[9px] font-sans font-semibold tracking-[0.2em] uppercase mb-2 inline-block ${
          flavor.collection === 'nature' ? 'text-green-300' : 'text-blue-300'
        }`}>
          {flavor.collection === 'nature' ? '🌿 From Nature' : '🌍 From the World'}
        </span>
        <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-tight">{flavor.name}</h3>
        <p className="text-white/55 text-xs font-body mt-1 hidden md:block">{flavor.tagline}</p>
      </div>
    </motion.div>
  )
}

/* ─── Parallax hero image ──────────────────────────────── */
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[115%] object-cover object-center -mt-[15%]"
      />
    </div>
  )
}

/* ─── Page ─────────────────────────────────────────────── */
export default function Home() {
  const videoScrollRef = useRef<HTMLDivElement>(null)

  const scrollVideos = (dir: 'left' | 'right') => {
    const el = videoScrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' })
  }

  const videos: VideoCardProps[] = [
    { src: '/videos/honeycomb.mp4', label: 'Honeycomb', collection: 'world', origin: 'British Isles' },
    { src: '/videos/mango.mp4',     label: 'Mango',     collection: 'nature', origin: 'Tamil Nadu' },
    { src: '/videos/strawberry.mp4',label: 'Strawberry',collection: 'nature', origin: 'Ooty Farms' },
    { src: '/videos/matcha.mp4',    label: 'Matcha',    collection: 'world', origin: 'Uji, Japan' },
    { src: '/videos/peppermint.mp4',label: 'Peppermint',collection: 'world', origin: 'England' },
  ]

  return (
    <div>
      {/* ═══════════════════════════════════════════════
          HERO — editorial split
          Left: solid dark | Right: full-bleed image
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

        {/* LEFT — dark text panel */}
        <div className="relative z-10 flex-1 bg-brand-dark flex flex-col justify-end pb-16 px-8 md:px-14 pt-32 lg:pt-28 lg:pb-20 min-h-[60vh] lg:min-h-screen">
          {/* Subtle texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_50%,_white_1px,_transparent_1px)] bg-[size:24px_24px]" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 md:mb-14"
            >
              <img
                src="/logo.png"
                alt="Jellove Ice Cream"
                className="h-14 md:h-20 w-auto brightness-0 invert"
              />
            </motion.div>

            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-7"
            >
              <div className="w-5 h-px bg-brand-gold" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-gold/80">
                KK Nagar, Madurai
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-10 md:mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-white leading-[0.92] tracking-tight text-6xl md:text-7xl xl:text-8xl"
              >
                Two worlds.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black italic text-brand-gold leading-[0.92] tracking-tight text-6xl md:text-7xl xl:text-8xl"
              >
                One scoop.
              </motion.h1>
            </div>

            {/* Collection badges */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <div className="flex items-center gap-2 bg-brand-nature/20 border border-brand-nature/30 text-green-300 rounded-full px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase">
                <Leaf size={12} /> From All of Nature
              </div>
              <div className="flex items-center gap-2 bg-brand-world/20 border border-brand-world/30 text-blue-300 rounded-full px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase">
                <Globe size={12} /> From Around the World
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/flavours"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-sans font-semibold text-sm tracking-wide px-7 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Explore All Flavours <ArrowRight size={15} />
              </Link>
              <Link
                to="/store"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 hover:text-white hover:border-white/50 font-sans font-semibold text-sm tracking-wide px-7 py-4 rounded-full transition-all duration-300"
              >
                <MapPin size={15} /> Find Our Store
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT — full-bleed poster image with parallax */}
        <div className="relative flex-1 min-h-[45vh] lg:min-h-screen overflow-hidden">
          <ParallaxImage src="/images/posters/nature-1.png" alt="Jellove From All of Nature" />
          {/* Edge gradient on left to blend with dark panel */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-dark to-transparent pointer-events-none" />
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-8 md:left-14 z-20 flex items-center gap-3 text-white/30"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-8 bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </motion.div>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          MARQUEE STRIPS
      ═══════════════════════════════════════════════ */}
      <section className="border-y border-brand-cream-deeper/50">
        <div className="border-b border-brand-cream-deeper/30 bg-brand-nature/[0.06]">
          <Marquee items={NATURE_ITEMS} />
        </div>
        <div className="bg-brand-world/[0.04]">
          <Marquee items={WORLD_ITEMS} reverse />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COLLECTION 01 — FROM ALL OF NATURE
          Text left · Image grid right
      ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <AnimatedSection delay={0.05}>
              <h2 className="font-display font-black text-brand-dark text-5xl md:text-6xl xl:text-7xl leading-[0.92] tracking-tight mb-7">
                From All<br />
                <span className="italic text-brand-nature">of Nature.</span>
              </h2>
              <p className="font-body text-brand-dark/55 text-lg leading-relaxed mb-8 max-w-md">
                Five flavours born from India's richest soils and coastlines — each scoop carries a story of the land, the tree, the harvest.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {natureFlavors.map((f) => (
                  <span
                    key={f.id}
                    className="border border-brand-nature/20 text-brand-nature/70 rounded-full px-3.5 py-1 text-xs font-sans font-semibold"
                  >
                    {f.name}
                  </span>
                ))}
              </div>
              <Link
                to="/flavours"
                className="inline-flex items-center gap-2 bg-brand-nature text-white font-sans font-semibold text-sm tracking-wide px-6 py-3.5 rounded-full hover:bg-brand-nature-light transition-all duration-300 hover:scale-105"
              >
                Taste Nature <ArrowRight size={15} />
              </Link>
            </AnimatedSection>

            {/* Image mosaic */}
            <AnimatedSection delay={0.2} className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
              {/* Tall left */}
              <div className="row-span-2 rounded-2xl overflow-hidden">
                <img src="/images/nature/mango.jpg" alt="Mango" className="w-full h-full object-cover aspect-[2/3]" loading="lazy" />
              </div>
              {/* Top right */}
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/nature/strawberry.png" alt="Strawberry" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
              {/* Bottom right */}
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/nature/tender-coconut.jpg" alt="Tender Coconut" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COLLECTION 02 — FROM AROUND THE WORLD
          Image grid left · Text right
      ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image mosaic — LEFT on desktop */}
            <AnimatedSection delay={0.05} className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/world/honeycomb.png" alt="Honeycomb" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
              <div className="row-span-2 rounded-2xl overflow-hidden">
                <img src="/images/world/matcha.png" alt="Matcha" className="w-full h-full object-cover aspect-[2/3]" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/world/peppermint.png" alt="Peppermint" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
            </AnimatedSection>

            {/* Text — RIGHT on desktop */}
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <h2 className="font-display font-black text-white text-5xl md:text-6xl xl:text-7xl leading-[0.92] tracking-tight mb-7">
                From All<br />
                <span className="italic text-brand-world-light">the World.</span>
              </h2>
              <p className="font-body text-white/55 text-lg leading-relaxed mb-8 max-w-md">
                Honeycomb from the British Isles. Matcha from Uji. Peppermint from English meadows. The world's great flavours, made with love in Madurai.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {worldFlavors.map((f) => (
                  <span
                    key={f.id}
                    className="border border-brand-world/40 text-brand-world-light/70 rounded-full px-3.5 py-1 text-xs font-sans font-semibold"
                  >
                    {f.name}
                  </span>
                ))}
              </div>
              <Link
                to="/flavours"
                className="inline-flex items-center gap-2 bg-brand-world text-white font-sans font-semibold text-sm tracking-wide px-6 py-3.5 rounded-full hover:bg-brand-world-light transition-all duration-300 hover:scale-105"
              >
                Explore the World <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          VIDEO SHOWCASE — Flavour Reels
      ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-10 mb-10 flex items-end justify-between">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-red/70 font-semibold">
                See the Flavours
              </span>
            </div>
            <h2 className="font-display font-black text-brand-dark text-4xl md:text-5xl leading-[0.95] tracking-tight">
              Watch them<br />
              <span className="italic text-brand-red">come alive.</span>
            </h2>
          </AnimatedSection>
          {/* Scroll arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollVideos('left')}
              className="w-10 h-10 rounded-full border border-brand-dark/15 flex items-center justify-center hover:bg-brand-cream-dark transition-colors"
            >
              <ChevronLeft size={18} className="text-brand-dark/60" />
            </button>
            <button
              onClick={() => scrollVideos('right')}
              className="w-10 h-10 rounded-full border border-brand-dark/15 flex items-center justify-center hover:bg-brand-cream-dark transition-colors"
            >
              <ChevronRight size={18} className="text-brand-dark/60" />
            </button>
          </div>
        </div>

        <div
          ref={videoScrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto px-5 md:px-10 pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="snap-center"
            >
              <VideoCard {...v} />
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-4 text-xs font-sans text-brand-dark/30 tracking-widest uppercase md:hidden">
          Swipe to explore ›
        </p>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED FLAVOURS — editorial grid
      ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-brand-cream-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <AnimatedSection className="flex items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-dark/40 font-semibold">
                  Right Now
                </span>
              </div>
              <h2 className="font-display font-black text-brand-dark text-4xl md:text-5xl leading-[0.95] tracking-tight">
                Today's<br />
                <span className="italic text-brand-red">favourites.</span>
              </h2>
            </div>
            <Link
              to="/flavours"
              className="hidden md:inline-flex items-center gap-2 text-brand-red font-sans font-semibold text-sm hover:gap-3 transition-all"
            >
              All 10 Flavours <ArrowRight size={15} />
            </Link>
          </AnimatedSection>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatedSection delay={0.05} className="lg:col-span-1 lg:row-span-2">
              <FlavorCard flavor={natureFlavors[0]} large />
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <FlavorCard flavor={worldFlavors[0]} />
            </AnimatedSection>
            <AnimatedSection delay={0.18}>
              <FlavorCard flavor={natureFlavors[1]} />
            </AnimatedSection>
            <AnimatedSection delay={0.24} className="col-span-2 lg:col-span-1">
              <FlavorCard flavor={worldFlavors[1]} />
            </AnimatedSection>
            <AnimatedSection delay={0.28}>
              <FlavorCard flavor={natureFlavors[2]} />
            </AnimatedSection>
            <AnimatedSection delay={0.32}>
              <FlavorCard flavor={worldFlavors[2]} />
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-10 md:hidden">
            <Link to="/flavours" className="btn-outline text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
              All 10 Flavours <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT STRIP — image full-bleed + editorial quote
      ═══════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-44 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/posters/world-1.png"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-dark/75" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 md:px-10">
          <AnimatedSection>
            <p className="font-display font-bold italic text-white/25 text-7xl md:text-9xl leading-none mb-4 select-none">"</p>
            <blockquote className="font-display font-black text-white text-3xl md:text-5xl leading-[1.15] tracking-tight max-w-3xl mb-8">
              We believe ice cream should taste like it came from{' '}
              <span className="italic text-brand-gold-light">somewhere real.</span>
            </blockquote>
            <div className="flex items-center gap-5">
              <Link
                to="/about"
                className="font-sans font-semibold text-sm text-white/60 hover:text-white transition-colors tracking-wide"
              >
                Our Story →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STORE CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-red/60 font-semibold">
                  In Person
                </span>
              </div>
              <h2 className="font-display font-black text-brand-dark text-5xl md:text-6xl leading-[0.92] tracking-tight mb-7">
                Come say<br />
                <span className="italic text-brand-red">hello.</span>
              </h2>
              <div className="flex items-start gap-3 mb-8">
                <MapPin size={18} className="text-brand-red mt-0.5 flex-shrink-0" />
                <p className="font-body text-brand-dark/60 text-lg leading-relaxed">
                  Opposite Sundaram Park Main Entrance,<br />
                  KK Nagar, Madurai
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/store" className="btn-primary">
                  Store Info & Hours <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/918124960933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark/70 hover:border-[#25D366] hover:text-[#25D366] font-sans font-semibold text-sm tracking-wide px-6 py-3.5 rounded-full transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/posters/nature-2.jpg"
                  alt="Jellove Ice Cream Store"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
