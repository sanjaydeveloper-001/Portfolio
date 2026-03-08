// only the file header changed slightly for clearer card sizing & contrast — rest kept same
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "../../utils/data";
import { GrCertificate } from "react-icons/gr";

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? certifications : certifications.slice(0, 3);
  const hasMore = certifications.length > 3;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-1 text-xl sm:text-2xl font-[Poppins] font-bold text-cyan-400"> <GrCertificate/> Certifications</h2>
        <p className="text-xs text-zinc-500 hidden sm:block">Verified courses & achievements</p>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence initial={false}>
          {visible.map((cert, i) => (
            <motion.article
              key={cert.id ?? cert.name ?? i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              layout
              className="relative group rounded-2xl overflow-hidden h-56 md:h-60 border border-white/8 shadow-md"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: cert.image
                    ? `linear-gradient(to bottom, rgba(3,10,15,0.45), rgba(3,10,15,0.75)), url("${cert.image}")`
                    : "linear-gradient(135deg,#071018,#061018)",
                }}
                aria-hidden="true"
              />

              <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end bg-linear-to-t from-[#020b10]/80 via-[#020b10]/20 to-transparent">
                <h3 className="text-white text-base font-semibold truncate">{cert.name}</h3>
                {cert.issuer && <p className="text-sm text-zinc-400 mt-1">{cert.issuer}</p>}

                {cert.link ? (
                  <div className="mt-3">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${cert.name}`}
                      className="inline-flex items-center gap-2 text-xs font-medium text-white/90 px-3 py-1.5 rounded-lg bg-cyan-600/80 hover:bg-cyan-500 transition border border-white/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">View</span>
                    </a>
                  </div>
                ) : (
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 px-3 py-1.5 rounded-lg bg-black/30 border border-white/6">
                      No link
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <motion.button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((s) => !s)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative flex items-center gap-3 px-4 py-2 rounded-2xl font-[Poppins] font-medium tracking-wide text-white text-sm backdrop-blur-md border border-white/10 bg-linear-to-r from-cyan-700/55 to-sky-700/55 hover:from-cyan-600/65 hover:to-sky-600/65 transition-all duration-200 cursor-pointer"
          >
            <span>{expanded ? "Show less" : `Show more ${certifications.length - 3}+`}</span>
          </motion.button>
        </div>
      )}
    </section>
  );
}
