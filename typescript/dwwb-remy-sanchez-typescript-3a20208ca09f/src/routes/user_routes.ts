//importe la fonctionnalité router du module express
import { Router } from "express";

//importe la fonction readAllUsers de user_controller
import { readAllUsers } from "../controllers/user_controller";


//déclare la constante routerUser dans laquelle on stocke le retour de la fonction router
//Router précise que la donnée sera un router
export const routerUser: Router = Router();
//on utilise la méthode de requête http get pour récuperer le retour de la fonction dont l'URL est défini sur /users
routerUser.get("/users", readAllUsers);