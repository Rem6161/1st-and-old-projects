//import express modul 
const express = require("express");

//link router with express
const router = express.Router();

//create the road to my users controller
const usersController = require("../controller/users_controller");

const verifToken = require('../middlewares/verif_token');

//router 
router.post("/create/", usersController.createUsers);
router.get("/read", usersController.readAllUsers);
router.get("/read/:id", usersController.readUserById);
router.put("/:id", verifToken, usersController.updateUser);
router.delete("/:id", verifToken, usersController.deleteUsers);
router.post("/signIn", usersController.signIn);


//for call the module exports 
module.exports = router;

