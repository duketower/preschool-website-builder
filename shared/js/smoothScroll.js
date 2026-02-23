/**
 * web/smoothScroll.js
 * ───────────────────
 * Smooth-scrolls anchor links (`<a href="#section">`) with a configurable
 * offset so the target isn't hidden behind a sticky navbar.
 *
 * Usage:
 * initSmoothScroll(); // default 80 px offset
 * initSmoothScroll(64); // custom navbar height
 *
 * Source project: Binary Ventures — Website Startup
 */

/**
 * Enables smooth scrolling for all in-page anchor links.
 *
 * @param {number} offset — px to subtract from the target position to
 * account for a sticky navbar (default 80)
 */
function initSmoothScroll(offset = 80) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
