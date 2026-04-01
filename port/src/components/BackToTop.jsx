// components/BackToTop.jsx
// Floating "back to top" button that appears after scrolling 300px

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 800;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.35);
          cursor: pointer;
          opacity: 0;
          transform: translateY(16px) scale(0.85);
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s;
        }
        .back-to-top.show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }
        .back-to-top:hover {
          background: #b83305;
          transform: translateY(-3px) scale(1.06);
        }
        .back-to-top svg {
          width: 18px;
          height: 18px;
          stroke: #fff;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        @media (max-width: 768px) {
          .back-to-top { bottom: 20px; right: 20px; width: 42px; height: 42px; }
        }
      `}</style>

      <button
        className={`back-to-top${visible ? ' show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </>
  );
}