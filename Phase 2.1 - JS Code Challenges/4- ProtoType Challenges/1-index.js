// You need to implement the Animal constructor function and its prototype method

// Constructor function
// function Animal(name) {
// Initialize name property
//   this.name = name;
// }

// Add method to the prototype
// Animal.prototype.makeSound = function () {
//   return "Some generic sound";
// };

// Create an object from the constructor
// const animal1 = new Animal("Lion");
// const animal2 = new Animal("Tiger");

// Print values to the console
// console.log(animal1.name);            // Output: Lion
// console.log(animal1.makeSound());     // Output: Some generic sound

// console.log(animal2.name);            // Output: Tiger
// console.log(animal2.makeSound());     // Output: Some generic sound

function Animal(name) {
  this.name = name;
}
Animal.prototype.makeSound = function () {
  return "Some generic sound";
};
const Animal1 = new Animal("Lion");
console.log(Animal.name);
console.log(Animal1.makeSound());
