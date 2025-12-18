import { useLocation } from "react-router-dom";

export default function StatusBar() {
  const { pathname } = useLocation();
  return (
    <div className="h-7 px-3 flex items-center justify-between text-[11px]
                    border-t border-zinc-800 bg-zinc-950/70">
      <div className="flex items-center gap-2 text-zinc-400">
        <span className="text-emerald-400">●</span>
        <span>Ready</span>
        <span className="text-zinc-600">|</span>
        <span className="font-mono">{pathname}</span>
      </div>

      <div className="flex items-center gap-3 text-zinc-500">
        <span className="text-sky-400">React</span>
        <span className="text-fuchsia-400">Tailwind</span>
        <span className="text-amber-400">Router</span>
      </div>
    </div>
  );
}
