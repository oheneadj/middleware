// Import Express
const { Router } = require('express');
// Import Express index controller
const { greet, welcome } = require("../controller/index.controller");

const indexRouter = Router();

//Index Routes
indexRouter.get("/", welcome);
indexRouter.get("/greet", greet);


module.exports = indexRouter;