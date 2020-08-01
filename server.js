// import express (after npm install express)
const express = require('express');
const route = require('./routes/routes')
require('dotenv').config()

// create new express app and save it as "app"
const app = express();

app.use("/api",route)
// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// make the server listen to requests
app.listen(process.env.PORT, () => {
  console.log(`Server running at: http://localhost:${process.env.PORT}/`);
});