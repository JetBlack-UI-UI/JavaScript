
let fruits = ["Apple", "Banana", "orange", "Груша"];
let lastFruit = fruits[fruits.length - 1];
let firstFruit = fruits.shift();
console.log(fruits);
console.log(fruits[0]);
console.log(lastFruit); 
console.log(firstFruit);
fruits.pop();
fruits.forEach((fruit)=>console.log(fruit));


//zadanie 5
const fruitsq = ["yabloko", "grusha"];

const lengths = fruitsq.map(fruit => fruit.length);

console.log(lengths);




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



//zadanir 6
const evenNumbers = numbers.filter(num => num % 2 === 0);
//koniec zadania 6




//zadanie7
let sum = numbers.reduce((acc, num) => acc + num, 0);
//koniec zadania 7




//zadanie8
const foundNumber = numbers.find(number => number > 5);
console.log(foundNumber);
//koniec zadania 8


//zadanie 7
console.log(sum);
//koniec zadania 7


//zadanie 6
console.log(evenNumbers); 
//koniec zadania 6

//zadanie 9
let arr1 = [1, 2, 3]

let arr2 = [4, 5, 6]

let combinedArr = arr1.concat(arr2);

console.log(combinedArr); 
//koniec zadania 9




//zadanie 10
let fruitsqq = ["Apple", "Banana", "Cherry"];
let hasBanana = fruitsqq.includes("Banana");
console.log(hasBanana);
//koniec zadania 10


//zadanie 11
let fruitsqqq = ["Apple", "Banana", "Cherry", "dragonfruit", "mango"];
fruitsqqq.reverse();
console.log(fruitsqqq);