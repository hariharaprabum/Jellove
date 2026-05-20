import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, Globe, Heart, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  {
    icon: <Leaf size={28} />,
    title: 'From the Source',
    body: 'We source every ingredient thoughtfully — ripe Alphonso mangoes, fresh Ooty strawberries, ceremonial-grade matcha from Uji. No shortcuts, ever.',
    color: 'text-brand-nature bg-brand-nature/10',
  },
  {
    icon: <Globe size={28} />,
    title: 'Globally Inspired',
    body: 'Our "From Around the World" collection brings Paris, Tokyo, London, and New York flavours directly to KK Nagar. Madurai deserves the world.',
    color: 'text-brand-world bg-brand-world/10',
  },
  {
    icon: <Heart size={28} />,
    title: 'Made with Love',
    body: "Every batch is handcrafted in small quantities so flavour is never compromised. You'll taste the difference in the very first scoop.",
    color: 'text-brand-red bg-brand-red/10',
  },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-brand-dark py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/posters/world-1.png" alt="" className="w-full h-full object-cover object-top" />
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

      {/* Story — alternating */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Block 1: text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center mb-24 md:mb-36">
            <AnimatedSection>
              <span className="section-label text-brand-red/60 mb-4 block">Where We Began</span>
              <h2 className="display-heading text-4xl md:text-5xl text-brand-dark mb-6">
                Born in Madurai,<br />
                <span className="italic text-brand-nature">raised on nature.</span>
              </h2>
              <p className="font-body text-brand-dark/65 text-lg leading-relaxed mb-5">
                Jellove was born out of a simple belief — that ice cream should taste like it came from somewhere real. Not a factory. Not a formula. A place. A tree. A field.
              </p>
              <p className="font-body text-brand-dark/65 text-lg leading-relaxed">
                We started with five flavours sourced entirely from India's finest natural ingredients. Ripe Alphonso mangoes. Fresh hill strawberries. Tender young coconuts from the Kerala coast. Every scoop told a story from the land.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="/images/posters/nature-1.png"
                  alt="From All of Nature"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-brand-nature text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-display font-bold text-2xl">5</p>
                <p className="font-sans text-xs tracking-widest uppercase text-white/70">Nature Flavours</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Block 2: image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <AnimatedSection delay={0.1} className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="/images/posters/world-1.png"
                  alt="From Around the World"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brand-world text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-display font-bold text-2xl">5</p>
                <p className="font-sans text-xs tracking-widest uppercase text-white/70">World Flavours</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <span className="section-label text-brand-world/70 mb-4 block">Then We Looked Further</span>
              <h2 className="display-heading text-4xl md:text-5xl text-brand-dark mb-6">
                The world's flavours,<br />
                <span className="italic text-brand-world">in Madurai.</span>
              </h2>
              <p className="font-body text-brand-dark/65 text-lg leading-relaxed mb-5">
                Then we asked — why should world-class flavours only exist abroad? Why can't someone in Madurai experience a genuinely Parisian Brown Butter Vanilla, or a ceremonial Japanese Matcha?
              </p>
              <p className="font-body text-brand-dark/65 text-lg leading-relaxed">
                So we built the second collection: "From All Around the World." Five flavours inspired by global traditions, made with imported premium ingredients — Honeycomb from Britain, Matcha from Uji, Peppermint from England, Cheesecake from New York, Brown Butter Vanilla from France.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-brand-cream-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label text-brand-red/60 mb-3 block">What We Stand For</span>
            <h2 className="display-heading text-4xl md:text-5xl text-brand-dark">
              Our <span className="italic text-brand-red">values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.15}>
                <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${v.color}`}>
                    {v.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-3">{v.title}</h3>
                  <p className="font-body text-brand-dark/60 text-sm leading-relaxed">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto px-5">
          <AnimatedSection>
            <h3 className="display-heading text-white text-4xl md:text-6xl mb-5">
              Come taste<br />
              <span className="italic text-brand-gold-light">the story.</span>
            </h3>
            <p className="font-body text-white/60 mb-8 text-lg">
              Every flavour has a tale. Come visit us in KK Nagar, Madurai and hear it in every scoop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/flavours" className="btn-primary">
                Explore Flavours <ArrowRight size={16} />
              </Link>
              <Link to="/store" className="btn-outline text-white border-white/30 hover:bg-white/10">
                Find Our Store
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
