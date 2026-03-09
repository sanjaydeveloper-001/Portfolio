/**
 * components/Contact.jsx
 * Contact section + Footer
 */

import { Icon } from './Ui';
/* ── Footer ── */
export default function Footer({ profile }) {
  return (
    <footer>
      <div className="footer-copy">
        © <span>{profile?.name || 'Portfolio'}</span> {new Date().getFullYear()} — All rights reserved
      </div>
      <button
        className="footer-back"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon.ArrowU /> Back to Top
      </button>
    </footer>
  );
}