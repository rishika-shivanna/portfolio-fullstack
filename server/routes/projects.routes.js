import express from "express";
import { projects } from "../data/projects.js";

const router = express.Router();

// GET /api/projects
router.get("/", (req, res) => {
  res.json({ ok: true, count: projects.length, data: projects });
});

// GET /api/projects/:id
router.get("/:id", (req, res) => {
  const found = projects.find((p) => p.id === req.params.id);
  if (!found) return res.status(404).json({ ok: false, message: "Project not found" });
  res.json({ ok: true, data: found });
});

export default router;
