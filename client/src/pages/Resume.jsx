export default function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
      <p className="font-mono text-sm text-zinc-400">{"# resume.md"}</p>
      <div className="mt-4 prose prose-invert max-w-none">
        <h2>Resume</h2>
        <ul>
          <li>Day 7: add “Download PDF”</li>
          <li>Day 5: lock admin edits behind login</li>
          <li>Day 4: load projects from DB</li>
        </ul>
        <p>
          For now this is a placeholder. Tomorrow we’ll add routing and make tabs reflect URLs.
        </p>
      </div>
    </div>
  );
}
