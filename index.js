const Application = require('./framework/Application');
const Router = require('./framework/Router');

const app = new Application();
const router = new Router();

router.get('/users', (req, res) => {
  res.end('Request to /users');
});
router.get('/posts', (req, res) => {
  res.end('Request to /posts');
});

app.addRouter(router);

app.listen(5000, () => {
  console.log('Server running at http://127.0.0.1:5000/');
});
