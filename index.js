const Application = require('./framework/Application');
const userRouter = require('./src/user-router');

const app = new Application();

app.addRouter(userRouter);

app.listen(5000, () => {
  console.log('Server running at http://127.0.0.1:5000/');
});
