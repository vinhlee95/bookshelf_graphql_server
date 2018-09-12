const express = require('express');
const schema = require('./schema/schema');
const { connectToDB } = require('./database');
const cors = require('cors');

connectToDB();

const app = express();
app.use(cors());
schema.applyMiddleware({ app });


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

