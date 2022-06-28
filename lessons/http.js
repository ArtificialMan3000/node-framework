const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html; charset=utf-8',
  });
  if (req.url === '/') {
    res.write('This is MAIN page\n');
  } else if (req.url === '/users') {
    res.write('This is USERS page\n');
  } else if (req.url === '/posts') {
    res.write('This is POSTS page\n');
  } else {
    res.write('This is 404 page\n');
  }
  res.write(`<div>Responce writing</div>`);
  res.end(JSON.stringify({ id: 1, name: 'Site name' }), () =>
    console.log('Responce is ended')
  );
});

server.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});

console.log('Script completed');
