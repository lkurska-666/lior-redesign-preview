/* Same interaction model as the live BYS gallery: centered variable-width cards,
   one card per arrow/swipe, looping, with the original niche links. */
(() => {
  const section = document.querySelector('.theme-gallery');
  if (!section) return;
  const viewport = section.querySelector('.theme-viewport');
  const track = section.querySelector('.theme-track');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let moving = false, finishTimer, startX = null, dragX = 0, suppressClick = false;
  const geometry = () => {
    const width = track.firstElementChild.getBoundingClientRect().width;
    const pitch = width + parseFloat(getComputedStyle(track).gap);
    // Phones: the current card starts at the page gutter and the next one peeks on the
    // right, like the other sliders (Olena 2026-11-20). Wider screens stay centred.
    const start = matchMedia('(max-width: 700px)').matches
      ? section.querySelector('.theme-gallery-heading').getBoundingClientRect().left - viewport.getBoundingClientRect().left
      : viewport.clientWidth / 2 - width / 2;
    return { pitch, base: start - 2 * pitch };
  };
  const position = (x, animate = false) => {
    track.style.transition = animate && !reduced.matches ? 'transform 450ms ease' : 'none';
    track.style.transform = `translateX(${x}px)`;
  };
  const updateActive = () => {
    [...track.children].forEach((card, i) => {
      if (i === 2) card.setAttribute('aria-current', 'true');
      else card.removeAttribute('aria-current');
    });
  };
  function move(direction) {
    if (moving) return;
    moving = true;
    const { base, pitch } = geometry();
    const finish = () => {
      clearTimeout(finishTimer);
      if (direction > 0) track.append(track.firstElementChild);
      position(geometry().base);
      moving = false;
      updateActive();
    };
    if (direction < 0) {
      track.prepend(track.lastElementChild);
      position(base - pitch);
      void track.offsetWidth;
      position(base, true);
    } else {
      position(base - pitch, true);
    }
    finishTimer = setTimeout(finish, reduced.matches ? 0 : 470);
  }
  section.querySelectorAll('[data-theme-direction]').forEach(button => button.addEventListener('click', () => move(Number(button.dataset.themeDirection))));
  viewport.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  viewport.addEventListener('pointerdown', event => {
    if (moving || event.button !== 0 || event.target.closest('a,button')) return;
    startX = event.clientX;
    dragX = 0;
    suppressClick = false;
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener('pointermove', event => {
    if (startX === null) return;
    dragX = event.clientX - startX;
    position(geometry().base + dragX);
  });
  const release = () => {
    if (startX === null) return;
    startX = null;
    suppressClick = Math.abs(dragX) > 6;
    if (Math.abs(dragX) > 50) move(dragX < 0 ? 1 : -1);
    else position(geometry().base, true);
  };
  viewport.addEventListener('pointerup', release);
  viewport.addEventListener('pointercancel', () => { startX = null; position(geometry().base); });
  viewport.addEventListener('click', event => {
    if (suppressClick) { event.preventDefault(); suppressClick = false; }
  }, true);
  new ResizeObserver(() => { if (!moving && startX === null) position(geometry().base); }).observe(viewport);
  position(geometry().base);
  updateActive();
})();
