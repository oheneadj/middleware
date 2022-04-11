// Import Express
const express = require('express');

// Import Index Router
const indexRouter = require('./routes/index.router');

const app = express();

//Use index Router
app.use("/", indexRouter);

// Set PORT number
const port = 4000;

// Listen to port for server
app.listen(port, ()=> console.log(`🚀 Server Running on PORT:${port} `));