// components/ProjectCard.jsx
import { useState } from 'react';

export default function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .proj-card {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: var(--bg2);
          border: 1px solid var(--border);
          transition: transform .32s cubic-bezier(.16,1,.3,1),
                      box-shadow .32s cubic-bezier(.16,1,.3,1),
                      border-color .25s;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 56px rgba(0,0,0,0.5);
          border-color: rgba(var(--accent-rgb), 0.35);
        }

        /* ── Image area ── */
        .proj-card__img {
          width: 100%;
          aspect-ratio: 16 / 10;
          position: relative;
          overflow: hidden;
          background: var(--bg3);
          flex-shrink: 0;
        }
        .proj-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform .45s cubic-bezier(.16,1,.3,1);
        }
        .proj-card:hover .proj-card__img img {
          transform: scale(1.06);
        }
        /* Placeholder when no image */
        .proj-card__img-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 56px;
          letter-spacing: .06em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(var(--white-rgb), 0.12);
        }
        /* Accent top-bar */
        .proj-card__img::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--proj-accent, var(--accent));
          z-index: 2;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .35s var(--ease);
        }
        .proj-card:hover .proj-card__img::before {
          transform: scaleX(1);
        }

        /* ── Body ── */
        .proj-card__body {
          padding: 20px 22px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .proj-card__meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .proj-card__cat {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--proj-accent, var(--accent));
        }
        .proj-card__num {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: .08em;
          color: rgba(var(--white-rgb), 0.2);
        }
        .proj-card__title {
          font-family: var(--font-display);
          font-size: 22px;
          letter-spacing: .03em;
          color: var(--white);
          line-height: 1.15;
          margin: 0;
        }
        .proj-card__desc {
          font-size: 12.5px;
          color: rgba(var(--white-rgb), 0.42);
          line-height: 1.75;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .proj-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: auto;
        }
        .proj-card__tag {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: .1em;
          text-transform: uppercase;
          border: 1px solid var(--border);
          border-radius: 3px;
          padding: 3px 8px;
          color: rgba(var(--white-rgb), 0.38);
          background: rgba(var(--white-rgb), 0.03);
          transition: border-color .2s, color .2s;
        }
        .proj-card:hover .proj-card__tag {
          border-color: rgba(var(--accent-rgb), 0.3);
          color: rgba(var(--white-rgb), 0.6);
        }

        /* ── Arrow indicator ── */
        .proj-card__arrow {
          position: absolute;
          bottom: 22px;
          right: 22px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--proj-accent, var(--accent));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.6) rotate(-45deg);
          transition: opacity .25s, transform .25s;
        }
        .proj-card__arrow svg {
          width: 14px;
          height: 14px;
          stroke: #fff;
          stroke-width: 2.2;
          fill: none;
        }
        .proj-card:hover .proj-card__arrow {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        /* Light theme adjustments */
        body.light-theme .proj-card { background: #fff; }
        body.light-theme .proj-card__num { color: rgba(13,13,13,0.18); }
        body.light-theme .proj-card__desc { color: rgba(13,13,13,0.5); }
        body.light-theme .proj-card__tag { color: rgba(13,13,13,0.4); }
      `}</style>

      <div
        className="proj-card"
        style={{ '--proj-accent': project.accent || 'var(--accent)' }}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="proj-card__img">
          {project.image
            ? <img src={project.image} alt={project.title} />
            : (
              <div
                className="proj-card__img-placeholder"
                style={{
                  background: project.color
                    ? `linear-gradient(145deg, ${project.color}44, var(--bg3))`
                    : 'var(--bg3)',
                }}
              >
                {project.num}
              </div>
            )
          }
        </div>

        {/* Body */}
        <div className="proj-card__body">
          <div className="proj-card__meta">
            <span className="proj-card__cat">{project.category}</span>
            <span className="proj-card__num">{project.num}</span>
          </div>

          <h3 className="proj-card__title">{project.title}</h3>

          {project.description && (
            <p className="proj-card__desc">{project.description}</p>
          )}

          {project.tech?.length > 0 && (
            <div className="proj-card__tags">
              {project.tech.slice(0, 4).map((t, i) => (
                <span key={i} className="proj-card__tag">{t}</span>
              ))}
            </div>
          )}
        </div>

        {/* Arrow */}
        <div className="proj-card__arrow">
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </>
  );
}