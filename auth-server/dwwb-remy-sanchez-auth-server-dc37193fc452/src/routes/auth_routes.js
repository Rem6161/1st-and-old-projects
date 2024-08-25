//add the express dependency to the file
const express = require("express");
//creating a new router object, that will be used to handle requests
const router = express.Router();
//link the controller to this file
const authController = require("../controllers/auth_controller")

//REQUESTS
router.post("/signup", authController.authSignUp);
router.post("/signin", authController.authSignIn);

//exporting all requests
module.exports = router;