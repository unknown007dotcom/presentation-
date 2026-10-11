/* ==========================================================================
   NOVA Studio — particles.js
   Hero background: constellation particle network that reacts to the mouse.
   Particles drift, connect with lines, and are gently attracted to (or
   repelled from) the cursor. Pauses when tab hidden; respects reduced motion.
   ========================================================================== */
(function () {
  const canvas = document.getElementById('hero-canvas') || document.getElementById('hub-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = 0, height = 0, dpr = 1;
  let particles = [];
  const mouse = { x: -9999, y: -9999, active: false };
  const LINK_DIST = 130;
  const MOUSE_DIST = 190;

  function resize() {
    const hero = canvas.parentElement;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const target = Math.min(110, Math.floor((width * height) / 16000));
    particles = Array.from({ length: target }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.7 + 0.6,
      hue: Math.random() > 0.5 ? '99, 102, 241' : '34, 211, 238',
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      // Mouse interaction — gentle attraction with a close-range repel kick
      if (mouse.active) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_DIST && dist > 0.001) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST;
          if (dist > 60) {
            p.vx += (dx / dist) * force * 0.045;
            p.vy += (dy / dist) * force * 0.045;
          } else {
            p.vx -= (dx / dist) * force * 0.09;
            p.vy -= (dy / dist) * force * 0.09;
          }
        }
      }

      // Damping + speed cap
      p.vx *= 0.985; p.vy *= 0.985;
      const speed = Math.hypot(p.vx, p.vy);
      if (speed > 1.1) { p.vx = (p.vx / speed) * 1.1; p.vy = (p.vy / speed) * 1.1; }
      if (speed < 0.12) { p.vx += (Math.random() - 0.5) * 0.05; p.vy += (Math.random() - 0.5) * 0.05; }

      p.x += p.vx; p.y += p.vy;
      if (p.x < -20) p.x = width + 20; else if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20; else if (p.y > height + 20) p.y = -20;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue}, 0.75)`;
      ctx.fill();
    }

    // Links between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.28;
          ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Lines from cursor to nearby particles
    if (mouse.active) {
      for (const p of particles) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_DIST * MOUSE_DIST) {
          const alpha = (1 - Math.sqrt(d2) / MOUSE_DIST) * 0.4;
          ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }
    }
  }

  let rafId = null;
  function loop() {
    step();
    rafId = requestAnimationFrame(loop);
  }

  function start() { if (!rafId && !reduced) rafId = requestAnimationFrame(loop); }
  function stop() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  }, { passive: true });
  canvas.parentElement.addEventListener('mouseleave', () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; });

  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  resize();
  if (reduced) { step(); } else { start(); }
})();
