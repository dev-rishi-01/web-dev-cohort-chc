let name = "hitesh";
const pi = 3.14;

// Data Types
let number = 42; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let nothing = null; // Object
console.log(typeof nothing);

let undefinedVar = undefined; // undefined
console.log(undefinedVar);

let symbolVar = Symbol(); // Symbol
console.log(symbolVar);

let person = { name: "hitesh", age: 19, isStudent: true };

let num = "42a"; // NaN - not a number
// let convertedNum = Number(num);  // this is the standard way of doing
// let convertedNum = +num
let convertedNum = parseInt(num);

let str = 123;
let convertedString = String(str);

(4 + (4 - 6)) * 3;
// Code readability is the top most priority.

let a = 10;
let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

let x = 5;
let y = 10;

console.log(x == y); // false: // Equal to == this is a comparison operator
console.log(x != y); // Not Equal to
console.log(x > y); // false greater than
console.log(x < y); // true: less than
console.log(x <= y); // true:   less than equal to

// console.log(Math.max(5, 10));
// console.log(Math.min(5, 10));
// console.log(Math.random());
// console.log(Math.random() * 10);

// write a function to generate random code from 1 - 10.

let firstname = "Hitesh";
let lastname = "Choudhary";
let fullname = firstname + " " + lastname;
console.log(fullname);

let message = "Hello World!";
console.log(message.toUpperCase());
console.log(message.indexOf("W"));
console.log(message.slice(0, 5));

let myName = "Hitesh";

// This is known template Literals
let greeting = `Hello ${myName}, from chaicode`;
console.log(greeting)