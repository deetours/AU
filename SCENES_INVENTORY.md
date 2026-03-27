# SCENES INVENTORY — Complete Component Map

## 🏠 HOMEPAGE (`/src/app/page.tsx`)

### Current Scene Structure (in order)

```
Home (main)
├── Layer 1: z-10 (sticky hero layer)
│   └── OpeningFrame.tsx
│       ├── Sticky hero with dolly zoom scale: 1 → 2.5
│       ├── 4 staggered headline lines (clipPath reveals)
│       ├── Subtext: "Transformational coaching..."
│       └── Scroll cue indicator
│
└── Layer 2: z-20 (physical narrative layer - slides OVER hero)
    ├── 1️⃣ PauseScene.tsx
    │   ├── Single line in serif italic
    │   ├── Massive whitespace (py-64 md:py-96)
    │   └── "Most people never stop long enough to notice."
    │
    ├── 2️⃣ ConditionedLifeScene.tsx
    │   ├── Dark charcoal background (#191A1D)
    │   ├── Heading: "A life can work on paper"
    │   ├── Body copy with emotional pain naming
    │   ├── clipPath reveal on heading
    │   └── Closing: "But still feel like someone else's."
    │
    ├── 3️⃣ GuideScene.tsx
    │   ├── Split layout: image left, text right
    │   ├── Heading: "I am Harish." (clipPath reveal)
    │   ├── Brief bio paragraph
    │   ├── Italic quote: "Slowness as intelligence..."
    │   └── Link: "Read my journey" → /about
    │
    ├── 4️⃣ PathsScene.tsx ⚠️ NEEDS REBUILD
    │   ├── h-[500vh] sticky horizontal scroll container
    │   ├── Floating heading: "A Moment That Changes Everything"
    │   ├── Progress bar (amber scaleX)
    │   ├── 5 horizontal slides (Harish's story):
    │   │   ├── Scene 1: Disconnection
    │   │   ├── Scene 2: The Collapse
    │   │   ├── Scene 3: The Turning
    │   │   ├── Scene 4: Realization
    │   │   └── Scene 5: New Identity
    │   └── Proceed text between slides
    │
    ├── 5️⃣ VoicesScene.tsx
    │   ├── Heading: "From people who have crossed..." (clipPath)
    │   ├── 3-column grid (mobile: 1-col)
    │   └── 3 Before/After story blocks:
    │       ├── Before: italic stone text
    │       ├── Amber divider
    │       └── After: serif bold text
    │
    ├── 6️⃣ ReturnScene.tsx
    │   ├── The Moment label (amber)
    │   ├── Heading: "There has to be..." (clipPath reveal)
    │   ├── Giant faint "It is to return." (opacity-10)
    │   ├── Opacity-only scroll animation (no scale/y)
    │   ├── Relief statement
    │   ├── "It's a call." (emphasized)
    │   └── Final closing line
    │
    └── 7️⃣ CloseScene.tsx
        ├── Opening copy about space
        ├── Heading: "If something here resonates..."
        ├── Italic emphasis: "it is already happening."
        └── MagneticCTA: "Begin with a conversation" → /begin
```

---

## 📖 ABOUT PAGE (`/src/app/about/page.tsx`)

### Current Scene Structure

```
About (main)
├── 1️⃣ AboutIntro.tsx
│   ├── Hero image with gradient overlay
│   ├── Heading: "A lifelong student..."
│   ├── Split section: image + bio text
│   └── Quote about working with people
│
├── 2️⃣ LivedJourney.tsx
│   ├── Dark charcoal background
│   ├── 4-stage journey with thumbnails:
│   │   ├── THE EARLY FRICTION
│   │   ├── THE BREAKING POINT
│   │   ├── THE UNLEARNING
│   │   └── THE RETURN
│   ├── Left: thumbnail + label
│   └── Right: serif quotes
│
├── 3️⃣ CredentialsStrip.tsx
│   ├── Heading: "My work is informed by..."
│   ├── 6-teacher grid:
│   │   ├── Eric Maisel
│   │   ├── Jill Badonsky
│   │   ├── Somatic Experiencing
│   │   ├── Vedic Philosophy
│   │   ├── Jungian Psychology
│   │   └── Modern Mindfulness
│   └── 2-3 columns (responsive)
│
├── 4️⃣ VisionScene.tsx
│   ├── Centered italic quote in amber
│   ├── "A space for real transformation..."
│   └── Button: "Walk with me" → /begin
│
└── 5️⃣ CloseScene.tsx (reused from home)
    └── Same as homepage CloseScene
```

---

## 🔧 THE-WORK PAGE (`/src/app/the-work/page.tsx`)

### Current Scene Structure (INCOMPLETE)

