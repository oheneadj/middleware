// Imports 
const { Router } = require('express');
const { login, register } = require("../controller/auth.controller");

const authRouter = Router();

// Routes
authRouter.get("/login", login);
authRouter.get("/register", register);

module.exports = authRouter;
