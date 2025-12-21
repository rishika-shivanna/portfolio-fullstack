import { useMemo } from "react";
import Lottie from "lottie-react";
import studyAnim from "../assets/lottie/study.json";
<Lottie animationData={studyAnim} loop />

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EducationBlock({ item, accent = "emerald" }) {
  const accentMap = {
    emerald: "text-emerald-400",
    cyan: "text-cyan-400",
    indigo: "text-indigo-400",
    pink: "text-pink-400",
  };

  return (
    <div
      className={cn(
        "w-full rounded-2xl overflow-hidden",
        "shadow-[0_14px_50px_-30px_rgba(0,0,0,0.55)]",
        "bg-gradient-to-br from-zinc-900 via-zinc-900 to-[#2b1e5a]"
      )}
    >
      {/* top sheen */}
      <div className="h-[2px] w-full bg-gradient-to-r from-pink-500 via-violet-500 to-transparent" />

      <div className="p-4 md:p-5">
        {/* YEAR */}
        <div className="text-center text-base md:text-lg font-bold text-white tracking-wide">
          {item.years}
        </div>

        <div className="mt-4 grid grid-cols-[1fr_110px] gap-4 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-2">
            <div
              className={cn(
                "text-lg md:text-xl font-extrabold uppercase tracking-wide",
                accentMap[accent] || "text-emerald-400"
              )}
            >
              {item.level} DEGREE
            </div>

            <div className="text-sm md:text-base text-white font-semibold leading-snug">
              {item.school}
            </div>

            <div className="text-white/60 text-xs md:text-sm">
              {item.location}
            </div>

            

            {item.note ? (
              <div className="text-white/70 text-xs md:text-sm leading-relaxed max-w-[48ch]">
                {item.note}
              </div>
            ) : null}
          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-end">
            <div className="w-[110px] rounded-xl bg-white p-2 shadow-sm border border-white/10">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={`${item.school} logo`}
                  className="w-full h-[70px] object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="h-[70px] grid place-items-center text-xs font-mono text-zinc-400">
                  logo
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Education() {
  const degrees = useMemo(
    () => [
      {
        id: 1,
        years: "Jan 2025 — Dec 2026",
        level: "MASTERS",
        school: "SUNY Binghamton University",
        location: "Binghamton, NY, United States",
        
        note: "Focused on systems, data, and building production-quality software.",
        logo: "/logos/binghamton.jpg",
      },
      {
        id: 2,
        years: "2020 — 2024",
        level: "BACHELORS",
        school: "Global Academy of Technology",
        location: "Bangalore, India",
        
        note: "Strong fundamentals in software engineering and core CS subjects.",
        logo: "/logos/gat.jpeg",
      },
    ],
    []
  );

  return (
    // ✅ no “card background” wrapper here — it sits clean on your page background
    <section className="w-full">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: LOTTIE */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[420px]">
            <Lottie animationData={studyAnim} loop />

          </div>
        </div>

        {/* RIGHT: BLOCKS */}
        <div className="space-y-6">
          <EducationBlock item={degrees[0]} accent="emerald" />
          <EducationBlock item={degrees[1]} accent="emerald" />
        </div>
      </div>
    </section>
  );
}
