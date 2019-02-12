let bgHeader = document.getElementsByTagName('header')[0];
console.log(bgHeader);

let input1 = document.getElementById('btn-noir');
console.log(input1);

let input2 = document.getElementById('btn-blanc');
console.log(input2);

let testItem = document.querySelectorAll('.nav-link');
let testItem2 = [...testItem];

input1.addEventListener('click', () => {
    bgHeader.style.backgroundColor = "black"; 
    bgHeader.style.color = "white"; 
    for(let i = 0; i < testItem2.length; i++){
        testItem2[i].style.color = "white";
    }});

input2.addEventListener('click', () => {
    bgHeader.style.backgroundColor = "white"; 
    bgHeader.style.color = "black";
    for(let i = 0; i < testItem2.length; i++){
        testItem2[i].style.color = "black";
    }});

