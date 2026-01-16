
const greet = function(world) {
   console.log("Hello, " + world + "!");
};

greet("world"); 



function sayHello(name) {
   console.log("Hello, " + name + "!");
}


sayHello("Bekazat"); 


function sayHello(name1) {
   console.log("Hello, " + name1 + "!");
}


sayHello("Alexander"); 



function sayHello(name2) {
   console.log("Hello, " + name2 + "!");
}


sayHello("Ayana"); 







function isEven (chislo) {let result = (chislo%2 == 0   ) ? "true" : "false";

return result;



}


console.log(isEven (4));
console.log(isEven (7));







let a = 20;
let b = 20;

function checkNums(a, b) {

if (a > b) 
{return a;

}
else if 
    (a < b)
{return b;
}
else 
{return "ravny";

}
}




console.log(checkNums(a, b));








function square(n) {
    let result = n * n;
    return result;
}

console.log(square(5));









function cube(n) {
    let result = square(n) * n;
    return result;
}

console.log(cube(5));




function sum(s, t,) {


    return s + t;
}
console.log(sum(3, 7));




 sum1 = (s, t,) => {


    return s + t;
}
console.log(sum1(3, 7));



function getInitials(firstName, lastName) 
{
    return firstName[0]+ "." + lastName[0]+ ".";
}
console.log(getInitials("Deal", "Doe"));