/* ==========================================================================
   seminar.js — renders a seminar as a full scrolling WEBSITE
   Data: /api/seminars/:slug · list: /api/seminars (for prev/next pager)
   ========================================================================== */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const main = $('#sem-main');
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let deck = null;
  let presenter = null;
  let list = [];

  const imgPath = (key) => `/${key === 'ai' ? deck.images.ai : key === 'web' ? deck.images.web : deck.images[key] || key}`;
  const initials = () => presenter.name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

  /* ---------------- theme ---------------- */
  const FONTS = {
    Sora: '"Sora", "Inter", system-ui, sans-serif',
    Fraunces: '"Fraunces", Georgia, "Times New Roman", serif',
    'Space Grotesk': '"Space Grotesk", "Inter", system-ui, sans-serif',
  };
  function applyTheme(t) {
    const b = document.body;
    b.style.setProperty('--accent', t.accent);
    b.style.setProperty('--soft', t.soft);
    b.style.setProperty('--bg', t.bg);
    b.style.setProperty('--ink', t.ink);
    b.style.setProperty('--disp', FONTS[t.font] || FONTS.Fraunces);
    b.dataset.mode = t.mode || 'light';
    b.dataset.pattern = t.pattern || 'dots';
    b.dataset.theme = deck ? deck.slug : '';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t.bg);
  }

  /* ---------------- section renderers ---------------- */
  function head(s, num) {
    return `
      <span class="sem-num" aria-hidden="true">${num}</span>
      <p class="sem-sec-kicker rv">${esc(deck.subject)}</p>
      <h2 class="sem-sec-title rv">${esc(s.title)}</h2>`;
  }

  function bulletsHtml(items) {
    return `<ul class="b-list">${items
      .map((it, i) => `<li class="rv"><span class="b-num">${String(i + 1).padStart(2, '0')}</span><div><div class="b-t">${esc(it.t)}</div>${it.d ? `<div class="b-d">${esc(it.d)}</div>` : ''}</div></li>`)
      .join('')}</ul>`;
  }

  function sectionFor(s, i) {
    const num = deck.slug === 'body-mechanics' ? `FIG.${String(i).padStart(2, '0')}` : String(i).padStart(2, '0');
    const alt = i % 2 === 0 ? ' alt' : '';
    let inner = '';
    switch (s.layout) {
      case 'agenda':
        inner = `
          <p class="sem-sec-kicker rv">Overview</p>
          <h2 class="sem-sec-title rv">What this seminar covers</h2>
          <ul class="toc-list">
            ${s.items.map((it, k) => `<li class="rv"><a href="#sec-${k + 2}" data-cursor="hover"><span class="toc-num">${String(k + 1).padStart(2, '0')}</span>${esc(it)}</a></li>`).join('')}
          </ul>`;
        break;
      case 'definition':
        inner = `
          <p class="sem-sec-kicker rv">Definition</p>
          <div class="def-block">
            <h2 class="def-term rv">${esc(s.term)}</h2>
            <p class="def-text rv">${esc(s.text)}</p>
            ${s.highlight ? `<div class="def-highlight rv">${esc(s.highlight)}</div>` : ''}
          </div>`;
        break;
      case 'bullets':
        inner = head(s, num) + bulletsHtml(s.items);
        break;
      case 'grid':
        inner = `
          ${head(s, num)}
          <div class="g-grid">
            ${s.cards.map((c) => `<div class="g-card rv" data-tilt><span class="g-idx">◆</span><h3 class="g-t">${esc(c.t)}</h3><p class="g-d">${esc(c.d)}</p></div>`).join('')}
          </div>`;
        break;
      case 'split':
        inner = `
          <div class="split-grid${i % 4 === 1 ? '' : ' rev'}">
            <div>
              ${head(s, num)}
              ${bulletsHtml(s.items)}
            </div>
            <div class="split-media rv">
              <img src="${imgPath(s.image)}" alt="${esc(s.title)}" loading="lazy" />
              <p class="split-cap">${esc(s.caption || '')}</p>
            </div>
          </div>`;
        break;
      case 'table':
        inner = `
          ${head(s, num)}
          <table class="t-table rv">
            <thead><tr>${s.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
            <tbody>${s.rows.map((r) => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join('')}</tbody>
          </table>`;
        break;
      case 'summary':
        inner = `
          ${head(s, num)}
          <ul class="sum-list">${s.items.map((it) => `<li class="rv">${esc(it)}</li>`).join('')}</ul>`;
        break;
      default:
        inner = head(s, num);
    }
    // one image inside the section that carries it
    if (s.img) {
      inner += `<figure class="sec-fig rv"><img src="/${s.img}" alt="${esc(s.imgCap || s.title)}" loading="lazy" /><figcaption>${esc(s.imgCap || '')}</figcaption></figure>`;
    }
    // distribute the live animated model into its related section
    if (s.live) inner += `<p class="live-kicker rv">${esc(LIVE_TITLES[deck.slug] || 'Live model')}</p>${liveBand(deck.slug).replace('class="lv-stage"', 'class="lv-stage rv"')}`;
    return `<section class="sem-section${alt}" id="sec-${i}"><div class="sem-wrap">${inner}</div></section>`;
  }

  /* ---------------- live animated diagrams (one per topic) ---------------- */
  const LIVE_TITLES = {
    'body-mechanics': 'Live model · the stable lift',
    'body-alignment': 'Live model · aligned vs slouched',
    'social-mobility': 'Live model · climbing the ladder',
    'emotional-development': 'Live model · a feeling heart',
    'emotions-lifespan': 'Live model · the emotional life line',
    'parkinsons-disease': 'Live model · tremor & dopamine',
  };
  function liveBand(slug) {
    return `<div class="lv-stage">${liveSvg(slug)}</div>`;
  }
  function liveSvg(slug) {
    const A = 'var(--accent)';
    const M = 'var(--muted)';
    const svgs = {
      'body-mechanics': `
        <svg class="lv" viewBox="0 0 560 220" fill="none" aria-hidden="true">
          <line x1="20" y1="200" x2="540" y2="200" stroke="${M}" stroke-width="2" opacity=".5"/>
          <line x1="118" y1="200" x2="246" y2="200" stroke="${A}" stroke-width="6" stroke-linecap="round" class="lv-fade"/>
          <line x1="180" y1="34" x2="180" y2="196" stroke="${A}" stroke-width="2" stroke-dasharray="5 9" class="lv-dash"/>
          <circle cx="180" cy="66" r="14" stroke="${M}" stroke-width="3"/>
          <path d="M180 82 L180 132" stroke="${M}" stroke-width="3" stroke-linecap="round"/>
          <path d="M180 132 L214 154 L208 196" stroke="${M}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M180 132 L148 156 L156 196" stroke="${M}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M180 96 L216 118" stroke="${M}" stroke-width="3" stroke-linecap="round"/>
          <rect x="214" y="106" width="48" height="42" rx="9" stroke="${A}" stroke-width="3"/>
          <circle class="lv-pulse" cx="180" cy="132" r="6" fill="${A}"/>
          <circle class="lv-pulse d2" cx="214" cy="154" r="5" fill="${A}"/>
          <circle class="lv-pulse d3" cx="148" cy="156" r="5" fill="${A}"/>
          <path class="lv-float" d="M330 160 L330 92 M330 92 l-11 15 M330 92 l11 15" stroke="${A}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M410 120 a46 46 0 0 1 92 0" stroke="${M}" stroke-width="3" stroke-linecap="round"/>
          <line x1="456" y1="120" x2="456" y2="164" stroke="${M}" stroke-width="3" class="lv-sway"/>
          <circle class="lv-pulse d2" cx="456" cy="170" r="7" fill="${A}"/>
        </svg>`,
      'body-alignment': `
        <svg class="lv" viewBox="0 0 560 220" fill="none" aria-hidden="true">
          <line x1="20" y1="204" x2="540" y2="204" stroke="${M}" stroke-width="2" opacity=".5"/>
          <circle cx="150" cy="42" r="13" stroke="#16a34a" stroke-width="3"/>
          <path class="lv-draw" style="--len:160" d="M150 57 L150 200" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
          <circle class="lv-pulse" cx="150" cy="86" r="5" fill="#16a34a"/>
          <circle class="lv-pulse d2" cx="150" cy="128" r="5" fill="#16a34a"/>
          <circle class="lv-pulse d3" cx="150" cy="166" r="5" fill="#16a34a"/>
          <circle cx="392" cy="46" r="13" stroke="#dc2626" stroke-width="3"/>
          <path class="lv-draw d2" style="--len:180" d="M392 61 C 376 88, 388 108, 376 130 C 366 152, 380 176, 372 200" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/>
          <circle class="lv-pulse d2" cx="381" cy="96" r="5" fill="#dc2626"/>
          <circle class="lv-pulse d3" cx="375" cy="140" r="5" fill="#dc2626"/>
          <circle class="lv-pulse" cx="376" cy="178" r="5" fill="#dc2626"/>
          <path class="lv-float" d="M470 120 h44 M514 120 l-12 -9 M514 120 l-12 9" stroke="${A}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      'social-mobility': `
        <svg class="lv" viewBox="0 0 560 220" fill="none" aria-hidden="true">
          <path d="M30 200 h110 v-44 h110 v-44 h110 v-44 h110 v-40 h70" stroke="${M}" stroke-width="3" opacity=".7"/>
          <g class="lv-climb">
            <circle cx="70" cy="168" r="12" fill="${A}"/>
            <path d="M70 180 l0 0" stroke="${A}"/>
          </g>
          <path class="lv-float" d="M480 60 L480 24 M480 24 l-11 14 M480 24 l11 14" stroke="${A}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path class="lv-float d3" d="M120 60 h56 M176 60 l-12 -9 M176 60 l-12 9" stroke="${M}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle class="lv-pulse d2" cx="250" cy="156" r="5" fill="${A}"/>
          <circle class="lv-pulse d3" cx="360" cy="112" r="5" fill="${A}"/>
        </svg>`,
      'emotional-development': `
        <svg class="lv" viewBox="0 0 560 220" fill="none" aria-hidden="true">
          <path class="lv-beat" d="M280 160 C 236 122, 240 78, 280 96 C 320 78, 324 122, 280 160 Z" fill="${A}" opacity=".9"/>
          <path class="lv-float" d="M140 96 c -10 16 -10 26 0 30 c 10 -4 10 -14 0 -30 Z" stroke="${A}" stroke-width="3"/>
          <g class="lv-spin"><circle cx="430" cy="80" r="16" stroke="${A}" stroke-width="3"/>
            <path d="M430 54 v-10 M430 116 v-10 M404 80 h-10 M466 80 h-10 M412 62 l-8 -8 M456 106 l-8 -8 M448 62 l8 -8 M404 106 l8 -8" stroke="${A}" stroke-width="3" stroke-linecap="round"/></g>
          <path class="lv-float d2" d="M170 160 a26 26 0 0 0 52 0" stroke="${A}" stroke-width="3" stroke-linecap="round"/>
          <path class="lv-float d3" d="M380 158 l10 -18 l10 18" stroke="${A}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      'emotions-lifespan': `
        <svg class="lv" viewBox="0 0 560 220" fill="none" aria-hidden="true">
          <path class="lv-draw" style="--len:620" d="M24 150 C 84 92, 140 172, 204 122 S 320 88, 380 128 S 496 108, 536 118" stroke="${A}" stroke-width="4" stroke-linecap="round"/>
          <circle class="lv-pulse" cx="60" cy="126" r="5" fill="${A}"/>
          <circle class="lv-pulse d2" cx="170" cy="140" r="6.5" fill="${A}"/>
          <circle class="lv-pulse d3" cx="290" cy="106" r="8" fill="${A}"/>
          <circle class="lv-pulse d4" cx="400" cy="122" r="9.5" fill="${A}"/>
          <circle class="lv-pulse d5" cx="510" cy="114" r="11" fill="${A}"/>
        </svg>`,
      'parkinsons-disease': `
        <svg class="lv" viewBox="0 0 560 220" fill="none" aria-hidden="true">
          <path class="lv-ecg" d="M20 110 h70 l10 -22 l10 40 l10 -18 h40 l4 -6 l4 8 l4 -8 l4 8 l4 -8 l4 8 l4 -6 h40 l12 -30 l12 52 l12 -22 h60 l4 -6 l4 8 l4 -8 l4 8 l4 -6 h150" stroke="${A}" stroke-width="3" stroke-linejoin="round"/>
          <circle class="lv-ring" cx="440" cy="52" r="12" stroke="${A}" stroke-width="2"/>
          <circle class="lv-pulse" cx="440" cy="52" r="9" fill="${A}"/>
          <rect x="40" y="168" width="230" height="12" rx="6" stroke="${M}" stroke-width="2" opacity=".6"/>
          <rect class="lv-bar" x="42" y="170" width="226" height="8" rx="4" fill="${A}"/>
          <path class="lv-float d2" d="M330 176 c -8 12 -8 20 0 24 c 8 -4 8 -12 0 -24 Z" stroke="${A}" stroke-width="3"/>
        </svg>`,
    };
    return svgs[slug] || '';
  }

  /* ---------------- render ---------------- */
  function render() {
    const cover = deck.slides[0];
    const rest = deck.slides.slice(1);
    const closing = rest.find((s) => s.layout === 'end');

    $('#sem-subject').textContent = deck.subject;
    $('#sem-topic').textContent = deck.title;

    const kw = (deck.theme.keywords || []).map((k) => `<span>${esc(k)}</span><i>✦</i>`).join('');

    let html = `
      <section class="sem-hero">
        <div class="orb o1" aria-hidden="true"></div>
        <div class="orb o2" aria-hidden="true"></div>
        <div class="sem-hero-grid container" style="width:min(1120px,92%);margin-inline:auto">
          <div>
            <p class="sem-kicker rv">${esc(cover.kicker || deck.subject)}</p>
            <h1 class="sem-title rv">${esc(deck.title)}</h1>
            <p class="sem-sub rv">${esc(cover.subtitle)}</p>
            <div class="sem-presenter rv">
              <span class="sem-avatar">${initials()}</span>
              <div>
                <strong>${esc(presenter.name)} · Roll No. ${esc(presenter.roll)}</strong>
                <span>${esc(presenter.klass)} — ${esc(presenter.college)}</span>
              </div>
            </div>
          </div>
          <div class="sem-hero-art rv">
            <div class="frame" aria-hidden="true"></div>
            <div class="art"><img src="${imgPath(cover.image)}" alt="${esc(deck.title)} illustration" /></div>
          </div>
        </div>
        <a class="sem-scrollhint" href="#sec-1" data-cursor="hover">
          <span class="sem-mouse"><span class="sem-wheel"></span></span>
          <small>scroll</small>
        </a>
      </section>
      ${kw ? `<div class="sem-marquee" aria-hidden="true"><div class="sem-marquee-track">${kw}${kw}</div></div>` : ''}`;

    rest.forEach((s, k) => {
      if (s.layout === 'end') return;
      html += sectionFor(s, k + 1);
    });

    html += `
      <section class="sem-close">
        <div class="sem-wrap">
          <h2 class="close-title rv">${esc(closing ? closing.text : 'Thank you')}</h2>
          <p class="close-sub rv">${esc(closing ? closing.sub : '')}</p>
          <div class="close-presenter rv">
            <strong>${esc(presenter.name)}</strong>
            <span>Roll No. ${esc(presenter.roll)} · ${esc(presenter.klass)}</span>
            <span>${esc(presenter.college)}</span>
          </div>
          ${closing && closing.refs ? `<div class="close-refs rv"><b>References</b>${closing.refs.map((r) => `<span>${esc(r)}</span>`).join('')}</div>` : ''}
        </div>
      </section>
      ${pagerHtml()}`;

    main.innerHTML = html;

    buildTOC();
    initReveal();
    initTilt();
    initChrome();
  }

  /* ---------------- per-theme signature props ---------------- */
  function addSignature() {
    const slug = deck.slug;
    if (slug === 'body-alignment') {
      document.body.insertAdjacentHTML('beforeend', '<div class="plumb" aria-hidden="true"><span id="plumb-dot"></span></div>');
    }
    if (slug === 'emotions-lifespan') {
      document.body.insertAdjacentHTML(
        'afterbegin',
        `<div class="stagebar" aria-hidden="true">
          <span>Infancy</span><span>Childhood</span><span>Adolesc.</span><span>Adulthood</span><span>65+</span>
        </div>`
      );
    }
    if (slug === 'parkinsons-disease') {
      $('.sem-top').insertAdjacentHTML(
        'beforeend',
        `<span class="mini-ecg" aria-hidden="true"><svg viewBox="0 0 120 24" fill="none"><path class="lv-ecg" d="M0 12 h28 l4 -8 l4 14 l4 -6 h18 l3 -5 l3 7 l3 -5 l3 5 l3 -3 h47" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/></svg></span>`
      );
    }
  }

  /* ---------------- pager ---------------- */
  function pagerHtml() {
    const idx = list.findIndex((s) => s.slug === deck.slug);
    const prev = list[idx - 1];
    const next = list[idx + 1];
    const card = (p, dir, label) =>
      p
        ? `<a class="pager-card ${dir}" href="/seminar/${p.slug}" style="--pager-accent:${p.theme.accent}" data-cursor="hover">
            <small>${label}</small>
            <strong>${esc(p.title)}</strong>
            <span class="p-sub">${esc(p.subject)}</span>
          </a>`
        : `<span class="pager-card ${dir} hidden"></span>`;
    return `<nav class="sem-pager" aria-label="More seminars">${card(prev, 'prev', '← Previous seminar')}${card(next, 'next', 'Next seminar →')}</nav>`;
  }

  /* ---------------- TOC dots ---------------- */
  function buildTOC() {
    const toc = $('#sem-toc');
    const sections = Array.from(main.querySelectorAll('.sem-section'));
    toc.innerHTML = sections
      .map((sec, i) => {
        const title = sec.querySelector('.sem-sec-title, .def-term, h2');
        const label = title ? title.textContent.trim() : `Section ${i + 1}`;
        return `<a href="#${sec.id}" data-label="${esc(label)}" data-sec="${sec.id}" data-cursor="hover" aria-label="${esc(label)}"></a>`;
      })
      .join('');

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          toc.querySelectorAll('a').forEach((a) => a.classList.toggle('active', a.dataset.sec === e.target.id));
        });
      },
      { rootMargin: '-42% 0px -52% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
    toc.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(a.dataset.sec).scrollIntoView({ behavior: 'smooth' });
      })
    );
  }

  /* ---------------- reveal ---------------- */
  function initReveal() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );
    main.querySelectorAll('.rv').forEach((el) => io.observe(el));
  }

  /* ---------------- gentle tilt on cards ---------------- */
  function initTilt() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    main.querySelectorAll('[data-tilt]').forEach((card) => {
      let raf = null;
      card.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(800px) rotateX(${-py * 7}deg) rotateY(${px * 8}deg) translateY(-4px)`;
          raf = null;
        });
      });
      card.addEventListener('mouseleave', () => {
        if (raf) cancelAnimationFrame(raf);
        raf = null;
        card.style.transform = '';
      });
    });
  }

  /* ---------------- chrome: progress, topbar, totop ---------------- */
  function initChrome() {
    const top = $('#sem-top');
    const prog = $('#sem-progress span');
    const totop = $('#sem-totop');
    const art = $('.sem-hero-art');
    const o1 = $('.orb.o1');
    const o2 = $('.orb.o2');
    const plumbDot = $('#plumb-dot');
    const stageSpans = $$('.stagebar span');
    const onScroll = () => {
      const y = window.scrollY;
      top.classList.toggle('scrolled', y > 20);
      totop.classList.toggle('visible', y > 620);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? y / max : 0;
      prog.style.width = `${p * 100}%`;
      // signature: anatomy plumb-line marker
      if (plumbDot) plumbDot.style.top = `${p * 100}%`;
      // signature: life-stage progress zones
      if (stageSpans.length) {
        const z = Math.min(4, Math.floor(p * 5));
        stageSpans.forEach((sp, i) => sp.classList.toggle('active', i <= z));
      }
      // gentle scroll parallax
      if (y < window.innerHeight * 1.4) {
        if (art) art.style.transform = `translateY(${y * 0.07}px)`;
        if (o1) o1.style.transform = `translateY(${y * 0.12}px)`;
        if (o2) o2.style.transform = `translateY(${y * -0.08}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------------- boot ---------------- */
  const slug = decodeURIComponent((location.pathname.match(/\/seminar\/([^/]+)/) || [])[1] || '');
  Promise.all([
    fetch(`/api/seminars/${encodeURIComponent(slug)}`).then((r) => {
      if (!r.ok) throw new Error('not found');
      return r.json();
    }),
    fetch('/api/seminars').then((r) => r.json()),
  ])
    .then(([data, listData]) => {
      deck = data.deck;
      presenter = data.presenter;
      list = listData.items || [];
      applyTheme(deck.theme);
      document.title = `${deck.title} — ${presenter.name} · Seminar`;
      render();
      addSignature();
    })
    .catch(() => {
      main.innerHTML = `
        <div class="notfound">
          <div>
            <h2>Seminar not found</h2>
            <p style="color:var(--muted);margin-bottom:16px">This page does not exist.</p>
            <a href="/">← Back to all seminars</a>
          </div>
        </div>`;
    });
})();
