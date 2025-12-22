import { useEffect, useMemo, useState } from "react";
import { Download, Github, Linkedin, Mail, Cpu } from "lucide-react";
import profileImg from "../assets/profile.jpg";

import ContactCards from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import SkillsMarquee from "./SkillsMarquee";
import Footer from "../components/Footer";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useTypewriter(lines, speed = 22, pause = 1200) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const cursorTimer = setInterval(() => setCursor((c) => !c), 450);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    let i = 0;
    const line = lines[idx];

    const t = setInterval(() => {
      if (i <= line.length) {
        setText(line.slice(0, i));
        i++;
      } else {
        clearInterval(t);
        const hold = setTimeout(() => {
          setText("");
          setIdx((p) => (p + 1) % lines.length);
        }, pause);
        return () => clearTimeout(hold);
      }
    }, speed);

    return () => clearInterval(t);
  }, [idx, lines, speed, pause]);

  return { text, cursor };
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="rounded-3xl border border-zinc-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-zinc-400">/{id}</p>
            <h2 className="mt-1 text-2xl md:text-3xl font-extrabold text-zinc-900">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-sm text-zinc-600">{subtitle}</p>
            ) : null}
          </div>

          <a
            href="#home"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition"
          >
            Top ↗
          </a>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default function Home({ jump = "home" }) {
  const LINKS = {
    email: "mailto:rshivanna@binghamton.edu",
    linkedin: "https://www.linkedin.com/in/rishika-shivanna/",
    github: "https://github.com/rishika-shivanna",
    resume:
      "https://drive.google.com/file/d/1d60ctfGQpKWvjoGiE2UQb4FsG1B5jdSR/view?usp=sharing",
  };

  const statusLines = useMemo(
    () => [
      "Full-Stack + ML • shipping clean systems",
      "Open to SWE / Full-Stack roles",
      "Performance • Security • UI polish",
      "Let’s build something great",
    ],
    []
  );

  const { text, cursor } = useTypewriter(statusLines, 20, 1100);

  useEffect(() => {
    const el = document.getElementById(jump);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [jump]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-white to-emerald-50 overflow-x-hidden">
      {/* ✅ If your navbar is fixed, this removes the “gap” under it */}
      <div className="h-20 sm:h-24" />

      {/* soft colorful blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute top-40 -right-28 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      </div>

      {/* ✅ Responsive padding + no random top spacing */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 space-y-10 pb-16">
        {/* HERO */}
        <section id="home" className="scroll-mt-28 pt-0">
          {/* ✅ 1 col on small, 2 col from md */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div className="w-full max-w-none space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-gradient-to-r from-indigo-100/80 to-purple-100/80 px-4 py-2 backdrop-blur">
                <Cpu className="h-4 w-4 text-indigo-700" />
                <span className="text-sm font-semibold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  Full-Stack Developer & ML Enthusiast
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-zinc-900">
                Hey there, <br />
                I am{" "}
                <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
                  RISHIKA SHIVANNA.
                </span>
                <br />
                <span className="text-zinc-800">Turning Ideas into Code.</span>
              </h1>

              {/* Social icons */}
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 hover:border-indigo-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-indigo-700" />
                </a>

                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-zinc-50 to-white border border-zinc-200 hover:border-zinc-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-zinc-900" />
                </a>

                <a
                  href={LINKS.email}
                  className="p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 hover:border-emerald-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 text-emerald-700" />
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10">CONTACT ME</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href={LINKS.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-zinc-300 hover:border-indigo-300 text-zinc-900 px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
                >
                  <Download className="h-4 w-4 group-hover:animate-bounce" />
                  <span>GET RESUME</span>
                </a>
              </div>

              {/* Status box */}
              <div className="pt-2">
                <div className="rounded-xl bg-gradient-to-r from-white to-indigo-50/60 border border-indigo-100 p-4 shadow-md backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
                      <div className="absolute inset-0 h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-zinc-900">
                        Currently Coding
                      </p>

                      <p className="text-sm text-zinc-600 mt-0.5 font-mono">
                        {text}
                        <span
                          className={cn(
                            "ml-1 inline-block w-2",
                            cursor ? "opacity-100" : "opacity-0"
                          )}
                        >
                          |
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative w-full">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-indigo-400/15 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-purple-400/15 blur-2xl" />

              <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 text-white shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-zinc-900/80">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-auto text-xs text-white/60 font-mono">
                    coder.ts
                  </div>
                </div>

                <div className="p-5 md:p-6 space-y-2 text-[14px] leading-relaxed font-mono">
                  <div className="text-pink-400">
                    const <span className="text-white">coder</span> = {"{"}
                  </div>

                  <div className="pl-5 text-white/90">
                    name:{" "}
                    <span className="text-yellow-300">'Rishika Shivanna'</span>,
                  </div>
                  <div className="pl-5 text-white/90">
                    skills:{" "}
                    <span className="text-yellow-300">
                      ['React','Python','SQL','Node','ML','AWS']
                    </span>
                    ,
                  </div>
                  <div className="pl-5 text-white/90">
                    hardWorker: <span className="text-emerald-300">true</span>,
                  </div>
                  <div className="pl-5 text-white/90">
                    quickLearner: <span className="text-emerald-300">true</span>,
                  </div>
                  <div className="pl-5 text-white/90">
                    problemSolver:{" "}
                    <span className="text-emerald-300">true</span>,
                  </div>

                  <div className="pl-5 text-white/90">
                    hireable:{" "}
                    <span className="text-indigo-300">function</span>() {"{"}
                  </div>

                  <div className="pl-10 text-white/90">return (</div>
                  <div className="pl-14 text-cyan-300">this.hardWorker &&</div>
                  <div className="pl-14 text-cyan-300">this.problemSolver &&</div>
                  <div className="pl-14 text-cyan-300">
                    this.skills.length &gt;= 5
                  </div>
                  <div className="pl-10 text-white/90">);</div>
                  <div className="pl-5 text-white/90">{"}"},</div>

                  <div className="text-white/70">{"};"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-28">
          {/* ✅ 1 col on small, 2 col on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* LEFT */}
            <div className="w-full max-w-none space-y-6">
              <div className="inline-flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  WHO AM I?
                </h2>
              </div>

              {/* ✅ Responsive text size so it doesn’t look “squeezed” */}
              <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed text-zinc-800">
                <p>
                  Hey, I’m{" "}
                  <span className="font-extrabold text-indigo-700">
                    Rishika Shivanna
                  </span>{" "}
                  — a developer who gets obsessed with clean UI, strong
                  architecture, and measurable impact.
                </p>

                <p>
                  I’ve worked across{" "}
                  <span className="font-semibold text-indigo-700">
                    Full-Stack development
                  </span>
                  ,{" "}
                  <span className="font-semibold text-purple-700">AI / ML</span>,
                  and{" "}
                  <span className="font-semibold text-pink-700">
                    systems programming
                  </span>
                  , with hands-on experience in React, Node.js, Python, SQL, cloud
                  platforms (AWS/GCP), and data-driven ML pipelines.
                </p>

                <p>
                  My work ranges from optimizing healthcare platforms with{" "}
                  <span className="font-semibold">RBAC</span> and database tuning,
                  to building OCR-enabled mobile applications, predictive ML
                  models, and performance-optimized web systems.
                </p>

                <p>
                  I’m actively seeking{" "}
                  <span className="font-semibold">
                    Software Engineering / Full-Stack roles
                  </span>{" "}
                  where I can contribute strong engineering fundamentals, clean
                  architecture, and measurable results while growing within
                  high-impact, collaborative teams.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative w-full">
              <div className="absolute -top-3 -right-3 z-10">
                <div className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-extrabold px-3 py-1.5 shadow-lg">
                  RISHIKA
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-2xl">
                <img
                  src={profileImg}
                  alt="Rishika Shivanna"
                  className="w-full h-72 sm:h-96 lg:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          title="Experience"
          subtitle="Impact-first bullets with metrics."
        >
          <Experience />
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills" subtitle="Tools I use to build & ship.">
          <SkillsMarquee />
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Projects"
          subtitle="Things I built with impact + stack + results."
        >
          <Projects />
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education" subtitle="Degrees + highlights.">
          <Education />
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" subtitle="Short, clean, and professional.">
          <ContactCards
            email="rshivanna@binghamton.edu"
            linkedin="https://www.linkedin.com/in/rishika-shivanna/"
            github="https://github.com/rishika-shivanna"
            resumeUrl={LINKS.resume}
          />
        </Section>

        <Footer />
      </div>
    </div>
  );
}
