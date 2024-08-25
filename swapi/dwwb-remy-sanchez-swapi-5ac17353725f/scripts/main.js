id = 1

const loadPeople = () => {
    $.ajax({
        //Retrieve the data of the page
        url: `https://swapi.dev/api/people/?page=${id}`,
        success: data => {




//create an array with 10 div max inside and repeat

//for each id, create a div inside the div set
//j.query each documentation

//when the number of div created reaches 10, create a new set of div







        }
    })
} 

$("#nextPage").on("click", function(event) {
    event.preventDefault();
    id++; 
    loadPeople();
  } );

$("#previousPage").on("click", function(event) {
    event.preventDefault();
    id--; 
    loadPeople();
  } );


  loadPeople();




