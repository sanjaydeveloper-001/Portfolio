/**
 * components/Sections.jsx
 * Services · Counters (kept here for now)
 */

import { Icon } from './UI';

const SERVICES = [
  { icon: <Icon.Monitor />, name: 'Website Design', ghost: 'WEB', desc: 'Clean, responsive websites built for performance and beautiful user experience.' },
  { icon: <Icon.Layers />,  name: 'Apps Design',    ghost: 'APP', desc: 'Mobile-first application interfaces with intuitive navigation and bold aesthetics.' },
  { icon: <Icon.Pen />,     name: 'UI/UX Design',   ghost: 'UX',  desc: 'User research driven design that converts visitors into loyal customers.' },
  { icon: <Icon.Code />,    name: 'Development',    ghost: 'DEV', desc: 'Full-stack engineering with modern frameworks and scalable architecture.' },
];

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

// Re-export components from their separate files
export { default as Education } from './Education';
export { default as Certifications } from './Certifications';
export { default as Interests } from './Interests';