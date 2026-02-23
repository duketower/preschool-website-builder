/**
 * scrollReveal.js
 * ───────────────
 * Animate elements into view as the user scrolls, using IntersectionObserver.
 * Supports staggered delays for sibling elements inside grids/lists.
 *
 * Usage — HTML:
 * Add class="reveal" to any element you want to animate in on scroll.
 *
 * Required CSS:
 * .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
 * .reveal.visible { opacity: 1; transform: none; }
 *
 * Usage — JS:
 * initScrollReveal();
 * initScrollReveal({ threshold: 0.2, staggerMs: 150 });
 *
 * Source: extracted from Binary Ventures website (Website Startup project)
 */

/**
 * @param {object} options
 * @param {number} [options.threshold=0.1]
 * @param {string} [options.rootMargin='0px 0px -60px 0px']
 * @param {number} [options.staggerMs=100]
 */
function initScrollReveal({ threshold = 0.1, rootMargin = '0px 0px -60px 0px', staggerMs = 100 } = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Number(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold, rootMargin });

  document.querySelectorAll('.reveal').forEach((el) => {
    const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
    const index = siblings.indexOf(el);
    if (siblings.length > 1) {
      el.dataset.revealDelay = index * staggerMs;
    }
    observer.observe(el);
  });
}
