// Objects - helps us represent real world entities
// Eg: a remote , mouse or keyboard ( color, type of keyboard, brand, price , weight,etc)
// Object is a entities which has properties and some functionality.
// Functionality is known as methods in OOP.

// Properties are attributes (color, weight, etc)
// Methods are like Actions  and functions.
// Diff between function and method
// If a function is standalone then we call it a fn
// If the function is a part of the Object then we call it Method.
// eg: struct (keyword in rust and C++)
// class (keyword in python and javascript)
// Object are implimented differently in every language differently.
// We created JS to created interactivity on the Browser.
// JS has backward compatiability
// ES6- ECMAScript 6

// 1- example
// const obj1 = {
//   fname: "",
//   lname: "Garg",
//   getFullname: function () {
//     if (this.lname !== undefined) {
//       return `${this.lname} ${this.fname}`;
//     }
//   },
// };
// const obj2 = {
//   fname: "Anirudh",
//   lname: "",
//   getFullname: function () {
//     if (this.lname !== undefined) {
//       return `${this.lname} ${this.fname}`;
//     }
//   },
// };

// console.log(obj1.getFullname());
// console.log(obj2.getFullname());

// 2- Class
// Constructor -
class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullname() {
    return `${this.fname} ${this.lname} `;
  }
}

const p1 = new Person("Piyush", "Garg");
const p2 = new Person("Akash", "Kadlag");

console.log(p1.getFullname());
console.log(p2.getFullname());
