import { useMemo, useState } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Search,
  Code2,
  Cpu,
  Brain,
  ChevronDown,
} from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700">
      {children}
    </span>
  );
}

function TypeChip({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition",
        active
          ? "border-zinc-900 bg-zinc-900 text-white"
          : "border-zinc-200 bg-white/70 text-zinc-800 hover:bg-white"
      )}
    >
      {label}
    </button>
  );
}

function ProjectTypeIcon({ type }) {
  if (type === "ai-ml") return <Brain className="h-4 w-4" />;
  if (type === "systems") return <Cpu className="h-4 w-4" />;
  return <Code2 className="h-4 w-4" />;
}

function accentByType(type) {
  if (type === "ai-ml") {
    return {
      ring: "ring-indigo-200",
      bar: "from-indigo-500/60 via-indigo-400/20 to-transparent",
      title: "text-indigo-700",
      glow: "hover:shadow-[0_30px_80px_-55px_rgba(79,70,229,0.6)]",
    };
  }
  if (type === "systems") {
    return {
      ring: "ring-emerald-200",
      bar: "from-emerald-500/60 via-emerald-400/20 to-transparent",
      title: "text-emerald-700",
      glow: "hover:shadow-[0_30px_80px_-55px_rgba(16,185,129,0.6)]",
    };
  }
  return {
    ring: "ring-cyan-200",
    bar: "from-cyan-500/60 via-cyan-400/20 to-transparent",
    title: "text-cyan-700",
    glow: "hover:shadow-[0_30px_80px_-55px_rgba(6,182,212,0.6)]",
  };
}

function CodePreview({ p }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        <span className="ml-2 text-xs font-mono text-white/60">
          {p.name.replace(/\s+/g, "-").toLowerCase()}.js
        </span>
      </div>

      <pre className="px-4 py-4 text-[13px] leading-relaxed font-mono whitespace-pre-wrap break-words">
{`const project = {
  name: "${p.name}",
  type: "${p.type}",
  year: "${p.year}",
  tools: [
${p.tools.map((x) => `    "${x}",`).join("\n")}
  ],
  featured: ${p.featured ? "true" : "false"},
  metrics: ${JSON.stringify(p.metrics || {}, null, 2)}
};`}
      </pre>
    </div>
  );
}

