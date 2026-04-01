// components/Footer.jsx
// Back-to-top is now a floating button (BackToTop.jsx) — footer is clean.

export default function Footer({ profile }) {
  return (
    <footer>
      <div className="footer-copy">
        © <span>{profile?.name || 'Portfolio'}</span> {new Date().getFullYear()} — All rights reserved
      </div>
      <div className="footer-socials">
        {profile?.social?.slice(0, 4).map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className="footer-social-link"
          >
            {s.name.slice(0, 2).toUpperCase()}
          </a>
        ))}
      </div>
    </footer>
  );
}