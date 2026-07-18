import { useMemo } from "react";
import { Cpu, Globe, Cloud, Smartphone, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const COLOR_MAP = {
  "SkillPath Job Navigator": "from-green-500 to-emerald-500",
  "Personal Portfolio Website": "from-blue-500 to-cyan-500",
  "Neuva Life Sciences": "from-purple-500 to-pink-500",
  "Student ML Platform": "from-green-500 to-emerald-500",
  "Carbon AI Agent": "from-orange-500 to-red-500",
};

function ProjectCard({ project }) {
  const color = COLOR_MAP[project.name] || "from-gray-500 to-gray-600";

  return (
    <div className="group relative rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className={`h-1.5 w-full bg-gradient-to-r ${color}`} />

      <div className="p-6">
        {/* header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`shrink-0 p-2.5 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 grid place-items-center`}>
              {project.icon}
            </div>
            <h3 className="text-base font-bold text-gray-900 truncate">
              {project.name}
            </h3>
          </div>

          <span
            className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${
              project.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* description */}
        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        {/* stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium group-hover:bg-gray-200 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* footer */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{project.year}</span>
          {project.uptime ? (
            <span className="font-semibold text-gray-700">
              {project.uptime} uptime
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 font-semibold">
              Details <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        name: "SkillPath Job Navigator",
        year: "2026",
        status: "Active",
        icon: <Cpu className="h-4 w-4 text-green-600" />,
        tools: ["FastAPI", "PostgreSQL", "React", "Job APIs"],
        description:
          "AI-powered job matching app that ranks jobs by skill similarity and generates a personalized skill-gap roadmap using real job listings.",
      },
      {
        name: "Personal Portfolio Website",
        year: "2025",
        status: "Active",
        icon: <Smartphone className="h-4 w-4 text-blue-600" />,
        tools: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        description:
          "This site — a modern, responsive portfolio with clean UI, ambient animation, and quick access to my work and background.",
      },
      {
        name: "Neuva Life Sciences",
        year: "2024",
        status: "Active",
        uptime: "99.9%",
        icon: <Globe className="h-4 w-4 text-purple-600" />,
        tools: ["React", "TypeScript", "Vite", "Docker"],
        description:
          "Healthcare platform with real-time analytics dashboards, performance tuning, and scalable frontend architecture.",
      },
      {
        name: "Student ML Platform",
        year: "2024",
        status: "Active",
        uptime: "98.7%",
        icon: <Cpu className="h-4 w-4 text-green-600" />,
        tools: ["Python", "Scikit-learn", "FastAPI", "Docker"],
        description:
          "Machine learning pipeline that predicts student performance, from data cleanup through model training and API deployment.",
      },
      {
        name: "Carbon AI Agent",
        year: "2024",
        status: "Beta",
        uptime: "97.3%",
        icon: <Cloud className="h-4 w-4 text-orange-600" />,
        tools: ["Python", "Transformers", "FastAPI", "AWS"],
        description:
          "Multi-agent system that reads shopping receipts and estimates their carbon footprint with sustainability insights.",
      },
    ],
    [],
  );

  return (
    <div>
      <div className="mb-6 flex items-center gap-2 text-sm">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="font-medium text-gray-700">
          5 projects · avg. 98.9% uptime
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
