import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { readJson } from "../src/utils/readJson.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOG_PATH = path.join(__dirname, "../src/data/eventlog.json");

router.post("/", async (req, res, next) => {
  try {
    const entry = {
      type: req.body?.type || "unknown",
      meta: req.body?.meta || {},
      createdAt: new Date().toISOString(),
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      ua: req.headers["user-agent"] || ""
    };

    const current = await readJson(LOG_PATH);
    current.push(entry);
    await fs.writeFile(LOG_PATH, JSON.stringify(current, null, 2), "utf-8");

    res.json({ ok: true });
  } catch (e) {
    next(e);
  }
});

export default router;
