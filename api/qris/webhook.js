export default async function handler(req, res) {
    console.log("WEBHOOK:", req.body);
  
    res.status(200).json({ success: true });
  }
  