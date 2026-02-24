# Template Library — Multi-Vertical Website Builder

This directory contains website starter templates for different industries.
Each template is a self-contained folder with HTML/CSS/JS — no build tools required.

---

## Available Templates

| Template | Status | Sub-verticals Covered |
|----------|--------|----------------------|
| `preschool-site/` | ✅ Complete | Preschool, Kindergarten, Daycare |
| `medical-site/` | 🔲 Planned | Clinic, Dental, Hospital, Diagnostic Lab |
| `corporate-site/` | 🔲 Planned | Agency, IT Company, Consulting |
| `restaurant-site/` | 🔲 Planned | Restaurant, Café, Cloud Kitchen |
| `salon-site/` | 🔲 Planned | Salon, Spa, Beauty Studio |
| `local-services-site/` | 🔲 Planned | Plumber, Electrician, AC Repair |

---

## How to Build a New Template

### Step 1 — Read the Vertical Memory File
Before writing any code, read the relevant vertical file in `/memory/`:
- Education → `memory/verticals-education.md`
- Medical → `memory/verticals-medical.md`
- Corporate → `memory/verticals-corporate.md`
- Small Business → `memory/verticals-small-business.md`
- Shared patterns → `memory/verticals-universal-tech.md`

### Step 2 — Folder Structure (Use Every Time)
```
templates/[vertical]-site/
  index.html          ← Landing / Home page
  pages/
    about.html
    services.html     ← Or programs.html / menu.html
    contact.html
    [vertical-specific pages]
  css/
    variables.css     ← All CSS custom properties
    style.css         ← Main styles
  js/
    main.js           ← Nav, scroll, counters, reveal
  assets/
    images/           ← Placeholder images
    icons/            ← Any custom SVGs
  style-guide.md      ← Colors, fonts, tokens documentation
  README.md           ← Template overview and usage guide
```

### Step 3 — Always Start With This HTML Shell
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[VERTICAL-SPECIFIC DESCRIPTION]">
  <title>[Business Name] | [City] | [Vertical]</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=[FONT_1]&family=[FONT_2]&display=swap" rel="stylesheet">

  <!-- CSS -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/style.css">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "[LocalBusiness | MedicalClinic | Restaurant | etc.]",
    "name": "[Business Name]",
    "telephone": "[phone]",
    "address": { "@type": "PostalAddress", "addressLocality": "[city]", "addressCountry": "IN" }
  }
  </script>
</head>
<body id="top">

  <header class="header" data-header>
    <!-- logo + nav + CTA -->
  </header>

  <main>
    <!-- sections -->
  </main>

  <footer class="footer">
    <!-- contact + links + copyright -->
  </footer>

  <!-- WhatsApp Float -->
  <a href="https://wa.me/91XXXXXXXXXX" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
    <ion-icon name="logo-whatsapp"></ion-icon>
  </a>

  <!-- Back to Top -->
  <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
    <ion-icon name="arrow-up-outline"></ion-icon>
  </a>

  <!-- IonIcons -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <!-- Main JS -->
  <script src="js/main.js"></script>
</body>
</html>
```

### Step 4 — CSS Variables Template
```css
/* variables.css */
:root {
  /* Colors — change these for each client */
  --color-primary: [hsl value];
  --color-primary-dark: [hsl value];
  --color-accent: [hsl value];
  --color-bg: [hsl value];
  --color-surface: [hsl value];
  --color-text: [hsl value];
  --color-text-light: [hsl value];
  --color-border: [hsl value];
  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(0, 0%, 0%);

  /* Typography */
  --ff-display: '[Display Font]', sans-serif;
  --ff-body: '[Body Font]', sans-serif;
  --fs-xl: calc(2rem + 2vw);
  --fs-lg: 2rem;
  --fs-md: 1.6rem;
  --fs-sm: 1.4rem;
  --fw-bold: 700;
  --fw-medium: 500;
  --fw-regular: 400;

  /* Spacing */
  --section-padding: 80px;
  --container-max: 1200px;
  --container-pad: 24px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px hsla(0, 0%, 0%, 0.08);
  --shadow-md: 0 4px 20px hsla(0, 0%, 0%, 0.12);
  --shadow-lg: 0 8px 40px hsla(0, 0%, 0%, 0.16);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}
```

---

## Reference Repos (Inspect These Before Building)

### By Vertical — codewithsadee (HTML/CSS/JS, no build tools)
- **Restaurant**: https://github.com/codewithsadee/grilli (529★)
- **Medical/Hospital**: https://github.com/codewithsadee/doclab (126★)
- **Digital Agency**: https://github.com/codewithsadee/pixology (204★)
- **Business Agency**: https://github.com/codewithsadee/adex (153★)
- **IT Agency**: https://github.com/codewithsadee/solutry (138★)
- **Marketing Agency**: https://github.com/codewithsadee/innohub (174★)
- **Education (e-learning)**: https://github.com/codewithsadee/eduweb (224★)

### Large Template Collections
- https://github.com/learning-zone/website-templates (5853★ — 150+ templates)
- https://html5up.net — Free, Creative Commons
- https://themewagon.com/themes/ — Free Bootstrap/HTML templates
- https://htmlcodex.com — Vertical-specific free templates

---

## Shared JS (copy from `shared/js/` in this project)
- `navbarUtils.js` — sticky navbar, hamburger toggle
- `smoothScroll.js` — anchor link scrolling
- `scrollReveal.js` — scroll-triggered animations
- `animateCounter.js` — number counter animation
- `faqAccordion.js` — FAQ collapsibles
- `formValidation.js` — inline form validation
- `portfolioFilter.js` — gallery/project filtering
