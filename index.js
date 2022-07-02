const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonSender = require('./framework/middlewares/jsonSender');
const bodyJsonParser = require('./framework/middlewares/bodyJsonParser');
const urlParser = require('./framework/middlewares/urlParser');

dotenv.config();

const app = new Application();
const baseUrl = `http://localhost:${process.env.PORT}`;
const dbPath = `mongodb://admin:admin@${process.env.DB_HOST}:${process.env.DB_PORT}/admin`;

app.use(jsonSender);
app.use(bodyJsonParser);
app.use(urlParser(baseUrl));

app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(dbPath, { dbName: 'node_course' });
    console.log(`Connected with database at ${dbPath}`);

    app.listen(process.env.PORT, () => {
      console.log(`Server running at ${baseUrl}`);
    });
  } catch (err) {
    console.log('Connection failed:', err);
  }
};

start();