function Spotlight({ p }) {
  const a = accentByType(p.type);

  return (
    <div className={cn("rounded-3xl border border-zinc-200 bg-white/70 backdrop-blur shadow-sm overflow-hidden", a.glow)}>
      <div className={cn("h-[3px] w-full bg-gradient-to-r", a.bar)} />
      <div className="p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
              <Sparkles className="h-4 w-4" />
              FEATURED SPOTLIGHT
            </div>

            <h3 className={cn("text-2xl md:text-3xl font-extrabold tracking-tight", a.title)}>
              {p.name}
            </h3>

            <p className="text-sm md:text-base text-zinc-700 leading-relaxed max-w-2xl">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <Tag>
                <span className="inline-flex items-center gap-2">
                  <ProjectTypeIcon type={p.type} />
                  <span className="capitalize">{p.type}</span>
                </span>
              </Tag>
              <Tag>{p.year}</Tag>
              {p.metrics
                ? Object.entries(p.metrics).slice(0, 3).map(([k, v]) => (
                    <Tag key={k}>
                      {k}: {v}
                    </Tag>
                  ))
                : null}
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              {p.links?.github && p.links.github !== "#" ? (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              ) : null}

              {p.links?.live && p.links.live !== "#" ? (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              ) : null}
            </div>
          </div>

          {/* right mini “code vibe” */}
          <div className="w-full md:max-w-[420px]">
            <CodePreview p={p} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }) {
  const a = accentByType(p.type);
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("group rounded-3xl border border-zinc-200 bg-white/70 backdrop-blur shadow-sm overflow-hidden transition", a.glow)}>
      <div className={cn("h-[2px] w-full bg-gradient-to-r", a.bar)} />
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn("inline-flex items-center gap-2 font-extrabold", a.title)}>
                <ProjectTypeIcon type={p.type} />
                {p.name}
              </span>
              {p.featured ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Featured
                </span>
              ) : null}
              <Tag>{p.year}</Tag>
            </div>

            <p className="text-sm text-zinc-700 leading-relaxed">
              {p.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
          >
            <span className="hidden sm:inline">Code</span>
            <ChevronDown className={cn("h-4 w-4 transition", open ? "rotate-180" : "")} />
          </button>
        </div>

        {/* features */}
        {p.features?.length ? (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {p.features.slice(0, 4).map((f) => (
              <div key={f} className="flex gap-2 text-sm text-zinc-700">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
                <span className="leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        ) : null}

        {/* stack */}
        {p.techStack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.techStack.slice(0, 10).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        ) : null}

        {/* links */}
        {(p.links?.github && p.links.github !== "#") ||
        (p.links?.live && p.links.live !== "#") ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.links?.github && p.links.github !== "#" ? (
              <a
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            ) : null}

            {p.links?.live && p.links.live !== "#" ? (
              <a
                href={p.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            ) : null}
          </div>
        ) : null}

        {/* code preview drawer */}
        {open ? (
          <div className="mt-5">
            <CodePreview p={p} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = useMemo(
    () => [
      {
  id: 1,
  name: "Personal Portfolio Website",
  type: "full-stack",
  year: "2025",
  featured: true,
  tools: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  description:
    "Modern, responsive portfolio showcasing my AI/ML projects, full-stack applications, and software engineering work with clean UI and smooth animations.",
  features: [
    "Recruiter-friendly layout (About, Skills, Projects, Experience, Contact)",
    "Responsive, mobile-first design",
    "Smooth transitions and animations using Framer Motion",
    "Project cards with tech stack + links",
  ],
  techStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"],
  metrics: {
    "Goal": "Fast, clean personal branding",
    "UI": "Responsive + animated",
  },
  links: {
    github: "https://github.com/rishika-shivanna/portfolio-fullstack",
    live: "#",
  },
},
{
  id: 2,
  name: "Student Performance Prediction & Learning Behavior Analysis",
  type: "ai-ml",
  year: "2025",
  featured: true,
  tools: ["Python", "Scikit-learn", "XGBoost", "Apriori"],
  description:
    "Data mining and machine learning project analyzing student learning behaviors and predicting academic success.",
  features: [
    "End-to-end data preprocessing and feature engineering",
    "Apriori association rule mining",
    "Multiple ML models including LR, RF, SVM, and XGBoost",
    "Behavior pattern detection such as binge learning and burnout",
  ],
  techStack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "XGBoost",
    "Matplotlib",
  ],
  metrics: {
    "Models Evaluated": "5+",
    "Evaluation": "Accuracy, Precision, Recall, F1, ROC-AUC",
  },
  links: {
    github: "https://github.com/rishika-shivanna/student-performance-prediction",
    live: "#",
  },
},
{
  id: 3,
  name: "Sustainable Living Coach Agent",
  type: "ai-ml",
  year: "2025",
  featured: true,
  tools: ["Python", "LLMs", "Kaggle", "Multi-Agent Systems"],
  description:
    "AI-powered multi-agent system that analyzes shopping receipts to estimate carbon footprint and provide sustainability insights.",
  features: [
    "Receipt extraction with robust text parsing",
    "Carbon footprint estimation per item and total emissions",
    "LLM-powered recommendations with offline fallback",
    "Sustainability scoring and progress tracking over time",
    "Notebook-friendly structured output for Kaggle evaluation",
  ],
  techStack: [
    "Python",
    "LLM APIs (Gemini / ChatGPT)",
    "JSON",
    "Jupyter Notebook",
  ],
  metrics: {
    "Agent Count": "4",
    "Sustainability Score": "0–100",
    "Modes": "LLM + Offline",
  },
  links: {
    github: "https://github.com/rishika-shivanna/sustainable-living-coach-agent",
    live: "#",
  },
},


      {
        id: 4,
        name: "Neuva Life Sciences Web Platform",
        type: "full-stack",
        year: "2025",
        featured: true,
        tools: ["React", "Vite", "ESLint"],
        description:
          "Created a React-based platform using Vite and ESLint, reducing bundle size from 5MB to 3MB and ensuring responsive performance across devices.",
        features: [
          "Fast dev + optimized builds with Vite",
          "Reduced bundle size (5MB → 3MB)",
          "Maintained quality with ESLint rules",
        ],
        techStack: ["React", "Vite", "JavaScript", "ESLint"],
        metrics: { "Bundle Size": "5MB → 3MB" },
        links: { github: "#", live: "#" },
      },
      {
        id: 5,
        name: "Yelp Business Footfall Prediction",
        type: "ai-ml",
        year: "2025",
        featured: true,
        tools: ["Python", "Pandas", "RF", "XGBoost", "SMOTE"],
        description:
          "Processed 1.94M records; trained Random Forest and XGBoost with SMOTE, improving accuracy from 0.75 to 0.88 (AUC-ROC: 0.89).",
        features: [
          "Processed 1.94M records",
          "Handled class imbalance with SMOTE",
          "Improved model metrics with RF + XGBoost",
        ],
        techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost"],
        metrics: { Records: "1.94M", Accuracy: "0.75 → 0.88", "AUC-ROC": "0.89" },
        links: { github: "#", live: "#" },
      },
      {
        id: 6,
        name: "Linux Chat Service",
        type: "systems",
        year: "2025",
        featured: false,
        tools: ["C", "TCP/IP", "pthreads", "Linux"],
        description:
          "Built a client–server chat service using TCP/IP sockets in C, handling concurrent connections with pthreads and safe shared-resource access.",
        features: [
          "Client–server TCP/IP design",
          "Concurrency via pthreads",
          "Graceful shutdown + buffer safety",
        ],
        techStack: ["C", "Linux", "TCP/IP", "pthreads"],
        metrics: { Concurrency: "pthreads", Networking: "TCP/IP sockets" },
        links: { github: "#", live: "#" },
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchType = type === "all" ? true : p.type === type;
      const matchQuery = !q
        ? true
        : p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.techStack.join(" ").toLowerCase().includes(q);
      return matchType && matchQuery;
    });
  }, [projects, query, type]);

  const spotlight = useMemo(() => projects.find((p) => p.featured) || projects[0], [projects]);

  return (
    <div className="space-y-8">
      {/* header row */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            <span className="text-xs font-bold tracking-widest text-cyan-700">
              PROJECTS
            </span>
          </div>
          <h3 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
            Selected work with impact + metrics
          </h3>
          <p className="mt-2 text-sm text-zinc-600">
            Search, filter, and open code previews.
          </p>
        </div>

        {/* search */}
        <div className="w-full lg:w-[420px] rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2 text-zinc-600">
            <Search className="h-4 w-4" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full bg-transparent outline-none text-sm placeholder:text-zinc-400"
            />
          </div>
        </div>
      </div>

      {/* filter chips */}
      <div className="flex flex-wrap gap-2">
        <TypeChip active={type === "all"} label="All" onClick={() => setType("all")} />
        <TypeChip active={type === "full-stack"} label="Full-Stack" onClick={() => setType("full-stack")} />
        <TypeChip active={type === "ai-ml"} label="AI / ML" onClick={() => setType("ai-ml")} />
        <TypeChip active={type === "systems"} label="Systems" onClick={() => setType("systems")} />
      </div>

      {/* spotlight */}
      <Spotlight p={spotlight} />

      {/* grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered
          .filter((p) => p.id !== spotlight.id)
          .map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-zinc-200 bg-white/70 px-5 py-6 text-sm text-zinc-600">
          No projects match “{query}”.
        </div>
      ) : null}
    </div>
  );
}
