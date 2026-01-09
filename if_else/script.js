
let age = 15;

if (age > 10) {
   console.log("chislo bolshe 10.");
} else {
   console.log("cchislo menshe ili ravno 10");
};



let userConfirmed = confirm("hotite udalit fail?");

if (userConfirmed) {
   console.log("fail udalen");
} else {
   console.log("udalenie otmeneno");
};



let score = parseInt(prompt("vvedite vash vozrast"));

if (score < 18) {
   console.log("vy eshye podrostok");
} else if (score  < 30) {
   console.log("vy molodoy vzroslyi");
} else (score > 30) 
   console.log("vy vzroslyi ");





let  chislo = parseInt(prompt("vvedite chislo"));
let result = (chislo%2 == 0   ) ? "chetnoe" : "ne chetnoe";
console.log(result);


let chislo1 = parseInt(prompt("vvedite chislo1"));
let chislo2 = parseInt(prompt("vvedite chislo2"));

if (chislo1 == chislo2) {console.log("chisla ravni");}

else {
   let result1 = (chislo1 > chislo2) ? "pervoe chislo bolshe" : "vtoroe chislo bolshe";
   console.log("result1: " + result1);
}





let fruit = "3";
let message;

switch (fruit) {
   case "1":
   case "2":
       message = "zima";
       break;


   case "3":
    case "4":
  case "5":
    message = "vesna";
    break;



   case "6":
    case "7":
  case "8":
message = "leto";
break;
    case "9":
    case "10":
  case "11":
message = "osen";
break;
case "12":
    message = "zima";
    break;
}
console.log(message); 

