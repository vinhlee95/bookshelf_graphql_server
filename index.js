const express = require('express');
const schema = require('./schema/schema');
const { connectToDB } = require('./database');

const app = express();
schema.applyMiddleware({ app });

connectToDB();


app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started on port: ${process.env.PORT || 4000}`);
});
