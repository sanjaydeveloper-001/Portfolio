import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import image from "../assets/Profile.jpg";
import { profile } from "../utils/data";
import { IoLocation } from "react-icons/io5";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Profile({ className }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const res = await fetch(
          `${profile.cvLink}`
        );

        if (!res.ok) {
          throw new Error("Resume fetch failed");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load resume");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const handleWhatsApp = () => {
    navigator.clipboard
      .writeText(profile.phone)
      .then(() => toast.success("Phone Number Copied!"))
      .catch(() => toast.error("Failed to copy number"));

    window.open(`https://wa.me/${profile.phone}`, "_blank");
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`${className}
        bg-linear-to-br from-[#030406] via-[#05070a] to-[#020305]
        rounded-3xl p-10 sm:p-12 shadow-xl ring-1 ring-white/20
        backdrop-blur-md font-[Inter]
        flex flex-col items-center justify-center text-center
        space-y-6 xl:space-y-8`}
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />

      {/* Profile Image */}
      <div className="relative group">
        <img
          draggable={false}
          src={image}
          alt={`${profile.name} profile`}
          className="w-40 h-40 xl:w-48 xl:h-48 object-cover rounded-full
                     ring-2 ring-cyan-300/80 shadow-md
                     transition-transform duration-500 group-hover:scale-105"
        />

        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="absolute -bottom-3 right-0 inline-flex items-center px-3 py-1
                     rounded-full bg-black/80 text-cyan-300 text-xs
                     font-semibold font-[Poppins] ring-1 ring-cyan-600/30"
        >
          {profile.domain}
        </motion.span>
      </div>

      {/* Name & Summary */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-3xl xl:text-4xl font-[Poppins] font-semibold tracking-tight text-white">
          {profile.name}
        </h1>

        <p className="text-sm xl:text-base text-zinc-400 max-w-[44ch] leading-relaxed font-light">
          {profile.summary}
        </p>

        {profile.location && (
          <span className="text-sm text-zinc-400 flex justify-center items-center gap-2">
            <IoLocation className="w-4 h-4 text-cyan-300" />
            {profile.location}
          </span>
        )}
      </div>

      {/* Contacts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.22 }}
        className="flex flex-wrap justify-center gap-3 pt-2"
      >
        {profile.contact.map((pro, i) => (
          <motion.div
            whileTap={{ scale: 0.95 }}
            key={i}
            onClick={() =>
              i === 0
                ? handleWhatsApp()
                : window.open("https://" + pro.link, "_blank")
            }
            className="flex items-center gap-2 px-3 py-1.5 rounded-full
                       bg-[#0a0e12]/70 border border-[#0d1418]
                       text-sm text-zinc-100
                       hover:bg-[#0f1a1f]/90 hover:text-cyan-300
                       hover:border-cyan-500/30
                       transition-all cursor-pointer font-[Inter] font-medium"
          >
            <pro.icon className="w-4 h-4 text-cyan-300" />
            <span className="text-[11px] xl:text-[13px]">{pro.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Resume Button */}
      <motion.button
        disabled={loading}
        whileHover={!loading && { scale: 1.03 }}
        whileTap={!loading && { scale: 0.97 }}
        className={`flex items-center gap-3 px-4 py-2 xl:px-6 xl:py-3 rounded-2xl
                    bg-linear-to-r from-cyan-700/80 to-sky-700/70
                    text-white font-[Poppins] font-medium tracking-wide
                    transition-all ring-1 ring-white/10
                    cursor-pointer
                    ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
        aria-label={`Download CV ${loading ? "disabled" : "active"}`}
        onClick={() =>
          window.open(`${profile.cvLink}`, "_blank")
        }
      >
        <Download className="w-4 h-4" />
        <span>{loading ? "Loading Resume..." : "Resume"}</span>
      </motion.button>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.22 }}
        className="flex flex-wrap justify-center gap-3 pt-2"
      >
        {profile.social.map((pro, i) => (
          <motion.div
            whileTap={{ scale: 0.9 }}
            key={i}
            onClick={() => window.open("https://" + pro.link, "_blank")}
            className="flex items-center gap-2 px-2 py-1 xl:px-3 xl:py-1.5 rounded-full
                       bg-[#0a0e12]/70 border border-[#2374b7]
                       text-sm text-zinc-100
                       hover:bg-[#0f1a1f]/90 hover:border-cyan-500/30
                       transition-all cursor-pointer font-[Inter] font-medium"
          >
            <pro.icon className="w-5 h-5" style={{ color: pro.color }} />
          </motion.div>
        ))}
      </motion.div>
    </motion.aside>
  );
}
