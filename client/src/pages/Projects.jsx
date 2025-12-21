import { useMemo } from "react";
import { Terminal, Cpu, Globe, Cloud, Smartphone } from "lucide-react";

function ProjectCard({ project }) {
  const getProjectColor = (name) => {
    const colors = {
      "Personal Portfolio Website": "from-blue-500 to-cyan-500",
      "Neuva Life Sciences": "from-purple-500 to-pink-500",
      "Student ML Platform": "from-green-500 to-emerald-500",
      "Carbon AI Agent": "from-orange-500 to-red-500",
    };
    return colors[name] || "from-gray-500 to-gray-600";
  };

  const color = getProjectColor(project.name);

  return (
    <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-4">
      {/* Top Bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color} rounded-t-xl`}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${color} bg-opacity-10`}>
            {project.icon}
          </div>

          <div>
            <h3 className="text-base font-bold text-gray-900">
              {project.name}
            </h3>

            <div className="flex items-center gap-2 mt-1">
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  project.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {project.status}
              </span>
              <span className="text-xs text-gray-500">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Uptime (optional) */}
        {project.uptime ? (
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">Uptime</div>
            <div className="text-sm font-bold text-gray-900">
              {project.uptime}
            </div>
          </div>
        ) : null}
      </div>

      {/* Tech Stack */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Code Block */}
      <div className="bg-gray-900 rounded-lg p-4 font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-gray-400">project.js</span>
        </div>

        <pre className="text-xs text-gray-300 whitespace-pre-wrap">
{`const project = {
  name: '${project.name}',
  tools: [
    ${project.tools.slice(0, 4).map((t) => `'${t}'`).join(",\n    ")}
  ],
  description: '${project.description}'
};`}
        </pre>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        name: "Personal Portfolio Website",
        year: "2025",
        status: "Active",
        icon: <Smartphone className="h-4 w-4 text-blue-600" />,
        tools: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        description:
          "Modern, responsive portfolio showcasing AI/ML projects, full-stack applications, and software engineering work with clean UI and smooth animations.",
      },
      {
        name: "Neuva Life Sciences",
        year: "2024",
        status: "Active",
        uptime: "99.9%",
        icon: <Globe className="h-4 w-4 text-purple-600" />,
        tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Docker"],
        description:
          "Healthcare platform with real-time analytics dashboards, performance tuning, and scalable frontend architecture.",
      },
      {
        name: "Student ML Platform",
        year: "2024",
        status: "Active",
        uptime: "98.7%",
        icon: <Cpu className="h-4 w-4 text-green-600" />,
        tools: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL", "Docker"],
        description:
          "ML pipeline for student performance prediction with data preprocessing, model training, evaluation, and API deployment.",
      },
      {
        name: "Carbon AI Agent",
        year: "2024",
        status: "Beta",
        uptime: "97.3%",
        icon: <Cloud className="h-4 w-4 text-orange-600" />,
        tools: ["Python", "Transformers", "FastAPI", "AWS", "PostgreSQL"],
        description:
          "Multi-agent system that analyzes shopping receipts for carbon footprint estimation and sustainability insights.",
      },
    ],
    []
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Terminal className="h-5 w-5 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">System Projects</h1>
        </div>
        <p className="text-gray-600">
          Production-grade applications with measurable impact
        </p>

        {/* Stats Bar */}
        <div className="mt-4 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              4 Systems Running
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-gray-700">
              Avg Uptime: 98.9%
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
