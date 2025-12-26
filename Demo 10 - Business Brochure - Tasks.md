# Development Tasks - Demo 10 (Small Business Brochure / Universal)

Source docs:

- `docs/global prompt.md` (baseline Astro + SEO expectations)
- `business-brochure/demo10.md` (Demo 10 rules: **no Tailwind**, warm crafted brochure system)

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; sections later in the file may depend on earlier setup tasks.

## Phase 0 - Project Decisions

- [x] Confirm demo name (default: "Local Brochure") and who it's for (retail / wellness / trades / clinic / studio / consultant).
- [x] Confirm the "signature look" concept: "Warm Craft Grid".
- [x] Choose ONE signature motif to apply consistently:
  - [x] Rounded pill highlight behind key heading words
  - [ ] Wavy underline SVG emphasis (consistent stroke)
  - [x] Corner sticker badge ("Local", "Trusted", "Since 2018")
  - [ ] Soft section divider (thin gradient line + tiny dot)
- [x] Choose ONE strict palette:
  - [x] Palette A: Oat & Ink (accent terracotta `#C65D3A`)
  - [ ] Palette B: Sage & Clay (accent `#3B7C6A` + warm pop `#D08B5B`)
- [x] Choose fonts (max 2):
  - [ ] Headings: Fraunces (600–700) OR Libre Baskerville (700)
  - [x] Body: Inter (400–600) OR system-ui stack
- [x] Confirm IA/pages (5-page brochure):
  - [x] Home (`/`)
  - [x] About (`/about/`)
  - [x] Services (`/services/`)
  - [x] Testimonials (`/testimonials/`)
  - [x] Contact (`/contact/`) (conversion page)
- [x] Confirm required page from base prompt:
  - [x] Privacy (`/privacy/`)
- [x] Confirm navigation approach:
  - [x] Sticky header (optional) + persistent "Contact" CTA
  - [x] Mobile nav: minimal JS drawer OR `details/summary` (no JS)
- [x] Confirm inclusion of "Areas served" sections (Home + Contact) and suburb list size (12–24 chips).
- [x] Confirm icon set (inline SVG, consistent stroke): Map pin, Phone, Clock, Shield, Sparkle, Check.

## Phase 1 - Astro Setup (Static + GitHub Pages)

- [x] Create a new Astro project (static output).
- [x] Configure `astro.config.mjs` with `site: "https://github.com/amplifycreativelab"` and `base: "/<repo>/"`.
- [x] Ensure all internal links and asset URLs work under the base path (no hard-coded absolute `/` paths).
- [x] Add/verify npm scripts: `dev`, `build`, `preview`.
- [x] Ensure **Tailwind is not installed/used** (Demo 10 constraint).
- [x] Create baseline structure:
  - [x] `src/pages/`: `index.astro`, `about.astro`, `services.astro`, `testimonials.astro`, `contact.astro`, `privacy.astro`
  - [x] `src/layouts/BaseLayout.astro`
  - [x] `src/styles/global.css` (tokens + base + layout utilities)
  - [x] `src/components/` (header/footer/heroes/cards/sections)
  - [x] `src/data/*.json` (services/testimonials/areas/faqs)
- [x] Add `src/assets/images/` placeholder images (hero images + OG image).

## Phase 2 - Design System (Warm Minimal + Tactile)

- [x] Implement `:root` design tokens in `src/styles/global.css`:
  - [x] Palette colors (bg/surface/text/muted/border/accent + accent-soft)
  - [x] Type scale:
    - [x] H1 `clamp(2.2rem, 4vw, 3.2rem)`
    - [x] H2 `clamp(1.6rem, 2.5vw, 2.1rem)`
    - [x] Body `1.05rem`
    - [x] Line height `1.55–1.7`
  - [x] Spacing + "brochure rhythm" (desktop 72–96px section padding; mobile 44–56px)
  - [x] Card radius 16px + hover-only soft shadow
  - [x] Max line length ~65ch
- [x] Add layout utilities (container, grid, section spacing) in `global.css`.
- [x] Add micro-interactions (CSS-only):
  - [x] Button press/hover states + strong focus ring
  - [x] Card hover lift (subtle)
  - [x] Form focus glow (subtle, accessible)
- [x] Add focus-visible styles and `prefers-reduced-motion` handling.
- [ ] Add "human/tactile" detail lightly (optional): subtle grain/paper texture background (keep it minimal and performant).

## Phase 3 - Components (Astro)

- [x] Build core components:
  - [x] `Header.astro` (logo wordmark, nav links, persistent Contact button)
  - [x] `FooterNAP.astro` (NAP + service area line + optional ABN)
  - [x] `ServiceCard.astro` (icon + title + 2-line text + "Learn more")
  - [x] `TestimonialCard.astro` (quote + name + category/location)
  - [x] `AreasServed.astro` (intro sentence + suburb chips + map placeholder)
  - [x] `CTASection.astro` (final "Get in touch" band)
  - [x] `FAQ.astro` (accordion or list, depending on page)
- [x] Implement the **two swap-friendly hero components** with identical props:
  - [x] `HeroSplit.astro` (text left, image right, sticker badge overlay, 3 proof bullets w/ icons)
  - [x] `HeroCentered.astro` (background image + overlay, centered copy, trust chips)
  - [x] Ensure both accept: `title`, `subtitle`, `primaryCta`, `secondaryCta`, `image`, `chips[]`
