// ============================================================
// DEMO.JS — Sunshine Sprouts Preschool Demo Site
// Runs on every demo page after template.js.
// Initialises: before/after slider (home page only).
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Before/After Slider (home page only) ---
  const baSlider    = document.getElementById('baSlider');
  const baBeforeImg = document.getElementById('baBeforeImg');

  if (baSlider && baBeforeImg) {
    // Keep the "before" image as wide as the slider so clipping works correctly
    function syncWidth() {
      baBeforeImg.style.width = baSlider.offsetWidth + 'px';
    }
    syncWidth();
    window.addEventListener('resize', syncWidth);

    initBeforeAfterSlider({
      sliderId : 'baSlider',
      beforeId : 'baBefore',
      handleId : 'baHandle',
    });
  }

});
