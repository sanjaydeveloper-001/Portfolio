// components/Navbar.jsx
import { useState } from 'react';
import { Icon } from './UI';

export const NAV = [
  { id: 'home',           label: 'Home'           },
  { id: 'about',          label: 'About Me'       },
  { id: 'services',       label: 'Services'       },
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

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          {profile?.name ? profile.name.split(' ')[0] : 'PORT'}
          <span>.</span>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV.slice(0, 6).map(({ id, label }) => (
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

        {/* Theme toggle + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          <button
            className="nav-cta"
            onClick={() => scrollTo('contact')}
          >
            Contact Me →
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <Icon.Close /> : <Icon.Menu />}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => { scrollTo(id); setOpen(false); }}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

export function LeftEdge() { return null; } 