module.exports = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.sendJson = (data) => {
    res.write(JSON.stringify(data));
  };
};
