# Jellove Website — Lessons & Rules

## Design Rules (Non-Negotiable)

### Logo
- NEVER apply `brightness-200` or color-shifting CSS filters to the logo
- On **light/cream backgrounds**: use original colored logo (`/logo.png`)
- On **dark backgrounds**: use white logo via `filter: brightness(0) invert(1)` — user OK'd white
- Logo in navbar: minimum `h-12` on desktop, `h-10` on mobile
- Logo in hero: minimum `h-16` md:`h-24`

### Anti-AI-Slop Rules
- NO glassmorphism cards (backdrop-blur overlay boxes on busy images)
- NO 3-equal-column testimonial card grids
- NO centered hero text overlaid on a full-bleed busy background image
- NO purple gradients on white
- NO generic particle/blob backgrounds
- NO generic rounded card grids that look like every SaaS site
- Testimonials: use editorial large-quote layouts, not uniform card grids
- Stats: integrate into photographic sections, not standalone "big number" cards
- Hero: text must be on a CLEAN area — either pure solid color panel or clearly readable bg

### Typography
- Display headlines: Fraunces (serif, premium, variable)
- Sub-headings/labels: Syne (geometric, modern)
- Body: DM Sans (clean, warm)
- Never use Inter, Roboto, or system fonts as primary typeface

### Color Usage
- Primary red: `#D42719` (Jellove brand red from logo)
- Nature collection: `#2D6A35` (deep forest green)
- World collection: `#1A3D7A` (globe blue)
- Gold accent: `#E8A61A`
- Background: `#FFF5E8` (warm cream)
- Dark: `#1A0D04` (rich warm black)
- NEVER introduce pink, orange, or purple as brand colors

### Navbar
- Bug: Always reset `scrolled` state to `false` on route change (race condition with ScrollToTop)
- Fix: `useEffect(() => { setScrolled(false) }, [location.pathname])`
- On home hero (dark section): transparent white text
- On scroll > 60px: solid cream bg, dark text
- Logo size: `h-12` minimum in navbar

### Animations
- Duration: 0.8–1.0s for entry animations (not 0.3–0.5s — feels cheap)
- Easing: `[0.16, 1, 0.3, 1]` — smooth deceleration (not linear or bounce)
- Stagger: 0.12s between children (not 0.05s — too fast; not 0.2s — too slow)
- `y` start value: 50px for major elements, 25px for secondary
- NO aggressive scale animations on page load (max 0.97→1.0, never 0.8→1.0)
- Hover states: subtle `y: -4` or `y: -6` only (not scale)

### Content Density
- Every section should have visual weight — no sections that feel empty
- Each flavour card: image + name + tagline + collection badge + origin + highlight
- Each section needs: eyebrow label + heading + body + visual element + CTA
- Avoid single-column sections that feel like placeholder content

### Videos
- 10 flavor videos available at `/videos/` (compressed: ~1-2MB each)
- Available: honeycomb, mango, strawberry, matcha, peppermint
- Use as flavor showcase carousel on Home page
- Videos: `autoPlay muted loop playsInline` — always muted for autoplay to work
- Video cards: vertical 9:16 aspect ratio, constrained width

### Images
- All brand images in `public/images/`
- Nature: mango.jpg, strawberry.png, chikoo.png, jackfruit.jpg, tender-coconut.jpg
- World: brown-butter-vanilla.png, cheesecake.png, honeycomb.png, matcha.png, peppermint.png
- Posters: nature-1.png (forest), nature-2.jpg (beach), world-1.png (globe)
- Never use Pexels stock photos — use brand assets only

## Pages Summary
- **Home**: Hero (editorial split) → Marquee → Collections (alternating) → Video Carousel → Flavors → Store CTA
- **Our Flavours**: Filter (All/Nature/World) → Animated grid
- **Products**: Size selector → Pricing cards
- **About**: Brand story (alternating left/right blocks)
- **Store**: Address + Hours + Map + 3 order methods (WhatsApp, Call, Instagram)

## Contact Details
- Phone/WhatsApp: +91 8124960933
- Address: Opp. Sundaram Park Main Entrance, KK Nagar, Madurai
- Email: orders@jellove.com / info@jellove.com
- Instagram: @jellove.icecream

## Brand Identity
- Two collections: "From All of Nature" (5 Indian/tropical) + "From All Around the World" (5 global)
- Nature: Chikoo, Jackfruit Musk Melon, Mango, Strawberry, Tender Coconut
- World: Brown Butter Vanilla, Cheesecake, Honeycomb, Matcha, Peppermint
- Tagline: "Two worlds. One scoop."
- Logo: JELLOVE with heart replacing O in LOVE — red colored
