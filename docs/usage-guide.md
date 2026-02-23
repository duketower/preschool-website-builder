# Preschool Website Builder — Usage Guide

> **Version:** 1.0
> **Last Updated:** February 2025
> **Project Directory:** `preschool-website-builder/`

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Folder Structure](#2-folder-structure)
3. [Skills Library](#3-skills-library)
4. [Rebranding the Template](#4-rebranding-the-template)
5. [Customising the Demo Site](#5-customising-the-demo-site)
6. [Form Integration](#6-form-integration)
7. [Google Analytics 4 Setup](#7-google-analytics-4-setup)
8. [Printing the Pitch Decks](#8-printing-the-pitch-decks)
9. [Deployment Options](#9-deployment-options)
10. [Checklist Before Going Live](#10-checklist-before-going-live)

---

## 1. Project Overview

This system has four deliverables:

| Deliverable | Path | Purpose |
|---|---|---|
| **Reusable Template** | `templates/preschool-site/` | 9-page blank template with `[PLACEHOLDERS]` for any school |
| **Demo Site** | `demo-site/` | Fully populated demo for Sunshine Sprouts Preschool (Koramangala, Bengaluru) — used in sales meetings |
| **Internal Sales Deck** | `templates/pitch-decks/internal-sales-deck/` | 9-slide A4 pitch guide for sales reps |
| **Client Pitch Deck** | `templates/pitch-decks/client-deck/` | 9-slide A4 pitch for school owners |

All pages open directly in a browser via `file://` — no server, no build tools, no npm required.

---

## 2. Folder Structure

```
preschool-website-builder/
├── shared/
│   ├── css/
│   │   ├── reset.css          ← Modern CSS reset
│   │   ├── variables.css      ← All design tokens (colors, spacing, fonts)
│   │   └── utilities.css      ← Shared utility classes (buttons, cards, forms)
│   └── js/
│       ├── navbarUtils.js     ← Sticky navbar + hamburger menu
│       ├── smoothScroll.js    ← Anchor smooth scrolling
│       ├── scrollReveal.js    ← Fade-in on scroll (IntersectionObserver)
│       ├── faqAccordion.js    ← One-open-at-a-time FAQ accordion
│       ├── formValidation.js  ← Form validation with Indian phone support
│       ├── beforeAfterSlider.js ← Before/after image comparison slider
│       ├── animateCounter.js  ← Animated number counters on scroll
│       └── portfolioFilter.js ← Gallery category filter buttons
│
├── templates/
│   └── preschool-site/
│       ├── pages/             ← 9 HTML pages (all [PLACEHOLDER] text)
│       ├── css/template.css   ← All component styles
│       └── js/template.js     ← Global page initialisation
│
├── demo-site/
│   ├── pages/                 ← 9 HTML pages (Sunshine Sprouts content)
│   ├── css/demo.css           ← Demo-specific styles (before/after slider)
│   └── js/demo.js             ← Demo-specific JS (before/after init)
│
├── templates/pitch-decks/
│   ├── internal-sales-deck/   ← index.html + print.css
│   └── client-deck/           ← index.html + print.css
│
├── research/
│   ├── preschool-website-analysis.md
│   └── information-architecture.md
│
└── docs/
    └── usage-guide.md         ← This file
```

---

## 3. Skills Library

All JavaScript functionality comes from reusable skill files in `shared/js/`. Each skill is a standalone file exposing one or more `init*()` functions.

### navbarUtils.js

```js
// Sticky navbar — adds .scrolled class when page scrolls past offset
initNavbarScroll('navbar', 40);

// Hamburger toggle — opens/closes mobile nav
initHamburgerMenu('hamburger', 'navLinks');
```

Called in `template.js` on every page. The `#navbar` element gets `background` and `box-shadow` via the `.scrolled` class in `template.css`.

### smoothScroll.js

```js
// Intercepts all a[href^="#"] clicks and smooth-scrolls with offset
initSmoothScroll(80); // 80px offset for fixed navbar height
```

### scrollReveal.js

```js
// Fades in any element with class="reveal" as it enters the viewport
initScrollReveal({ threshold: 0.1, staggerMs: 100 });
```

Add `class="reveal"` to any element you want to animate in on scroll. Sibling `.reveal` elements stagger automatically.

### faqAccordion.js

```js
// One-open-at-a-time accordion — used on admissions.html
initFaqAccordion({
  itemSelector:   '.faq-item',
  triggerSelector: '.faq-question',
  activeClass:    'open',
});
```

HTML structure required:
```html
<div class="faq-item">
  <button class="faq-question">Question text?</button>
  <div class="faq-answer"><p>Answer text.</p></div>
</div>
```

### formValidation.js

```js
// Validate a form against a rules object
const rules = {
  fieldName: [
    { type: 'required', message: 'This field is required.' },
    { type: 'phone',    message: 'Enter a valid 10-digit Indian mobile number.' },
    { type: 'email',    message: 'Enter a valid email address.' },
    { type: 'minLength', value: 3, message: 'Minimum 3 characters.' },
  ],
};

validateForm(formElement, rules);   // Returns true/false
clearErrors(formElement);            // Clears all error states
initLiveValidation(formElement, rules); // Validates on blur/input
showError(fieldElement, message);    // Shows error on a specific field
```

Field `name` attributes must match the keys in the rules object.

**Indian phone validation** — accepts 10-digit numbers starting with 6, 7, 8, or 9 (`/^[6-9]\d{9}$/`).

### animateCounter.js

```js
// Animates all elements matching selector from 0 to data-target value
initCounters({ selector: '.counter[data-target]', duration: 1800 });
```

HTML:
```html
<span class="counter" data-target="500">0</span>
```

Triggered by IntersectionObserver — animation starts when the element scrolls into view.

### portfolioFilter.js

```js
// Filter gallery cards by data-category attribute
initPortfolioFilter({
  btnSelector:  '.filter-btn',
  cardSelector: '.portfolio-card',
  activeClass:  'active',
  allValue:     'all',
});
```

HTML:
```html
<!-- Filter buttons -->
<button class="filter-btn active" data-filter="all">All</button>
<button class="filter-btn" data-filter="classrooms">Classrooms</button>

<!-- Cards -->
<div class="portfolio-card" data-category="classrooms">...</div>
```

### beforeAfterSlider.js

```js
// Before/after image comparison slider
initBeforeAfterSlider({
  sliderId: 'baSlider',   // Container div ID
  beforeId: 'baBefore',  // Before-image wrapper div ID
  handleId: 'baHandle',  // Drag handle div ID
  minPct:   0.05,        // Minimum position (5%)
  maxPct:   0.95,        // Maximum position (95%)
});
```

> **Important:** The before image (`#baBeforeImg`) must have its `width` set in pixels (equal to the slider container width) so it doesn't stretch as the clip changes. See `demo-site/js/demo.js` for the `syncWidth()` helper.

HTML structure:
```html
<div id="baSlider" style="position:relative; overflow:hidden; width:100%;">
  <img src="after.jpg" style="width:100%; display:block;" />
  <div id="baBefore" style="position:absolute; top:0; left:0; width:50%; overflow:hidden;">
    <img id="baBeforeImg" src="before.jpg" style="display:block; max-width:none;" />
  </div>
  <div id="baHandle">
    <div class="ba-handle-circle"><i class="fa-solid fa-arrows-left-right"></i></div>
  </div>
</div>
```

---

## 4. Rebranding the Template

To create a website for a new school, copy the `templates/preschool-site/` folder and replace all placeholders.

### Placeholders Reference

| Placeholder | Example Replacement |
|---|---|
| `[SCHOOL NAME]` | Sunshine Sprouts Preschool |
| `[TAGLINE]` | Where Every Child Blooms |
| `[AREA]` | Koramangala |
| `[CITY]` | Bengaluru |
| `[PHONE]` | +91 98400 12345 |
| `[WHATSAPP_NUMBER]` | 919840012345 |
| `[ADDRESS]` | 45, 5th Cross, Koramangala 4th Block, Bengaluru – 560034 |
| `[EMAIL]` | admissions@schoolname.in |
| `[YEAR_ESTABLISHED]` | 2012 |
| `[WEBSITE URL]` | https://schoolname.in |
| `[STAT_FAMILIES]` | 500 |
| `[STAT_YEARS]` | 12 |
| `[STAT_SATISFACTION]` | 98 |
| `[STAT_TEACHERS]` | 8 |

### Quick Find-and-Replace

Run a global find-and-replace across all 9 HTML pages. In VS Code:

1. Open the `pages/` folder
2. Press `Cmd+Shift+H` (Mac) or `Ctrl+Shift+H` (Windows)
3. Check "Search in folder"
4. Replace each placeholder one at a time

### WhatsApp Link Format

```html
<!-- In links and buttons -->
<a href="https://wa.me/919840012345">WhatsApp Us</a>

<!-- Format: wa.me/[COUNTRY CODE][10-DIGIT NUMBER] -->
<!-- India: wa.me/91XXXXXXXXXX — no + sign, no spaces, no dashes -->
```

### Phone Link Format

```html
<a href="tel:+919840012345">+91 98400 12345</a>
<!-- tel: links use + prefix -->
```

### Updating the Local Business Schema

Each page contains a `<script type="application/ld+json">` block in `<head>`. Update these fields for the new school:

```json
{
  "@type": "Preschool",
  "name": "School Name",
  "telephone": "+91XXXXXXXXXX",
  "email": "admissions@school.in",
  "foundingDate": "YYYY",
  "address": {
    "streetAddress": "Street Address",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "560034",
    "addressCountry": "IN"
  },
  "geo": {
    "latitude": 12.9352,
    "longitude": 77.6245
  }
}
```

Get latitude/longitude from [maps.google.com](https://maps.google.com) — right-click the school location → "What's here?".

---

## 5. Customising the Demo Site

The `demo-site/` folder is the Sunshine Sprouts Preschool demo, used during sales meetings. To repurpose it for a different demo school:

1. Update all Sunshine Sprouts references (school name, address, phone, year, stats)
2. Swap the `placehold.co` placeholder images with actual school photos
3. Update testimonial names and quotes
4. Update blog post titles to match real school events
5. Update `demo-site/css/demo.css` if the colour scheme changes

### Before/After Slider (Home Page Only)

The before/after slider is in `demo-site/pages/index.html`, section `#website-comparison`. It is intentionally **not** in the template pages.

The slider is initialised in `demo-site/js/demo.js`:

```js
initBeforeAfterSlider({
  sliderId: 'baSlider',
  beforeId: 'baBefore',
  handleId: 'baHandle',
});
```

The `syncWidth()` function keeps the before image full-width as the container resizes:
```js
function syncWidth() {
  baBeforeImg.style.width = baSlider.offsetWidth + 'px';
}
window.addEventListener('resize', syncWidth);
```

---

## 6. Form Integration

All forms are **static HTML** by default — they validate on the front-end but do not submit to a server. Two integration options are ready to plug in:

### Option A — Formspree (Recommended, Free Tier Available)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form → copy the endpoint URL (`https://formspree.io/f/XXXXXXXX`)
3. Update the form tag:
   ```html
   <!-- Before (static) -->
   <form id="enquiryForm">

   <!-- After (Formspree) -->
   <form id="enquiryForm" action="https://formspree.io/f/XXXXXXXX" method="POST">
   ```
4. Remove or update the `e.preventDefault()` in the form's submit handler so the form actually submits

### Option B — Netlify Forms (Free, Works Automatically on Netlify Hosting)

1. Deploy the site on Netlify
2. Add `netlify` attribute to each form:
   ```html
   <form id="enquiryForm" netlify name="enquiry">
   ```
3. Netlify automatically captures submissions — view them in your dashboard

### Form Fields Reference

The admissions enquiry form (`#enquiryForm` on `admissions.html`) has these `name` attributes which must match the validation rules:

| Field | name attribute | Validation |
|---|---|---|
| Parent Name | `parentName` | required |
| Child Name | `childName` | required |
| Child DOB | `childDob` | required |
| Mobile | `mobile` | required, phone (Indian) |
| Programme | `programme` | required |
| How did you hear | `hearAbout` | required |
| Email | `email` | email format (optional) |
| WhatsApp consent | `whatsappConsent` | checkbox, no validation |

---

## 7. Google Analytics 4 Setup

Each page has this comment in `<head>` where GA4 should be pasted:

```html
<!-- Google Analytics 4 — replace GA_MEASUREMENT_ID with your actual ID -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> -->
```

### To activate GA4:

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get the Measurement ID (format: `G-XXXXXXXXXX`)
3. Uncomment the script tag and replace `GA_MEASUREMENT_ID`
4. Add the gtag init code immediately after:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){ dataLayer.push(arguments); }
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
5. Paste this in the `<head>` of all 9 pages (find & replace the comment block)

### Recommended GA4 Events to Track

- Form submissions: wrap the success block in `gtag('event', 'form_submit', { form_id: 'enquiryForm' })`
- WhatsApp clicks: add `onclick="gtag('event', 'whatsapp_click')"` to the WhatsApp float button
- Phone clicks: add `onclick="gtag('event', 'phone_click')"` to `tel:` links

---

## 8. Printing the Pitch Decks

Both pitch decks are designed to print to **A4 paper** with one slide per page, with backgrounds and colours preserved.

### How to Print

1. Open `templates/pitch-decks/internal-sales-deck/index.html` (or `client-deck/index.html`) in **Google Chrome** or **Safari**
2. Go to **File → Print** (or `Cmd+P`)
3. Set:
   - Paper size: **A4**
   - Margins: **None**
   - Background graphics: **Enabled** ← critical for coloured slides
4. Click **Save as PDF** or **Print**

### Troubleshooting Print Issues

| Problem | Fix |
|---|---|
| Colours missing | Enable "Background graphics" in Chrome print settings |
| Slide breaks mid-content | Each `.slide` has `page-break-inside: avoid` — this should not happen; if it does, the content is too long for one A4 page |
| Text too small | Increase font sizes in the relevant slide's CSS before printing |
| Extra blank page at end | The last `.slide` has `page-break-after: auto` to prevent this |

### Using as a Leave-Behind

Print the **client pitch deck** on A4, colour, double-sided, and laminate or bind. Leave a copy with the school owner at the end of the meeting.

---

## 9. Deployment Options

All files are static HTML — deploy anywhere that serves files.

### Option A — Netlify (Recommended, Free)

1. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Drag the school's folder (e.g., `demo-site/`) into the deploy box
3. Netlify gives you a URL instantly (e.g., `sunshine-sprouts.netlify.app`)
4. Add a custom domain in Site Settings → Domain management

> **Important:** When deploying only the demo site, upload the entire project root — not just `demo-site/pages/` — because the pages reference `../../shared/css/` and `../../templates/preschool-site/css/`. The relative paths must be preserved.

### Option B — GitHub Pages (Free)

1. Push the full project to a GitHub repository
2. Go to Settings → Pages → Branch: `main` → Folder: `/root`
3. The site is live at `username.github.io/repo-name/demo-site/pages/index.html`

### Option C — cPanel / Shared Hosting

1. Zip the full project folder
2. Upload via File Manager → Extract
3. Point the domain to the `demo-site/pages/` folder (or set `index.html` as the default document)

### Option D — Local Demo (Sales Meetings, No Internet)

Open `demo-site/pages/index.html` directly in Chrome. All assets load locally. The only elements requiring internet are:
- Google Fonts (graceful fallback to system fonts if offline)
- Font Awesome icons (icons disappear if offline — consider downloading for fully offline use)
- `placehold.co` placeholder images (grey boxes if offline — replace with real images before offline use)

---

## 10. Checklist Before Going Live

Use this checklist when delivering a finished website to a school owner.

### Content

- [ ] All 9 `[PLACEHOLDER]` values replaced with actual school content
- [ ] School name, address, phone, and email verified across all pages
- [ ] Principal name, teacher names, and bios confirmed
- [ ] Programme names and age ranges confirmed
- [ ] Important admission dates updated
- [ ] Testimonials reviewed and approved by school owner
- [ ] Gallery photos provided by school (minimum 20 photos)

### Technical

- [ ] All internal links working (test every nav link)
- [ ] WhatsApp button tested on mobile (opens correct number)
- [ ] Phone `tel:` links tested
- [ ] Enquiry form validation working (try submitting empty)
- [ ] Gallery filter buttons working
- [ ] Hamburger menu working on mobile viewport (< 768px)
- [ ] Before/after slider (demo home page) — handle drags smoothly
- [ ] Lightbox opens and closes correctly

### SEO

- [ ] Local Business JSON-LD schema updated on all pages
- [ ] `<title>` tags include school name + area + city
- [ ] Meta descriptions updated on all pages
- [ ] Geo coordinates updated (latitude/longitude for the school's address)

### Analytics & Forms

- [ ] GA4 Measurement ID added to all pages (if applicable)
- [ ] Form action URL updated (Formspree or Netlify Forms endpoint)
- [ ] Form tested end-to-end (submission received in inbox)

### Print (if delivering physical deck)

- [ ] Client pitch deck printed on A4 colour
- [ ] School name added to cover slide
- [ ] Pricing filled in before printing
- [ ] Sales rep contact details added to last slide
