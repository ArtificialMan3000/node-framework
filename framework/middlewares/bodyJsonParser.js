module.exports = (req, res) => {
  try {
    req.bodyParsed = JSON.parse(req.body);
  } catch (err) {
    req.bodyParsed = { parseError: err.toString() };
  }
};
