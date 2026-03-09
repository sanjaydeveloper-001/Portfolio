// App.jsx
import { useState, useEffect, useRef } from 'react';
import { Cursor, ScrollProgress, Loader } from './components/Ui';
import { Navbar, NAV_IDS }               from './components/Navbar';
import Hero                              from './components/Hero';
import About                             from './components/About';
import Skills                            from './components/Skills';
import Projects                          from './components/Projects';
import Education                         from './components/Education';
import Experience                        from './components/Experience';
import Certifications                    from './components/Certifications';
import Interests                         from './components/Interests';
import Contact                           from './components/Contact';
import Footer                            from './components/Footer';
import { usePortfolioData, useActiveSection, useReveal } from './hooks';
import { GLOBAL_CSS } from './components/globalStyles';

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [theme,      setTheme]      = useState('dark');
  const { data, loading }           = usePortfolioData();

  useReveal();
  const active = useActiveSection(NAV_IDS);

  /* ── Inject global CSS once ── */
  useEffect(() => {
    const id = 'portfolio-global-styles';
    if (!document.getElementById(id)) {
      const tag = document.createElement('style');
      tag.id = id;
      tag.textContent = GLOBAL_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  /* ── Theme ── */
  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);
  const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark');

  /* ── Loader timing ── */
  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setLoaderDone(true), 1800);
      return () => clearTimeout(t);
    }
  }, [loading]);

  /* ─────────────────────────────────────────────────────────
     SCROLL-THEN-STICK + BLUR CRUSH EFFECT
     ─────────────────────────────────────────────────────────
     HOW IT WORKS:
     • Each .stack-panel has position:sticky.
     • Its `top` is set to  -(panelHeight - viewportHeight)
       so the panel must scroll fully into view before it sticks.
       A panel shorter than the viewport gets top:0 (sticks immediately,
       but it was already fully visible since load).
     • Once stuck, the next panel scrolls up and covers it.
     • As the next panel rises, we apply blur + scale + dim to the
       current panel's .stack-inner — the "crushed card" effect.
     • The last panel (Contact+Footer) is NOT sticky at all.
  ───────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!loaderDone) return;

    /* ── Step 1: set sticky `top` per panel ── */
    const setTops = () => {
      const panels = document.querySelectorAll('.stack-panel');
      const viewH  = window.innerHeight;
      panels.forEach(panel => {
        const h   = panel.querySelector('.stack-inner')?.offsetHeight || panel.offsetHeight;
        // If the panel is taller than the viewport, we want it to
        // scroll until its BOTTOM reaches the viewport bottom, then stick.
        // That means top = -(h - viewH).  If h <= viewH, top = 0.
        const stickyTop = h > viewH ? -(h - viewH) : 0;
        panel.style.top = `${stickyTop}px`;
      });
    };

    setTops();
    window.addEventListener('resize', setTops);

    /* ── Step 2: blur/scale the outgoing panel as next one rises ── */
    const onScroll = () => {
      const panels = document.querySelectorAll('.stack-panel');
      const viewH  = window.innerHeight;

      panels.forEach((panel, i) => {
        const next  = panels[i + 1];
        const inner = panel.querySelector('.stack-inner');
        if (!next || !inner) return;

        const nextTop = next.getBoundingClientRect().top;

        // overlap: 0 = next panel's top still below viewport bottom (not entered)
        //          1 = next panel's top has reached the top of the viewport
        const overlap = Math.max(0, Math.min(1,
          (viewH - nextTop) / viewH
        ));

        const blur  = overlap * 7;
        const scale = 1 - overlap * 0.04;
        const dim   = overlap * 0.55;

        inner.style.filter    = `blur(${blur}px) brightness(${1 - dim})`;
        inner.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', setTops);
    };
  }, [loaderDone]);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Loader name={data.profile?.name} done={loaderDone} />

      <Navbar
        profile={data.profile}
        active={active}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="main-wrap">

        {/* ── Hero ── */}
        <div className="stack-panel" style={{ zIndex: 10 }}>
          <div className="stack-inner">
            <Hero profile={data.profile} />
          </div>
        </div>

        {/* ── About ── */}
        <div className="stack-panel" style={{ zIndex: 20 }}>
          <div className="stack-inner">
            <About profile={data.profile} />
          </div>
        </div>

        {/* ── Skills ── */}
        <div className="stack-panel" style={{ zIndex: 30 }}>
          <div className="stack-inner">
            <Skills data={data.skills} />
          </div>
        </div>

        {/* ── Projects ── */}
        <div className="stack-panel" style={{ zIndex: 40 }}>
          <div className="stack-inner">
            <Projects projects={data.projects} />
          </div>
        </div>

        {/* ── Education ── */}
        <div className="stack-panel" style={{ zIndex: 50 }}>
          <div className="stack-inner">
            <Education items={data.education} />
          </div>
        </div>

        {/* ── Experience ── */}
        <div className="stack-panel" style={{ zIndex: 60 }}>
          <div className="stack-inner">
            <Experience items={data.experience} />
          </div>
        </div>

        {/* ── Certifications ── */}
        <div className="stack-panel" style={{ zIndex: 70 }}>
          <div className="stack-inner">
            <Certifications items={data.certifications} />
          </div>
        </div>

        {/* ── Interests ── */}
        <div className="stack-panel" style={{ zIndex: 80 }}>
          <div className="stack-inner">
            <Interests items={data.interests} />
          </div>
        </div>

        {/* ── Contact + Footer ──
            NOT sticky — user scrolls through it freely.
            Nothing slides over it, so no blur needed. */}
        <div style={{ position: 'relative', zIndex: 90 }}>
          <div className="stack-inner">
            <Contact profile={data.profile} />
            <Footer  profile={data.profile} />
          </div>
        </div>

      </main>
    </>
  );
}