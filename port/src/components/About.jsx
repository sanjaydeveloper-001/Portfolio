// components/About.jsx
// ── ALL styles live in globalStyles.js ──
export default function About({ profile }) {
  const name     = profile?.name     || 'Sanjay D';
  const email    = profile?.email    || 'josephofficial.sanjay@gmail.com';
  const phone    = profile?.phone    || '+91 9342000437';
  const location = profile?.location || 'Chennai, India';

  const INFO = [
    { label: 'Phone',    value: phone    },
    { label: 'Email',    value: email    },
    { label: 'Location', value: location },
    { label: 'Stack',    value: 'MERN Developer' },
  ];

  return (
    <section id="about">
      <div className="about-wrap">

        {/* Photo — column width reduced via inline override */}
        <div className="about-photo">
          <div className="about-photo-stat">
            <div className="about-photo-stat-num">{profile?.webBuilds || '15+'}</div>
            <div className="about-photo-stat-label">Webs Built</div>
          </div>

          {profile?.profilePhoto ? (
            <img src={profile.profilePhoto} alt={name} />
          ) : (
            <div style={{
              width:        '100%',
              aspectRatio:  '3/4',
              background:   'var(--bg3)',
              borderRadius: 4,
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              fontFamily:   'var(--font-display)',
              fontSize:     72,
              color:        'rgba(var(--white-rgb),0.06)',
              letterSpacing:'0.06em',
              position:     'relative',
              zIndex:       2,
            }}>SD</div>
          )}

          <div className="about-photo-badge">MERN Dev · Chennai</div>
        </div>

        <div>
          <h2 className="about-title">Who Am <span>I?</span></h2>

          <p className="about-bio">
            I'm <strong>Sanjay D</strong>, a passionate{' '}
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
            {INFO.map(item => (
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