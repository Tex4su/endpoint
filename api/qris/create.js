import { qiospay } from "../../lib/qiospay.js";
import { auth } from "../../lib/auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  if (!auth(req, res)) return;

  const { order_id, amount } = req.body;

  try {
    const r = await qiospay.post("/qris/create", {
      username: process.env.QIOSPAY_USER,
      api_key: process.env.QIOSPAY_KEY,
      order_id,
      amount
    });

    res.json(r.data);
  } catch (e) {
    res.status(500).json({
      error: e.response?.data || e.message
    });
  }
}
