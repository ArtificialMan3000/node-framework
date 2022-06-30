const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonSender = require('./framework/middlewares/jsonSender');
const bodyJsonParser = require('./framework/middlewares/bodyJsonParser');

const app = new Application();

app.use(jsonSender);
app.use(bodyJsonParser);
app.addRouter(userRouter);

app.listen(5000, () => {
  console.log('Server running at http://127.0.0.1:5000/');
});
