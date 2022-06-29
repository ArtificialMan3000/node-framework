const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');

const app = new Application();

app.use(jsonParser);
app.addRouter(userRouter);

app.listen(5000, () => {
  console.log('Server running at http://127.0.0.1:5000/');
});
