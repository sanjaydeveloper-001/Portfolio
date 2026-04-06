import { useState, useCallback } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

  .pl-root {
    width: 100%;
    height: 100vh;
    background: #0d0d0d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    gap: 0;
  }

  .pl-dots {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    height: 28px;
    animation: plFade 0.5s ease both;
  }
  .pl-dot {
    width: 3px;
    border-radius: 2px;
    background: #e8491d;
    animation: plBounce 1s ease-in-out infinite;
  }
  .pl-dot:nth-child(1){ height:8px;  animation-delay: 0s;    }
  .pl-dot:nth-child(2){ height:16px; animation-delay: 0.1s;  }
  .pl-dot:nth-child(3){ height:24px; animation-delay: 0.2s;  }
  .pl-dot:nth-child(4){ height:16px; animation-delay: 0.3s;  }
  .pl-dot:nth-child(5){ height:8px;  animation-delay: 0.4s;  }
  .pl-dot:nth-child(6){ height:16px; animation-delay: 0.3s;  }
  .pl-dot:nth-child(7){ height:24px; animation-delay: 0.2s;  }
  .pl-dot:nth-child(8){ height:16px; animation-delay: 0.1s;  }
  .pl-dot:nth-child(9){ height:8px;  animation-delay: 0s;    }

  @keyframes plBounce {
    0%, 100% { transform: scaleY(0.4); opacity: 0.3; }
    50%       { transform: scaleY(1);   opacity: 1;   }
  }

  .pl-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.05em;
    margin-top: 28px;
    animation: plUp 0.6s ease 0.2s both;
  }
  .pl-name span { color: #e8491d; }

  .pl-role {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    color: #444;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-top: 8px;
    animation: plUp 0.6s ease 0.35s both;
  }

  @keyframes plFade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes plUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pl-replay-btn {
    position: absolute;
    bottom: 14px; right: 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #2a2a2a;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
  }
  .pl-replay-btn:hover { color: #e8491d; }
`;

const DOT_COUNT = 9;

export default function ProfileLoader() {
  const [key, setKey] = useState(0);

  const handleReplay = useCallback(() => {
    setKey((k) => k + 1);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="pl-root">
        <div key={key} className="pl-dots">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <div key={i} className="pl-dot" />
          ))}
        </div>
        <div className="pl-name">
          Sanjay <span>D.</span>
        </div>
        <div className="pl-role">MERN Stack Developer</div>
        <button className="pl-replay-btn" onClick={handleReplay}>
          ↺ replay
        </button>
      </div>
    </>
  );
}