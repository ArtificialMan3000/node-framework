const mongoose = require('mongoose');

const dbPath = `mongodb://admin:admin@${process.env.DB_HOST}:${process.env.DB_PORT}`;

const dbConnect = async () => {
  await mongoose.connect(dbPath, { dbName: process.env.DB_NAME });
  console.log(`Connected with database at ${dbPath}`);
};

module.exports = dbConnect;