```
The-Work (main)
├── 1️⃣ Dual Truth Hero
│   ├── Left column: "What this is NOT"
│   │   └── Not advice, motivation, surface-level
│   │
│   └── Right column: "What this IS"
│       └── Process of seeing clearly, unlearning, living truthfully
│
├── 2️⃣ The Three Dimensions (charcoal background)
│   ├── Inner Life (Awareness, clarity, unlearning)
│   ├── Creative Life (Expression, originality)
│   └── Embodied Life (Presence, resilience, grounding)
│
└── 3️⃣ Quote Section
    ├── "Not through force..."
    └── CTA: "See the paths" → /offerings
```

**❌ MISSING SECTIONS:**
- [ ] What This Isn't (expanded dark section)
- [ ] How Transformation Happens
- [ ] Who This Is For
- [ ] More conceptual depth

---

## 🎁 OFFERINGS PAGE (`/src/app/offerings/page.tsx`)

### Current Scene Structure

```
Offerings (main)
├── 0️⃣ Page Hero
│   ├── "Three spaces. One deeper movement."
│   └── Italic: "A return to yourself."
│
├── 1️⃣ Life Coaching Offering Block (TEMPLATE)
│   ├── Full-width image (aspect-[21/9])
│   ├── Heading + headline
│   ├── Who/What 2-column grid
│   ├── Format strip (gray background)
│   └── CTA: "Explore Life Coaching" → /begin
│
├── 2️⃣ Creativity Coaching Offering Block (IDENTICAL TEMPLATE)
│   ├── Full-width image
│   ├── Heading + headline
│   ├── Who/What 2-column grid
│   ├── Format strip
│   └── CTA: "Explore Creativity Coaching" → /begin
│
├── 3️⃣ Movement Arts Training Offering Block (IDENTICAL TEMPLATE)
│   ├── Full-width image
│   ├── Heading + headline
│   ├── Who/What 2-column grid
│   ├── Format strip
│   └── CTA: "Explore Movement Arts" → /begin
│
├── 4️⃣ Comparison Strip (charcoal)
│   ├── "Not sure which path to take?"
│   ├── 3-column comparison:
│   │   ├── Life Coaching description
│   │   ├── Creativity description
│   │   └── Movement description
│
└── 5️⃣ Soft CTA Section
    ├── "Begin with a conversation."
    └── Button: "Request Discovery Call" → /begin
```

**❌ NEEDS:** Differentiated templates (currently all identical)

---

## 🛤️ JOURNEY PAGE (`/src/app/journey/page.tsx`)

### Current Scene Structure

```
Journey (main)
├── 0️⃣ Page Hero
│   ├── "The path is not linear."
│   └── "But it is clear."
│
├── 1️⃣ Timeline Container (Main Scene)
│   ├── Static thread line (gray, opacity-20)
│   ├── Active amber thread (scaleY based on scroll)
│   │
│   └── 5 Stages with alternating layout:
│       ├── STAGE 1: Awareness
│       │   ├── Ghost numeral "1" (opacity-5%)
│       │   ├── Stage label
│       │   ├── Heading
│       │   └── Description
│       │
│       ├── STAGE 2: Unlearning
│       │   └── [same structure, reversed]
│       │
│       ├── STAGE 3: Reconnection
│       │   └── [same structure]
│       │
│       ├── STAGE 4: Expression
│       │   └── [same structure, reversed]
│       │
│       └── STAGE 5: Integration
│           └── [same structure]
│
└── 2️⃣ Reassurance Block (charcoal)
    ├── Message: "This is not linear. Navigate at your own pace."
    └── CTA: "Take the first step" → /begin
```

**Note:** Stage dots have `whileHover={{ scale: 1.5 }}`

---

## 🗣️ VOICES PAGE (`/src/app/voices/page.tsx`)

### Current Scene Structure

```
Voices (main)
├── 0️⃣ Page Hero
│   └── "Real people. Real shifts."
│
├── 1️⃣ Testimonial Grid (2-column, responsive)
│   ├── Person 1: Elena M. (Architect, London)
│   │   ├── Portrait image (circular)
│   │   ├── Before: "successful, exhausted, emotionally flat"
│   │   ├── Shift: transformation moment
│   │   ├── After: "My life finally feels like mine."
│   │   └── Attribution
│   │
│   ├── Person 2: David K. (Founder, Berlin)
│   │   └── [same structure, offset position]
│   │
│   ├── Person 3: Sarah J. (Novelist, NYC)
│   │   └── [same structure]
│   │
│   ├── Person 4: Michael T. (Executive, Toronto)
│   │   └── [same structure, offset]
│   │
│   └── Person 5: Priya V. (Designer, Bangalore)
│       └── [same structure]
│
└── 2️⃣ Soft Close Section (bone background)
    ├── "Their story could be yours."
    └── CTA: "Begin with a conversation" → /begin
```

---

## 📝 BEGIN PAGE (`/src/app/begin/page.tsx`)

### Current Scene Structure

