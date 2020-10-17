export default function exho(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ message: req.query.message ?? "base message" }));
}
