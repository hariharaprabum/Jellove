import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IceCream, Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-brand-cream px-5 py-24 md:py-32">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-brand-red/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center max-w-xl mx-auto"
      >
        {/* Big 404 with a melting scoop */}
        <div className="relative inline-flex items-end justify-center mb-6">
          <span className="font-display font-black leading-none text-brand-dark/90 text-[120px] md:text-[180px] tracking-tight select-none">
            4
          </span>
          <motion.span
            initial={{ rotate: -8 }}
            animate={{ rotate: [-8, 6, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-1 md:mx-2 -mb-2 md:-mb-4"
          >
            <IceCream className="w-20 h-20 md:w-32 md:h-32 text-brand-red" strokeWidth={1.5} />
          </motion.span>
          <span className="font-display font-black leading-none text-brand-dark/90 text-[120px] md:text-[180px] tracking-tight select-none">
            4
          </span>
        </div>

        <span className="section-label text-brand-red/70 mb-4 block">Lost a scoop?</span>
        <h1 className="display-heading text-4xl md:text-5xl text-brand-dark mb-4">
          This flavour doesn&apos;t exist
        </h1>
        <p className="font-body text-brand-dark/60 text-lg leading-relaxed mb-9 max-w-md mx-auto">
          The page you&apos;re looking for melted away — or never existed. Let&apos;s get you
          back to something delicious.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Back Home
          </Link>
          <Link to="/flavours" className="btn-outline text-brand-dark">
            Browse Flavours <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