```
Begin (main)
├── 0️⃣ Main Section (min-h-screen, centered)
│   ├── Heading: "You do not need to have it all figured out."
│   │
│   ├── 2-Column Section (md: flex-row, mobile: stack)
│   │   ├── Left: "What happens next"
│   │   │   ├── We begin with a conversation
│   │   │   ├── You share where you are
│   │   │   └── We explore whether this is the right fit
│   │   │
│   │   └── Right: "There is no pressure here. Only clarity."
│   │
│   ├── 1️⃣ ThresholdForm.tsx (embedded)
│   │   ├── Name input
│   │   ├── Email input
│   │   ├── "Where are you right now?" textarea
│   │   ├── Message: "No spam. No automation..."
│   │   └── Submit: MagneticCTA
│   │
│   ├── Alternative Contact Section
│   │   ├── "— or reach out directly —"
│   │   ├── hello@alchemyunbounded.com (link)
│   │   └── WhatsApp (link)
│   │
│   └── Sticky Mobile CTA Bar (fixed bottom, md:hidden)
│       └── "Request Discovery Call" button
```

---

## 🔄 SHARED COMPONENTS (Used Across Pages)

### Navigation & Layout
- **NavBar.tsx** — Fixed top navigation with blur backdrop
- **Footer.tsx** — Dark footer with links
- **SmoothScrollProvider.tsx** — React Lenis wrapper
- **SectionShell.tsx** — Section wrapper (variants: bone, charcoal, fog)

### Common Elements
- **EditorialHeading.tsx** — Serif heading utility
- **MagneticCTA.tsx** — Interactive button with magnetic pull
- **QuietCTA.tsx** — Subtle link button
- **ScrollProgress.tsx** — Fixed progress bar at top
- **ThresholdForm.tsx** — Contact form (on Begin page)

---

## 📋 COMPLETE SCENE REFERENCE TABLE

| Page | Scene # | Component Name | Status | Notes |
|------|---------|-----------------|--------|-------|
| **HOME** | 1 | OpeningFrame | ✅ Complete | Dolly zoom + clipPath headlines |
| | 2 | PauseScene | ✅ Complete | Single line pause |
| | 3 | ConditionedLifeScene | ✅ Complete | Dark charcoal villain |
| | 4 | GuideScene | ✅ Complete | Brief Harish intro |
| | 5 | PathsScene | ⚠️ Needs Rebuild | Harish story → move to About |
| | 6 | VoicesScene | ✅ Complete | Before/After format |
| | 7 | ReturnScene | ✅ Complete | Opacity-only animation |
| | 8 | CloseScene | ✅ Complete | CTA fixed |
| **ABOUT** | 1 | AboutIntro | ✅ Complete | Hero + bio |
| | 2 | LivedJourney | ✅ Complete | 4-stage journey |
| | 3 | CredentialsStrip | ✅ Complete | 6 teachers |
| | 4 | VisionScene | ✅ Complete | Vision quote |
| | 5 | CloseScene | ✅ Complete | Reused CTA |
| **THE-WORK** | 1 | Dual Hero | ⚠️ Incomplete | Missing sections |
| | 2 | Three Dimensions | ⚠️ Incomplete | Could expand |
| | 3 | Quote + CTA | ⚠️ Incomplete | Minimal |
| **OFFERINGS** | 1-3 | Offering Blocks | ⚠️ Needs Differentiation | All identical templates |
| | 4 | Comparison Strip | ✅ Complete | Charcoal comparison |
| | 5 | Soft CTA | ✅ Complete | Gentle close |
| **JOURNEY** | 1 | Timeline | ✅ Complete | 5 stages + thread |
| | 2 | Reassurance | ✅ Complete | Charcoal close |
| **VOICES** | 1 | Testimonial Grid | ✅ Complete | 5 stories |
| | 2 | Soft Close | ✅ Complete | Gentle CTA |
| **BEGIN** | 1 | Form Section | ⚠️ Needs Enhancement | Add micro-ritual |
| | 2 | Mobile CTA Bar | ✅ Complete | Sticky button |

---

## 🎯 DEBUGGING TIPS

### Quick Scene Lookup
- Need to find a scene? Search for `.tsx` files in `/src/components/scenes/[page-name]/`
- All scene files follow naming: `[SceneName].tsx`
- All are exported as `export default function [SceneName]()`

### Console Debug
To inspect a scene in browser console:
```javascript
// Find which scene is rendering
document.querySelector('section').nextElementSibling?.className
// Check z-index layering on home
document.querySelectorAll('section').forEach((s, i) =>
  console.log(`Scene ${i}:`, s.className)
)
```

### Quick Modifications
1. **Hero animation** → OpeningFrame.tsx:33
2. **Villain scene colors** → ConditionedLifeScene.tsx:12
3. **Testimonial format** → VoicesScene.tsx:8
4. **Guide section** → GuideScene.tsx:30
5. **CTA routes** → CloseScene.tsx:36, Begin.tsx:116

---

## 🚀 READY FOR TIER 4: PATHSSCENE REBUILD

Current status:
- ✅ All other scenes working perfectly
- ⚠️ PathsScene needs to be split into:
  1. **HarishJourneyScene** (new file → About page)
  2. **HomePathsScene** (new file → Homepage, visitor-focused)

This is the critical rebuild remaining.

