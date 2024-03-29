module.exports = (err, _req, res, _next) => {
  const { message, code } = err;

  if (Number(code)) {
    return res.status(code).json({ message });
  }

  return res.status(500).json({ message });
};