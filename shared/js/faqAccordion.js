/**
 * faqAccordion.js
 * ───────────────
 * Accessible FAQ accordion — one item open at a time, with aria-expanded support.
 *
 * Usage — HTML:
 * <div class="faq-item">
 *   <button class="faq-question" aria-expanded="false">Question text</button>
 *   <div class="faq-answer">Answer text</div>
 * </div>
 *
 * Required CSS:
 * .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
 * .faq-item.active .faq-answer { max-height: 500px; }
 *
 * Usage — JS:
 * initFaqAccordion();
 * initFaqAccordion({ itemSelector: '.accordion', triggerSelector: '.accordion-header' });
 *
 * Source: extracted from Binary Ventures website (Website Startup project)
 */

/**
 * @param {object} options
 * @param {string} [options.itemSelector='.faq-item']
 * @param {string} [options.triggerSelector='.faq-question']
 * @param {string} [options.activeClass='active']
 */
function initFaqAccordion({
  itemSelector = '.faq-item',
  triggerSelector = '.faq-question',
  activeClass = 'active',
} = {}) {
  document.querySelectorAll(triggerSelector).forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest(itemSelector);
      const isOpen = item.classList.contains(activeClass);

      document.querySelectorAll(`${itemSelector}.${activeClass}`).forEach((openItem) => {
        openItem.classList.remove(activeClass);
        openItem.querySelector(triggerSelector)?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add(activeClass);
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
