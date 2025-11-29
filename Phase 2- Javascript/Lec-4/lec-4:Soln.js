// 💻 JavaScript Object Problems

//Problem1: Create an object representing a type of tea with properties for name, type, and caffeine content.

const teas = {
  name: "Lemon tea",
  type: "Green",
  caffine: "low",
};

//Problem2: Access and print the name and type properties of the tea object.

console.log(teas.name);
console.log(teas["type"]);

//Problem3: Add a new property origin to the tea object.
teas.origin = "Bharat";

//Problem4: Change the caffeine level of the tea object to "Medium".
teas.caffine = "Medium";

//Problem5: Remove the type property from the tea object.
delete teas.type;

//Problem6: Check if the tea object has a property origin.
console.log("origin" in teas);

//Problem7: Use a for...in loop to print all properties of the tea object.

for (const key in teas) {
  console.log(key + ": " + teas[key]);
}

//Problem8: Create a nested object representing different types of teas and their properties.
const myTeas = {
  greentea: {
    name: "Green Tea",
  },
  blackTea: {
    name: "Black Teas",
  },
};
console.log(myTeas);

// Problem9: Create a copy of the tea Object

const teasCopy = {
    ...teas
}
console.log(teasCopy)

// Problem10: Add a custom method describe to the tea object that returns a description string:



// Problem11: Merge two objects representing different teas into one.