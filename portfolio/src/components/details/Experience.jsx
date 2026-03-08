// src/components/details/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "../../utils/data";


/*
  Modified Experience component:
  - Accepts experience = [{ id, company, role, duration, description (string), type? }, ...]
  - Renders timeline-style cards; description is shown as a single line/paragraph.
*/

export default function Experience() {
  return (
    <section>
      <h2 className="flex items-center gap-1 text-xl sm:text-2xl font-[Poppins] font-bold text-cyan-400 mb-6">
        <Briefcase/> Experience 
      </h2>

      <div className="relative pl-6 sm:pl-10">
        {/* vertical line for larger screens */}
        <div className="hidden sm:block absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-600/40 to-transparent rounded" />

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.article
              key={exp.id ?? i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group relative sm:flex sm:items-start gap-6"
            >
              {/* timeline dot (visible on sm+) */}
              <div className="absolute sm:relative left-0 top-1 sm:top-0 sm:left-0 w-8 h-8 sm:mr-4 flex items-center justify-center">
                <div className="hidden sm:flex w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-600/10" />
              </div>

              {/* left: icon + duration
              <div className="shrink-0 flex items-center gap-3 sm:flex-col sm:items-center">
                {/* <div
                  className="w-14 h-14 rounded-xl bg-[#071018] border border-white/6 flex items-center justify-center overflow-hidden"
                  title={exp.company}
                >
                  <Briefcase className="w-6 h-6 text-cyan-300" />
                </div> 

                
              </div> */}

              {/* right: content card */}
              <div
                className="mt-2 sm:mt-0 flex-1 p-4 rounded-xl border border-white/8 bg-[#0a0e12]/65 hover:bg-[#0f1419]/80 transition"
                aria-labelledby={`exp-${i}-role`}
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  {/* left side — role, type & company */}
                  <div>
                    <h3
                      id={`exp-${i}-role`}
                      className="text-lg font-semibold text-white flex items-center flex-wrap gap-2"
                    >
                      {exp.role}
                      {exp.type && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#071018] border border-white/10 text-cyan-300">
                          {exp.type}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">{exp.company}</p>
                  </div>

                  {/* right side — duration */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 bg-[#071018]/70 border border-white/10 rounded-full px-3 py-1 self-start">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-zinc-300">{exp.duration}</span>
                  </div>
                </div>

                {/* description */}
                {exp.description && (
                  <motion.p
                    className="mt-3 text-sm text-zinc-300 leading-relaxed"
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.36 }}
                    viewport={{ once: true }}
                  >
                    {exp.description}
                  </motion.p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
