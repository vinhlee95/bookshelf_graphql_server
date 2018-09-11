const express = require('express');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
schema.applyMiddleware({ app });

mongoose.Promise = global.Promise;

let mongoUserCredentials = '';
if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
  mongoUserCredentials = `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@`;
}

const MONGO_URL = process.env.MONGO_URL || 'localhost:27017';
const DB_NAME = process.env.MONGO_DB_NAME || 'sample-db';
const MONGO_CONNECTION_STRING = `mongodb://${mongoUserCredentials}${MONGO_URL}/${DB_NAME}`;

await mongoose.connect(MONGO_CONNECTION_STRING);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started on port: ${process.env.PORT || 4000}`);
});
