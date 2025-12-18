export default function Home() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
        <p className="font-mono text-sm text-zinc-400">{"// home.tsx"}</p>
        <h1 className="mt-2 text-3xl font-semibold">Rishika Shivanna</h1>
        <p className="mt-2 text-zinc-300">
          Full-Stack + AI track. This portfolio will become dynamic with a real backend + admin dashboard.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "Tailwind", "Node", "Express", "MongoDB"].map((x) => (
            <span key={x} className="text-xs px-3 py-1 rounded-full border border-zinc-800 text-zinc-300">
              {x}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
        <p className="font-mono text-sm text-zinc-400">{"// quick-stats.json"}</p>
        <pre className="mt-3 text-xs text-zinc-300 overflow-auto">
{`{
  "focus": ["Full-Stack", "Systems", "ML"],
  "today_goal": "VS Code UI layout",
  "next": "Routing + animations"
}`}
        </pre>
      </div>
    </div>
  );
}
