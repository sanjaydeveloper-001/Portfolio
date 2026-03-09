// components/Experience.jsx
// ── ALL styles live in globalStyles.js ──
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
  );
}