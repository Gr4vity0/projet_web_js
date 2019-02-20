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


//---------> script modal
let connection = document.getElementById('modal-connection');
let inscription = document.getElementById('modal-inscription');
let bouttonInscription = document.getElementById('btn-inscription');
let bouttonconnection = document.getElementById('btn-seconnecter');

inscription.style.display = "none";

//script modal boutton inscription
bouttonInscription.addEventListener('click', () => {
    connection.style.display = "none";
    inscription.style.display = "block"
})

//script modal boutton connection
bouttonconnection.addEventListener('click', () =>{
    connection.style.display = "block";
    inscription.style.display = "none";
})



//--------> script navbar
let navbar = document.getElementById('maNav');
let monh1 = document.getElementById('emporiumh1');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    navbar.className = 'navbar navbar-expand-lg fixed-top navbar-light transparent bg-light py-4';
    monh1.className = 'text-left font-weight-bold' 

  } else if (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500){
    navbar.className = 'navbar navbar-expand-lg navbar-light transparent';
    monh1.className = 'text-left font-weight-bold d-none' 
  }
}