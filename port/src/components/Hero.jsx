// components/Hero.jsx
import { Icon } from './Ui';

const SOCIAL_MAP = {
  github:    { icon: Icon.Github,    label: 'GitHub' },
  linkedin:  { icon: Icon.Linkedin,  label: 'LinkedIn' },
  twitter:   { icon: Icon.Twitter,   label: 'Twitter' },
  instagram: { icon: Icon.Instagram, label: 'Instagram' },
};

function getSocialIcon(name = '') {
  const key = name.toLowerCase();
  for (const [k, v] of Object.entries(SOCIAL_MAP)) {
    if (key.includes(k)) return v;
  }
  return null;
}

export default function Hero({ profile }) {
  const socials = profile?.social || [];

  return (
    <>
      <style>{`
        /* ── MERN watermark — visible but elegant ── */
        .hero-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-size: clamp(130px, 20vw, 280px);
          letter-spacing: .1em;
          line-height: 1;
          /* Visible stroke + a faint fill */
          -webkit-text-stroke: 1.5px rgba(var(--accent-rgb), 0.18);
          color: rgba(var(--accent-rgb), 0.04);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        body.light-theme .hero-bg-text {
          -webkit-text-stroke: 1.5px rgba(var(--accent-rgb), 0.14);
          color: rgba(var(--accent-rgb), 0.03);
        }

        /* ── Social pills ── */
        .hero-socials-bar {
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: absolute;
          right: 28px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
        }
        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(var(--white-rgb), 0.15);
          background: rgba(var(--bg-rgb), 0.55);
          backdrop-filter: blur(8px);
          color: rgba(var(--white-rgb), 0.65);
          transition: border-color .22s, color .22s, background .22s, transform .22s;
        }
        .hero-social-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(var(--bg-rgb), 0.8);
          transform: translateX(-3px);
        }
        .hero-social-link svg {
          width: 16px;
          height: 16px;
        }
        /* Fallback text badge */
        .social-text-badge {
          font-family: var(--font-mono);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .08em;
        }
      `}</style>

      <section id="home">
        <div className="hero-bg-text">MERN</div>

        <div className="hero-inner">
          {/* ── Left ── */}
          <div className="hero-left">
            <div className="hero-intro reveal">
              <div className="hero-intro-line" />
              <span className="hero-intro-text">Introducing</span>
            </div>

            <h1 className="hero-name reveal d1">
              {profile?.name
                ? profile.name.toUpperCase()
                : "I'M YOUR NAME"}
            </h1>

            <p className="hero-desc reveal d2">
              {profile?.summary
                || 'Better Design for your Digital Product. Crafting stunning digital experiences with precision and creativity.'}
            </p>

            <div className="hero-cta reveal d3">
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                My Works →
              </button>
              {profile?.cvLink && (
                <a className="btn btn-accent" href={profile.cvLink} target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              )}
            </div>

            {/* Stats */}
            {profile?.stats?.length > 0 && (
              <div className="hero-stats reveal d4">
                {profile.stats.map((s, i) => (
                  <div className="hero-stat-item" key={i}>
                    <div className="hero-stat-num">
                      {s.value}<span className="plus">{s.suffix || '+'}</span>
                    </div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Right ── */}
          <div className="hero-right">
            <div className="hero-img-wrap">
              {profile?.profilePhoto && (
                <img
                  src={profile.profilePhoto}
                  alt={profile?.name || 'Profile'}
                  onError={e => { e.target.style.display = 'none'; }}
                />
              )}
            </div>

            {/* Domain badge */}
            {profile?.domain && (
              <div className="hero-domain-badge">{profile.domain}</div>
            )}
          </div>
        </div>

        {/* ── Socials sidebar — proper icons ── */}
        <div className="hero-socials-bar">
          {socials.length > 0
            ? socials.slice(0, 5).map((s, i) => {
                const meta = getSocialIcon(s.name);
                const SvgIcon = meta?.icon;
                return (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="hero-social-link"
                  >
                    {SvgIcon
                      ? <SvgIcon />
                      : <span className="social-text-badge">
                          {s.name.slice(0, 2).toUpperCase()}
                        </span>
                    }
                  </a>
                );
              })
            : [
                { href: '#', label: 'GitHub',    Icon: Icon.Github },
                { href: '#', label: 'LinkedIn',  Icon: Icon.Linkedin },
                { href: '#', label: 'Twitter',   Icon: Icon.Twitter },
                { href: '#', label: 'Instagram', Icon: Icon.Instagram },
              ].map(({ href, label, Icon: I }) => (
                <a key={label} href={href} title={label} className="hero-social-link">
                  <I />
                </a>
              ))
          }
        </div>
      </section>
    </>
  );
}