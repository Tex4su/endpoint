export function auth(req, res) {
    if (req.headers.authorization !== process.env.API_KEY) {
      res.status(401).json({ message: "Invalid API Key" });
      return false;
    }
    return true;
  }
  