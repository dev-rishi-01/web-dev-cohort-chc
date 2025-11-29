// Example - 1
// function greet(name){
//     console.log(`Hello ${name}`);
// };
// greet("Hitesh Sir");
// greet("Piyush Sir");

// Example - 2

let globalVar = "I am global";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockScopeVar = "I am Blocked-scoped";
  console.log(blockScopeVar);
}
// modifyGlobal();

// Example - 3

let config = (function () {
  let settings = {
    theme: "dark",
  };
  return settings;
})();

// Example - 4

// let person1 = {
//   name: "ravi",
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// let person2 = {
//   name: "hitesh",
// };
// // person1.greet.call(person2);

// // Bind returns a new function
// const bindGreet = person1.greet.bind(person2);
// // bindGreet()
// console.log(bindGreet())

// Example 5:

// let person1 = {
//   personsName: "ravi",
//   greet: function () {
//     console.log(`Hello, ${this.personsName}`);
//   },
// };

// let person2 = {
//   personsName: "hitesh",
// };
// person1.greet.call(person2);

// setTimeOut
// Example - 1
// console.log('Hello From JS')

// setTimeout(() => {
//   console.log("I am Delayed");
// }, 0);

// console.log('Bye Bye')

// Example -2

// const obj = {
//   personName: "Mukul",
//   greet: function () {
//     console.log(`Hello. ${this.personName}`);
//   },
// };

// console.log("Hello from JS");
// setTimeout(obj.greet, 2 * 1000); // this line means minimum this code will wait for 10s and max there is no time duration.
// console.log("Bye Bye");

// Example: 3
// const obj = {
//   personName: "Bro",
//   greet: function () {
//     console.log(`Hello ${this.personName}`);
//   },
// };
// console.log("Hi");
// setTimeout(obj.greet.bind(obj), 2 * 1000);
// console.log("Bye");

// Example:4  - Promises
console.log("Hi");
setTimeout(() => console.log("Hello after 2seconds"), 0 * 1000);

Promise.resolve().then(() => console.log("Promise Resolve Hogya"), 0);
console.log("Bye");

// What is starvation - Mirco task queue

// hoisting
// Temporal dead zone


