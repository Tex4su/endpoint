import { qiospay } from "../lib/qiospay.js";
import { auth } from "../lib/auth.js";

export default async function handler(req, res) {
  if (!auth(req, res)) return;

  try {
    const r = await qiospay.get("/profile", {
      params: {
        username: process.env.QIOSPAY_USER,
        api_key: process.env.QIOSPAY_KEY
      }
    });
    res.json(r.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
