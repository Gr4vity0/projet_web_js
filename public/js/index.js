//Script pour changer en mode nuit (inversion blancs noirs avec bouttons)

let bgHeader = document.getElementsByTagName('header')[0];

let input1 = document.getElementById('btn-noir');

let input2 = document.getElementById('btn-blanc');

let testItem = document.querySelectorAll('.nav-link');


input1.addEventListener('click', () => {
    bgHeader.style.backgroundColor = "black"; 
    bgHeader.style.color = "white"; 
    for(let i = 0; i < testItem.length; i++){
        testItem[i].style.color = "white";
    }});

input2.addEventListener('click', () => {
    bgHeader.style.backgroundColor = "white"; 
    bgHeader.style.color = "black";
    for(let i = 0; i < testItem.length; i++){
        testItem[i].style.color = "black";
    }});


//script espace de connection et inscription


// Epace de connection qui apparait

let btnConnection = document.getElementById('btn-connection');

let maDivInscription = document.getElementById('inscription-form');

connection = () =>{
    let maDiv = document.getElementById('test2');

    maDiv.style.display = "none";

    maDivInscription.style.display ="none"

    if (maDiv.style.display === "none") {
        maDiv.style.display = "block";
    } else {
        maDiv.style.display = "none";
    }   
}

btnConnection.addEventListener('click', connection);


//Espace d'inscription qui apparait et espace de connection qui disparait



