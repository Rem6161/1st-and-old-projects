//calls the bcrypt module
const bcrypt = require("bcrypt");
//links this file to the models file to manipulate it
const userModel = require("../models/auth_models");
//calls the jsonwebtoken module
const jwt = require("jsonwebtoken");

//function that will make the user sign up
exports.authSignUp = (request, response, next) => {
    //fetch user inputs from the body
    const {email, password} = request.body;
    //crypt the password to secure it
    bcrypt.hash(password, 10).then(newPassword => {
        //create the user in the database
        userModel.createUser(email, newPassword);
        //response if the user is succesfully created
        response.status(201).json({
            "message" : "User created"
        })
    }).catch(error => {
        //response if the user isn't created
        response.status(500).json({
            "message": "Error - Cannot create user",
            "error": error
        })
    });
}

//function that will make the user sign in
exports.authSignIn = (request, response, next) => {
    //fetch user inputs from the body
    const {email, password} = request.body;
    //aims for user email in database
    const user = userModel.getUserByEmail(email);
    //if user found
    if(user){
        //compare the password input with the password in database
        bcrypt.compare(password, user.password).then(passwordOkay => {
            //assign a user token to the connected user
            const token = jwt.sign(user, "SECRETKEY", {expiresIn: "1h"});
            //response if user found
            response.status(200).json({token: token})
        })
    //if user not found
    }else{
        //response if user not found
        response.status(404).json({
            "message": "User not found"
        })
    }
}