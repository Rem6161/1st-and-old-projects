const baseUrl = "https://swapi.dev/api/";

const getPeople = async () => {
    try {
        let response = await fetch(baseUrl + "people");
        let data = await response.json();
        let peoples = data.results;

        peoples.forEach(personData => {
            const people = new People(personData);
            console.log(people.displayBaseInfo());
        })
    } catch (error) {
        console.log(error);
    }
}