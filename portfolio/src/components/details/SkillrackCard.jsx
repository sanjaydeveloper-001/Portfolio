// small fix: ensure we guard fetch and show fallback text earlier
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function SkillrackCard({ resumeUrl }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!resumeUrl) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const q = encodeURIComponent(resumeUrl);
        const res = await fetch(`/api/skillrack?url=${q}`);
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        if (json.ok) setData(json.data);
        else console.warn("skillrack API error", json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [resumeUrl]);

  if (!resumeUrl) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-4 rounded-xl border border-white/8 bg-linear-to-b from-[#041018] to-[#03090d] shadow-md w-full max-w-md">
      {loading ? (
        <div className="text-zinc-400">Loading...</div>
      ) : data ? (
        <div className="flex gap-4">
          <div className="w-20 h-20 rounded-lg bg-[#021018] flex items-center justify-center overflow-hidden">
            {data.image ? <img src={data.image} alt={data.name || "profile"} className="object-cover w-full h-full" /> : <div className="text-white text-lg">{(data.name || "?").charAt(0)}</div>}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-white font-semibold">{data.name || "Skillrack User"}</div>
                <div className="text-xs text-zinc-400">{data.college || ""}</div>
              </div>
              <div className="text-sm text-zinc-300">{data.rank || ""}</div>
            </div>
            <div className="mt-3 space-y-2">
              {data.score && <div className="text-sm text-zinc-300"><strong className="text-white">{data.score}</strong> total score</div>}
              {data.solved && <div className="text-sm text-zinc-300">Problems solved: <strong className="text-white">{data.solved}</strong></div>}
            </div>
            <div className="mt-3">
              <a href={data.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-600/80 text-white text-xs">
                <ExternalLink className="w-3 h-3" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-zinc-400">No data found. Check resume URL or server logs.</div>
      )}
    </motion.div>
  );
}
