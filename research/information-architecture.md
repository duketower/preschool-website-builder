# Information Architecture
# Preschool Website — Conversion-Focused Structure

---

## 1. Sitemap

```
Home (index.html)
├── About Us (about.html)
├── Programs (programs.html)
├── Admissions (admissions.html)
├── Facilities (facilities.html)
├── Gallery (gallery.html)
├── Testimonials (testimonials.html)
├── Blog / Activities (blog.html)
└── Contact Us (contact.html)
```

**Navigation order rationale:**
- Home → About builds trust before asking for commitment
- Programs → Admissions follows the parent's natural decision path
- Facilities → Gallery → Testimonials build compounding trust
- Contact is always last — by this point the parent should be ready to enquire

---

## 2. Page Hierarchy & Key Sections

### HOME (index.html)
**Purpose:** Create immediate trust and guide the parent to enquire.

| # | Section | Purpose | Lead Capture |
|---|---|---|---|
| 1 | Admissions Open Banner | Urgency + direct CTA | ✔ Links to Admissions |
| 2 | Navbar | Navigation + sticky CTA button | ✔ "Enquire Now" button |
| 3 | Hero | First impression, tagline, primary CTA | ✔ "Enquire Now" button |
| 4 | Trust Bar (Stats) | Social proof via numbers | — |
| 5 | About Snapshot | School story in 3 lines | → Links to About page |
| 6 | Programs Overview | Age-group cards | → Links to Programs page |
| 7 | Why Choose Us | 6 differentiators | — |
| 8 | Facilities Highlights | Safety, hygiene icons | → Links to Facilities page |
| 9 | Testimonials Carousel | 3 parent quotes | — |
| 10 | Gallery Preview | 6-photo grid | → Links to Gallery page |
| 11 | Admission CTA Strip | Urgency + enquiry CTA | ✔ Form / WhatsApp |
| 12 | Footer | NAP + quick nav | ✔ Phone + WhatsApp |
| — | WhatsApp Float Button | Always-on contact | ✔ WhatsApp |

**Content priority:** Trust before CTA. Stats and testimonials appear before any form.

---

### ABOUT US (about.html)
**Purpose:** Humanise the school — turn a brand into people parents can trust.

| # | Section | Purpose |
|---|---|---|
| 1 | Page Hero | "Our Story" headline + school photo |
| 2 | Founding Story | Year, founder's motivation, personal narrative |
| 3 | Vision & Mission | 2 short statements |
| 4 | Our Philosophy | Methodology: Montessori, play-based, phonics |
| 5 | Meet the Principal | Photo, name, qualifications, personal note |
| 6 | Our Teachers | 3 teacher cards: photo, name, qualification, years |
| 7 | Awards & Affiliations | Logos or text badges |
| 8 | CTA Strip | "Come Visit Us" → Contact page |

**Trust priority:** Principal and teacher profiles are the most important trust elements on this page.

---

### PROGRAMS (programs.html)
**Purpose:** Help parents identify the right program for their child's age.

| # | Section | Purpose |
|---|---|---|
| 1 | Page Hero | "Our Programs" — age 1.5 to 5.5 years |
| 2 | Program Cards | One card per program with age label, outcomes, activities |
| — | Playgroup | 1.5 – 2.5 years |
| — | Nursery | 2.5 – 3.5 years |
| — | LKG | 3.5 – 4.5 years |
| — | UKG | 4.5 – 5.5 years |
| 3 | Daily Schedule | Sample timetable (visual, not text-heavy) |
| 4 | Teaching Methodology | Icons: Montessori, phonics, activity-based, storytelling |
| 5 | Co-Curricular Activities | Music, dance, art, yoga, outdoor play |
| 6 | CTA Strip | "Apply for Admission" → Admissions page |

**Content priority:** Age labels must be prominent — parents scan for their child's age first.

---

### ADMISSIONS (admissions.html)
**Purpose:** Remove friction and guide the parent from intent to action.

| # | Section | Purpose | Lead Capture |
|---|---|---|---|
| 1 | Page Hero | "Join Our Family" — admissions open message | — |
| 2 | Admission Process | 4-step visual flow | — |
| — | Step 1 | Fill the online enquiry form | ✔ |
| — | Step 2 | Receive a callback within 24 hours | — |
| — | Step 3 | Schedule and attend a school visit | — |
| — | Step 4 | Submit documents and complete enrollment | — |
| 3 | Eligibility & Dates | Age criteria per program, intake dates | — |
| 4 | Documents Required | Checklist of 6 items | — |
| 5 | Enquiry Form | Full 8-field form (per form spec) | ✔ Primary |
| 6 | Callback Request | Lightweight 2-field form: name + phone | ✔ Secondary |
| 7 | FAQ Accordion | 6–8 common parent questions | — |
| 8 | Footer | Standard | ✔ Phone + WhatsApp |

**Conversion priority:** Form must appear after the 4-step process — not before. Parents need context before they commit to filling a form.

