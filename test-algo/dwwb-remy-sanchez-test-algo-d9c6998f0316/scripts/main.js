/*
//theme
let theme = false;
//body
const body = document.querySelector("body");
//light mode
const color1 = "#ffffff";
//dark mode
const color2 = "#000000";
//set function
const switchMode = () => {
    //if theme == light
    if (theme == true) {
        //then body color 1 and body police color 2
        body.style.backgroundColor = color1;
        body.style.color = color2;
        theme = false;
        //else
    } else {
        //body color 2 and body police color 1 and set theme == dark
        body.style.backgroundColor = color2;
        body.style.color = color1;
        theme = true;
    };
}; 
*/


/*
//theme
let theme = true;

//body
const body = document.querySelector("body");

//light mode
const color1 = "#ffffff";
//dark mode
const color2 = "#000000";

//function
const switchMode = () => {
    //assign opposite boolean to theme
    theme = !theme;

    //if background color = theme, then switch color1, else color2
    body.style.backgroundColor = theme ? color1 : color2;
    //if text color = theme, then color2 else color1
    body.style.color = theme ? color2 : color1;
};
*/



const body = document.querySelector("body");

//fonction
const createAndDisplayForm = () => {
    //create 1st div
    const createDiv = document.createElement("div1");
    //add attributes to 1st div
    createDiv.style.border = "4px solid";
    createDiv.setAttribute("id", "new-form");
    //add title inside div
    const addTitle = document.createElement("input");
    createDiv.appendChild(addTitle);
    //add text inside div
    const addParagraph = document.createElement("textarea");
    createDiv.appendChild(addParagraph);



    //create 2nd div
    const createDiv2 = document.createElement("div2");
    //add submit button
    const addSubmitButton = document.createElement("button");
    //place button
    createDiv2.appendChild(addSubmitButton);
    createDiv2.setAttribute("id", "new-form");

    console.log(createDiv);
    console.log(createDiv2);



    /*
    const paragraphText = document.createTextNode("");
    const titleText = document.createTextNode("");
    //display div
    const div = document.querySelector("div");
    const currentDiv = document.getElementById("currentDiv");
    body.insertBefore(div,currentDiv);
    */
};



