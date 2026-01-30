const button = document.querySelector('#jsButton');

button.addEventListener('click', () => {
   console.log('Button clicked!');
});

// const div = document.querySelector('.myDiv');

// div.addEventListener('click', () => {
//    console.log('Button clicked!');
// });



const input = document.querySelector('#textInput');

input.addEventListener('click', (event) => {
    
    
     alert('Button clicked!', event.key);
console.log('Клавиша нажата:', event.key);


});

const link = document.querySelector('#myLink');
link.addEventListener('click', (event) => {

    event.preventDefault();
    console.log('Link click prevented!');
}
)

const list = document.querySelector('#list');
list.addEventListener('click', (event) => {
    console.log('List item clicked:', event.target.textContent);
}
)





const input1 = document.getElementById("keyboardInput");

input1.addEventListener("keydown", function (event) {
    console.log("klavisha", event.keyCode);
    console.log("element", event.target);
});
