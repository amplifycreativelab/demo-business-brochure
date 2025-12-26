# Demo 10 - Local Business Brochure

A warm, professional 5-page business brochure website built with **Astro** (no Tailwind). Designed for retail, wellness, trades, clinics, studios, or consultants.

## 🎨 Design System

**Concept:** *Warm Craft Grid* — Clean grid system with warm palette and tactile surfaces.

### Palette: Oat & Ink
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#FBF7F0` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, inputs |
| `--color-text` | `#1B1B1F` | Primary text |
| `--color-muted` | `#5B5B66` | Secondary text |
| `--color-accent` | `#C65D3A` | Terracotta accent |
| `--color-accent-soft` | `rgba(198,93,58,0.14)` | Highlights |

### Typography
- **Headings:** Libre Baskerville (700)
- **Body:** Inter (400–600)
- **H1:** `clamp(2.2rem, 4vw, 3.2rem)`
- **H2:** `clamp(1.6rem, 2.5vw, 2.1rem)`

### Signature Motifs
- ✅ Rounded pill highlight behind key heading words
- ✅ Corner sticker badge ("Trusted Local")

## 📁 Project Structure

```
business-brochure-demo/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Sticky header + mobile nav
│   │   ├── FooterNAP.astro       # NAP + service area
│   │   ├── HeroSplit.astro       # Text left, image right
│   │   ├── HeroCentered.astro    # Background image hero
│   │   ├── ServiceCard.astro     # Icon + title + description
│   │   ├── TestimonialCard.astro # Quote + author + category
│   │   ├── AreasServed.astro     # Suburb chips + map
│   │   ├── CTASection.astro      # Final call-to-action
│   │   └── FAQ.astro             # Accordion FAQs
│   ├── data/
│   │   ├── services.json         # 6 services
│   │   ├── testimonials.json     # 12 testimonials
│   │   ├── areas.json            # 12 Perth suburbs
│   │   └── faqs.json             # 3 FAQs
│   ├── layouts/
│   │   └── BaseLayout.astro      # SEO + JSON-LD + fonts
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── about.astro           # About
│   │   ├── services.astro        # Services
│   │   ├── testimonials.astro    # Testimonials
│   │   ├── contact.astro         # Contact form
│   │   └── privacy.astro         # Privacy policy
│   └── styles/
│       └── global.css            # Design tokens + utilities
├── public/
│   ├── assets/images/og-image.png
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
└── package.json
```

## 🚀 Getting Started

```bash
# Navigate to project
cd business-brochure-demo

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

Configured for **GitHub Pages**:
- **Site:** `https://amplifycreativelab.github.io`
- **Base:** `/business-brochure-demo`

All internal links use `import.meta.env.BASE_URL` for correct routing.

## ✅ Features

### Components
- **Two swap-friendly heroes** with identical props (`HeroSplit` & `HeroCentered`)
- **Mobile navigation** using CSS-only `<details>/<summary>`
- **Accessible forms** with focus states and label associations

### SEO & Local
- LocalBusiness JSON-LD schema
- Open Graph & Twitter meta tags
- Sitemap via `@astrojs/sitemap`
- NAP (Name, Address, Phone) embedded in HTML
- Areas Served section with Perth suburbs

### Accessibility
- Skip link for keyboard navigation
- Focus-visible states on all interactive elements
- `prefers-reduced-motion` support
- Semantic HTML structure

### Performance
- No Tailwind (vanilla CSS with design tokens)
- Minimal JS (mobile nav only)
- Google Fonts: Inter + Libre Baskerville
- Static output for fast loading

## 📋 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, testimonials, areas, CTA |
| About | `/about/` | Story, values, local promise |
| Services | `/services/` | 6 services with comparison table |
| Testimonials | `/testimonials/` | 12 client reviews with filters |
| Contact | `/contact/` | Form + NAP + hours + next steps |
| Privacy | `/privacy/` | Legal privacy policy |

## 🔧 Customization

### Swap Hero Style
In `src/pages/index.astro`, change:
```astro
<!-- From split hero -->
<HeroSplit title="..." />

<!-- To centered hero -->
<HeroCentered title="..." />
```

Both accept identical props for easy swapping.

### Update Colors
Edit `src/styles/global.css`:
```css
:root {
  --color-accent: #YOUR_COLOR;
  --color-accent-soft: rgba(YOUR_RGB, 0.14);
}
```

### Update Business Info
1. Edit JSON-LD in `src/layouts/BaseLayout.astro`
2. Update NAP in `src/components/FooterNAP.astro`
3. Update contact info in `src/pages/contact.astro`
