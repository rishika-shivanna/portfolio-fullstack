export default function Navbar() {
  const links = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
    { id: "contact", label: "CONTACT" },
  ];

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="h-16 flex items-center">
          {/* left */}
          <button
            onClick={() => scrollTo("home")}
            className="font-extrabold text-indigo-700 text-lg tracking-tight"
          >
            Rishika Shivanna
          </button>

          {/* center */}
          <nav className="mx-auto hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-700">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="hover:text-indigo-700 transition"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* right spacer to keep nav truly centered */}
          <div className="w-[170px] hidden md:block" />
        </div>
      </div>
    </header>
  );
}
