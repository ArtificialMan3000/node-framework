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
  res.sendJson(users);
  res.end();
});

router.post('/users', (req, res) => {
  const data = req.read();
  console.log(data);
  res.sendJson(users);
  res.end();
});

module.exports = router;
