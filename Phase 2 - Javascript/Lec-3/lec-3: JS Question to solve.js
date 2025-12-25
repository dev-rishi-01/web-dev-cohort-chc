// ## 💻 JavaScript Array Problems

// Problem1: Create an array containing different types of teas.

const Teas = [
  "Green Tea",
  "Black Tea",
  "Oolang Tea",
  "White Tea",
  "Herbals Tea",
];
// console.log(Teas);

// Problem2: Add "Chamomile Tea to the existing list of teas

// Teas.push("Chamomile Tea");

// Problem3: Remove "Oolong Tea" from the list of teas.

// const index = Teas.indexOf("Oolang Tea");
// if (index > -1) {
//   Teas.splice(index, 1);
// }
// console.log(Teas);
// This code finds "Oolang Tea" in the Teas array and removes it if it exists.

// Problem4: Filter the list to only include teas that are caffeinated.

// const caffeinatedTeas = Teas.filter((Tea) => Tea !== "Herbal Tea");
// console.log(caffeinatedTeas);

// Problem5: Sort the list of teas in alphabetical order.

// console.log(Teas.sort());

// Problem6: Use a for loop to print each type of tea in the array.

// for (let i = 0; i < Teas.length; i++) {
//   console.log(Teas[i]);
// }

// Problem7: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").

// let myCaffeinatedTeas = 0;
// for (let i = 0; i < Teas.length; i++) {
//   if (Teas[i] != "Herbal Tea") {
//     myCaffeinatedTeas++;
//   }
// }
// console.log(myCaffeinatedTeas);

// Problem8: Use a for loop to create a new array with all tea names in uppercase.

// const upperTeas = [];
// for (let i = 0; i < Teas.length; i++) {
//   upperTeas.push(Teas[i].toUpperCase());
// }
// console.log(upperTeas)

// Problem9: Use a for loop to find the tea name with the most characters.

// let longestTea = "";
// for (let index = 0; index < Teas.length; index++) {
//   if (Teas[index].length > longestTea.length) {
//     longestTea = Teas[index];
//   }
// }
// console.log(longestTea); // output: Herbals Tea

// Problem10: Use a for loop to reverse the order of teas in the array.

const reversedArray = [];
for (let i = Teas.length - 1; i >= 0; i--) {
  reversedArray.push(Teas[i]);
}
console.log(reversedArray);

// Output
// [ 'Herbals Tea', 'White Tea', 'Oolang Tea', 'Black Tea', 'Green Tea' ]
