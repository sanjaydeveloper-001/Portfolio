/**
 * components/UI.jsx
 * – No custom cursor (system cursor restored)
 * – BubbleBurst exported for double-click effect
 * – ScrollProgress and Loader unchanged
 */

import { useEffect, useState } from 'react';
import { useScrollProgress } from '../hooks';

/* ═══════════════════════════
   BUBBLE BURST ON DOUBLE CLICK
═══════════════════════════ */
export const BubbleBurst = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const onDblClick = (e) => {
      const id = Date.now();
      const count = 8;
      const newBubbles = Array.from({ length: count }, (_, i) => ({
        id: `${id}-${i}`,
        x: e.clientX,
        y: e.clientY,
        angle: (360 / count) * i,
        size: 6 + Math.random() * 10,
        distance: 40 + Math.random() * 40,
      }));

      setBubbles(prev => [...prev, ...newBubbles]);

      setTimeout(() => {
        setBubbles(prev => prev.filter(b => !newBubbles.find(n => n.id === b.id)));
      }, 700);
    };

    window.addEventListener('dblclick', onDblClick);
    return () => window.removeEventListener('dblclick', onDblClick);
  }, []);

  return (
    <>
      <style>{`
        .bubble {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          border: 2px solid var(--accent, #e63946);
          background: transparent;
          transform: translate(-50%, -50%);
        }
        .bubble-ring {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99997;
          border: 1.5px solid var(--accent, #e63946);
          background: transparent;
          transform: translate(-50%, -50%);
          animation: ring-expand 0.65s ease-out forwards;
        }
        @keyframes ring-expand {
          0%   { width: 0px;  height: 0px;  opacity: 0.8; }
          100% { width: 80px; height: 80px; opacity: 0; }
        }
      `}</style>

      {bubbles
        .filter((_, i) => i % 8 === 0)
        .map(b => (
          <div key={`ring-${b.id}`} className="bubble-ring" style={{ left: b.x, top: b.y }} />
        ))
      }

      {bubbles.map(b => {
        const rad = (b.angle * Math.PI) / 180;
        const tx  = Math.cos(rad) * b.distance;
        const ty  = Math.sin(rad) * b.distance;
        return (
          <div
            key={b.id}
            className="bubble"
            style={{
              left: b.x, top: b.y,
              width: b.size, height: b.size,
              animation: `bubble-fly-${b.id} 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            }}
          />
        );
      })}

      {bubbles.map(b => {
        const rad = (b.angle * Math.PI) / 180;
        const tx  = Math.cos(rad) * b.distance;
        const ty  = Math.sin(rad) * b.distance;
        return (
          <style key={`style-${b.id}`}>{`
            @keyframes bubble-fly-${b.id} {
              0%   { transform: translate(-50%, -50%) translate(0, 0);             opacity: 1; width: ${b.size}px; height: ${b.size}px; }
              60%  { opacity: 0.8; }
              100% { transform: translate(-50%, -50%) translate(${tx}px, ${ty}px); opacity: 0; width: ${b.size * 0.4}px; height: ${b.size * 0.4}px; }
            }
          `}</style>
        );
      })}
    </>
  );
};

/* ═══════════════════════════
   SCROLL PROGRESS
═══════════════════════════ */
export const ScrollProgress = () => {
  const progress = useScrollProgress();
  return (
    <div id="scroll-prog">
      <div id="scroll-fill" style={{ height: `${progress}%` }} />
    </div>
  );
};

/* ═══════════════════════════
   LOADER
═══════════════════════════ */
export const Loader = ({ name, done }) => (
  <div className={`loader${done ? ' done' : ''}`}>
    <div className="loader-word">
      {name ? name.split(' ')[0] : 'PORT'}
      <span>.</span>
    </div>
    <div className="loader-track">
      <div className="loader-fill" />
    </div>
  </div>
);

/* ═══════════════════════════
   ICONS
═══════════════════════════ */
export const Icon = {
  Home:     () => <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  User:     () => <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Code:     () => <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Monitor:  () => <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  Pen:      () => <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  Layers:   () => <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  GradCap:  () => <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Brief:    () => <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
  Award:    () => <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  Mail:     () => <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone:    () => <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .91h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  MapPin:   () => <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Link:     () => <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  ArrowR:   () => <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  ArrowU:   () => <svg viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>,
  ChevL:    () => <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>,
  ChevR:    () => <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>,
  Github:   () => <svg viewBox="0 0 24 24" style={{fill:'currentColor',stroke:'none'}}><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
  Twitter:  () => <svg viewBox="0 0 24 24" style={{fill:'currentColor',stroke:'none'}}><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>,
  Linkedin: () => <svg viewBox="0 0 24 24" style={{fill:'currentColor',stroke:'none'}}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Instagram:() => <svg viewBox="0 0 24 24" style={{fill:'currentColor',stroke:'none'}}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  Menu:     () => <svg viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  Close:    () => <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
};