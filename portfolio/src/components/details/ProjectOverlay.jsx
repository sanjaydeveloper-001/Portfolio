import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectOverlay({ proj, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    if (proj) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [proj, onClose]);

  if (!proj) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-9999 flex items-center justify-center px-3 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Dimmed background */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Overlay card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10000 w-full max-w-5xl rounded-3xl overflow-hidden bg-[#05080d]/90 border border-white/10 shadow-xl backdrop-blur-xl flex flex-col max-h-[90vh] sm:max-h-[85vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10010 rounded-full p-2 bg-black/50 border border-cyan-600/40 text-cyan-300 hover:text-white hover:bg-cyan-800/40 transition-all duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-cyan-700/40">
            <div className="grid md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-52 sm:h-64 md:h-full overflow-hidden"
              >
                {proj.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${proj.image})` }}
                    role="img"
                    aria-label={proj.title}
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-[#071018] to-[#061018]" />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg sm:text-2xl font-[Poppins] font-semibold text-white drop-shadow-md">
                    {proj.title}
                  </h3>
                  {proj.type && <p className="text-xs sm:text-sm text-cyan-300 mt-1">{proj.type}</p>}
                </div>
              </motion.div>

              <div className="p-5 sm:p-8 flex flex-col text-sm">
                <h2 className="text-xl sm:text-3xl font-[Poppins] font-bold text-white mb-2 sm:mb-3">
                  {proj.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-4 sm:mb-6">{proj.description}</p>

                {proj.tech?.length > 0 && (
                  <div className="mb-5 sm:mb-6">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full border border-cyan-700/30 text-cyan-200 bg-black/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mb-6">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl font-medium text-white text-sm inline-flex items-center gap-2 border border-white/10 bg-linear-to-r from-cyan-700/60 to-sky-700/60 hover:from-cyan-600/80 hover:to-sky-600/80 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {proj.repo && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl font-medium text-white text-sm inline-flex items-center gap-2 border border-white/10 bg-linear-to-r from-cyan-700/60 to-sky-700/60 hover:from-cyan-600/80 hover:to-sky-600/80 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Repository
                    </a>
                  )}
                </div>

                {proj.longDescription && (
                  <div className="text-sm text-zinc-300 leading-relaxed space-y-3">
                    <h4 className="text-cyan-300 font-semibold text-base mb-1">Details</h4>
                    <p>{proj.longDescription}</p>
                  </div>
                )}

                <div className="mt-8 text-xs text-zinc-500">
                  {proj.year && <div>📅 Year: {proj.year}</div>}
                  {proj.duration && <div>⏱ Duration: {proj.duration}</div>}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
