// components/Education.jsx
function abbr(name = "") {
  return (
    name.split(/\s+/).filter((w) => w.length > 2).slice(0, 2)
      .map((w) => w[0].toUpperCase()).join("") || name.slice(0, 2).toUpperCase()
  );
}

const YOUR_EDU_DATA = [
  {
    _id: "69abccf0763422ddcca78d39",
    institution: "Government Boys Higher Secondary School",
    course: "HSC",
    duration: "2022 – 2023",
    cgpa: "",
    percentage: "67.5%",
  },
  {
    _id: "69abcd16763422ddcca78d3c",
    institution: "St. Joseph's Institute of Technology",
    course: "B.Tech in Information Technology",
    duration: "2023 – 2027",
    cgpa: "8.02",
    percentage: "",
  },
];

function EduCard({ edu, index }) {
  const badge  = edu.cgpa ? edu.cgpa : edu.percentage || null;
  const label  = edu.cgpa ? "CGPA" : "Score";
  const num    = String(index + 1).padStart(2, "0");
  const isOdd  = index % 2 !== 0;

  return (
    <div className={`ecard ${isOdd ? "ecard--offset" : ""}`}>
      <div className="ecard__stripe">
        <span className="ecard__idx">{num}</span>
      </div>

      <div className="ecard__body">
        <div className="ecard__top">
          <div className="ecard__abbr">{abbr(edu.institution)}</div>
          <span className="ecard__year">{edu.duration}</span>
        </div>

        <h3 className="ecard__inst">{edu.institution}</h3>
        <p className="ecard__course">{edu.course}</p>

        <div className="ecard__slashes" aria-hidden="true">
          <span>/</span><span>/</span><span>/</span>
        </div>

        <p className="ecard__desc">
          {edu.description ||
            `Pursued ${edu.course}, building a strong academic foundation across core subjects.`}
        </p>
      </div>

      {badge && (
        <div className="ecard__footer">
          <span className="ecard__score-label">{label}</span>
          <span className="ecard__score-val">{badge}</span>
        </div>
      )}

      <div className="ecard__corner" />
    </div>
  );
}

export default function Education({ items = [] }) {
  const list = items.length > 0 ? items : YOUR_EDU_DATA;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600&display=swap');

        #education {
          --ea: var(--accent, #2ECC71);
        }

        .edu-hdr {
          display: flex;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .edu-tag {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--ea);
          opacity: 0.7;
          margin-bottom: 6px;
        }

        .edu-h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 9vw, 96px);
          font-weight: 400;
          line-height: 0.88;
          letter-spacing: 0.02em;
          color: var(--white);
          margin: 0;
        }
        .edu-h2 span { color: var(--ea); }

        .edu-big-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 100px;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(var(--white-rgb), 0.05);
          margin-left: auto;
          align-self: flex-end;
          padding-bottom: 8px;
        }

        .edu-mosaic {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          max-width: 880px;
          margin: 0 auto;
        }

        .ecard--offset { margin-top: 56px; }

        .ecard {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          cursor: default;
          transition: transform .32s cubic-bezier(.16,1,.3,1),
                      border-color .3s,
                      box-shadow .32s;
        }

        .ecard:hover {
          transform: translateY(-8px) rotate(-0.5deg);
          border-color: var(--ea);
          box-shadow: 5px 5px 0 var(--ea), 0 28px 64px rgba(0,0,0,0.65);
        }

        .ecard__stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 34px;
          background: rgba(var(--white-rgb), 0.02);
          border-right: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          writing-mode: vertical-rl;
          transition: background .3s, border-color .3s;
        }
        .ecard:hover .ecard__stripe {
          background: var(--ea)12;
          border-right-color: var(--ea)40;
        }

        .ecard__idx {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 0.4em;
          color: rgba(var(--white-rgb), 0.12);
          transition: color .3s;
        }
        .ecard:hover .ecard__idx { color: var(--ea); }

        .ecard__body { padding: 22px 20px 18px 50px; flex: 1; }

        .ecard__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .ecard__abbr {
          width: 38px; height: 38px;
          border: 1px solid var(--border);
          border-radius: 3px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          color: var(--ea);
          background: rgba(var(--white-rgb), 0.02);
          transition: border-color .3s, background .3s;
        }
        .ecard:hover .ecard__abbr {
          border-color: var(--ea)55;
          background: var(--ea)10;
        }

        .ecard__year {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ea);
          opacity: 0.6;
        }

        .ecard__inst {
          font-family: 'Syne', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          color: var(--white);
          margin: 0 0 5px;
          line-height: 1.38;
        }

        .ecard__course {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(var(--white-rgb), 0.28);
          margin: 0 0 14px;
          letter-spacing: 0.03em;
        }

        .ecard__slashes {
          display: flex;
          gap: 4px;
          margin-bottom: 12px;
        }
        .ecard__slashes span {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          color: var(--ea);
          opacity: 0.15;
          transition: opacity .18s;
        }
        .ecard:hover .ecard__slashes span:nth-child(1) { opacity: 0.75; }
        .ecard:hover .ecard__slashes span:nth-child(2) { opacity: 0.4; transition-delay: .05s; }
        .ecard:hover .ecard__slashes span:nth-child(3) { opacity: 0.18; transition-delay: .1s; }

        .ecard__desc {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.78;
          color: rgba(var(--white-rgb), 0.32);
          margin: 0;
        }

        .ecard__footer {
          border-top: 1px solid var(--border);
          padding: 10px 20px 12px 50px;
          display: flex;
          align-items: baseline;
          gap: 8px;
          transition: border-color .3s;
        }
        .ecard:hover .ecard__footer { border-top-color: var(--ea)25; }

        .ecard__score-label {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(var(--white-rgb), 0.2);
        }

        .ecard__score-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          line-height: 1;
          letter-spacing: 0.04em;
          color: var(--ea);
        }

        .ecard__corner {
          position: absolute; bottom: 0; right: 0;
          width: 0; height: 0;
          border-style: solid;
          border-width: 0 0 24px 24px;
          border-color: transparent transparent rgba(var(--white-rgb), 0.03) transparent;
          transition: border-color .3s;
        }
        .ecard:hover .ecard__corner {
          border-color: transparent transparent var(--ea)20 transparent;
        }

        @media (max-width: 580px) {
          .edu-mosaic { grid-template-columns: 1fr; }
          .ecard--offset { margin-top: 0; }
          .edu-big-num { display: none; }
        }
      `}</style>

      <section id="education" className="section">
        <div className="edu-hdr">
          <div>
            <div className="edu-tag"># Education</div>
            <h2 className="edu-h2">Edu<span>.</span></h2>
          </div>
          <div className="edu-big-num" aria-hidden="true">{String(list.length).padStart(2,"0")}</div>
        </div>

        <div className="edu-mosaic">
          {list.map((edu, i) => (
            <EduCard key={edu._id || i} edu={edu} index={i} total={list.length} />
          ))}
        </div>
      </section>
    </>
  );
}