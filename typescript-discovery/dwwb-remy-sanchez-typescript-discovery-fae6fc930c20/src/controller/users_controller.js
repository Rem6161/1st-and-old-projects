//import the express modul 
const express = require("express");

//call my modul express
const app = express();

//make my road to users_models file
const usersModels = require("../models/users_models");

//exports my createUsers with request, response and next
exports.createUsers = (request, response, next) => {
    //
    const { email, password } = request.body;
    //in usersmodels, we create a new user with email and password
    usersModels.createUser(email, password);
    //if the user has been successly create => message "user created"
    response.status(201).json({
        "message": "user created !"
    })
}
//export my readDataAllUsers with request, response and next
exports.readAllUsers = (request, response, next) => {
    const users = usersModels.readDataAllUsers();
    response.status(200).json(users);
} //pass at "routes"

//exports my readDataWithId with request, response and next
exports.readUserById = (request, response, next) => {
    const id = parseInt(request.params.id);
    //get users in usersModels and take readdatawithid and get id 
    const users = usersModels.readDataWithId(id);
    // if user found also => response 200
    if (users) {
        response.status(200).json(users);
        //else user not found alors = error 404 
    } else {
        response.status(404).json({
            "message": "Try again !"
        })
    }
}

//exports my updateUser with request, response and next
exports.updateUser = (request, response, next) => {
    const { email, password } = request.body;
    const id = parseInt(request.params.id);
    //in usersmodels, we update an user (email or password)
    usersModels.updateUser(id, email, password);
    response.status(201).json({
        "message": "user updated !"
    })
}

exports.deleteUsers = (request, response, next) => {
    const id = parseInt(request.params.id);
    usersModels.deleteUsers(id);
    response.status(207).json({
        "message" : "user deleted !"
    })
}

//fonction qui va permettre a l'utilisateur de se connecter
exports.signIn = (request, response, next) => {
    //récupère les données écrites dans le body
    const {email , password} = request.body;
    //creation et assignement du token
    const token = usersModels.logIn(email, password);
    response.status(200).json({token: token})
}