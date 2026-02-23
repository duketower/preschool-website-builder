/**
 * beforeAfterSlider.js
 * ────────────────────
 * A drag/touch before-and-after image comparison slider.
 * Move a handle left/right to reveal two overlapping images.
 *
 * Usage — HTML:
 * <div id="baSlider" style="position:relative; overflow:hidden; width:100%;">
 *   <img src="after.jpg" style="width:100%; display:block;" />
 *   <div id="baBefore" style="position:absolute; top:0; left:0; width:50%; overflow:hidden;">
 *     <img src="before.jpg" style="width:[slider-container-width]px; max-width:none;" />
 *   </div>
 *   <div id="baHandle" style="position:absolute; top:0; left:50%; width:4px; height:100%; cursor:ew-resize;">
 *   </div>
 * </div>
 *
 * Usage — JS:
 * initBeforeAfterSlider();
 * initBeforeAfterSlider({ sliderId: 'mySlider', beforeId: 'myBefore', handleId: 'myHandle' });
 *
 * Source: extracted from Binary Ventures website (Website Startup project)
 */

/**
 * @param {object} options
 * @param {string} [options.sliderId='baSlider']
 * @param {string} [options.beforeId='baBefore']
 * @param {string} [options.handleId='baHandle']
 * @param {number} [options.minPct=0.05]
 * @param {number} [options.maxPct=0.95]
 */
function initBeforeAfterSlider({
  sliderId = 'baSlider',
  beforeId = 'baBefore',
  handleId = 'baHandle',
  minPct = 0.05,
  maxPct = 0.95,
} = {}) {
  const slider = document.getElementById(sliderId);
  const before = document.getElementById(beforeId);
  const handle = document.getElementById(handleId);

  if (!slider || !before || !handle) return;

  let isDragging = false;

  function setPosition(clientX) {
    const rect = slider.getBoundingClientRect();
    let pct = (clientX - rect.left) / rect.width;
    pct = Math.min(Math.max(pct, minPct), maxPct);
    const percent = pct * 100;
    before.style.width = percent + '%';
    handle.style.left = percent + '%';
  }

  slider.addEventListener('mousedown', (e) => { isDragging = true; setPosition(e.clientX); });
  slider.addEventListener('touchstart', (e) => { isDragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mousemove', (e) => { if (isDragging) setPosition(e.clientX); });
  window.addEventListener('touchmove', (e) => { if (isDragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('touchend', () => { isDragging = false; });
}
