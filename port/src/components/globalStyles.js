// globalStyles.js
export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Space+Mono&display=swap');

/* ═══════════════════════════════════════
   DARK THEME (default) — Pure Black
═══════════════════════════════════════ */
:root {
  --accent:      #E8490F;
  --accent-rgb:  232,73,15;
  --bg:          #0A0A0A;
  --bg-rgb:      10,10,10;
  --bg2:         #141414;
  --bg3:         #1E1E1E;
  --white:       #FFFFFF;
  --white-rgb:   255,255,255;
  --grey:        #888888;
  --grey2:       #444444;
  --border:      rgba(255,255,255,0.07);
  --font-display:'Bebas Neue', sans-serif;
  --font-body:   'DM Sans', sans-serif;
  --font-mono:   'Space Mono', monospace;
  --ease:        cubic-bezier(.16,1,.3,1);
  --nav-h:       68px;
}

/* ═══════════════════════════════════════
   LIGHT THEME — Pure White + Black/Orange
═══════════════════════════════════════ */
body.light-theme {
  --accent:      #C93D06;
  --accent-rgb:  201,61,6;
  --bg:          #FFFFFF;
  --bg-rgb:      255,255,255;
  --bg2:         #F5F5F5;
  --bg3:         #EBEBEB;
  --white:       #0D0D0D;
  --white-rgb:   13,13,13;
  --grey:        #4A4A4A;
  --grey2:       #888888;
  --border:      rgba(13,13,13,0.10);
}

