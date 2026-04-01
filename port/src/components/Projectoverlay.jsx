// components/ProjectOverlay.jsx
import { useEffect, useRef } from 'react';

export default function ProjectOverlay({ project, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const esc = e => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <>
      <style>{`
        .po-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(var(--bg-rgb), 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: poFadeIn .22s ease both;
        }
        @keyframes poFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .po-card {
          background: var(--bg2);
          border: 1px solid rgba(var(--white-rgb), 0.09);
          border-radius: 16px;
          max-width: 700px;
          width: 100%;
          max-height: 92vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 48px 96px rgba(0,0,0,0.65), 0 0 0 1px rgba(var(--white-rgb),0.04);
          animation: poSlideUp .32s cubic-bezier(.16,1,.3,1) both;
        }
        @keyframes poSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Image banner ── */
        .po-img {
          width: 100%;
          aspect-ratio: 16 / 7;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          background: var(--bg3);
        }
        .po-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .po-img-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .po-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(var(--bg-rgb), 0.7) 100%
          );
        }
        /* Accent line on top of image */
        .po-img::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--po-accent, var(--accent));
          z-index: 2;
        }

        /* Close button */
        .po-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 4;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(var(--bg-rgb), 0.65);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(var(--white-rgb), 0.12);
          color: rgba(var(--white-rgb), 0.75);
          font-size: 20px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background .2s, color .2s;
        }
        .po-close:hover {
          background: rgba(var(--bg-rgb), 0.9);
          color: #fff;
        }

        /* ── Body ── */
        .po-body {
          padding: 28px 32px 32px;
          overflow-y: auto;
          flex: 1;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }

        .po-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .po-cat {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--po-accent, var(--accent));
        }
        .po-dot { color: var(--border); font-size: 10px; }
        .po-year {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: .1em;
          color: rgba(var(--white-rgb), 0.3);
        }

        .po-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 5vw, 42px);
          letter-spacing: .04em;
          color: var(--white);
          line-height: 1.05;
          margin: 0 0 18px;
        }
        .po-title span { color: var(--po-accent, var(--accent)); }

        .po-desc {
          font-size: 14px;
          color: rgba(var(--white-rgb), 0.52);
          line-height: 1.85;
          margin-bottom: 24px;
        }

        .po-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 28px;
        }
        .po-tag {
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 5px 13px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: rgba(var(--white-rgb), 0.45);
          letter-spacing: .08em;
          background: rgba(var(--white-rgb), 0.025);
        }

        .po-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .po-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--po-accent, var(--accent));
          color: #fff;
          padding: 11px 26px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13px;
          transition: opacity .2s, transform .2s;
          text-decoration: none;
        }
        .po-btn-primary:hover { opacity: .85; transform: translateY(-2px); }

        .po-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: rgba(var(--white-rgb), 0.6);
          border: 1px solid var(--border);
          padding: 11px 26px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 13px;
          transition: background .2s, color .2s, border-color .2s, transform .2s;
          text-decoration: none;
        }
        .po-btn-secondary:hover {
          background: rgba(var(--white-rgb), 0.06);
          color: rgba(var(--white-rgb), 0.9);
          border-color: rgba(var(--white-rgb), 0.25);
          transform: translateY(-2px);
        }

        /* Light theme */
        body.light-theme .po-card { background: #fff; border-color: rgba(13,13,13,.1); }
        body.light-theme .po-title { color: #0d0d0d; }
        body.light-theme .po-desc { color: rgba(13,13,13,.55); }
        body.light-theme .po-tag { color: rgba(13,13,13,.45); background: rgba(13,13,13,.03); }
        body.light-theme .po-btn-secondary { color: rgba(13,13,13,.6); }

        @media (max-width: 520px) {
          .po-body { padding: 20px 20px 24px; }
          .po-actions { flex-direction: column; }
          .po-btn-primary, .po-btn-secondary { justify-content: center; }
        }
      `}</style>

      <div
        ref={overlayRef}
        className="po-backdrop"
        onClick={e => e.target === overlayRef.current && onClose()}
      >
        <div
          className="po-card"
          style={{ '--po-accent': project.accent || 'var(--accent)' }}
        >
          {/* Image banner */}
          <div className="po-img">
            {project.image
              ? <>
                  <img src={project.image} alt={project.title} />
                  <div className="po-img-overlay" />
                </>
              : (
                <div
                  className="po-img-placeholder"
                  style={{
                    background: project.color
                      ? `linear-gradient(145deg, ${project.color}66, var(--bg3))`
                      : `linear-gradient(145deg, rgba(var(--accent-rgb),0.15), var(--bg3))`,
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(72px,12vw,120px)',
                    color: 'transparent',
                    WebkitTextStroke: `1px ${project.accent || 'rgba(var(--white-rgb),0.12)'}`,
                  }}>
                    {project.num}
                  </span>
                </div>
              )
            }

            <button className="po-close" onClick={onClose} aria-label="Close">×</button>
          </div>

          {/* Body */}
          <div className="po-body">
            <div className="po-meta">
              <span className="po-cat">{project.category}</span>
              {project.year && <>
                <span className="po-dot">·</span>
                <span className="po-year">{project.year}</span>
              </>}
            </div>

            <h2 className="po-title">
              {project.title}<span>.</span>
            </h2>

            {project.description && (
              <p className="po-desc">{project.description}</p>
            )}

            {project.tech?.length > 0 && (
              <div className="po-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="po-tag">{t}</span>
                ))}
              </div>
            )}

            <div className="po-actions">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="po-btn-primary">
                  Live Demo →
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="po-btn-secondary">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}