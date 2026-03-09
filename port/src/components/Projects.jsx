// components/Projects.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import ProjectCard from "./Projectcard";
import ProjectOverlay from "./Projectoverlay";

const CARD_W   = 250;
const CARD_GAP = 18;

function calcCols(containerWidth) {
  if (!containerWidth) return 4;
  const cols = Math.floor((containerWidth + CARD_GAP) / (CARD_W + CARD_GAP));
  return Math.max(1, cols);
}

export default function Projects({ projects = [] }) {
  const list = projects.map((p, i) => ({
    ...p,
    num: String(i + 1).padStart(2, "0"),
  }));

  const gridRef   = useRef(null);
  const [cols,    setCols]    = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [active,  setActive]  = useState(null);

  const measure = useCallback(() => {
    if (gridRef.current) {
      setCols(calcCols(gridRef.current.offsetWidth));
    }
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (gridRef.current) ro.observe(gridRef.current);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    if (cols >= list.length) setShowAll(false);
  }, [cols, list.length]);

  const needsToggle = list.length > cols;
  const visible     = showAll || !needsToggle ? list : list.slice(0, cols);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .proj-item {
          animation: fadeUp .4s cubic-bezier(.16,1,.3,1) both;
        }

        .show-all-btn {
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 8px;
          color: rgba(var(--white-rgb), 0.55);
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 12px 28px;
          cursor: pointer;
          transition: background .25s, border-color .25s, color .25s, transform .25s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .show-all-btn:hover {
          background: rgba(var(--white-rgb), 0.06);
          border-color: rgba(var(--white-rgb), 0.28);
          color: rgba(var(--white-rgb), 0.85);
          transform: translateY(-2px);
        }

        #projects-section {
          padding: 100px 80px;
        }
        @media (max-width: 900px) {
          #projects-section { padding: 72px 40px; }
        }
        @media (max-width: 600px) {
          #projects-section { padding: 56px 20px; }
        }

        .proj-grid {
          display: grid;
          gap: ${CARD_GAP}px;
          grid-template-columns: repeat(auto-fill, minmax(${CARD_W}px, 1fr));
        }
      `}</style>

      <section
        id="projects-section"
        style={{
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ marginBottom: "52px" }}>
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(var(--white-rgb), 0.35)",
              fontFamily: "var(--font-mono, monospace)",
              marginBottom: "12px",
            }}
          >
            Selected Works
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "0.03em",
              margin: 0,
              color: "var(--white)",
            }}
          >
            My Projects
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>

        <div ref={gridRef} className="proj-grid">
          {visible.map((p, i) => (
            <div
              key={p.num}
              className="proj-item"
              style={{ animationDelay: `${(i % cols) * 55}ms` }}
            >
              <ProjectCard
                project={p}
                onClick={() => setActive(p)}
              />
            </div>
          ))}
        </div>

        {needsToggle && (
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className="show-all-btn"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll
                ? "Show Less ↑"
                : `Show All — ${list.length} Projects ↓`}
            </button>
          </div>
        )}
      </section>

      {active && (
        <ProjectOverlay
          project={active}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}