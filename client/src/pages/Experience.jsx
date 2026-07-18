import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Code-style experience window. Collapsed, it shows only the header bar
 * (company + location) — a compact "deck" look. Click it to expand and
 * read the full role, tools, highlights, and metrics; click again (or
 * click a different card) to collapse it back down.
 */
function CodeWindow({ exp, isActive, onToggle }) {
  return (
    <div className="w-full">
      {/* top gradient line */}
      <div className="flex">
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-violet-600 to-transparent" />
      </div>

      <div className="ai-border-glow rounded-xl p-[1.5px] shadow-[0_18px_45px_-20px_rgba(99,102,241,0.35)]">
        <div className="rounded-[10px] bg-[#2F2F2F] overflow-hidden">
          {/* header row — click to expand/collapse */}
          <button
            type="button"
            onClick={onToggle}
            className="w-full flex items-center gap-3 px-4 md:px-6 py-3 border-b border-white/10 text-left hover:bg-white/[0.03] transition-colors"
            aria-expanded={isActive}
          >
            <div className="flex items-center gap-2 shrink-0">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-orange-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center gap-2 min-w-0 flex-1">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-8 w-8 rounded-full object-cover border border-white/10 shrink-0"
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
                <p className="truncate text-xs text-white/60">
                  {exp.title} · {exp.location}
                </p>
              </div>
            </div>

            <ChevronDown
              className={`h-4 w-4 text-white/50 shrink-0 transition-transform duration-300 ${
                isActive ? "rotate-180 text-indigo-300" : ""
              }`}
            />
          </button>

          {/* collapsible body — CSS grid-rows trick animates to/from
              "auto" height smoothly without any JS height measurement */}
          <div
            className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${
              isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-4 md:px-6 py-4 md:py-6">
                <code className="font-mono text-[12px] md:text-sm leading-relaxed">
                  <div className="opacity-95">
                    <span className="mr-2 text-pink-400">const</span>
                    <span className="mr-2 text-white">job</span>
                    <span className="mr-2 text-pink-400">=</span>
                    <span className="text-white/60">{"{"}</span>
                  </div>

                  <div className="mt-2">
                    <span className="ml-4 md:ml-6 mr-2 text-white">
                      myRole:
                    </span>
                    <span className="text-orange-300">"{exp.title}"</span>
                    <span className="text-white/60">,</span>
                  </div>

                  <div>
                    <span className="ml-4 md:ml-6 mr-2 text-white">
                      duration:
                    </span>
                    <span className="text-orange-300">"{exp.duration}"</span>
                    <span className="text-white/60">,</span>
                  </div>

                  <div>
                    <span className="ml-4 md:ml-6 mr-2 text-white">
                      type:
                    </span>
                    <span className="text-orange-300">"{exp.type}"</span>
                    <span className="text-white/60">,</span>
                  </div>

                  <div className="mt-2">
                    <span className="ml-4 md:ml-6 mr-2 text-white">
                      tools:
                    </span>
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
                    <span className="ml-4 md:ml-6 mr-2 text-white">
                      impact:
                    </span>
                    <span className="text-cyan-300">"{exp.summary}"</span>
                    <span className="text-white/60">,</span>
                  </div>

                  {exp.bullets?.length ? (
                    <div className="mt-2">
                      <span className="ml-4 md:ml-6 mr-2 text-white">
                        highlights:
                      </span>
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
                      <span className="ml-4 md:ml-6 mr-2 text-white">
                        metrics:
                      </span>
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
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState(0); // first card open by default

  const experiences = useMemo(
    () => [
      {
        id: 0,
        title: "Software Engineer",
        company: "PNC Financial Services",
        location: "USA",
        duration: "Jan 2026 — Present",
        type: "Full-time",
        tools: [
          "Java 21",
          "Spring Boot",
          "Kafka",
          "PostgreSQL",
          "Redis",
          "AWS",
          "OpenAI APIs",
          "Anthropic Claude",
          "RAG",
          "LangChain",
          "Docker",
          "Kubernetes",
          "Terraform",
          "GitHub Actions",
          "Jenkins",
          "OpenTelemetry",
          "CloudWatch",
        ],
        summary:
          "Architecting secure, cloud-native banking platforms and AI-powered customer support systems handling millions of customer requests and financial events.",
        bullets: [
          "Architected cloud-native banking platforms using Java 21, Spring Boot, Kafka, PostgreSQL, Redis, and AWS, supporting more than 8 million customer requests every month.",
          "Led design and implementation of distributed event-driven services using Apache Kafka, asynchronous messaging, and resilient microservice patterns to process over 25 million financial events per month.",
          "Built enterprise AI solutions using OpenAI APIs, Anthropic Claude, Retrieval-Augmented Generation, LangChain, and Vector Embeddings to improve customer support and internal knowledge retrieval.",
          "Designed secure REST and GraphQL APIs for authentication, fraud detection, payment processing, and customer profile services while following regulatory and financial compliance standards.",
          "Optimized platform scalability using Redis caching, PostgreSQL query optimization, Docker, Kubernetes, Terraform, GitHub Actions, and Jenkins, reducing average API response time to under 120 milliseconds.",
          "Established observability using OpenTelemetry, AWS CloudWatch, centralized logging, and monitoring dashboards to identify production issues within 5 minutes.",
          "Partnered with solution architects, AI engineers, product managers, and cybersecurity teams to lead system design reviews, mentor engineers, and deliver secure enterprise software.",
        ],
        metrics: [
          "8M+ monthly requests",
          "25M+ financial events/month",
          "<120ms API response time",
          "Issues detected within 5 minutes",
        ],
        logo: "/exp/pnc.png",
      },
      {
        id: 1,
        title: "Senior Research Assistant",
        company: "The Research Foundation for SUNY",
        location: "Binghamton, NY",
        duration: "Jan 2025 — Dec 2025",
        type: "Research / Software Engineering",
        tools: [
          "Python",
          "Java",
          "FastAPI",
          "React",
          "PostgreSQL",
          "Spring Boot",
          "REST APIs",
          "Docker",
          "Kubernetes",
          "Azure",
          "AWS",
          "OpenAI APIs",
          "Anthropic Claude",
          "LangChain",
          "Vector Databases",
          "MLflow",
          "GitHub Actions",
          "Scikit-learn",
          "MLOps",
        ],
        summary:
          "Designed and built AI, data, and cloud-native systems for large-scale academic research workflows across structured and unstructured datasets.",
        bullets: [
          "Designed software platforms using Python, Java, FastAPI, React, PostgreSQL, and cloud-native architectures, enabling researchers to securely process and analyze more than 12 TB of research data.",
          "Developed end-to-end machine learning pipelines using Python, PyTorch, TensorFlow, Scikit-learn, and MLOps practices to automate preprocessing, feature engineering, training, and evaluation.",
          "Engineered Retrieval-Augmented Generation applications using LangChain, OpenAI APIs, Anthropic Claude, Vector Embeddings, and Vector Databases to improve semantic search across more than 1 million research documents.",
          "Built scalable backend services using Spring Boot, REST APIs, Docker, Kubernetes, Azure, and AWS, integrating AI inference services with university applications and reducing reporting workflows by more than 200 faculty and research hours.",
          "Implemented experiment tracking, model versioning, and automated deployment workflows using MLflow, GitHub Actions, and containerized infrastructure.",
          "Collaborated with faculty members, graduate researchers, and software engineering teams to translate research objectives into production-ready software systems.",
        ],
        metrics: [
          "12TB+ research data",
          "1M+ research documents",
          "200+ hours saved",
          "Reusable AI frameworks",
        ],
        logo: "/exp/suny.png",
      },
      {
        id: 2,
        title: "Software Developer",
        company: "Flipkart",
        location: "India",
        duration: "Jul 2022 — Dec 2024",
        type: "Full-time",
        tools: [
          "Java",
          "Spring Boot",
          "REST APIs",
          "MySQL",
          "MongoDB",
          "Apache Kafka",
          "C++",
          "Multithreading",
          "STL",
          "React",
          "TypeScript",
          "Redux",
          "HTML5",
          "CSS3",
          "JavaScript",
          "Redis",
          "AWS",
          "Docker",
          "Kubernetes",
          "Jenkins",
          "GitHub Actions",
          "Git",
        ],
        summary:
          "Developed high-scale backend services, event-driven systems, and responsive web applications for e-commerce marketplace operations.",
        bullets: [
          "Developed scalable backend services using Java, Spring Boot, REST APIs, MySQL, and MongoDB to support order management, inventory synchronization, and seller operations across high-availability e-commerce platforms.",
          "Implemented event-driven microservices with Apache Kafka to asynchronously process order creation, inventory updates, shipment notifications, and payment events during high-volume sales campaigns.",
          "Engineered high-performance modules using C++, multithreading, and STL containers to optimize compute-intensive business operations, reducing batch processing time by nearly 18 minutes for large product catalog synchronization jobs.",
          "Built responsive web applications using ReactJS, TypeScript, Redux, HTML5, CSS3, and JavaScript, improving seller productivity across catalog management, pricing, inventory updates, and order tracking workflows.",
          "Designed and integrated secure RESTful APIs connecting payment gateways, logistics providers, warehouse management systems, and internal business services.",
          "Optimized application performance using Redis caching, SQL query optimization, database indexing, MySQL, and MongoDB, reducing average API response time by approximately 120 milliseconds during peak shopping events.",
          "Automated application delivery using AWS, Docker, Kubernetes, Jenkins, GitHub Actions, and Git, enabling standardized CI/CD pipelines for weekly production releases.",
        ],
        metrics: [
          "10M+ order events",
          "18 min faster batch processing",
          "120ms faster APIs",
          "Weekly production releases",
        ],
        logo: "/exp/flipkart.png",
      },
    ],
    [],
  );

  return (
    <div className="relative">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <span className="bg-[#2F2F2F] text-white px-6 py-3 text-sm md:text-base font-semibold rounded-xl shadow-sm">
            EXPERIENCE
          </span>
          <span className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-violet-600 to-transparent" />
        </div>
      </div>

      <p className="mb-4 text-xs text-zinc-500">
        Tap a role to expand it — click again to collapse.
      </p>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <CodeWindow
            key={exp.id}
            exp={exp}
            isActive={activeId === exp.id}
            onToggle={() =>
              setActiveId((cur) => (cur === exp.id ? null : exp.id))
            }
          />
        ))}
      </div>
    </div>
  );
}
