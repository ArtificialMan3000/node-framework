module.exports = (baseUrl) => (req) => {
  const parsedUrl = new URL(req.url, baseUrl);
  req.parsedUrl = parsedUrl;
};
