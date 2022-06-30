const dotenv = require('dotenv');
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonSender = require('./framework/middlewares/jsonSender');
const bodyJsonParser = require('./framework/middlewares/bodyJsonParser');
const urlParser = require('./framework/middlewares/urlParser');

dotenv.config();

const app = new Application();
const baseUrl = `http://localhost:${process.env.PORT}`;

app.use(jsonSender);
app.use(bodyJsonParser);
app.use(urlParser(baseUrl));

app.addRouter(userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${baseUrl}`);
});
