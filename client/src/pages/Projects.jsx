import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Projects() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`${API}/api/projects`);
        const json = await res.json();
        if (!alive) return;
        setItems(json.data || []);
      } catch (e) {
        console.error(e);
        if (alive) setItems([]);
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
        <p className="font-mono text-sm text-zinc-400">{"// projects.tsx"}</p>
        <h2 className="mt-2 text-2xl font-semibold">Projects</h2>
        <p className="mt-2 text-zinc-300">
          Loaded from backend: <span className="font-mono text-zinc-200">GET /api/projects</span>
        </p>
      </div>

      {loading ? (
        <div className="text-zinc-400 font-mono text-sm">Loading projects...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((p) => (
            <div key={p.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
              <div className="text-lg font-medium">{p.title}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(p.tags || []).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-zinc-800 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-4 text-sm text-zinc-400 list-disc pl-5 space-y-1">
                {(p.highlights || []).slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
