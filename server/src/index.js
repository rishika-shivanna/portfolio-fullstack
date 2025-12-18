import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoutes from "../routes/health.routes.js";
import projectsRoutes from "../routes/projects.routes.js";
import { errorHandler } from "../middleware/errorHandler.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

// middleware
app.use(express.json());
app.use(cors({ origin: CLIENT_ORIGIN }));

// routes
app.get("/", (req, res) => {
  res.json({ ok: true, message: "Portfolio API running" });
});

app.use("/api/health", healthRoutes);
app.use("/api/projects", projectsRoutes);

// error middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ API listening on http://localhost:${PORT}`);
});
