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
let btnInscription = document.getElementById('btn-inscription');

let maDivConnection = document.getElementById('connection-form')
let maDivInscription = document.getElementById('inscription-form');

let formulaire = document.getElementById('formulaire');
formulaire.style.display = "none";

connection = () =>{

    if (formulaire.style.display === "none") {
        formulaire.style.display = "block";
    }

    maDivConnection.style.display = "block"
    maDivInscription.style.display = "none"
}

inscription = () =>{
        
    if (maDivInscription.style.display === "none"){
        maDivInscription.style.display = "block";
    }
    
}


btnConnection.addEventListener('click', connection);
btnInscription.addEventListener('click', inscription);

//Espace d'inscription qui apparait et espace de connection qui disparait

// let boutonInscription = document.getElementById('inscription');
// console.log(boutonInscription)
// let maDivInscription = document.getElementById('inscription-form');
// console.log(maDivInscription)

// inscription = () =>{
//     let maDivInscription = document.getElementById('inscription-form');
//     maDivInscription.style.display = "none"
//     if (maDivInscription === "none") {
//         maDivInscription.style.display = "block";
//     } else {
//         maDivInscription.style.display = "none"
//     }
// }

// boutonInscription.addEventListener('click', inscription)