/* A rotating point-cloud sphere. Native canvas; no image or animation dependency. */
(() => {
  const canvas = document.querySelector('.particle-sphere');
  if (!canvas) return;
  const section = canvas.closest('.particle-cta');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const sphereColor = getComputedStyle(section).getPropertyValue('--accent').trim();
  const color = sphereColor.match(/^#([0-9a-f]{6})$/i)?.[1] || 'dcc09c';
  const rgb = [0, 2, 4].map(offset => parseInt(color.slice(offset, offset + 2), 16)).join(',');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, frame = 0, visible = false, phase = 0, previousTime = 0;
  const pointer = { active: false, x: 0, y: 0, vx: 0, vy: 0 };
  const releasePointer = () => { pointer.active = false; pointer.vx = 0; pointer.vy = 0; };
  section.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const rect = section.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    pointer.vx = pointer.active ? Math.max(-30, Math.min(30, x - pointer.x)) : 0;
    pointer.vy = pointer.active ? Math.max(-30, Math.min(30, y - pointer.y)) : 0;
    pointer.x = x;
    pointer.y = y;
    pointer.active = true;
  }, { passive: true });
  section.addEventListener('pointerleave', releasePointer);
  section.addEventListener('pointercancel', releasePointer);
  window.addEventListener('blur', releasePointer);
  let seed = 307;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const points = Array.from({ length: 4600 }, () => {
    const y = random() * 2 - 1;
    const angle = random() * Math.PI * 2;
    const ring = Math.sqrt(1 - y * y);
    return { x: ring * Math.cos(angle), y, z: ring * Math.sin(angle), size: .65 + random() * .85, light: .65 + random() * .35, offset: random() * Math.PI * 2, dx: 0, dy: 0, vx: 0, vy: 0 };
  });
  function draw(time, step = 0) {
    const radius = Math.min(820 * .39, height * .39, width * .31);
    const angle = time * .075;
    const cos = Math.cos(angle), sin = Math.sin(angle);
    const tilt = -.12;
    const ct = Math.cos(tilt), st = Math.sin(tilt);
    ctx.clearRect(0, 0, width, height);
    for (const point of points) {
      const ripple = 1 + .025 * Math.sin(point.y * 7 + point.offset + time * .35);
      const x = (point.x * cos + point.z * sin) * ripple;
      const z0 = (-point.x * sin + point.z * cos) * ripple;
      const y = point.y * ct - z0 * st;
      const z = point.y * st + z0 * ct;
      const perspective = 2.9 / (2.9 - z * .48);
      const px = width / 2 + x * radius * perspective;
      const py = height / 2 + y * radius * perspective * 1.06;
      const depth = (z + 1) / 2;
      if (step > 0) {
        let ax = -point.dx * .025;
        let ay = -point.dy * .025;
        if (pointer.active) {
          const fromX = px + point.dx - pointer.x;
          const fromY = py + point.dy - pointer.y;
          const distance = Math.hypot(fromX, fromY);
          const reach = 125;
          if (distance < reach) {
            const influence = (1 - distance / reach) ** 2;
            const force = influence * 3.8 * (.45 + depth * .55);
            const nx = distance > .1 ? fromX / distance : Math.cos(point.offset);
            const ny = distance > .1 ? fromY / distance : Math.sin(point.offset);
            ax += nx * force + pointer.vx * influence * .035;
            ay += ny * force + pointer.vy * influence * .035;
          }
        }
        const damping = .86 ** step;
        point.vx = (point.vx + ax * step) * damping;
        point.vy = (point.vy + ay * step) * damping;
        point.dx += point.vx * step;
        point.dy += point.vy * step;
      }
      const opacity = (.25 + depth * .75) * point.light;
      ctx.fillStyle = `rgba(${rgb},${opacity})`;
      ctx.beginPath();
      ctx.arc(px + point.dx, py + point.dy, point.size * perspective * (.65 + depth * .65), 0, Math.PI * 2);
      ctx.fill();
    }
    if (step > 0) { pointer.vx *= .8 ** step; pointer.vy *= .8 ** step; }
  }
  function tick(timestamp) {
    frame = 0;
    if (!visible || document.hidden || reducedMotion.matches) { previousTime = 0; return; }
    const elapsed = previousTime ? Math.min((timestamp - previousTime) / 1000, .033) : 1 / 60;
    phase += elapsed;
    previousTime = timestamp;
    draw(phase, elapsed * 60);
    frame = requestAnimationFrame(tick);
  }
  function syncAnimation() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    draw(phase);
    if (visible && !document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(tick);
  }
  new ResizeObserver(() => {
    width = section.clientWidth;
    height = section.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw(phase);
  }).observe(section);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    syncAnimation();
  }).observe(section);
  document.addEventListener('visibilitychange', () => { if (document.hidden) releasePointer(); syncAnimation(); });
  reducedMotion.addEventListener('change', syncAnimation);
})();
