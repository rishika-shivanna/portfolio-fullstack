import { useState } from "react";

export default function Contact() {
  const email = "rshivanna@binghamton.edu";
  const github = "https://github.com/rishika-shivanna";
  const linkedin = "https://www.linkedin.com/in/YOUR-LINK";

  // ✅ Drive resume link (opens Google Drive preview UI)
  const resumeDriveView =
    "https://drive.google.com/file/d/1d60ctfGQpKWvjoGiE2UQb4FsG1B5jdSR/view?usp=sharing";

  const subject = encodeURIComponent("Hello Rishika — Portfolio");
  const body = encodeURIComponent(
    "Hi Rishika,\n\nI saw your portfolio and wanted to connect.\n\nThanks!"
  );
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  const [copied, setCopied] = useState("");

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(""), 1200);
    } catch {
      window.prompt("Copy this:", text);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
        <p className="font-mono text-sm text-zinc-400">{"// contact.tsx"}</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Contact</h2>
        <p className="mt-2 text-zinc-300">
          Quick ways to reach me. Email is the fastest.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* EMAIL */}
        <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 overflow-hidden transition hover:-translate-y-1">
          <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/15 via-fuchsia-500/10 to-transparent blur-2xl" />

          <div className="relative">
            <div className="text-sm font-mono text-zinc-400">email</div>

            <div className="mt-2 text-[15px] font-medium text-white break-all">
              {email}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={mailto}
                className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-400/20 transition"
              >
                Open Email →
              </a>

              <button
                type="button"
                onClick={() => copy(email, "email")}
                className="rounded-xl border border-zinc-700 bg-black/30 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 transition"
              >
                ⧉ Copy
              </button>

              {copied === "email" ? (
                <span className="self-center text-xs text-emerald-300">
                  Copied!
                </span>
              ) : null}
            </div>

            <div className="mt-4">
              <a
                href={mailto}
                className="inline-block text-sm text-zinc-300 hover:text-white transition"
              >
                <span className="relative">
                  Hire me via email
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 group-hover:w-full transition-all duration-500" />
                </span>
                {"  "}↗
              </a>
            </div>
          </div>
        </div>

        {/* GITHUB */}
        <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 overflow-hidden transition hover:-translate-y-1">
          <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/10 to-transparent blur-2xl" />

          <div className="relative">
            <div className="text-sm font-mono text-zinc-400">github</div>

            <div className="mt-2 text-[15px] font-medium text-white truncate">
              {github}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-200 hover:bg-fuchsia-400/20 transition"
              >
                ↗ Open GitHub
              </a>

              <button
                type="button"
                onClick={() => copy(github, "github")}
                className="rounded-xl border border-zinc-700 bg-black/30 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 transition"
              >
                ⧉ Copy
              </button>

              {copied === "github" ? (
                <span className="self-center text-xs text-emerald-300">
                  Copied!
                </span>
              ) : null}
            </div>

            <div className="mt-4">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm text-zinc-300 hover:text-white transition"
              >
                <span className="relative">
                  View my repos
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-fuchsia-400 to-violet-400 group-hover:w-full transition-all duration-500" />
                </span>
                {"  "}→
              </a>
            </div>
          </div>
        </div>

        {/* LINKEDIN */}
<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 overflow-hidden transition hover:-translate-y-1">
  <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-emerald-500/15 via-lime-500/10 to-transparent blur-2xl" />
  <div className="relative">
    <div className="text-sm font-mono text-zinc-400">linkedin</div>

    <div className="mt-2 text-[15px] font-medium text-white truncate">
      {linkedin}
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-400/20 transition"
      >
        ↗ Open
      </a>

      <button
        type="button"
        onClick={() => copy(linkedin, "linkedin")}
        className="rounded-xl border border-zinc-700 bg-black/30 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 transition"
      >
        ⧉ Copy
      </button>

      {copied === "linkedin" ? (
        <span className="self-center text-xs text-emerald-300">Copied!</span>
      ) : null}
    </div>
  </div>
</div>
{/* RESUME (Drive) */}
<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 overflow-hidden transition hover:-translate-y-1">
  <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/15 via-fuchsia-500/10 to-transparent blur-2xl" />

  <div className="relative">
    <div className="text-sm font-mono text-zinc-400">resume</div>

    <div className="mt-2 text-[15px] font-medium text-white">
      Resume (Google Drive)
    </div>

    <p className="mt-2 text-sm text-zinc-400">
      Opens Drive preview (then download from Drive).
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      <a
        href={resumeDriveView}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-400/20 transition"
      >
        ↗ View
      </a>

      <button
        type="button"
        onClick={() => copy(resumeDriveView, "resume")}
        className="rounded-xl border border-zinc-700 bg-black/30 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 transition"
      >
        ⧉ Copy
      </button>

      {copied === "resume" ? (
        <span className="self-center text-xs text-emerald-300">Copied!</span>
      ) : null}
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
