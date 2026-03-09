// components/Navbar.jsx
import { useState, useEffect } from 'react';
import { IoSunnyOutline , IoMoonOutline} from "react-icons/io5";
import { Icon } from './Ui';

export const NAV = [
  { id: 'home',           label: 'Home'           },
  { id: 'about',          label: 'About Me'       },
  { id: 'skills',         label: 'Skills'         },
  { id: 'projects',       label: 'Project'        },
  { id: 'education',      label: 'Education'      },
  { id: 'experience',     label: 'Experience'     },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact',        label: 'Contact Us'     },
];

export const NAV_IDS = NAV.map((n) => n.id);

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function Navbar({ profile, active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          {profile?.name ? profile.name.split(' ')[0] : 'PORT'}
          <span>.</span>
        </div>

        <ul className="nav-links">
          {NAV.slice(0, 7).map(({ id, label }) => (
            <li key={id}>
              <button
                className={active === id ? 'active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <IoMoonOutline/> : <IoSunnyOutline />}
          </button>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>
            Contact Me →
          </button>
        </div>

        {/* Hamburger — visible only on mobile via CSS */}
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Backdrop — mobile only */}
      <div
        className={`mob-backdrop${open ? ' open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Side drawer — mobile only */}
      <div className={`mob-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mob-profile">
          <div className="mob-profile-name">
            {profile?.name ? profile.name.split(' ')[0] : 'PORT'}<span>.</span>
          </div>
          <div className="mob-profile-sub">Portfolio</div>
        </div>

        <nav className="mob-nav-list">
          {NAV.map(({ id, label }, i) => (
            <button
              key={id}
              className={`mob-nav-item${active === id ? ' active' : ''}`}
              onClick={() => handleNav(id)}
            >
              <span className="mob-nav-label">{label}</span>
              <span className="mob-nav-idx">0{i + 1}</span>
            </button>
          ))}
        </nav>

        <div className="mob-actions">
          <button className="mob-contact-btn" onClick={() => handleNav('contact')}>
            Contact Me →
          </button>
          <button className="mob-theme-btn" onClick={onToggleTheme}>
            {theme === 'dark' ? `Light Mode` : `Dark Mode`}
          </button>
        </div>
      </div>
    </>
  );
}

export function LeftEdge() { return null; }