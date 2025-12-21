import { useEffect, useMemo, useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/profile.jpg";
import ContactCards from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import SkillsMarquee from "./SkillsMarquee";
import Footer from "../components/Footer"; 

import { Link } from "react-router-dom";
<a href="#contact" className="...">CONTACT ME</a>

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
    resume: "https://drive.google.com/file/d/1d60ctfGQpKWvjoGiE2UQb4FsG1B5jdSR/view?usp=sharing",
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
    <div className="mx-auto max-w-6xl px-6 lg:px-10 space-y-10 pb-16">
      <section id="home" className="scroll-mt-28">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
          {/* left hero text */}
          <div className="space-y-5">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Hey there, <br />
              I am{" "}
              <span className="text-indigo-700">RISHIKA SHIVANNA.</span>
              <br />
              {" "}
              <span className="text-emerald-700">Turning Ideas into Code.</span>
            </h1>

            <div className="flex items-center gap-4 text-zinc-600">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70"
              >
                <Linkedin className="h-6 w-6 text-indigo-700" />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70"
              >
                <Github className="h-6 w-6 text-zinc-900" />
              </a>
              <a href={LINKS.email} className="hover:opacity-70">
                <Mail className="h-6 w-6 text-emerald-700" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white
                           bg-gradient-to-r from-indigo-600 to-blue-600 shadow-sm hover:opacity-95 transition"
              >
                CONTACT ME
              </a>

              <a
  href={LINKS.resume}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white
             bg-gradient-to-r from-emerald-600 to-teal-600 shadow-sm hover:opacity-95 transition"
>
  GET RESUME <Download className="h-4 w-4" />
</a>

            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white/70 px-5 py-4 shadow-sm">
              <p className="text-sm text-zinc-700">
                <span className="text-zinc-400">status:</span>{" "}
                <span className="font-semibold text-zinc-900">{text}</span>
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

          {/* right code window */}
          <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-900 text-white shadow-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
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
                name: <span className="text-yellow-300">'Rishika Shivanna'</span>,
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
                problemSolver: <span className="text-emerald-300">true</span>,
              </div>

              <div className="pl-5 text-white/90">
                hireable: <span className="text-indigo-300">function</span>() {"{"}
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
      </section>

      {/* ABOUT  */}
      <section id="about" className="scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-5">
            <div className="text-emerald-700 font-extrabold tracking-wide">
              WHO AM I?
            </div>

            <div className="text-lg md:text-xl leading-relaxed text-zinc-800">
              <p>
                Hey, I’m{" "}
                <span className="font-extrabold text-indigo-700">
                  Rishika Shivanna
                </span>{" "}
                — a developer who gets obsessed with clean UI, strong architecture,
                and measurable impact.
              </p>
              <p className="mt-4">
                I’ve built projects across{" "}
                <span className="font-semibold">Full-Stack</span>,{" "}
                <span className="font-semibold">ML</span>, and{" "}
                <span className="font-semibold">systems</span> — focusing on
                performance, reliability, and “recruiter-friendly” results.
              </p>
              <p className="mt-4">
                I’m currently looking for opportunities where I can ship meaningful
                software and grow with a strong team.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
              <img
                src={profileImg}
                alt="Rishika Shivanna"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="absolute -right-3 top-16 rotate-90 origin-right">
              <div className="rounded-xl bg-zinc-900 text-white text-xs font-semibold px-4 py-2 shadow-sm">
                ABOUT ME
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
            {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Impact-first bullets with metrics."
      >
        <Experience />
      </Section>

      {/* ✅ SKILLS after experience */}
      <Section id="skills" title="Skills" subtitle="Tools I use to build & ship.">
        <SkillsMarquee />
      </Section>

      {/* ✅ PROJECTS after skills */}
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
  );
}
