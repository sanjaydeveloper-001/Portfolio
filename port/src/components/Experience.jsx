// components/Experience.jsx
const YOUR_EXP_DATA = [
  {
    _id: "69abcd52763422ddcca78d41",
    company: "RETECH Solutions Pvt Ltd",
    role: "AI Developer",
    duration: "Dec 2024",
    description:
      "Explored fundamentals of Artificial Intelligence and Machine Learning, including practical real-world applications.",
    type: "Internship",
  },
];

export default function Experience({ items = [] }) {
  const list = items.length > 0 ? items : YOUR_EXP_DATA;

  return (
    <>
      <style>{`
        /* ── Experience section ── */
        #experience { background: var(--bg2); }

        .exp-hdr {
          margin-bottom: 48px;
        }
        .exp-hdr__label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .exp-hdr__title {
          font-family: var(--font-display);
          font-size: clamp(44px, 5vw, 72px);
          line-height: 1;
          letter-spacing: 0.04em;
          color: var(--white);
          margin: 0;
        }
        .exp-hdr__title span { color: var(--accent); }

        /* ── Timeline List ── */
        .exp-timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Center vertical line */
        .exp-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
          transform: translateX(-50%);
        }

        .exp-card {
          position: relative;
          margin-bottom: 60px;
          width: calc(50% - 40px);
        }

        /* Left side cards */
        .exp-card:nth-child(odd) {
          margin-left: 0;
          margin-right: auto;
          padding-right: 40px;
        }

        /* Right side cards */
        .exp-card:nth-child(even) {
          margin-left: auto;
          margin-right: 0;
          padding-left: 40px;
        }

        /* Timeline dot - left */
        .exp-card:nth-child(odd)::before {
          content: '';
          position: absolute;
          right: -6px;
          top: 8px;
          width: 12px;
          height: 12px;
          background: var(--red);
          border: 3px solid var(--black);
          border-radius: 50%;
          z-index: 1;
        }

        /* Timeline dot - right */
        .exp-card:nth-child(even)::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 8px;
          width: 12px;
          height: 12px;
          background: var(--red);
          border: 3px solid var(--black);
          border-radius: 50%;
          z-index: 1;
        }

        /* Card content */
        .exp-card-inner {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 24px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .exp-card-inner:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.12);
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          gap: 16px;
        }

        .exp-card-company {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 6px;
        }

        .exp-card-role {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--grey);
        }

        .exp-card-badge {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--red);
          border: 1px solid rgba(192,57,43,0.3);
          border-radius: 1px;
          padding: 4px 10px;
          white-space: nowrap;
        }

        .exp-card-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
        }

        /* Light theme */
        body.light-theme #experience { background: #F7F7F7; }
        body.light-theme .exp-card-inner { background: #FFFFFF; border-color: rgba(0,0,0,0.1); }
        body.light-theme .exp-card-company { color: #0D0D0D; }
        body.light-theme .exp-card-role { color: #6A6A6A; }
        body.light-theme .exp-card-desc { color: rgba(0,0,0,0.6); }
        body.light-theme .exp-card-badge { color: #C0392B; border-color: rgba(192,57,43,0.3); }
        body.light-theme .exp-timeline::before { background: rgba(0,0,0,0.1); }
        body.light-theme .exp-card::before { border-color: #F7F7F7; }

        /* Responsive */
        @media (max-width: 768px) {
          .exp-timeline::before {
            left: 20px;
            transform: none;
          }
          .exp-card,
          .exp-card:nth-child(odd),
          .exp-card:nth-child(even) {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
            padding-left: 50px;
            padding-right: 0;
          }
          .exp-card:nth-child(odd)::before,
          .exp-card:nth-child(even)::before {
            left: 14px;
            right: auto;
          }
          .exp-card-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section id="experience" className="section">
        <div className="exp-hdr reveal">
          <p className="exp-hdr__label">// Career Path</p>
          <h2 className="exp-hdr__title">Experience<span>.</span></h2>
        </div>

        <div className="exp-timeline">
          {list.map((exp, i) => (
            <div key={exp._id || i} className="exp-card reveal">
              <div className="exp-card-inner">
                <div className="exp-card-header">
                  <div>
                    <h3 className="exp-card-company">{exp.company}</h3>
                    <p className="exp-card-role">{exp.role}</p>
                  </div>
                  <span className="exp-card-badge">{exp.type || exp.duration}</span>
                </div>
                <p className="exp-card-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}