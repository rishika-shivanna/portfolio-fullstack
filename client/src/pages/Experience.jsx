export default function Experience() {
  const items = [
    {
      role: "Graduate Student — IST",
      org: "Binghamton University",
      points: ["Data management, systems, and full-stack projects", "Building a production-style portfolio"],
    },
    {
      role: "Projects",
      org: "Full-Stack + ML",
      points: ["Linux chat service (sockets + threads)", "Yelp ML prediction", "OCR app + dashboards"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6">
        <p className="font-mono text-sm text-zinc-400">{"// experience.tsx"}</p>
        <h2 className="mt-2 text-2xl font-semibold">Experience</h2>
        <p className="mt-2 text-zinc-300">
          Timeline style today (dummy). Later we’ll hydrate this from your resume + DB.
        </p>
      </div>

      <div className="space-y-4">
        {items.map((x) => (
          <div key={x.role} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">{x.role}</div>
              <div className="text-sm text-zinc-400">{x.org}</div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-zinc-300 space-y-1">
              {x.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
