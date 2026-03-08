// Login.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  const correctHash =
    "4fa922a1ea16ddee6d45ff821c65113294b969b6134050c047b05aee3a683b3b";

  useEffect(() => {
    setMounted(true);
    const auth = sessionStorage.getItem("auth");
    if (auth) navigate("/");
  }, [navigate]);

  async function hashPassword(pass) {
    const encoder = new TextEncoder();
    const data = encoder.encode(pass);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const hashed = await hashPassword(password);
    setTimeout(() => {
      if (hashed === correctHash) {
        sessionStorage.setItem("auth", hashed);
        navigate("/");
      } else {
        setShake(true);
        setLoading(false);
        setTimeout(() => setShake(false), 600);
      }
    }, 900);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #0b0e14;
          overflow: hidden;
        }

        /* ── BACKGROUND SCENE ── */
        .scene {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
          background:
            radial-gradient(ellipse 100% 80% at 50% 120%, #0d1d38 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 80% 20%,  #0a1525 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 10% 70%,  #091220 0%, transparent 55%),
            #0b0e14;
        }

        /* soft blue glow behind the card */
        .bg-glow {
          position: absolute;
          width: 600px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(59,130,246,0.09) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* tiny floating stars */
        .star {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          pointer-events: none;
          animation: twinkle var(--dur, 4s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        @keyframes twinkle {
          0%, 100% { opacity: var(--lo, 0.1); }
          50%       { opacity: var(--hi, 0.35); }
        }

        /* ── FLOATING PAPER CARD ── */
        @keyframes float {
          0%, 100% { transform: translateY(0px)   rotate(-0.6deg); }
          50%       { transform: translateY(-11px) rotate(0.4deg);  }
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(50px) rotate(-1.2deg) scale(0.97); }
          to   { opacity: 1; transform: translateY(0px)  rotate(-0.6deg) scale(1);    }
        }

        .paper-card {
          position: relative;
          z-index: 10;
          width: 370px;
          /* warm off-white — easy on eyes, not blinding */
          background: #e8e4dc;
          border-radius: 3px;
          padding: 42px 38px 34px;
          opacity: 0;

          box-shadow:
            0 1px 2px  rgba(0,0,0,0.08),
            0 6px 18px rgba(0,0,0,0.30),
            0 28px 56px rgba(0,0,0,0.50),
            0 56px 80px rgba(0,0,0,0.28),
            -3px 6px 24px rgba(0,0,0,0.15);
        }

        .paper-card.visible {
          animation:
            cardIn 0.75s cubic-bezier(0.22,1,0.36,1) forwards,
            float  5.5s ease-in-out 0.75s infinite;
        }

        /* ruled lines on paper */
        .paper-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 27px,
            rgba(100,130,200,0.3) 27px,
            rgba(100,130,200,0.3) 28px
          );
          border-radius: 3px;
          pointer-events: none;
        }

        /* red margin line */
        .paper-card::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          left: 50px;
          width: 2px;
          background: rgba(200, 80, 80, 0.5);
          pointer-events: none;
        }

        /* punch holes */
        .paper-holes {
          position: absolute;
          top: -1px; left: 0; right: 0;
          display: flex;
          justify-content: space-around;
          padding: 0 50px;
          pointer-events: none;
        }

        .hole {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #0b0e14;
          border: 1px solid rgba(0,0,0,0.12);
          margin-top: -5.5px;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.25);
        }

        /* brand row */
        .paper-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 26px;
        }

        .brand-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 6px rgba(59,130,246,0.5);
        }

        .brand-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #7a8499;
        }

        /* heading */
        .paper-heading { margin-bottom: 28px; }

        .paper-heading h2 {
          font-size: 22px;
          font-weight: 800;
          color: #1a1f2e;
          line-height: 1.3;
          margin-bottom: 6px;
        }

        .paper-heading p {
          font-size: 12.5px;
          font-weight: 400;
          color: #7a8499;
          line-height: 1.55;
        }

        .hand-underline {
          width: 44px;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 2px;
          margin-top: 11px;
          opacity: 0.75;
        }

        /* field */
        .paper-field { margin-bottom: 22px; }

        .paper-label {
          display: block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #6b7687;
          margin-bottom: 8px;
        }

        .paper-input-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1.5px solid #c4bfb5;
          padding: 9px 0;
          transition: border-color 0.2s ease;
          background: transparent;
        }

        .paper-input-wrap.focused {
          border-bottom-color: #3b82f6;
        }

        .paper-input-wrap svg {
          width: 15px; height: 15px;
          color: #a0aab8;
          flex-shrink: 0;
          transition: color 0.2s;
        }

        .paper-input-wrap.focused svg { color: #3b82f6; }

        .paper-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #1a1f2e;
          letter-spacing: 2px;
        }

        .paper-input::placeholder {
          letter-spacing: 0;
          color: #b0b8c4;
          font-weight: 400;
        }

        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }

        .shake { animation: shake 0.5s ease; }

        /* button */
        .paper-btn {
          width: 100%;
          margin-top: 10px;
          padding: 13px 20px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.4px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(59,130,246,0.38);
          transition: all 0.22s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .paper-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 7px 22px rgba(59,130,246,0.5);
        }

        .paper-btn:active:not(:disabled) { transform: translateY(0); }
        .paper-btn:disabled { opacity: 0.75; cursor: not-allowed; }

        @keyframes spin { to { transform: rotate(360deg); } }

        .spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* footer */
        .paper-footer {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          font-size: 12px;
          color: #8a939f;
        }

        .paper-footer a {
          color: #3b82f6;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s;
        }

        .paper-footer a:hover { color: #2563eb; }
      `}</style>

      <div className="scene">

        {/* Soft glow behind card */}
        <div className="bg-glow" />

        {/* Ambient twinkling stars */}
        {[
          [12,8,2,3,'0.1','0.3','3.8s','0s'],
          [25,18,2,2,'0.08','0.28','5.1s','0.4s'],
          [40,6,3,3,'0.12','0.38','4.2s','1.1s'],
          [60,14,2,2,'0.1','0.32','6s','0.2s'],
          [75,9,2,2,'0.07','0.25','4.6s','0.8s'],
          [88,20,3,3,'0.13','0.35','5.4s','1.6s'],
          [5,30,2,2,'0.08','0.22','4.9s','0.5s'],
          [50,4,2,2,'0.1','0.3','5.7s','1.3s'],
          [33,25,2,2,'0.09','0.27','3.5s','2s'],
          [68,12,3,3,'0.11','0.33','6.2s','0.7s'],
          [82,28,2,2,'0.07','0.2','4.4s','1.9s'],
          [17,40,2,2,'0.1','0.28','5s','0.3s'],
          [55,35,2,2,'0.08','0.24','4.7s','1.5s'],
          [90,42,3,3,'0.12','0.36','5.8s','0.9s'],
          [3,50,2,2,'0.09','0.26','4.1s','2.2s'],
        ].map(([l,t,w,h,lo,hi,dur,delay], i) => (
          <div key={i} className="star" style={{
            left:`${l}%`, top:`${t}%`,
            width:`${w}px`, height:`${h}px`,
            '--lo': lo, '--hi': hi,
            '--dur': dur, '--delay': delay,
          }} />
        ))}

        {/* ── FLOATING PAPER CARD ── */}
        <div className={`paper-card ${mounted ? "visible" : ""}`}>

          <div className="paper-holes">
            <div className="hole" />
            <div className="hole" />
            <div className="hole" />
          </div>

          <div className="paper-brand">
            <div className="brand-dot" />
            <span className="brand-label">Sanjay Portfolio</span>
          </div>

          <div className="paper-heading">
            <h2>Welcome back, Sanjay 👋</h2>
            <p>Enter the password to edit your profile.</p>
            <div className="hand-underline" />
          </div>

          <form onSubmit={handleLogin}>
            <div className={`paper-field ${shake ? "shake" : ""}`}>
              <label className="paper-label">Password</label>
              <div className={`paper-input-wrap ${focused ? "focused" : ""}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  className="paper-input"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  required
                />
              </div>
            </div>

            <button className="paper-btn" type="submit" disabled={loading}>
              {loading
                ? <><span className="spinner" /> Verifying…</>
                : <>Login →</>
              }
            </button>
          </form>

          <div className="paper-footer">
            <a href="#">Hint</a>
            <span style={{ margin: '0 5px', color: '#c4bfb5' }}>·</span>
            <a href="#">Sasu</a>
          </div>

        </div>
      </div>
    </>
  );
}