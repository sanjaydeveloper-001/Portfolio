/**
 * components/Sections.jsx
 * Services · Counters · Education · Experience · Certifications · Interests
 * All CSS is now in globalStyles (injected via App.jsx)
 */

import { Icon } from './UI';

/* ── Demo fallbacks ────────────────────────────────────────── */
const DEMO_EDU = [
  { institution: 'Stanford University', course: 'B.E. Computer Science', duration: '2019 – 2023', description: 'Focused on algorithms, distributed systems, and machine learning applications.', cgpa: '8.9' },
  { institution: 'Coursera / Google',   course: 'UX Design Professional', duration: '2021',        description: 'Completed intensive UX design program with hands-on capstone projects.' },
  { institution: 'freeCodeCamp',        course: 'Full Stack Web Development', duration: '2020',    description: 'Built 20+ projects covering front-end, back-end, and database design.' },
];
const DEMO_EXP = [
  { company: 'RETECH Solutions', role: 'AI Developer',       duration: 'Dec 2024 – Present', description: 'Explored fundamentals of AI/ML including real-world NLP applications and model deployment.', type: 'Internship' },
  { company: 'Digital Agency',   role: 'Frontend Developer', duration: '2022 – 2023',         description: 'Developed responsive UI components and improved web performance by 40% through optimization.', type: 'Internship' },
];
const DEMO_CERTS = [
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services' },
  { name: 'Meta Frontend Developer', issuer: 'Meta / Coursera'    },
  { name: 'MongoDB Developer',       issuer: 'MongoDB University'  },
  { name: 'Google UX Design',        issuer: 'Google / Coursera'   },
];
const DEMO_INTERESTS = [
  'Artificial Intelligence', 'IoT & Smart Systems', 'Machine Learning',
  'Cloud Computing', 'UI / UX Design', 'App Development',
  'Open Source', 'Backend Engineering',
];
const SERVICES = [
  { icon: <Icon.Monitor />, name: 'Website Design', ghost: 'WEB', desc: 'Clean, responsive websites built for performance and beautiful user experience.' },
  { icon: <Icon.Layers />,  name: 'Apps Design',    ghost: 'APP', desc: 'Mobile-first application interfaces with intuitive navigation and bold aesthetics.' },
  { icon: <Icon.Pen />,     name: 'UI/UX Design',   ghost: 'UX',  desc: 'User research driven design that converts visitors into loyal customers.' },
  { icon: <Icon.Code />,    name: 'Development',    ghost: 'DEV', desc: 'Full-stack engineering with modern frameworks and scalable architecture.' },
];

const abbr = (name = '') => name.slice(0, 2).toUpperCase();

/* ══════════════════════════
   SERVICES
══════════════════════════ */
export function Services() {
  return (
    <section id="services" className="section">
      <div className="services-header">
        <div>
          <div className="section-label reveal"># Service</div>
          <h2 className="sec-heading reveal d1" style={{ marginBottom: 0 }}>
            Best Services<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>
        <button className="services-see-all reveal d2">
          See all Services <Icon.ArrowR />
        </button>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div key={i} className={`service-card reveal d${Math.min(i + 1, 5)}`}>
            <div className="service-icon">{s.icon}</div>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-ghost">{s.ghost}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════
   COUNTERS BAND
══════════════════════════ */
export function CountersBand({ profile }) {
  return (
    <div className="counters-band">
      <div className="counter-item reveal">
        <div className="counter-num">
          {profile?.stats?.projects || 89}
          <span className="counter-plus">+</span>
        </div>
        <div className="counter-label">Project Done</div>
      </div>
      <div className="counter-item reveal d1">
        <div className="counter-num">{profile?.stats?.awards || 59}</div>
        <div className="counter-label">Award Won</div>
      </div>
      <div className="counter-item reveal d2">
        <div className="counter-num">{profile?.yearsExperience || 5}</div>
        <div className="counter-label">Year Experience</div>
      </div>
      <div className="counter-item reveal d3">
        <div className="counter-num">
          {profile?.stats?.reviews || 12}
          <span className="counter-plus">+</span>
        </div>
        <div className="counter-label">Good Reviews</div>
      </div>
    </div>
  );
}

/* ══════════════════════════
   EDUCATION
══════════════════════════ */
export function Education({ items, profile }) {
  const list = items.length > 0 ? items : DEMO_EDU;

  return (
    <section id="education" className="section">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div className="section-label reveal"># Education</div>
          <h2 className="sec-heading reveal d1" style={{ marginBottom: 0 }}>
            Education<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>
        {profile?.cvLink && (
          <a className="btn btn-accent reveal d2" href={profile.cvLink} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        )}
      </div>

      <div className="edu-table">
        {list.map((edu, i) => (
          <div key={edu._id || i} className={`edu-row reveal d${Math.min(i + 1, 5)}`}>
            <div className="edu-logo">{abbr(edu.institution)}</div>
            <div className="edu-meta">
              <div className="edu-year">{edu.duration}</div>
              <div className="edu-name">{edu.institution}</div>
              {edu.course && <div className="edu-course">{edu.course}</div>}
            </div>
            <div className="edu-desc">
              {edu.description || `Studied ${edu.course} at ${edu.institution}.`}
            </div>
            <div>
              {edu.cgpa       && <span className="edu-badge">CGPA {edu.cgpa}</span>}
              {edu.percentage && <span className="edu-badge">{edu.percentage}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════
   EXPERIENCE
══════════════════════════ */
export function Experience({ items }) {
  const list = items.length > 0 ? items : DEMO_EXP;       

  return (
    <section id="experience" className="section">
      <div className="section-label reveal"># Career</div>
      <h2 className="sec-heading reveal d1">
        Experience<span style={{ color: 'var(--accent)' }}>.</span>
      </h2>

      <div className="exp-list">
        {list.map((exp, i) => (
          <div key={exp._id || i} className={`exp-row reveal d${Math.min(i + 1, 5)}`}>
            <div className="exp-icon"><Icon.Brief /></div>
            <div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.role} · {exp.duration}</div>
            </div>
            <p className="exp-desc">{exp.description}</p>
            {exp.type && <div className="exp-type">{exp.type}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════
   CERTIFICATIONS
══════════════════════════ */
export function Certifications({ items }) {
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

/* ══════════════════════════
   INTERESTS
══════════════════════════ */
export function Interests({ items }) {
  const list = items.length > 0 ? items : DEMO_INTERESTS;

  return (
    <section id="interests" className="section">
      <div className="section-label reveal"># Passions</div>
      <h2 className="sec-heading reveal d1">
        Interests<span style={{ color: 'var(--accent)' }}>.</span>
      </h2>
      <div className="int-cloud">
        {list.map((item, i) => (
          <div key={i} className={`int-item reveal d${Math.min((i % 5) + 1, 5)}`}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}