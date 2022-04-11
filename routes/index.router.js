// Import Express
const { Router } = require('express');
// Import Express index controller
const { greet, welcome, protected } = require("../controller/index.controller");
const {authRequired} = require("../middleware/auth.middleware.js");

const indexRouter = Router();

//Middleware for index routes
indexRouter.use((req, res, next) => {
    console.log("This is a specific route")
    next();
})

//Index Routes
indexRouter.get("/", welcome);
indexRouter.get("/greet", greet);
indexRouter.post("/protected", authRequired, protected);


module.exports = indexRouter;