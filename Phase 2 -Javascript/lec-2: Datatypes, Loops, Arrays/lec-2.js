// // Data Types:

// // string - '', "" , ``
// string = "Chaicode";

// // number - 20(integer), 2.5(float)
// let age = 20;

// // Boolean - true, false
// let isPaid = true;

// // null
// let favouriteClass = null;
// console.log(favouriteClass);

// // undefined
// let hometown;
// console.log(hometown);

// let skills = ["html", "css", "Javascript"];

// let studentProfile = {
//   name: "Rishi",
//   age: "20",
//   isPaid: "true",
//   skills: ["HTML", "CSS", "JS"],
//   favouriteClass: null,
// };

// console.log(typeof hometown);

// // server call , rainy , cloudy, sunny

// let weather = "sunny";

// if (weather === "rainy") {
//   console.log("Today's the weather is Raing");
// } else if (weather == "cloudy") {
//   console.log("Today's the weather is Cloudy");
// } else {
//   console.log("Today's weather is Sunny");
// }

// /* conditional syntax
// if (condition) {

// } else if (condition) {

// } else {
    
// }*/

// // Q- Pizza Size according to Number of Guest

// let numberofGuest = 2;
// let pizzaSize;
// // small <= 2
// // medium <= 5
// // large
// // Greedy Algorithm - A greedy algorithm builds a solution step-by-step by always choosing the best option available at the moment.
// // It doesn’t look ahead — it just picks what seems best right now and hopes it leads to the best overall result.
// if (numberofGuest <= 2) {
//   pizzaSize = "Small";
// } else if (numberofGuest <= 5) {
//   pizzaSize = "Medium";
// } else {
//   pizzaSize = "Large";
// }
// console.log(pizzaSize);

// // Grade Calculator
// //  A grade >= above 90%
// // B Grade >= above 80%
// // C Grade >= above 70%
// // D Grade >= above 60%
// // F Grade <= 59
// // Factory Template
// function calculateGrade(score) {
//   if (score >= 90) {
//     return "My Grade is A+";
//   } else if (score >= 80) {
//     return "My Grade is B+";
//   } else if (score >= 70) {
//     return "My Grade is C+";
//   } else if (score >= 60) {
//     return "My Grade is D+";
//   } else {
//     return "My Grade is F";
//   }
// }
// // method:1
// let grade = calculateGrade(80);
// console.log(grade);

// // method:2
// console.log(calculateGrade(70));

// // Array
// let fruits = ["apple", "mango", "banana"];
// let IntFruits = new Array("kiwi", "avacado", "dragon fruit");
// fruits[0] = "blueberry";
// fruits.push("new item");
// fruits.pop();
// fruits.sort();

// console.log(typeof fruits);
// console.log(fruits[2]);
// console.log(fruits.length);
// console.log(fruits);

// // Loops

// let teas = ["masala", "ginger", "oolong", "orange", "rose", "lemon"];
// // teas[index];
// teas.length; // 6
// let h = 6; // h <= 5 // h < 6

// // loop - iteration; use for
// // Bring the Variable
// // Tell the Limit
// // Increment / Decrement = > index++

// for (let index = 0; index <= teas.length; index++) {
//   console.log(`Teas at Index ${index}: ${teas[index]}`);
// }

// // SUM

// let myArray = [1, 4, 6, 3, 2];
// let AnotherArray = []

// function sumfactor(numbers){
//     let sum = 0;
//     for( let i = 0; i < numbers.length; i++){
//     sum = sum +  numbers[i]
//     }
//     return sum
// }
// let result = sumfactor(myArray)
// console.log(result)

// let anotherResult = sumfactor([3,2,3,4,5,6])
// console.log(`My result is ${anotherResult}`)