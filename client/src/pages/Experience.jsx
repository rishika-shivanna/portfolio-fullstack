import { useMemo } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Neha-style code window (dark code area, colorful top gradient, mac dots)
 */
function CodeWindow({ exp }) {
  return (
    <div className="w-full">
      {/* top gradient line */}
      <div className="flex">
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-violet-600 to-transparent" />
      </div>

      <div className="rounded-xl border border-zinc-200 bg-[#2F2F2F] shadow-[0_18px_40px_-20px_rgba(0,0,0,0.45)] overflow-hidden">
        {/* header row */}
        <div className="flex items-center gap-3 px-4 md:px-6 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-orange-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>

          <div className="flex items-center gap-2 min-w-0">
            {exp.logo ? (
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="h-8 w-8 rounded-full object-cover border border-white/10"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : null}

            <div className="min-w-0">
              <p className="truncate text-sm md:text-base font-semibold text-white">
                {exp.company}
              </p>
              <p className="truncate text-xs text-white/60">{exp.location}</p>
            </div>
          </div>
        </div>

        {/* code body */}
        <div className="px-4 md:px-6 py-4 md:py-6">
          <code className="font-mono text-[12px] md:text-sm leading-relaxed">
            <div className="opacity-95">
              <span className="mr-2 text-pink-400">const</span>
              <span className="mr-2 text-white">job</span>
              <span className="mr-2 text-pink-400">=</span>
              <span className="text-white/60">{"{"}</span>
            </div>

            <div className="mt-2">
              <span className="ml-4 md:ml-6 mr-2 text-white">myRole:</span>
              <span className="text-orange-300">"{exp.title}"</span>
              <span className="text-white/60">,</span>
            </div>

            <div>
              <span className="ml-4 md:ml-6 mr-2 text-white">duration:</span>
              <span className="text-orange-300">"{exp.duration}"</span>
              <span className="text-white/60">,</span>
            </div>

            <div>
              <span className="ml-4 md:ml-6 mr-2 text-white">type:</span>
              <span className="text-orange-300">"{exp.type}"</span>
              <span className="text-white/60">,</span>
            </div>

            <div className="mt-2">
              <span className="ml-4 md:ml-6 mr-2 text-white">tools:</span>
              <span className="text-white/60">{"["}</span>
              {exp.tools.map((tag, i) => (
                <span key={tag}>
                  <span className="text-amber-300">"{tag}"</span>
                  {i !== exp.tools.length - 1 ? (
                    <span className="text-white/60">, </span>
                  ) : null}
                </span>
              ))}
              <span className="text-white/60">{"]"}</span>
              <span className="text-white/60">,</span>
            </div>

            <div className="mt-2">
              <span className="ml-4 md:ml-6 mr-2 text-white">impact:</span>
              <span className="text-cyan-300">"{exp.summary}"</span>
              <span className="text-white/60">,</span>
            </div>

            {exp.bullets?.length ? (
              <div className="mt-2">
                <span className="ml-4 md:ml-6 mr-2 text-white">highlights:</span>
                <span className="text-white/60">{"["}</span>

                <div className="mt-2 space-y-1">
                  {exp.bullets.map((b, idx) => (
                    <div key={b} className="ml-8 md:ml-12">
                      <span className="text-emerald-300">"{b}"</span>
                      <span className="text-white/60">
                        {idx === exp.bullets.length - 1 ? "" : ","}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="ml-4 md:ml-6">
                  <span className="text-white/60">{"]"}</span>
                  <span className="text-white/60">,</span>
                </div>
              </div>
            ) : null}

            {exp.metrics?.length ? (
              <div className="mt-2">
                <span className="ml-4 md:ml-6 mr-2 text-white">metrics:</span>
                <span className="text-white/60">{"["}</span>
                {exp.metrics.map((m, i) => (
                  <span key={m}>
                    <span className="text-violet-300">"{m}"</span>
                    {i !== exp.metrics.length - 1 ? (
                      <span className="text-white/60">, </span>
                    ) : null}
                  </span>
                ))}
                <span className="text-white/60">{"]"}</span>
                <span className="text-white/60">,</span>
              </div>
            ) : null}

            <div className="mt-2 text-white/60">{"};"}</div>
          </code>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = useMemo(
    () => [
      {
        id: 1,
        title: "Junior Software Developer",
        company: "Maitra Medtech (IISc)",
        location: "India",
        duration: "Aug 2024 — Dec 2024",
        type: "Internship / Contract",
        tools: ["RBAC", "REST APIs", "SQL", "Performance Tuning"],
        summary:
          "Strengthened platform security and improved backend performance for a healthcare web application.",
        bullets: [
          "Implemented RBAC and refactored API endpoints with backend engineers.",
          "Optimized DB queries with focused SELECTs + indexing, cutting response time by ~200ms.",
        ],
        metrics: ["~200ms faster responses", "RBAC security upgrade"],
        logo: "/exp/maitra.jpeg",
      },
      {
        id: 2,
        title: "Software Developer Intern",
        company: "Aarnaq MedTech Pvt Ltd (IISc)",
        location: "India",
        duration: "Apr 2023 — Jul 2024",
        type: "Internship",
        tools: ["Mobile App", "OCR", "Firebase", "Dashboards", "BRDs", "UML"],
        summary:
          "Built automation + analytics for real workflows—reduced task time and reporting load.",
        bullets: [
          "Integrated camera + OCR to reduce reporting time from ~15 minutes to <5 minutes.",
          "Built dashboards reducing reporting requests from 50/week to 30/week.",
          "Standardized pipelines cutting ad-hoc DB queries from 40/day to 15/day.",
        ],
        metrics: ["15 min → <5 min", "50→30 reports/week", "40→15 queries/day"],
        logo: "/exp/iisc.png",
      },
      {
        id: 3,
        title: "UI/UX Designer Intern",
        company: "NeuraStim Smartphone (IISc Collaboration)",
        location: "Delaware, USA / IISc",
        duration: "Aug 2023 — Nov 2023",
        type: "Internship",
        tools: ["Figma", "Design Systems", "Event Logging", "WCAG 2.1 AA"],
        summary:
          "Designed user flows for a neuro-health app and partnered with engineers to ship accessible UI.",
        bullets: [
          "Built 6 Figma prototypes; tested with 20 users (52s → 35s task time).",
          "Added event logging and reduced iteration cycles from 4 days to 3 days.",
          "Ensured WCAG 2.1 AA compliance across devices.",
        ],
        metrics: ["52s → 35s", "4d → 3d cycles", "WCAG 2.1 AA"],
        logo: "/exp/iisc.png",
      },
    ],
    []
  );

  return (
    <div className="relative">
      {/* ✅ ONLY the label stays sticky */}
      <div className="mb-8">
  <div className="flex items-center gap-4">
    <span className="bg-[#2F2F2F] text-white px-6 py-3 text-sm md:text-base font-semibold rounded-xl shadow-sm">
      EXPERIENCE
    </span>
    <span className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-violet-600 to-transparent" />
  </div>
</div>

      {/* ✅ cards stack and stick */}
      <div className="pt-8 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="sticky"
            style={{
              top: 140 + index * 18, // spacing between stacked sticky cards
              zIndex: 10 + index,
            }}
          >
            <div className="mx-auto max-w-4xl">
              <CodeWindow exp={exp} />
            </div>
          </div>
        ))}

        {/* spacer so last card can scroll out cleanly */}
        <div className="h-[220px]" />
      </div>
    </div>
  );
}
