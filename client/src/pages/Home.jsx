import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  const LINKS = {
    email: "mailto:rshivanna@binghamton.edu",
    linkedin: "https://www.linkedin.com/in/rishika-shivanna/",
    github: "https://github.com/rishika-shivanna",
  };

  // ✅ icons from /public/icons (NO IMPORTS)
  const ICONS = {
    email: "/icons/email.png",
    linkedin: "/icons/linkedin.png",
    github: "/icons/github.png",
  };

  const IconBtn = ({ href, icon, label }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    className="group inline-flex items-center justify-center"
    title={label}
    aria-label={label}
  >
    <img
      src={icon}
      alt={label}
      className="h-10 w-10 object-contain opacity-95
                 transition duration-200 ease-out
                 group-hover:opacity-100 group-hover:scale-110
                 group-active:scale-95"
    />
  </a>
);


  return (
    <div className="space-y-6">
      {/* Top intro */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 relative overflow-hidden">
        {/* subtle haze */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <p className="font-mono text-sm text-zinc-400">{"// home.tsx"}</p>

        {/* ✅ Name row + icons (ONLY ADDITION HERE) */}
        <div className="mt-2 flex items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold">Rishika Shivanna</h1>
        
        </div>

        <p className="mt-2 text-zinc-200">
          MS CS (AI Track) @ Binghamton University. I build clean full-stack apps, data-driven ML
          features, and performance-focused systems.{" "}
          <span className="text-zinc-400">(React • Node • ML • Dashboards)</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-5">
          {["React", "Tailwind", "Node.js", "Python", "ML/AI", "Docker", "CI/CD"].map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-zinc-800 bg-black/20 text-zinc-100
                         hover:bg-white/5 transition"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 text-sm text-amber-400">
          Based in Binghamton, NY • Open to SWE / Full-Stack / AI-track roles
        </div>

        <div className="mt-3 flex items-center gap-5">
            <IconBtn href={LINKS.email} icon={ICONS.email} label="Email" />
            <IconBtn href={LINKS.linkedin} icon={ICONS.linkedin} label="LinkedIn" />
            <IconBtn href={LINKS.github} icon={ICONS.github} label="GitHub" />
          </div>
          
      </div>

      
{/* WHO AM I */}

<div
  id="who-am-i"
  className="rounded-2xl border border-zinc-800 bg-zinc-950/40 overflow-hidden"
>
        <div className="grid md:grid-cols-2">
          {/* Left: About text */}
          <div className="p-8 min-h-[520px] max-h-[520px] overflow-y-auto">
            <div className="inline-flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400/90" />
              <h2 className="text-xl font-semibold tracking-wide text-emerald-300">
                WHO AM I?
              </h2>
            </div>
            {/* Scroll down hint */}
<div className="mt-6 flex justify-center">
  <button
    onClick={() => {
      document
        .getElementById("who-am-i")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="group inline-flex items-center gap-2 rounded-full
               border border-zinc-700 bg-black/30 px-5 py-2
               text-sm text-zinc-300 hover:text-white
               hover:bg-white/5 transition"
  >
    <span className="opacity-80 group-hover:opacity-100">
      Scroll 
    </span>
    <span className="animate-bounce">↓</span>
  </button>
</div>


            <p className="mt-5 text-zinc-100 leading-relaxed">
              Hey — I’m <span className="font-semibold">Rishika Shivanna</span>. I enjoy turning
              messy problems into simple, reliable systems: clean UI, solid APIs, and measurable
              impact.
            </p>

            <p className="mt-4 text-zinc-200 leading-relaxed">
              I’ve worked on platform security and performance improvements in real products —
              implementing RBAC-style access control and optimizing slow backend flows to improve
              stability and user experience.
            </p>

            <p className="mt-4 text-zinc-200 leading-relaxed">
              I’ve also built an OCR-enabled workflow to reduce manual report time, and created
              dashboards that make data easier to understand and act on.
            </p>

            <p className="mt-4 text-zinc-200 leading-relaxed">
              Outside work, I build across systems + ML — like a Linux chat service and a Yelp
              prediction project using large-scale data with strong model performance.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200
                           hover:bg-emerald-400/15 transition"
              >
                View Projects
              </Link>

              <Link
                to="/resume"
                className="rounded-xl border border-zinc-700 bg-black/20 px-4 py-2 text-sm text-zinc-200
                           hover:bg-white/5 transition"
              >
                Resume
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-zinc-700 bg-black/20 px-4 py-2 text-sm text-zinc-200
                           hover:bg-white/5 transition"
              >
                Contact
              </Link>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs text-zinc-400 mb-2">{"// quick-facts.json"}</p>
              <pre className="rounded-xl border border-zinc-800 bg-black/20 p-4 text-[12px] text-zinc-200 overflow-x-auto">
{`{
  "focus": ["Full-Stack", "AI/ML", "Systems"],
  "current": "MS CS (AI Track) @ Binghamton",
  "strengths": ["Performance", "Dashboards", "Clean UI", "APIs"],
  "open_to": ["SWE Intern", "Full-Stack", "AI/ML Roles"]
}`}
              </pre>
            </div>
          </div>

          {/* Right: Photo block */}
          <div className="relative p-6 md:p-8 border-t md:border-t-0 md:border-l border-zinc-800">
            {/* glow */}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Image card with pop on hover */}
            <div
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-black/20
                         transition duration-300 ease-out
                         hover:-translate-y-2 hover:scale-[1.03]
                         hover:shadow-2xl hover:shadow-emerald-500/15"
            >
              <img
                src={profileImg}
                alt="Rishika Shivanna"
                className="w-full h-[420px] object-cover transition duration-300 ease-out
                           group-hover:scale-[1.05]"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm text-zinc-100 font-medium">Rishika Shivanna</p>
                <p className="text-xs text-zinc-300">Full-Stack • AI Track • Builder</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Clean UI", "Systems thinking", "Ship fast", "Measure impact"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-1 rounded border border-zinc-800 bg-black/20 text-zinc-200
                             hover:bg-white/5 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/*  Replace text links with icons (ONLY CHANGE HERE) */}
            <div className="mt-4 flex items-center gap-3">
              <IconBtn href={LINKS.email} icon={ICONS.email} label="Email" />
              <IconBtn href={LINKS.linkedin} icon={ICONS.linkedin} label="LinkedIn" />
              <IconBtn href={LINKS.github} icon={ICONS.github} label="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
