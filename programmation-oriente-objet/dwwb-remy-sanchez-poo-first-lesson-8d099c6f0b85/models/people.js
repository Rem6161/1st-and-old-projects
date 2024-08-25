class People {
    constructor(
        data
        ){
            this.name = data.name || "";
            this.height = data.height || "";
            this.mass = data.mass || "";
            this.hair_color = data.hair_color || "";
            this.skin_color = data.skin_color || "";
            this.eye_color = data.eye_color || "";
            this.birth_year = data.birth_year || "";
            this.gender = data.gender || "";
        }

    displayBaseInfo() {
        return `My name is ${this.name}, je mesure ${this.height}, je pèse ${this.mass}`;
    }
}