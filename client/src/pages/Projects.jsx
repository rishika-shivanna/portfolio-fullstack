import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/projects";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Lock/unlock body scroll when modal opens */
function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

/** Minimal focus trap (keeps tab inside modal) */
function useEscapeToClose(open, onClose) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
}

/** Modal */
function ProjectModal({ project, open, onClose }) {
  useLockBodyScroll(open);
  useEscapeToClose(open, onClose);

  if (!open || !project) return null;

  const safeGithub = project.links?.github || "#";
  const safeLive = project.links?.live || "#";

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        // click outside closes
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* modal card */}
      <div className="relative w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_40px_120px_rgba(0,0,0,0.75)] overflow-hidden">
        {/* top glow */}
        <div className="pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />

        {/* header */}
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-zinc-800 bg-black/20">
          <div className="min-w-0">
            <p className="font-mono text-xs text-zinc-500">
              {"// project.preview.tsx"}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-zinc-100 truncate">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              {project.description ||
                "Preview mode — details rendered from your projects data."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 hover:border-zinc-700 transition"
            aria-label="Close modal"
          >
            Esc
          </button>
        </div>

        {/* body */}
        <div className="px-6 py-6 space-y-5">
          {/* tags */}
          <div className="flex flex-wrap gap-2">
            {(project.tags || []).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full border border-zinc-800 bg-black/30 text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* highlights */}
          <div className="rounded-2xl border border-zinc-800 bg-black/30 overflow-hidden">
            <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="text-sm font-medium text-zinc-100">
                Highlights
              </div>
              <div className="text-xs font-mono text-zinc-500">
                {`items: ${Math.min((project.highlights || []).length, 6)}`}
              </div>
            </div>

            <ul className="p-4 text-sm text-zinc-300/90 list-disc pl-5 space-y-2">
              {(project.highlights || []).slice(0, 6).map((h) => (
                <li key={h} className="marker:text-zinc-500">
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={safeGithub}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-cyan-400/25 bg-cyan-400/10 text-cyan-200 hover:border-cyan-400/45 hover:bg-cyan-400/15 transition"
            >
              <span className="font-mono text-xs">{`{}`}</span>
              GitHub
            </a>
            <a
              href={safeLive}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-200 hover:border-fuchsia-400/45 hover:bg-fuchsia-400/15 transition"
            >
              <span className="font-mono text-xs">↗</span>
              Live
            </a>
          </div>
        </div>

        {/* footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-black/20 text-xs text-zinc-400 flex items-center justify-between">
          <span className="font-mono">{`project.id = ${project.id}`}</span>
          {project.featured ? (
            <span className="text-[11px] font-mono px-2 py-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
              featured
            </span>
          ) : (
            <span className="text-zinc-500">preview</span>
          )}
        </div>
      </div>
    </div>
  );
}

/** Single carousel card with magnetic hover */
function ProjectCard({ p, onOpen }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();

    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;
    setSpot({ x: px, y: py });

    // magnetic pull (small translation)
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const mx = Math.max(-16, Math.min(16, dx / 12));
    const my = Math.max(-14, Math.min(14, dy / 12));
    setT({ x: mx, y: my });
  };

  const onLeave = () => {
    setHover(false);
    setT({ x: 0, y: 0 });
    setSpot({ x: 50, y: 50 });
  };

  return (
    <button
      ref={ref}
      type="button"
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      onClick={() => onOpen(p)}
      className={cn(
        "relative text-left w-[320px] sm:w-[360px] md:w-[420px]",
        "snap-center shrink-0",
        "rounded-2xl border border-zinc-800 bg-zinc-950/55 backdrop-blur-xl",
        "shadow-[0_20px_90px_rgba(0,0,0,0.55)]",
        "transition-transform duration-200 will-change-transform",
        "hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
      )}
      style={{
        transform: `translate3d(${t.x}px, ${t.y}px, 0)`,
      }}
    >
      {/* animated border glow */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300",
          hover ? "opacity-100" : ""
        )}
        style={{
          background: `radial-gradient(650px circle at ${spot.x}% ${spot.y}%, rgba(34,211,238,0.16), rgba(168,85,247,0.12), transparent 55%)`,
        }}
      />

      {/* top code bar */}
      <div className="relative px-5 py-4 border-b border-zinc-800 bg-black/20 rounded-t-2xl flex items-center gap-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
          <span className="h-3 w-3 rounded-full bg-green-500/90" />
        </div>
        <div className="text-xs font-mono text-zinc-400 truncate">
          {`project.${String(p.id).padStart(2, "0")}.tsx`}
        </div>

        <div className="ml-auto flex items-center gap-2">
          {p.featured && (
            <span className="text-[11px] font-mono px-2 py-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
              featured
            </span>
          )}
          <span className="text-[11px] font-mono px-2 py-1 rounded-full border border-zinc-800 bg-black/30 text-zinc-300">
            click
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative p-5">
        <div className="text-lg font-semibold text-zinc-100">{p.title}</div>

        <div className="mt-3 flex flex-wrap gap-2">
          {(p.tags || []).slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-zinc-800 bg-black/30 text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mt-4 text-sm text-zinc-300/80 list-disc pl-5 space-y-1">
          {(p.highlights || []).slice(0, 3).map((h) => (
            <li key={h} className="marker:text-zinc-500">
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3 text-sm">
          <span className="text-cyan-300">Open preview</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">snap scroll</span>
        </div>
      </div>

      {/* bottom glow blobs */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
    </button>
  );
}

export default function Projects() {
  const list = useMemo(() => projects || [], []);
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(null);

  // optional arrow key scrolling while focusing the carousel area
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onKey = (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      el.scrollBy({ left: dir * 420, behavior: "smooth" });
    };

    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header (keep your style) */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />
        <p className="font-mono text-sm text-zinc-400">{"// projects.tsx"}</p>
        <h2 className="mt-2 text-2xl font-semibold text-zinc-100">Projects</h2>
        <p className="mt-2 text-zinc-300">
          Snap carousel + magnetic hover. Click a card for a full preview modal.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* subtle edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/40 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/40 to-transparent z-10" />

        <div
          ref={scrollerRef}
          tabIndex={0}
          className={cn(
            "flex gap-4 overflow-x-auto pb-3 pt-1",
            "snap-x snap-mandatory scroll-smooth",
            "focus:outline-none",
            "[scrollbar-width:thin]",
            "[-webkit-overflow-scrolling:touch]"
          )}
        >
          {/* nice spacing at ends */}
          <div className="shrink-0 w-2 sm:w-6" />
          {list.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} onOpen={setActive} />
          ))}
          <div className="shrink-0 w-2 sm:w-6" />
        </div>

        {/* hint text */}
        <div className="mt-2 text-xs text-zinc-400 flex items-center gap-2">
          <span className="font-mono px-2 py-1 rounded border border-zinc-800 bg-black/30">
            tip
          </span>
          Scroll horizontally (trackpad/mousewheel) • Use ← → when focused
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={active}
        open={!!active}
        onClose={() => setActive(null)}
      />
    </div>
  );
}
