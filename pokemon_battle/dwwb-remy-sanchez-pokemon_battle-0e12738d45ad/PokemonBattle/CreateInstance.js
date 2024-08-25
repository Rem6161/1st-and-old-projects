

let pkm = new Pokemon(155);

// pkm.health = 2555;



console.log(pkm);


// console.log(pokemons);



// SHOW POKEMON IMAGE

function showPkmAvatar() {
    
    let pkmAvatar = document.createElement("IMG");
    pkmAvatar.setAttribute("src", pkm.avatar);
    pkmAvatar.setAttribute("alt", `${pkm.name}`);
    document.body.appendChild(pkmAvatar);

}

// onload="showPkmAvatar()";