---

### FACILITIES (facilities.html)
**Purpose:** Address safety and hygiene anxieties directly with specifics.

| # | Section | Purpose |
|---|---|---|
| 1 | Page Hero | "A Safe Space to Learn and Grow" |
| 2 | Safety & Security | CCTV, gated campus, visitor log, trained staff |
| 3 | Hygiene & Health | RO water, sanitized meals, daily cleaning, hand-wash |
| 4 | Learning Spaces | Classrooms, activity room, library corner, art room |
| 5 | Outdoor Play | Play area, garden, sandbox, age-appropriate equipment |
| 6 | Infrastructure | AC, lighting, child-safe furniture, ramps |
| 7 | Medical Readiness | First aid, nurse on call, emergency protocol |
| 8 | Transport | School van, GPS, female attendant (if applicable) |
| 9 | CTA Strip | "See Our School in Person" → Contact page |

**Content priority:** Safety first, hygiene second — these are the top two parental anxieties.

---

### GALLERY (gallery.html)
**Purpose:** Show — not tell — what school life looks like. Social proof through imagery.

| # | Section | Purpose |
|---|---|---|
| 1 | Page Hero | "Life at [School Name]" |
| 2 | Filter Bar | Buttons: All / Classrooms / Outdoor Play / Art & Craft / Events / Sports Day |
| 3 | Photo Grid | Filterable cards using portfolioFilter.js |
| 4 | CTA Strip | "Schedule a Visit to See It Yourself" → Contact |

**UX note:** Filter buttons must be visually prominent — parents want to see specific areas (especially classrooms and safety-relevant spaces).

---

### TESTIMONIALS (testimonials.html)
**Purpose:** Let existing parents sell the school to prospective parents.

| # | Section | Purpose |
|---|---|---|
| 1 | Page Hero | "What Our Parents Say" |
| 2 | Testimonial Cards | Grid of 6–8 cards: name, child's class, rating, quote |
| 3 | Google Reviews CTA | "See Our Reviews on Google →" (link to GMB) |
| 4 | Video Testimonial | Embed YouTube parent testimonial (placeholder if not available) |
| 5 | CTA Strip | "Ready to Join Our Family?" → Admissions |

**Content priority:** Testimonials must be specific. Each card must mention: parent name, child's program, one specific detail about the school.

---

### BLOG / ACTIVITIES (blog.html)
**Purpose:** Show the school is active, engaged, and continuously learning.

| # | Section | Purpose |
|---|---|---|
| 1 | Page Hero | "Latest from Our Classroom" |
| 2 | Featured Post | Latest activity or event (large card) |
| 3 | Post Grid | 6 post cards: thumbnail, title, date, excerpt |
| 4 | Categories | Filter: All / Events / Activities / Tips for Parents |
| 5 | CTA Strip | "Stay Updated — Enquire for Admissions" |

**SEO note:** Blog posts with titles like "Independence Day Celebration at [School Name], [City]" drive local search traffic over time.

---

### CONTACT US (contact.html)
**Purpose:** Make it effortless for a ready parent to take the final step.

| # | Section | Purpose | Lead Capture |
|---|---|---|---|
| 1 | Page Hero | "Get in Touch" |
| 2 | Contact Details | Phone (click-to-call), WhatsApp, email, address, hours | ✔ Phone + WhatsApp |
| 3 | Google Maps Embed | Interactive map showing school location | — |
| 4 | Enquiry Form | Short 4-field form: name, phone, program, message | ✔ Primary |
| 5 | "Book a School Visit" CTA | Prominent button → triggers form focus | ✔ |
| 6 | Footer | Standard | ✔ |

**UX note:** The Contact page should have the lowest-friction form on the site — only 4 fields. Full 8-field form lives on Admissions only.

---

## 3. Lead Capture Points — Master Map

| Location | Type | Priority |
|---|---|---|
| Admissions Open Banner (all pages) | CTA link to Admissions | High |
| Navbar "Enquire Now" button (sticky) | Links to Admissions form | High |
| Hero section CTA button | Links to Admissions form | High |
| Home Admission CTA Strip | WhatsApp + form link | High |
| Admissions page — Enquiry Form | 8-field form | Primary |
| Admissions page — Callback Form | 2-field form | Secondary |
| Contact page — Enquiry Form | 4-field form | High |
| WhatsApp Float Button (all pages) | Opens WhatsApp chat | High |
| Footer — Phone + WhatsApp (all pages) | Direct contact | Medium |
| Programs page CTA | Links to Admissions | Medium |
| Testimonials page CTA | Links to Admissions | Medium |
| Gallery page CTA | Links to Contact | Low |

**Principle:** Every page must have at least one lead capture point. No page should be a dead end.

---

## 4. Trust-Building Elements Per Page

