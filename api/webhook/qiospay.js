export default async function handler(req, res) {
    if (req.headers["x-webhook-secret"] !== process.env.WEBHOOK_SECRET) {
      return res.status(401).json({ message: "Invalid webhook" });
    }
  
    const trx = req.body;
  
    if (trx.status === "PAID") {
      console.log("PAID:", trx.order_id);
      // update database / kirim produk
    }
  
    res.json({ success: true });
  }
  