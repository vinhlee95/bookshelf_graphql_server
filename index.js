const express = require('express');
const schema = require('./schema/schema');
const { connectToDB } = require('./database');
const { ApolloEngine } = require("apollo-engine");
connectToDB();

const app = express();
schema.applyMiddleware({ app });


const engine = new ApolloEngine({
  apiKey: "service:vinhlee95-2446:K0i_jMHCuPwARoAAAQ0WkA"
});

// Call engine.listen instead of app.listen(port)
engine.listen({
  port: process.env.PORT || 4000 ,
  expressApp: app
});