/* ───────────────────────────────────────
   LIGHT: Navbar
─────────────────────────────────────── */
body.light-theme .navbar {
  background: rgba(255,255,255,0.97);
  border-bottom: 1px solid rgba(13,13,13,0.10);
  box-shadow: 0 1px 20px rgba(13,13,13,0.06);
}
body.light-theme .nav-logo { color: #0D0D0D; }
body.light-theme .nav-links button { color: #6A6A6A; }
body.light-theme .nav-links button:hover,
body.light-theme .nav-links button.active { color: #0D0D0D; }
body.light-theme .nav-cta {
  border-color: #0D0D0D;
  color: #0D0D0D;
}
body.light-theme .nav-cta:hover {
  background: #0D0D0D;
  color: #FFFFFF;
}
body.light-theme .nav-mobile-toggle { color: #0D0D0D; }
body.light-theme .theme-toggle {
  border-color: rgba(13,13,13,0.15);
  color: #0D0D0D;
}

/* ───────────────────────────────────────
   LIGHT: Mobile menu
─────────────────────────────────────── */
body.light-theme .mobile-menu { background: #FFFFFF; }
body.light-theme .mobile-menu button { color: rgba(13,13,13,0.3); }
body.light-theme .mobile-menu button:hover { color: #0D0D0D; }

/* ───────────────────────────────────────
   LIGHT: Loader
─────────────────────────────────────── */
body.light-theme .loader { background: #FFFFFF; }
body.light-theme .loader-track { background: #EBEBEB; }
body.light-theme .loader-word { color: #0D0D0D; }

/* ───────────────────────────────────────
   LIGHT: Scroll progress
─────────────────────────────────────── */
body.light-theme #scroll-prog { background: #EBEBEB; }

/* ───────────────────────────────────────
   LIGHT: Hero
─────────────────────────────────────── */
body.light-theme #home { background: #FFFFFF; }
body.light-theme .hero-bg-text {
  -webkit-text-stroke: 1px rgba(13,13,13,0.05);
}
body.light-theme .hero-name { color: #0D0D0D; }
body.light-theme .hero-intro-text { color: var(--accent); }
body.light-theme .hero-desc { color: #5A5A5A; }
body.light-theme .hero-stat-num .plus { color: #0D0D0D; }
body.light-theme .hero-stat-label { color: #7A7A7A; }
body.light-theme .hero-img-wrap::after {
  background: linear-gradient(to right, #FFFFFF 0%, transparent 55%),
              linear-gradient(to top,   #FFFFFF 0%, transparent 40%);
}
body.light-theme .hero-socials a {
  border-color: rgba(13,13,13,0.12);
  color: #888888;
}
body.light-theme .hero-socials a:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ───────────────────────────────────────
   LIGHT: Buttons
─────────────────────────────────────── */
body.light-theme .btn-outline {
  color: #0D0D0D;
  border-color: rgba(13,13,13,0.25);
}
body.light-theme .btn-outline:hover {
  border-color: #0D0D0D;
  background: #0D0D0D;
  color: #FFFFFF;
}

/* ───────────────────────────────────────
   LIGHT: Section headings & labels
─────────────────────────────────────── */
body.light-theme .sec-heading { color: #0D0D0D; }
body.light-theme .section-label { color: var(--accent); }

/* ───────────────────────────────────────
   LIGHT: About
─────────────────────────────────────── */
body.light-theme .about-content-col { background: #FFFFFF; }
body.light-theme .about-tagline { color: #0D0D0D; }
body.light-theme .about-tagline em { color: var(--accent); }
body.light-theme .about-body { color: #5A5A5A; }
body.light-theme .about-body strong { color: #0D0D0D; font-weight: 600; }
body.light-theme .about-img-col::after {
  background: linear-gradient(to right, transparent 60%, #FFFFFF 100%);
}
body.light-theme .skill-name { color: #4A4A4A; }
body.light-theme .skill-pct  { color: #888888; }
body.light-theme .skill-track { background: #E0E0E0; }
body.light-theme .skill-fill::after {
  background: #FFFFFF;
  border-color: var(--accent);
}
body.light-theme .tools-title { color: #888888; }
body.light-theme .tool-chip {
  color: #4A4A4A;
  border-color: rgba(13,13,13,0.14);
  background: transparent;
}
body.light-theme .tool-chip:hover {
  color: #0D0D0D;
  border-color: rgba(13,13,13,0.4);
  background: #F0F0F0;
}

/* ───────────────────────────────────────
   LIGHT: Services
─────────────────────────────────────── */
body.light-theme #services { background: #FFFFFF; }
body.light-theme .services-grid { background: rgba(13,13,13,0.08); }
body.light-theme .service-card { background: #FFFFFF; }
body.light-theme .service-card:hover { background: #F7F7F7; }
body.light-theme .service-icon {
  border-color: rgba(13,13,13,0.12);
  color: var(--accent);
  background: #FFF5F2;
}
body.light-theme .service-name { color: #0D0D0D; }
body.light-theme .service-desc { color: #6A6A6A; }
body.light-theme .service-ghost {
  -webkit-text-stroke: 1px rgba(13,13,13,0.04);
}

/* ───────────────────────────────────────
   LIGHT: Counters band
─────────────────────────────────────── */
body.light-theme .counters-band {
  background: #F5F5F5;
  border-color: rgba(13,13,13,0.08);
}
body.light-theme .counter-plus { color: #0D0D0D; }
body.light-theme .counter-label { color: #6A6A6A; }

/* ───────────────────────────────────────
   LIGHT: Projects
─────────────────────────────────────── */
body.light-theme .projects-header { background: #FFFFFF; }
body.light-theme .projects-grid { background: rgba(13,13,13,0.08); }
body.light-theme .proj-card { background: #F0F0F0; }
body.light-theme .proj-card-img {
  background: #E5E5E5;
  color: rgba(13,13,13,0.08);
}
body.light-theme .proj-card-overlay {
  background: linear-gradient(to top, rgba(255,255,255,0.97) 0%, transparent 60%);
}
body.light-theme .proj-card-title { color: #0D0D0D; }
body.light-theme .proj-tag {
  color: rgba(13,13,13,0.5);
  border-color: rgba(13,13,13,0.15);
}

/* ───────────────────────────────────────
   LIGHT: Education
─────────────────────────────────────── */
body.light-theme #education { background: #FFFFFF; }
body.light-theme .edu-table { border-color: rgba(13,13,13,0.10); }
body.light-theme .edu-row { border-color: rgba(13,13,13,0.08); }
body.light-theme .edu-row:hover { background: rgba(13,13,13,0.025); }
body.light-theme .edu-logo {
  background: #F0F0F0;
  border-color: rgba(13,13,13,0.10);
  color: rgba(13,13,13,0.25);
}
body.light-theme .edu-year   { color: #888888; }
body.light-theme .edu-name   { color: #0D0D0D; }
body.light-theme .edu-course { color: #6A6A6A; }
body.light-theme .edu-desc   { color: #6A6A6A; }

/* ───────────────────────────────────────
   LIGHT: Experience
─────────────────────────────────────── */
body.light-theme #experience { background: #F7F7F7; }
body.light-theme .exp-list { border-color: rgba(13,13,13,0.10); }
body.light-theme .exp-row { border-color: rgba(13,13,13,0.08); }
body.light-theme .exp-row:hover { background: rgba(13,13,13,0.025); }
body.light-theme .exp-icon {
  background: #EBEBEB;
  border-color: rgba(13,13,13,0.10);
  color: var(--accent);
}
body.light-theme .exp-company { color: #0D0D0D; }
body.light-theme .exp-role    { color: #6A6A6A; }
body.light-theme .exp-desc    { color: #6A6A6A; }
body.light-theme .exp-type {
  color: #888888;
  border-color: rgba(13,13,13,0.12);
}

/* ───────────────────────────────────────
   LIGHT: Certifications
─────────────────────────────────────── */
body.light-theme #certifications { background: #FFFFFF; }
body.light-theme .cert-card {
  background: #FFFFFF;
  border-color: rgba(13,13,13,0.10);
  box-shadow: 0 2px 16px rgba(13,13,13,0.06);
}
body.light-theme .cert-card:hover {
  border-color: rgba(201,61,6,0.4);
  box-shadow: 0 8px 32px rgba(13,13,13,0.10);
}
body.light-theme .cert-thumb { background: #F0F0F0; }
body.light-theme .cert-name   { color: #0D0D0D; }
body.light-theme .cert-issuer { color: #6A6A6A; }

/* ───────────────────────────────────────
   LIGHT: Interests
─────────────────────────────────────── */
body.light-theme #interests { background: #F7F7F7; }
body.light-theme .int-item {
  color: rgba(13,13,13,0.18);
  border-color: rgba(13,13,13,0.10);
}
body.light-theme .int-item:hover {
  color: #0D0D0D;
  background: #EBEBEB;
  border-color: rgba(13,13,13,0.25);
}

/* ───────────────────────────────────────
   LIGHT: Contact
─────────────────────────────────────── */
body.light-theme #contact { background: #FFFFFF; }
body.light-theme .contact-heading { color: #0D0D0D; }
body.light-theme .contact-heading span { color: var(--accent); }
body.light-theme .contact-sub { color: #6A6A6A; }
body.light-theme .c-info-item small { color: var(--accent); }
body.light-theme .c-info-item a,
body.light-theme .c-info-item span { color: #1A1A1A; }
body.light-theme .c-form-label { color: #0D0D0D; }
body.light-theme .c-form-label em { color: var(--accent); }
body.light-theme .cfield {
  color: #0D0D0D;
  background: transparent;
  border-bottom-color: rgba(13,13,13,0.15);
}
body.light-theme .cfield:focus {
  border-bottom-color: rgba(13,13,13,0.45);
}
body.light-theme .cfield::placeholder { color: #AAAAAA; }

/* ───────────────────────────────────────
   LIGHT: Footer
─────────────────────────────────────── */
body.light-theme footer {
  background: #F5F5F5;
  border-top-color: rgba(13,13,13,0.10);
}
body.light-theme .footer-copy { color: #AAAAAA; }
body.light-theme .footer-copy span { color: #6A6A6A; }
body.light-theme .footer-back {
  color: #6A6A6A;
  border-color: rgba(13,13,13,0.12);
}
body.light-theme .footer-back:hover {
  color: #0D0D0D;
  border-color: rgba(13,13,13,0.35);
}

/* ═══════════════════════════════════════
   BASE STYLES (shared by both themes)
═══════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--white);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.7;
  overflow-x: hidden;
  cursor: none;
}
a { color: inherit; text-decoration: none; }
button { cursor: none; font-family: var(--font-body); }
img { max-width: 100%; display: block; }
svg {
  width: 18px; height: 18px;
  fill: none; stroke: currentColor;
  stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
}

/* ─── Custom Cursor ── */
#cur-dot {
  position: fixed; width: 8px; height: 8px;
  background: var(--accent); border-radius: 50%;
  pointer-events: none; transform: translate(-50%,-50%);
  z-index: 9999; transition: transform 0.12s ease;
}
#cur-ring {
  position: fixed; width: 32px; height: 32px;
  border: 1.5px solid rgba(232,73,15,0.45); border-radius: 50%;
  pointer-events: none; transform: translate(-50%,-50%);
  z-index: 9998;
  transition: width 0.3s var(--ease), height 0.3s var(--ease), border-color 0.3s;
}
body.cur-hover #cur-dot  { transform: translate(-50%,-50%) scale(2.5); }
body.cur-hover #cur-ring { width: 54px; height: 54px; border-color: rgba(232,73,15,0.15); }

/* ─── Scroll bar ── */
#scroll-prog { position: fixed; right: 0; top: 0; width: 2px; height: 100vh; background: var(--bg3); z-index: 999; }
#scroll-fill { width: 100%; background: var(--accent); }

/* ─── Loader ── */
.loader {
  position: fixed; inset: 0; background: var(--bg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  z-index: 10000; gap: 24px;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
.loader.done { opacity: 0; visibility: hidden; pointer-events: none; }
.loader-word {
  font-family: var(--font-display);
  font-size: clamp(64px, 12vw, 120px);
  letter-spacing: 0.06em; color: var(--white); line-height: 1;
}
.loader-word span { color: var(--accent); }
.loader-track { width: 220px; height: 1px; background: var(--bg3); }
.loader-fill  { height: 100%; background: var(--accent); animation: lf 1.8s var(--ease) forwards; }
@keyframes lf { from { width: 0; } to { width: 100%; } }

/* ─── Navbar ── */
.navbar {
  position: fixed; top: 0; left: 0; right: 0;
  height: var(--nav-h); z-index: 500;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 48px;
  background: rgba(var(--bg-rgb), 0.96);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: var(--font-display); font-size: 28px;
  letter-spacing: 0.08em; color: var(--white);
  display: flex; align-items: center; gap: 2px;
}
.nav-logo span { color: var(--accent); }
.nav-links { display: flex; gap: 36px; list-style: none; }
.nav-links button {
  background: none; border: none;
  font-family: var(--font-body); font-size: 13px; font-weight: 500;
  letter-spacing: 0.04em; color: var(--grey);
  transition: color 0.2s; position: relative; padding-bottom: 2px;
}
.nav-links button::after {
  content: ''; position: absolute; bottom: -2px; left: 0;
  width: 0; height: 2px; background: var(--accent);
  transition: width 0.25s var(--ease);
}
.nav-links button:hover, .nav-links button.active { color: var(--white); }
.nav-links button.active::after, .nav-links button:hover::after { width: 100%; }
.nav-cta {
  font-family: var(--font-body); font-size: 12px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  padding: 10px 24px; border: 1.5px solid var(--white);
  color: var(--white); background: none;
  transition: background 0.2s, color 0.2s; border-radius: 2px;
}
.nav-cta:hover { background: var(--white); color: var(--bg); }

/* Theme toggle button */
.theme-toggle {
  background: none;
  border: 1px solid var(--border);
  border-radius: 30px;
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  color: var(--white);
  transition: all 0.2s;
}
.theme-toggle:hover { border-color: var(--accent); color: var(--accent); }

.nav-mobile-toggle { display: none; background: none; border: none; color: var(--white); padding: 4px; }

/* Mobile menu */
.mobile-menu {
  position: fixed; inset: 0; background: var(--bg);
  z-index: 450; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 28px;
  transform: translateX(100%); transition: transform 0.4s var(--ease);
  padding-top: var(--nav-h);
}
.mobile-menu.open { transform: none; }
.mobile-menu button {
  font-family: var(--font-display); font-size: 44px;
  letter-spacing: 0.06em; color: rgba(var(--white-rgb), 0.45);
  background: none; border: none; transition: color 0.2s;
}
.mobile-menu button:hover { color: var(--white); }

/* ─── Main wrap ── */
.main-wrap { padding-top: var(--nav-h); }

/* ─── Section base ── */
.section { padding: 100px 80px; border-bottom: 1px solid var(--border); position: relative; }
.section-label {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.28em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 12px;
}
.sec-heading {
  font-family: var(--font-display);
  font-size: clamp(44px, 5vw, 72px);
  line-height: 1; letter-spacing: 0.04em;
  color: var(--white); margin-bottom: 48px;
}

/* ─── Reveal ── */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }
.reveal.in { opacity: 1; transform: none; }
.d1 { transition-delay: 0.1s; } .d2 { transition-delay: 0.2s; }
.d3 { transition-delay: 0.3s; } .d4 { transition-delay: 0.4s; }
.d5 { transition-delay: 0.5s; }

/* ─── Buttons ── */
.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 32px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  border-radius: 2px; border: none; transition: all 0.25s ease;
  font-family: var(--font-body);
}
.btn-accent  { background: var(--accent); color: #fff; }
.btn-accent:hover { background: #b83305; }
.btn-outline { background: transparent; color: var(--white); border: 1.5px solid rgba(var(--white-rgb), 0.25); }
.btn-outline:hover { border-color: var(--white); }
.btn svg { width: 14px; height: 14px; }

/* ══════════════ HERO ══════════════ */
#home {
  min-height: calc(100vh - var(--nav-h));
  background: var(--bg);
  position: relative; overflow: hidden;
  display: flex; align-items: stretch;
}
.hero-bg-text {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: clamp(120px, 18vw, 260px);
  letter-spacing: 0.05em; line-height: 1;
  -webkit-text-stroke: 1px rgba(var(--white-rgb), 0.04);
  color: transparent; white-space: nowrap;
  pointer-events: none; user-select: none; z-index: 0;
}
.hero-inner {
  width: 100%; display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative; z-index: 1;
}
.hero-left {
  display: flex; flex-direction: column; justify-content: center;
  padding: 80px 60px 80px 80px;
}
.hero-intro { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.hero-intro-line { width: 48px; height: 1px; background: var(--accent); }
.hero-intro-text {
  font-family: var(--font-mono); font-size: 11px;
  letter-spacing: 0.28em; text-transform: uppercase; color: var(--accent);
}
.hero-name {
  font-family: var(--font-display);
  font-size: clamp(52px, 6.5vw, 96px);
  line-height: 0.95; letter-spacing: 0.04em;
  color: var(--white); margin-bottom: 20px;
}
.hero-desc {
  font-size: 14px; color: rgba(var(--white-rgb), 0.45);
  line-height: 1.85; max-width: 420px; margin-bottom: 36px;
}
.hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-stats {
  display: flex; gap: 0; margin-top: 52px;
  border-top: 1px solid var(--border); padding-top: 32px;
}
.hero-stat-item {
  flex: 1; padding: 0 20px;
  border-right: 1px solid var(--border);
}
.hero-stat-item:first-child { padding-left: 0; }
.hero-stat-item:last-child  { border-right: none; }
.hero-stat-num {
  font-family: var(--font-display); font-size: 44px;
  color: var(--accent); line-height: 1; margin-bottom: 4px;
  display: flex; align-items: baseline; gap: 2px;
}
.hero-stat-num .plus { font-size: 28px; color: var(--white); }
.hero-stat-label { font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--grey); }
.hero-socials {
  position: absolute; right: 28px; top: 50%; transform: translateY(-50%);
  display: flex; flex-direction: column; gap: 16px; z-index: 2;
}
.hero-socials a {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border); color: var(--grey);
  transition: border-color 0.2s, color 0.2s; border-radius: 50%;
  font-family: var(--font-mono);
}
.hero-socials a:hover { border-color: var(--accent); color: var(--accent); }
.hero-right { position: relative; overflow: hidden; }
.hero-img-wrap { position: absolute; inset: 0; }
.hero-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  filter: brightness(0.75);
}
.hero-img-wrap::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to right, var(--bg) 0%, transparent 50%),
              linear-gradient(to top, var(--bg) 0%, transparent 40%);
}
.hero-domain-badge {
  position: absolute; bottom: 48px; left: -1px;
  background: var(--accent); color: #fff;
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 0.2em; text-transform: uppercase;
  padding: 10px 24px; z-index: 3;
}

/* ══════════════ ABOUT ══════════════ */
#about { padding: 0; }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 80vh; }
.about-img-col { position: relative; overflow: hidden; min-height: 600px; }
.about-img-col img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  filter: grayscale(20%) brightness(0.7);
}
.about-img-col::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to right, transparent 60%, var(--bg) 100%);
}
.about-content-col {
  display: flex; flex-direction: column; justify-content: center;
  padding: 80px 80px 80px 60px;
  background: var(--bg);
}
.about-tagline {
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 44px); color: var(--white);
  line-height: 1.2; margin-bottom: 20px;
}
.about-tagline em { color: var(--accent); font-style: normal; }
.about-body { font-size: 14px; color: rgba(var(--white-rgb), 0.45); line-height: 1.9; margin-bottom: 36px; }
.about-body strong { color: rgba(var(--white-rgb), 0.75); font-weight: 500; }
.skill-row { margin-bottom: 20px; }
.skill-meta { display: flex; justify-content: space-between; margin-bottom: 8px; }
.skill-name { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--grey); }
.skill-pct  { font-family: var(--font-mono); font-size: 10px; color: var(--grey2); }
.skill-track { height: 2px; background: var(--bg3); position: relative; }
.skill-fill {
  height: 100%; width: 0; background: var(--accent);
  transition: width 1.4s var(--ease); position: relative;
}
.skill-fill::after {
  content: ''; position: absolute; right: -4px; top: -4px;
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--white); border: 2px solid var(--accent);
}
.tools-wrap { margin-top: 28px; }
.tools-title { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--grey2); margin-bottom: 14px; }
.tools-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.tool-chip {
  font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--grey); border: 1px solid var(--border); border-radius: 2px;
  padding: 5px 12px; transition: color 0.2s, border-color 0.2s;
}
.tool-chip:hover { color: var(--white); border-color: rgba(var(--white-rgb), 0.25); }

/* ══════════════ SERVICES ══════════════ */
#services { background: var(--bg); }
.services-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 64px; flex-wrap: wrap; gap: 16px;
}
.services-see-all {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--accent); background: none; border: none; transition: gap 0.2s;
}
.services-see-all:hover { gap: 14px; }
.services-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border); }
.service-card {
  background: var(--bg); padding: 40px 32px;
  transition: background 0.3s; position: relative; overflow: hidden;
}
.service-card::before {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px; background: var(--accent);
  transition: width 0.35s var(--ease);
}
.service-card:hover { background: var(--bg2); }
.service-card:hover::before { width: 100%; }
.service-icon {
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border); border-radius: 2px;
  color: var(--accent); margin-bottom: 20px;
}
.service-icon svg { width: 20px; height: 20px; }
.service-ghost {
  position: absolute; bottom: 12px; right: 12px;
  font-family: var(--font-display); font-size: 72px;
  letter-spacing: 0.04em; line-height: 1;
  -webkit-text-stroke: 1px rgba(var(--white-rgb), 0.04);
  color: transparent; pointer-events: none; user-select: none;
}
.service-name { font-size: 15px; font-weight: 700; color: var(--white); margin-bottom: 10px; }
.service-desc { font-size: 12px; color: rgba(var(--white-rgb), 0.38); line-height: 1.8; }

/* ══════════════ COUNTERS ══════════════ */
.counters-band {
  background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  display: grid; grid-template-columns: repeat(4,1fr);
}
.counter-item { padding: 56px 40px; text-align: center; border-right: 1px solid var(--border); }
.counter-item:last-child { border-right: none; }
.counter-num {
  font-family: var(--font-display); font-size: clamp(56px,6vw,88px);
  line-height: 1; color: var(--accent); margin-bottom: 8px;
  display: flex; align-items: baseline; justify-content: center; gap: 2px;
}
.counter-plus { font-size: 44px; color: var(--white); }
.counter-label { font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--grey); }

/* ══════════════ PROJECTS ══════════════ */
#projects { padding: 0; overflow: hidden; }
.projects-header {
  padding: 80px 80px 56px;
  display: flex; align-items: flex-end; justify-content: space-between;
  flex-wrap: wrap; gap: 20px; border-bottom: 1px solid var(--border);
}
.projects-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); }
.proj-card {
  position: relative; overflow: hidden; aspect-ratio: 4/3;
  background: var(--bg2); transition: transform 0.4s var(--ease);
}
.proj-card:hover { transform: scale(1.01); z-index: 1; }
.proj-card-img {
  position: absolute; inset: 0;
  background: var(--bg3); display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 80px; color: rgba(var(--white-rgb), 0.06);
}
.proj-card-img img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; transition: transform 0.6s var(--ease);
  filter: brightness(0.5) grayscale(20%);
}
.proj-card:hover .proj-card-img img { transform: scale(1.06); }
.proj-card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(var(--bg-rgb), 0.95) 0%, transparent 55%);
}
.proj-card-body {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 28px; transform: translateY(10px);
  transition: transform 0.4s var(--ease);
}
.proj-card:hover .proj-card-body { transform: none; }
.proj-card-idx { font-family: var(--font-mono); font-size: 10px; color: var(--accent); margin-bottom: 6px; }
.proj-card-title { font-family: var(--font-display); font-size: 28px; color: var(--white); margin-bottom: 8px; }
.proj-card-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
.proj-tag {
  font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: rgba(var(--white-rgb), 0.45); border: 1px solid rgba(var(--white-rgb), 0.12);
  padding: 3px 8px; border-radius: 1px;
}
.proj-card-links { display: flex; gap: 10px; opacity: 0; transition: opacity 0.3s ease 0.1s; }
.proj-card:hover .proj-card-links { opacity: 1; }
.proj-link-btn {
  font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--accent); display: flex; align-items: center; gap: 6px;
  background: none; border: none; transition: gap 0.2s;
}
.proj-link-btn:hover { gap: 10px; }
.proj-link-btn svg { width: 11px; height: 11px; }

/* ══════════════ EDUCATION ══════════════ */
#education { background: var(--bg); }
.edu-table { border-top: 1px solid var(--border); }
.edu-row {
  display: grid; grid-template-columns: 80px 220px 1fr auto;
  align-items: center; gap: 36px;
  padding: 32px 0; border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}
.edu-row:hover { background: rgba(var(--white-rgb), 0.015); margin: 0 -16px; padding-left: 16px; padding-right: 16px; border-radius: 4px; }
.edu-logo {
  width: 60px; height: 60px;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 4px; font-family: var(--font-display);
  font-size: 22px; color: rgba(var(--white-rgb), 0.2); flex-shrink: 0;
}
.edu-year   { font-family: var(--font-mono); font-size: 10px; color: var(--grey); letter-spacing: 0.1em; margin-bottom: 4px; }
.edu-name   { font-size: 15px; font-weight: 700; color: var(--white); margin-bottom: 2px; }
.edu-course { font-size: 12px; color: rgba(var(--white-rgb), 0.35); }
.edu-desc   { font-size: 12px; color: rgba(var(--white-rgb), 0.35); line-height: 1.8; }
.edu-badge  {
  font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--accent); border: 1px solid rgba(232,73,15,0.3);
  padding: 4px 10px; border-radius: 2px; white-space: nowrap;
}

/* ══════════════ EXPERIENCE ══════════════ */
#experience { background: var(--bg2); }
.exp-list { border-top: 1px solid var(--border); }
.exp-row {
  display: grid; grid-template-columns: 60px 200px 1fr auto;
  align-items: start; gap: 32px;
  padding: 32px 0; border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}
.exp-row:hover { background: rgba(var(--white-rgb), 0.015); margin: 0 -16px; padding-left: 16px; padding-right: 16px; border-radius: 4px; }
.exp-icon {
  width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
  background: var(--bg3); border: 1px solid var(--border); border-radius: 4px;
  color: var(--accent); flex-shrink: 0; margin-top: 4px;
}
.exp-icon svg { width: 18px; height: 18px; }
.exp-company { font-family: var(--font-display); font-size: 22px; color: var(--white); margin-bottom: 4px; letter-spacing: 0.04em; }
.exp-role    { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--grey); }
.exp-desc    { font-size: 12px; color: rgba(var(--white-rgb), 0.38); line-height: 1.85; padding-top: 4px; }
.exp-type    {
  font-size: 9px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--grey); border: 1px solid var(--border); padding: 4px 12px;
  border-radius: 2px; white-space: nowrap; margin-top: 4px;
}

/* ══════════════ CERTS ══════════════ */
#certifications { background: var(--bg); }
.certs-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(240px,1fr)); gap: 16px; }
.cert-card {
  background: var(--bg2); border: 1px solid var(--border); border-radius: 4px; overflow: hidden;
  transition: transform 0.3s var(--ease), border-color 0.3s;
}
.cert-card:hover { transform: translateY(-6px); border-color: rgba(232,73,15,0.35); }
.cert-thumb {
  width: 100%; aspect-ratio: 16/9;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg3); font-size: 40px;
}
.cert-thumb img { width: 100%; height: 100%; object-fit: cover; }
.cert-body { padding: 18px; }
.cert-name   { font-size: 13px; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.cert-issuer { font-size: 11px; color: var(--grey); margin-bottom: 12px; }
.cert-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--accent); transition: gap 0.2s;
}
.cert-link:hover { gap: 10px; }
.cert-link svg { width: 11px; height: 11px; }

/* ══════════════ INTERESTS ══════════════ */
#interests { background: var(--bg2); }
.int-cloud { display: flex; flex-wrap: wrap; gap: 12px; }
.int-item {
  font-family: var(--font-display); font-size: clamp(22px,2.6vw,36px);
  letter-spacing: 0.04em; color: rgba(var(--white-rgb), 0.1);
  border: 1px solid var(--border); border-radius: 2px; padding: 8px 24px;
  transition: color 0.3s, border-color 0.3s, background 0.3s; cursor: default;
}
.int-item:hover { color: var(--white); border-color: rgba(var(--white-rgb), 0.2); background: var(--bg3); }

/* ══════════════ CONTACT ══════════════ */
#contact { background: var(--bg); }
.contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(44px,5.5vw,80px); line-height: 1;
  color: var(--white); letter-spacing: 0.04em; margin-bottom: 16px;
}
.contact-heading span { color: var(--accent); }
.contact-sub { font-size: 13px; color: rgba(var(--white-rgb), 0.35); line-height: 1.85; margin-bottom: 40px; max-width: 320px; }
.contact-info { display: flex; flex-direction: column; gap: 20px; }
.c-info-item small {
  display: block; font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 4px;
}
.c-info-item a, .c-info-item span { font-size: 14px; font-weight: 600; color: rgba(var(--white-rgb), 0.75); }
.c-form-label { font-size: 16px; font-weight: 500; color: var(--white); line-height: 1.6; margin-bottom: 32px; }
.c-form-label em { color: var(--accent); font-style: normal; }
.cform { display: flex; flex-direction: column; gap: 8px; }
.cfield {
  background: transparent; border: none; border-bottom: 1px solid var(--border);
  padding: 14px 4px; color: var(--white);
  font-family: var(--font-body); font-size: 14px;
  outline: none; transition: border-color 0.2s; width: 100%; resize: none;
}
.cfield::placeholder { color: var(--grey2); font-size: 13px; }
.cfield:focus { border-bottom-color: rgba(var(--white-rgb), 0.35); }
textarea.cfield { min-height: 110px; margin-top: 8px; }
.cform-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.cform-actions { display: flex; margin-top: 28px; }
.cform-err { color: var(--accent); font-size: 11px; margin-top: 8px; }
.sent-state { padding-top: 32px; }
.sent-num  { font-family: var(--font-display); font-size: 80px; color: var(--accent); line-height: 1; margin-bottom: 14px; }
.sent-msg  { font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--grey); margin-bottom: 24px; }

/* ══════════════ FOOTER ══════════════ */
footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 24px 80px; border-top: 1px solid var(--border);
  flex-wrap: wrap; gap: 12px;
}
.footer-copy { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; color: var(--grey2); }
.footer-copy span { color: var(--grey); }
.footer-back {
  display: flex; align-items: center; gap: 10px;
  background: none; border: 1px solid var(--border); border-radius: 2px;
  color: var(--grey); font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
  padding: 8px 16px; transition: color 0.2s, border-color 0.2s;
}
.footer-back:hover { color: var(--white); border-color: rgba(var(--white-rgb), 0.3); }
.footer-back svg { width: 12px; height: 12px; }

/* ══════════════ RESPONSIVE ══════════════ */
@media (max-width: 1100px) {
  .hero-inner          { grid-template-columns: 1fr; }
  .hero-right          { display: none; }
  .hero-left           { padding: 80px 48px; }
  .about-grid          { grid-template-columns: 1fr; }
  .about-img-col       { display: none; }
  .about-content-col   { padding: 80px 48px; }
  .services-grid       { grid-template-columns: repeat(2,1fr); }
  .counters-band       { grid-template-columns: repeat(2,1fr); }
  .projects-grid       { grid-template-columns: repeat(2,1fr); }
  .edu-row             { grid-template-columns: 60px 1fr auto; }
  .edu-desc            { display: none; }
  .exp-row             { grid-template-columns: 48px 1fr; grid-template-rows: auto auto; gap: 16px; }
  .exp-desc            { grid-column: span 2; }
  .contact-grid        { grid-template-columns: 1fr; gap: 48px; }
}
@media (max-width: 768px) {
  :root { --nav-h: 60px; }
  .navbar              { padding: 0 24px; }
  .nav-links           { display: none; }
  .nav-cta             { display: none; }
  .nav-mobile-toggle   { display: flex; }
  .section             { padding: 64px 24px; }
  #home                { padding: 0; }
  .hero-left           { padding: 48px 24px 64px; }
  .hero-stats          { flex-wrap: wrap; }
  .hero-stat-item      { min-width: 45%; border-right: none; padding: 8px 0; border-bottom: 1px solid var(--border); }
  .hero-stat-item:last-child { border-bottom: none; }
  .hero-socials        { display: none; }
  .services-grid       { grid-template-columns: 1fr; }
  .counters-band       { grid-template-columns: repeat(2,1fr); }
  .projects-header     { padding: 48px 24px 36px; }
  .projects-grid       { grid-template-columns: 1fr; }
  .edu-row             { grid-template-columns: 1fr; gap: 12px; }
  .edu-logo            { display: none; }
  .exp-row             { grid-template-columns: 1fr; }
  .exp-icon            { display: none; }
  .certs-grid          { grid-template-columns: repeat(2,1fr); }
  footer               { padding: 20px 24px; }
  .contact-grid        { gap: 40px; }
  .cform-row           { grid-template-columns: 1fr; }
  .about-content-col   { padding: 64px 24px; }
}
@media (max-width: 480px) {
  .certs-grid          { grid-template-columns: 1fr; }
  .counters-band       { grid-template-columns: 1fr; }
  .counter-item        { border-right: none; border-bottom: 1px solid var(--border); }
  .counter-item:last-child { border-bottom: none; }
}
`;