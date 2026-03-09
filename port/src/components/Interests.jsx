const DEMO_INTERESTS = [
  'Artificial Intelligence', 'IoT & Smart Systems', 'Machine Learning',
  'Cloud Computing', 'UI / UX Design', 'App Development',
  'Open Source', 'Backend Engineering',
];

export default function Interests({ items }) {
  const list = items.length > 0 ? items : DEMO_INTERESTS;

  return (
    <section id="interests" className="section">
      <div className="section-label reveal"># Passions</div>
      <h2 className="sec-heading reveal d1">
        Interests<span style={{ color: 'var(--accent)' }}>.</span>
      </h2>
      
      <style>{`
        .int-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 40px;
        }
        
        .int-tag {
          position: relative;
          padding: 12px 24px;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          color: var(--white);
          background: transparent;
          border: 2px solid var(--border);
          border-radius: 50px;
          transition: all 0.3s ease;
          cursor: default;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .int-tag:hover {
          border-color: var(--red);
          transform: scale(1.05);
        }
        
        .int-tag:nth-child(3n+1) {
          font-size: 20px;
          padding: 14px 28px;
        }
        
        .int-tag:nth-child(4n+2) {
          font-size: 16px;
        }
        
        @media (max-width: 768px) {
          .int-tags {
            gap: 10px;
          }
          .int-tag {
            font-size: 16px !important;
            padding: 10px 20px !important;
          }
        }
      `}</style>
      
      <div className="int-tags">
        {list.map((item, i) => (
          <div key={i} className={`int-tag reveal d${Math.min((i % 5) + 1, 5)}`}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
