import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
      transition={{ duration: 0.22 }}
    >
      {children}
    </motion.div>
  );
}

export default function EditorPanel() {
  const location = useLocation();

  return (
    <div className="flex-1 overflow-auto bg-zinc-950">
      <div className="absolute inset-0 bg-grid opacity-[0.12] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto p-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/projects" element={<Page><Projects /></Page>} />
            <Route path="/experience" element={<Page><Experience /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="/resume" element={<Page><Resume /></Page>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
