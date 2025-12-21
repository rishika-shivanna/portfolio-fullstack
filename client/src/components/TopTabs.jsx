import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionChips() {
  const chips = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="hidden lg:flex items-center gap-2 ml-auto">
      {chips.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => scrollTo(c.id)}
          className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-white transition"
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

export default function TopTabs({ tabs, activeId, onChange, onClose }) {
  const location = useLocation();

  // show chips only on Home (where sections exist)
  const showChips = useMemo(() => {
    return location.pathname === "/";
  }, [location.pathname]);

  return (
    <div className="h-11 flex items-center border-b border-zinc-200 bg-white/70 backdrop-blur px-2 gap-1 overflow-x-auto">
      {tabs.map((t) => {
        const active = t.id === activeId;

        return (
          <div
            key={t.id}
            className={cn(
              "group flex items-center gap-2 px-3 py-2 rounded-xl border text-xs whitespace-nowrap transition",
              active
                ? "border-zinc-200 bg-white text-zinc-900 shadow-sm"
                : "border-transparent text-zinc-600 hover:text-zinc-900 hover:bg-white/60"
            )}
          >
            <button
              className="font-mono"
              onClick={() => onChange(t.id)}
              type="button"
            >
              {t.label}
            </button>

            <button
              onClick={() => onClose(t.id)}
              type="button"
              className={cn(
                "rounded-md p-1 hover:bg-zinc-100 transition",
                active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}
              aria-label={`Close ${t.label}`}
              title="Close"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        );
      })}

      {showChips ? <SectionChips /> : null}
    </div>
  );
}
