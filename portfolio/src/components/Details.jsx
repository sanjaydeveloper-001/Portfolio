import React from "react";
import { motion } from "framer-motion";
import Education from "./details/Education";
import Experience from "./details/Experience";
import Projects from "./details/Projects";
import Skills from "./details/Skills";
import Interests from "./details/Interests";
import Certifications from "./details/Certifications";
import Contact from "./details/Contact";
import Stats from "./details/Stats";
import Line from "./Line";

export default function Details({ className }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${className} custom-scrollbar h-max md:h-screen-2 md:overflow-y-auto rounded-2xl
        bg-linear-to-br from-[#030406] via-[#05070a] to-[#020305]
        text-white ring-1 ring-white/20 backdrop-blur-md p-6 sm:p-10`}
    >
      <div className="space-y-10">
        <Projects />
        <Line />
        <Experience />
        <Line />
        <Skills />
        <Line />
        <Education />
        <Line />
        <Certifications />
        <Line />
        <Interests />
        <Line />
        <Contact />
        <Line />
        <Stats />
      </div>
    </motion.section>
  );
}
