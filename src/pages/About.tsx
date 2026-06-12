import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, Globe, Heart, ArrowRight, MapPin } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { natureFlavors, worldFlavors } from '../data/flavors'

export default function About() {
  return (
    <div className="pt-20">

      {/* ── HERO — unchanged ─────────────────────────────────── */}
      <section className="relative bg-brand-dark py-12 md:py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/posters/world-1.webp" alt="" className="w-full h-full object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label text-brand-gold/60 mb-4 block">Our Story</span>
            <h1 className="display-heading text-6xl md:text-8xl text-white mb-6">
              About <span className="italic text-brand-gold-light">Jellove</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-xl mx-auto">
              Crafting happiness, one scoop at a time — from the heart of Madurai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BELIEF STRIP ─────────────────────────────────────── */}
      <section className="bg-brand-cream border-b border-brand-cream-deeper/60">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
              <p className="font-display font-black italic text-brand-dark leading-[0.92] flex-1"
                style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
                "We believe ice cream should taste like it came from{' '}
                <span className="text-brand-red">somewhere real.</span>"
              </p>
              <div className="flex-shrink-0 md:pb-1.5">
                <div className="h-px w-10 bg-brand-dark/20 mb-3" />
                <p className="font-sans font-semibold text-[10px] tracking-[0.35em] uppercase text-brand-dark/35">
                  The Jellove Belief
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STORY BLOCK 1 ─────────────────────────────────────── */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-24 items-center">

            {/* Text */}
            <AnimatedSection>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-display font-black text-brand-cream-deeper text-6xl leading-none select-none">01</span>
                <span className="section-label text-brand-red/60">Where We Began</span>
              </div>
              <h2 className="display-heading text-4xl md:text-5xl text-brand-dark mb-6">
                Born in Madurai,<br />
                <span className="italic text-brand-nature">raised on nature.</span>
              </h2>
              <p className="font-body text-brand-dark/65 text-lg leading-relaxed mb-4">
                Jellove was born out of a simple belief — that ice cream should taste like it came from somewhere real. Not a factory. Not a formula. A place. A tree. A field.
              </p>
              <p className="font-body text-brand-dark/65 text-lg leading-relaxed">
                We started with five flavours sourced entirely from India's finest natural ingredients. Ripe Alphonso mangoes. Fresh hill strawberries. Tender young coconuts from the Kerala coast.
              </p>

              {/* Nature flavour chips */}
              <div className="mt-8 pt-6 border-t border-brand-cream-deeper/50">
                <p className="font-sans font-bold text-[9px] tracking-[0.28em] uppercase text-brand-nature/60 mb-3 flex items-center gap-2">
                  <Leaf size={10} /> Nature Collection
                </p>
                <div className="flex flex-wrap gap-2">
                  {natureFlavors.map(f => (
                    <span key={f.id}
                      className="inline-flex items-center bg-brand-nature/8 border border-brand-nature/20 text-brand-nature/80 rounded-full px-3 py-1 text-[10px] font-sans font-semibold">
                      {f.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection delay={0.2} className="relative">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img src="/images/posters/nature-1.webp" alt="From All of Nature"
                  decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </motion.div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-brand-nature text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-display font-bold text-2xl leading-none">5</p>
                <p className="font-sans text-[10px] tracking-widest uppercase text-white/70 mt-0.5">Nature Flavours</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── STORY BLOCK 2 ─────────────────────────────────────── */}
      <section className="py-12 md:py-20 lg:py-28 bg-brand-cream-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-24 items-center">

            {/* Image */}
            <AnimatedSection delay={0.1} className="relative order-2 lg:order-1">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img src="/images/posters/world-1.webp" alt="From Around the World"
                  decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </motion.div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 bg-brand-world text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-display font-bold text-2xl leading-none">5</p>
                <p className="font-sans text-[10px] tracking-widest uppercase text-white/70 mt-0.5">World Flavours</p>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-display font-black text-brand-cream-deeper text-6xl leading-none select-none">02</span>
                <span className="section-label text-brand-world/70">Then We Looked Further</span>
              </div>
              <h2 className="display-heading text-4xl md:text-5xl text-brand-dark mb-6">
                The world's flavours,<br />
                <span className="italic text-brand-world">in Madurai.</span>
              </h2>
              <p className="font-body text-brand-dark/65 text-lg leading-relaxed mb-4">
                Then we asked — why should world-class flavours only exist abroad? Why can't someone in Madurai experience a genuinely Parisian Brown Butter Vanilla, or a ceremonial Japanese Matcha?
              </p>
              <p className="font-body text-brand-dark/65 text-lg leading-relaxed">
                So we built the second collection — five flavours inspired by global traditions, made with imported premium ingredients.
              </p>

              {/* World flavour chips */}
              <div className="mt-8 pt-6 border-t border-brand-cream-deeper/50">
                <p className="font-sans font-bold text-[9px] tracking-[0.28em] uppercase text-brand-world/60 mb-3 flex items-center gap-2">
                  <Globe size={10} /> World Collection
                </p>
                <div className="flex flex-wrap gap-2">
                  {worldFlavors.map(f => (
                    <span key={f.id}
                      className="inline-flex items-center bg-brand-world/8 border border-brand-world/20 text-brand-world/80 rounded-full px-3 py-1 text-[10px] font-sans font-semibold">
                      {f.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { n: '10', label: 'Handcrafted Flavours' },
              { n: '2',  label: 'Collections' },
              { n: '100%', label: 'Made In-Store' },
              { n: '1',  label: 'City · Madurai' },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08}>
                <div className="text-center py-5 md:py-0">
                  <p className="font-display font-black text-white leading-none mb-2"
                    style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
                    {s.n}
                  </p>
                  <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-white/30">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 lg:py-28 bg-brand-cream-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <span className="section-label text-brand-red/60 mb-3 block">What We Stand For</span>
            <h2 className="display-heading text-4xl md:text-5xl text-brand-dark">
              Our <span className="italic text-brand-red">values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Leaf size={26} />,
                iconColor: 'text-brand-nature bg-brand-nature/10',
                accent: 'border-t-brand-nature',
                accentColor: '#3A6030',
                title: 'From the Source',
                body: 'We source every ingredient thoughtfully — ripe Alphonso mangoes, fresh Ooty strawberries, ceremonial-grade matcha from Uji. No shortcuts, ever.',
              },
              {
                icon: <Globe size={26} />,
                iconColor: 'text-brand-world bg-brand-world/10',
                accent: 'border-t-brand-world',
                accentColor: '#8A5A10',
                title: 'Globally Inspired',
                body: 'Our World collection brings Paris, Tokyo, London, and New York flavours to KK Nagar. Madurai deserves the world.',
              },
              {
                icon: <Heart size={26} />,
                iconColor: 'text-brand-red bg-brand-red/10',
                accent: 'border-t-brand-red',
                accentColor: '#D42719',
                title: 'Made with Love',
                body: "Every batch is handcrafted in small quantities so flavour is never compromised. You'll taste the difference in the very first scoop.",
              },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                  {/* Coloured top stripe */}
                  <div className="h-1 w-full flex-shrink-0"
                    style={{ background: v.accentColor }} />
                  <div className="p-7 md:p-8 flex flex-col flex-1">
                    <div className={`w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${v.iconColor}`}>
                      {v.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-dark mb-3">{v.title}</h3>
                    <p className="font-body text-brand-dark/60 text-sm leading-relaxed flex-1">{v.body}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-24 bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimatedSection>
            <span className="section-label text-brand-gold/60 mb-4 block">Visit Us</span>
            <h3 className="display-heading text-white text-4xl md:text-6xl mb-5">
              Come taste<br />
              <span className="italic text-brand-gold-light">the story.</span>
            </h3>
            <p className="font-body text-white/60 mb-8 text-lg max-w-sm mx-auto leading-relaxed">
              Every flavour has a tale. Come visit us in KK Nagar, Madurai and hear it in every scoop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/flavours" className="btn-primary">
                Explore Flavours <ArrowRight size={16} />
              </Link>
              <Link to="/store" className="btn-outline text-white border-white/30 hover:bg-white/10">
                <MapPin size={15} /> Find Our Store
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
