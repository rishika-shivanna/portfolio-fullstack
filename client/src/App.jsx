import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import TopTabs from "./components/TopTabs";
import EditorPanel from "./components/EditorPanel";
import StatusBar from "./components/StatusBar";

export default function App() {
  const ROUTES = useMemo(
    () => ({
      home: { id: "home", label: "home.tsx", path: "/" },
      experience: { id: "experience", label: "experience.tsx", path: "/experience" },
      projects: { id: "projects", label: "projects.tsx", path: "/projects" },
      contact: { id: "contact", label: "contact.tsx", path: "/contact" },
    }),
    []
  );

  const files = useMemo(() => Object.values(ROUTES), [ROUTES]);

  const navigate = useNavigate();
  const location = useLocation();

  const [openTabs, setOpenTabs] = useState([ROUTES.home, ROUTES.projects]);

  // active tab is derived from URL
  const activeId = useMemo(() => {
    const match = files.find((f) => f.path === location.pathname);
    return match?.id ?? "home";
  }, [location.pathname, files]);

  // ensure route is present as a tab when user navigates
  useEffect(() => {
    const current = files.find((f) => f.id === activeId);
    if (!current) return;
    setOpenTabs((prev) => (prev.some((t) => t.id === current.id) ? prev : [...prev, current]));
  }, [activeId, files]);

  function openFile(file) {
    // open tab + navigate
    setOpenTabs((prev) => (prev.some((t) => t.id === file.id) ? prev : [...prev, file]));
    navigate(file.path);
  }

  function changeTab(id) {
    const file = files.find((f) => f.id === id);
    if (file) navigate(file.path);
  }

  function closeTab(id) {
    setOpenTabs((prev) => prev.filter((t) => t.id !== id));

    // if closing active tab, move to last remaining tab (or home)
    if (id === activeId) {
      const remaining = openTabs.filter((t) => t.id !== id);
      const next = remaining[remaining.length - 1] ?? ROUTES.home;
      navigate(next.path);
    }
  }

  return (
    <div className="h-screen w-screen text-zinc-100">
      {/* Top “studio” bar (more colorful than VS Code) */}
      <div className="h-10 flex items-center px-3 border-b border-zinc-800
                      bg-gradient-to-r from-zinc-950 via-zinc-950 to-zinc-900">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>

        <div className="mx-auto text-xs text-zinc-400">
          Rishika Shivanna - Portfolio
        </div>

        <div className="text-[11px] text-zinc-500">v0.2 </div>
      </div>

      <div className="flex h-[calc(100vh-2.5rem)]">
        <Sidebar files={files} activeId={activeId} onOpenFile={openFile} />

        <main className="flex-1 flex flex-col">
          <TopTabs
            tabs={openTabs}
            activeId={activeId}
            onChange={changeTab}
            onClose={closeTab}
          />

          <EditorPanel />

          <StatusBar />
        </main>
      </div>
    </div>
  );
}
