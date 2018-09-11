const express = require('express');
const schema = require('./schema/schema');
const { connectToDB } = require('./database');

const app = express();
schema.applyMiddleware({ app });

connectToDB();


schema.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
