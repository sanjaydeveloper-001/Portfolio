// components/Skills.jsx
import { useEffect, useRef, useState } from "react";

const ICON_MAP = {
  Java:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  C:            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  Python:       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  HTML:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS:          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Java Script":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React:        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Angular:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Node Js":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Docker:       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  MongoDB:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  FireBase:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Firebase:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  MERN:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Tailwindcss:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Bootstrap:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  Git:          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Github:       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  ThingsBoard:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
};

function levelColor(pct) {
  if (pct >= 80) return "#00D4FF";
  if (pct >= 60) return "#2ECC71";
  if (pct >= 40) return "#F59E0B";
  return "#EF4444";
}

function Ring({ pct, name, size = 96 }) {
  const [animated, setAnimated] = useState(0);
  const ref = useRef(null);
  const color = levelColor(pct);

  const stroke    = 5;
  const r         = (size - stroke * 2) / 2;
  const circ      = 2 * Math.PI * r;
  const dashOffset = circ - (animated / 100) * circ;

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = null;
          const duration = 900;
          const tick = (ts) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setAnimated(pct * (1 - Math.pow(1 - progress, 3)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [pct]);

  const icon = ICON_MAP[name];

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div style={{ position: "relative", width: size, height: size }}>
        <svg
          width={size}
          height={size}
          style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(var(--white-rgb), 0.06)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={dashOffset}
            style={{ transition: "stroke-dashoffset .05s linear" }}
          />
        </svg>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon ? (
            <img src={icon} alt={name} width={34} height={34} style={{ objectFit: "contain" }} />
          ) : (
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "11px",
                color: "var(--white)",
                letterSpacing: "0.05em",
              }}
            >
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "11px",
            fontFamily: "var(--font-mono, monospace)",
            color: "rgba(var(--white-rgb), 0.55)",
            letterSpacing: "0.08em",
            marginBottom: "2px",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color,
            fontFamily: "var(--font-mono, monospace)",
          }}
        >
          {Math.round(animated)}%
        </div>
      </div>
    </div>
  );
}

function ToolChip({ name }) {
  const [hovered, setHovered] = useState(false);
  const icon = ICON_MAP[name];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        border: `1px solid ${hovered ? "rgba(0,212,255,0.4)" : "var(--border)"}`,
        borderRadius: "8px",
        padding: "8px 14px",
        background: hovered ? "rgba(0,212,255,0.06)" : "rgba(var(--white-rgb), 0.03)",
        cursor: "default",
        transition: "border-color .2s, background .2s, transform .2s",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      {icon && (
        <img src={icon} alt={name} width={16} height={16} style={{ objectFit: "contain" }} />
      )}
      <span
        style={{
          fontSize: "12px",
          fontFamily: "var(--font-mono, monospace)",
          color: hovered ? "rgba(var(--white-rgb), 0.85)" : "rgba(var(--white-rgb), 0.5)",
          letterSpacing: "0.06em",
          transition: "color .2s",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </div>
  );
}

function SoftPill({ name, index }) {
  const colors = ["#2ECC71", "#00D4FF", "#F59E0B", "#EC4899", "#8B5CF6"];
  const c = colors[index % colors.length];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        border: `1px solid ${c}30`,
        borderRadius: "100px",
        padding: "8px 18px",
        background: `${c}0a`,
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: c,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: "13px",
          color: "rgba(var(--white-rgb), 0.65)",
          fontFamily: "var(--font-mono, monospace)",
          letterSpacing: "0.05em",
        }}
      >
        {name}
      </span>
    </div>
  );
}

function LangBar({ name, level, index }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const color = levelColor(level);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), index * 60);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [level, index]);

  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{ width: "80px", textAlign: "right", flexShrink: 0 }}>
        <span
          style={{
            fontSize: "11px",
            fontFamily: "var(--font-mono, monospace)",
            color: "rgba(var(--white-rgb), 0.45)",
            letterSpacing: "0.06em",
          }}
        >
          {name}
        </span>
      </div>
      <div
        style={{
          flex: 1,
          height: "4px",
          background: "rgba(var(--white-rgb), 0.06)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            borderRadius: "2px",
            transition: "width .8s cubic-bezier(.16,1,.3,1)",
          }}
        />
      </div>
      <div
        style={{
          width: "34px",
          textAlign: "right",
          fontSize: "11px",
          fontFamily: "var(--font-mono, monospace)",
          color,
          flexShrink: 0,
        }}
      >
        {level}%
      </div>
    </div>
  );
}

