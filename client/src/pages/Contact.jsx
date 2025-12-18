export default function Contact() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6">
        <p className="font-mono text-sm text-zinc-400">{"// contact.tsx"}</p>
        <h2 className="mt-2 text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-zinc-300">
          Add your real links later. Today we just want clean UI + routing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <a className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 hover:bg-zinc-900/40" href="#">
          <div className="text-sm text-zinc-400">Email</div>
          <div className="mt-1 font-mono text-sm text-zinc-200">rshivanna@binghamton.edu</div>
        </a>

        <a className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 hover:bg-zinc-900/40" href="#">
          <div className="text-sm text-zinc-400">GitHub</div>
          <div className="mt-1 font-mono text-sm text-zinc-200">github.com/your-handle</div>
        </a>
      </div>
    </div>
  );
}
