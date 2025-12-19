import { useMemo } from "react";

function ExpCard({ exp }) {
  return (
    <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 shadow-[0_30px_90px_rgba(0,0,0,0.60)] overflow-hidden">
      {/* colorful top line */}
      <div className="flex">
        <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-fuchsia-500 to-violet-500" />
        <div className="h-px w-1/2 bg-gradient-to-r from-violet-500 to-transparent" />
      </div>

      {/* window bar */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800 bg-zinc-950">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
          <span className="h-3 w-3 rounded-full bg-green-500/90" />
        </div>

        {/* logo + company */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-700 grid place-items-center overflow-hidden">
            {exp.logo ? (
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-xs font-semibold text-zinc-200">
                {exp.company
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase()}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <div className="text-zinc-100 font-semibold text-lg truncate">
              {exp.company}
            </div>
            <div className="text-zinc-400 text-sm truncate">{exp.location}</div>
          </div>
        </div>

        <div className="ml-auto text-xs font-mono text-zinc-300 border border-zinc-700 bg-black px-2 py-1 rounded">
          {exp.duration}
        </div>
      </div>

      {/* code area */}
      <div className="px-5 py-6 border-t-2 border-indigo-900/60 bg-zinc-950">
        <code className="font-mono text-[13px] sm:text-sm leading-6 block">
          <div>
            <span className="text-pink-400 mr-2">const</span>
            <span className="text-white mr-2">job</span>
            <span className="text-pink-400 mr-2">=</span>
            <span className="text-zinc-400">{"{"}</span>
          </div>

          <div className="ml-5 mt-2">
            <span className="text-white mr-2">myRole:</span>
            <span className="text-orange-300">"{exp.title}"</span>
            <span className="text-zinc-400">,</span>
          </div>

          <div className="ml-5">
            <span className="text-white mr-2">focus:</span>
            <span className="text-zinc-400">[ </span>
            {exp.tools.map((t, i) => (
              <span key={t}>
                <span className="text-amber-300">'{t}'</span>
                <span className="text-zinc-400">
                  {i === exp.tools.length - 1 ? " " : ", "}
                </span>
              </span>
            ))}
            <span className="text-zinc-400">]</span>
            <span className="text-zinc-400">,</span>
          </div>

          <div className="ml-5 mt-2">
            <span className="text-white mr-2">impact:</span>
            <span className="text-cyan-300">{` "${exp.description}"`}</span>
          </div>

          {exp.bullets?.length ? (
            <>
              <div className="ml-5 mt-2">
                <span className="text-white mr-2">highlights:</span>
                <span className="text-zinc-400">[</span>
              </div>
              {exp.bullets.map((b) => (
                <div key={b} className="ml-10">
                  <span className="text-emerald-300">"{b}"</span>
                  <span className="text-zinc-400">,</span>
                </div>
              ))}
              <div className="ml-5">
                <span className="text-zinc-400">]</span>
                <span className="text-zinc-400">,</span>
              </div>
            </>
          ) : null}

          <div className="mt-2">
            <span className="text-zinc-400">{"};"}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = useMemo(
    () => [
      {
        id: 1,
        title: "Graduate Student — Information Systems",
        company: "Binghamton University",
        location: "New York, USA",
        duration: "Aug 2024 — Present",
        tools: ["Data Management", "Systems", "Full-Stack", "Cloud", "AI/ML"],
        description:
          "Pursuing MS with a focus on production-grade full-stack engineering, data systems, and applied ML projects.",
        bullets: [
          "Built a VS Code–style portfolio UI with React + Tailwind + animations.",
          "Integrated a Node/Express API to serve dynamic project data.",
        ],
        logo: "/exp/iisc.jpeg",
      },
      {
        id: 2,
        title: "Junior Software Engineer",
        company: "Aarnaq MedTech Private Limited",
        location: "Bengaluru, India",
        duration: "Jun 2022 — May 2024",
        tools: ["Python", "ETL", "Automation", "Testing", "Data Pipelines"],
        description:
          "Improved internal data workflows and reliability through automation, testing, and performance optimization.",
        bullets: [
          "Reduced data extraction time by ~40% by optimizing scripts/pipeline flow.",
          "Automated 500+ tests to improve release confidence and reduce regressions.",
          "Cut manual operational effort by ~50% via automation tooling.",
        ],
        logo: "exp/iisc.png",
      },
      {
        id: 3,
        title: "Junior Software Engineer",
        company: "Maitra MedTech Private Limited",
        location: "Bengaluru, India",
        duration: "Feb 2022 — May 2022",
        tools: ["React", "Node.js", "API Integration", "UI", "Prototyping"],
        description:
          "Built and iterated product-facing web components and internal tooling with clean UI patterns.",
        bullets: [
          "Implemented responsive UI components and improved UX iteration speed.",
          "Worked with APIs and modular components for maintainable delivery.",
        ],
        logo: "/exp/maitra.jpeg",
      },
      
    ],
    []
  );

  return (
    <div className="relative">
      {/* Keep your original top strip style */}
      {/* Keep your original top strip style */}
<div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
  <p className="font-mono text-sm text-zinc-400">{"// experience.tsx"}</p>

  <h2 className="mt-2 text-2xl font-semibold text-white">
    Experience
  </h2>

  <p className="mt-2 text-zinc-300">
    Professional roles, research, and engineering experience.
  </p>
</div>



      {/* Stacked sticky cards */}
      <div className="pt-10 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="sticky"
            style={{
              top: 110 + index * 18, // overlap strength (increase to 24 for more overlap)
              zIndex: 10 + index,
            }}
          >
            <div className="mx-auto max-w-3xl">
              <ExpCard exp={exp} />
            </div>
          </div>
        ))}

        {/* spacer so the last card can scroll into view */}
        <div className="h-[260px]" />
      </div>
    </div>
  );
}
