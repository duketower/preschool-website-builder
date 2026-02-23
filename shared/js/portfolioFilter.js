/**
 * web/portfolioFilter.js
 * ──────────────────────
 * Zero-dependency portfolio/gallery filter by category.
 *
 * Usage — HTML:
 * <button class="filter-btn active" data-filter="all">All</button>
 * <button class="filter-btn" data-filter="classrooms">Classrooms</button>
 *
 * <div class="portfolio-card" data-category="classrooms">…</div>
 *
 * Usage — JS:
 * initPortfolioFilter();
 * initPortfolioFilter({ btnSelector: '.filter-btn', cardSelector: '.portfolio-card' });
 *
 * Source: extracted from The Digital Experts website (The Digital Experts project)
 */

/**
 * @param {object} options
 * @param {string} [options.btnSelector='.filter-btn']
 * @param {string} [options.cardSelector='.portfolio-card']
 * @param {string} [options.activeClass='active']
 * @param {string} [options.allValue='all']
 */
function initPortfolioFilter({
  btnSelector = '.filter-btn',
  cardSelector = '.portfolio-card',
  activeClass = 'active',
  allValue = 'all',
} = {}) {
  const filterBtns = document.querySelectorAll(btnSelector);
  const cards = document.querySelectorAll(cardSelector);

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove(activeClass));
      btn.classList.add(activeClass);

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === allValue || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}
