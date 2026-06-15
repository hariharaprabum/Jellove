import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram, MessageCircle, ExternalLink, Navigation } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const hours = [
  { day: 'All Days', time: '11:00 AM – 11:00 PM' },
]

const orderOptions = [
  {
    icon: <MessageCircle size={26} />,
    title: 'WhatsApp Order',
    body: 'Chat with us directly to place an order, ask about flavours, or arrange a pickup.',
    cta: 'Chat Now',
    href: 'https://wa.me/918807159702?text=Hi%20Jellove!%20I%27d%20like%20to%20place%20an%20order.',
    color: 'bg-[#25D366] hover:bg-[#1DA851] text-white',
  },
  {
    icon: <Phone size={26} />,
    title: 'Call Us',
    body: 'Prefer to call? Our team is happy to help with orders and any questions.',
    cta: '+91 88071 59702',
    href: 'tel:+918807159702',
    color: 'bg-brand-red hover:bg-brand-red-dark text-white',
  },
  {
    icon: <Instagram size={26} />,
    title: 'Instagram DM',
    body: 'Slide into our DMs — we reply fast and love sharing what\'s freshly made.',
    cta: '@jellove.icecream',
    href: 'https://www.instagram.com/jellove.icecream/',
    color: 'bg-gradient-to-br from-[#E1306C] to-[#833AB4] hover:opacity-90 text-white',
  },
]

export default function Store() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-brand-dark py-12 md:py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/posters/nature-2.webp" alt="" decoding="async" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 to-brand-dark" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label text-brand-gold/60 mb-4 block">Find Us</span>
            <h1 className="display-heading text-6xl md:text-8xl text-white mb-6">
              Visit Our <span className="italic text-brand-gold-light">Store</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-xl mx-auto">
              Come in, explore both collections, and discover your new favourite scoop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location + Hours */}
      <section className="py-10 md:py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
            {/* Info */}
            <AnimatedSection>
              <span className="section-label text-brand-red/60 mb-5 block">Store Details</span>

              {/* Address */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-1">Address</h3>
                  <p className="font-body text-brand-dark/65 leading-relaxed">
                    Iswariya Lakshmi Plaza,<br />
                    Opposite Sundaram Park Main Entrance,<br />
                    KK Nagar, Madurai<br />
                    Tamil Nadu, India
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Jellove+Ice+Cream/@9.932808,78.1487419,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-brand-red font-sans font-semibold text-sm hover:underline"
                  >
                    Open in Google Maps <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-1">Phone</h3>
                  <a href="tel:+918807159702" className="font-body text-brand-dark/65 hover:text-brand-red transition-colors">
                    +91 88071 59702
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-brand-red" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-3">Opening Hours</h3>
                  <div className="space-y-2.5">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center py-2.5 border-b border-brand-cream-deeper/50 last:border-0">
                        <span className="font-sans font-semibold text-sm text-brand-dark/70">{h.day}</span>
                        <span className="font-sans font-bold text-sm text-brand-dark">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map embed — branded */}
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-cream-deeper/60" style={{ minHeight: '460px' }}>

                {/* Location badge — top left */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full pl-2 pr-4 py-1.5 shadow-lg">
                  <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                    <MapPin size={12} className="text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[11px] text-brand-dark leading-tight">Jellove Ice Cream</p>
                    <p className="font-sans text-[9px] text-brand-dark/50 leading-tight">KK Nagar, Madurai</p>
                  </div>
                </div>

                {/* Open status — top right */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-brand-dark/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-nature animate-pulse flex-shrink-0" />
                  <span className="font-sans font-bold text-[10px] text-white/90 tracking-wide">Open · 11AM–11PM</span>
                </div>

                {/* Map iframe */}
                <iframe
                  title="Jellove Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1!2d78.1465528!3d9.9328080!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5a87fb95741%3A0x213b157c69e4496a!2sJellove%20Ice%20Cream!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                  style={{ border: 0, position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Bottom info strip */}
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-brand-dark/90 backdrop-blur-md px-5 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-display font-bold text-white text-sm leading-tight truncate">
                        Jellove Ice Cream
                      </p>
                      <p className="font-body text-white/50 text-xs mt-0.5 truncate">
                        Iswariya Lakshmi Plaza, KK Nagar, Madurai
                      </p>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/Jellove+Ice+Cream/@9.932808,78.1487419,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-dark text-white font-sans font-bold text-xs px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 flex-shrink-0"
                    >
                      <Navigation size={11} />
                      Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick action pills below map */}
              <div className="flex gap-3 mt-4">
                <a
                  href="tel:+918807159702"
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-cream-dark hover:bg-brand-cream-deeper border border-brand-cream-deeper rounded-2xl py-3 font-sans font-semibold text-xs text-brand-dark/70 hover:text-brand-dark transition-all duration-200"
                >
                  <Phone size={13} /> Call Us
                </a>
                <a
                  href="https://wa.me/918807159702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-cream-dark hover:bg-brand-cream-deeper border border-brand-cream-deeper rounded-2xl py-3 font-sans font-semibold text-xs text-brand-dark/70 hover:text-brand-dark transition-all duration-200"
                >
                  <MessageCircle size={13} /> WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/place/Jellove+Ice+Cream/@9.932808,78.1487419,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-cream-dark hover:bg-brand-cream-deeper border border-brand-cream-deeper rounded-2xl py-3 font-sans font-semibold text-xs text-brand-dark/70 hover:text-brand-dark transition-all duration-200"
                >
                  <ExternalLink size={13} /> Maps
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Order options */}
      <section className="py-10 md:py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-8 md:mb-12">
            <span className="section-label text-brand-gold/60 mb-3 block">Get Your Scoops</span>
            <h2 className="display-heading text-4xl md:text-5xl text-white">
              Order <span className="italic text-brand-gold-light">your way</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orderOptions.map((opt, i) => (
              <AnimatedSection key={opt.title} delay={i * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/8 transition-colors flex flex-col h-full">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5 text-white">
                    {opt.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{opt.title}</h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed mb-6 flex-1">{opt.body}</p>
                  <a
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-sans font-bold text-sm transition-all hover:scale-105 ${opt.color}`}
                  >
                    {opt.cta} <ExternalLink size={14} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram teaser */}
      <section className="py-16 bg-brand-cream-dark text-center">
        <div className="max-w-2xl mx-auto px-5">
          <AnimatedSection>
            <Instagram size={32} className="text-brand-red mx-auto mb-4" />
            <h3 className="display-heading text-3xl text-brand-dark mb-3">
              Follow the <span className="italic text-brand-red">journey</span>
            </h3>
            <p className="font-body text-brand-dark/60 mb-6">
              Daily scoops, new flavours, and behind-the-scenes goodness on Instagram.
            </p>
            <a
              href="https://www.instagram.com/jellove.icecream/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              @jellove.icecream <ExternalLink size={15} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
