const Router = require('../framework/Router');
const { getUsers, createUser } = require('./user-controller');

const router = new Router();

router.get('/users', async (req, res) => {
  await getUsers(req, res);
  res.end();
});

router.post('/users', async (req, res) => {
  await createUser(req, res);
  res.end();
});

module.exports = router;
