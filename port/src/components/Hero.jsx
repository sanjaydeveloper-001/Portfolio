// components/Hero.jsx
const socialIcon = (name = '') => {
  const n = name.toLowerCase();
  if (n.includes('github'))   return 'GH';
  if (n.includes('linkedin')) return 'LI';
  if (n.includes('twitter'))  return 'TW';
  if (n.includes('instagram'))return 'IG';
  return 'SL';
};

export default function Hero({ profile }) {
  const socials = profile?.social || [];

  return (
    <section id="home">
      <div className="hero-bg-text">
        {'MERN'}
      </div>

      <div className="hero-inner">
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
            {profile?.summary || 'Better Design for your Digital Product. Crafting stunning digital experiences with precision and creativity.'}
          </p>

          <div className="hero-cta reveal d3">
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio →
            </button>
            {profile?.cvLink && (
              <a className="btn btn-accent" href={profile.cvLink} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            {profile?.profilePhoto && (
              <img
                src={profile.profilePhoto}
                alt={profile?.name || 'Profile'}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            )}
          </div>

          <div className="hero-socials">
            {socials.length > 0
              ? socials.slice(0, 4).map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noopener noreferrer"
                     title={s.name}>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em' }}>
                      {socialIcon(s.name)}
                    </span>
                  </a>
                ))
              : <>
                  <a href="#" title="Facebook"><span style={{fontSize:'9px',fontWeight:700}}>FB</span></a>
                  <a href="#" title="Instagram"><span style={{fontSize:'9px',fontWeight:700}}>IG</span></a>
                  <a href="#" title="Twitter"><span style={{fontSize:'9px',fontWeight:700}}>TW</span></a>
                  <a href="#" title="YouTube"><span style={{fontSize:'9px',fontWeight:700}}>YT</span></a>
                </>
            }
          </div>
        </div>
      </div>
    </section>
  );
}