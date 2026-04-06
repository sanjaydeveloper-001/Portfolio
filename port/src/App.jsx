// App.jsx
import { useState, useEffect } from 'react';
import { BubbleBurst, ScrollProgress } from './components/Ui';
import { Navbar, NAV_IDS }            from './components/Navbar';
import Hero                           from './components/Hero';
import About                          from './components/About';
import Skills                         from './components/Skills';
import Projects                       from './components/Projects';
import Education                      from './components/Education';
import Experience                     from './components/Experience';
import Certifications                 from './components/Certifications';
import Interests                      from './components/Interests';
import Contact                        from './components/Contact';
import Footer                         from './components/Footer';
import BackToTop                      from './components/BackToTop';
import { usePortfolioData, useActiveSection, useReveal } from './hooks';
import { GLOBAL_CSS } from './components/globalStyles';
import Loader from './components/Loader';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const { data, loading } = usePortfolioData();

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

  if(loading) return <Loader loading={loading} />;
  return (
    <>
      {/* Bubble burst on double-click — no custom cursor */}
      <BubbleBurst />
      <ScrollProgress />

      <Navbar
        profile={data.profile}
        active={active}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="main-wrap">
        <Hero         profile={data.profile} />
        <About        profile={data.profile} />
        <Projects     projects={data.projects} />
        <Experience   items={data.experience} />
        <Certifications items={data.certifications} />
        <Skills       data={data.skills} />
        <Interests    items={data.interests} />
        <Education    items={data.education} />
        <Contact      profile={data.profile} />
        <Footer       profile={data.profile} />
      </main>

      <BackToTop />
    </>
  );
}