import { useMemo } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Skills marquee (single row)
 * - Uses SVG icons from /public/skills/*.svg
 * - Smooth, infinite loop
 */
export default function SkillsMarquee() {
  const skills = useMemo(
    () => [
      { name: "AWS", icon: "/skills/aws.svg" },
      { name: "CSS", icon: "/skills/css.svg" },
      { name: "MS Office", icon: "/skills/microsoftoffice.svg" },
      { name: "C", icon: "/skills/c.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "React", icon: "/skills/react.svg" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "Git", icon: "/skills/git.svg" },
      { name: "firebase", icon: "/skills/firebase.svg" },
    ],
    []
  );

  // duplicate once for seamless loop
  const row = [...skills, ...skills];

  return (
    <section className="w-full">
      {/* top label line like screenshot */}
      <div className="relative mb-8">
        <div className="h-px w-full bg-zinc-300/60" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="rounded-xl bg-zinc-900 px-5 py-2 text-sm font-semibold text-white shadow-sm">
            Skills
          </span>
        </div>
      </div>

      {/* SINGLE marquee row */}
      <div className="relative overflow-hidden">
        

        <div className="marquee flex w-max gap-8 py-2">
          {row.map((s, idx) => (
            <SkillTile key={`${s.name}-${idx}`} name={s.name} icon={s.icon} />
          ))}
        </div>
      </div>

      <style>{`
        .marquee {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}

function SkillTile({ name, icon }) {
  return (
    <div
      className={cn(
        "min-w-[220px] md:min-w-[240px]",
        "rounded-2xl bg-[#2F2F2F] px-6 py-6",
        "shadow-[0_12px_40px_-28px_rgba(0,0,0,0.55)]",
        "border border-white/10",
        "flex flex-col items-center justify-center gap-3",
        "transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_-34px_rgba(0,0,0,0.65)]"
      )}
    >
      <img
        src={icon}
        alt={name}
        className="h-12 w-12 object-contain"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="text-white text-lg font-medium">{name}</div>
    </div>
  );
}
