/* ==========================================================================
   NOVA Studio — cursor.js
   Custom animated cursor: dot + lagging ring, hover/press/label states.
   ========================================================================== */
(function () {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  if (!finePointer) return; // touch devices: use native cursor

  // Label element inside ring ("View", "Drag"…)
  const label = document.createElement('span');
  label.className = 'cursor-label';
  ring.appendChild(label);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let dotX = mouseX, dotY = mouseY;
  let ringX = mouseX, ringY = mouseY;
  let visible = false;
  let rafId = null;

  document.body.classList.add('cursor-active');

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!visible) {
      visible = true;
      document.body.classList.add('cursor-visible');
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    visible = false;
    document.body.classList.remove('cursor-visible');
  });
  document.addEventListener('mouseenter', () => {
    visible = true;
    document.body.classList.add('cursor-visible');
  });

  // Press state
  window.addEventListener('mousedown', () => ring.classList.add('is-press'));
  window.addEventListener('mouseup', () => ring.classList.remove('is-press'));

  // Hover targets: links, buttons, and anything with data-cursor="hover"
  function bindHoverStates() {
    document.querySelectorAll('a, button, [data-cursor="hover"], input, textarea, select, .project-card').forEach((el) => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = '1';
      el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
    });
  }

  // Label mode via data-cursor-label="View"
  document.addEventListener('mouseover', (e) => {
    const t = e.target.closest('[data-cursor-label]');
    if (t) {
      label.textContent = t.dataset.cursorLabel;
      ring.classList.add('is-label');
    } else {
      ring.classList.remove('is-label');
    }
    // Yield to the native cursor over editable fields
    const editable = e.target.closest('input, textarea, select');
    document.body.classList.toggle('cursor-native', Boolean(editable));
  });

  // Animation loop — dot follows instantly, ring lerps behind
  function tick() {
    dotX += (mouseX - dotX) * 0.6;
    dotY += (mouseY - dotY) * 0.6;
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);

  // Re-bind hover states whenever the DOM changes (API-rendered content)
  const observer = new MutationObserver(bindHoverStates);
  observer.observe(document.body, { childList: true, subtree: true });
  bindHoverStates();

  // Expose a stop hook for cleanup if ever needed
  window.__novaCursor = { destroy: () => cancelAnimationFrame(rafId) };
})();
