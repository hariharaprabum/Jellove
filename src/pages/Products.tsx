import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, ArrowRight, MapPin } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { products } from '../data/products'

export default function Products() {
  const [selected, setSelected] = useState<Record<string, number>>({})

  const getSize = (productId: string, sizes: typeof products[0]['sizes']) =>
    sizes[selected[productId] ?? 0]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-brand-cream-dark py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/posters/nature-1.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label text-brand-red/60 mb-4 block">How We Scoop</span>
            <h1 className="display-heading text-6xl md:text-8xl text-brand-dark mb-6">
              Our <span className="italic text-brand-red">Products</span>
            </h1>
            <p className="font-body text-brand-dark/60 text-xl max-w-lg mx-auto">
              From a quick single scoop to party-ready packs — there's a Jellove for every occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const activeSize = getSize(product.id, product.sizes)
              return (
                <AnimatedSection key={product.id} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow ${
                      product.popular ? 'ring-2 ring-brand-red' : ''
                    }`}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="flex items-center gap-1 bg-brand-red text-white text-xs font-sans font-bold px-3 py-1.5 rounded-full">
                          {product.popular && <Star size={10} className="fill-white" />}
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="aspect-[16/9] overflow-hidden bg-brand-cream-dark">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="font-display font-bold text-2xl text-brand-dark mb-2">{product.name}</h2>
                      <p className="font-body text-sm text-brand-dark/60 leading-relaxed mb-5">{product.description}</p>

                      {/* Size selector */}
                      {product.sizes.length > 1 && (
                        <div className="mb-5">
                          <p className="text-[10px] font-sans font-bold tracking-widest uppercase text-brand-dark/40 mb-2">Choose Size</p>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size, j) => (
                              <button
                                key={size.name}
                                onClick={() => setSelected((prev) => ({ ...prev, [product.id]: j }))}
                                className={`px-3 py-1.5 rounded-xl text-xs font-sans font-semibold border transition-all ${
                                  (selected[product.id] ?? 0) === j
                                    ? 'bg-brand-red text-white border-brand-red'
                                    : 'border-brand-cream-deeper text-brand-dark/60 hover:border-brand-red/40'
                                }`}
                              >
                                {size.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Price + best for */}
                      <div className="flex items-end justify-between pt-4 border-t border-brand-cream-deeper/30">
                        <div>
                          <p className="text-[10px] font-sans font-bold tracking-widest uppercase text-brand-dark/30 mb-0.5">
                            Best For
                          </p>
                          <p className="font-sans font-semibold text-sm text-brand-dark/70">
                            {activeSize.bestFor}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-sans font-bold tracking-widest uppercase text-brand-dark/30 mb-0.5">
                            Starting At
                          </p>
                          <p className="font-display font-bold text-2xl text-brand-red">
                            ₹{activeSize.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* All flavours with all products */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h3 className="display-heading text-white text-4xl md:text-5xl mb-4">
              All products come in<br />
              <span className="italic text-brand-gold-light">all 10 flavours.</span>
            </h3>
            <p className="font-body text-white/60 mb-8 text-lg">
              Every size. Every collection. Any combination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/flavours" className="btn-primary">
                Browse Flavours <ArrowRight size={16} />
              </Link>
              <Link to="/store" className="btn-outline text-white border-white/30 hover:bg-white/10">
                <MapPin size={16} /> Visit Our Store
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Note on availability */}
      <section className="py-10 bg-brand-cream-dark">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="font-body text-brand-dark/50 text-sm">
            * Prices are indicative and subject to change. All products are freshly made in-store.
            For bulk or event orders, <a href="https://wa.me/918124960933" className="text-brand-red underline">WhatsApp us</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
