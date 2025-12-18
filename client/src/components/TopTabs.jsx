export default function TopTabs({ tabs, activeId, onChange, onClose }) {
  return (
    <div className="h-10 flex items-stretch border-b border-zinc-800 bg-zinc-950/70">
      {tabs.map((t) => {
        const isActive = t.id === activeId;

        return (
          <div
            key={t.id}
            className={[
              "relative flex items-center gap-2 px-3 border-r border-zinc-800 cursor-pointer",
              "transition-colors",
              isActive ? "bg-zinc-900/70" : "hover:bg-zinc-900/40",
            ].join(" ")}
            onClick={() => onChange(t.id)}
          >
            {/* active glow bar */}
            {isActive && (
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400" />
            )}

            <span className="font-mono text-xs text-zinc-200">{t.label}</span>

            {/* KEEP X close feature */}
            <button
              className="text-zinc-500 hover:text-zinc-200"
              onClick={(e) => {
                e.stopPropagation();
                onClose(t.id);
              }}
              aria-label="Close tab"
              title="Close"
            >
              ×
            </button>
          </div>
        );
      })}

      <div className="ml-auto flex items-center px-3 text-xs text-zinc-500">
        Ctrl+K coming later
      </div>
    </div>
  );
}
