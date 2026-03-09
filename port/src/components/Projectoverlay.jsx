// components/ProjectOverlay.jsx
// ── ALL styles live in globalStyles.js ──
import { useEffect, useRef } from "react";

export default function ProjectOverlay({ project, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const esc = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="overlay-backdrop"
      onClick={e => e.target === overlayRef.current && onClose()}
      style={{
        position:"fixed", inset:0,
        background:"rgba(var(--bg-rgb),0.88)",
        backdropFilter:"blur(12px)", WebkitBackdropFilter:"blur(12px)",
        zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center", padding:"24px",
      }}
    >
      <div
        className="overlay-card"
        style={{
          background:"var(--bg2)", border:"1px solid var(--border)", borderRadius:"12px",
          maxWidth:"680px", width:"100%", overflow:"hidden",
          boxShadow:"0 40px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Hero band */}
        <div style={{
          background: project.image
            ? `linear-gradient(to bottom,rgba(var(--bg-rgb),.35),rgba(var(--bg-rgb),.7)),url(${project.image}) center/cover`
            : project.color || "var(--bg3)",
          padding:"48px 44px 40px", position:"relative",
          borderBottom:`2px solid ${project.accent || "var(--border)"}`,
          minHeight:"180px",
        }}>
          {/* Ghost number */}
          <div style={{
            position:"absolute", right:"24px", bottom:"-12px",
            fontFamily:"var(--font-display)", fontSize:"clamp(80px,12vw,120px)",
            color:"transparent", WebkitTextStroke:`1px ${project.accent || "var(--white)"}18`,
            lineHeight:1, pointerEvents:"none", userSelect:"none",
          }}>{project.num}</div>

          {/* Close */}
          <button
            className="overlay-close-btn"
            onClick={onClose}
            style={{
              position:"absolute", top:"20px", right:"20px",
              background:"rgba(var(--white-rgb),0.07)", border:"1px solid var(--border)",
              borderRadius:"50%", width:"36px", height:"36px",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"rgba(var(--white-rgb),0.7)", fontSize:"20px", lineHeight:1,
              transition:"background .2s",
            }}
          >×</button>

          <div style={{ fontSize:"10px", letterSpacing:"0.22em", textTransform:"uppercase", color:project.accent || "var(--grey)", fontFamily:"var(--font-mono)", marginBottom:"14px" }}>
            {project.category}{project.year && ` · ${project.year}`}
          </div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(32px,5vw,48px)", letterSpacing:"0.03em", margin:0, color:"var(--white)", lineHeight:1.1 }}>
            {project.title}<span style={{ color:project.accent }}>.</span>
          </h2>
        </div>

        {/* Body */}
        <div style={{ padding:"36px 44px 40px" }}>
          <p style={{ color:"rgba(var(--white-rgb),0.55)", lineHeight:1.85, marginBottom:"28px", fontSize:"15px" }}>
            {project.description}
          </p>
          <div style={{ display:"flex", gap:"8px", flexWrap:"wrap", marginBottom:"32px" }}>
            {project.tech?.map((t, i) => (
              <span key={i} style={{ border:"1px solid var(--border)", borderRadius:"4px", padding:"5px 12px", fontSize:"11px", fontFamily:"var(--font-mono)", color:"rgba(var(--white-rgb),0.5)", letterSpacing:"0.08em" }}>{t}</span>
            ))}
          </div>
          <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-link-primary"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:project.accent || "var(--white)", color:"var(--bg)", padding:"10px 22px", borderRadius:"6px", fontWeight:600, fontSize:"13px", transition:"opacity .2s" }}>
                Live Demo →
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="overlay-link-secondary"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"transparent", color:"rgba(var(--white-rgb),0.6)", border:"1px solid var(--border)", padding:"10px 22px", borderRadius:"6px", fontWeight:500, fontSize:"13px", transition:"background .2s,color .2s" }}>
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}