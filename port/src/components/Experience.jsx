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
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600&family=Share+Tech+Mono&display=swap');

        #experience {
          --xa: var(--accent, #2ECC71);
          --xbg: var(--bg);
          --xcard: var(--bg2);
        }

        .exp-hdr {
          margin-bottom: 56px;
          position: relative;
        }

        .exp-tag {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--xa);
          opacity: 0.6;
          margin-bottom: 8px;
        }

        .exp-h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(40px, 7vw, 80px);
          font-weight: 600;
          color: var(--white);
          line-height: 0.95;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0;
          position: relative;
          display: inline-block;
        }

        .exp-h2::after {
          content: '';
          position: absolute;
          bottom: -8px; left: 0;
          width: 48px; height: 3px;
          background: var(--xa);
        }

        .exp-track {
          position: relative;
          padding-left: 0;
        }

        .exp-rail {
          position: absolute;
          top: 0; bottom: 0;
          left: 20px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--xa) 6%,
            var(--xa) 94%,
            transparent 100%
          );
          opacity: 0.18;
        }

        .exp-entry {
          display: flex;
          align-items: flex-start;
          gap: 0;
          margin-bottom: 28px;
          position: relative;
        }
        .exp-entry:last-child { margin-bottom: 0; }

        .exp-gutter {
          flex-shrink: 0;
          width: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 22px;
          gap: 6px;
        }

        .exp-num {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(var(--white-rgb), 0.15);
          transition: color .3s;
        }
        .exp-entry:hover .exp-num { color: var(--xa); }

        .exp-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: 1.5px solid rgba(var(--white-rgb), 0.15);
          background: var(--xbg);
          position: relative;
          z-index: 2;
          transition: border-color .3s, box-shadow .3s;
        }
        .exp-entry:hover .exp-dot {
          border-color: var(--xa);
          box-shadow: 0 0 0 4px var(--xa)20, 0 0 14px var(--xa)50;
        }

        .exp-tape {
          flex: 1;
          background: var(--xcard);
          border: 1px solid var(--border);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
          transition: border-color .3s, box-shadow .3s, transform .3s cubic-bezier(.16,1,.3,1);
          cursor: default;
        }

        .exp-entry:hover .exp-tape {
          border-color: var(--xa)55;
          box-shadow: 0 0 0 1px var(--xa)18, 0 20px 56px rgba(0,0,0,0.55);
          transform: translateX(6px);
        }

        .exp-scan {
          height: 3px;
          background: linear-gradient(to right, var(--xa), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s cubic-bezier(.16,1,.3,1);
        }
        .exp-entry:hover .exp-scan { transform: scaleX(1); }

        .exp-inner {
          display: flex;
          align-items: stretch;
        }

        .exp-meta {
          flex-shrink: 0;
          width: 130px;
          border-right: 1px solid var(--border);
          padding: 18px 14px 18px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color .3s;
        }
        .exp-entry:hover .exp-meta { border-right-color: var(--xa)20; }

        .exp-type {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--xa);
          opacity: 0.75;
          margin-bottom: 10px;
        }

        .exp-company {
          font-family: 'Rajdhani', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--white);
          line-height: 1.3;
          letter-spacing: 0.03em;
          margin-bottom: 6px;
        }

        .exp-role {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9.5px;
          color: rgba(var(--white-rgb), 0.28);
          letter-spacing: 0.05em;
          line-height: 1.5;
        }

        .exp-time {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          color: rgba(var(--white-rgb), 0.18);
          margin-top: 14px;
        }

        .exp-content {
          flex: 1;
          padding: 18px 20px 18px 18px;
          position: relative;
        }

        .exp-desc {
          font-family: 'Rajdhani', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;
          color: rgba(var(--white-rgb), 0.42);
          margin: 0;
        }

        .exp-ghost-word {
          position: absolute;
          right: 10px; bottom: 4px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 56px;
          font-weight: 600;
          color: transparent;
          -webkit-text-stroke: 1px rgba(var(--white-rgb), 0.03);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          transition: -webkit-text-stroke-color .3s;
        }
        .exp-entry:hover .exp-ghost-word {
          -webkit-text-stroke-color: rgba(var(--white-rgb), 0.055);
        }

        @keyframes xpulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .exp-live {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--xa);
          opacity: 0.55;
          margin-top: 12px;
        }

        .exp-live::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--xa);
          animation: xpulse 2s ease-in-out infinite;
        }

        @media (max-width: 560px) {
          .exp-inner { flex-direction: column; }
          .exp-meta {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding: 14px 16px;
          }
          .exp-gutter { width: 44px; }
          .exp-ghost-word { display: none; }
        }
      `}</style>

      <section id="experience" className="section">
        <div className="exp-hdr">
          <div className="exp-tag"># Career Path</div>
          <h2 className="exp-h2">Experience</h2>
        </div>

        <div className="exp-track">
          <div className="exp-rail" />

          {list.map((exp, i) => (
            <div key={exp._id || i} className="exp-entry">
              <div className="exp-gutter">
                <span className="exp-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="exp-dot" />
              </div>

              <div className="exp-tape">
                <div className="exp-scan" />
                <div className="exp-inner">
                  <div className="exp-meta">
                    {exp.type && <div className="exp-type">{exp.type}</div>}
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-time">⏱ {exp.duration}</div>
                  </div>

                  <div className="exp-content">
                    <p className="exp-desc">{exp.description}</p>
                    <div className="exp-ghost-word">{exp.role.split(" ")[0]}</div>
                    <div className="exp-live">Active</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}