import { qiospay } from "../../lib/qiospay.js";
import { auth } from "../../lib/auth.js";

export default async function handler(req, res) {
  if (!auth(req, res)) return;

  try {
    const r = await qiospay.get("/qris/status", {
      params: {
        username: process.env.QIOSPAY_USER,
        api_key: process.env.QIOSPAY_KEY,
        order_id: req.query.order_id
      }
    });
    res.json(r.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