| Page | Primary Trust Element | Secondary Trust Element |
|---|---|---|
| Home | Stats bar (years, students, satisfaction) | Testimonials carousel |
| About | Principal photo + bio | Teacher profiles |
| Programs | Detailed curriculum per age group | Daily schedule |
| Admissions | Clear 4-step process | Documents checklist |
| Facilities | Safety section (CCTV, gated campus) | Hygiene section |
| Gallery | Real photos (classrooms, outdoor) | Event coverage |
| Testimonials | Specific named parent quotes | Google reviews link |
| Blog | Regular posting cadence | Named authors |
| Contact | Google Maps embed (real location) | Working hours listed |

---

## 5. Internal Linking Strategy

**Goal:** Guide parents along the trust funnel — from awareness to decision — without them having to figure out what to do next.

### Primary Flows

```
Home → Programs → Admissions (main conversion path)
Home → About → Contact (trust-first path)
Home → Gallery → Testimonials → Admissions (visual trust path)
```

### CTA Links Per Page (required)

| From Page | CTA Links To |
|---|---|
| Home | Programs, Admissions, Gallery, Contact |
| About | Contact ("Come Visit Us") |
| Programs | Admissions ("Apply Now") |
| Admissions | Contact ("Have Questions?") |
| Facilities | Contact ("See It In Person") |
| Gallery | Contact ("Schedule a Visit") |
| Testimonials | Admissions ("Join Our Family") |
| Blog | Admissions ("Enquire for Admissions") |
| Contact | Admissions (form link) |

### Cross-linking Rules

- Every page footer links to: Home, Programs, Admissions, Gallery, Contact
- The navbar must always show "Enquire Now" as a highlighted CTA button
- "Admissions Open" banner links directly to `admissions.html`
- Blog posts should internally link to Programs or Admissions where relevant

---

## 6. Navigation Structure

### Primary Navigation (Navbar)

```
[Logo]   Home   About   Programs   Admissions   Facilities   Gallery   Testimonials   Blog   Contact   [Enquire Now ←CTA button]
```

### Mobile Navigation (Hamburger)

Same links in a vertical slide-out drawer. "Enquire Now" button appears at the bottom of the drawer in full width.

### Footer Navigation (Quick Links)

```
Home | Programs | Admissions | Gallery | Contact
```

---

## 7. Page URL / File Naming Convention

| Page | File |
|---|---|
| Home | index.html |
| About Us | about.html |
| Programs | programs.html |
| Admissions | admissions.html |
| Facilities | facilities.html |
| Gallery | gallery.html |
| Testimonials | testimonials.html |
| Blog | blog.html |
| Contact | contact.html |

All files use lowercase, hyphenated names. No spaces. No special characters.

---

## 8. Mobile UX Considerations

- Hamburger menu on all viewports ≤768px
- Phone numbers must be `<a href="tel:+91...">` — tap to call
- WhatsApp button must be `<a href="https://wa.me/...">` — tap to open WhatsApp
- Forms: single-column layout on mobile, labels above fields (not placeholders-only)
- Gallery grid: 2 columns on mobile, 3 on tablet, 4 on desktop
- Program cards: full-width stack on mobile
- Google Maps embed: full-width on mobile with reduced height (300px)

---

## 9. SEO Structure Per Page

| Page | Title Tag Format | H1 | Meta Description |
|---|---|---|---|
| Home | [School] \| Preschool in [Area], [City] | Nurturing Young Minds in [Area] | [School] is a trusted preschool in [Area], [City] offering Playgroup, Nursery, LKG & UKG. Safe, hygienic, and activity-based learning. |
| About | About Us \| [School] | Our Story — [School] | Learn about [School]'s founding story, teaching philosophy, and qualified teachers in [Area], [City]. |
| Programs | Programs & Curriculum \| [School] | Programs for Every Age — 1.5 to 5.5 Years | Explore Playgroup, Nursery, LKG & UKG programs at [School] in [City]. Montessori-based, activity-led curriculum. |
| Admissions | Admissions 2025–26 \| [School] | Admissions Open for 2025–26 | Apply for admission to [School] in [Area], [City]. Limited seats. Simple 4-step process. Enquire today. |
| Facilities | Facilities & Safety \| [School] | Safe, Clean & Joyful Learning Spaces | Discover [School]'s facilities — CCTV-monitored, hygienic meals, air-conditioned classrooms, and outdoor play area. |
| Gallery | Gallery \| [School] | Life at [School] | Photos and videos from [School] — classrooms, outdoor play, art & craft, annual events, and happy moments. |
| Testimonials | Parent Testimonials \| [School] | What Our Parents Say | Read what parents say about [School] in [Area], [City]. Trusted by 500+ families since [Year]. |
| Blog | Blog & Activities \| [School] | Latest from Our Classroom | Activity updates, event recaps, and parenting tips from [School], [City]. |
| Contact | Contact Us \| [School] | Get in Touch — Visit [School] | Contact [School] in [Area], [City]. Call, WhatsApp, or fill the enquiry form. Book a free school visit today. |
