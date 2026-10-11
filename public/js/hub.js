/* ==========================================================================
   hub.js — renders the seminar deck grid from the API
   ========================================================================== */
(async function () {
  const grid = document.getElementById('seminar-grid');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );
  const observe = (root) =>
    root.querySelectorAll('.reveal:not(.observed)').forEach((el) => {
      el.classList.add('observed');
      revealObserver.observe(el);
    });
  observe(document);

  try {
    const res = await fetch('/api/seminars');
    const data = await res.json();
    if (!data.ok) throw new Error('bad payload');

    const chip = document.getElementById('deck-count-chip');
    if (chip) chip.textContent = `${data.items.length} decks`;

    grid.innerHTML = '';
    data.items.forEach((s, i) => {
      const a = document.createElement('a');
      a.href = `/seminar/${s.slug}`;
      a.className = 'seminar-card reveal';
      a.style.setProperty('--card-accent', s.theme.accent);
      a.style.transitionDelay = `${(i % 3) * 90}ms`;
      a.dataset.cursorLabel = 'Open';
      a.innerHTML = `
        <div class="sc-thumb">
          <div class="sc-theme-bar"></div>
          <img src="/${s.images.web}" alt="${s.title}" loading="lazy" />
          <span class="sc-subject">${s.subject}</span>
        </div>
        <div class="sc-body">
          <h3 class="sc-title">${s.title}</h3>
          <div class="sc-meta">
            <span><i class="dot"></i>${s.slides} slides</span>
            <span><i class="dot"></i>${s.minutes}</span>
            <span><i class="dot"></i>${s.theme.name}</span>
          </div>
          <div class="sc-foot">
            <span class="sc-vibe">${s.vibe}</span>
            <span class="sc-cta">Present
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
          </div>
        </div>`;
      grid.appendChild(a);
    });
    observe(grid);
  } catch (err) {
    grid.innerHTML = '<p style="color:#8b93a8;grid-column:1/-1">Could not load seminars — is the API running?</p>';
    console.error(err);
  }
})();
