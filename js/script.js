
//zadanie1
let age = 25;
console.log(age); // Вывод: 25

age = 56; // Изменение значения допустимо
console.log(age); // Вывод: 56

// let age = 32; // Ошибка: переменная уже объявлена в этой области видимости



const birthYear = 2011;
console.log(birthYear); // Вывод: 2011

// birthYear = 1991; // Ошибка: присваивание значения константе
 //const birthYear = 1992; // Ошибка: переменная уже объявлена в этой области видимости

 
 //zadanie2

 //var ustarevshi1 potomuchto ego perestali ispolzovat iz za problem s bezopashnostyu i oblastyami vidimosti.
    //let i const predpochitayut ispolzovat potomu chto oni imeyut blokovuyu oblast vidimosti i obespechivayut luchshuyu bezopasnost koda.
// var eto tozhe samoe chto i let no on pokazyvaet svoe znachenie vsem.



//zadanie3
let notANumber = NaN;
let invalidOperation = 0 / 0; // Результат: NaN
console.log(notANumber); // Вывод: NaN
console.log(invalidOperation); // Вывод: NaN

console.log(typeof notANumber); // Вывод: "number"
console.log(typeof invalidOperation); // Вывод: "number"




let str = "1234";
let num11 = Number(str); // Использование функции Number()
console.log(num11); // Вывод: 1234

let intStr = "1234s.45";
let intNum = parseInt(intStr); // Использование функции parseInt()
console.log(intNum); // Вывод: 1234



let num2 = 12345;
let strNum = String(num2); // Использование функции String()
console.log(strNum); // Вывод: "12345"

let bool = true;
let strBool = bool.toString(); // Использование метода toString()
console.log(strBool); // Вывод: "true"




let isValid = Boolean(1); // true
console.log(isValid);

let isEmpty = Boolean(''); // false
console.log(isEmpty);


let nullValue = null;
let undefinedValue = undefined;

console.log(String(nullValue)); // Вывод: "null"
console.log(parseInt(nullValue)); // Вывод: nan

console.log(String(undefinedValue)); // Вывод: "undefined"
console.log(Number(undefinedValue)); // Вывод: NaN

let number = 20;
number = "30";
console.log(number); // Вывод: "30"
//znhachenie peremennyh mozhet but raznymi tipami dannymi







let userInput = parseInt ( prompt("Vvedite chislo:"));
console.log("Vvedennoe chislo:", userInput);


