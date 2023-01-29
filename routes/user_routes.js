const express = require("express");
const UserModel = require("../models/userSchema")

const SignupRouter = express.Router();
const Validator = require("../utils/validator");

const RegisterUser = require("../controllers/registerUser")
SignupRouter.post("/signup", RegisterUser);
const loginUser = require("../controllers/loginuser");
SignupRouter.post("/login", loginUser);


module.exports = SignupRouter;