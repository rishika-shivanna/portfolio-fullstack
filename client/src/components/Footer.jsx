import { Github, Star, GitFork } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200">
      <div className="bg-zinc-900 text-white">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/80">
              © Developer Portfolio by{" "}
              <span className="text-emerald-300 font-semibold">Rishika Shivanna</span>
            </p>

            <div className="flex items-center gap-4 text-sm">
              

              <a
                href="https://github.com/rishika-shivanna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
              >
                <GitFork className="h-4 w-4" />
                <span className="font-semibold">FORK</span>
              </a>

              <a
                href="https://github.com/rishika-shivanna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                <span className="font-semibold hidden sm:inline">GITHUB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
