// globalStyles.js
export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Space+Mono&display=swap');

/* ----- DARK THEME (default) ----- */
:root {
  --accent: #E8490F;
  --bg:     #111111;
  --bg-rgb: 17,17,17;
  --bg2:    #181818;
  --bg3:    #222222;
  --white:  #FFFFFF;
  --white-rgb: 255,255,255;
  --grey:   #888888;
  --grey2:  #444444;
  --border: rgba(255,255,255,0.07);
  --font-display: 'Bebas Neue', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'Space Mono', monospace;
  --ease:         cubic-bezier(.16,1,.3,1);
  --nav-h:        68px;
}

/* ----- LIGHT THEME (enhanced) ----- */
body.light-theme {
  --accent:        #D63E06;           /* slightly deeper orange for contrast on light */
  --bg:            #F2F0EB;           /* warm off-white — less sterile than pure white */
  --bg-rgb:        242,240,235;
  --bg2:           #E8E4DC;           /* warm light tan for card backgrounds */
  --bg3:           #D8D3C8;           /* slightly darker warm tone for borders/tracks */
  --white:         #1A1714;           /* near-black warm text */
  --white-rgb:     26,23,20;
  --grey:          #5C554E;           /* warm dark grey — very readable */
  --grey2:         #8C847B;           /* medium warm grey for secondary text */
  --border:        rgba(26,23,20,0.12);
  --shadow:        0 4px 24px rgba(26,23,20,0.10);
}

/* ─── Light theme specific overrides ─── */

/* Navbar glassmorphism in light */
body.light-theme .navbar {
  background: rgba(var(--bg-rgb), 0.94);
  box-shadow: 0 1px 0 var(--border), 0 2px 16px rgba(26,23,20,0.06);
}

/* Hero BG text */
body.light-theme .hero-bg-text {
  -webkit-text-stroke: 1px rgba(26,23,20,0.06);
}

/* Hero description text */
body.light-theme .hero-desc {
  color: var(--grey);
}

/* Hero image overlay adjusted for light */
body.light-theme .hero-img-wrap::after {
  background: linear-gradient(to right, var(--bg) 0%, transparent 55%),
              linear-gradient(to top, var(--bg) 0%, transparent 40%);
}

/* Hero stats */
body.light-theme .hero-stat-num .plus {
  color: var(--white);
}

/* About section */
body.light-theme .about-img-col::after {
  background: linear-gradient(to right, transparent 60%, var(--bg) 100%);
}
body.light-theme .about-content-col {
  background: var(--bg);
}
body.light-theme .about-body {
  color: var(--grey);
}
body.light-theme .about-body strong {
  color: rgba(var(--white-rgb), 0.85);
}

/* Service cards */
body.light-theme .service-card {
  background: var(--bg2);
  box-shadow: inset 0 0 0 1px var(--border);
}
body.light-theme .service-card:hover {
  background: #DDD9CF;
}
body.light-theme .service-ghost {
  -webkit-text-stroke: 1px rgba(26,23,20,0.06);
}
body.light-theme .service-desc {
  color: var(--grey);
}

/* Counters band */
body.light-theme .counters-band {
  background: var(--bg2);
}
body.light-theme .counter-plus {
  color: var(--white);
}

/* Project cards */
body.light-theme .proj-card {
  background: var(--bg2);
}
body.light-theme .proj-card-img {
  background: var(--bg3);
  color: rgba(var(--white-rgb), 0.1);
}
body.light-theme .proj-card-overlay {
  background: linear-gradient(to top, rgba(var(--bg-rgb), 0.97) 0%, transparent 60%);
}
body.light-theme .proj-tag {
  color: rgba(var(--white-rgb), 0.55);
  border-color: rgba(var(--white-rgb), 0.18);
}

/* Education rows */
body.light-theme .edu-logo {
  background: var(--bg3);
}
body.light-theme .edu-name {
  color: var(--white);
}
body.light-theme .edu-year,
body.light-theme .edu-course,
body.light-theme .edu-desc {
  color: var(--grey);
}

/* Experience rows */
body.light-theme .exp-icon {
  background: var(--bg3);
}
body.light-theme .exp-company {
  color: var(--white);
}
body.light-theme .exp-desc {
  color: var(--grey);
}

/* Cert cards */
body.light-theme .cert-card {
  background: var(--bg2);
  box-shadow: 0 2px 12px rgba(26,23,20,0.06);
}
body.light-theme .cert-thumb {
  background: var(--bg3);
}
body.light-theme .cert-name {
  color: var(--white);
}

/* Interests */
body.light-theme .int-item {
  color: rgba(var(--white-rgb), 0.3);
  border-color: rgba(26,23,20,0.14);
}
body.light-theme .int-item:hover {
  color: var(--white);
  background: var(--bg3);
  border-color: rgba(26,23,20,0.28);
}

/* Contact form */
body.light-theme .cfield {
  color: var(--white);
  background: transparent;
  border-bottom-color: rgba(26,23,20,0.18);
}
body.light-theme .cfield:focus {
  border-bottom-color: rgba(26,23,20,0.5);
}
body.light-theme .cfield::placeholder {
  color: var(--grey2);
}

/* Mobile menu */
body.light-theme .mobile-menu {
  background: var(--bg);
}

/* Skill track */
body.light-theme .skill-track {
  background: var(--bg3);
}
body.light-theme .skill-fill::after {
  background: var(--bg2);
  border-color: var(--accent);
}

/* Tool chips */
body.light-theme .tool-chip {
  color: var(--grey);
  border-color: rgba(26,23,20,0.16);
}
body.light-theme .tool-chip:hover {
  color: var(--white);
  border-color: rgba(26,23,20,0.4);
}

/* Nav CTA */
body.light-theme .nav-cta {
  border-color: var(--white);
  color: var(--white);
}
body.light-theme .nav-cta:hover {
  background: var(--white);
  color: var(--bg);
}

/* Outline button */
body.light-theme .btn-outline {
  color: var(--white);
  border-color: rgba(26,23,20,0.3);
}
body.light-theme .btn-outline:hover {
  border-color: var(--white);
}

/* Footer */
body.light-theme footer {
  background: var(--bg2);
}
body.light-theme .footer-copy span {
  color: var(--grey);
}

/* Loader */
body.light-theme .loader {
  background: var(--bg);
}
body.light-theme .loader-track {
  background: var(--bg3);
}

/* Scroll progress */
body.light-theme #scroll-prog {
  background: var(--bg3);
}

/* Section labels stay accent */
body.light-theme .section-label {
  color: var(--accent);
}

/* Hero intro */
body.light-theme .hero-intro-text {
  color: var(--accent);
}

/* Contact sub text */
body.light-theme .contact-sub {
  color: var(--grey);
}
body.light-theme .c-info-item a,
body.light-theme .c-info-item span {
  color: rgba(var(--white-rgb), 0.8);
}

/* All the rest of your styles remain exactly the same, using the variables above */
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
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  transition: all 0.2s;
}
.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

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
.btn-accent:hover { background: #c93d0d; }
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