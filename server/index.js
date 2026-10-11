/**
 * Seminar Presentation Platform — Backend (Express)
 * -------------------------------------------------
 *   GET /api/health            -> service status
 *   GET /api/seminars          -> list of seminar decks (meta only)
 *   GET /api/seminars/:slug    -> full deck (theme, slides, presenter)
 * Static frontend served from /public with pretty routes:
 *   /               -> hub (index.html)
 *   /seminar/:slug  -> presentation template (seminar.html)
 */

const express = require('express');
const path = require('path');
const { SEMINARS, PRESENTER } = require('./seminars-data');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

/* ---------------- request logger ---------------- */
app.use((req, _res, next) => {
  if (req.path.startsWith('/api')) {
    console.log(`[api] ${new Date().toISOString()} ${req.method} ${req.path}`);
  }
  next();
});

/* ---------------- API ---------------- */
app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'seminar-platform',
    version: '2.0.0',
    seminars: SEMINARS.length,
    time: new Date().toISOString(),
    uptime: Math.round(process.uptime()),
  });
});

app.get('/api/seminars', (_req, res) => {
  res.json({
    ok: true,
    presenter: PRESENTER,
    items: SEMINARS.map((s) => ({
      slug: s.slug,
      title: s.title,
      subject: s.subject,
      minutes: s.minutes,
      vibe: s.vibe,
      slides: s.slides.length,
      theme: s.theme,
      images: s.images,
    })),
  });
});

app.get('/api/seminars/:slug', (req, res) => {
  const deck = SEMINARS.find((s) => s.slug === req.params.slug);
  if (!deck) {
    return res.status(404).json({ ok: false, error: 'Seminar not found.' });
  }
  res.json({ ok: true, presenter: PRESENTER, deck });
});

app.use('/api', (_req, res) => {
  res.status(404).json({ ok: false, error: 'Endpoint not found.' });
});

/* ---------------- frontend ---------------- */
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
app.use(
  express.static(PUBLIC_DIR, {
    extensions: ['html'],
    // Dev-friendly: never let browsers/proxies serve stale assets
    setHeaders(res) {
      res.setHeader('Cache-Control', 'no-store, max-age=0');
    },
  })
);

// Pretty route for presentations
app.get('/seminar/:slug', (_req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'seminar.html'));
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`✨ Seminar platform running at http://${HOST}:${PORT} (${SEMINARS.length} seminars)`);
});
