/*

//fonction dark mode
//theme
let theme = true;
//body
const body = document.querySelector("body");
//color 1
const color1 = "#FFFFFF";
//color 2
const color2 = "#000000";
//if theme == light appli for body color background 1 and the police color 2
/*console.log(theme)
const switchMode = () => {
    if (theme == false) {
        console.log(theme)
        body.style.backgroundColor = color1;
        body.style.color = color2;
        theme = true;
    } else {
        body.style.background = color2;
        body.style.color = color1;
        theme = false;
    }
}
//else body color background 2 and color police color 1
//body color 2
//body police color 1*/
/*
const switchMode = () => {
    // change theme mode
    theme = !theme;
    //background color for light theme
    const bgLight = document.getElementById('bg-light').value;
    //text color for light theme
    const textLight = document.getElementById('text-light').value;
    // background color for dark theme
    const bgDark = document.getElementById('bg-dark').value;
    //text color for dark theme
    const textDark = document.getElementById('text-dark').value;
    //change background color
    body.style.backgroundColor = theme ? bgLight : bgDark;
    //change text color
    body.style.color = theme ? textLight : textDark;
}
// pseudo code
//fonction title text
const createAndDisplayDiv = () => {
    //create div h1 & p
    const div = document.createElement("div");
    const title = document.createElement("h1");
    const p = document.createElement("p");
   
    //get value for the content
    const titleValue = document.getElementById("title").value;
    const textValue = document.getElementById("text").value;
    // Create content
    const textTitle = document.createTextNode(titleValue);
    const textP = document.createTextNode(textValue);
    // add content to dynamics elements
    title.appendChild(textTitle);
    p.appendChild(textP);
    // add to the div the dynamics elements
    div.appendChild(title);
    div.appendChild(p);
    
    // stylish div
    div.style.border = "1px solid black"
    //display div
    const currentDiv = document.getElementById("current-div");
    body.insertBefore(div, currentDiv);
    //unset variable
}



let theme = false;
const switchMode = () => {
    theme = !theme;
    const mode = theme ? 'light' : 'dark';
    document.body.style.backgroundColor = document.getElementById(`bg-${mode}`).value;
    document.body.style.color = document.getElementById(`text-${mode}`).value;
}

const createAndDisplayDiv = () => {
    const div = document.createElement("div");
    const title = document.createElement("h1");
    const p = document.createElement("p");
    title.textContent = document.getElementById("title").value;
    p.textContent = document.getElementById("text").value;
    div.append(title, p);
    div.style.border = "1px solid black";
    document.body.insertBefore(div, document.getElementById("current-div"));
    // clean the input
    document.getElementById("title").value = "";
    document.getElementById("text").value = "";
}
*/



//create theme variable
let theme = false;
//create function that will switch the theme
const switchMode = () => {
    //set theme to its opposite boolean
    theme = !theme;
    //if the theme is truthy then set theme to light, else set it to dark
    const mode = theme ? 'light' : 'dark';
    //set the background color to the color of the theme
    document.body.style.backgroundColor = document.getElementById(`bg-${mode}`).value;
    //set the background color to the color of the text
    document.body.style.color = document.getElementById(`text-${mode}`).value;
}


//this first variable will precise to the function that the image is on left
let imageOnLeft = true;
//create function the will create and display div with a title, a paragraph and an image input
const createAndDisplayDiv = () => {

    //CREATING VARIABLES
    //variable that create an element div, the main div that will contain the image, title and paragraph
    const divMain = document.createElement("div");
    //creating the div that holds the image
    const divImage = document.createElement("div");
    //creating the div that holds title and text
    const divTitleText = document.createElement("div");
    //variable that create an element h1
    const title = document.createElement("h1");
    //variable that create an element p
    const p = document.createElement("p");
    //cariable that create an element img
    const img = document.createElement("img");


    //INSERTING INPUTS
    //gets the value of the html title input
    title.textContent = document.getElementById("title").value;
    //gets the value of the html text input
    p.textContent = document.getElementById("text").value;
    //gets the value of the html image input
    img.src = document.getElementById("image").value;

    //CSS STYLING
    //sizing elements in their divs
    img.style.maxWidth = "100%";
    title.style.maxWidth = "100%";
    p.style.maxWidth = "100%";
    //sizing the two divs inside the main one
    divImage.style.maxWidth = "50%";
    divTitleText.style.maxWidth = "50%";
    //style border of divMain
    divMain.style.border = "3px solid black";
    //align the image div with the title/text div
    divMain.style.display = "flex";

    //PLACING HTML ELEMENTS
    //putting elements in divs
    divImage.append(img);
    divTitleText.append(title, p);

    //putting the two divs inside the main div
    divMain.append(divImage, divTitleText);
 
    

    //condition that will put image on left once on two
    //checking if the image is on left, the variable imageOnLeft is declared before the function
    if (imageOnLeft == true) {
        //interchanging the divs
        divMain.style.flexDirection = "row";
        //changing the value of the variable
        imageOnLeft = false;
    } else {
        //interchanging the divs
        divMain.style.flexDirection = "row-reverse";
        //changing the value of the variable
        imageOnLeft = true;
    }

    //SHOW RESULTS ON THE INTERFACE
    //will insert before the div that has the id = "current-div" in html file
    document.getElementById("create-new-section").insertBefore(divMain, document.getElementById("current-div"));


    //RESET THE INPUTS
    // clean the inputs
    document.getElementById("title").value = "";
    document.getElementById("text").value = "";
    document.getElementById("image").value = "";
}



//CREATING BUYING CHART
const buyingChart = document.getElementById('buyingChart');
let productsPrice = [0, 0, 0, 0]

const chart = new Chart(buyingChart, {
    type: 'bar',
    data: {
      labels: ['Coffee', 'Hot Chocolate', 'Tea', 'Water'],
      datasets: [{
        label: 'Sales',
        data: productsPrice,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



//CREATING FUNCTION THAT WILL ADD DATA IN THE CHART
function buyingProduct(product, price) {

    productsPrice +=;
    chart.update();
}
