//this script will run before the user will have access to the page
$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    //gets the string id that is following the "?" in the url
    let id = urlParams.get('id');
   
//Code for Character page
const loadPeople = () => {
    $.ajax({
        //retrieving data from the api
        //there, the id is set so the page will change all the data in people.html so that it corresponds to the people corresponding number
        url: `https://swapi.dev/api/people/${id}`,
        //if the data is successfully loaded, then apply the function
        success: data => {
            //this class's text will be the name of the character
            $('.characterName').text(data.name);
            //this class's text will be the height of the character
            $('.characterHeight').text(`Height: ${data.height} cm`);
            //this class will carry the data with the key name 'url' and it's value is data.homeworld
            $('.characterPlanet').data('url', data.homeworld);
        }
    })
} 

//set url as parameter
const loadPlanet = (url) => {
    $.ajax({
        //specify that the parameter will be the data with the key name 'url' previously created
        url: url,
        success: data => {
            //retrieve the number that identify planet from the api url
            let planetId = url.split('/').slice(-2, -1)[0];
            //change the url of the current url
            window.location.href = `planets.html?id=${planetId}`;
        }
    })
}

$('.characterPlanet').click(function(event){
    event.preventDefault();
    loadPlanet($(this).data('url'));
})



$("#nextCharacter").on("click", function(event) {
    event.preventDefault();
    id++; 
    loadPeople();
  } );

$("#previousCharacter").on("click", function(event) {
    event.preventDefault();
    id--; 
    loadPeople();
  } );


  loadPeople();

})