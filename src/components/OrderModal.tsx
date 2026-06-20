import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Check, Loader2, ShoppingBag, MessageCircle } from 'lucide-react'

/* ───────────────────────────────────────────────────────────────────
   SETUP (one-time, ~30 seconds):
   1. Go to https://web3forms.com  →  enter  info@jellove.in
   2. Copy the Access Key they email you
   3. Paste it below, replacing YOUR_WEB3FORMS_ACCESS_KEY
   Every order/enquiry then lands in that inbox automatically.
─────────────────────────────────────────────────────────────────── */
const WEB3FORMS_ACCESS_KEY = '51c2098d-5dbb-48fb-b912-13ff6ce82c18'
const WHATSAPP = '918807159702'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function OrderModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const close = useCallback(() => {
    onClose()
    // reset shortly after the exit animation
    setTimeout(() => { setStatus('idle'); setErrorMsg('') }, 250)
  }, [onClose])

  // Esc + scroll lock
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [open, close])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('botcheck')) return // honeypot tripped

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Order / Enquiry — Jellove Ice Cream',
          from_name: 'Jellove Website',
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email') || 'Not provided',
          preferred: data.get('preferred') || 'Not specified',
          order: data.get('order'),
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(json.message || 'Something went wrong. Please try again or WhatsApp us.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again or reach us on WhatsApp.')
    }
  }

  const field =
    'w-full rounded-xl border border-brand-cream-deeper bg-brand-cream/40 px-4 py-3 text-sm font-body text-brand-dark placeholder:text-brand-dark/35 focus:outline-none focus:border-brand-red focus:bg-white transition-colors'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />

          <motion.div
            role="dialog" aria-modal="true" aria-labelledby="order-title"
            className="relative w-full max-w-md bg-brand-cream rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-nature via-brand-gold to-brand-red" />
            <button onClick={close} aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 flex items-center justify-center text-brand-dark/50 hover:text-brand-dark transition-colors z-10">
              <X size={17} />
            </button>

            {status === 'success' ? (
              <div className="px-7 md:px-9 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-nature/15 flex items-center justify-center mx-auto mb-5">
                  <Check size={30} className="text-brand-nature" />
                </div>
                <h2 className="font-display font-black text-2xl text-brand-dark mb-2">Order received!</h2>
                <p className="font-body text-sm text-brand-dark/60 leading-relaxed mb-7 max-w-xs mx-auto">
                  Thank you — we've got your enquiry and will get back to you shortly. For anything urgent, message us on WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <button onClick={close} className="btn-outline text-brand-dark justify-center">Done</button>
                </div>
              </div>
            ) : (
              <div className="px-7 md:px-9 pt-8 pb-8">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShoppingBag size={15} className="text-brand-red" />
                  <span className="section-label text-brand-red/70">Order &amp; Enquiry</span>
                </div>
                <h2 id="order-title" className="font-display font-black text-2xl md:text-3xl text-brand-dark leading-tight mb-2">
                  Place an order
                </h2>
                <p className="font-body text-sm text-brand-dark/55 leading-relaxed mb-6">
                  Tell us what you'd like and we'll get back to you. Pick-up from our KK Nagar parlour.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                  <input name="name" required placeholder="Your name *" className={field} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input name="phone" type="tel" required placeholder="Phone *" className={field} />
                    <input name="email" type="email" placeholder="Email (optional)" className={field} />
                  </div>
                  <input name="preferred" placeholder="Preferred date / time (optional)" className={field} />
                  <textarea name="order" required rows={4} placeholder="What would you like to order? *" className={`${field} resize-none`} />

                  {status === 'error' && (
                    <p className="text-xs font-sans text-brand-red bg-brand-red/8 rounded-lg px-3 py-2">{errorMsg}</p>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'sending'
                      ? (<><Loader2 size={16} className="animate-spin" /> Sending…</>)
                      : (<>Send Order <Send size={15} /></>)}
                  </button>

                  <p className="text-center text-[11px] font-body text-brand-dark/40 pt-1">
                    Prefer to chat?{' '}
                    <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-brand-red font-semibold hover:underline">
                      Order on WhatsApp
                    </a>
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
