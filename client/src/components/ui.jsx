export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function AccentCard({ children, accent = "cyan", className = "" }) {
  const accents = {
    cyan: {
      top: "from-cyan-500 via-sky-500 to-transparent",
      ring: "hover:shadow-[0_18px_70px_-40px_rgba(34,211,238,0.45)]",
      chip: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    violet: {
      top: "from-violet-500 via-fuchsia-500 to-transparent",
      ring: "hover:shadow-[0_18px_70px_-40px_rgba(168,85,247,0.45)]",
      chip: "bg-violet-50 text-violet-700 border-violet-200",
    },
    emerald: {
      top: "from-emerald-500 via-lime-500 to-transparent",
      ring: "hover:shadow-[0_18px_70px_-40px_rgba(34,197,94,0.40)]",
      chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    amber: {
      top: "from-amber-500 via-orange-500 to-transparent",
      ring: "hover:shadow-[0_18px_70px_-40px_rgba(245,158,11,0.35)]",
      chip: "bg-amber-50 text-amber-800 border-amber-200",
    },
    rose: {
      top: "from-rose-500 via-pink-500 to-transparent",
      ring: "hover:shadow-[0_18px_70px_-40px_rgba(244,63,94,0.35)]",
      chip: "bg-rose-50 text-rose-800 border-rose-200",
    },
  };

  const a = accents[accent] ?? accents.cyan;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white",
        "shadow-sm transition",
        a.ring,
        className
      )}
    >
      <div className={cn("h-[3px] w-full bg-gradient-to-r", a.top)} />
      <div className="p-6 md:p-7">{children}</div>
    </div>
  );
}

export function Chip({ children, tone = "slate" }) {
  const tones = {
    slate: "bg-slate-50 text-slate-700 border-slate-200",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
    violet: "bg-violet-50 text-violet-700 border-violet-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
    rose: "bg-rose-50 text-rose-800 border-rose-200",
  };

  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs", tones[tone] || tones.slate)}>
      {children}
    </span>
  );
}

export function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-white/75 backdrop-blur shadow-sm">
        <div className="px-6 md:px-8 pt-6 md:pt-8">
          <p className="font-mono text-xs text-slate-400">/{id}</p>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
          {subtitle ? <p className="mt-2 text-sm text-slate-600">{subtitle}</p> : null}
        </div>
        <div className="px-6 md:px-8 pb-6 md:pb-8 mt-6">{children}</div>
      </div>
    </section>
  );
}
