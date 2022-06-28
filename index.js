const http = require('http');
const { Router, emitter } = require('./framework/Router');

const router = new Router();

router.get('/users', (req, res) => {
  console.log('Request to users');
  res.end('Request to /users');
});
router.get('/posts', (req, res) => {
  console.log('Request to posts');
  res.end('Request to /posts');
});

const server = http.createServer(function (req, res) {
  const isEmitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
  if (!isEmitted) {
    res.end('Impossible url!');
  }
});

server.listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
