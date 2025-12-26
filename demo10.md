Demo 10 — Small business brochure (Universal) “Local Brochure”

Astro demo prompt (no Tailwind — use design tokens + global CSS + component CSS)
Goal: a versatile 5-page brochure that can fit retail, wellness, trades, clinics, studios, consultants—but still feels distinctive (not generic template).

Style research → make it feel unique (2025–2026 direction)

To avoid “template vibes,” this demo leans into 3 current directions that are consistently showing up in modern design work:

Warm minimalism: a softer, more approachable evolution of minimal design—warm neutrals, tactile textures, calm spacing. (This shows up across design commentary and trend writeups.) 
Homes and Gardens
+1

Human/tactile details: subtle grain, paper textures, imperfect shapes, hand-drawn marks—used lightly to feel “real” in an AI-slick world. 
Creative Bloq
+1

Micro-interactions for clarity: tiny interactive cues (hover, focus, button feedback) that make a simple brochure site feel premium without heavy JS. 
Justinmind |
+1

This combination produces a site that feels friendly + trustworthy + crafted, and works for many industries.

Design concept (signature look)
Concept name: “Warm Craft Grid”

A clean grid system (credible + universal)

Warm palette + tactile surfaces (unique)

Soft “cutout” shapes and minimal icons (human)

A consistent “highlight motif” (your recognisable signature)

Signature motif ideas (pick one and apply everywhere):

Rounded pill highlight behind key words in headings

Wavy underline SVG for emphasis (same stroke style)

Corner sticker badge (“Local”, “Trusted”, “Since 2018”)

Soft section divider (thin gradient line + tiny dot)

Why NOT Tailwind for this demo

This is a “brochure” baseline meant to be:

easy to hand off to clients/devs,

easy to theme,

clean HTML,

small CSS footprint.

Use:

src/styles/global.css for tokens + base + layout utilities

component-scoped CSS only where needed (hero visuals, cards, dividers)

Design system (proper choices)
Color palettes (warm + universal, but not boring)

Choose one palette, keep it strict. Use accent sparingly.

Palette A — “Oat & Ink” (most universal)

Background: #FBF7F0 (oat)

Surface: #FFFFFF

Text: #1B1B1F (ink)

Muted text: #5B5B66

Border: rgba(27,27,31,0.10)

Accent: #C65D3A (terracotta)

Accent soft: rgba(198,93,58,0.14)

Palette B — “Sage & Clay” (wellness + trades friendly)

Background: #F6F8F4

Text: #141A16

Muted: #5E6A63

Accent: #3B7C6A (sage-teal)

Accent warm pop: #D08B5B (clay)

Uniqueness trick: add a single “signature” tone (terracotta/sage) and repeat it consistently in: badges, links, icon strokes, and pricing/CTA highlights.

Typography (warm, readable, modern)

To feel premium and unique, use a soft serif for headings + clean sans for body (classic brochure hierarchy).

Recommended pairing (hosted fonts optional):

Headings: Fraunces (600–700) or Libre Baskerville (700)

Body: Inter (400–600) or system-ui stack

Type scale

H1: clamp(2.2rem, 4vw, 3.2rem)

H2: clamp(1.6rem, 2.5vw, 2.1rem)

Body: 1.05rem (slightly larger than default)

Line height: 1.55–1.7

Brochure feel: slightly tighter tracking on headings (letter-spacing: -0.02em), generous paragraph spacing.

Layout & spacing rules (the “brochure rhythm”)

Container max width: 1100–1200px

Section padding: 72–96px desktop, 44–56px mobile

Cards: 16px radius, subtle border, soft shadow only on hover

Content line length: max 65ch

Components & visual patterns
Buttons (1 primary, 1 secondary)

Primary: solid accent, white text, strong focus ring

Secondary: outline + subtle accent background on hover

Microcopy under primary CTA:

“Reply within 1 business day”

“No obligation”

Cards

Use a consistent card system across services/testimonials:

icon → title → 2 lines text → “Learn more”

hover raises slightly (CSS only)

Icons

Inline SVG set (stroke style consistent):

Map pin, Phone, Clock, Shield, Sparkle, Check

Section separators (subtle, signature)

Use one of:

thin gradient rule + tiny dot at left

faint “paper grain” background + border line

alternating surface blocks (bg / surface / bg)

This keeps it warm and scannable without looking corporate.

Information architecture + page-by-page spec
Global navigation (clear, consistent)

