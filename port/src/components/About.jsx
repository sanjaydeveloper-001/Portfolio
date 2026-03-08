// components/About.jsx
const ABOUT_CSS = `
#about {
  padding: 180px 0;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  position: relative;
  overflow: hidden;
  height:100vh;
  display:flex;
  align-items:center;
}

#about::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(var(--white-rgb), 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--white-rgb), 0.018) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

#about::after {
  content: '';
  position: absolute;
  left: -80px;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(232,73,15,0.08) 0%, transparent 70%);
  pointer-events: none;
  border-radius: 50%;
}

.about-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.about-photo { position: relative; }

.about-photo-index {
  position: absolute;
  top: -20px;
  left: 0;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent);
  z-index: 3;
}

.about-photo img {
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
  object-position: center top;
  display: block;
  position: relative;
  z-index: 2;
  filter: brightness(0.88) contrast(1.04);
  transition: filter 0.4s ease;
}

.about-photo:hover img {
  filter: brightness(0.95) contrast(1.04);
}

.about-photo::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1.5px solid var(--accent);
  border-radius: 4px;
  top: 16px;
  left: 16px;
  z-index: 1;
  transition: top 0.4s ease, left 0.4s ease;
}

.about-photo:hover::before {
  top: 10px;
  left: 10px;
}

.about-photo::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(var(--white-rgb), 0.05);
  border-radius: 4px;
  top: 8px;
  left: 8px;
  z-index: 1;
}

.about-photo-badge {
  position: absolute;
  bottom: 24px;
  right: -16px;
  background: var(--accent);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 10px 18px;
  border-radius: 2px;
  z-index: 4;
  box-shadow: 0 8px 32px rgba(232,73,15,0.35);
}

.about-photo-stat {
  position: absolute;
  bottom: 80px;
  left: -28px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 14px 20px;
  z-index: 4;
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
}

.about-photo-stat-num {
  font-family: var(--font-display);
  font-size: 36px;
  color: var(--accent);
  line-height: 1;
  letter-spacing: 0.02em;
}

.about-photo-stat-label {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--grey);
  margin-top: 4px;
}

.about-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.about-label::before {
  content: '';
  display: inline-block;
  width: 28px;
  height: 1px;
  background: var(--accent);
}

.about-title {
  font-family: var(--font-display);
  font-size: clamp(44px, 5vw, 68px);
  letter-spacing: 0.04em;
  color: var(--white);
  line-height: 1;
  margin-bottom: 28px;
}

.about-title span { color: var(--accent); }

.about-bio {
  font-size: 13.5px;
  line-height: 2;
  color: rgba(var(--white-rgb), 0.45);
  margin-bottom: 16px;
  max-width: 560px;
}

.about-bio strong {
  color: rgba(var(--white-rgb), 0.82);
  font-weight: 600;
}

.about-divider {
  width: 100%;
  height: 1px;
  background: var(--border);
  margin: 28px 0;
}

.about-info-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.about-info-label::after {
  content: '';
  flex: 1;
  max-width: 50px;
  height: 1px;
  background: var(--border);
}

.about-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 36px;
}

.info-card {
  padding: 16px 18px;
  border-radius: 4px;
  background: var(--bg2);
  border: 1px solid var(--border);
  transition: border-color 0.25s, transform 0.25s, background 0.25s;
  position: relative;
  overflow: hidden;
}

.info-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.info-card:hover::after { width: 100%; }
.info-card:hover {
  border-color: rgba(232,73,15,0.3);
  transform: translateY(-3px);
  background: var(--bg3);
}

.info-card small {
  display: block;
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 5px;
}

.info-card span {
  font-size: 13px;
  font-weight: 600;
  color: rgba(var(--white-rgb), 0.78);
}

.about-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
}

@media (max-width: 1000px) {
  .about-wrap {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 0 32px;
  }
  .about-photo {
    max-width: 380px;
    margin: auto;
  }
  .about-photo-badge { right: 0; }
}

@media (max-width: 600px) {
  #about { padding: 72px 0; height:max-content;}
  .about-wrap { padding: 0 20px; gap: 44px; }
  .about-title { font-size: 38px; }
  .about-info { grid-template-columns: 1fr; }
}
`;

if (typeof document !== 'undefined' && !document.getElementById('about-rich-v3-css')) {
  const style = document.createElement('style');
  style.id = 'about-rich-v3-css';
  style.innerHTML = ABOUT_CSS;
  document.head.appendChild(style);
}

export default function About({ profile }) {
  const name     = profile?.name     || 'Sanjay D';
  const email    = profile?.email    || 'josephofficial.sanjay@gmail.com';
  const phone    = profile?.phone    || '+91 9342000437';
  const location = profile?.location || 'Chennai, India';

  const INFO = [
    { label: 'Phone',    value: phone },
    { label: 'Email',    value: email },
    { label: 'Location', value: location },
    { label: 'Stack',    value: 'MERN Developer' },
  ];

  return (
    <section id="about">
      <div className="about-wrap">

        <div className="about-photo">
          <div className="about-photo-stat">
            <div className="about-photo-stat-num">{profile?.webBuilds || '15+'}</div>
            <div className="about-photo-stat-label">Webs Built</div>
          </div>

          {profile?.profilePhoto ? (
            <img src={profile.profilePhoto} alt={name} />
          ) : (
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              background: 'var(--bg3)',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: 72,
              color: 'rgba(var(--white-rgb), 0.06)',
              letterSpacing: '0.06em',
              position: 'relative',
              zIndex: 2,
            }}>SD</div>
          )}

          <div className="about-photo-badge">MERN Dev · Chennai</div>
        </div>

        <div>
          <h2 className="about-title">
            Who Am <span>I?</span>
          </h2>

          <p className="about-bio">
            I'm <strong>Sanjay D</strong>, a passionate{" "}
            <strong>MERN Stack Developer</strong> currently pursuing B.Tech
            Information Technology at St. Joseph's Institute of Technology. I
            enjoy building modern full-stack web applications with scalable
            backend systems and polished frontend experiences.
          </p>

          <p className="about-bio">
            My work includes authentication systems, REST APIs, real-time apps,
            and cloud deployments. I completed multiple internships and built
            production-ready applications while constantly improving my
            development skills.
          </p>

          <div className="about-divider" />

          <div className="about-info-label">Personal Info</div>

          <div className="about-info">
            {INFO.map((item) => (
              <div className="info-card" key={item.label}>
                <small>{item.label}</small>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}