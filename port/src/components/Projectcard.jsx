// components/ProjectCard.jsx
import { useState } from "react";

export default function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .proj-card-root {
          width: 100%;
          aspect-ratio: 5 / 6;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          border: 1px solid var(--border);
          transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s cubic-bezier(.16,1,.3,1);
        }
      `}</style>

      <div
        className="proj-card-root"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: project.image
            ? `url(${project.image}) center/cover`
            : `linear-gradient(145deg, ${project.color || "var(--bg3)"} 0%, var(--bg2) 100%)`,
          transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
          boxShadow: hovered
            ? `0 24px 48px rgba(0,0,0,0.55), 0 0 0 1px ${project.accent || "var(--white)"}22`
            : "0 4px 16px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(to top, rgba(var(--bg-rgb), 0.92) 0%, rgba(var(--bg-rgb), 0.2) 60%)"
              : "linear-gradient(to top, rgba(var(--bg-rgb), 0.8) 0%, rgba(var(--bg-rgb), 0.05) 60%)",
            transition: "background .3s ease",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: project.accent || "var(--border)",
            zIndex: 2,
            opacity: hovered ? 1 : 0.5,
            transition: "opacity .3s",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "8px", top: "8px",
            fontFamily: "var(--font-display, serif)",
            fontSize: "72px",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: `1px ${project.accent || "var(--white)"}14`,
            lineHeight: 1,
            zIndex: 2,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {project.num}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            padding: "20px",
            zIndex: 3,
          }}
        >
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: project.accent || "rgba(var(--white-rgb), 0.5)",
              fontFamily: "var(--font-mono, monospace)",
              marginBottom: "6px",
            }}
          >
            {project.category}
          </div>

          <div
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "var(--white)",
              lineHeight: 1.2,
              marginBottom: "10px",
            }}
          >
            {project.title}
          </div>

          <div
            style={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(6px)",
              transition: "opacity .25s ease, transform .25s ease",
            }}
          >
            {project.tech?.slice(0, 3).map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: `1px solid ${project.accent || "rgba(var(--white-rgb), 0.2)"}44`,
                  borderRadius: "3px",
                  padding: "2px 7px",
                  color: "rgba(var(--white-rgb), 0.55)",
                  fontFamily: "var(--font-mono, monospace)",
                  background: "rgba(var(--bg-rgb), 0.3)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}