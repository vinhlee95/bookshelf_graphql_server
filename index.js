const express = require('express');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
schema.applyMiddleware({ app });

mongoose.connect("mongodb://vinhlee95:supercrv95@ds261755.mlab.com:61755/book_graphql", { useNewUrlParser: true })
      .then(() => console.log('Connected to mLab'))
      .catch(err => console.log(err));

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started on port: ${process.env.PORT || 4000}`);
});
