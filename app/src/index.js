import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ ok: true, message: "devops-lab-final running" });
});

app.get("/test-db", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW() as now");
    res.json({ now: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: "DB connection failed", details: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

