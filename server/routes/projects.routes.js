import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { readJson } from "../src/utils/readJson.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// points to: server/src/data/projects.json
const PROJECTS_PATH = path.join(__dirname, "../src/data/projects.json");

// GET /api/projects?tag=ML&featured=true
router.get("/", async (req, res, next) => {
  try {
    const all = await readJson(PROJECTS_PATH);

    let data = all;

    // optional query filters (no UI change needed)
    const { tag, featured } = req.query;

    if (tag) {
      data = data.filter((p) => (p.tags || []).some((t) => t.toLowerCase() === String(tag).toLowerCase()));
    }

    if (featured === "true") {
      data = data.filter((p) => p.featured === true);
    }

    res.json({
      ok: true,
      count: data.length,
      data
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/projects/:id
router.get("/:id", async (req, res, next) => {
  try {
    const all = await readJson(PROJECTS_PATH);
    const found = all.find((p) => p.id === req.params.id);

    if (!found) return res.status(404).json({ ok: false, message: "Project not found" });

    res.json({ ok: true, data: found });
  } catch (err) {
    next(err);
  }
});

export default router;
