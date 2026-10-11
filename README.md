# Seminar Presentation Platform

A full-stack seminar presentation website for classroom talks — built for
**Aviraj A. Veer** (Roll No. 38, 1st Semester B.Sc Nursing,
Krishna Institute of Nursing Science, Karad).

Each seminar is a **short 7–10 minute deck** with its **own visual theme**
(colour, mood and imagery matched to the topic), combining **web images and
AI-generated illustrations**, wrapped in a minimalist, modern, animated UI.

## 🎓 The six seminars

| # | Topic | Subject | Theme | Slides |
|---|-------|---------|-------|--------|
| 1 | Principles of Body Mechanics | Nursing Foundation | Clinical Teal | 13 |
| 2 | Factors Affecting Body Alignment & Activity | Nursing Foundation | Warm Amber | 12 |
| 3 | Social Mobility: Meaning and Types | Applied Sociology | Open Violet | 12 |
| 4 | Development of Emotions | Applied Psychology | Soft Rose | 12 |
| 5 | Emotional Development Across the Life Span | Applied Psychology | Deep Indigo | 13 |
| 6 | Parkinson's Disease — Anatomical & Clinical Correlation | Seminar 2026 | Tulip Red | 13 |

## ✨ Experience

- **Hub** — dark animated landing with presenter identity + themed seminar cards
- **Each seminar = a complete scrolling mini-website**, not slides:
  themed hero with AI cover art, sticky glass topbar, floating dot-TOC with
  scroll-spy, numbered story sections, image splits, card grids, correlation
  table, summary checklist, references and prev/next seminar pager
- **Interactions** — custom cursor, scroll-reveal animations, tilt-on-hover
  cards, parallax hero art hover, scroll progress bar, back-to-top
- **Presenter identity everywhere** — name · Roll No. 38 · college on hero,
  closing block and footer of every seminar
- Responsive and `prefers-reduced-motion` aware

## 🔧 Stack

- **Backend** — Express: `GET /api/health`, `GET /api/seminars`, `GET /api/seminars/:slug`;
  pretty route `/seminar/:slug`; deck content lives in `server/seminars-data.js`
- **Frontend** — zero-dependency vanilla JS (`hub.js`, `deck.js`, `cursor.js`, `particles.js`)
- **Imagery** — curated web photos + AI illustrations per topic in `public/images/<slug>/`

## 🚀 Run

```bash
npm install
npm start        # → http://localhost:3000
```

Open the hub, pick a deck, press `F` for fullscreen, and present. 🎤
