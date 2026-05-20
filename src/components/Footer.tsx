import { Link } from 'react-router-dom'
import { Instagram, Facebook, Phone, MapPin, Mail, Heart, Leaf, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream/80">
      {/* Top bar */}
      <div className="border-b border-white/8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden mb-4" style={{ height: 88 }}>
              <img src="/logo.png" alt="Jellove Ice Cream" className="w-72 h-auto" style={{ marginTop: -101 }} />
            </div>
            <p className="text-sm leading-relaxed text-brand-cream/60 mb-5">
              Handcrafted ice creams born in Madurai — inspired by nature's finest ingredients and the world's greatest flavours.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-brand-cream/40 font-sans">
              <span>Made with</span>
              <Heart size={11} className="fill-brand-red text-brand-red" />
              <span>in KK Nagar, Madurai</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-brand-cream/40 mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/flavours', label: 'Our Flavours' },
                { to: '/products', label: 'Products' },
                { to: '/about', label: 'About Us' },
                { to: '/store', label: 'Find Our Store' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-brand-cream/40 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918124960933"
                  className="flex items-start gap-3 text-sm text-brand-cream/60 hover:text-brand-gold transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-brand-gold" />
                  +91 81249 60933
                </a>
              </li>
              <li>
                <a
                  href="mailto:orders@jellove.com"
                  className="flex items-start gap-3 text-sm text-brand-cream/60 hover:text-brand-gold transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-brand-gold" />
                  <span>
                    orders@jellove.com<br />
                    info@jellove.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-brand-cream/60">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-brand-gold" />
                  <span>
                    Opp. Sundaram Park Main Entrance,<br />
                    KK Nagar, Madurai
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-brand-cream/40 mb-5">Follow Us</h4>
            <p className="text-sm text-brand-cream/60 mb-5">
              Tag us in your scoops — we love seeing your Jellove moments.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/jellove.icecream/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all"
              >
                <Instagram size={17} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-brand-world hover:border-brand-world transition-all"
              >
                <Facebook size={17} />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="nature-badge self-start inline-flex items-center gap-1.5">
                <Leaf size={11} />From All of Nature
              </span>
              <span className="world-badge self-start inline-flex items-center gap-1.5">
                <Globe size={11} />From All the World
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-brand-cream/30 font-sans">
          <span>© 2025 Jellove Ice Cream. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-cream/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-cream/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
