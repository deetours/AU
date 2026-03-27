# NEXT STEPS & REMAINING WORK

## ✅ COMPLETED (Ready to Test)

### Homepage Improvements
- [x] Fixed broken `/contact` → `/begin` CTA link
- [x] Removed duplicate "You are not broken" copy
- [x] Dark charcoal villain scene (ConditionedLifeScene)
- [x] Single-line pause scene (PauseScene)
- [x] Simplified guide introduction (GuideScene: 8 blocks → 3)
- [x] Updated testimonials section to Before/After format (3 columns)
- [x] Updated all section headings with clipPath reveals (vs. generic y-fade)
- [x] Simplified ReturnScene animation (opacity only, removed scale+y)
- [x] Reduced body copy animation (removed y-translation)
- [x] Updated CTAs to warmer language
- [x] Journey page: Added hover states to stage dots

### Current State by Page
- **Home**: ~85% complete (needs new PathsScene for visitor journey)
- **About**: ~90% complete (solid structure)
- **The Work**: ~70% complete (needs enrichment)
- **Offerings**: ~85% complete (good structure, templates could differentiate)
- **Journey**: ~90% complete (thread works, dots have hover)
- **Voices**: ~95% complete (best testimonial structure)
- **Begin**: ~85% complete (form works, could add ritual)

---

## 🚀 TIER 4: PathsScene Restructuring (HIGH PRIORITY)

