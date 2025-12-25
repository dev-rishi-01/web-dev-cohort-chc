Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};
// Adds a custom method 'describe' to all functions.
// 'this' refers to the function on which describe() is called.

// function greet(this is known as parameter)
function greet(name) {
  return `Hello ${name}`;
}
// 'name' is a **parameter** → variable used inside the function.

// greet.describe('this is known as Argument')
greet.describe("javascript");
// "javascript" is ignored because describe() doesn't accept parameters.
// Output → Function name is greet

function add(a, b) {
  return a + b;
}
// This is a **function declaration**.

const substract = function (a, b) {
  return a - b;
};
// This is a **function expression** because the function is stored in a variable.

const multiply = (a, b) => a + b;
// This is an **arrow function**.

function applyOperation(a, b, operation) {
  return operation(a, b);
}
// 'operation' is a **callback function** (a function passed as argument).

const result = applyOperation(5, 4, (x, y) => x / y);
// Passing an arrow function as callback.
// result = 5 / 4

function createCounter() {
  let count = 0; // 'count' is private (closure)
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
// Output: 1
// Because each call updates the internal 'count' variable using closure.

function onef() {
  let myName = "hitesh";
  // 'myName' exists ONLY inside this function (block scope)
}
console.log(myName);
// ❌ ERROR → myName is not defined
// Because 'myName' is declared inside onef(), so it cannot be accessed outside.
