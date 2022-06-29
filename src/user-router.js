const Router = require('../framework/Router');

const router = new Router();

const users = [
  {
    id: 1,
    name: 'Petya',
  },
  {
    id: 2,
    name: 'Vasia',
  },
];

router.get('/users', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(users));
});

router.post('/users', (req, res) => {
  const data = req.read();
  console.log(data);
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(users));
});

module.exports = router;
