import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/flavours', label: 'Our Flavours' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/store', label: 'Store' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fix: reset immediately on route change — no transparency flicker
  useEffect(() => {
    setScrolled(false)
    setOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            /* Solid, fully opaque — no blur so dark content never bleeds through */
            : 'bg-brand-cream shadow-sm border-b border-brand-cream-deeper/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-[72px] md:h-[80px] flex items-center justify-between">

          {/* Logo — larger, original colors on light / white on dark */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Jellove Ice Cream"
              className={`w-auto transition-all duration-400 ${
                transparent
                  ? 'h-20 md:h-28'
                  : 'h-20 md:h-28'
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 font-sans text-sm font-semibold tracking-wide rounded-full transition-colors duration-300 ${
                    transparent
                      ? active
                        ? 'text-brand-red'
                        : 'text-brand-dark/60 hover:text-brand-dark'
                      : active
                      ? 'text-brand-red'
                      : 'text-brand-dark/60 hover:text-brand-dark'
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-brand-red"
                      transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/store"
              className="hidden md:inline-flex items-center text-sm font-sans font-semibold tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 bg-brand-red text-white hover:bg-brand-red-dark"
            >
              Visit Store
            </Link>
            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden p-2 rounded-full transition-colors text-brand-dark hover:bg-brand-cream-dark"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 bg-brand-cream border-b border-brand-cream-deeper shadow-lg lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-3.5 font-sans font-semibold text-sm rounded-xl transition-colors ${
                    location.pathname === l.to
                      ? 'bg-brand-red/8 text-brand-red'
                      : 'text-brand-dark/70 hover:bg-brand-cream-dark'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/store" className="mt-2 btn-primary justify-center">
                Visit Store
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
