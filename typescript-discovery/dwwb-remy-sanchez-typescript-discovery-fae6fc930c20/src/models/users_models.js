//fs for manipulate objects (create, read, update and delete data)
const fs = require("fs");
//the path to database be able to use it 
const path = "./src/data/dataBase.json";
//call bcrypt module to crypt data
const bcrypt = require("bcrypt");
//call jwt module to use tokens
const jwt = require("jsonwebtoken");

//import and configure dotenv library
//dotenv loads environment varibale from the .env file
require("dotenv").config();

//start CRUD (create, read, update and delete)

//fonction qui sert à écrire les données
const writeData = (data) => {
    //permet d'écrire dans un fichier, puis spécifie l'endroit ou écrire
    //puis transforme la valeur javascript en chaine de caractères JSON
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
}

//fonction pour créer un nouvel utilisateur
exports.createUser = (email, pwd) => {
    //permet de lire dans le fichier, puis spécifie l'endroit ou lire, puis spécifie l'encodage
    const allUsers = fs.readFileSync(path, "utf8");
    //change les chaines de caractères JSON en valeur javascript
    const allUsersJson = JSON.parse(allUsers);
    //prend la longueur du tableau total et rajoute un pour donner un id au dernier utilisateur créé
    const id = allUsersJson.users.length + 1;
    //cryptage du mot de passe, et l'enregistre dans une nouvelle variable
    bcrypt.hash(pwd, 10).then(password => {
        //pousse toutes les données à la suite du tableau
        allUsersJson.users.push({
            id, email, password
        });
        //écrit les données dans le fichier JSON
        writeData(allUsersJson)
    })
}

//fonction pour lire tous les utilisateurs
exports.readDataAllUsers = () => {
    //permet de lire dans le fichier
    const allUsersData = fs.readFileSync(path, "utf8");
    //change my data in json data
    return JSON.parse(allUsersData).users;
} //pass at "controllers"

//read one user with id
exports.readDataWithId = (id) => {
    const allUsers = fs.readFileSync(path, "utf8");
    //change my data in json data
    const allUsersJson = JSON.parse(allUsers);
    //find users with id
    return allUsersJson.users.find(el => el.id === id);
} //pass at "controllers"

//update an user 
exports.updateUser = (id, email, password) => {
    const data = fs.readFileSync(path, "utf8");
    //change my data in json data
    const allUsers = JSON.parse(data);
    const users = allUsers.users.find(el => el.id === id);
    //user mail 
    users.email = email;
    users.password = password;
    writeData(allUsers);
}

//delete an user 
exports.deleteUsers = (id) => {
    const data = fs.readFileSync(path, "utf8");
    const allUsers = JSON.parse(data);
    const updateArray = allUsers.users.filter(el => el.id !== id);
    allUsers.users = updateArray;
    writeData(allUsers);
}


//log in
exports.logIn = (email, password) => {
    const data = fs.readFileSync(path, "utf8");
    const allUsers = JSON.parse(data);
    const users= allUsers.users.find(el => el.email === email);
    //compare le mot de passe donné avec le mot de passe dans la base de données
    const passwordOk = bcrypt.compareSync(password, users.password)
    //si mot de passe ok
    if (passwordOk) {
        //jwt génère un token
        const token = jwt.sign(users, process.env.JWT_TOKEN);
        return token
    } else {
        console.log("password not ok");
    }
}