Header (sticky optional):

Left: logo wordmark (text)

Middle: Home / Services / About / Testimonials

Right: Contact button (accent)

Mobile: hamburger → simple drawer (minimal JS) OR no JS (details/summary).

Persistent CTA: “Contact” always visible.

/ Home (brochure landing)

Sections in order

Hero (swap component easily: Split or Centered)

Trust strip: “Local”, “Fast response”, “Fully insured” (generic, optional)

Services overview: 3–6 cards

How it works: 3 steps (universal)

Featured testimonials: 3 cards + link to testimonials page

Areas served: Perth suburbs list + mini map placeholder

Final CTA band: strong “Get in touch”

/about/ (human + credibility)

Hero: “A local team you can rely on”

Story block (short)

Values (3 cards)

“What to expect” (bullets)

Team mini section (optional placeholders)

Unique touch: include a “Local promise” callout card with the signature motif.

/services/ (universal service layout)

Intro + quick filter chips (static is fine): “Popular / For homes / For businesses”

Service sections:

Each service has: benefits bullets + mini FAQ + CTA

Add a “Compare options” table (simple) for brochure clarity

/testimonials/

Rating summary block (placeholder)

Filters: “Retail / Wellness / Trades / Other” (static)

9–12 testimonial cards

CTA band at bottom

/contact/ (conversion page)

Two-column layout

Left: form

Right: NAP + hours + “What happens next” steps

Form fields:

Name, Email, Phone (optional), Business type (select), Suburb, Message

Consent checkbox (optional)

Submit success state (static success page or inline)

Footer includes:

NAP, service area, ABN optional

Extra requirement: two hero layouts (swap-friendly)
HeroSplit.astro (text left, image right)

Look

Text column: H1 + short paragraph + CTA row

Image column: rounded large image + small “sticker” badge overlay (signature motif)

Under CTAs: 3 proof bullets with icons

Use cases

Trades, retail, services

HeroCentered.astro (centered + background image)

Look

Full-width background image with dark-to-light gradient overlay for readability

Centered H1 + subcopy + CTA

Under CTA: trust chips (Local / Fast response / Friendly support)

Use cases

Wellness, studios, clinics

Implementation rule: both heroes accept same props:

title, subtitle, primaryCta, secondaryCta, image, chips[]
So swapping is one line in index.astro.

Hero clarity best practices: keep CTA labels short, ensure contrast, keep copy concise. 
LogRocket Blog
+1

Data-driven content (so it’s reusable for any business)

Create data files:

src/data/services.json

src/data/testimonials.json

src/data/areas.json (Perth suburbs)

src/data/faqs.json

This makes it “universal” while still feeling curated.

SEO / GEO spec (LocalBusiness + Areas served)
JSON-LD

Add one JSON-LD block sitewide (BaseLayout):

@type: LocalBusiness (or more specific when adapting)

name, url, telephone, address

areaServed (list of suburbs / Perth metro)

openingHoursSpecification

sameAs (social links placeholders)

Also add on Contact page:

embedded NAP in HTML (not only schema)

Areas served section (important)

On Home + Contact:

short intro sentence: “Serving Perth metro including…”

12–24 suburb chips + “View all areas” link (optional)

natural “near me” phrasing lightly (no spam)

Performance rules (brochure-fast)

Minimal JS (nav toggle only; optional)

Prefer system fonts; if hosted fonts, keep to 2 families max

Images: responsive, explicit width/height, lazy load below fold

No sliders, no heavy animation libraries

Use CSS-only hover/focus microinteractions

Microinteractions should be subtle: button press states, card hover lift, form focus glow. 
Justinmind |
+1

Astro project structure (recommended)

src/pages/: index.astro, about.astro, services.astro, testimonials.astro, contact.astro

src/layouts/BaseLayout.astro

src/components/:

Header.astro, FooterNAP.astro

HeroSplit.astro, HeroCentered.astro

ServiceCard.astro, TestimonialCard.astro

AreasServed.astro, CTASection.astro, FAQ.astro

src/styles/global.css

src/data/*.json

Acceptance checklist (what “done” means)

Unique warm “crafted” look (motif used consistently)

Clear nav + persistent contact CTA

Two hero components with same props (easy swap)

Pages match IA and are content-complete

LocalBusiness JSON-LD + Areas Served sections

Fast and accessible: good contrast, focus states, minimal JS