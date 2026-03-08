import React, { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../../utils/data";
import { Send, Sparkles } from "lucide-react";
import emailjs from "emailjs-com";
import { FaPhone } from "react-icons/fa6";
/*
  **Security note (kept as-is for demo)**:
  Do NOT commit EmailJS keys to public repos. Use an API route or serverless function to send emails safely.
*/

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    setStatus("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const YOUR_SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE || "service_xxx";
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE || "template_xxx";
  const YOUR_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_KEY || "public_xxx"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    if(!formData.name.trim() || !formData.email.trim() || !formData.message.trim()){
      setStatus("Please fill all fields!");
      setLoading(false);
      return;
    }

    try {
      const result = await emailjs.send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: profile.email,
        },
        YOUR_PUBLIC_KEY
      );

      if (result && (result.text === "OK" || result.status === 200)) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Message sent, but response unclear.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="flex items-center gap-1 text-xl sm:text-2xl font-[Poppins] font-bold text-cyan-400 mb-6">
       <FaPhone /> Contact 
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e12]/70 backdrop-blur-md p-6 flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.16, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 text-center flex flex-col items-center"
          >
            <Sparkles size={56} className="text-cyan-400 mb-4" />
            <h3 className="text-white font-semibold text-lg">Let’s Collaborate!</h3>
            <p className="text-sm text-zinc-400 mt-1 max-w-xs">
              Share your ideas or say hi — I’d love to hear from you 💬
            </p>
          </motion.div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-[#0a0e12]/70 border border-white/10 rounded-2xl p-6 md:w-1/2 w-full backdrop-blur-md shadow-lg"
        >
          <label className="text-sm text-cyan-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-[#0f1419]/80 text-white text-sm px-4 py-2 rounded-md border border-white/10 focus:border-cyan-400 outline-none transition"
          />

          <label className="text-sm text-cyan-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-[#0f1419]/80 text-white text-sm px-4 py-2 rounded-md border border-white/10 focus:border-cyan-400 outline-none transition"
          />

          <label className="text-sm text-cyan-300">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="4"
            className="bg-[#0f1419]/80 text-white text-sm px-4 py-2 rounded-md border border-white/10 focus:border-cyan-400 outline-none resize-none transition"
          />

          <motion.button
            whileHover={!loading ? { scale: 1.03 } : {}}
            whileTap={!loading ? { scale: 0.97 } : {}}
            disabled={loading}
            type="submit"
            className={`cursor-pointer flex justify-center items-center gap-2 py-2 rounded-md border border-cyan-400 font-medium transition ${
              loading
                ? "bg-cyan-500/10 text-cyan-200 cursor-not-allowed"
                : "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30"
            }`}
            aria-label="Send message"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                aria-hidden="true"
              />
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </motion.button>

          {status && (
            <p className={`text-sm mt-2 ${status.includes("success") ? "text-green-400" : (status.includes("Please") ? "text-red-500" : "text-zinc-400")}`}>
              {status}
            </p>
          )}

          <p className="text-xs text-zinc-500 mt-3">
            The message will be sent to:{" "}
            <span className="text-cyan-400">{profile.email}</span>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
