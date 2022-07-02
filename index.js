require('dotenv').config();
const Application = require('./framework/Application');
const jsonSender = require('./framework/middlewares/jsonSender');
const bodyJsonParser = require('./framework/middlewares/bodyJsonParser');
const urlParser = require('./framework/middlewares/urlParser');
const userRouter = require('./src/user-router');
const dbConnect = require('./src/db/dbConnect');

const app = new Application();
const baseUrl = `http://localhost:${process.env.PORT}`;

app.use(jsonSender);
app.use(bodyJsonParser);
app.use(urlParser(baseUrl));

app.addRouter(userRouter);

const start = async () => {
  try {
    await dbConnect();

    app.listen(process.env.PORT, () => {
      console.log(`Server running at ${baseUrl}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
