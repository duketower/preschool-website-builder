// ============================================================
// TEMPLATE.JS — Global Initialization
// Runs on every page. Initializes all shared skills and
// handles: admissions banner dismiss, gallery lightbox.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar ---
  initNavbarScroll('navbar', 40);
  initHamburgerMenu('hamburger', 'navLinks');

  // --- Smooth Scroll ---
  initSmoothScroll(80);

  // --- Scroll Reveal ---
  initScrollReveal({ threshold: 0.1, staggerMs: 100 });

  // --- Admissions Banner Dismiss ---
  const banner      = document.getElementById('admissionsBanner');
  const bannerClose = document.getElementById('bannerClose');
  if (banner && bannerClose) {
    // Keep banner visible every session — remove localStorage check for demo/pitch use
    bannerClose.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }

  // --- Gallery Lightbox ---
  initLightbox();

});

// ============================================================
// LIGHTBOX — Vanilla JS, no dependencies
// Triggered by clicking any .portfolio-card on gallery pages.
// ============================================================
function initLightbox() {
  const galleryItems = document.querySelectorAll('.portfolio-card');
  const lightbox     = document.getElementById('lightbox');
  if (!galleryItems.length || !lightbox) return;

  const lightboxImg     = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxClose   = lightbox.querySelector('.lightbox-close');
  const lightboxPrev    = lightbox.querySelector('.lightbox-prev');
  const lightboxNext    = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  const images = [];

  galleryItems.forEach((item, i) => {
    const img = item.querySelector('img');
    if (img) {
      images.push({ src: img.src, alt: img.alt });
      item.addEventListener('click', () => openLightbox(i));
    }
  });

  function openLightbox(index) {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showImage(index) {
    if (!images[index]) return;
    lightboxImg.src = images[index].src;
    lightboxImg.alt = images[index].alt;
    if (lightboxCaption) lightboxCaption.textContent = images[index].alt;
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft'  && lightboxPrev) lightboxPrev.click();
    if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
  });
}