export default function Skills({ data = null }) {
  const skills = data || {
    frameworks_tools: [
      "React","Docker","MongoDB","FireBase","MERN",
      "Tailwindcss","Bootstrap","Git","Github","VS Code","ThingsBoard",
    ],
    softSkills: ["LeaderShip","Problem Solving","Critical Thinking"],
    languages: [
      { name: "Java",         level: 75 },
      { name: "C",            level: 50 },
      { name: "Python",       level: 35 },
      { name: "HTML",         level: 90 },
      { name: "CSS",          level: 85 },
      { name: "Java Script",  level: 75 },
      { name: "React",        level: 80 },
      { name: "Angular",      level: 25 },
      { name: "Node Js",      level: 65 },
    ],
  };

  const ringLangs = skills.languages.slice(0, 6);
  const barLangs  = skills.languages.slice(6);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .skills-fade { animation: fadeUp .5s cubic-bezier(.16,1,.3,1) both; }

        #skills-section {
          padding: 100px 80px;
        }
        @media (max-width: 960px) {
          #skills-section { padding: 72px 40px; }
          .skills-main-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #skills-section { padding: 56px 20px; }
          .ring-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <section
        id="skills-section"
        style={{
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="skills-fade" style={{ marginBottom: "56px" }}>
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
            Expertise
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
            Technologies
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>

        <div
          className="skills-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "start",
          }}
        >

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            <div
              className="skills-fade"
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "32px",
                animationDelay: "0.05s",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#00D4FF",
                  fontFamily: "var(--font-mono, monospace)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ display: "inline-block", width: "16px", height: "1px", background: "#00D4FF" }} />
                Frameworks &amp; Tools
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.frameworks_tools.map((t, i) => (
                  <div key={i} className="skills-fade" style={{ animationDelay: `${0.08 + i * 0.04}s` }}>
                    <ToolChip name={t} />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="skills-fade"
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "32px",
                animationDelay: "0.15s",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#2ECC71",
                  fontFamily: "var(--font-mono, monospace)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ display: "inline-block", width: "16px", height: "1px", background: "#2ECC71" }} />
                Soft Skills
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {skills.softSkills.map((s, i) => (
                  <SoftPill key={i} name={s} index={i} />
                ))}
              </div>
            </div>

            {barLangs.length > 0 && (
              <div
                className="skills-fade"
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "32px",
                  animationDelay: "0.22s",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#F59E0B",
                    fontFamily: "var(--font-mono, monospace)",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ display: "inline-block", width: "16px", height: "1px", background: "#F59E0B" }} />
                  More Languages
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {barLangs.map((l, i) => (
                    <LangBar key={l._id || i} name={l.name} level={l.level} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="skills-fade"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "36px 32px",
              animationDelay: "0.1s",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#00D4FF",
                fontFamily: "var(--font-mono, monospace)",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ display: "inline-block", width: "16px", height: "1px", background: "#00D4FF" }} />
              Programming Languages
            </div>

            <div
              className="ring-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "28px 16px",
                justifyItems: "center",
              }}
            >
              {ringLangs.map((l, i) => (
                <div key={l._id || i} className="skills-fade" style={{ animationDelay: `${0.12 + i * 0.07}s` }}>
                  <Ring pct={l.level} name={l.name} size={96} />
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "36px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border)",
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { label: "Expert",       color: "#00D4FF", min: "80%+" },
                { label: "Proficient",   color: "#2ECC71", min: "60–79%" },
                { label: "Intermediate", color: "#F59E0B", min: "40–59%" },
                { label: "Beginner",     color: "#EF4444", min: "<40%" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--font-mono, monospace)",
                      color: "rgba(var(--white-rgb), 0.35)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.label} <span style={{ color: item.color, opacity: 0.7 }}>{item.min}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}