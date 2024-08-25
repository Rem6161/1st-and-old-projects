//ajoute le middleware express pour pouvoir manipuler les requêtes réponses pour manipuler les données
const express = require("express");

//ajoute la librarie dans une variable
const app = express();

//ajoute body parser pour parser une requête http
const bodyParser = require("body-parser");

//ajoute les chemins
const usersRoutes = require("./src/routes/users_routes");
const verifToken = require('./src/middlewares/verif_token');

//dit à l'application de se servir de body-parser
app.use(bodyParser.json());

//dit à l'application d'utiliser le chemin pour executer les requêtes
app.use("/users", usersRoutes);


// app.get('/test-security', verifToken, (request, response, next) => {
//     response.json({ message: "Security test passed" })
// })


//sert à écouter les connexions sur l'hôte et plus particulièrement sur le port spécifié
app.listen(3000, () => {
    console.log("the server is running on the port 3000");
})