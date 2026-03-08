import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(next)}
      className="
        absolute top-4 right-4
        flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-white/10
        bg-[#0a0e12]/70
        text-sm font-[Poppins] font-medium
        transition-all duration-300
        hover:bg-[#0f1419]/80 hover:border-cyan-500/30 hover:shadow-[0_0_10px_rgba(6,182,212,0.25)]
      "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-4 h-4 text-cyan-300" />
          <span className="text-zinc-300">Dark</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-cyan-300" />
          <span className="text-zinc-300">Light</span>
        </>
      )}
    </button>
  );
}
