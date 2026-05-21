import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Globe, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { flavors } from '../data/flavors'

type Filter = 'all' | 'nature' | 'world'

export default function Flavours() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'all' ? flavors : flavors.filter((f) => f.collection === filter)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-12 md:py-24 lg:py-36">
        {/* Background split */}
        <div className="absolute inset-0 flex">
          <div className="flex-1 opacity-20">
            <img src="/images/nature/mango.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 opacity-20">
            <img src="/images/world/matcha.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-brand-dark/60" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label text-brand-gold/60 mb-4 block">10 Flavours</span>
            <h1 className="display-heading text-6xl md:text-8xl text-white mb-6">
              Our <span className="italic text-brand-gold-light">Flavours</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-xl mx-auto">
              Two collections, ten extraordinary flavours — each crafted from the world's finest ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-brand-cream/95 backdrop-blur-md border-b border-brand-cream-deeper/50 py-4">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-center gap-3">
          {([
            { key: 'all', label: 'All Flavours', icon: null },
            { key: 'nature', label: 'From Nature', icon: <Leaf size={14} /> },
            { key: 'world', label: 'From the World', icon: <Globe size={14} /> },
          ] as { key: Filter; label: string; icon: React.ReactNode }[]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`relative inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
                filter === tab.key
                  ? tab.key === 'nature'
                    ? 'bg-brand-nature text-white'
                    : tab.key === 'world'
                    ? 'bg-brand-world text-white'
                    : 'bg-brand-red text-white'
                  : 'text-brand-dark/60 hover:text-brand-dark bg-transparent hover:bg-brand-cream-dark'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Flavour grid */}
      <section className="py-10 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visible.map((flavor) => (
                <motion.article
                  key={flavor.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={flavor.heroImage}
                      alt={flavor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                        flavor.collection === 'nature'
                          ? 'bg-brand-nature text-white'
                          : 'bg-brand-world text-white'
                      }`}>
                        {flavor.collection === 'nature' ? <Leaf size={11} /> : <Globe size={11} />}
                        {flavor.collection === 'nature' ? 'Nature' : 'World'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="font-display font-bold text-2xl text-brand-dark leading-tight">
                          {flavor.name}
                        </h2>
                        <p className="font-display italic text-brand-dark/50 text-sm mt-0.5">{flavor.tagline}</p>
                      </div>
                    </div>

                    <p className="font-body text-brand-dark/60 text-sm leading-relaxed mb-5">
                      {flavor.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-brand-cream-deeper/30">
                      <div>
                        <p className="text-[10px] font-sans font-bold tracking-widest uppercase text-brand-dark/30 mb-0.5">Origin</p>
                        <p className="font-sans font-semibold text-xs text-brand-dark/60">{flavor.origin}</p>
                      </div>
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-offset-2"
                        style={{
                          backgroundColor: flavor.accentHex,
                          outlineColor: flavor.accentHex + '40',
                        }}
                      />
                    </div>

                    {/* Highlight badge */}
                    <div
                      className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-semibold"
                      style={{ backgroundColor: flavor.accentHex + '18', color: flavor.accentHex }}
                    >
                      ✦ {flavor.highlight}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-cream-dark">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <AnimatedSection>
            <h3 className="display-heading text-4xl md:text-5xl text-brand-dark mb-4">
              Ready to taste <span className="italic text-brand-red">all ten?</span>
            </h3>
            <p className="font-body text-brand-dark/60 mb-8">
              Visit our store in KK Nagar, Madurai and let your scoop adventure begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/store" className="btn-primary">
                <MapPin size={16} /> Find Our Store
              </Link>
              <Link to="/products" className="btn-outline text-brand-dark border-brand-dark/30 hover:border-brand-red hover:text-brand-red">
                See Our Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
