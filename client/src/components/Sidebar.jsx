export default function Sidebar({ files, activeId, onOpenFile }) {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950/60">
      <div className="px-3 py-3 text-xs tracking-wide text-zinc-400 border-b border-zinc-800">
        EXPLORER
      </div>

      <div className="p-2">
        <div className="text-[11px] text-zinc-500 px-2 py-2">PORTFOLIO</div>

        <ul className="space-y-1">
          {files.map((f) => {
            const isActive = f.id === activeId;
            return (
              <li key={f.id}>
                <button
                  onClick={() => onOpenFile(f)}
                  className={[
                    "w-full flex items-center gap-2 px-2 py-2 rounded text-sm",
                    "hover:bg-zinc-900",
                    isActive ? "bg-zinc-900 text-zinc-100" : "text-zinc-300",
                  ].join(" ")}
                >
                  <span className="text-zinc-500">▸</span>
                  <span className="font-mono text-xs">{f.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

      </div>
    </aside>
  );
}
