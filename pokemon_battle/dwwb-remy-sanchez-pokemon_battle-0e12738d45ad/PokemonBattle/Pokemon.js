class Pokemon {

    // ATTRIBUTES

    #id;
    _name;
    _avatar;
    #health;
    _attack;
    _defense;

    static MAX_HEALTH = 100;
    static MIN_HEALTH = 0;


    // MAGIC METHODS

    constructor(pokemonId) {

        this.#id = pokemonId;
        this._name = pokemons[this.#id - 1].name;
        this._avatar = pokemons[this.#id - 1].image;
        this.#health = pokemons[this.#id - 1].stats.HP;
        this._attack = pokemons[this.#id - 1].stats.attack;
        this._defense = pokemons[this.#id - 1].stats.defense;

    }


    // GETTERS AND SETTERS

    get id() {

        return this.#id

    }

    set id(new_id) {

        if (typeof(new_id) === "number") {
            
            this.#id = new_id;

        } else {

            console.error("ERROR, new_id MUST BE A NUMBER");

        }

    }



    get name() {

        return this._name

    }
    
    set name(new_name) {

        if (typeof(new_name) === "string") {
            
            this._name = new_name;

        } else {

            console.error("ERROR, new_name MUST BE A STRING");

        }
        
    }
    

    get avatar() {

        return this._avatar

    }

    set avatar(new_avatar) {

        if (typeof(new_avatar) === "string") {
            
            this._avatar = new_avatar;

        } else {

            console.error("ERROR, new_avatar MUST BE A STRING");

        }
        
    }


    get health() {

        return this.#health

    }

    set health(new_health) {

        if (typeof(new_health) === "number") {
            
            this.#health = new_health;

        } else {

            console.error("ERROR, new_health MUST BE A NUMBER");

        }
        
    }




    get attack() {

        return this._attack

    }

    set attack(new_attack) {

        if (typeof(new_attack) === "number") {
            
            this._attack = new_attack;

        } else {

            console.error("ERROR, new_attack MUST BE A NUMBER");

        }

    }




    get defense() {

        return this._defense

    }

    set defense(new_defense) {

        if (typeof(new_defense) === "number") {
            
            this._defense = new_defense;

        } else {

            console.error("ERROR, new_defense MUST BE A NUMBER");

        }

    }




    // get MAX_HEALTH() {

    //     return this.MAX_HEALTH

    // }

    // set MAX_HEALTH(new_MAX_HEALTH) {

    //     if (typeof(new_MAX_HEALTH) === "number") {
            
    //         this.MAX_HEALTH = new_MAX_HEALTH;

    //     } else {

    //         console.error("ERROR, new_MAX_HEALTH MUST BE A NUMBER");

    //     }

    // }




    // get MIN_HEALTH() {

    //     return this.MIN_HEALTH

    // }

    // set MIN_HEALTH(new_MIN_HEALTH) {

    //     if (typeof(new_MIN_HEALTH) === "number") {
            
    //         this.MIN_HEALTH = new_MIN_HEALTH;

    //     } else {

    //         console.error("ERROR, new_MIN_HEALTH MUST BE A NUMBER");

    //     }

    // }

    // METHODS



}