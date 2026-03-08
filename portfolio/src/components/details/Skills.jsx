// src/components/details/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { skills, TECH_ICON_MAP } from "../../utils/data";
import { VscTools } from "react-icons/vsc";

// icons
import { FaDatabase } from "react-icons/fa";

export default function Skills() {
  const { languages = [], frameworks_tools = [], softSkills = [] } = skills;

  const radius = 34; // circle radius
  const circumference = 2 * Math.PI * radius;

  // helper to normalize keys to match TECH_ICON_MAP
  const normalizeKey = (label) =>
    String(label)
      .toLowerCase()
      .replace(/\s*\(.*?\)\s*/g, "") // remove parenthesis content
      .replace(/[.+]/g, "") // remove dots/plus
      .replace(/5$/, "") // strip trailing 5 from html5/css3 -> html/css
      .trim();

  return (
    <section>
      <h2 className="flex items-center gap-1 text-xl sm:text-2xl font-[Poppins] font-bold text-cyan-400 mb-4"><VscTools/> Technologies </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* === Frameworks, Tools, Databases, Soft Skills === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl border border-white/8 bg-[#0a0e12]/65 backdrop-blur-sm space-y-5"
        >
          <SkillCategory title="Frameworks / Tools" items={frameworks_tools} />
          <SkillCategory title="Soft Skills" items={softSkills} />
        </motion.div>

        {/* === Programming Languages (Circular Rings) === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl border border-white/8 bg-[#0a0e12]/65 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm uppercase tracking-wide text-cyan-300 font-semibold">
              Programming Languages
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-3">
            {languages.map((lang, i) => {
              // support either string or object input
              const name = typeof lang === "string" ? lang : lang.name;
              const level =
                typeof lang === "object" && typeof lang.level === "number"
                  ? Math.max(0, Math.min(100, Math.round(lang.level)))
                  : 0;
              const offset = circumference - (level / 100) * circumference;

              // normalized lookup key
              let key = normalizeKey(name);
              if (key === "js") key = "javascript";
              if (key === "css3") key = "css";
              if (key === "html5") key = "html";

              // find mapping in TECH_ICON_MAP
              const mapping = TECH_ICON_MAP && TECH_ICON_MAP[key];
              const IconComp = mapping ? mapping.Icon : null;
              const iconColor = (mapping && mapping.color) || (lang && lang.colour) || "#06b6d4";

              return (
                <motion.div
                  key={name + i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="relative w-20 h-20">
                    {/* background ring */}
                    <svg className="w-full h-full transform -rotate-90" width="100" height="100">
                      <circle cx="40" cy="40" r={radius} stroke="rgba(255,255,255,.05)" strokeWidth="6" fill="none" />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="url(#cyanGradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                      />
                      <defs>
                        <linearGradient id="cyanGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8EEFFF" />
                          <stop offset="100%" stopColor="#07B7E0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* centered icon (inside ring) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {IconComp ? (
                        <IconComp className="w-6 h-6" style={{ color: iconColor }} aria-hidden="true" />
                      ) : (
                        <span className="text-sm font-semibold text-zinc-200">{name[0] ?? "?"}</span>
                      )}
                    </div>
                  </div>

                  {/* percentage below the circle */}
                  <span className="text-xs text-zinc-300">{level}%</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* === Reusable small component for boxes === */
const SkillCategory = ({ title, items }) => {
  const lowered = (s) => String(s).toLowerCase();

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm uppercase tracking-wide text-cyan-300 font-semibold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => {
          // text label and mapping key
          const label = typeof item === "string" ? item : item.name || String(item);
          const key = lowered(label).replace(/\s*\(.*?\)\s*/g, "").trim(); // normalize

          // only show icons for Frameworks / Tools category (per your earlier request)
          const showIcon = lowered(title).includes("framework");

          // icon mapping (try TECH_ICON_MAP fallback)
          const mapped = TECH_ICON_MAP && TECH_ICON_MAP[key];
          const Icon = mapped ? mapped.Icon : null;
          const iconColor = (mapped && mapped.color) || (item && item.colour) || "#06b6d4";

          return (
            <motion.div
              key={String(item) + idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              viewport={{ once: true }}
              className="px-3 py-1 rounded-md bg-black/50 border border-white/6 text-sm text-white flex items-center gap-2"
              title={label}
            >
              {showIcon && Icon ? (
                <span className="flex items-center justify-center w-6 h-6 rounded-sm" style={{ color: iconColor }}>
                  <Icon className="w-4 h-4" />
                </span>
              ) : showIcon ? (
                // placeholder icon to keep alignment
                <span className="flex items-center justify-center w-6 h-6 rounded-sm opacity-30">
                  <FaDatabase className="w-4 h-4" />
                </span>
              ) : null}

              <span className="truncate">{label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
