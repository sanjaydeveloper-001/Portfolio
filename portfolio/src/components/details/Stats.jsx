import { IoCodeSlashOutline } from "react-icons/io5";

export default function Stats({
  leetUsername = "Sanjay_dev_001",
  githubUsername = "sanjaydeveloper-001",
  skillrackUsername = "23it1249@stjosephstech",
  // If you already have a hosted Skillrack badge image, put it here:
  skillrackImageUrl = undefined,
}) {
  // Default pattern — replace with your real badge URL if you host one.
  const defaultSkillrackImage = skillrackImageUrl
    ? skillrackImageUrl
    : `https://skillrack.com/users/${skillrackUsername}/badge.png`; // <-- replace if needed

  return (
    <section>
      <h2 className="flex items-center gap-1 text-xl sm:text-2xl font-[Poppins] font-bold text-cyan-400 mb-4">
         <IoCodeSlashOutline /> Coding Stats
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {/* 🟡 LeetCode Stats Card */}
        <div
          className="w-full sm:w-[380px] rounded-xl border border-white/10 bg-[#0a0e12]/70 p-2
                     hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
        >
          <img
            src={`https://leetcard.jacoblin.cool/${leetUsername}?theme=dark&font=Sen&ext=heatmap`}
            alt="LeetCode Stats"
            className="rounded-lg w-full"
          />
        </div>

        {/* ⚫ GitHub Stats Card */}
        <div
          className="w-full sm:w-[380px] rounded-xl border border-white/10 bg-[#0a0e12]/70 p-2
                     hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&theme=react&hide_border=true&show_icons=true&count_private=true`}
            alt="GitHub Stats"
            className="rounded-lg w-full"
          />
        </div>

        {/* 🔥 GitHub Streak Stats */}
        <div
          className="w-full sm:w-[380px] rounded-xl border border-white/10 bg-[#0a0e12]/70 p-2
                     hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=react&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`}
            alt="GitHub Streak"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}