- [x] Keep component-scoped CSS only for unique visuals (hero visuals, stickers, dividers).

## Phase 4 - Content & Data Layer

- [x] Create data files:
  - [x] `src/data/services.json` (3–6 services)
  - [x] `src/data/testimonials.json` (9–12 testimonials + optional rating summary)
  - [x] `src/data/areas.json` (Perth suburbs)
  - [x] `src/data/faqs.json` (universal FAQs per service/page as needed)
- [x] Write universal-but-realistic copy that avoids "generic template" tone.
- [x] Add Perth-local placeholders for areas served (Fremantle, Subiaco, Mount Lawley, Victoria Park, Cottesloe, etc.).

## Phase 5 - Pages (IA + Content Complete)

### Home (`src/pages/index.astro`)

- [x] Hero (swap-friendly): choose Split or Centered.
- [ ] Trust strip (optional): Local / Fast response / Fully insured (generic).
- [x] Services overview (3–6 cards).
- [ ] How it works (3 steps, universal).
- [x] Featured testimonials (3 cards) + link to testimonials page.
- [x] Areas served section (suburb chips + mini map placeholder).
- [x] Final CTA band ("Get in touch").

### About (`src/pages/about.astro`)

- [x] Hero: "A local team you can rely on".
- [x] Story block (short).
- [x] Values (3 cards).
- [ ] "What to expect" bullet list.
- [ ] Optional team mini section (placeholders).
- [x] "Local promise" callout card using the signature motif.

### Services (`src/pages/services.astro`)

- [x] Intro + quick filter chips (static OK): Popular / For homes / For businesses.
- [x] Service sections:
  - [x] Benefits bullets
  - [ ] Mini FAQ per service
  - [x] CTA to Contact
- [x] Add simple "Compare options" table (brochure clarity, not a pricing-table vibe).

### Testimonials (`src/pages/testimonials.astro`)

- [x] Rating summary block (placeholder).
- [x] Filters (static): Retail / Wellness / Trades / Other.
- [x] 9–12 testimonial cards.
- [x] Bottom CTA band.

### Contact (`src/pages/contact.astro`) (Conversion Page)

- [x] Two-column layout:
  - [x] Left: form
  - [x] Right: NAP + hours + "What happens next" steps + service area mention
- [x] Form fields:
  - [x] Name
  - [x] Email
  - [x] Phone (optional)
  - [x] Business type (select)
  - [x] Suburb
  - [x] Message
  - [x] Optional consent checkbox
- [ ] Success state (inline or separate success page).
- [x] Include Areas served section (short intro + chips) and embedded NAP in HTML.

### Privacy (`src/pages/privacy.astro`)

- [x] Simple legal page (clear, minimal, consistent styling).

## Phase 6 - SEO & GEO (LocalBusiness + Areas Served)

- [x] Titles + meta descriptions per page (unique, not hype).
- [x] Canonical URLs set correctly (respecting `site` + `base`).
- [x] OpenGraph + Twitter meta (placeholder OG image).
- [x] Add site-wide JSON-LD in `BaseLayout.astro`:
  - [x] `LocalBusiness` with name/url/telephone/address
  - [x] `areaServed` list (Perth metro + suburbs)
  - [x] `openingHoursSpecification`
  - [ ] `sameAs` placeholders
- [x] Ensure Contact page contains NAP in HTML (not schema-only).
- [x] Add `robots.txt`.
- [x] Add sitemap (if straightforward) and verify it works with the configured `site`.

## Phase 7 - Accessibility & UX Checks

- [x] Skip link works and is visible on focus.
- [x] Contrast AA compliant (especially accent on warm backgrounds).
- [x] Keyboard navigation works across nav, drawers (if any), and form inputs.
- [x] Buttons/links are real elements (no div-clicks).
- [ ] Tap targets are 44px+ on mobile.

## Phase 8 - Performance

- [x] Minimal JS (nav toggle only; optional).
- [x] Prefer system fonts; if hosted fonts used, keep to 2 families max.
- [ ] Images: responsive, explicit width/height, lazy-load below the fold.
- [x] No sliders, no heavy animation libraries.
- [x] Use CSS-only hover/focus microinteractions.

## Phase 9 - Deployment & Handoff

- [x] Add build/run instructions (README or `/docs/`):
  - [x] `npm install`
  - [x] `npm run dev`
  - [x] `npm run build`
  - [x] `npm run preview`
- [x] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [x] Acceptance checklist:
  - [x] Unique warm crafted look (motif used consistently)
  - [x] Clear nav + persistent Contact CTA
  - [x] Two hero components share identical props (easy swap)
  - [x] Pages match IA and are content-complete
  - [x] LocalBusiness JSON-LD + Areas Served sections included
  - [x] Fast and accessible (contrast, focus, minimal JS)

## Optional / Bonus

- [ ] Add a `/areas/` page for expanded suburb coverage (if you want an SEO power page).
- [ ] Add subtle paper-grain background (very light, no performance hit).
- [ ] Add a "Local" sticker/badge variant that can be reused on services/testimonials.

