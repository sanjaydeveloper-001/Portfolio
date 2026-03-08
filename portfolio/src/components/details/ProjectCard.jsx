// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ proj, index, onOpen }) {
  const bgStyle = proj.image
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(3,7,11,0.2), rgba(3,7,11,0.65)), url(${proj.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundImage: "linear-gradient(135deg,#071018,#061018)",
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      viewport={{ once: true }}
      className="group relative rounded-xl overflow-hidden border border-white/10 shadow-lg h-44 md:h-52 lg:h-56"
      role="article"
      aria-label={`Project ${proj.title}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700 group-hover:scale-105"
        style={bgStyle}
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60 pointer-events-none" />
      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-3 md:p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3
              className="text-sm md:text-base font-semibold text-white truncate"
            >
              {proj.title}
            </h3>
          </div>

          {/* View button - updated theme */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen(proj);
            }}
            className="px-2.5 py-1 md:px-4 md:py-1 rounded-lg text-[11px] md:text-[16px] font-medium
                       text-white backdrop-blur-md border border-white/10
                       bg-linear-to-r from-cyan-700/55 to-sky-700/55
                       hover:from-cyan-600/65 hover:to-sky-600/65
                       transition-all duration-200 cursor-pointer"
          >
            View
          </button>
        </div>

        {/* Tech chips */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {proj.tech?.slice(0, 3).map((t, j) => (
            <span
              key={t + j}
              className="text-[10px] px-3 py-1 rounded-md bg-black/80 border border-white/10 text-zinc-100 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
