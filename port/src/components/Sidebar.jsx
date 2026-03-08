/**
 * components/Sidebar.jsx
 */

import { Icon } from './Ui';

const NAV = [
  { id: 'home',           label: 'Home',    Ico: Icon.Home    },
  { id: 'about',          label: 'About',   Ico: Icon.User    },
  { id: 'projects',       label: 'Work',    Ico: Icon.Code    },
  { id: 'education',      label: 'Study',   Ico: Icon.GradCap },
  { id: 'experience',     label: 'Career',  Ico: Icon.Brief   },
  { id: 'certifications', label: 'Certs',   Ico: Icon.Award   },
  { id: 'contact',        label: 'Contact', Ico: Icon.Mail    },
];

export const NAV_IDS = NAV.map((n) => n.id);

const socialIcon = (name = '') => {
  const n = name.toLowerCase();
  if (n.includes('github'))   return Icon.Github;
  if (n.includes('linkedin')) return Icon.Linkedin;
  if (n.includes('twitter'))  return Icon.Twitter;
  return Icon.Instagram;
};

export default function Sidebar({ profile, active }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const socials = profile?.social || [];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        {profile?.name ? (
          <>{profile.name.split(' ')[0]}<em>.</em></>
        ) : (
          <>PORT<em>.</em></>
        )}
      </div>

      <nav className="sidebar-nav">
        {NAV.map(({ id, label, Ico }) => (
          <button
            key={id}
            className={`nav-btn${active === id ? ' active' : ''}`}
            onClick={() => scrollTo(id)}
          >
            <Ico />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-socials">
        {socials.length > 0 ? (
          socials.slice(0, 4).map((s, i) => {
            const SIcon = socialIcon(s.name);
            return (
              <a key={i} href={s.link} target="_blank" rel="noopener noreferrer">
                <SIcon />
              </a>
            );
          })
        ) : (
          <>
            <a href="#"><Icon.Github /></a>
            <a href="#"><Icon.Linkedin /></a>
            <a href="#"><Icon.Twitter /></a>
          </>
        )}
      </div>
    </aside>
  );
}