// globalStyles.js
export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Space+Mono&display=swap');

/* ═══════════════════════════════════════
   CSS VARIABLES — DARK (default)
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
  --red:         #E8490F;
  --black:       #0A0A0A;
  --surface:     #141414;
  --surface-2:   #1E1E1E;
}

/* ═══════════════════════════════════════
   CSS VARIABLES — LIGHT
═══════════════════════════════════════ */
body.light-theme {
  --accent:    #C93D06;
  --accent-rgb:201,61,6;
  --bg:        #FFFFFF;
  --bg-rgb:    255,255,255;
  --bg2:       #F5F5F5;
  --bg3:       #EBEBEB;
  --white:     #0D0D0D;
  --white-rgb: 13,13,13;
  --grey:      #4A4A4A;
  --grey2:     #888888;
  --border:    rgba(13,13,13,0.10);
}

/* ── LIGHT: Navbar ── */
body.light-theme .navbar { background:rgba(255,255,255,0.97); border-bottom:1px solid rgba(13,13,13,.10); box-shadow:0 1px 20px rgba(13,13,13,.06); }
body.light-theme .nav-logo { color:#0D0D0D; }
body.light-theme .nav-links button { color:#6A6A6A; }
body.light-theme .nav-links button:hover,
body.light-theme .nav-links button.active { color:#0D0D0D; }
body.light-theme .nav-cta { border-color:#0D0D0D; color:#0D0D0D; }
body.light-theme .nav-cta:hover { background:#0D0D0D; color:#FFFFFF; }
body.light-theme .theme-toggle { border-color:rgba(13,13,13,.15); color:#0D0D0D; }
body.light-theme .hamburger span { background:#0D0D0D; }

/* ── LIGHT: Mobile drawer ── */
body.light-theme .mob-drawer { background:#FFFFFF; border-left-color:rgba(13,13,13,.10); }
body.light-theme .mob-profile-name { color:#0D0D0D; }
body.light-theme .mob-nav-item { border-bottom-color:rgba(13,13,13,.08); }
body.light-theme .mob-nav-item:first-child { border-top-color:rgba(13,13,13,.08); }
body.light-theme .mob-nav-label { color:#6A6A6A; }
body.light-theme .mob-nav-item:hover .mob-nav-label,
body.light-theme .mob-nav-item.active .mob-nav-label { color:var(--accent); }
body.light-theme .mob-theme-btn { border-color:rgba(13,13,13,.12); color:#6A6A6A; }
body.light-theme .mob-theme-btn:hover { color:#0D0D0D; border-color:var(--accent); }

/* ── LIGHT: Misc ── */
body.light-theme .loader { background:#FFFFFF; }
body.light-theme .loader-track { background:#EBEBEB; }
body.light-theme .loader-word { color:#0D0D0D; }
body.light-theme #scroll-prog { background:#EBEBEB; }
body.light-theme #home { background:#FFFFFF; }
body.light-theme .hero-name { color:#0D0D0D; }
body.light-theme .hero-intro-text { color:var(--accent); }
body.light-theme .hero-desc { color:#5A5A5A; }
body.light-theme .hero-stat-num .plus { color:#0D0D0D; }
body.light-theme .hero-stat-label { color:#7A7A7A; }
body.light-theme .hero-img-wrap::after { background:linear-gradient(to right,#FFF 0%,transparent 55%),linear-gradient(to top,#FFF 0%,transparent 40%); }
body.light-theme .hero-socials a { border-color:rgba(13,13,13,.12); color:#888; }
body.light-theme .hero-socials a:hover { border-color:var(--accent); color:var(--accent); }
body.light-theme .btn-outline { color:#0D0D0D; border-color:rgba(13,13,13,.25); }
body.light-theme .btn-outline:hover { border-color:#0D0D0D; background:#0D0D0D; color:#FFF; }
body.light-theme .sec-heading { color:#0D0D0D; }
body.light-theme .section-label { color:var(--accent); }

/* ── LIGHT: About ── */
body.light-theme #about { background:#FFFFFF; }
body.light-theme .about-title { color:#0D0D0D; }
body.light-theme .about-bio { color:#5A5A5A; }
body.light-theme .about-bio strong { color:#0D0D0D; }
body.light-theme .info-card { background:#F0F0F0; border-color:rgba(13,13,13,.10); }
body.light-theme .info-card span { color:#0D0D0D; }
body.light-theme .about-photo-stat { background:#FFF; border-color:rgba(13,13,13,.10); }
body.light-theme .about-photo-stat-label { color:#888; }
body.light-theme .about-divider { background:rgba(13,13,13,.10); }

/* ── LIGHT: Skills / Projects / Education / Certs ── */
body.light-theme #skills { background:#FFFFFF; }
body.light-theme #projects { background:#FFFFFF; }
body.light-theme #education { background:#FFFFFF; }
body.light-theme .edu-logo { background:#F0F0F0; border-color:rgba(13,13,13,.10); color:rgba(13,13,13,.25); }
body.light-theme .edu-year { color:#888; }
body.light-theme .edu-name { color:#0D0D0D; }
body.light-theme .edu-course { color:#6A6A6A; }
body.light-theme #certifications { background:#FFFFFF; }
body.light-theme .cert-card { background:#FFF; border-color:rgba(13,13,13,.10); box-shadow:0 2px 16px rgba(13,13,13,.06); }
body.light-theme .cert-card:hover { border-color:rgba(201,61,6,.4); box-shadow:0 8px 32px rgba(13,13,13,.10); }
body.light-theme .cert-thumb { background:#F0F0F0; }
body.light-theme .cert-name { color:#0D0D0D; }
body.light-theme .cert-issuer { color:#6A6A6A; }

/* ── LIGHT: Experience ── */
body.light-theme #experience { background:#F7F7F7; }
body.light-theme .exp-card-inner { background:#FFF; border-color:rgba(0,0,0,.1); }
body.light-theme .exp-card-company { color:#0D0D0D; }
body.light-theme .exp-card-role { color:#6A6A6A; }
body.light-theme .exp-card-desc { color:rgba(0,0,0,.6); }
body.light-theme .exp-card-badge { color:#C0392B; border-color:rgba(192,57,43,.3); }
body.light-theme .exp-timeline::before { background:rgba(0,0,0,.1); }
body.light-theme .exp-card::before { border-color:#F7F7F7 !important; }

/* ── LIGHT: Interests / Contact / Footer ── */
body.light-theme #interests { background:#F7F7F7; }
body.light-theme .int-item { color:rgba(13,13,13,.18); border-color:rgba(13,13,13,.10); }
body.light-theme .int-item:hover { color:#0D0D0D; background:#EBEBEB; border-color:rgba(13,13,13,.25); }
body.light-theme #contact { background:#FFFFFF; }
body.light-theme .contact-heading { color:#0D0D0D; }
body.light-theme .contact-heading span { color:var(--accent); }
body.light-theme .contact-sub { color:#6A6A6A; }
body.light-theme .c-info-item small { color:var(--accent); }
body.light-theme .c-info-item a,
body.light-theme .c-info-item span { color:#1A1A1A; }
body.light-theme .c-form-label { color:#0D0D0D; }
body.light-theme .c-form-label em { color:var(--accent); }
body.light-theme .cfield { color:#0D0D0D; background:transparent; border-bottom-color:rgba(13,13,13,.15); }
body.light-theme .cfield:focus { border-bottom-color:rgba(13,13,13,.45); }
body.light-theme .cfield::placeholder { color:#AAAAAA; }
body.light-theme footer { background:#F5F5F5; border-top-color:rgba(13,13,13,.10); }
body.light-theme .footer-copy { color:#AAAAAA; }
body.light-theme .footer-copy span { color:#6A6A6A; }
body.light-theme .footer-back { color:#6A6A6A; border-color:rgba(13,13,13,.12); }
body.light-theme .footer-back:hover { color:#0D0D0D; border-color:rgba(13,13,13,.35); }

/* ═══════════════════════════════════════
   BASE
═══════════════════════════════════════ */
*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
html { scroll-behavior:smooth; }
body { background:var(--bg); color:var(--white); font-family:var(--font-body); font-size:15px; line-height:1.7; overflow-x:hidden; cursor:none; }
a { color:inherit; text-decoration:none; }
button { cursor:none; font-family:var(--font-body); }
img { max-width:100%; display:block; }
svg { width:18px; height:18px; fill:none; stroke:currentColor; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }

/* ── Scroll bar ── */
#scroll-prog { position:fixed; right:0; top:0; width:2px; height:100vh; background:var(--bg3); z-index:999; }
#scroll-fill { width:100%; background:var(--accent); }

/* ── Loader ── */
.loader { position:fixed; inset:0; background:var(--bg); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:10000; gap:24px; transition:opacity .6s ease,visibility .6s ease; }
.loader.done { opacity:0; visibility:hidden; pointer-events:none; }
.loader-word { font-family:var(--font-display); font-size:clamp(64px,12vw,120px); letter-spacing:.06em; color:var(--white); line-height:1; }
.loader-word span { color:var(--accent); }
.loader-track { width:220px; height:1px; background:var(--bg3); }
.loader-fill { height:100%; background:var(--accent); animation:lf 1.8s var(--ease) forwards; }
@keyframes lf { from{width:0} to{width:100%} }

/* ── Navbar ── */
.navbar { position:fixed; top:0; left:0; right:0; height:var(--nav-h); z-index:500; display:flex; align-items:center; justify-content:space-between; padding:0 48px; background:rgba(var(--bg-rgb),.96); backdrop-filter:blur(14px); border-bottom:1px solid var(--border); }
.nav-logo { font-family:var(--font-display); font-size:28px; letter-spacing:.08em; color:var(--white); display:flex; align-items:center; gap:2px; }
.nav-logo span { color:var(--accent); }
.nav-links { display:flex; gap:36px; list-style:none; }
.nav-links button { background:none; border:none; font-family:var(--font-body); font-size:13px; font-weight:500; letter-spacing:.04em; color:var(--grey); transition:color .2s; position:relative; padding-bottom:2px; }
.nav-links button::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:2px; background:var(--accent); transition:width .25s var(--ease); }
.nav-links button:hover,.nav-links button.active { color:var(--white); }
.nav-links button.active::after,.nav-links button:hover::after { width:100%; }
.nav-right { display:flex; align-items:center; gap:16px; }
.nav-cta { font-family:var(--font-body); font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; padding:10px 24px; border:1.5px solid var(--white); color:var(--white); background:none; transition:background .2s,color .2s; border-radius:2px; }
.nav-cta:hover { background:var(--white); color:var(--bg); }
.theme-toggle { background:none; border:1px solid var(--border); border-radius:30px; width:40px; height:40px; display:flex; align-items:center; justify-content:center; color:var(--white); transition:all .2s; }
.theme-toggle:hover { border-color:var(--accent); color:var(--accent); }

/* ── Hamburger ── */
.hamburger { display:none; flex-direction:column; justify-content:center; align-items:flex-end; gap:5px; width:32px; height:32px; background:none; border:none; padding:0; z-index:600; position:relative; }
.hamburger span { display:block; height:1.5px; background:var(--white); border-radius:2px; transition:all .35s var(--ease); transform-origin:right center; }
.hamburger span:nth-child(1) { width:24px; }
.hamburger span:nth-child(2) { width:16px; }
.hamburger span:nth-child(3) { width:20px; }
.hamburger.open span:nth-child(1) { width:22px; transform:rotate(-45deg); }
.hamburger.open span:nth-child(2) { width:0; opacity:0; }
.hamburger.open span:nth-child(3) { width:22px; transform:rotate(45deg); }

/* ── Mobile backdrop + drawer ── */
.mob-backdrop { display:none; position:fixed; inset:0; background:rgba(0,0,0,.6); z-index:540; opacity:0; pointer-events:none; transition:opacity .35s ease; backdrop-filter:blur(3px); }
.mob-backdrop.open { opacity:1; pointer-events:all; }
.mob-drawer { display:none; position:fixed; top:0; right:0; width:min(300px,82vw); height:100dvh; background:var(--bg); border-left:1px solid var(--border); z-index:550; flex-direction:column; padding:calc(var(--nav-h) + 28px) 0 36px; transform:translateX(100%); transition:transform .4s var(--ease); overflow-y:auto; }
.mob-drawer.open { transform:translateX(0); box-shadow:-20px 0 60px rgba(0,0,0,.5); }
.mob-profile { padding:0 28px 24px; border-bottom:1px solid var(--border); margin-bottom:4px; }
.mob-profile-name { font-family:var(--font-display); font-size:20px; letter-spacing:.06em; color:var(--white); line-height:1; margin-bottom:3px; }
.mob-profile-name span { color:var(--accent); }
.mob-profile-sub { font-family:var(--font-mono); font-size:9px; letter-spacing:.2em; text-transform:uppercase; color:var(--grey2); }
.mob-nav-list { display:flex; flex-direction:column; padding:0 28px; }
.mob-nav-item { display:flex; align-items:center; justify-content:space-between; padding:14px 0; border-bottom:1px solid var(--border); background:none; border-top:none; border-left:none; border-right:none; width:100%; text-align:left; transition:padding-left .25s var(--ease); }
.mob-nav-item:first-child { border-top:1px solid var(--border); }
.mob-nav-item:hover,.mob-nav-item.active { padding-left:6px; }
.mob-nav-label { font-family:var(--font-body); font-size:11px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--grey); transition:color .2s; }
.mob-nav-item:hover .mob-nav-label { color:var(--white); }
.mob-nav-item.active .mob-nav-label { color:var(--accent); }
.mob-nav-idx { font-family:var(--font-mono); font-size:9px; color:var(--grey2); letter-spacing:.06em; transition:color .2s; }
.mob-nav-item:hover .mob-nav-idx,.mob-nav-item.active .mob-nav-idx { color:var(--accent); }
.mob-actions { margin-top:auto; padding:28px 28px 0; display:flex; flex-direction:column; gap:10px; }
.mob-contact-btn { width:100%; padding:12px 20px; background:var(--accent); color:#fff; font-family:var(--font-body); font-size:11px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; border:none; border-radius:2px; transition:background .2s; }
.mob-contact-btn:hover { background:#b83305; }
.mob-theme-btn { width:100%; padding:10px 20px; background:none; border:1px solid var(--border); color:var(--grey); font-family:var(--font-body); font-size:11px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; border-radius:2px; transition:border-color .2s,color .2s; }
.mob-theme-btn:hover { border-color:var(--accent); color:var(--white); }

/* ── Layout ── */
.main-wrap { padding-top:var(--nav-h); }
.section { padding:100px 80px; border-bottom:1px solid var(--border); position:relative; }
.section-label { font-family:var(--font-mono); font-size:10px; letter-spacing:.28em; text-transform:uppercase; color:var(--accent); margin-bottom:12px; }
.sec-heading { font-family:var(--font-display); font-size:clamp(44px,5vw,72px); line-height:1; letter-spacing:.04em; color:var(--white); margin-bottom:48px; }

/* ── Reveal ── */
.reveal { opacity:0; transform:translateY(28px); transition:opacity .7s var(--ease),transform .7s var(--ease); }
.reveal.in { opacity:1; transform:none; }
.d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s} .d4{transition-delay:.4s} .d5{transition-delay:.5s}

/* ── Buttons ── */
.btn { display:inline-flex; align-items:center; gap:10px; padding:14px 32px; font-size:12px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; border-radius:2px; border:none; transition:all .25s ease; font-family:var(--font-body); }
.btn-accent { background:var(--accent); color:#fff; }
.btn-accent:hover { background:#b83305; }
.btn-outline { background:transparent; color:var(--white); border:1.5px solid rgba(var(--white-rgb),.25); }
.btn-outline:hover { border-color:var(--white); }
.btn svg { width:14px; height:14px; }

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
#home { min-height:calc(100vh - var(--nav-h)); background:var(--bg); position:relative; overflow:hidden; display:flex; align-items:stretch; }
.hero-bg-text { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-family:var(--font-display); font-size:clamp(120px,18vw,260px); letter-spacing:.05em; line-height:1; -webkit-text-stroke:1px rgba(var(--white-rgb),.04); color:transparent; white-space:nowrap; pointer-events:none; user-select:none; z-index:0; }
.hero-inner { width:100%; display:grid; grid-template-columns:1fr 1fr; position:relative; z-index:1; }
.hero-left { display:flex; flex-direction:column; justify-content:center; padding:80px 60px 80px 80px; }
.hero-intro { display:flex; align-items:center; gap:14px; margin-bottom:20px; }
.hero-intro-line { width:48px; height:1px; background:var(--accent); }
.hero-intro-text { font-family:var(--font-mono); font-size:11px; letter-spacing:.28em; text-transform:uppercase; color:var(--accent); }
.hero-name { font-family:var(--font-display); font-size:clamp(52px,6.5vw,96px); line-height:.95; letter-spacing:.04em; color:var(--white); margin-bottom:20px; }
.hero-desc { font-size:14px; color:rgba(var(--white-rgb),.45); line-height:1.85; max-width:420px; margin-bottom:36px; }
.hero-cta { display:flex; gap:16px; flex-wrap:wrap; }
.hero-stats { display:flex; gap:0; margin-top:52px; border-top:1px solid var(--border); padding-top:32px; }
.hero-stat-item { flex:1; padding:0 20px; border-right:1px solid var(--border); }
.hero-stat-item:first-child { padding-left:0; }
.hero-stat-item:last-child { border-right:none; }
.hero-stat-num { font-family:var(--font-display); font-size:44px; color:var(--accent); line-height:1; margin-bottom:4px; display:flex; align-items:baseline; gap:2px; }
.hero-stat-num .plus { font-size:28px; color:var(--white); }
.hero-stat-label { font-size:10px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--grey); }
.hero-socials { position:absolute; right:28px; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:16px; z-index:2; }
.hero-socials a { width:36px; height:36px; display:flex; align-items:center; justify-content:center; border:1px solid var(--border); color:var(--grey); transition:border-color .2s,color .2s; border-radius:50%; font-family:var(--font-mono); }
.hero-socials a:hover { border-color:var(--accent); color:var(--accent); }
.hero-right { position:relative; overflow:hidden; }
.hero-img-wrap { position:absolute; inset:0; }
.hero-img-wrap img { width:100%; height:100%; object-fit:cover; object-position:center top; filter:brightness(.75); }
.hero-img-wrap::after { content:''; position:absolute; inset:0; background:linear-gradient(to right,var(--bg) 0%,transparent 50%),linear-gradient(to top,var(--bg) 0%,transparent 40%); }
.hero-domain-badge { position:absolute; bottom:48px; left:-1px; background:var(--accent); color:#fff; font-family:var(--font-mono); font-size:10px; letter-spacing:.2em; text-transform:uppercase; padding:10px 24px; z-index:3; }

/* ═══════════════════════════════════════
   ABOUT
═══════════════════════════════════════ */
#about {
  padding: 180px 0;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
#about::before {
  content:''; position:absolute; inset:0;
  background-image:linear-gradient(rgba(var(--white-rgb),.018) 1px,transparent 1px),linear-gradient(90deg,rgba(var(--white-rgb),.018) 1px,transparent 1px);
  background-size:60px 60px; pointer-events:none;
}
#about::after {
  content:''; position:absolute; left:-80px; top:50%; transform:translateY(-50%);
  width:500px; height:500px;
  background:radial-gradient(circle,rgba(232,73,15,.08) 0%,transparent 70%);
  pointer-events:none; border-radius:50%;
}
.about-wrap { max-width:1200px; margin:0 auto; padding:0 48px; display:grid; grid-template-columns:420px 1fr; gap:80px; align-items:center; position:relative; z-index:1; }
.about-photo { position:relative; }
.about-photo-index { position:absolute; top:-20px; left:0; font-family:var(--font-mono); font-size:9px; letter-spacing:.28em; text-transform:uppercase; color:var(--accent); z-index:3; }
.about-photo img { width:100%; border-radius:4px; object-fit:cover; object-position:center top; display:block; position:relative; z-index:2; filter:brightness(.88) contrast(1.04); transition:filter .4s ease; }
.about-photo:hover img { filter:brightness(.95) contrast(1.04); }
.about-photo::before { content:''; position:absolute; width:100%; height:100%; border:1.5px solid var(--accent); border-radius:4px; top:16px; left:16px; z-index:1; transition:top .4s ease,left .4s ease; }
.about-photo:hover::before { top:10px; left:10px; }
.about-photo::after { content:''; position:absolute; width:100%; height:100%; border:1px solid rgba(var(--white-rgb),.05); border-radius:4px; top:8px; left:8px; z-index:1; }
.about-photo-badge { position:absolute; bottom:24px; right:-16px; background:var(--accent); color:#fff; font-family:var(--font-mono); font-size:9px; letter-spacing:.2em; text-transform:uppercase; padding:10px 18px; border-radius:2px; z-index:4; box-shadow:0 8px 32px rgba(232,73,15,.35); }
.about-photo-stat { position:absolute; bottom:80px; left:-28px; background:var(--bg2); border:1px solid var(--border); border-radius:6px; padding:14px 20px; z-index:4; box-shadow:0 16px 40px rgba(0,0,0,.5); }
.about-photo-stat-num { font-family:var(--font-display); font-size:36px; color:var(--accent); line-height:1; letter-spacing:.02em; }
.about-photo-stat-label { font-family:var(--font-mono); font-size:8px; letter-spacing:.2em; text-transform:uppercase; color:var(--grey); margin-top:4px; }
.about-label { font-family:var(--font-mono); font-size:10px; letter-spacing:.3em; text-transform:uppercase; color:var(--accent); margin-bottom:18px; display:flex; align-items:center; gap:12px; }
.about-label::before { content:''; display:inline-block; width:28px; height:1px; background:var(--accent); }
.about-title { font-family:var(--font-display); font-size:clamp(44px,5vw,68px); letter-spacing:.04em; color:var(--white); line-height:1; margin-bottom:28px; }
.about-title span { color:var(--accent); }
.about-bio { font-size:13.5px; line-height:2; color:rgba(var(--white-rgb),.45); margin-bottom:16px; max-width:560px; }
.about-bio strong { color:rgba(var(--white-rgb),.82); font-weight:600; }
.about-divider { width:100%; height:1px; background:var(--border); margin:28px 0; }
.about-info-label { font-family:var(--font-mono); font-size:9px; letter-spacing:.28em; text-transform:uppercase; color:var(--accent); margin-bottom:16px; display:flex; align-items:center; gap:10px; }
.about-info-label::after { content:''; flex:1; max-width:50px; height:1px; background:var(--border); }
.about-info { display:grid; grid-template-columns:repeat(2,1fr); gap:10px; margin-bottom:36px; }
.info-card { padding:16px 18px; border-radius:4px; background:var(--bg2); border:1px solid var(--border); transition:border-color .25s,transform .25s,background .25s; position:relative; overflow:hidden; }
.info-card::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px; background:var(--accent); transition:width .3s ease; }
.info-card:hover::after { width:100%; }
.info-card:hover { border-color:rgba(232,73,15,.3); transform:translateY(-3px); background:var(--bg3); }
.info-card small { display:block; font-family:var(--font-mono); font-size:8px; letter-spacing:.22em; text-transform:uppercase; color:var(--accent); margin-bottom:5px; }
.info-card span { font-size:13px; font-weight:600; color:rgba(var(--white-rgb),.78); }
.about-cta { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }

/* ═══════════════════════════════════════
   SKILLS
═══════════════════════════════════════ */
#skills {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 100px 80px;
  box-sizing: border-box;
}

@keyframes skillsFadeUp {
  from { opacity:0; transform:translateY(20px); }
  to   { opacity:1; transform:translateY(0); }
}
.skills-fade { animation:skillsFadeUp .5s cubic-bezier(.16,1,.3,1) both; }

.skills-main-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:start; }
.ring-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:28px 16px; justify-items:center; }

/* ═══════════════════════════════════════
   PROJECTS
═══════════════════════════════════════ */
#projects {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 100px 80px;
  box-sizing: border-box;
}

.proj-grid { display:grid; gap:18px; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); }

@keyframes projFadeUp {
  from { opacity:0; transform:translateY(18px); }
  to   { opacity:1; transform:translateY(0); }
}
.proj-item { animation:projFadeUp .4s cubic-bezier(.16,1,.3,1) both; }

.show-all-btn {
  background:transparent;
  border:1px solid var(--border);
  border-radius:8px;
  color:rgba(var(--white-rgb),.55);
  font-family:var(--font-mono);
  font-size:12px;
  letter-spacing:.14em;
  text-transform:uppercase;
  padding:12px 28px;
  transition:background .25s,border-color .25s,color .25s,transform .25s;
  display:inline-flex;
  align-items:center;
  gap:8px;
}
.show-all-btn:hover {
  background:rgba(var(--white-rgb),.06);
  border-color:rgba(var(--white-rgb),.28);
  color:rgba(var(--white-rgb),.85);
  transform:translateY(-2px);
}

/* ═══════════════════════════════════════
   EDUCATION
═══════════════════════════════════════ */
#education { background:var(--bg); }
.edu-table { border-top:1px solid var(--border); }
.edu-row { display:grid; grid-template-columns:80px 220px 1fr auto; align-items:center; gap:36px; padding:32px 0; border-bottom:1px solid var(--border); transition:background .2s; }
.edu-row:hover { background:rgba(var(--white-rgb),.015); margin:0 -16px; padding-left:16px; padding-right:16px; border-radius:4px; }
.edu-logo { width:60px; height:60px; display:flex; align-items:center; justify-content:center; background:var(--bg2); border:1px solid var(--border); border-radius:4px; font-family:var(--font-display); font-size:22px; color:rgba(var(--white-rgb),.2); flex-shrink:0; }
.edu-year { font-family:var(--font-mono); font-size:10px; color:var(--grey); letter-spacing:.1em; margin-bottom:4px; }
.edu-name { font-size:15px; font-weight:700; color:var(--white); margin-bottom:2px; }
.edu-course { font-size:12px; color:rgba(var(--white-rgb),.35); }
.edu-desc { font-size:12px; color:rgba(var(--white-rgb),.35); line-height:1.8; }
.edu-badge { font-size:10px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--accent); border:1px solid rgba(232,73,15,.3); padding:4px 10px; border-radius:2px; white-space:nowrap; }

/* ═══════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════ */
#experience { background:var(--bg2); }
.exp-hdr { margin-bottom:48px; }
.exp-hdr__label { font-family:var(--font-mono); font-size:10px; letter-spacing:.28em; text-transform:uppercase; color:var(--accent); margin-bottom:10px; }
.exp-hdr__title { font-family:var(--font-display); font-size:clamp(44px,5vw,72px); line-height:1; letter-spacing:.04em; color:var(--white); margin:0; }
.exp-hdr__title span { color:var(--accent); }
.exp-timeline { position:relative; max-width:1200px; margin:0 auto; }
.exp-timeline::before { content:''; position:absolute; left:50%; top:0; bottom:0; width:2px; background:var(--border); transform:translateX(-50%); }
.exp-card { position:relative; margin-bottom:60px; width:calc(50% - 40px); }
.exp-card:nth-child(odd) { margin-left:0; margin-right:auto; padding-right:40px; }
.exp-card:nth-child(even) { margin-left:auto; margin-right:0; padding-left:40px; }
.exp-card:nth-child(odd)::before { content:''; position:absolute; right:-6px; top:8px; width:12px; height:12px; background:var(--accent); border:3px solid var(--bg2); border-radius:50%; z-index:1; }
.exp-card:nth-child(even)::before { content:''; position:absolute; left:-6px; top:8px; width:12px; height:12px; background:var(--accent); border:3px solid var(--bg2); border-radius:50%; z-index:1; }
.exp-card-inner { background:var(--bg3); border:1px solid var(--border); border-radius:2px; padding:24px; transition:transform .3s ease,border-color .3s ease; }
.exp-card-inner:hover { transform:translateY(-4px); border-color:rgba(255,255,255,.12); }
.exp-card-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; gap:16px; }
.exp-card-company { font-family:var(--font-display); font-size:20px; font-weight:500; color:var(--white); margin-bottom:6px; }
.exp-card-role { font-size:12px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--grey); }
.exp-card-badge { font-size:9px; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:var(--accent); border:1px solid rgba(232,73,15,.3); border-radius:1px; padding:4px 10px; white-space:nowrap; }
.exp-card-desc { font-size:13px; color:rgba(var(--white-rgb),.45); line-height:1.8; }

/* ═══════════════════════════════════════
   CERTIFICATIONS
═══════════════════════════════════════ */
#certifications { background:var(--bg); }
.certs-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:16px; }
.cert-card { background:var(--bg2); border:1px solid var(--border); border-radius:4px; overflow:hidden; transition:transform .3s var(--ease),border-color .3s; }
.cert-card:hover { transform:translateY(-6px); border-color:rgba(232,73,15,.35); }
.cert-thumb { width:100%; aspect-ratio:16/9; display:flex; align-items:center; justify-content:center; background:var(--bg3); font-size:40px; }
.cert-thumb img { width:100%; height:100%; object-fit:cover; }
.cert-body { padding:18px; }
.cert-name { font-size:13px; font-weight:700; color:var(--white); margin-bottom:4px; }
.cert-issuer { font-size:11px; color:var(--grey); margin-bottom:12px; }
.cert-link { display:inline-flex; align-items:center; gap:6px; font-size:10px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--accent); transition:gap .2s; }
.cert-link:hover { gap:10px; }
.cert-link svg { width:11px; height:11px; }

/* ═══════════════════════════════════════
   INTERESTS
═══════════════════════════════════════ */
#interests { background:var(--bg2); }
.int-cloud { display:flex; flex-wrap:wrap; gap:12px; }
.int-item { font-family:var(--font-display); font-size:clamp(22px,2.6vw,36px); letter-spacing:.04em; color:rgba(var(--white-rgb),.1); border:1px solid var(--border); border-radius:2px; padding:8px 24px; transition:color .3s,border-color .3s,background .3s; cursor:default; }
.int-item:hover { color:var(--white); border-color:rgba(var(--white-rgb),.2); background:var(--bg3); }

/* ═══════════════════════════════════════
   CONTACT + FOOTER
═══════════════════════════════════════ */
#contact { background:var(--bg); }
.contact-grid { display:grid; grid-template-columns:1fr 1.4fr; gap:80px; align-items:start; }
.contact-heading { font-family:var(--font-display); font-size:clamp(44px,5.5vw,80px); line-height:1; color:var(--white); letter-spacing:.04em; margin-bottom:16px; }
.contact-heading span { color:var(--accent); }
.contact-sub { font-size:13px; color:rgba(var(--white-rgb),.35); line-height:1.85; margin-bottom:40px; max-width:320px; }
.contact-info { display:flex; flex-direction:column; gap:20px; }
.c-info-item small { display:block; font-family:var(--font-mono); font-size:9px; letter-spacing:.22em; text-transform:uppercase; color:var(--accent); margin-bottom:4px; }
.c-info-item a,.c-info-item span { font-size:14px; font-weight:600; color:rgba(var(--white-rgb),.75); }
.c-form-label { font-size:16px; font-weight:500; color:var(--white); line-height:1.6; margin-bottom:32px; }
.c-form-label em { color:var(--accent); font-style:normal; }
.cform { display:flex; flex-direction:column; gap:8px; }
.cfield { background:transparent; border:none; border-bottom:1px solid var(--border); padding:14px 4px; color:var(--white); font-family:var(--font-body); font-size:14px; outline:none; transition:border-color .2s; width:100%; resize:none; }
.cfield::placeholder { color:var(--grey2); font-size:13px; }
.cfield:focus { border-bottom-color:rgba(var(--white-rgb),.35); }
textarea.cfield { min-height:110px; margin-top:8px; }
.cform-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.cform-actions { display:flex; margin-top:28px; }
.cform-err { color:var(--accent); font-size:11px; margin-top:8px; }
.sent-state { padding-top:32px; }
.sent-num { font-family:var(--font-display); font-size:80px; color:var(--accent); line-height:1; margin-bottom:14px; }
.sent-msg { font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:var(--grey); margin-bottom:24px; }

footer { display:flex; align-items:center; justify-content:space-between; padding:24px 80px; border-top:1px solid var(--border); flex-wrap:wrap; gap:12px; }
.footer-copy { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; color:var(--grey2); }
.footer-copy span { color:var(--grey); }
.footer-back { display:flex; align-items:center; gap:10px; background:none; border:1px solid var(--border); border-radius:2px; color:var(--grey); font-size:9px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; padding:8px 16px; transition:color .2s,border-color .2s; }
.footer-back:hover { color:var(--white); border-color:rgba(var(--white-rgb),.3); }
.footer-back svg { width:12px; height:12px; }

/* ═══════════════════════════════════════
   PROJECT OVERLAY
═══════════════════════════════════════ */
@keyframes overlayFadeIn { from{opacity:0} to{opacity:1} }
@keyframes overlaySlideUp { from{opacity:0;transform:translateY(24px) scale(.98)} to{opacity:1;transform:translateY(0) scale(1)} }
.overlay-backdrop { animation:overlayFadeIn .2s ease both; }
.overlay-card { animation:overlaySlideUp .3s cubic-bezier(.16,1,.3,1) both; }
.overlay-close-btn:hover { background:rgba(var(--white-rgb),.14) !important; }
.overlay-link-primary:hover { opacity:.85; }
.overlay-link-secondary:hover { background:rgba(var(--white-rgb),.06) !important; color:rgba(var(--white-rgb),.85) !important; }
.overlay-backdrop * { cursor:default; }
.overlay-close-btn,.overlay-link-primary,.overlay-link-secondary { cursor:pointer !important; }

/* ═══════════════════════════════════════
   STACKED SCROLL — SCROLL-THEN-STICK
   ─────────────────────────────────────
   Each panel scrolls into view FULLY
   first. Only once its bottom reaches
   the viewport bottom does it "stick".
   The next panel then slides up over it.

   The actual 'top' value is calculated
   in JS (App.jsx) as -(panelH - viewH).
   This CSS just sets up the sticky
   context and visual clip.
═══════════════════════════════════════ */
.stack-panel {
  position: sticky;
  /* top is set dynamically in JS per panel */
  height: auto;
  overflow: visible;
}

.stack-inner {
  width: 100%;
  will-change: filter, transform;
  transform-origin: center center;
  transition: filter 0.08s linear, transform 0.08s linear;
  clip-path: inset(0);
}

/* Every direct child section fills at least the viewport */
.stack-inner > section {
  min-height: 100vh;
}

/* Skills & Projects: natural content height — taller = more scroll budget */
#skills,
#projects {
  min-height: 100vh;
  height: auto;
}

/* Footer doesn't need full-vh */
.stack-inner > footer {
  min-height: unset;
}

/* ── Mobile: disable stacking entirely ── */
@media (max-width: 768px) {
  .stack-panel {
    position: relative !important;
    top: unset !important;
    overflow: visible;
  }
  .stack-inner {
    filter: none !important;
    transform: none !important;
    clip-path: none !important;
  }
}

/* ═══════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════ */
@media (max-width:1100px) {
  .hero-inner { grid-template-columns:1fr; }
  .hero-right { display:none; }
  .hero-left { padding:80px 48px; }
  .about-wrap { grid-template-columns:1fr; gap:60px; padding:0 32px; }
  .about-photo { max-width:380px; margin:auto; }
  .about-photo-badge { right:0; }
  .skills-main-grid { grid-template-columns:1fr !important; }
  .edu-row { grid-template-columns:60px 1fr auto; }
  .edu-desc { display:none; }
  .contact-grid { grid-template-columns:1fr; gap:48px; }
}

@media (max-width:768px) {
  :root { --nav-h:60px; }
  .navbar { padding:0 20px; }
  .nav-links { display:none; }
  .nav-right { display:none; }
  .hamburger { display:flex; }
  .mob-backdrop { display:block; }
  .mob-drawer { display:flex; }
  .section { padding:64px 24px; }
  #skills { padding:64px 24px; }
  #projects { padding:64px 24px; }
  #home { padding:0; }
  .hero-left { padding:48px 24px 64px; }
  .hero-stats { flex-wrap:wrap; }
  .hero-stat-item { min-width:45%; border-right:none; padding:8px 0; border-bottom:1px solid var(--border); }
  .hero-stat-item:last-child { border-bottom:none; }
  .hero-socials { display:none; }
  .ring-grid { grid-template-columns:repeat(2,1fr) !important; }
  .edu-row { grid-template-columns:1fr; gap:12px; }
  .edu-logo { display:none; }
  .exp-timeline::before { left:20px; transform:none; }
  .exp-card,.exp-card:nth-child(odd),.exp-card:nth-child(even) { width:100%; margin-left:0; margin-right:0; padding-left:50px; padding-right:0; }
  .exp-card:nth-child(odd)::before,.exp-card:nth-child(even)::before { left:14px; right:auto; }
  .exp-card-header { flex-direction:column; align-items:flex-start; }
  .certs-grid { grid-template-columns:repeat(2,1fr); }
  footer { padding:20px 24px; }
  .contact-grid { gap:40px; }
  .cform-row { grid-template-columns:1fr; }
  #about { padding:72px 0; min-height:unset; align-items:flex-start; }
  .about-wrap { padding:0 20px; gap:44px; }
  .about-title { font-size:38px; }
  .about-info { grid-template-columns:1fr; }
}

@media (max-width:480px) {
  .certs-grid { grid-template-columns:1fr; }
  #skills { padding:56px 16px; }
  #projects { padding:56px 16px; }
}
`;