### Current Issue
The PathsScene (5 horizontal scroll sections about Harish's story) is currently on the **Homepage** taking 500vh of scroll. According to the audit, this should be:
1. Moved to the **About page** (where Harish's story belongs)
2. Replaced on the **Homepage** with a visitor-focused recognition journey

### What to Build

#### A. Move to About Page
1. Copy current PathsScene and create new `HarishJourneyScene.tsx`
2. Add to About page after `CredentialsStrip`
3. Rename sections from generic "Scene 1-5" to thematic labels
4. This becomes Harish's transformation story on his biography page

#### B. Build New HomePathsScene
Replace the 500vh horizontal scroll with a vertical 300vh recognition journey focused on the **visitor**, not Harish.

**3 scenes instead of 5:**

```
Scene 1: "The Performing Life"
Emotional truth: You built a career. An identity. Success.
And then something started asking: Is this it?

Scene 2: "The Quiet Misalignment"
Emotional truth: Not a crisis. Not a breakdown.
Just a persistent sense that the life you're living
was designed by someone else.

Scene 3: "The Turn"
Emotional truth: Transformation doesn't begin with action.
It begins with honesty.
With the first moment you stop pretending
the surface is enough.
```

**Technical:**
- Remove horizontal scroll container (h-[500vh] sticky)
- Use regular vertical sections with staggered reveals
- Each section uses clipPath reveals for headings
- Use amber color highlights for key phrases
- Total height: ~300vh instead of 500vh

---

## 🎨 TIER 5: Inner Page Enrichment

### The-Work Page (Currently: 3 sections → Need: 6-7 sections)

**Missing sections to add:**

1. **"What This Isn't" Section** (dark charcoal)
   - This is not advice
   - Not motivation
   - Not surface-level self-improvement

2. **"What This Is" Section** (light bone)
   - A process of seeing clearly
   - Unlearning deeply
   - Living more truthfully

3. **"How Transformation Happens" Section** (charcoal)
   - Not through force
   - Through awareness, attention, honesty, and sustained practice

4. **"Who This Is For" Section** (light)
   - People navigating inner change
   - Creative professionals with blocks
   - Those seeking embodied presence

### Offerings Page (Currently: Identical templates)

**Goal**: Differentiate the three offerings structurally while maintaining consistency

Current structure (all 3 identical):
1. Image (full width, top)
2. Title + Headline
3. Who/What grid
4. Format strip
5. CTA

**Proposed differentiation:**

**Offering 1 - Life Coaching**
- Keep current layout (image top)
- Add: One testimonial quote below format strip

**Offering 2 - Creativity Coaching**
- Reverse layout: Image right, text left
- Add color accent: Amber left border on main heading
- Add: One key insight pullquote

**Offering 3 - Movement Arts**
- Full-bleed image section first
- Then text section below
- Add: One video embed (if available)

**Result**: Same information, different visual rhythm = each path feels distinct

### Journey Page (Already solid, minor polish)

- [x] Hover states on dots (added)
- [ ] Raise ghost numerals visibility: opacity-5% → opacity-8% (desktop), opacity-12% (mobile)
- [ ] Add subtle color change on hover: dot border charcoal → amber

### Begin Page (Conversion page)

- [ ] Add subtle background gradient instead of flat bone
- [ ] Add micro-ritual: After form submit, show one reflective journal prompt
  - Example: "Before you hang up — what's one thing you're ready to stop pretending about?"
  - This creates a memorable micro-moment and increases perceived value

---

## 🔄 Remaining Motion & Polish

### Motion System Audit
- [x] clipPath reveals on major headings
- [x] Opacity-only body copy animation
- [x] Simplified complex animations (ReturnScene)
- [ ] Consider slide-in animations for image reveals on inner pages
- [ ] Add subtle parallax (NOT scroll-jacking parallax) on testimonial cards
- [ ] Ghost text opacity refinement (Journey page)

### Color & Contrast
- [x] Dark section added (ConditionedLifeScene)
- [x] All text colors updated for accessibility
- [ ] Add amber accent glow moments on scroll (2-3 strategic places)
- [ ] Consider subtle color transitions between sections

### Typography Refinement
- [ ] Verify type scale consistency across all pages
- [ ] Ensure headline hierarchy is clear (H1 > H2 > H3)
- [ ] Check line lengths for readability (max-w-prose is good standard)

---

## 🧪 Testing Checklist

### Functional Testing
- [ ] All CTAs route to correct pages
- [ ] Forms submit without errors
- [ ] Links to other pages work
- [ ] Navigation menu functional on mobile/desktop

### Visual Testing (Desktop)
- [ ] ConditionedLifeScene dark background renders correctly
- [ ] Text is readable on dark background
- [ ] PauseScene whitespace feels intentional (not broken)
- [ ] clipPath reveals animate smoothly
- [ ] ReturnScene text doesn't clip or resize awkwardly
- [ ] Colors feel consistent across pages
- [ ] Testimonial 3-column format displays correctly

### Mobile Testing
- [ ] Horizontal scroll sections work (PathsScene)
- [ ] PauseScene doesn't look cramped
- [ ] ConditionedLifeScene text is readable (font size check)
- [ ] CTAs are thumb-friendly
- [ ] Sticky mobile CTA bar on Begin page works
- [ ] No layout shifts or unexpected overflow

### Performance Testing
- [ ] Animations are smooth (60fps)
- [ ] No jank on scroll-heavy pages
- [ ] Images load quickly
- [ ] Lenis smooth scroll works correctly

---

## 📅 Recommended Sequence

### Week 1
1. Test all completed changes on localhost
2. Build new HomePathsScene (visitor journey)
3. Move current PathsScene to About page
4. Test and iterate

### Week 2
1. Enrich The-Work page (add 3-4 missing sections)
2. Differentiate Offerings page templates
3. Add micro-ritual to Begin page
4. Polish Journey page ghost numerals

### Week 3
1. Add accent color moments (amber glows)
2. Fine-tune typography hierarchy
3. Final mobile testing
4. Performance audit

---

## 🎯 Success Criteria

The site should feel:
- **Premium**: Through restraint, precision, intentionality
- **Cinematic**: Through pacing, section transitions, emotional arc
- **Human**: Through voice, specificity, lived experience
- **Unbounded**: Through space, possibility, invitation (not pressure)

**Specific metrics:**
- ✓ No generic copy phrases
- ✓ Each page has distinct visual personality
- ✓ Scroll rhythm: compress/release/compress/release
- ✓ All CTA links work
- ✓ Testimonials feel like witness stories, not endorsements
- ✓ Motion adds clarity, never decoration

---

## 📝 Implementation Notes

### File Organization
All scene components are in `/src/components/scenes/[page-name]/`
All shared components are in `/src/components/shared/`
Page routes are in `/src/app/[route]/page.tsx`

### Color & Motion Tokens
- Colors: Defined in `globals.css` as CSS variables (`--color-brand-*`)
- Motion: Use Framer Motion with consistent timing (0.8-1.4s)
- Easing: Prefer `[0.76, 0, 0.24, 1]` for editorial reveals

### Git Workflow Suggestion
1. Create branch: `rebuild/homepage-restructure`
2. Complete Tier 4 (PathsScene)
3. Push, PR, test on staging
4. Complete Tier 5 (Inner pages)
5. Final polish, merge to main

---

## 🚨 Critical Items

**MUST DO:**
1. ✓ Fix broken CTA link (DONE)
2. ✓ Remove duplicate copy (DONE)
3. [ ] Build new visitor-focused HomePathsScene
4. [ ] Verify all changes work on mobile

**SHOULD DO:**
1. ✓ Add dark villain scene (DONE)
2. [ ] Enrich The-Work page
3. [ ] Add micro-rituals (Begin page)
4. [ ] Polish testimonials (already good, just verify)

**NICE TO HAVE:**
1. [ ] Differentiate Offerings page
2. [ ] Add accent color moments
3. [ ] Fine-tune typography

---

## Questions to Ask During Testing

1. Does the homepage emotional arc feel complete? (Recognition → Discomfort → Relief → Guide → Vision → Invitation)
2. Do the dark and light sections create rhythm?
3. Does the pause scene actually feel like a pause?
4. Are the clipPath reveals more interesting than y-fades?
5. Do the testimonials feel like witness stories or endorsements?
6. Is the hero copy clear and differentiated?
7. Does the guide scene feel premature or appropriate?

---

**Remember**: The best feature of this rebuild is not what we added, but what we removed. Less noise. More precision. Every element earns its place.
