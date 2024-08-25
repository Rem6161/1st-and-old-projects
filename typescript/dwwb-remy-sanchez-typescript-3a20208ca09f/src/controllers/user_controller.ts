//importe les fonctions requêtes et réponses d'express
import {Request, Response} from 'express';

//importe la fonction getAllUsers d'user_model
import { getAllUsers } from '../models/user_model';

//créé et exporte la fonction pour lire l'ensemble des users
//void précise que la fonction sera un traitement de données
export function readAllUsers(req: Request, res: Response): void {
    //any précise que tous les types de données seront acceptées
    const allUsers: any = getAllUsers();
    //si le nombre d'entrées du tableau user est inférieur ou égal à 0 
    if(allUsers <= 0) {
        //renvoie une réponse négative avec un code 404
        res.status(404).json({
            message: "not found"
        })
    }
    //sinon une réponse positive, et envoie les données de allUsers en json
    res.status(200).json(allUsers);
}