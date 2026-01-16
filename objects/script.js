let person = {
   name: "Deal",
   surnames: "doe",
   age: 18,
  city: "Almaty"
};
console.log(person);
console.log(person.name);  
console.log(person.surnames);
console.log(person.age);
console.log(person.city);
person.city = "Astana";
console.log(person.city);


person.greeting = function() {
   console.log("Hello my name is " + this.name +", i am " + this.age + " years old");

}
console.log(person.greeting());



let obj1 = { a: 10, b: 20 }
let obj2 = { a: 10, b: 20 }

obj1 == obj2
obj1 === obj2
console.log(obj1 == obj2);

console.log(obj1 === obj2);
//ne pokazyvaet true potomuchto u nih raznye ssilki v pamyati




let calculator = {
    a: 3,
    b: 4,
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
};
console.log(calculator.sum());
console.log(calculator.multiply());


const car = {
    model: "i8",
    brand: "BMW",
}
car.model = "i7"
console.log(car);
//constantym stanovitsya peremennaya car no ne model i brand


let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    details: {
        year: 1925,
        pages: 218,
    }
}
let book2 = Object.assign(book);
book.details.year = 2026;


console.log(book2);
//detail on hranitsya vvide sstilki i poetomu izmeneniya vidny v oboih obektah
console.log(book);