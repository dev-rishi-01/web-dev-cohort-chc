let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"];

// console.log(chaiTypes[2]);

// console.log(`Total chai Types: ${chaiTypes.length}`);

chaiTypes.push(`Herbal Tea`); // inserts the new element in the last of the array.
// Array k end mai value ko add kardeeyta hai

// chaiTypes.pop(`Herbal chai`) // remove the element you want
// const data = chaiTypes.pop();
// console.log(data);

let index = chaiTypes.indexOf("Green Tea");
// console.log(index)

if (index != -1) {
  chaiTypes.splice(index, 1);
}
// console.log(chaiTypes);

chaiTypes.forEach((chai, index) => {
  //   console.log(`${index + 1}: ${chai}`);
});

let moreChaiTypes = ["Oolong Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

let newChaiTypes = [...chaiTypes, "Chamolina Tea"];

// console.log(newChaiTypes);

// Object literals

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown Sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil water, add tea leaves, milk, sugar, and spices",
};

console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiReceipe = {
  ...chaiRecipe,
  instruction: "Boil water, add tea leaves, milk, sugar, spice with some love",
};

// console.log(updatedChaiReceipe);
// Mapping in Objects

let { name, myingredients } = chaiRecipe;
let [firstChai, secondChai] = chaiTypes;
// let [value, setValue] = useState();

console.log(myingredients);
console.log(secondChai);
