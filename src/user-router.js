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

router.get('/users', (req, res, searchParams) => {
  const userIdParam = searchParams.get('id');
  if (userIdParam) {
    const user = users.find((user) => user.id === Number(userIdParam));

    if (user) {
      res.sendJson(user);
    } else {
      res.write('Have not user with that id');
    }
  } else {
    res.sendJson(users);
  }
  res.end();
});

router.post('/users', (req, res) => {
  const user = req.bodyParsed;
  users.push(user);
  res.sendJson(users);
  res.end();
});

module.exports = router;
