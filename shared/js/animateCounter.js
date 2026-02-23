/**
 * animateCounter.js
 * ─────────────────
 * Animate a number from 0 to a target value when it scrolls into view.
 * Uses ease-out cubic easing for a natural feel.
 *
 * Usage — HTML:
 * <span class="counter" data-target="250">0</span>
 *
 * Usage — JS:
 * initCounters();
 * initCounters({ selector: '.stat-number[data-target]', duration: 2000 });
 *
 * Source: extracted from Binary Ventures website (Website Startup project)
 */

/**
 * Animate a single element from 0 to its data-target value.
 * @param {HTMLElement} el
 * @param {number} [duration=1800]
 */
function animateCounter(el, duration = 1800) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;

  const start = performance.now();

  function step(timestamp) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(step);
}

/**
 * @param {object} options
 * @param {string} [options.selector='.counter[data-target]']
 * @param {number} [options.duration=1800]
 * @param {number} [options.threshold=0.5]
 */
function initCounters({ selector = '.counter[data-target]', duration = 1800, threshold = 0.5 } = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, duration);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}
