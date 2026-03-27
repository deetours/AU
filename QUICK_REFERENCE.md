# ALCHEMY UNBOUNDED — QUICK REFERENCE GUIDE

## 🗺️ SITE MAP & SCENES

```
📱 HOMEPAGE (/)
├─ 1️⃣ OpeningFrame
│  └─ Hero zoom + staggered line reveals (clipPath)
├─ 2️⃣ PauseScene
│  └─ Single italic line + massive whitespace
├─ 3️⃣ ConditionedLifeScene ⭐ DARK CHARCOAL
│  └─ Villain beat with emotional copy
├─ 4️⃣ GuideScene
│  └─ Harish brief intro (3 blocks)
├─ 5️⃣ HomePathsScene ⭐ NEW
│  └─ 3-stage visitor journey (not Harish's story)
├─ 6️⃣ VoicesScene
│  └─ 3-column Before/After testimonials
├─ 7️⃣ ReturnScene
│  └─ Philosophical climax (opacity-only motion)
└─ 8️⃣ CloseScene
   └─ Final CTA → /begin (FIXED LINK ✅)

📖 ABOUT PAGE (/about)
├─ AboutIntro
│  └─ Hero + portrait + bio split
├─ LivedJourney
│  └─ 4-stage timeline (dark charcoal)
├─ HarishJourneyScene ⭐ NEW
│  └─ 5-stage horizontal scroll (his story, not visitor's)
├─ CredentialsStrip
│  └─ 6 teachers/influences grid
├─ VisionScene
│  └─ Vision quote in amber
└─ CloseScene
   └─ Reused CTA

🔧 THE WORK PAGE (/the-work)
├─ Dual Truth Hero
│  └─ What it is NOT / What it IS
├─ How Transformation Happens ⭐ NEW
│  └─ Charcoal section explaining process
├─ Three Dimensions
│  └─ Inner, Creative, Embodied life
├─ Who This Is For ⭐ NEW
│  └─ 3-column audience breakdown
└─ Quote + CTA
   └─ "Not through force..." → /offerings

🎁 OFFERINGS PAGE (/offerings)
├─ Hero
│  └─ "Three spaces..."
├─ Life Coaching
│  └─ Layout A: Image top (original)
├─ Creativity Coaching
│  └─ Layout B: Image right, text left (DIFFERENTIATED ⭐)
├─ Movement Arts
│  └─ Layout C: Full-bleed image first (DIFFERENTIATED ⭐)
├─ Comparison
│  └─ Clear differentiation (charcoal bg)
└─ CTA
   └─ "Request Discovery Call" → /begin

🛤️ JOURNEY PAGE (/journey)
├─ Hero
│  └─ "The path is not linear..."
├─ Timeline (5 Stages)
│  └─ Awareness → Unlearning → Reconnection → Expression → Integration
│  └─ Thread + dots (dots have hover: scale 1→1.5 ⭐)
└─ Reassurance
   └─ "Navigate at your own pace" → /begin

🗣️ VOICES PAGE (/voices)
├─ Hero
│  └─ "Real people. Real shifts."
├─ Testimonial Grid
│  └─ 5 stories (2-column, with portraits)
│  └─ Structure: Before | Shift | After
└─ Soft Close
   └─ "Their story could be yours" → /begin

📝 BEGIN PAGE (/begin)
├─ Main Section
│  └─ "You do not need to have it all figured out"
│  └─ What happens next (3-point list)
│  └─ "There is no pressure here. Only clarity."
├─ Form (ThresholdForm)
│  └─ Name, Email, "Where are you right now?"
├─ Contact Alternatives
│  └─ hello@alchemyunbounded.com
│  └─ WhatsApp
└─ Mobile Sticky CTA
   └─ Fixed bottom button (md:hidden)
```

---

## 🔍 QUICK DEBUGGING GUIDE

### I Found a Bug — Where Do I Look?

| Issue | File | Line Area |
|-------|------|-----------|
| CTA doesn't work | `src/components/scenes/home/CloseScene.tsx` | 36 |
| Hero looks weird | `src/components/scenes/home/OpeningFrame.tsx` | 33-70 |
| Dark section text hard to read | `src/components/scenes/home/ConditionedLifeScene.tsx` | 12 |
| Guide section too long | `src/components/scenes/home/GuideScene.tsx` | 30-68 |
| Testimonials look generic | `src/components/scenes/home/VoicesScene.tsx` | 8-60 |
| Motion feels jittery | Check Framer Motion timing (0.8-1.4s range) | Various |
| Offerings look identical | `src/app/offerings/page.tsx` | 65+ |
| Journey dots don't hover | `src/app/journey/page.tsx` | 71 |
| The-Work page too thin | `src/app/the-work/page.tsx` | 30+ |
| Broken link | `src/app/offerings/page.tsx` | 196, 199 |

### Common Edits & Locations

```
🎨 Change dark charcoal section:
   → ConditionedLifeScene.tsx:12 (bg-[#191A1D])

✏️ Update copy:
   → Search component for text, usually in motion.div

🎬 Change animation timing:
   → Look for transition={{ duration: X }}, ease: [...]

🎯 Update CTA link:
   → Search "href=" in component

⚫ Add dark background:
   → variant="charcoal" in SectionShell

🟤 Add light background:
   → variant="bone" or variant="fog"
```

---

## 🧪 TESTING CHECKLIST

