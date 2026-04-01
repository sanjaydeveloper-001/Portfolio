// components/Education.jsx
// ── ALL styles live in globalStyles.js ──
const DEMO_EDU = [
  {
    institution: "Stanford University",
    course: "B.E. Computer Science",
    duration: "2019 – 2023",
    description:
      "Focused on algorithms, distributed systems, and machine learning applications.",
    cgpa: "8.9",
  },
  {
    institution: "Coursera / Google",
    course: "UX Design Professional",
    duration: "2021",
    description:
      "Completed intensive UX design program with hands-on capstone projects.",
  },
  {
    institution: "freeCodeCamp",
    course: "Full Stack Web Development",
    duration: "2020",
    description:
      "Built 20+ projects covering front-end, back-end, and database design.",
  },
];

const abbr = (name = "") => name.slice(0, 2).toUpperCase();

export default function Education({ items = [], profile }) {
  const list = items.length > 0 ? items : DEMO_EDU;

  return (
    <section id="education" className="section">
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "48px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <div className="section-label reveal"># Education</div>
          <h2
            className="sec-heading reveal d1"
            style={{ marginBottom: 0 }}
          >
            Education<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
        {profile?.cvLink && (
          <a
            className="btn btn-accent reveal d2"
            href={profile.cvLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        )}
      </div>

      <div className="edu-table">
        {list.map((edu, i) => (
          <div
            key={edu._id || i}
            className={`edu-row reveal d${Math.min(i + 1, 5)}`}
          >
            <div className="edu-logo">{abbr(edu.institution)}</div>
            <div className="edu-meta">
              <div className="edu-year">{edu.duration}</div>
              <div className="edu-name">{edu.institution}</div>
              {edu.course && <div className="edu-course">{edu.course}</div>}
            </div>
            <div className="edu-desc">
              {edu.description ||
                `Studied ${edu.course} at ${edu.institution}.`}
            </div>
            <div>
              {edu.cgpa && (
                <span className="edu-badge">CGPA {edu.cgpa}</span>
              )}
              {edu.percentage && (
                <span className="edu-badge">{edu.percentage}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}