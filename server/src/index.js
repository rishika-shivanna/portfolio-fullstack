import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoutes from "../routes/health.routes.js";
import projectsRoutes from "../routes/projects.routes.js";
import logRoutes from "../routes/log.routes.js";
import { errorHandler } from "../middleware/errorHandler.js";
import { env } from "./config/env.js";
import { requestLogger } from "./utils/logger.js";

dotenv.config();

const app = express();

const PORT = env.PORT || 5000;
const CLIENT_ORIGIN = env.CLIENT_ORIGIN || "http://localhost:5173";

// ✅ CORS must be BEFORE routes
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Express 5: DO NOT use "*" here. Use regex instead:
app.options(/.*/, cors());

app.use(express.json());
app.use(requestLogger);

// routes
app.get("/", (req, res) => res.json({ ok: true, message: "Portfolio API running" }));
app.use("/api/health", healthRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/log", logRoutes);

// error middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
  console.log(`CORS allowed origin: ${CLIENT_ORIGIN}`);
});
