//ajoute le middleware express pour pouvoir manipuler les requêtes réponses pour manipuler les données
import express, { Request, Response, Express } from 'express';

//ajoute la librarie dans une variable
const app: Express = express();
//définit le port
const port: number = 3000;

//ajoute les chemins
import { routerUser } from './routes/user_routes';

//dit à l'application d'utiliser le chemin pour executer les requêtes
app.use("/user", routerUser);

//sert à écouter les connexions sur l'hôte et plus particulièrement sur le port spécifié
app.listen(port, (): void => {
    console.log("L'application tourne sur le port " + 3000)
})
