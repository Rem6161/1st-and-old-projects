//calls the file system (fs) module to manipulate files
const fs = require("fs");
//calls the bcrypt module
const bcrypt = require("bcrypt");
//calls the jwt module
const jwt = require("jsonwebtoken");
//links this file to the data file to manipulate it
const path = "../data/data.json";

//function to encrypt password
exports.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

//function to generate a token
exports.generateToken = (userId) => {
    //
    return jwt.sign({id: userId}, secret, {expiresIn: '1h'});
}

//function to read data from the data.json
const readData = () => {
    //read the entire file data.json
    const data = fs.readFileSync(path, "utf8");
    //turns a JSON string into an object
    return JSON.parse(data);
}

//function used to write data
const writeData = (data) => {
    //write the data manipulated into the data.json file
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
}

//function used to return the array of all users as objects
exports.readUser = () => {
    return readData().user;
}

//function used to return an user by it's id
exports.getUserById = (id) => {
    //gets the array of users
    const user = readData().user;
    //searches for each element in the array if it's id is corresponding to the parameter id
    return user.find(user => user.id === id)
}

//function used to create an account for user
exports.signUp = (email, password) => {
    //getting the data from the data.json file
    const data = readData();
    //add an id to the user
    const id = data.user.length + 1;
    //crypt the password of the user
    password = this.hashPassword(password);
    //push all infos in next object of the array
    data.user.push({
        id, email, password
    });
    //rewrite the file
    writeData(data);
    //return the id of user
    return id;
}

//function used to get an user by its email
exports.getUserByEmail = (email) => {
    //aim for the user array
    const user = readData().user;
    //find the right user by comparing the email input with the coressponding user email in the user array
    return user.find(user => user.email === email);
}

//function used to create a new user
exports.createUser = (email, password) => {
    //getting the data from the data.json file
    const data = readData();
    //add an id to the user
    const id = data.user.length + 1;
    //push all infos in next object of the array
    data.user.push({
        id, email, password
    });
    //rewrite the file
    writeData(data);
    //return the id of user
    return id;
}

exports.signIn = (email, password) => {
    //getting the data from the data.json file
    const data = fs.readFileSync(path, "utf8");
    //aim for the user array
    const allUser = JSON.parse(data).user;
    //aim for the user email in the array that corresponds to the user input
    const user = allUser.find(user => user.email === email);
    //aim for that user password in the array
    const userPassword = user.password;
    //crypt the password of the user input
    password.hashPassword(password);
    //compare the user input password with the password in the database
    bcrypt.compareSync(password, userPassword);
}

//function that will be used to update an user information
exports.updateUser = (id, email, password) => {
    //getting the data from the data.json file
    const data = fs.readFileSync(path, "utf8");
    //turns a JSON string into an object
    const allUser = JSON.parse(data);
    //aim for the corresponding user id
    const user = allUser.user.find(user => user.id === id);
    //change his mail in database
    user.email = email;
    //change his password in database and encrypt it
    user.password = password.hashPassword(password);
    //rewrite the file
    writeData(allUser);
}

//function to delete user
exports.deleteUser = (id) => {
    //getting the data from the data.json file
    const data = fs.readFileSync(path, "utf8");
    //turns a JSON string into an object
    const allUser = JSON.parse(data);
    //returns all users that have not the id provided as parameter
    const updatedArray = allUser.user.filter(user => user.id !== id);
    //the new array user will be the filtered one
    allUser.user = updatedArray;
    //rewrite the file
    writeData(allUser);
}
