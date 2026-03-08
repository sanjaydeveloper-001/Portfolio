import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectOverlay from "./ProjectOverlay";
import { projects } from "../../utils/data";
import { LuLibrary } from "react-icons/lu";

export default function Projects() {
  const [open, setOpen] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef(null);

  const visibleProjects = expanded ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  const handleToggle = () => {
    setExpanded((s) => !s);
    if (!expanded && gridRef.current) {
      setTimeout(
        () =>
          gridRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          }),
        80
      );
    }
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-1 text-xl sm:text-2xl font-[Poppins] font-bold text-cyan-400">
          <LuLibrary /> Projects 
        </h2>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          ref={gridRef}
          layout
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
          transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
        >
          {visibleProjects.map((proj) => {
            const originalIndex = projects.indexOf(proj);
            return (
              <motion.div
                key={proj.id ?? originalIndex}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, delay: originalIndex * 0.04 }}
              >
                <ProjectCard
                  proj={proj}
                  index={originalIndex}
                  onOpen={(p) => setOpen(p)}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {hasMore && (
        <motion.div className="mt-8 flex justify-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <motion.button
            type="button"
            aria-expanded={expanded}
            aria-label={expanded ? "Show less projects" : "Show more projects"}
            onClick={handleToggle}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(34,211,238,0.18)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative cursor-pointer flex items-center justify-center px-6 py-2 rounded-2xl font-[Poppins] font-medium tracking-wide text-white text-sm backdrop-blur-md border border-white/10 bg-linear-to-r from-cyan-700/55 to-sky-700/55 hover:from-cyan-600/65 hover:to-sky-600/65 transition-all duration-300"
          >
            <span className="relative z-10">{expanded ? "Show Less" : `Show More ${projects.length - 3}+`}</span>
            <motion.span aria-hidden="true" className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/30 to-sky-500/30 opacity-0 blur-md" whileHover={{ opacity: 1 }} transition={{ duration: 0.25 }} />
          </motion.button>
        </motion.div>
      )}

      <ProjectOverlay proj={open} onClose={() => setOpen(null)} />
    </section>
  );
}
