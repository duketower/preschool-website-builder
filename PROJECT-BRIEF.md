# Preschool Website Builder — Project Brief

> This file is the single source of truth for this project. Refer to it when resuming work across sessions.

---

## What This Project Is

A complete, production-ready system to build preschool websites for Indian preschools. Includes:

- A reusable website template
- A live demo site for sales pitches (Sunshine Sprouts Preschool)
- Two A4 printable HTML pitch decks (internal sales + client-facing)
- Supporting documentation

---

## Execution Rules

1. Work STEP BY STEP. Do NOT generate everything at once.
2. After completing each step, STOP and wait for confirmation.
3. Do not place any files in the root directory except `.gitignore` and `README.md`.
4. Organize all files into the folder structure defined below.
5. Use semantic naming conventions and scalable architecture.
6. Reuse components wherever possible.
7. Avoid generic content — use realistic Indian preschool context.
8. All outputs must be pitch-ready without manual editing.

---

## Technology Constraints

- **HTML, CSS, and vanilla JavaScript only.** No frameworks, no build tools, no npm.
- All pages must work by opening the `.html` file directly in a browser (no server required).
- Use **Google Fonts** (Nunito for body, Poppins for headings) via `<link>` tags.
- Use **Font Awesome 6** via CDN for icons.
- Use **CSS custom properties** (variables) for all colors and spacing.
- For placeholder images, use `https://placehold.co/` with descriptive alt text.
- WhatsApp links must use the format: `https://wa.me/919999999999`

---

## Skills Library

Reusable JavaScript skills live in `shared/js/`. Copied from:
`https://github.com/duketower/Claude-skills/web/`

| File | Purpose | Use In |
|---|---|---|
| `navbarUtils.js` | Sticky navbar, hamburger menu toggle | All pages |
| `smoothScroll.js` | Smooth anchor link scrolling | All pages |
| `scrollReveal.js` | Scroll-triggered reveal animations | All pages |
| `faqAccordion.js` | Collapsible FAQ sections | Admissions page |
| `formValidation.js` | Client-side form validation with inline errors | All forms |
| `beforeAfterSlider.js` | Interactive before/after image comparison slider | Demo site home page |
| `animateCounter.js` | Animated number counters | Home page stats section |
| `portfolioFilter.js` | Filter gallery items by category | Gallery page |

**Rule:** Always use skills from library before writing custom JS.

---

## Design System

### Color Palette

```css
--color-primary: #FF6B6B;       /* coral red */
--color-secondary: #4ECDC4;     /* teal */
--color-accent: #FFE66D;        /* yellow */
--color-bg: #FFF9F0;            /* warm off-white */
--color-text: #2D3436;          /* near black */
--color-text-light: #636E72;    /* muted gray */
--color-white: #FFFFFF;
--color-border: #E0E0E0;
```

### Typography

- Headings: Poppins, 700 weight
- Body: Nunito, 400/600 weight
- Base size: 16px
- Line height: 1.6

### Tone

- Warm, trustworthy, child-friendly but professional
- Accessible contrast ratios (WCAG AA minimum)

---

## Project Structure

```
preschool-website-builder/
│
├── .gitignore
├── README.md
├── PROJECT-BRIEF.md              ← this file
│
├── research/
│   └── preschool-website-analysis.md
│
├── shared/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── utilities.css
│   ├── js/
│   │   ├── common.js
│   │   ├── navbarUtils.js
│   │   ├── smoothScroll.js
│   │   ├── scrollReveal.js
│   │   ├── faqAccordion.js
│   │   ├── formValidation.js
│   │   ├── beforeAfterSlider.js
│   │   ├── animateCounter.js
│   │   └── portfolioFilter.js
│   └── components/
│       ├── navbar.html
│       ├── footer.html
│       └── whatsapp-button.html
│
├── templates/
│   ├── preschool-site/
│   │   ├── pages/
│   │   │   ├── index.html
│   │   │   ├── about.html
│   │   │   ├── programs.html
│   │   │   ├── admissions.html
│   │   │   ├── facilities.html
│   │   │   ├── gallery.html
│   │   │   ├── testimonials.html
│   │   │   ├── blog.html
│   │   │   └── contact.html
│   │   ├── css/
│   │   │   └── template.css
│   │   ├── js/
│   │   │   └── template.js
│   │   └── assets/
│   │       └── README.md
│   │
│   └── pitch-decks/
│       ├── internal-sales-deck/
│       │   ├── index.html
│       │   └── print.css
│       └── client-deck/
│           ├── index.html
│           └── print.css
│
├── demo-site/
│   ├── pages/
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── programs.html
│   │   ├── admissions.html
│   │   ├── facilities.html
│   │   ├── gallery.html
│   │   ├── testimonials.html
│   │   ├── blog.html
│   │   └── contact.html
│   ├── css/
│   │   └── demo.css
│   ├── js/
│   │   └── demo.js
│   └── assets/
│       └── README.md
│
└── docs/
    └── usage-guide.md
```

### Component Reuse Rule

- `shared/components/` — elements reused across both template and demo site
- `shared/js/` — all JavaScript skills and utilities
- `templates/preschool-site/` — template-specific styles and pages only
- `demo-site/` — overrides shared components with Sunshine Sprouts branding