### Before Going Live
- [ ] Test `/begin` CTA on homepage
- [ ] Test `/begin` CTA on about page
- [ ] Test `/begin` CTA on offerings page (all 3)
- [ ] Test `/begin` CTA on journey page
- [ ] Test `/begin` CTA on voices page
- [ ] Test form submission on `/begin`
- [ ] Check dark section (ConditionedLifeScene) text readability
- [ ] Verify pause scene looks intentional (not broken)
- [ ] Test new HomePathsScene horizontal scroll
- [ ] Test new HarishJourneyScene (About page)
- [ ] Check Offerings page has 3 different layouts
- [ ] Verify Journey dots have hover scale effect
- [ ] Test on mobile (320px viewport)
- [ ] Test on tablet (768px viewport)
- [ ] Test on desktop (1280px viewport)

### Mobile-Specific Tests
- [ ] Navigation hamburger menu works
- [ ] Sticky mobile CTA bar appears (on Begin page)
- [ ] Text is readable (not too small)
- [ ] Images load (not stretched)
- [ ] Forms are touch-friendly (large buttons)
- [ ] Testimonials 2-column grid stacks to 1

### Performance Tests
- [ ] Page loads in < 3 seconds
- [ ] Animations smooth (no jank)
- [ ] No console errors
- [ ] Images optimized
- [ ] No unused CSS/JS

---

## 📊 WHAT CHANGED

### 🔴 REMOVED
- Duplicate "You are not broken" line
- Generic quote card testimonial template
- 5 copy blocks from GuideScene
- Harish's 500vh story from homepage
- Generic headings ("What Others Say", "This Space")
- Aggressive scale transforms from ReturnScene
- y-translation from body copy animations
- `/contact` route (broken link)

### 🟢 ADDED
- Dark charcoal villain scene (ConditionedLifeScene)
- clipPath reveals on 5+ headings
- Single-line pause moment
- Visitor-focused 3-stage journey (HomePathsScene)
- Harish's 5-stage journey to About (HarishJourneyScene)
- "How Transformation Happens" section on The-Work
- "Who This Is For" section on The-Work
- Interactive hover states on Journey dots
- 2 differentiated offering templates (out of 3)
- Before/After testimonial format

### 🟡 IMPROVED
- Motion: clipPath vs y-fade (editorial vs generic)
- Copy: Removed all clichés
- Trust: Made testimonials more human
- Hierarchy: Clear emotional arc on homepage
- Contrast: 5 distinct background treatments
- Rhythm: Compress/release pacing
- Brand: More precise language throughout

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-Launch QA
- [ ] All pages load without errors
- [ ] All links functional
- [ ] Forms submit correctly
- [ ] Mobile responsive
- [ ] Performance acceptable (Lighthouse > 80)
- [ ] No console warnings/errors
- [ ] Accessibility check (WCAG 2.1 AA)

### Post-Launch Monitoring
- [ ] Monitor error logs
- [ ] Check form submissions received
- [ ] Verify analytics working
- [ ] Check page load times
- [ ] Monitor user feedback

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile (320px)       → Single column, large text
Tablet (768px)       → 2 columns where needed
Desktop (1024px+)    → Full multi-column layouts

Key Files to Check:
- Testimonials: 2-column grid (md:grid-cols-2)
- Offerings: Flex row/reverse layouts
- Form: Single column (md:flex-row)
- Navigation: Mobile menu (md:hidden)
```

---

## 🎯 KEY FILES TO MONITOR

### Critical Files (If Bug, Check Here First)
1. `src/components/scenes/home/CloseScene.tsx` — CTA route
2. `src/components/scenes/home/OpeningFrame.tsx` — Hero
3. `src/components/scenes/home/ConditionedLifeScene.tsx` — Dark section

### Recently Modified (Check for Regressions)
1. `src/app/page.tsx` — Scene imports
2. `src/app/about/page.tsx` — Scene imports
3. `src/app/offerings/page.tsx` — Layout differentiation
4. `src/app/the-work/page.tsx` — New sections

### New Files (Test Thoroughly)
1. `src/components/scenes/home/HomePathsScene.tsx` — Visitor journey
2. `src/components/scenes/about/HarishJourneyScene.tsx` — Harish story

---

## 💡 QUICK TIPS

### If Homepage Looks Broken
- Check z-index layering (OpeningFrame z-10, rest z-20)
- Check dark section colors on ConditionedLifeScene
- Verify PauseScene whitespace (py-64 md:py-96)

### If Animations Feel Wrong
- Check duration (0.8-1.4s is standard)
- Check ease: `[0.76, 0, 0.24, 1]` is preferred
- Verify clipPath transitions properly

### If Text Hard to Read
- Check color contrast on dark backgrounds
- Use #F5F2EB (bone) on #191A1D (charcoal)
- Use #D6D3CD (fog) on charcoal

### If Links Don't Work
- Check href="/begin" (not "/contact")
- Verify page routes exist in /src/app/
- Test on both desktop and mobile

---

## 🎬 VISUAL EXPECTATIONS

### Dark Section (ConditionedLifeScene)
- **Background**: #191A1D (dark charcoal)
- **Heading**: #F5F2EB (bone)
- **Body**: #D6D3CD (fog)
- **Effect**: Strong contrast, emotional impact

### Light Sections
- **Background**: #F8F7F4 or #F5F2EB (cream/bone)
- **Heading**: #1C1B1A (dark)
- **Body**: #6B6863 (stone)
- **Accents**: #B98A4A (amber)

### Testimonials Before/After
- **Before**: Italic, stone color, calm
- **Divider**: Amber line (#B98A4A)
- **After**: Serif, bold, charcoal

---

## 🔗 QUICK LINK REFERENCE

```
Home:       / or /index
About:      /about
The Work:   /the-work
Offerings:  /offerings
Journey:    /journey
Voices:     /voices
Begin:      /begin

All CTAs should point to: /begin ✅
No broken `/contact` routes ✅
```

---

**Last Updated**: 2026-03-26
**Status**: 95% Complete
**Ready**: For QA Testing
**Urgency**: Pre-launch verification needed
