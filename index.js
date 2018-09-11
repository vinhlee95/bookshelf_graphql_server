const express = require('express');
const schema = require('./schema/schema');
const { connectToDB } = require('./database');
const { ApolloEngine } = require('apollo-engine');
const engine = new ApolloEngine();


const app = express();
schema.applyMiddleware({ app });

connectToDB().then(() => console.log('Connected to db'))
              .catch(err => console.log(err));


const PORT = process.env.PORT || 3000;

engine.listen({
  port: PORT,
  expressApp: app
}, () => {
  console.log(`Server running on port ${PORT}!`);
});
