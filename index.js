// Import Express
const express = require('express');

// Import Routers
const indexRouter = require('./routes/index.router');
const authRouter = require('./routes/auth.router');

const app = express();
app.use(express.json());

//Middleware
app.use((req, res, next) => {
    console.log('Global Middleware');
    next();
})

//Use Routers
app.use("/", indexRouter);
app.use("/auth", authRouter);



// Set PORT number
const port = 4000;

// Listen to port for server
app.listen(port, ()=> console.log(`🚀 Server Running on PORT:${port} `));