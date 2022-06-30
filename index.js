const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonSender = require('./framework/middlewares/jsonSender');
const bodyJsonParser = require('./framework/middlewares/bodyJsonParser');
const urlParser = require('./framework/middlewares/urlParser');

const app = new Application();
const baseUrl = 'http://localhost:5000';

app.use(jsonSender);
app.use(bodyJsonParser);
app.use(urlParser(baseUrl));

app.addRouter(userRouter);

app.listen(5000, () => {
  console.log(`Server running at ${baseUrl}`);
});