---

## Demo School Identity

- **Name:** Sunshine Sprouts Preschool
- **Location:** Koramangala, Bengaluru
- **Tagline:** "Where Every Child Blooms"
- **Phone:** +91 98400 12345
- **WhatsApp:** +91 98400 12345
- **Programs:**
  - Playgroup: 1.5 – 2.5 years
  - Nursery: 2.5 – 3.5 years
  - LKG: 3.5 – 4.5 years
  - UKG: 4.5 – 5.5 years

---

## Primary Goal

Create a reusable system to build preschool websites that function as:
- Trust-building platforms
- Lead generation tools
- Admissions conversion tools

## Decision Priorities

1. Parent trust
2. Lead generation
3. Mobile-first usability
4. Low-bandwidth performance
5. Ease of use for school staff

---

## Step-by-Step Execution Plan

### SETUP — Project Structure
Create all folders and empty placeholder files. Copy all skills into shared/js/.
→ STOP and wait for confirmation.

### STEP 1 — Research Phase
File: `research/preschool-website-analysis.md`
Content: UX patterns, trust signals, admission workflows, lead gen, local SEO, mistakes.
Reference brands: Kidzee, EuroKids, Birla Open Minds, Bachpan, Little Millennium, Hello Kids, Kangaroo Kids.
→ STOP and wait for confirmation.

### STEP 2 — Information Architecture
Sitemap, page hierarchy, key sections, lead capture points, trust elements, internal linking.
→ STOP and wait for confirmation.

### STEP 3 — Reusable Template
9 pages with full JS functionality using skills library. Stats bar (animateCounter.js). Gallery filtering (portfolioFilter.js). Lightbox custom JS. Template placeholders: [SCHOOL NAME], [CITY], [PHONE].
→ STOP and wait for confirmation.

### STEP 4 — Demo Site (Sunshine Sprouts)
Template populated with Sunshine Sprouts content. beforeAfterSlider.js comparison section on home page only.
→ STOP and wait for confirmation.

### STEP 5 — Internal Sales Deck
9 slides for sales reps. A4 @media print with page-break-after: always.
→ STOP and wait for confirmation.

### STEP 6 — Client-Facing Deck
9 slides for school owners. Same A4 print requirements.
→ STOP and wait for confirmation.

### STEP 7 — Documentation
File: `docs/usage-guide.md`
Covers: rebranding, demo customization, form integration, print guide, GA4, deployment.
→ STOP and wait for confirmation.

---

## Enquiry Form Specification

All admission and callback forms across both the template and demo site must follow this standard:

**Field order:**
1. Parent Name (required)
2. Child's Name (required)
3. Child's Date of Birth (required)
4. Mobile Number (required, primary — not email)
5. Program of Interest — dropdown: Playgroup / Nursery / LKG / UKG (required)
6. How did you hear about us? — dropdown: Google Search / Friend/Neighbour / Social Media / Hoarding / Other
7. Email Address (optional)
8. WhatsApp opt-in checkbox: "Send me school updates on WhatsApp"

**After submission:** Show inline success message — *"Thank you! Our team will call you within 24 hours."*

**Validation rules (using formValidation.js):**
- Parent Name: required, minLength:2
- Child Name: required
- Mobile: required, phone (10-digit Indian)
- Program: required
- Email: email (only if filled)

---

## Footer Specification

Every page footer must include:
- School name + tagline
- Phone number (click-to-call `tel:` link)
- WhatsApp link (`https://wa.me/...`)
- Physical address (one line)
- Quick nav links: Home, Programs, Admissions, Gallery, Contact
- Copyright line

---

## Admissions Page — Documents Required Section

The Admissions page must include a "Documents Required" checklist section:
- Recent passport-size photographs (4 copies)
- Child's birth certificate (original + photocopy)
- Address proof (Aadhaar card / utility bill)
- Parent/guardian Aadhaar card copy
- Previous school records (if applicable)
- Medical/immunization certificate

---

## "Admissions Open" Banner Specification

All pages (template and demo site) must include a dismissible top banner:
> "Admissions Open for 2025–26 — Limited Seats Available. Enquire Now →"

- Appears below the navbar on all pages
- Links to the Admissions page
- Uses `--color-accent` (#FFE66D) background with dark text
- Dismissible via a close (×) button (vanilla JS)

---

## Important Constraints

- No lorem ipsum — realistic Indian preschool content only
- No duplication of before/after comparison between demo site and pitch decks
- Always use skills library before writing custom JS
- Forms must be static with integration comments
- Pitch decks must print to A4 without manual adjustment
- Placeholder images (placehold.co) must use Indian school context in alt text — e.g., "Children playing in classroom, Sunshine Sprouts Preschool". Never use alt text implying foreign or non-Indian context.

---

## Verification Checklist

- [ ] Open each HTML file directly in browser — no server needed
- [ ] Test hamburger menu on mobile viewport (480px)
- [ ] Test gallery filter buttons
- [ ] Test form validation (submit empty form)
- [ ] Test before/after slider on demo home page
- [ ] Test counter animations on home page scroll
- [ ] Print pitch deck: File → Print → A4 → verify page breaks
