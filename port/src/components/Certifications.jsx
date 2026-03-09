import { Icon } from './Ui';

const DEMO_CERTS = [
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services' },
  { name: 'Meta Frontend Developer', issuer: 'Meta / Coursera'    },
  { name: 'MongoDB Developer',       issuer: 'MongoDB University'  },
  { name: 'Google UX Design',        issuer: 'Google / Coursera'   },
];

export default function Certifications({ items }) {
  const list = items.length > 0 ? items : DEMO_CERTS;

  return (
    <section id="certifications" className="section">
      <div className="section-label reveal"># Credentials</div>
      <h2 className="sec-heading reveal d1">
        Certifications<span style={{ color: 'var(--accent)' }}>.</span>
      </h2>

      <div className="certs-grid">
        {list.map((c, i) => (
          <div key={c._id || i} className={`cert-card reveal d${Math.min(i + 1, 4)}`}>
            <div className="cert-thumb">
              {c.image
                ? <img src={c.image} alt={c.name} />
                : '🏅'
              }
            </div>
            <div className="cert-body">
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              {c.link && (
                <a className="cert-link" href={c.link} target="_blank" rel="noopener noreferrer">
                  View Credential <Icon.ArrowR />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
