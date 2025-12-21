import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";

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
    <div className="flex-1 overflow-auto">
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home jump="home" /></Page>} />
            <Route path="/projects" element={<Page><Home jump="projects" /></Page>} />
            <Route path="/experience" element={<Page><Home jump="experience" /></Page>} />
            <Route path="/education" element={<Page><Home jump="education" /></Page>} />
            <Route path="/contact" element={<Page><Home jump="contact" /></Page>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
