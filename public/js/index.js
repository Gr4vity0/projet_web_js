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


