// App.jsx
import { useState, useEffect } from 'react';

import { Cursor, ScrollProgress, Loader } from './components/Ui';
import { Navbar, NAV_IDS }                from './components/Navbar';
import Hero                               from './components/Hero';
import About                              from './components/About';
import Projects                           from './components/Projects';
import Skills                             from './components/Skills';
import Education                          from './components/Education';
import Experience                         from './components/Experience';
import Certifications                     from './components/Certifications';
import Interests                          from './components/Interests';
import Contact                            from './components/Contact';
import Footer                             from './components/Footer';
// import {
//   Certifications, Interests
// }                                         from './components/Sections';
// import { Contact, Footer }                from './components/Contact';

import { usePortfolioData, useActiveSection, useReveal } from './hooks';

// Import the global CSS string (now theme‑aware)
import { GLOBAL_CSS } from './components/globalStyles';

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'
  const { data, loading } = usePortfolioData();

  useReveal();
  const active = useActiveSection(NAV_IDS);

  // Inject global styles once
  useEffect(() => {
    const id = 'portfolio-global-styles';
    if (!document.getElementById(id)) {
      const tag = document.createElement('style');
      tag.id = id;
      tag.textContent = GLOBAL_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  // Toggle theme function (to be passed down)
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setLoaderDone(true), 1800);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Loader name={data.profile?.name} done={loaderDone} />

      {/* Pass theme and toggleTheme to Navbar */}
      <Navbar
        profile={data.profile}
        active={active}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="main-wrap">
        <Hero           profile={data.profile} />
        {/* <Services /> */}
        {/* <CountersBand   profile={data.profile} /> */}
        <About          profile={data.profile} />
        <Skills         data={data.skills} />
        <Projects       projects={data.projects} />
        <Education      items={data.education} />
        <Experience     items={data.experience} />
        <Certifications items={data.certifications} />
        <Interests      items={data.interests} />
        <Contact        profile={data.profile} />
        <Footer         profile={data.profile} />
      </main>
    </>
  );
}