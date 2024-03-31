export function error404(req, res) {
  res.status(404).json("Not found! Try again");
}
