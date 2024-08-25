//this script will run before the user will have access to the page
$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    //gets the string id that is following the "?" in the url
    let id = urlParams.get('id');
   


const loadPlanets = () => {
    $.ajax({
        url: `https://swapi.dev/api/planets/${id}`, 
        success: data => {
            $('.planetName').text(data.name);
            $('.planetTerrain').text(data.terrain);
        }
    })
} 

loadPlanets();

$("#nextPlanet").on("click", function(event) {
    event.preventDefault();
    id++; 
    loadPlanets();
  } );

$("#previousPlanet").on("click", function(event) {
    event.preventDefault();
    id--; 
    loadPlanets();
  } );

  })