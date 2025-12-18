import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "portfolio-api",
    time: new Date().toISOString()
  });
});

export default router;
