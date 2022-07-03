const Router = require('../framework/Router');
const { getUsers, createUser } = require('./user-controller');

const router = new Router();

router.get('/users', (req, res) => {
  getUsers(req, res);
  res.end();
});

router.post('/users', (req, res) => {
  createUser(req, res);
  res.end();
});

module.exports = router;
