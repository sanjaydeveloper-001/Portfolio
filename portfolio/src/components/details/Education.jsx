import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar } from "lucide-react";
import { education } from "../../utils/data";
import { GiGraduateCap } from "react-icons/gi";

export default function Education() {
  if (!Array.isArray(education) || education.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="education-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="education-heading" className="flex items-center gap-1 text-xl sm:text-2xl font-[Poppins] font-bold text-cyan-400">
          <GiGraduateCap className="text-2xl sm:text-3xl" /> Education 
        </h2>
        <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
          <BookOpen className="w-4 h-4 text-cyan-300" />
          <span>Academic background & highlights</span>
        </div>
      </div>

      <div className="relative">
        {/* Vertical timeline line for md+ screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 bottom-0 w-px bg-linear-to-b from-transparent via-white/6 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => {
            // alternate sides by index on md+ screens
            const side = i % 2 === 0 ? "left" : "right";

            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="relative md:px-6"
                role="article"
                aria-labelledby={`edu-${i}-title`}
              >
                {/* timeline connector dot */}
                <span
                  className={`hidden md:inline-block absolute top-6 ${
                    side === "left" ? "-right-2.5" : "-left-2.5"
                  } w-5 h-5 rounded-full bg-[#031018] border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.06)]`}
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className={`p-4 rounded-2xl border border-white/6 bg-linear-to-b from-[#061018] to-[#041018] shadow-sm
                              hover:shadow-[0_10px_30px_rgba(3,197,239,0.06)] hover:-translate-y-1 transition-transform duration-200`}
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-[#021018] border border-white/6 flex items-center justify-center">
                        <span className="text-cyan-300">
                          <Calendar className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 id={`edu-${i}-title`} className="text-lg font-semibold text-white truncate">
                        {edu.course}
                      </h3>
                      <p className="text-sm text-zinc-400 truncate">{edu.institution}</p>

                      <div className="mt-3 flex items-center gap-3 text-xs text-zinc-400">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#031018] border border-white/6">
                          <Calendar className="w-3 h-3 text-zinc-300" />
                          <span>{edu.duration}</span>
                        </span>

                        {edu.cgpa || edu.percentage ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#031018] border border-white/6">
                            <span className="text-zinc-300 font-semibold">
                              {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Score: ${edu.percentage}`}
                            </span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* optional details: bullets or achievements */}
                  {edu.details && Array.isArray(edu.details) && edu.details.length > 0 ? (
                    <ul className="mt-3 ml-1 text-sm text-zinc-300 space-y-1">
                      {edu.details.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-0.5 inline-block w-2 h-2 rounded-full bg-cyan-400" />
                          <span className="leading-tight">{d}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
