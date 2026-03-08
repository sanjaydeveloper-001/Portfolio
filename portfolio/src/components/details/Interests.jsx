// src/components/details/Interests.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { interests } from "../../utils/data";

export default function Interests() {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-1 text-xl sm:text-2xl font-[Poppins] font-bold text-cyan-400">
          <Sparkles /> 
          Interests
        </h2>
        <p className="text-xs text-zinc-500 hidden sm:block">
          Things I love exploring & creating
        </p>
      </div>

      {/* Animated Chips Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {interests.map((interest, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }} // ✅ only initial animation
            viewport={{ once: true }}
            className="w-max relative flex items-center justify-center px-3 py-2 rounded-xl
             text-sm font-medium text-white cursor-default
             bg-linear-to-br from-[#06141c] to-[#0b1a22]
             border border-white/10 backdrop-blur-sm
             overflow-hidden"
          >
            {/* Subtle static background glow */}
            <span
              className="absolute inset-0 bg-linear-to-r from-cyan-500/5 via-transparent to-sky-500/5
               blur-md opacity-70"
            />
            {/* Text */}
            <span className="relative z-10 tracking-wide">{interest}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
