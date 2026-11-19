/* Preview-only composition studies. The main A2 page is unchanged. */
(() => {
  const kind = document.body.dataset.heroObject;
  const visual = document.querySelector('.hero-product');
  const descriptions = { cursor: 'An ivory sculptural cursor in a thin frame', bag: 'A sculptural beige shopping bag' };
  visual.setAttribute('aria-label', descriptions[kind]);
  const image = visual.querySelector('img');
  image.src = `assets/hero-objects/${kind}-${kind === 'cursor' ? 'v2' : 'v1'}.png`;
  image.alt = '';
  image.loading = 'eager';
})();
