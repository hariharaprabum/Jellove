import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HomeNew from './pages/HomeNew'
import Flavours from './pages/Flavours'
import Products from './pages/Products'
import About from './pages/About'
import Store from './pages/Store'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<HomeNew />} />
          <Route path="/flavours"  element={<Flavours />} />
          <Route path="/products"  element={<Products />} />
          <Route path="/about"     element={<About />} />
          <Route path="/store"     element={<Store />} />
          <Route path="*"          element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton phone="+918807159702" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
