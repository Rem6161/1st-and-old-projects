//on utilise le module File System pour manipuler les dossiers
import fs from "fs";
//on importe bcrypt
import bcrypt from "bcrypt";

//on indique la route vers le fichier data.json
//string précise que le type de données retourné est une chaîne de caractères
const path: string = "./src/data/data.json";


//fonction pour créer un nouvel utilisateur
export function createUser(email: string, pwd: string): any {
    //permet de lire dans le fichier, puis spécifie l'endroit ou lire, puis spécifie l'encodage
    const allUsers: string = fs.readFileSync(path, "utf8");
    //change les chaines de caractères JSON en valeur javascript
    const allUsersJson: any = JSON.parse(allUsers);
    //prend la longueur du tableau total et rajoute un pour donner un id au dernier utilisateur créé
    const id: number = allUsersJson.users.length + 1;
    //cryptage du mot de passe, et l'enregistre dans une nouvelle variable
    bcrypt.hash(pwd, 10).then((password: string) => {
        //pousse toutes les données à la suite du tableau
        allUsersJson.users.push({
            id, email, password
        });
        //écrit les données dans le fichier JSON
        fs.writeFileSync(path, JSON.stringify(allUsersJson, null, 2));
    })
}

//fonction qui sert à lire tous les users dans data.json
//any permet le retour de n'importe quel type données
export function getAllUsers(): any {
    //lit le fichier data.json
    //string précise que le type de données retourné est une chaîne de caractères
    const data: string = fs.readFileSync(path, "utf8");
    //si il n'y a pas de données
    if(!data){
        //affiche les données dans le terminal
        console.log(data);
        //retourne une valeur nulle
        return null;
    }
    //transforme les chaines de caractères en objet
    return JSON.parse(data).users;
}

