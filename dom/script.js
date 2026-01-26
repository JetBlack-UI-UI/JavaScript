let header = document.getElementById("message");
header.textContent = "dobro pozhalovat v javassript";


let box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
   box[i].style.backgroundColor = "green";
}


const firstMenuItem = document.querySelector('#text');
firstMenuItem.textContent = 'Welcome to javaascript!';


const boxedParagraphs = document.querySelectorAll('.box');

boxedParagraphs.forEach(paragraph => {
   paragraph.style.color = 'blue';
});


const items = document.querySelectorAll('p.highlight');
for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'red';
}