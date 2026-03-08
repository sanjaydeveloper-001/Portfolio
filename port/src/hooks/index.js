/**
 * hooks/index.js
 * Reusable hooks used across the portfolio.
 */

import { useState, useEffect, useRef } from 'react';
import portfolioApi from '../services/api';

/* ── usePortfolioData ──────────────────────────────────────────────────── */
/**
 * Fetches all portfolio data in parallel.
 * Returns { data, loading, error }.
 */
export function usePortfolioData() {
  const [data, setData] = useState({
    profile: null, skills: null,
    projects: [], education: [], experience: [],
    certifications: [], interests: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    portfolioApi
      .fetchAll()
      .then((result) => {
        // normalise interests — backend may return { interests: [...] } or plain []
        const raw = result.interests;
        const interests = Array.isArray(raw)
          ? raw
          : raw?.interests ?? [];
        setData({ ...result, interests });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

/* ── useActiveSection ──────────────────────────────────────────────────── */
/**
 * Tracks which nav section is currently in view using IntersectionObserver.
 * @param {string[]} sectionIds
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);          // intentionally empty — IDs are stable

  return active;
}

/* ── useReveal ─────────────────────────────────────────────────────────── */
/**
 * Triggers .in class on all .reveal elements as they enter the viewport.
 * Call once at app root level.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* ── useInViewAnimation ────────────────────────────────────────────────── */
/**
 * Returns [ref, inView] — triggers once when the element enters viewport.
 * Useful for skill bars, counters, etc.
 * @param {number} threshold
 */
export function useInViewAnimation(threshold = 0.3) {
  const ref    = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ── useScrollProgress ─────────────────────────────────────────────────── */
/** Returns scroll progress (0–100). */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const pct =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setProgress(pct);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return progress;
}

/* ── useContactForm ────────────────────────────────────────────────────── */
/**
 * Manages contact form state and submission via portfolioApi.sendContact.
 */
export function useContactForm() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await portfolioApi.sendContact(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  const reset = () => { setStatus('idle'); setErrMsg(''); };

  return { form, update, submit, status, errMsg, reset };
}