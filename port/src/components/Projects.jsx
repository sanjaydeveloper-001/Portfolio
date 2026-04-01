// components/Projects.jsx
// ── ALL styles live in globalStyles.js ──
import { useState, useEffect, useRef, useCallback } from "react";
import ProjectCard    from "./Projectcard";
import ProjectOverlay from "./Projectoverlay";

const CARD_W   = 250;
const CARD_GAP = 18;

function calcCols(w) {
  if (!w) return 4;
  return Math.max(1, Math.floor((w + CARD_GAP) / (CARD_W + CARD_GAP)));
}

export default function Projects({ projects = [] }) {
  const list = projects.map((p, i) => ({ ...p, num: String(i + 1).padStart(2, "0") }));

  const gridRef               = useRef(null);
  const [cols,    setCols]    = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [active,  setActive]  = useState(null);

  const measure = useCallback(() => {
    if (gridRef.current) setCols(calcCols(gridRef.current.offsetWidth));
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (gridRef.current) ro.observe(gridRef.current);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => { if (cols >= list.length) setShowAll(false); }, [cols, list.length]);

  const needsToggle = list.length > cols;
  const visible     = showAll || !needsToggle ? list : list.slice(0, cols);

  return (
    <>
      <section id="projects">
        {/* Header — size unified with all other sections via .sec-heading */}
        <div style={{ marginBottom: "52px" }}>
          <div style={{
            fontSize:      "10px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color:         "rgba(255,255,255,0.35)",
            fontFamily:    "var(--font-mono)",
            marginBottom:  "12px",
          }}>
            Selected Works
          </div>
          <h2 className="sec-heading" style={{ margin: 0, color: "#FFFFFF" }}>
            My Projects<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="proj-grid">
          {visible.map((p, i) => (
            <div key={p.num} className="proj-item" style={{ animationDelay: `${(i % cols) * 55}ms` }}>
              <ProjectCard project={p} onClick={() => setActive(p)} />
            </div>
          ))}
        </div>

        {/* Show all toggle */}
        {needsToggle && (
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
            <button className="show-all-btn" onClick={() => setShowAll(v => !v)}>
              {showAll ? "Show Less ↑" : `Show All — ${list.length} Projects ↓`}
            </button>
          </div>
        )}
      </section>

      {active && <ProjectOverlay project={active} onClose={() => setActive(null)} />}
    </>
  );
}